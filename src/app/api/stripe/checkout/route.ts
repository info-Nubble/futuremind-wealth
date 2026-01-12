import Stripe from "stripe";
import { createSupabaseServerClient } from "@/lib/supabaseServer"; // your helper
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-10-29.clover",
});

export async function POST(req: Request) {
  // 1️⃣ Get logged-in user (REQUIRED)
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (!user || error) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const { priceId } = await req.json();

  if (!priceId) {
    return NextResponse.json({ error: "Missing priceId" }, { status: 400 });
  }

  // 2️⃣ Create Checkout Session
  const session = await stripe.checkout.sessions.create({
    mode: "payment", // one-time purchase (Phase 1)
    payment_method_types: ["card"],
    customer_email: user.email ?? undefined,

    // 🔐 THIS IS THE KEY PART
    client_reference_id: user.id,
    metadata: {
      user_id: user.id,
      email: user.email ?? "",
    },

    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],

    success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/portal?checkout=success`,
    cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/portal?checkout=cancel`,
  });

  return NextResponse.json({ url: session.url });
}
