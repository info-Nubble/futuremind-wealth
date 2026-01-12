import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import jwt from "jsonwebtoken";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20",
});

const PRICE_TO_TIER: Record<string, "starter" | "toolkit" | "bundle"> = {
  [process.env.STRIPE_PRICE_STARTER!]: "starter",
  [process.env.STRIPE_PRICE_TOOLKIT!]: "toolkit",
  [process.env.STRIPE_PRICE_BUNDLE!]: "bundle",
};

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const sessionId = url.searchParams.get("session_id");

  if (!sessionId) {
    return NextResponse.redirect(new URL("/checkout/bundle", req.url));
  }

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items.data.price"],
  });

  if (session.payment_status !== "paid") {
    return NextResponse.redirect(new URL("/checkout/bundle?status=unpaid", req.url));
  }

  const lineItem = session.line_items?.data[0];
  const priceId = lineItem?.price?.id;

  if (!priceId || !PRICE_TO_TIER[priceId]) {
    return NextResponse.redirect(new URL("/checkout/bundle?status=unknown_tier", req.url));
  }

  const tier = PRICE_TO_TIER[priceId];
  const email = session.customer_details?.email;

  const token = jwt.sign(
    { tier, email },
    process.env.PORTAL_JWT_SECRET!,
    { expiresIn: "365d" }
  );

  const res = NextResponse.redirect(new URL("/portal", req.url));
  res.cookies.set("fw_portal", token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 365, // 1 year
    path: "/",
  });

  return res;
}
