// src/lib/syncUserPurchases.ts
import { createClient } from "@/lib/supabase/server";

/**
 * Syncs any purchases that match the user's email into their user_id,
 * and updates profiles.product_tier based on the highest tier owned.
 *
 * Safe to call on any server-side request where a user might be logged in.
 * If no valid user, it just returns quietly.
 */
export async function syncUserPurchases() {
  const supabase = createClient();

  // Get the currently authenticated user (from cookies)
  const userResult = await supabase.auth.getUser();

  if (userResult.error) {
    console.error("❌ Error getting auth user for syncUserPurchases:", userResult.error);
    return;
  }

  const user = userResult.data.user;

  if (!user || !user.email) {
    // Not logged in – nothing to sync
    return;
  }

  try {
    const { error } = await supabase.rpc("sync_user_purchases", {
      p_user_id: user.id,
      p_email: user.email,
    });

    if (error) {
      console.error("❌ Error syncing user purchases via RPC:", error);
    } else {
      console.log("✅ Synced purchases + profile tier for", user.email);
    }
  } catch (err) {
    console.error("❌ Unexpected error in syncUserPurchases:", err);
  }
}
