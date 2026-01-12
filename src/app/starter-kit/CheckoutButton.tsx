"use client";

import { useState } from "react";

export default function CheckoutButton() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleClick = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch("/api/checkout", {
        method: "POST",
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Unable to start checkout");
      }

      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error("No checkout URL received");
      }
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="mt-6 flex flex-col items-center gap-2">
      <button
        onClick={handleClick}
        disabled={loading}
        className="w-full max-w-sm rounded-lg bg-emerald-500 px-6 py-3 text-center text-lg font-semibold text-white shadow-lg transition hover:bg-emerald-400 disabled:opacity-60"
      >
        {loading ? "Redirecting to secure checkout..." : "Get the Starter Kit for $27"}
      </button>
      {error && <p className="text-sm text-red-500">{error}</p>}
      <p className="text-xs text-gray-400">
        Secure payment handled by Stripe. No subscription—one-time purchase.
      </p>
    </div>
  );
}
