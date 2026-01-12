// src/app/portal/PortalTierContext.tsx
"use client";

import React, { createContext, useContext } from "react";
import type { ProductTier } from "@/lib/tiers";

type PortalTierContextValue = {
  currentTier: ProductTier;
};

const PortalTierContext = createContext<PortalTierContextValue | null>(null);

export function PortalTierProvider({
  tier,
  children,
}: {
  tier: ProductTier;
  children: React.ReactNode;
}) {
  return (
    <PortalTierContext.Provider value={{ currentTier: tier }}>
      {children}
    </PortalTierContext.Provider>
  );
}

export function usePortalTier(): PortalTierContextValue {
  const ctx = useContext(PortalTierContext);
  if (!ctx) {
    throw new Error("usePortalTier must be used within <PortalTierProvider>");
  }
  return ctx;
}
