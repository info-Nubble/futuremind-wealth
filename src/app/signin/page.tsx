// src/app/signin/page.tsx
"use client";

import { FormEvent, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";

export default function SignInPage() {
  const supabase = createClientComponentClient();
  const [email, setEmail] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setMessage(null);
    setError(null);

    if (!email) {
      setError("Please enter an email address.");
      return;
    }

    try {
      setIsSending(true);

      // Prefer the explicit public site URL, fall back to current origin
      const siteUrl =
        process.env.NEXT_PUBLIC_SITE_URL || window.location.origin;

      const redirectTo = `${siteUrl}/auth/callback?next=/portal`;

      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: redirectTo,
        },
      });

      if (error) {
        // Supabase will often use status 429 when you click too fast
        if (
          (error as any).status === 429 ||
          error.message.toLowerCase().includes("security purposes")
        ) {
          setError(
            "For security, you can only request a new link every few seconds. " +
              "Check your inbox (and spam folder) — the last link still works."
          );
        } else {
          setError(
            error.message || "Something went wrong sending your sign-in link."
          );
        }
        return;
      }

      setMessage(
        "Almost there. Check your email for a sign-in link — it may take a minute. " +
          "You can close this tab after clicking the link."
      );
    } catch (err: any) {
      console.error("Error sending magic link:", err);
      setError(
        "Unexpected error sending your sign-in link. Please try again in a moment."
      );
    } finally {
      setIsSending(false);
    }
  }

  return (
    <main className="min-h-screen bg-black text-slate-50 flex items-center justify-center px-4 py-10">
      <div className="relative max-w-lg w-full">
        <div className="pointer-events-none absolute -inset-6 rounded-[32px] bg-emerald-500/20 blur-3xl" />
        <div className="relative rounded-[28px] border border-emerald-500/20 bg-gradient-to-b from-slate-950 via-slate-950/95 to-black px-6 py-8 sm:px-8 sm:py-10 shadow-2xl">
          {/* Header */}
          <p className="text-[11px] font-semibold tracking-[0.3em] text-emerald-300/80 uppercase mb-2">
            Member Access · FutureMind Wealth
          </p>
          <h1 className="text-2xl sm:text-3xl font-extrabold leading-snug mb-3">
            Sign in to your <span className="text-emerald-400">AI systems</span>
          </h1>
          <p className="text-sm text-slate-300 mb-6">
            Use your email to get a secure, one-time sign-in link. No passwords
            to remember — just click the link in your inbox and you&apos;re in.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-xs font-semibold tracking-wide text-slate-300"
              >
                Email address
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-lg border border-slate-700 bg-slate-950/80 px-3 py-2.5 text-sm outline-none ring-0 transition focus:border-emerald-400 focus:bg-slate-950 focus:shadow-[0_0_0_1px_rgba(45,212,191,0.6)]"
              />
            </div>

            {message && (
              <p className="rounded-md border border-emerald-500/40 bg-emerald-500/10 px-3 py-2 text-xs text-emerald-100">
                {message}
              </p>
            )}

            {error && (
              <p className="rounded-md border border-red-500/40 bg-red-500/10 px-3 py-2 text-xs text-red-100">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={isSending}
              className="mt-2 flex w-full items-center justify-center rounded-full bg-emerald-400 px-4 py-2.5 text-sm font-semibold text-black shadow-lg shadow-emerald-500/40 transition hover:bg-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSending ? "Sending link…" : "Send me a sign-in link"}
            </button>
          </form>

          {/* How it works */}
          <div className="mt-6 rounded-xl border border-slate-700/60 bg-slate-950/80 p-4 text-xs text-slate-300 space-y-1.5">
            <p className="font-semibold text-slate-100 mb-1">How this works</p>
            <ul className="space-y-1 list-disc list-inside">
              <li>
                Enter the same email you used at checkout or when you signed up.
              </li>
              <li>
                Check your inbox (and spam folder) for a magic sign-in link.
              </li>
              <li>
                Click it — you&apos;ll be signed in and redirected to your member
                portal.
              </li>
            </ul>
          </div>

          {/* Footer links */}
          <div className="mt-6 flex flex-col gap-1 text-[11px] text-slate-400">
            <span>
              Haven&apos;t purchased yet?{" "}
              <Link
                href="/bundle"
                className="text-emerald-300 hover:text-emerald-200"
              >
                See the AI Income Launch Bundle →
              </Link>
            </span>
            <span>
              Just want to learn first?{" "}
              <Link
                href="/blueprint"
                className="text-emerald-300 hover:text-emerald-200"
              >
                Get the free AI Blueprint →
              </Link>
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
