import { NextResponse } from "next/server";
import Stripe from "stripe";

export const dynamic = "force-dynamic";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);


export async function POST() {
  try {
    const priceId = process.env.STRIPE_BUNDLE_PRICE_ID;

    if (!priceId) {
      console.error("❌ STRIPE_BUNDLE_PRICE_ID is not set");
      return NextResponse.json(
        { error: "Bundle price is not configured" },
        { status: 500 }
      );
    }

    const siteUrl =
      process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

    console.log("PRICE ID:", priceId);

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${siteUrl}/thank-you?product=bundle&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/bundle?canceled=1`,
      allow_promotion_codes: true,
      billing_address_collection: "auto",
      metadata: {
        product_code: "bundle",
        price_id: priceId,
      },
    });

    return NextResponse.redirect(session.url!, { status: 303 });
  } catch (error) {
    console.error("❌ Error creating Stripe checkout session:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
