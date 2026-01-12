// app/api/checkout/route.ts
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);


const priceMap: Record<string, string> = {
  starter: process.env.STRIPE_STARTER_PRICE_ID!,
  toolkit: process.env.STRIPE_TOOLKIT_PRICE_ID!,
  full: process.env.STRIPE_FULL_PRICE_ID!,
};

function cancelPathFor(product: string) {
  // Send users back to the most relevant sales page
  if (product === "starter") return "/starter-kit?canceled=1";
  if (product === "toolkit") return "/starter-kit/toolkit?canceled=1";
  return "/bundle?canceled=1";
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const product = body?.product as keyof typeof priceMap;
    const email = (body?.email as string | undefined) ?? undefined;
    const userId = (body?.userId as string | undefined) ?? "";

    if (!product || !priceMap[product]) {
      return NextResponse.json({ error: "Invalid product" }, { status: 400 });
    }

    // Prefer explicit site URL, fall back to request origin (works in previews too)
    const siteUrl =
      process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
      req.nextUrl.origin;

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      allow_promotion_codes: true,

      line_items: [{ price: priceMap[product], quantity: 1 }],

      // If you later switch to saved customers, this can stay as a fallback
      ...(email ? { customer_email: email } : {}),

      // 🔥 Important: ties Stripe checkout to the authenticated Supabase user
      client_reference_id: userId || undefined,

      metadata: {
        product_code: String(product),
        user_id: userId, // ✅ normalized key
      },

      success_url: `${siteUrl}/portal?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}${cancelPathFor(String(product))}`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error("Error creating checkout session", err);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
