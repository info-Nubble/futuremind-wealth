"use client";

import { useState } from "react";
import Link from "next/link";

export default function BundleCheckoutPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCheckout = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch("/api/checkout-bundle", {
        method: "POST",
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data?.error || "Failed to start checkout.");
      }

      if (data?.url) {
        window.location.href = data.url;
      } else {
        throw new Error("Checkout URL not returned from server.");
      }
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Something went wrong.");
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-slate-100">
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* Header */}
        <header className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
              FutureMind Wealth
            </p>
            <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              AI Income Launch Bundle – Checkout
            </h1>
            <p className="mt-1 text-xs text-slate-400">
              Secure one-time payment • Instant digital access • Lifetime updates
            </p>
          </div>
          <Link
            href="/bundle"
            className="text-xs font-medium text-emerald-300 hover:text-emerald-200"
          >
            ← Back to bundle
          </Link>
        </header>

        <div className="grid gap-8 lg:grid-cols-[1.6fr,1fr]">
          {/* LEFT: form + button */}
          <section className="space-y-6 rounded-2xl border border-slate-800 bg-slate-950/70 p-6 shadow-[0_0_30px_rgba(0,0,0,0.7)]">
            <h2 className="text-lg font-semibold text-slate-50">
              1. Your details
            </h2>
            <div className="space-y-4 text-sm">
              <div className="space-y-1.5">
                <label
                  htmlFor="email"
                  className="block text-xs font-medium uppercase tracking-[0.18em] text-slate-400"
                >
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-slate-700 bg-black/60 px-3 py-2 text-sm text-slate-100 outline-none ring-emerald-500/40 focus:border-emerald-400 focus:ring-2"
                />
                <p className="text-[11px] text-slate-500">
                  Your downloads and receipts will be sent here.
                </p>
              </div>

              <hr className="border-slate-800" />

              <h2 className="text-lg font-semibold text-slate-50">
                2. Payment
              </h2>
              <p className="text-xs text-slate-400 mb-2">
                You&apos;ll be redirected to Stripe&apos;s secure checkout page to
                complete your payment.
              </p>

              {/* Visual-only card UI */}
              <div className="space-y-3 rounded-xl border border-slate-800 bg-slate-900/70 p-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                    Card number
                  </label>
                  <input
                    type="text"
                    placeholder="4242 4242 4242 4242"
                    className="w-full rounded-lg border border-slate-700 bg-black/60 px-3 py-2 text-sm text-slate-100 outline-none ring-emerald-500/40 focus:border-emerald-400 focus:ring-2"
                  />
                </div>
                <div className="flex gap-3">
                  <div className="flex-1 space-y-1.5">
                    <label className="block text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                      Expiry
                    </label>
                    <input
                      type="text"
                      placeholder="MM / YY"
                      className="w-full rounded-lg border border-slate-700 bg-black/60 px-3 py-2 text-sm text-slate-100 outline-none ring-emerald-500/40 focus:border-emerald-400 focus:ring-2"
                    />
                  </div>
                  <div className="w-28 space-y-1.5">
                    <label className="block text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                      CVC
                    </label>
                    <input
                      type="text"
                      placeholder="123"
                      className="w-full rounded-lg border border-slate-700 bg-black/60 px-3 py-2 text-sm text-slate-100 outline-none ring-emerald-500/40 focus:border-emerald-400 focus:ring-2"
                    />
                  </div>
                </div>
              </div>

              {/* REAL checkout button */}
              <button
                type="button"
                onClick={handleCheckout}
                disabled={loading}
                className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold tracking-wide text-black shadow-lg shadow-emerald-500/40 transition hover:bg-emerald-300 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading
                  ? "Redirecting to secure checkout..."
                  : "Complete secure checkout – $47"}
              </button>

              {error && (
                <p className="mt-2 text-[11px] text-red-400 text-center">
                  {error}
                </p>
              )}

              <p className="text-[11px] text-slate-500 mt-2">
                After payment, you&apos;ll be redirected to your download page
                with instant access to all 3 products.
              </p>
            </div>
          </section>

          {/* RIGHT: order summary */}
          <aside className="space-y-4">
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-5 shadow-[0_0_22px_rgba(16,185,129,0.35)]">
              <h2 className="text-sm font-semibold text-slate-50">
                Order summary
              </h2>
              <p className="mt-1 text-xs text-slate-300">
                AI Income Launch Bundle • One-time payment
              </p>

              <div className="mt-4 space-y-2 text-xs text-slate-200">
                <div className="flex items-center justify-between">
                  <span>AI Income Starter Kit (165 pages)</span>
                  <span className="text-slate-300">$97 value</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Complete AI Money Toolkit (10 pages)</span>
                  <span className="text-slate-300">$47 value</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>AI Blueprint &amp; Website Guide</span>
                  <span className="text-slate-300">$27 value</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>AI Website Builder Bonus</span>
                  <span className="text-slate-300">$27 value</span>
                </div>

                <hr className="my-3 border-emerald-500/30" />

                <div className="flex items-center justify-between text-sm font-semibold">
                  <span>Total today</span>
                  <span className="text-emerald-300">$47</span>
                </div>
                <p className="mt-1 text-[11px] text-emerald-200">
                  Lifetime access • All future updates included
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-xs text-slate-300">
              <p className="font-semibold text-slate-50">
                30-day make-your-first-$27 guarantee
              </p>
              <p className="mt-2">
                If you go through the material, use the prompts, and don&apos;t
                feel closer to launching your first AI-powered income stream
                within 30 days, you&apos;ll get a full refund.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
