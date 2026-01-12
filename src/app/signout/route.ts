// src/app/signout/route.ts
import { NextRequest, NextResponse } from "next/server";
import { createSupabaseRouteClient } from "@/lib/supabaseServer";

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const supabase = await createSupabaseRouteClient();

  // Try to sign out via Supabase (revoke refresh token, etc.)
  try {
    const { error } = await supabase.auth.signOut();
    if (error) {
      // We don't want this to block logout if the refresh token is already invalid
      console.warn("[signout] Supabase signOut error (ignored):", error.message);
    }
  } catch (err) {
    console.warn("[signout] Unexpected error calling signOut (ignored):", err);
  }

  // Prepare redirect to home
  const response = NextResponse.redirect(new URL("/", url.origin));

  // Also hard-delete Supabase auth cookies to be 100% sure
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const projectRef =
    supabaseUrl?.match(/^https:\/\/(.*)\.supabase\.co/)?.[1] ?? null;

  if (projectRef) {
    const authCookie = `sb-${projectRef}-auth-token`;
    const authCookieCf = `sb-${projectRef}-auth-token.cf`;

    response.cookies.delete(authCookie);
    response.cookies.delete(authCookieCf);
  }

  return response;
}
