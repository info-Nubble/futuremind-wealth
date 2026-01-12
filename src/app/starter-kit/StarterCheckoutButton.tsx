"use client";

import { useState } from "react";

export default function StarterCheckoutButton() {
  const [loading, setLoading] = useState(false);

  async function handleStarterCheckout() {
    try {
      setLoading(true);

      const res = await fetch("/api/checkout-starter", {
        method: "POST",
      });

      if (!res.ok) {
        throw new Error("Failed to start checkout");
      }

      // The API route returns a 303 redirect to Stripe,
      // so the browser will follow it automatically.
      // If you ever change it to return JSON { url },
      // you can read it here and do: window.location.href = data.url.
    } catch (error) {
      console.error(error);
      alert(
        "Something went wrong starting checkout. Please try again in a moment."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleStarterCheckout}
      disabled={loading}
      className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold
                 bg-emerald-400/90 hover:bg-emerald-400 text-slate-950
                 shadow-[0_0_40px_rgba(16,185,129,0.35)] transition-colors
                 disabled:cursor-not-allowed disabled:opacity-70"
    >
      {loading ? "Redirecting to checkout..." : "Get the AI Automation Starter Kit"}
    </button>
  );
}
