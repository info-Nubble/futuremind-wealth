// src/app/auth/callback/route.ts
import { NextResponse } from "next/server";
import { createSupabaseRouteClient } from "@/lib/supabaseServer";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const next = url.searchParams.get("next") ?? "/portal";

  // No code → send to signin
  if (!code) {
    return NextResponse.redirect(new URL("/signin", url.origin));
  }

  const supabase = await createSupabaseRouteClient();

  try {
    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (error) {
      console.error("Error exchanging auth code:", error);
      return NextResponse.redirect(new URL("/signin", url.origin));
    }
  } catch (err) {
    console.error("Unexpected error in /auth/callback:", err);
    return NextResponse.redirect(new URL("/signin", url.origin));
  }

  // Session cookie is now set → send them where they were going
  return NextResponse.redirect(new URL(next, url.origin));
}
