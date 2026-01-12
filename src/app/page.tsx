// src/app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-slate-50">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden border-b border-[#48f3ff]/25 bg-black px-4 py-20">
        <div className="relative z-10 mx-auto flex max-w-5xl flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
          {/* LEFT SIDE */}
          <div className="max-w-xl space-y-6">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-[#48f3ff]">
              FutureMind Wealth · Build Smarter, Earn Smarter
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              Transform your{" "}
              <span className="bg-gradient-to-r from-[#48f3ff] via-[#63ffd6] to-[#39ffc2] bg-clip-text text-transparent">
                mind
              </span>{" "}
              and your{" "}
              <span className="bg-gradient-to-r from-[#48f3ff] via-[#63ffd6] to-[#39ffc2] bg-clip-text text-transparent">
                income—
              </span>{" "}
              with AI systems that work while you don’t.
            </h1>

            <p className="max-w-lg text-sm sm:text-base leading-relaxed text-slate-300">
              FutureMind Wealth means using AI, automation, and modern digital tools
              to build a smarter financial future. Simple systems. Real income.
              <span className="block font-semibold text-slate-100">
                No hype. No burnout. Just clear, repeatable steps to build online
                income in the new economy.
              </span>
            </p>

            {/* Mission Statement */}
            <div className="rounded-xl border border-slate-700/40 bg-slate-950/70 p-4">
              <p className="text-sm text-slate-300 leading-relaxed">
                <span className="font-semibold text-[#48f3ff]">Our mission:</span>{" "}
                empower everyday people with AI-powered systems that create financial
                freedom—without needing tech skills, followers, or expensive tools.
              </p>
            </div>

            <ul className="space-y-1 text-sm text-slate-300">
              <li>• Step-by-step income systems anyone can build.</li>
              <li>• AI workflows, automations, and templates that save time.</li>
              <li>• Veteran-built: disciplined, structured, no-BS approach.</li>
            </ul>

            {/* CTA BAR */}
            <div className="mt-6 rounded-2xl border border-[#48f3ff]/35 bg-slate-950/85 p-4 shadow-[0_0_32px_rgba(72,243,255,0.65)] backdrop-blur">
              <div className="flex flex-col gap-3 sm:flex-row">
                {/* FIXED BLUEPRINT LINK */}
                <Link
                  href="/blueprint"
                  className="w-full text-center rounded-lg bg-[#48f3ff] px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_26px_rgba(72,243,255,0.75)] transition hover:bg-[#63ffd6]"
                >
                  Get the Free AI Blueprint →
                </Link>

                <Link
                  href="/bundle"
                  className="w-full text-center rounded-lg border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-[#48f3ff] hover:text-[#48f3ff]"
                >
                  See the Full AI Launch Bundle
                </Link>
              </div>

              <p className="mt-2 text-xs text-slate-400">
                Zero fluff. Zero spam. Just systems that work.
              </p>

              {/* inline link to Creator Hub */}
              <p className="mt-2 text-[0.7rem] text-slate-500">
                Want to see the tools behind the systems?{" "}
                <Link
                  href="/creator-hub"
                  className="font-semibold text-[#48f3ff] underline underline-offset-4 hover:text-[#63ffd6]"
                >
                  Explore the AI Creator Marketplace →
                </Link>
              </p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="max-w-sm rounded-2xl border border-[#48f3ff]/30 bg-slate-950/85 p-6 shadow-[0_0_30px_rgba(72,243,255,0.6)] backdrop-blur">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#48f3ff]">
              What FutureMind Wealth Means
            </p>
            <p className="mb-4 text-sm leading-relaxed text-slate-300">
              Your mind—upgraded with AI—can build digital income, automate your time,
              and create long-term financial freedom. This is the blueprint for the
              new economy.
            </p>

            <ul className="space-y-3 text-sm text-slate-100">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-[#48f3ff]" />
                <span>AI Content Engine — convert ideas → posts → traffic.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-[#48f3ff]" />
                <span>AI Lead Engine — opt-ins, funnels, and automated follow-up.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-[#48f3ff]" />
                <span>AI Offer Engine — digital products & affiliate income.</span>
              </li>
            </ul>

            <p className="mt-4 text-xs text-slate-400">
              Created by Michael Deeney — veteran, systems architect, and AI educator.
            </p>
          </div>
        </div>
      </section>

      {/* PICK YOUR PATH */}
      <section className="mx-auto max-w-5xl px-4 py-12 bg-black">
        <h2 className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
          Pick Your Path
        </h2>
        <p className="mt-2 text-xs text-slate-400">
          Three ways to build your AI income system — choose how fast you want to move.
        </p>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {/* STARTER KIT */}
          <Link
            href="/starter-kit"
            className="group rounded-2xl border border-slate-800 bg-black p-4 text-sm shadow-[0_0_22px_rgba(72,243,255,0.25)] transition hover:border-[#48f3ff] hover:shadow-[0_0_32px_rgba(72,243,255,0.5)]"
          >
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#48f3ff]">
              $27 · Starter
            </p>
            <p className="font-medium text-slate-50">AI Income Starter Kit</p>
            <p className="mt-1 text-xs text-slate-400">
              The simple, proven roadmap to go from zero to your first income system.
            </p>
          </Link>

          {/* TOOLKIT */}
          <Link
            href="/starter-kit/toolkit"
            className="group rounded-2xl border border-slate-800 bg-black p-4 text-sm shadow-[0_0_22px_rgba(72,243,255,0.25)] transition hover:border-[#48f3ff] hover:shadow-[0_0_32px_rgba(72,243,255,0.5)]"
          >
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#48f3ff]">
              $49 · Toolkit
            </p>
            <p className="font-medium text-slate-50">Complete AI Money Toolkit</p>
            <p className="mt-1 text-xs text-slate-400">
              Execution packs, checklists, workflows, and templates ready to plug in.
            </p>
          </Link>

          {/* FULL BUNDLE */}
          <Link
            href="/bundle"
            className="group rounded-2xl border border-[#48f3ff]/60 bg-black p-4 text-sm shadow-[0_0_32px_rgba(72,243,255,0.6)] transition hover:border-[#63ffd6] hover:shadow-[0_0_45px_rgba(72,243,255,0.9)]"
          >
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#48f3ff]">
              $147 · Pro Bundle
            </p>
            <p className="font-medium text-slate-50">Full AI Launch System</p>
            <p className="mt-1 text-xs text-slate-300">
              Everything in Starter + Toolkit — plus{" "}
              <span className="font-semibold text-slate-100">
                done-for-you website templates
              </span>{" "}
              so you can launch{" "}
              <span className="font-semibold text-slate-100">
                without building pages from scratch
              </span>
              .
            </p>
            <p className="mt-2 text-[0.7rem] text-slate-400">
              Best for builders who want a website ready to deploy.
            </p>
          </Link>
        </div>
      </section>

      {/* AI CREATOR MARKETPLACE SECTION */}
      <section className="mx-auto max-w-5xl px-4 pb-12 bg-black">
        <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-6 shadow-[0_0_26px_rgba(72,243,255,0.35)]">
          <h2 className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
            Bonus · Included with FutureMind Wealth
          </h2>
          <div className="mt-3 grid gap-4 md:grid-cols-[2fr,1fr] md:items-center">
            <div>
              <p className="text-lg font-semibold text-slate-50">
                AI Creator Marketplace & Tool Stack Hub
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Browse 20+ handpicked AI tools organized into creator stacks for TikTok,
                YouTube, and local business. See exactly which tools to use for
                scripting, voiceover, design, editing, automation, and analytics—
                without drowning in options.
              </p>
              <p className="mt-2 text-xs text-slate-400">
                Built to work hand-in-hand with the AI Income Starter Kit and Launch
                Bundle. Start simple, then upgrade tools only when they&apos;re paying
                for themselves.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link
                  href="/creator-hub"
                  className="inline-flex items-center justify-center rounded-full bg-[#48f3ff] px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-950 shadow-[0_0_28px_rgba(72,243,255,0.8)] transition hover:bg-[#63ffd6]"
                >
                  Explore the AI Creator Marketplace →
                </Link>
                <Link
                  href="/portal"
                  className="inline-flex items-center justify-center rounded-full border border-slate-600 px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-100 transition hover:border-[#48f3ff] hover:text-[#48f3ff]"
                >
                  Go to Member Portal
                </Link>
              </div>
            </div>

            <div className="rounded-xl border border-slate-700 bg-black/70 p-4 text-xs text-slate-300">
              <p className="font-semibold text-slate-100">
                What you&apos;ll find inside:
              </p>
              <ul className="mt-2 space-y-1.5">
                <li>• Creator stacks for TikTok, YouTube, and local lead gen.</li>
                <li>• Direct links to AI tools (many with partner perks).</li>
                <li>• Clear “Use it for” notes so you know why each tool exists.</li>
                <li>• Search + filters so you can build a lean, focused stack.</li>
              </ul>
              <p className="mt-3 text-[0.7rem] text-slate-500">
                Think of it as your personal &quot;software control center&quot; for
                everything you&apos;ll use with FutureMind Wealth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="mx-auto max-w-5xl px-4 pb-16 bg-black">
        <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Who this is for
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-3 text-sm text-slate-300">
            <div>
              <p className="font-semibold text-slate-50 mb-1">Beginners</p>
              <p className="text-xs text-slate-400">
                You want your first online income system and clear, step-by-step guidance.
              </p>
            </div>
            <div>
              <p className="font-semibold text-slate-50 mb-1">Busy professionals</p>
              <p className="text-xs text-slate-400">
                You’re short on time and want automations that quietly work in the
                background.
              </p>
            </div>
            <div>
              <p className="font-semibold text-slate-50 mb-1">Creators & builders</p>
              <p className="text-xs text-slate-400">
                You already create, but you want systems that turn content into consistent
                income.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
