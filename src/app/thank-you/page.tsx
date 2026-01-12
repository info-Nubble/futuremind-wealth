// src/app/thank-you/page.tsx
import { stripe } from "@/lib/stripe";
import {
  subscribeStarterBuyer,
  subscribeBundleBuyer,
} from "@/lib/convertkit";

type ThankYouPageSearchParams = {
  product?: string;
  session_id?: string;
};

interface ThankYouPageProps {
  searchParams: Promise<ThankYouPageSearchParams>;
}

export default async function ThankYouPage({ searchParams }: ThankYouPageProps) {
  const params = await searchParams;

  // Do NOT default to "bundle" – dangerous
  const product =
    params.product === "starter"
      ? "starter"
      : params.product === "bundle"
      ? "bundle"
      : "unknown";

  const isStarter = product === "starter";
  const isBundle = product === "bundle";

  const sessionId = params.session_id;

  let customerEmail: string | null = null;
  let customerName: string | null = null;
  let amountPaid: number | null = null;
  let currency: string | null = null;

  // Optional Stripe lookup ONLY if session ID exists
  if (sessionId) {
    try {
      const session = await stripe.checkout.sessions.retrieve(sessionId, {
        expand: ["customer"],
      });

      if (typeof session.customer_details?.email === "string") {
        customerEmail = session.customer_details.email;
      }

      if (typeof session.customer_details?.name === "string") {
        customerName = session.customer_details.name;
      }

      if (typeof session.amount_total === "number") {
        amountPaid = session.amount_total;
        currency = session.currency || "usd";
      }

      // 🔗 Subscribe buyer to ConvertKit (fire-and-forget)
      if (customerEmail) {
        try {
          if (isStarter) {
            await subscribeStarterBuyer(customerEmail, customerName);
          } else if (isBundle) {
            await subscribeBundleBuyer(customerEmail, customerName);
          }
          // if "unknown", we intentionally do nothing
        } catch (err) {
          console.error("[thank-you] ConvertKit subscribe failed:", err);
        }
      }
    } catch (err) {
      console.error("[thank-you] Failed to load checkout session:", err);
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 px-4">
      <div className="max-w-3xl mx-auto py-16">
        <p className="text-xs font-semibold tracking-[0.25em] text-emerald-400 uppercase mb-4">
          Success — You&apos;re In
        </p>

        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          {isBundle && "Your AI Income Launch Bundle is ready."}
          {isStarter && "Your AI Income Starter Kit is ready."}
          {!isStarter && !isBundle && "Thank you for your purchase!"}
        </h1>

        {customerEmail && (
          <p className="text-sm text-slate-300 mb-2">
            A receipt and access link have also been sent to{" "}
            <span className="font-semibold text-emerald-300">
              {customerEmail}
            </span>
            .
          </p>
        )}

        {amountPaid && (
          <p className="text-sm text-slate-400 mb-6">
            Amount paid:{" "}
            <span className="font-semibold text-slate-50">
              {(amountPaid / 100).toLocaleString("en-US", {
                style: "currency",
                currency: (currency || "USD").toUpperCase(),
              })}
            </span>
          </p>
        )}

        <div className="space-y-4 mb-10">
          <p className="text-sm text-slate-200">
            Next step: hit the button below to open your{" "}
            {isBundle ? "full download portal" : "Starter Kit downloads"}.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="/portal"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold
                         bg-emerald-400/90 hover:bg-emerald-400 text-slate-950 shadow-[0_0_40px_rgba(16,185,129,0.35)]
                         transition-colors"
            >
              Open Download Portal →
            </a>

            <a
              href="/"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium
                         border border-slate-700/80 bg-slate-900/60 hover:bg-slate-900 text-slate-200
                         transition-colors"
            >
              Back to main site
            </a>
          </div>
        </div>

        <div className="border border-slate-800/80 rounded-3xl bg-slate-900/60 p-6 text-sm text-slate-300">
          <p className="font-semibold mb-2">Having trouble?</p>
          <p className="mb-1">
            If you don&apos;t see an email within a few minutes, check your spam
            or promotions tab.
          </p>
          <p>
            Still stuck? Reach out at{" "}
            <a
              href="mailto:mike@futuremindwealth.com"
              className="text-emerald-300 hover:text-emerald-200"
            >
              mike@futuremindwealth.com
            </a>{" "}
            and I&apos;ll get you sorted.
          </p>
        </div>
      </div>
    </main>
  );
}
