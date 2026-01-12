// src/lib/syncUserPurchases.ts
import { createSupabaseServerClient } from "@/lib/supabaseServer";

/**
 * Syncs any purchases that match the user's email into their user_id,
 * and ensures entitlements/profiles reflect the highest tier found.
 *
 * Assumptions (based on your other code):
 * - purchases: { user_id, email, product_tier, stripe_checkout_session_id, ... }
 * - entitlements: { user_id, tier, active, source, stripe_customer_id, stripe_session_id, granted_at, updated_at }
 * - profiles: { id, email, product_tier }
 */
export async function syncUserPurchases() {
  const supabase = await createSupabaseServerClient();

  // 1) Get logged-in user (from cookies)
  const userResult = await supabase.auth.getUser();
  if (userResult.error) {
    console.error("❌ Error getting auth user for syncUserPurchases:", userResult.error);
    return { ok: false, reason: "auth_error" as const };
  }

  const user = userResult.data.user;
  if (!user?.id) return { ok: true, reason: "no_user" as const };

  // 2) Determine email to match on
  const email = user.email ?? null;
  if (!email) return { ok: true, reason: "no_email" as const };

  // 3) Find purchases that were recorded by email but missing/incorrect user_id
  const { data: purchases, error: purchasesError } = await supabase
    .from("purchases")
    .select("stripe_checkout_session_id, product_tier, user_id, email")
    .eq("email", email);

  if (purchasesError) {
    console.error("❌ Error selecting purchases for syncUserPurchases:", purchasesError);
    return { ok: false, reason: "purchases_select_error" as const };
  }

  if (!purchases || purchases.length === 0) {
    return { ok: true, reason: "no_purchases" as const };
  }

  // 4) Patch any purchases missing the user_id (idempotent)
  const needsPatch = purchases.filter((p) => !p.user_id || p.user_id !== user.id);
  if (needsPatch.length > 0) {
    // Update by email + session id for safety
    for (const p of needsPatch) {
      if (!p.stripe_checkout_session_id) continue;

      const { error: updateErr } = await supabase
        .from("purchases")
        .update({ user_id: user.id })
        .eq("stripe_checkout_session_id", p.stripe_checkout_session_id)
        .eq("email", email);

      if (updateErr) {
        console.error("❌ Failed to patch purchase user_id:", updateErr);
      }
    }
  }

  // 5) Determine the "highest" tier the user owns
  // Order: starter < toolkit < bundle
  const tierRank: Record<string, number> = { starter: 1, toolkit: 2, bundle: 3 };

  const bestTier = purchases
    .map((p) => p.product_tier as string | null)
    .filter(Boolean)
    .sort((a, b) => (tierRank[a!] ?? 0) - (tierRank[b!] ?? 0))
    .pop() as "starter" | "toolkit" | "bundle" | undefined;

  if (!bestTier) return { ok: true, reason: "no_tier" as const };

  // 6) Upsert entitlement for the best tier (safe, idempotent)
  const now = new Date().toISOString();
  const { error: entErr } = await supabase
    .from("entitlements")
    .upsert(
      {
        user_id: user.id,
        tier: bestTier,
        active: true,
        source: "stripe",
        granted_at: now,
        updated_at: now,
      },
      { onConflict: "user_id,tier" }
    );

  if (entErr) console.error("❌ entitlements upsert failed in syncUserPurchases:", entErr);

  // 7) Update profiles.product_tier to the best tier
  const { error: profileErr } = await supabase
    .from("profiles")
    .update({ product_tier: bestTier })
    .eq("id", user.id);

  if (profileErr) console.error("❌ profiles tier update failed in syncUserPurchases:", profileErr);

  return {
    ok: true,
    reason: "synced" as const,
    email,
    bestTier,
    patchedPurchases: needsPatch.length,
  };
}
