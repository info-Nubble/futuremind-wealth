// src/lib/convertkit.ts

const CONVERTKIT_API_KEY = process.env.CONVERTKIT_API_KEY ?? "";
const TAG_STARTER = process.env.CONVERTKIT_TAG_STARTER_KIT_BUYER ?? "";
const TAG_BUNDLE = process.env.CONVERTKIT_TAG_BUNDLE_BUYER ?? "";

/**
 * ConvertKit is OPTIONAL.
 * We do NOT throw at import-time because Next/Vercel will load modules during build
 * ("collecting page data") and missing env vars would crash deployments.
 */
export function isConvertKitConfigured() {
  return Boolean(CONVERTKIT_API_KEY);
}

function warnMissingConfigOnce() {
  // Avoid log spam
  if (process.env.NODE_ENV === "production") return;
  if (!CONVERTKIT_API_KEY) {
    console.warn("[ConvertKit] CONVERTKIT_API_KEY is not set. ConvertKit calls will be skipped.");
  }
  if (!TAG_STARTER || !TAG_BUNDLE) {
    console.warn("[ConvertKit] One or more tag IDs are missing. Tag subscriptions may be skipped.");
  }
}

type SubscribeOptions = {
  email: string;
  firstName?: string | null;
  tagId: string;
};

async function subscribeToTag({ email, firstName, tagId }: SubscribeOptions) {
  // Hard guard (runtime only)
  if (!CONVERTKIT_API_KEY) {
    warnMissingConfigOnce();
    return null;
  }
  if (!tagId) {
    warnMissingConfigOnce();
    return null;
  }

  const url = `https://api.convertkit.com/v3/tags/${tagId}/subscribe`;

  const res = await fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      api_key: CONVERTKIT_API_KEY,
      email,
      first_name: firstName ?? undefined,
    }),
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    console.error(
      `[ConvertKit] Failed to subscribe ${email} to tag ${tagId}`,
      res.status,
      body
    );
    throw new Error("Failed to subscribe user to ConvertKit");
  }

  return res.json();
}

export async function subscribeStarterBuyer(email: string, firstName?: string | null) {
  if (!TAG_STARTER) {
    warnMissingConfigOnce();
    return;
  }
  try {
    await subscribeToTag({ email, firstName, tagId: TAG_STARTER });
  } catch (err) {
    console.error("[ConvertKit] subscribeStarterBuyer error", err);
  }
}

export async function subscribeBundleBuyer(email: string, firstName?: string | null) {
  if (!TAG_BUNDLE) {
    warnMissingConfigOnce();
    return;
  }
  try {
    await subscribeToTag({ email, firstName, tagId: TAG_BUNDLE });
  } catch (err) {
    console.error("[ConvertKit] subscribeBundleBuyer error", err);
  }
}
