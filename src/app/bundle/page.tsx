import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Income Launch Bundle | FutureMind Wealth",
  description:
    "The complete FutureMind Wealth AI Income Launch Bundle – Starter Kit, AI Money Toolkit, Blueprint, and AI Website Guide. Everything you need to build your first AI-powered income stream.",
};

type MockupProps = {
  label: string;
  tag: string;
  src: string;
};

function MockupCard({ label, tag, src }: MockupProps) {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-slate-800 bg-slate-950/70 p-4 shadow-[0_0_22px_rgba(0,0,0,0.7)]">
      <div className="mx-auto flex h-72 w-full max-w-[260px] items-start justify-center overflow-hidden">
        <img
          src={src}
          alt={label}
          className="h-full w-auto object-contain drop-shadow-2xl"
        />
      </div>

      <div className="mt-3 text-center">
        <p className="text-sm font-semibold text-slate-50">{label}</p>
        <p className="text-[11px] text-slate-400">{tag}</p>
      </div>
    </div>
  );
}

export default function BundlePage() {
  return (
    <main className="min-h-screen bg-black text-slate-100">
      <div className="mx-auto flex max-w-5xl flex-col gap-16 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* HERO */}
        <section className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
            FutureMind Wealth
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
            The <span className="text-emerald-400">AI Income Launch Bundle</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-300 sm:text-base">
            Use AI to build a real{" "}
            <span className="text-emerald-300">$27–$97 digital income stream</span>{" "}
            — with systems, not hype. This bundle gives you the strategy, the
            execution pack, and the fast-start blueprint in one place.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            {/* MAIN CTA → posts to Stripe checkout API */}
            <form action="/api/checkout-bundle" method="POST">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-7 py-3 text-sm font-semibold tracking-wide text-black shadow-lg shadow-emerald-500/40 transition hover:bg-emerald-300"
              >
                Unlock the AI Income Launch Bundle
              </button>
            </form>
            <p className="text-xs text-slate-400">
              One-time payment • Instant access • Lifetime updates
            </p>
          </div>

          {/* Existing-customer path */}
          <p className="mt-3 text-xs text-slate-400">
            Already purchased?{" "}
            <Link
              href="/signin"
              className="font-semibold text-emerald-300 hover:text-emerald-200"
            >
              Sign in to your member portal →
            </Link>
          </p>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/5 px-4 py-2 text-[11px] font-medium text-emerald-200">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
            Total value $198+ • Your price today{" "}
            <span className="font-semibold text-emerald-300">$47</span>
          </div>
        </section>

        {/* PRODUCT MOCKUPS */}
        <section aria-labelledby="mockups-heading">
          <h2
            id="mockups-heading"
            className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300"
          >
            See exactly what you get
          </h2>
          <p className="mt-2 text-center text-sm text-slate-300">
            Real, finished assets you can open, print, and work from — not vague
            promises.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <MockupCard
              label="AI Income Starter Kit"
              tag="165-page PDF"
              src="/images/AI Income Starter Kit Edition.png"
            />
            <MockupCard
              label="AI Money Toolkit"
              tag="10-page execution pack"
              src="/images/Complete AI Money Toolkit.png"
            />
            <MockupCard
              label="Blueprint & Website Guide"
              tag="Quick-start & site builder"
              src="/images/AI BluePrint.png"
            />
          </div>
        </section>

        {/* WHAT'S INSIDE GRID */}
        <section>
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            What&apos;s inside the bundle
          </h2>
          <p className="mt-2 text-sm text-slate-300">
            This isn&apos;t another random PDF. You&apos;re getting a complete,
            beginner-friendly AI income system with all three core components —
            plus a website bonus.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {/* Starter Kit */}
            <article className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 shadow-md shadow-black/40">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-400">
                1 · System
              </p>
              <h3 className="mt-2 text-lg font-semibold text-slate-50">
                AI Income Starter Kit (165 pages)
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Your complete roadmap for building a simple, realistic
                AI-powered income stream. Choose your income system, design a
                beginner-friendly product, build a one-page funnel, and launch
                without needing a big audience.
              </p>
              <ul className="mt-3 space-y-1.5 text-sm text-slate-300">
                <li>• 7 AI income systems broken down step-by-step</li>
                <li>• Offer, pricing, and positioning frameworks</li>
                <li>• Launch roadmap, worksheets, and action plans</li>
              </ul>
              <p className="mt-3 text-xs font-medium text-emerald-300">
                Value: $97
              </p>
            </article>

            {/* Toolkit */}
            <article className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 shadow-md shadow-black/40">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-400">
                2 · Execution
              </p>
              <h3 className="mt-2 text-lg font-semibold text-slate-50">
                The Complete AI Money Toolkit (10 pages)
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                The plug-and-play execution pack. All the prompts, scripts, and
                content frameworks you need so you never stare at a blank page
                again.
              </p>
              <ul className="mt-3 space-y-1.5 text-sm text-slate-300">
                <li>• 10 product &amp; offer prompts</li>
                <li>• 10 sales page &amp; funnel prompts</li>
                <li>• 20 short-form video scripts</li>
                <li>• 30-day content calendar + value stack &amp; bonuses</li>
              </ul>
              <p className="mt-3 text-xs font-medium text-emerald-300">
                Value: $47
              </p>
            </article>

            {/* Blueprint */}
            <article className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 shadow-md shadow-black/40">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-400">
                3 · Fast Start
              </p>
              <h3 className="mt-2 text-lg font-semibold text-slate-50">
                AI Income Blueprint (Quick-Start Guide)
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Your 24-hour launch overview. If you want the shortest path
                from &quot;idea&quot; to &quot;live offer,&quot; this is it.
              </p>
              <ul className="mt-3 space-y-1.5 text-sm text-slate-300">
                <li>• The simplest product to create first</li>
                <li>• Who to serve and how to reach them</li>
                <li>• A realistic launch plan you can start today</li>
              </ul>
              <p className="mt-3 text-xs font-medium text-emerald-300">
                Value: $27
              </p>
            </article>

            {/* Website Guide */}
            <article className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 shadow-md shadow-black/40">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-400">
                Bonus · Website
              </p>
              <h3 className="mt-2 text-lg font-semibold text-slate-50">
                AI Website Builder Guide (ChatGPT-Powered)
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Build or improve your website using simple AI prompts — even if
                you&apos;ve never built a site before.
              </p>
              <ul className="mt-3 space-y-1.5 text-sm text-slate-300">
                <li>• 7 prompts to build any website</li>
                <li>• Home, About, and Sales page generators</li>
                <li>• Recommended beginner tools &amp; affiliate options</li>
              </ul>
              <p className="mt-3 text-xs font-medium text-emerald-300">
                Value: $27
              </p>
            </article>
          </div>
        </section>

        {/* MEMBER ACCESS LEVEL */}
        <section className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-6 shadow-lg shadow-emerald-500/20">
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            Member access: what the Bundle unlocks
          </h2>
          <p className="mt-2 text-sm text-slate-200">
            When you purchase the AI Income Launch Bundle, your account is
            tagged with{" "}
            <span className="font-semibold text-emerald-300">
              Bundle access
            </span>
            . Inside the member portal you&apos;ll see:
          </p>
          <ul className="mt-4 grid gap-2 text-sm text-slate-100 md:grid-cols-2">
            <li>• Overview &amp; Start Here pages</li>
            <li>• Progress checklist &amp; core downloads</li>
            <li>• Action packs &amp; execution workflows</li>
            <li>• Website templates and setup guides</li>
            <li>• Support &amp; help resources</li>
            <li>• ChatGPT website guide &amp; AI tools library</li>
          </ul>
          <p className="mt-3 text-xs text-emerald-200/90">
            Everything above the Bundle tier disappears from view — and anything
            below it shows as “Included” — so your dashboard feels clean, not
            cluttered with upsells.
          </p>
        </section>

        {/* VALUE / PRICING SECTION */}
        <section className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-6 shadow-lg shadow-emerald-500/20">
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            Total value <span className="text-slate-300">$198+</span> — your
            price today:{" "}
            <span className="text-emerald-300">
              $47<span className="text-sm text-slate-400">*</span>
            </span>
          </h2>
          <p className="mt-2 text-sm text-slate-200">
            One simple bundle. No subscriptions, no upsell traps, no fluff. Just
            a complete AI income system you can start using in the next 10
            minutes.
          </p>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            {/* Mid-page CTA – posts to checkout API */}
            <form action="/api/checkout-bundle" method="POST">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-7 py-3 text-sm font-semibold tracking-wide text-black shadow-lg shadow-emerald-500/40 transition hover:bg-emerald-300"
              >
                Get instant access for $47
              </button>
            </form>
            <div className="space-y-1 text-xs text-slate-300">
              <p>✅ Instant digital access to all files</p>
              <p>✅ Lifetime updates included</p>
              <p>✅ Veteran-owned, no-BS, beginner-friendly system</p>
            </div>
          </div>
        </section>

        {/* WHO IT'S FOR */}
        <section>
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            Who this bundle is for
          </h2>
          <p className="mt-2 text-sm text-slate-300">
            Built for people who want a simple, realistic way to use AI to
            create income — without spending months stuck in &quot;learning
            mode.&quot;
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
                Beginners
              </p>
              <p className="mt-2">
                You want your first digital product, but you don&apos;t know
                where to start. This gives you the exact system to follow.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
                Busy professionals
              </p>
              <p className="mt-2">
                You don&apos;t have time to binge 20+ hours of content. You want
                prompts, scripts, and frameworks you can apply immediately.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
                Creators &amp; builders
              </p>
              <p className="mt-2">
                You already understand AI basics. Now you want a system that
                turns that knowledge into something people can buy.
              </p>
            </div>
          </div>
        </section>

        {/* ABOUT MICHAEL */}
        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            Who&apos;s behind FutureMind Wealth?
          </h2>
          <p className="mt-3 text-sm text-slate-300">
            I&apos;m{" "}
            <span className="font-semibold text-emerald-300">Michael Deeney</span>{" "}
            — a veteran and systems administrator who&apos;s spent years
            building and maintaining mission-critical infrastructure in the real
            world.
          </p>
          <p className="mt-2 text-sm text-slate-300">
            I&apos;m not interested in screenshots and hype. I care about
            systems that normal people can actually run: clear workflows,
            realistic offers, and tools that make sense for your life.
          </p>
          <p className="mt-2 text-sm text-slate-300">
            FutureMind Wealth is where I&apos;m turning that mindset toward AI
            income — so you can skip the noise and build something that lasts.
          </p>
        </section>

        {/* GUARANTEE */}
        <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            30-day &quot;Make your first $27&quot; success guarantee
          </h2>
          <p className="mt-3 text-sm text-slate-300">
            Use the prompts, scripts, and frameworks inside this bundle. If you
            take action and don&apos;t feel closer to launching your first
            AI-powered offer within 30 days, you shouldn&apos;t pay for it.
          </p>
          <p className="mt-2 text-sm text-slate-300">
            No stress. No pressure. Just a veteran-built system designed to work
            in the real world.
          </p>
        </section>

        {/* FINAL CTA */}
        <section className="border-t border-slate-800 pt-8 text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-50">
            AI isn&apos;t the shortcut.{" "}
            <span className="text-emerald-400">The system is.</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-300">
            This bundle gives you the full system — strategy, execution, and
            launch assets — so you can finally move from thinking about it to
            building something real.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3">
            {/* Final CTA – posts to checkout API */}
            <form action="/api/checkout-bundle" method="POST">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-8 py-3 text-sm font-semibold tracking-wide text-black shadow-lg shadow-emerald-500/40 transition hover:bg-emerald-300"
              >
                Unlock the AI Income Launch Bundle now
              </button>
            </form>
            <p className="text-[11px] text-slate-500">
              If this helps you, send the link to one friend who&apos;s stuck in
              AI overwhelm. FutureMind grows by helping good people win.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
