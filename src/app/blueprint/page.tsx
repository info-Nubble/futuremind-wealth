// src/app/blueprint/page.tsx
import Link from "next/link";

export default function BlueprintPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Top bar / simple header */}
      <header className="w-full border-b border-white/5">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="h-7 w-7 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400" />
            <span className="text-sm font-semibold tracking-wide text-gray-200">
              FutureMind <span className="text-emerald-400">Wealth</span>
            </span>
          </Link>
          <div className="hidden text-xs text-gray-400 sm:inline">
            Veteran-owned • AI-powered income systems
          </div>
        </div>
      </header>

      <section className="mx-auto flex max-w-5xl flex-col gap-10 px-4 py-12 lg:flex-row lg:items-center lg:py-20">
        {/* Left: Copy */}
        <div className="w-full lg:w-1/2">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-200 mb-6">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Free PDF • 20 page blueprint
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-4">
            Get the{" "}
            <span className="text-emerald-400">
              AI Income Blueprint
            </span>{" "}
            that turns AI into a real income system.
          </h1>

          <p className="text-sm sm:text-base text-gray-300 mb-4">
            Learn the complete 7-system framework I use to turn AI into content,
            automation, and digital products — without needing a team, design
            skills, or complicated tech.
          </p>

          <ul className="mb-8 space-y-2 text-sm text-gray-300">
            <li>• Build a simple daily AI content engine.</li>
            <li>• Turn viewers into subscribers and warm leads automatically.</li>
            <li>• Create your first digital product in days, not months.</li>
            <li>• Set up systems that can earn even when you’re offline.</li>
          </ul>

          {/* Social proof line */}
          <p className="mb-6 text-xs text-gray-400">
            Written by{" "}
            <span className="font-medium text-gray-200">
              Michael J. Deeney
            </span>{" "}
            — veteran, IT leader, and automation strategist.
          </p>

          {/* Form */}
          <form
            action="/api/subscribe"
            method="POST"
            className="flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your best email"
              className="w-full flex-1 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
            />
            {/* track source in ConvertKit */}
            <input type="hidden" name="source" value="blueprint-page" />
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 px-5 py-3 text-sm font-semibold text-black shadow-lg shadow-emerald-500/30 transition hover:brightness-110 mt-1 sm:mt-0"
            >
              Get the AI Income Blueprint
            </button>
          </form>

          <p className="mt-3 text-xs text-gray-500">
            You’ll be redirected to an instant download page and I’ll email you
            a copy so you don’t lose it. No spam — unsubscribe anytime.
          </p>
        </div>

        {/* Right: Preview / visual */}
        <div className="w-full lg:w-1/2">
          <div className="relative mx-auto max-w-md rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 via-cyan-500/5 to-black p-5 shadow-xl shadow-emerald-500/20">
            <div className="mb-4 flex items-center justify-between text-xs text-gray-300">
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                AI Income Blueprint (PDF)
              </span>
              <span className="rounded-full border border-white/10 px-2 py-0.5 text-[10px] uppercase tracking-wide text-gray-400">
                Downloadable
              </span>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/60 p-4">
              <p className="mb-2 text-[11px] font-medium text-emerald-300">
                Inside the blueprint:
              </p>
              <ul className="space-y-1.5 text-[11px] text-gray-300">
                <li>• System 1 — AI Content Engine</li>
                <li>• System 2 — Automation Pipeline</li>
                <li>• System 3 — Lead Magnet System</li>
                <li>• System 4 — Audience Growth Network</li>
                <li>• System 5 — Digital Product Builder</li>
                <li>• System 6 — Monetization System</li>
                <li>• System 7 — Optimization & AI Income Flywheel</li>
              </ul>
            </div>

            <div className="mt-4 flex items-center justify-between text-[11px] text-gray-400">
              <span>Delivered instantly after signup.</span>
              <span className="text-emerald-300">Free today</span>
            </div>
          </div>
        </div>
      </section>

      {/* Small footer */}
      <footer className="border-t border-white/5 py-6">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-4 text-xs text-gray-500 sm:flex-row">
          <span>© {new Date().getFullYear()} FutureMind Wealth. All rights reserved.</span>
          <div className="flex gap-4">
            <Link href="/" className="hover:text-emerald-300">
              Home
            </Link>
            <Link href="/privacy" className="hover:text-emerald-300">
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
