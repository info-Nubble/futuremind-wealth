// src/lib/getCurrentTier.ts
import { createSupabaseServerClient } from "./supabaseServer";
import type { ProductTier } from "./tiers";

export async function getCurrentTier(): Promise<ProductTier | null> {
  const supabase = await createSupabaseServerClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  const { data: profile } = await supabase
    .from("profiles")
    .select("product_tier")
    .eq("id", user.id)
    .maybeSingle();

  const tier = (profile?.product_tier ?? "free") as ProductTier;
  return tier;
}
