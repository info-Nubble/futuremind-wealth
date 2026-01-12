// src/lib/tiers.ts
export type ProductTier = "starter" | "toolkit" | "bundle";

// Order from lowest to highest
export const TIER_ORDER: ProductTier[] = ["starter", "toolkit", "bundle"];

export function hasAccess(required: ProductTier, current: ProductTier): boolean {
  return TIER_ORDER.indexOf(current) >= TIER_ORDER.indexOf(required);
}
