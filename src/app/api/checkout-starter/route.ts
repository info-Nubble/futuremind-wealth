import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { createSupabaseServerClient } from "@/lib/supabaseServer"; // adjust path if yours differs

export async function POST(req: NextRequest) {
  try {
    if (!stripe) {
      return NextResponse.json(
        { error: "Stripe is not configured. Check STRIPE_SECRET_KEY." },
        { status: 500 }
      );
    }

    const priceId = process.env.STRIPE_STARTER_PRICE_ID;
    if (!priceId) {
      return NextResponse.json(
        { error: "Missing STRIPE_STARTER_PRICE_ID in .env.local." },
        { status: 500 }
      );
    }

    // Determine origin for redirects
    const origin =
      req.headers.get("origin") ||
      process.env.NEXT_PUBLIC_SITE_URL ||
      "http://localhost:3000";

    // If user is logged in, attach their auth.uid() so webhook can update profiles by id
    let clientReferenceId: string | null = null;
    try {
      const supabase = await createSupabaseServerClient();
      const { data } = await supabase.auth.getUser();
      clientReferenceId = data?.user?.id ?? null;
    } catch {
      // ok if not logged in
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [{ price: priceId, quantity: 1 }],

      // Critical: link purchase to a user id if available
      client_reference_id: clientReferenceId ?? undefined,

      success_url: `${origin}/thank-you?product=starter&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/starter-kit`,

      // Critical: give webhook a deterministic mapping without needing line items expansion
      metadata: {
        tier: "starter",
        price_id: priceId,
        product: "ai_income_starter_kit",
      },
    });

    if (!session.url) {
      return NextResponse.json(
        { error: "Stripe did not return a checkout URL." },
        { status: 500 }
      );
    }

    return NextResponse.redirect(session.url, { status: 303 });
  } catch (err: any) {
    console.error("[checkout-starter] Stripe error:", err);
    return NextResponse.json(
      { error: err?.message || "Unable to create checkout session." },
      { status: 500 }
    );
  }
}
