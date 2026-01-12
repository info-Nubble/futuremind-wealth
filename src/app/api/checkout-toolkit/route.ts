// src/app/api/checkout-toolkit/route.ts
import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export async function POST(req: NextRequest) {
  try {
    const origin =
      process.env.NEXT_PUBLIC_SITE_URL ||
      req.headers.get("origin") ||
      "http://localhost:3000";

    const priceId = process.env.STRIPE_TOOLKIT_PRICE_ID;
    if (!priceId) {
      return NextResponse.json(
        { error: "Missing STRIPE_TOOLKIT_PRICE_ID" },
        { status: 500 }
      );
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${origin}/starter-kit/thank-you?session_id={CHECKOUT_SESSION_ID}&product=toolkit`,
      cancel_url: `${origin}/starter-kit/thank-you?upsell=canceled`,
      allow_promotion_codes: true,
      metadata: {
        product: "FutureMind Wealth Complete AI Money Toolkit",
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error("Stripe toolkit checkout error:", error);
    return NextResponse.json(
      { error: error.message || "Something went wrong" },
      { status: 500 }
    );
  }
}
