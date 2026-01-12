// src/app/api/stripe/webhook/route.ts
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;
const STRIPE_WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET;

if (!STRIPE_SECRET_KEY) throw new Error("Missing STRIPE_SECRET_KEY");
if (!STRIPE_WEBHOOK_SECRET) throw new Error("Missing STRIPE_WEBHOOK_SECRET");

// Lock env vars into the exact types we need at runtime + for TS
const STRIPE_KEY: string = STRIPE_SECRET_KEY;
const WEBHOOK_SECRET: string = STRIPE_WEBHOOK_SECRET;

const stripe = new Stripe(STRIPE_KEY);

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  { auth: { persistSession: false } }
);

type Tier = "starter" | "toolkit" | "bundle";

function resolveTierFromPriceId(priceId: string | null): Tier | null {
  if (!priceId) return null;

  if (process.env.STRIPE_STARTER_PRICE_ID && priceId === process.env.STRIPE_STARTER_PRICE_ID) return "starter";
  if (process.env.STRIPE_TOOLKIT_PRICE_ID && priceId === process.env.STRIPE_TOOLKIT_PRICE_ID) return "toolkit";
  if (process.env.STRIPE_BUNDLE_PRICE_ID && priceId === process.env.STRIPE_BUNDLE_PRICE_ID) return "bundle";

  return null;
}

async function resolveTierFromDb(priceId: string): Promise<Tier | null> {
  const { data, error } = await supabaseAdmin
    .from("products")
    .select("code")
    .eq("stripe_price_id", priceId)
    .limit(1)
    .maybeSingle();

  if (error || !data?.code) return null;

  if (data.code === "full") return "bundle";
  if (data.code === "starter" || data.code === "toolkit" || data.code === "bundle") return data.code;

  return null;
}

export async function POST(req: Request) {
  const sig = req.headers.get("stripe-signature");
  if (!sig) {
    return NextResponse.json({ error: "Missing Stripe signature" }, { status: 400 });
  }

  const rawBody = await req.text();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, WEBHOOK_SECRET);
  } catch (err: any) {
    console.error("❌ Stripe signature verification failed:", err?.message || err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  try {
    if (event.type !== "checkout.session.completed") {
      return NextResponse.json({ received: true }, { status: 200 });
    }

    const session = event.data.object as Stripe.Checkout.Session;

    const customerEmail =
      session.customer_details?.email ||
      session.customer_email ||
      null;

    const amountPaidCents =
      typeof session.amount_total === "number" ? session.amount_total : null;

    const currency = session.currency ?? "usd";

    // Prefer client_reference_id = auth.uid() in your checkout routes
    const userId = (session.client_reference_id as string | null) ?? null;

    // Prefer setting metadata.price_id in checkout session creation
    const priceId =
      session.metadata?.price_id ||
      session.metadata?.stripe_price_id ||
      null;

    let tier = resolveTierFromPriceId(priceId);
    if (!tier && priceId) tier = await resolveTierFromDb(priceId);

    if (!tier) {
      console.error("❌ Could not resolve tier. priceId:", priceId, "session:", session.id);
      return NextResponse.json({ error: "Unable to resolve tier" }, { status: 400 });
    }

    // 1) purchases (idempotent)
    const { error: purchaseError } = await supabaseAdmin
      .from("purchases")
      .upsert(
        {
          user_id: userId,
          email: customerEmail,
          amount_paid_cents: amountPaidCents,
          currency,
          stripe_customer_id: (session.customer as string) ?? null,
          stripe_price_id: priceId,
          product_tier: tier,
          stripe_checkout_session_id: session.id,
          stripe_session_id: session.id,
          stripe_payment_intent_id: (session.payment_intent as string) ?? null,
        },
        { onConflict: "stripe_checkout_session_id" }
      );

    if (purchaseError) {
      console.error("❌ purchases upsert failed:", purchaseError);
      return NextResponse.json({ error: "purchase upsert failed" }, { status: 500 });
    }

    // 2) entitlements + 3) profiles.product_tier
    if (userId) {
      const now = new Date().toISOString();

      const { error: entError } = await supabaseAdmin
        .from("entitlements")
        .upsert(
          {
            user_id: userId,
            tier,
            active: true,
            source: "stripe",
            stripe_customer_id: (session.customer as string) ?? null,
            stripe_session_id: session.id,
            granted_at: now,
            updated_at: now,
          },
          { onConflict: "user_id,tier" }
        );

      if (entError) {
        console.error("❌ entitlements upsert failed:", entError);
        return NextResponse.json({ error: "entitlement upsert failed" }, { status: 500 });
      }

      const { error: profileError } = await supabaseAdmin
        .from("profiles")
        .update({ product_tier: tier })
        .eq("id", userId);

      if (profileError) console.error("❌ profiles tier update failed:", profileError);
    } else if (customerEmail) {
      const { error: profileError } = await supabaseAdmin
        .from("profiles")
        .update({ product_tier: tier })
        .eq("email", customerEmail);

      if (profileError) console.error("❌ profiles tier update (email) failed:", profileError);
      else console.warn("⚠️ Updated profile by email. Prefer client_reference_id=auth.uid() in checkout routes.");
    }

    return NextResponse.json({ received: true }, { status: 200 });
  } catch (err: any) {
    console.error("❌ Webhook handler error:", err?.message || err);
    return NextResponse.json({ error: "Webhook handler error" }, { status: 500 });
  }
}
