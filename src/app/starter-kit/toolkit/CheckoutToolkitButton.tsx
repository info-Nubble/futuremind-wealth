// src/app/starter-kit/toolkit/CheckoutToolkitButton.tsx
"use client";

import { useState } from "react";

export default function CheckoutToolkitButton() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleClick = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch("/api/checkout-toolkit", {
        method: "POST",
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Unable to start toolkit checkout");
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
    <button
      onClick={handleClick}
      disabled={loading}
      className="flex w-full items-center justify-center rounded-lg bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-emerald-400 disabled:opacity-60"
    >
      {loading ? "Redirecting to secure checkout..." : "Yes — add the Toolkit to my order"}
    </button>
  );
}
