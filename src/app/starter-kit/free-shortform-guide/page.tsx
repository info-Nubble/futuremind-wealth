"use client";

import Link from "next/link";

export default function FreeShortformGuidePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <section className="border-b border-emerald-500/20 bg-gradient-to-b from-slate-950 via-slate-950 to-black px-4 py-14">
        <div className="mx-auto max-w-3xl space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300">
            FutureMind Wealth · Free Guide
          </p>

          <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl">
            Free Short-Form Content Starter Kit
          </h1>

          <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
            This free guide gives you a printable, no-fluff system to launch a
            TikTok, Instagram Reels, and YouTube Shorts channel using AI — with
            zero filming and no website required.
          </p>

          <div className="space-y-3 text-sm text-slate-200">
            <p className="font-semibold text-emerald-300">
              Inside the PDF:
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Niche picker worksheet</li>
              <li>Brand kit page (fonts + colors)</li>
              <li>Short-form content scripts</li>
              <li>30-day posting calendar</li>
              <li>Growth checklist</li>
            </ul>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="/downloads/free/AI_Blueprint_and_Website_Guide.pdf"
              className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_28px_rgba(52,211,153,0.8)] transition hover:bg-emerald-300"
            >
              Download the Free PDF
            </a>

            <Link
              href="/no-website-creator-system"
              className="inline-flex items-center justify-center rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-emerald-400 hover:text-emerald-300"
            >
              ← Back
            </Link>
          </div>

          <p className="text-xs text-slate-500">
            Designed to be readable on-screen or printable.
          </p>
        </div>
      </section>
    </main>
  );
}
