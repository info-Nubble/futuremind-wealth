"use client";

import { useState } from "react";

export default function BundleCheckoutButton() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleClick = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch("/api/checkout-bundle", {
        method: "POST",
      });

      if (!res.ok) {
        throw new Error("Failed to start checkout");
      }

      const data = await res.json();

      if (data?.url) {
        window.location.href = data.url; // send user to Stripe
      } else {
        throw new Error("No checkout URL returned");
      }
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Something went wrong.");
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <button
        type="button"
        onClick={handleClick}
        disabled={loading}
        className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-7 py-3 text-sm font-semibold tracking-wide text-black shadow-lg shadow-emerald-500/40 transition hover:bg-emerald-300 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? "Redirecting to secure checkout..." : "Unlock the AI Income Launch Bundle"}
      </button>
      {error && (
        <p className="text-[11px] text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}
