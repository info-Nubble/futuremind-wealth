// src/lib/stripe.ts
import Stripe from "stripe";

let stripeSingleton: Stripe | null = null;

export function tryGetStripe(): Stripe | null {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return null;

  if (!stripeSingleton) {
    stripeSingleton = new Stripe(key);
  }
  return stripeSingleton;
}

export function getStripe(): Stripe {
  const stripe = tryGetStripe();
  if (!stripe) throw new Error("STRIPE_SECRET_KEY is not set");
  return stripe;
}

export function getStripeWebhookSecret(): string {
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!secret) throw new Error("STRIPE_WEBHOOK_SECRET is not set");
  return secret;
}
