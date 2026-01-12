// src/app/starter-kit/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import StarterCheckoutButton from "./StarterCheckoutButton";
import { createSupabaseServerClient } from "@/lib/supabaseServer";

export const metadata: Metadata = {
  title: "AI Automation Starter Kit | FutureMind Wealth",
  description:
    "Build automated online income in 7 days using a simple AI system anyone can follow. The FutureMind Wealth AI Automation Starter Kit gives you the exact framework, prompts, and action plan.",
};

export default async function StarterKitPage() {
  // 🔐 Require login before viewing the Starter Kit page
  const supabase = await createSupabaseServerClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    // Not logged in → go to signin, then bounce back here
    redirect("/signin?next=/starter-kit");
  }

  return (
    <main className="min-h-screen bg-black text-slate-100">
      <div className="mx-auto flex max-w-5xl flex-col gap-16 px-4 pb-16 pt-10 sm:px-6 md:pt-16 lg:px-8">
        {/* HERO */}
        <section className="mb-6 md:mb-10">
          <div className="inline-flex items-center rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-emerald-300">
            FutureMind Wealth · AI Automation Starter Kit
          </div>

          <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-50 sm:text-4xl md:text-5xl">
            Build automated online income in{" "}
            <span className="text-emerald-400">7 days</span> — using a simple AI
            system anyone can follow.
          </h1>

          <p className="mt-4 max-w-2xl text-sm text-slate-300 sm:text-base">
            Get the step-by-step starter kit I use to turn skills into automated
            income — with AI doing 80% of the work. No audience, no tech
            background, and no hype required.
          </p>

          <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4">
            {/* Stripe Starter Kit checkout */}
            <StarterCheckoutButton />

            <p className="text-xs text-slate-400">
              Instant digital download · 30-day guarantee · Lifetime access
            </p>
          </div>

          {/* Existing-customer path */}
          <p className="mt-3 text-xs text-slate-400">
            Already grabbed the Starter Kit?{" "}
            <Link
              href="/signin"
              className="font-semibold text-emerald-300 hover:text-emerald-200"
            >
              Sign in to your member portal →
            </Link>
          </p>
        </section>

        {/* MAIN CONTENT GRID */}
        <section className="grid gap-6 md:grid-cols-2">
          {/* WHAT YOU GET */}
          <article className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5 shadow-[0_0_26px_rgba(0,0,0,0.7)]">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
              What you get inside
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              A complete, no-fluff system for launching your first AI-powered
              income engine.
            </p>

            <ul className="mt-4 space-y-2 text-sm text-slate-200">
              <li>
                <span className="mr-1 text-emerald-400">✔</span>
                <span className="font-semibold">FutureMind Method PDF —</span>{" "}
                the 5-step framework for turning skills into automated income.
              </li>
              <li>
                <span className="mr-1 text-emerald-400">✔</span>
                <span className="font-semibold">
                  Tool Stack &amp; Setup Guides —
                </span>{" "}
                the exact tools I use, how they fit together, and how to avoid
                wasting money.
              </li>
              <li>
                <span className="mr-1 text-emerald-400">✔</span>
                <span className="font-semibold">High-Impact Prompts Library —</span>{" "}
                copy-and-paste prompts for content, workflows, products, and
                funnels.
              </li>
              <li>
                <span className="mr-1 text-emerald-400">✔</span>
                <span className="font-semibold">Templates &amp; Checklists —</span>{" "}
                daily workflow, product creation, and automation setup
                checklists.
              </li>
              <li>
                <span className="mr-1 text-emerald-400">✔</span>
                <span className="font-semibold">20-Minute Automation Build —</span>{" "}
                your first simple automation you can launch today.
              </li>
              <li>
                <span className="mr-1 text-emerald-400">✔</span>
                <span className="font-semibold">7-Day Action Plan —</span>{" "}
                a clear roadmap from “no system” to “live automation.”
              </li>
            </ul>
          </article>

          {/* WHY THIS WORKS */}
          <article className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5 shadow-[0_0_26px_rgba(0,0,0,0.7)]">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
              Why this works (when other stuff doesn&apos;t)
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              Most people drown in tutorials, tools, and tactics. This kit gives
              you a single, repeatable system to follow.
            </p>

            <ul className="mt-4 space-y-2 text-sm text-slate-200">
              <li>
                <span className="mr-1 text-emerald-400">●</span>
                Focused on systems, not random hacks.
              </li>
              <li>
                <span className="mr-1 text-emerald-400">●</span>
                Built for people with jobs, families, and limited time.
              </li>
              <li>
                <span className="mr-1 text-emerald-400">●</span>
                Uses AI to automate work — not to add more to your plate.
              </li>
              <li>
                <span className="mr-1 text-emerald-400">●</span>
                Designed to get you a real win in 7 days or less.
              </li>
            </ul>
          </article>
        </section>

        {/* MEMBER ACCESS LEVEL FOR STARTER TIER */}
        <section className="rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-5 shadow-[0_0_24px_rgba(16,185,129,0.3)]">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">
            Member access: Starter tier
          </h2>
          <p className="mt-3 text-sm text-emerald-100/90">
            When you buy the Starter Kit, your account is tagged with{" "}
            <span className="font-semibold text-emerald-300">
              Starter access
            </span>
            . Inside the member portal you&apos;ll see:
          </p>
          <ul className="mt-4 grid gap-2 text-sm text-emerald-50 md:grid-cols-2">
            <li>• Overview &amp; “Start here” pages</li>
            <li>• Progress checklist for the Starter system</li>
            <li>• Core downloads for the Starter Kit PDFs</li>
            <li>• Starter-only quick tips &amp; support links</li>
          </ul>
          <p className="mt-3 text-xs text-emerald-200/80">
            Pages above your tier show up as{" "}
            <span className="font-semibold">locked</span> with a small
            “Upgrade to Bundle to unlock” banner, so you always know what you
            have access to — and what you can unlock next.
          </p>
        </section>

        {/* FIT SECTION */}
        <section className="grid gap-6 md:grid-cols-2">
          {/* This is for you if… */}
          <article className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5 shadow-[0_0_20px_rgba(0,0,0,0.7)]">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
              This is for you if…
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-200">
              <li>
                <span className="mr-1 text-emerald-400">✔</span>
                You want to build real income, not just dopamine from content.
              </li>
              <li>
                <span className="mr-1 text-emerald-400">✔</span>
                You&apos;re willing to follow a clear plan for 7 days.
              </li>
              <li>
                <span className="mr-1 text-emerald-400">✔</span>
                You like the idea of AI doing most of the repetitive work.
              </li>
              <li>
                <span className="mr-1 text-emerald-400">✔</span>
                You want something that respects your time and intelligence.
              </li>
            </ul>
          </article>

          {/* This is not for you if… */}
          <article className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5 shadow-[0_0_20px_rgba(0,0,0,0.7)]">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
              This is not for you if…
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-200">
              <li>
                <span className="mr-1 text-emerald-400">✖</span>
                You&apos;re looking for a get-rich-quick scheme.
              </li>
              <li>
                <span className="mr-1 text-emerald-400">✖</span>
                You don&apos;t want to think at all — this is a partnership with
                AI, not magic.
              </li>
              <li>
                <span className="mr-1 text-emerald-400">✖</span>
                You refuse to take action unless everything is “perfect.”
              </li>
            </ul>
          </article>
        </section>

        {/* ABOUT + GUARANTEE */}
        <section className="grid gap-6 md:grid-cols-2">
          {/* About Michael */}
          <article className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
              Who&apos;s behind this?
            </h2>
            <p className="mt-3 text-sm text-slate-300">
              I&apos;m{" "}
              <span className="font-semibold text-emerald-300">
                Michael Deeney
              </span>
              , a veteran and systems admin who&apos;s spent years running
              mission-critical infrastructure in the real world.
            </p>
            <p className="mt-2 text-sm text-slate-300">
              I built this Starter Kit for people who are tired of hype and want
              a realistic, step-by-step way to use AI to create income — even if
              they&apos;re busy, older than 25, and not living on Twitter.
            </p>
          </article>

          {/* Guarantee */}
          <article className="rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-5 shadow-[0_0_26px_rgba(16,185,129,0.35)]">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">
              30-day “make-your-first-$27” guarantee
            </h2>
            <p className="mt-3 text-sm text-emerald-100/90">
              Go through the material, use the prompts, and follow the 7-day
              plan. If you don&apos;t feel closer to launching your first
              AI-powered income stream within 30 days, contact me and you&apos;ll
              get a full refund.
            </p>
            <p className="mt-2 text-xs text-emerald-200/80">
              No stress. No pressure. Just a system built by someone who cares
              more about real-world results than screenshots.
            </p>
          </article>
        </section>

        {/* FINAL CTA */}
        <section className="border-t border-slate-800 pt-8 text-center">
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            Ready to build a simple AI system that actually fits your life?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-300">
            Start with the Starter Kit, follow the 7-day plan, and let AI handle
            the repetitive work while you build something real.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3">
            <StarterCheckoutButton />
            <p className="text-[11px] text-slate-500">
              FutureMind Wealth is veteran-owned and built for people who want
              systems, not hype.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
