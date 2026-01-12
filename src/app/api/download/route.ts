import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { createSupabaseServerClient } from "@/lib/supabaseServer"; // you already use this pattern elsewhere

type Tier = "free" | "starter" | "bundle" | "ultimate";

function tierRank(t: Tier) {
  return t === "free" ? 0 : t === "starter" ? 1 : t === "bundle" ? 2 : 3;
}

function requiredTierForPath(filePath: string): Tier {
  const top = filePath.split("/")[0]?.toLowerCase();
  if (top === "starter") return "starter";
  if (top === "bundle") return "bundle";
  if (top === "ultimate") return "ultimate";
  // Default to strict (treat unknown paths as ultimate)
  return "ultimate";
}

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const filePath = url.searchParams.get("path");
  if (!filePath) {
    return NextResponse.json({ error: "Missing path" }, { status: 400 });
  }

  // 1) Identify the logged-in user via Supabase cookies
  const supabase = await createSupabaseServerClient();
  const { data: userRes, error: userErr } = await supabase.auth.getUser();

  if (userErr || !userRes?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const userId = userRes.user.id;

  // 2) Fetch tier from profiles
  const { data: profile, error: profErr } = await supabase
    .from("profiles")
    .select("product_tier")
    .eq("id", userId)
    .single();

  if (profErr || !profile?.product_tier) {
    return NextResponse.json({ error: "Tier not found" }, { status: 403 });
  }

  const userTier = (profile.product_tier as Tier) ?? "free";
  const requiredTier = requiredTierForPath(filePath);

  if (tierRank(userTier) < tierRank(requiredTier)) {
    return NextResponse.json({ error: "Not entitled" }, { status: 403 });
  }

  // 3) Sign a short-lived download URL from the PRIVATE bucket using service role
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  if (!supabaseUrl || !serviceKey) {
    return NextResponse.json({ error: "Server not configured" }, { status: 500 });
  }

  const admin = createClient(supabaseUrl, serviceKey, {
    auth: { persistSession: false },
  });

  const { data: signed, error: signErr } = await admin.storage
    .from("paid-downloads")
    .createSignedUrl(filePath, 60); // 60 seconds is perfect

  if (signErr || !signed?.signedUrl) {
    return NextResponse.json({ error: "Failed to create signed URL" }, { status: 500 });
  }

  // 4) Redirect user to the signed URL (best UX)
  return NextResponse.redirect(signed.signedUrl, { status: 302 });
}
