// pages/starter-kit.tsx
import React from "react";

export default function StarterKitPage() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-100">
      {/* Page wrapper */}
      <main className="mx-auto max-w-5xl px-4 pb-16 pt-10 md:pt-16">
        {/* HERO */}
        <section className="mb-16 md:mb-20">
          <div className="mb-6 inline-flex items-center rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-emerald-300">
            FutureMind Wealth · AI Automation Starter Kit
          </div>

          <h1 className="text-3xl font-bold leading-tight text-slate-50 sm:text-4xl md:text-5xl">
            Build automated online income in{" "}
            <span className="text-emerald-400">7 days</span> — using a simple
            AI system anyone can follow.
          </h1>

          <p className="mt-4 max-w-2xl text-base text-slate-300 md:text-lg">
            Get the step-by-step starter kit I use to turn skills into
            automated income — with AI doing 80% of the work. No audience, no
            tech background, and no hype required.
          </p>

          <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4">
            <a
              href="https://your-checkout-link-here.com" // TODO: replace with real checkout URL
              className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-7 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-300"
            >
              Get the Starter Kit · $27
            </a>
            <p className="text-xs text-slate-400">
              Instant digital download · 30-day guarantee · Lifetime access
            </p>
          </div>
        </section>

        {/* WHAT YOU GET */}
        <section className="mb-16 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <h2 className="text-xl font-semibold text-slate-50">
              What you get inside
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              A complete, no-fluff system for launching your first AI-powered
              income engine.
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-200">
              <li>
                <span className="mr-2 text-emerald-400">✔</span>
                <strong>FutureMind Method PDF</strong> — the 5-step framework
                for turning skills into automated income.
              </li>
              <li>
                <span className="mr-2 text-emerald-400">✔</span>
                <strong>Tool Stack & Setup Guides</strong> — the exact AI tools
                I use, how they fit together, and how to avoid wasting money.
              </li>
              <li>
                <span className="mr-2 text-emerald-400">✔</span>
                <strong>High-Impact Prompts Library</strong> — copy-and-paste
                prompts for content, workflows, products, and funnels.
              </li>
              <li>
                <span className="mr-2 text-emerald-400">✔</span>
                <strong>Templates & Checklists</strong> — daily workflow,
                product creation, and automation setup checklists.
              </li>
              <li>
                <span className="mr-2 text-emerald-400">✔</span>
                <strong>20-Minute Automation Build</strong> — your first simple
                automation you can launch today.
              </li>
              <li>
                <span className="mr-2 text-emerald-400">✔</span>
                <strong>7-Day Action Plan</strong> — a clear roadmap from “no
                system” to “live automation.”
              </li>
            </ul>
          </div>

          {/* WHY IT WORKS */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <h2 className="text-xl font-semibold text-slate-50">
              Why this works (when other stuff doesn’t)
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              Most people drown in tutorials, tools, and tactics. This kit gives
              you a{" "}
              <span className="font-semibold text-emerald-300">
                single, repeatable system
              </span>{" "}
              to follow.
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-200">
              <li>
                <span className="mr-2 text-emerald-400">➤</span>
                Focused on systems, not random hacks.
              </li>
              <li>
                <span className="mr-2 text-emerald-400">➤</span>
                Built for people with jobs, families, and limited time.
              </li>
              <li>
                <span className="mr-2 text-emerald-400">➤</span>
                Uses AI to automate work — not to add more to your plate.
              </li>
              <li>
                <span className="mr-2 text-emerald-400">➤</span>
                Designed to get you a real win in 7 days or less.
              </li>
            </ul>
          </div>
        </section>

        {/* WHO IT'S FOR / NOT FOR */}
        <section className="mb-16 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <h2 className="text-lg font-semibold text-slate-50">
              This is for you if…
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-200">
              <li>
                <span className="mr-2 text-emerald-400">✔</span>
                You want to build real income, not chase dopamine from content.
              </li>
              <li>
                <span className="mr-2 text-emerald-400">✔</span>
                You’re willing to follow a clear plan for 7 days.
              </li>
              <li>
                <span className="mr-2 text-emerald-400">✔</span>
                You like the idea of AI doing most of the repetitive work.
              </li>
              <li>
                <span className="mr-2 text-emerald-400">✔</span>
                You want something that respects your time and intelligence.
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <h2 className="text-lg font-semibold text-slate-50">
              This is not for you if…
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-200">
              <li>
                <span className="mr-2 text-rose-400">✖</span>
                You’re looking for a get-rich-quick scheme.
              </li>
              <li>
                <span className="mr-2 text-rose-400">✖</span>
                You don’t want to think at all — this is a partnership with AI,
                not magic.
              </li>
              <li>
                <span className="mr-2 text-rose-400">✖</span>
                You refuse to take action unless everything is “perfect.”
              </li>
            </ul>
          </div>
        </section>

        {/* ABOUT / CREDIBILITY */}
        <section className="mb-16 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-lg font-semibold text-slate-50">
            Who’s behind FutureMind Wealth?
          </h2>
          <p className="mt-3 text-sm text-slate-300">
            I&apos;m <span className="font-semibold">Michael Deeney</span> —
            veteran, systems admin, and builder. I’ve spent years designing
            real-world systems inside large organizations.
          </p>
          <p className="mt-3 text-sm text-slate-300">
            FutureMind Wealth is my playbook for turning those skills into
            AI-driven income systems. I care less about screenshots and more
            about predictable, repeatable results for normal people.
          </p>
          <p className="mt-3 text-sm text-slate-300">
            If you want a calm, honest, systems-first path into AI income —
            you&apos;re in the right place.
          </p>
        </section>

        {/* GUARANTEE + FINAL CTA */}
        <section className="mb-10 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-emerald-500/40 bg-emerald-500/5 p-6">
            <h2 className="text-lg font-semibold text-emerald-300">
              30-Day No-Risk Guarantee
            </h2>
            <p className="mt-3 text-sm text-slate-200">
              Go through the kit. If you don’t feel clearer, more focused, and
              more capable of building an AI income system, email me within 30
              days and I’ll refund you.
            </p>
            <p className="mt-3 text-sm text-slate-200">
              I only want your money if this actually helps you move forward.
            </p>
          </div>

          <div className="flex flex-col justify-center rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h2 className="text-lg font-semibold text-slate-50">
              Ready to build a real AI income system?
            </h2>
            <p className="mt-3 text-sm text-slate-300">
              Start today for less than the price of takeout. One system, one
              clear plan, and AI doing most of the heavy lifting.
            </p>
            <a
              href="https://your-checkout-link-here.com" // TODO: replace with real checkout URL
              className="mt-5 inline-flex items-center justify-center rounded-full bg-emerald-400 px-7 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-300"
            >
              Get the AI Automation Starter Kit · $27
            </a>
            <p className="mt-2 text-xs text-slate-500">
              Instant access · Secure checkout · Lifetime updates
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-slate-800 pt-10">
          <h2 className="text-lg font-semibold text-slate-50">FAQ</h2>
          <div className="mt-4 space-y-4 text-sm text-slate-200">
            <div>
              <p className="font-semibold">
                Do I need an audience or followers?
              </p>
              <p className="mt-1 text-slate-300">
                No. The Starter Kit is built to help you create a system that
                works even if you&apos;re starting from zero.
              </p>
            </div>
            <div>
              <p className="font-semibold">How fast can I see results?</p>
              <p className="mt-1 text-slate-300">
                You can build your first simple automation in a single evening.
                Income depends on your execution, but you&apos;ll stop guessing
                and start following a clear path.
              </p>
            </div>
            <div>
              <p className="font-semibold">Is this beginner-friendly?</p>
              <p className="mt-1 text-slate-300">
                Yes. Everything is written for smart beginners who want a
                direct, honest system without jargon.
              </p>
            </div>
            <div>
              <p className="font-semibold">How do I access the kit?</p>
              <p className="mt-1 text-slate-300">
                Right after checkout, you&apos;ll receive an instant download
                link and an email with access details.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
