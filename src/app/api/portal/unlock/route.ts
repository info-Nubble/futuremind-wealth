// src/app/api/portal/unlock/route.ts
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import jwt from "jsonwebtoken";

function firstEnv(...names: string[]) {
  for (const n of names) {
    const v = process.env[n];
    if (v) return v;
  }
  return undefined;
}

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const sessionId = url.searchParams.get("session_id");

  // If they hit unlock without a session, send them back to checkout (safe)
  if (!sessionId) {
    return NextResponse.redirect(new URL("/checkout/bundle", req.url));
  }

  // ✅ Build-safe: env reads inside handler only
  const stripeKey = process.env.STRIPE_SECRET_KEY;
  const jwtSecret = process.env.PORTAL_JWT_SECRET;

  const starterPrice =
    firstEnv("STRIPE_STARTER_PRICE_ID", "STRIPE_PRICE_STARTER") ?? "";
  const toolkitPrice =
    firstEnv("STRIPE_TOOLKIT_PRICE_ID", "STRIPE_PRICE_TOOLKIT") ?? "";
  const bundlePrice =
    firstEnv("STRIPE_BUNDLE_PRICE_ID", "STRIPE_PRICE_BUNDLE") ?? "";

  if (!stripeKey) {
    return NextResponse.redirect(
      new URL("/checkout/bundle?status=stripe_not_configured", req.url)
    );
  }

  if (!jwtSecret) {
    return NextResponse.redirect(
      new URL("/checkout/bundle?status=jwt_not_configured", req.url)
    );
  }

  // Map price -> tier (constructed INSIDE handler)
  const PRICE_TO_TIER: Record<string, "starter" | "toolkit" | "bundle"> = {};
  if (starterPrice) PRICE_TO_TIER[starterPrice] = "starter";
  if (toolkitPrice) PRICE_TO_TIER[toolkitPrice] = "toolkit";
  if (bundlePrice) PRICE_TO_TIER[bundlePrice] = "bundle";

  const stripe = new Stripe(stripeKey);

  let session: Stripe.Checkout.Session;
  try {
    session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["line_items.data.price"],
    });
  } catch {
    return NextResponse.redirect(
      new URL("/checkout/bundle?status=invalid_session", req.url)
    );
  }

  if (session.payment_status !== "paid") {
    return NextResponse.redirect(
      new URL("/checkout/bundle?status=unpaid", req.url)
    );
  }

  const lineItem = session.line_items?.data?.[0];
  const priceId =
    typeof lineItem?.price?.id === "string" ? lineItem.price.id : null;

  if (!priceId || !PRICE_TO_TIER[priceId]) {
    return NextResponse.redirect(
      new URL("/checkout/bundle?status=unknown_tier", req.url)
    );
  }

  const tier = PRICE_TO_TIER[priceId];
  const email =
    typeof session.customer_details?.email === "string"
      ? session.customer_details.email
      : null;

  const token = jwt.sign({ tier, email }, jwtSecret, { expiresIn: "365d" });

  const res = NextResponse.redirect(new URL("/portal", req.url));
  res.cookies.set("fw_portal", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // localhost-friendly
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 365,
    path: "/",
  });

  return res;
}
