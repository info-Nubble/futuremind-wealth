// src/app/api/subscribe/route.ts
import { NextResponse } from "next/server";

const FORM_ID = 8767548; // your Kit / ConvertKit form ID

function getKitApiKey(): string {
  return (
    process.env.KIT_PUBLIC_API_KEY ||
    process.env.KIT_API_KEY ||
    process.env.CONVERTKIT_API_KEY ||
    process.env.CONVERTKIT_PUBLIC_API_KEY ||
    process.env.NEXT_PUBLIC_KIT_API_KEY ||
    process.env.NEXT_PUBLIC_CONVERTKIT_API_KEY ||
    ""
  );
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const emailRaw = formData.get("email");
  const source = (formData.get("source") || "website") as string;

  const email = typeof emailRaw === "string" ? emailRaw.trim() : "";

  // ✅ redirect target UPDATED to /youre-in
  const redirectUrl = new URL("/youre-in", request.url);

  // Missing email
  if (!email) {
    redirectUrl.searchParams.set("status", "error");
    redirectUrl.searchParams.set("reason", "missing-email");
    return NextResponse.redirect(redirectUrl);
  }

  const apiKey = getKitApiKey();

  if (!apiKey) {
    console.error("Kit API key missing – check .env.local");
    redirectUrl.searchParams.set("status", "error");
    redirectUrl.searchParams.set("reason", "server-config");
    return NextResponse.redirect(redirectUrl);
  }

  try {
    const res = await fetch(
      `https://api.convertkit.com/v3/forms/${FORM_ID}/subscribe`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({
          api_key: apiKey,
          email,
          fields: { source },
        }),
      }
    );

    if (!res.ok) {
      const body = await res.text();
      console.error("Kit subscribe error:", body);
      redirectUrl.searchParams.set("status", "error");
      redirectUrl.searchParams.set("reason", "api-error");
    } else {
      redirectUrl.searchParams.set("status", "ok");
    }
  } catch (err) {
    console.error("Kit subscribe exception:", err);
    redirectUrl.searchParams.set("status", "error");
    redirectUrl.searchParams.set("reason", "exception");
  }

  return NextResponse.redirect(redirectUrl);
}
