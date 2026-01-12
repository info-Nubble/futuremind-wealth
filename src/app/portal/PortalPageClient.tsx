"use client";

// We’ll reuse this later when we wire in real access control.
export type Access = {
  starter: boolean;
  toolkit: boolean;
  full: boolean;
};

export default function PortalPageClient({
  children,
}: {
  children: React.ReactNode;
}) {
  // TODO (future):
  // - Add Supabase client
  // - Check logged-in user
  // - Read purchases from `purchases` table
  // - Compute starter/toolkit/full flags
  //
  // For now, this is a no-op wrapper so the app can build
  // and you can keep working on the portal safely.
  return <>{children}</>;
}
