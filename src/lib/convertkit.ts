// src/lib/convertkit.ts
const CONVERTKIT_API_KEY = process.env.CONVERTKIT_API_KEY;
const TAG_STARTER = process.env.CONVERTKIT_TAG_STARTER_KIT_BUYER;
const TAG_BUNDLE = process.env.CONVERTKIT_TAG_BUNDLE_BUYER;

if (!CONVERTKIT_API_KEY) {
  throw new Error("CONVERTKIT_API_KEY is not set");
}
if (!TAG_STARTER || !TAG_BUNDLE) {
  console.warn(
    "[ConvertKit] One or more tag IDs are missing. Check your .env.local."
  );
}

type SubscribeOptions = {
  email: string;
  firstName?: string | null;
  tagId: string;
};

async function subscribeToTag({ email, firstName, tagId }: SubscribeOptions) {
  const url = `https://api.convertkit.com/v3/tags/${tagId}/subscribe`;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      api_key: CONVERTKIT_API_KEY,
      email,
      first_name: firstName ?? undefined,
    }),
  });

  if (!res.ok) {
    console.error(
      `[ConvertKit] Failed to subscribe ${email} to tag ${tagId}`,
      res.status,
      await res.text()
    );
    throw new Error("Failed to subscribe user to ConvertKit");
  }

  return res.json();
}

export async function subscribeStarterBuyer(
  email: string,
  firstName?: string | null
) {
  if (!TAG_STARTER) return;
  try {
    await subscribeToTag({ email, firstName, tagId: TAG_STARTER });
  } catch (err) {
    console.error("[ConvertKit] subscribeStarterBuyer error", err);
  }
}

export async function subscribeBundleBuyer(
  email: string,
  firstName?: string | null
) {
  if (!TAG_BUNDLE) return;
  try {
    await subscribeToTag({ email, firstName, tagId: TAG_BUNDLE });
  } catch (err) {
    console.error("[ConvertKit] subscribeBundleBuyer error", err);
  }
}
