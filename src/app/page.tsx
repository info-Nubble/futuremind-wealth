// Inline SVG icons (no external deps)
function IconYouTube(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" {...props}>
      <rect x="2" y="5" width="20" height="14" rx="3" fill="currentColor" opacity="0.15" />
      <path d="M10 9l6 3-6 3V9z" fill="currentColor" />
    </svg>
  );
}

function IconTikTok(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="4" fill="currentColor" opacity="0.15" />
      <path
        d="M14 6v3.2a4.8 4.8 0 0 0 3.6 1.6v2.1a6.7 6.7 0 0 1-3.6-1.1V16a4.9 4.9 0 1 1-4.9-4.9c.3 0 .6 0 .9.1V13a2.8 2.8 0 1 0 2 2.7V6h2z"
        fill="currentColor"
      />
    </svg>
  );
}

function IconInstagram(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" fill="currentColor" opacity="0.15" />
      <circle cx="12" cy="12" r="4.5" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

const TOOLS = [
  {
    name: "OpusClip",
    desc: "Auto-splits long videos into viral shorts.",
    href: "https://your-affiliate-link-opusclip",
  },
  {
    name: "ElevenLabs",
    desc: "Humanlike AI voiceovers in minutes.",
    href: "https://your-affiliate-link-elevenlabs",
  },
  {
    name: "Durable AI",
    desc: "Launch a business website in 60 seconds.",
    href: "https://your-affiliate-link-durable",
  },
  {
    name: "Midjourney",
    desc: "Generate sellable art and assets.",
    href: "https://your-affiliate-link-midjourney",
  },
  {
    name: "ChatGPT + Canva",
    desc: "Write & design content fast.",
    href: "https://your-affiliate-link-canva",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "I finally understand how all the AI tools fit together. One email helped me set up a simple funnel that actually collects leads.",
    name: "Alex R.",
    tag: "Creator & side-hustler",
  },
  {
    quote:
      "No hype, just clear systems. I plugged in one of the workflows and made my first $500 online in a couple of weeks.",
    name: "Sarah M.",
    tag: "Freelancer",
  },
  {
    quote:
      "As a beginner, this is the first time AI has felt like a real business tool instead of a toy.",
    name: "Jordan K.",
    tag: "New to AI & automation",
  },
];

export default function Page() {
  const year = new Date().getFullYear();

  return (
    <main className="min-h-screen">
      {/* STICKY TOP BAR / BRAND */}
      <header className="sticky top-0 z-40 border-b border-neutral-900/70 bg-black/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-400 text-xs font-bold text-black shadow-[0_0_16px_rgba(16,185,129,0.6)]">
              FM
            </div>
            <div>
              <div className="text-sm font-semibold tracking-wide">
                FutureMind Wealth
              </div>
              <div className="text-[11px] text-neutral-400">
                Veteran-owned • Michael Deeney
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs text-neutral-400">
            <nav className="hidden items-center gap-4 md:flex">
              <a href="#systems" className="hover:text-neutral-200">
                AI Systems
              </a>
              <a href="#tools" className="hover:text-neutral-200">
                Tools
              </a>
              <a href="#join" className="hover:text-neutral-200">
                Newsletter
              </a>
            </nav>
            <a
              href="#join"
              className="rounded-full bg-gradient-to-r from-emerald-500 to-cyan-400 px-4 py-2 text-[11px] font-semibold text-black shadow-[0_0_14px_rgba(16,185,129,0.55)] hover:brightness-110"
            >
              Get the blueprint
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-6 pt-16 pb-14">
          <div className="grid gap-10 md:grid-cols-[minmax(0,2.1fr)_minmax(0,1.3fr)] md:items-center">
            {/* Left: text + form */}
            <div>
              <span className="rounded-full border border-emerald-500/40 bg-black/40 px-3 py-1 text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300/90 backdrop-blur">
                FutureMind Wealth • AI Income Blueprint
              </span>

              <h1 className="mt-5 text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                Turn{" "}
                <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-300 bg-clip-text text-transparent">
                  AI into a real income system
                </span>
                — not just more content.
              </h1>

              <p className="mt-4 max-w-xl text-sm md:text-base text-neutral-300">
                Get the 7-system AI Income Blueprint I actually use to create
                content, grow an audience, and build digital income streams —
                laid out step by step.
              </p>

              {/* Trust bullets */}
              <ul className="mt-5 space-y-1.5 text-xs md:text-sm text-neutral-300">
                <li>• 7 plug-and-play AI systems that turn content into income.</li>
                <li>• Built around automation, audience growth, and simple offers.</li>
                <li>
                  • Veteran-built, no-BS, focused on long-term freedom over hype.
                </li>
              </ul>

              {/* Email capture -> posts to /api/subscribe */}
              <div className="mt-7 w-full max-w-xl rounded-2xl bg-neutral-950/80 p-4 shadow-[0_0_35px_rgba(16,185,129,0.18)] ring-1 ring-emerald-500/30">
                <form
                  method="post"
                  action="/api/subscribe"
                  className="flex flex-col gap-3 md:flex-row"
                >
                  <input
                    required
                    name="email"
                    type="email"
                    placeholder="Enter your email for the 7 AI Systems blueprint (free)"
                    className="flex-1 rounded-xl bg-neutral-900 px-4 py-3 text-sm text-white outline-none focus:ring-2 focus:ring-emerald-500 transition placeholder:text-neutral-500"
                  />
                  <input type="hidden" name="source" value="hero" />
                  <button
                    type="submit"
                    className="rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-black shadow-[0_0_16px_rgba(16,185,129,0.55)] transition hover:brightness-110"
                  >
                    Get the free blueprint →
                  </button>
                </form>
                <p className="mt-2 text-[11px] text-neutral-400">
                  No spam. Unsubscribe in one click. I respect your time.
                </p>
              </div>

              {/* Socials */}
              <div className="mt-6 flex flex-wrap items-center gap-5 text-xs md:text-sm text-neutral-300">
                <span className="text-neutral-500">Follow breakdowns on:</span>
                <a
                  href="https://youtube.com/@futuremindwealth"
                  className="group flex items-center gap-1.5 hover:text-white"
                >
                  <IconYouTube className="h-4 w-4 transition group-hover:drop-shadow-[0_0_6px_rgba(16,185,129,0.8)]" />{" "}
                  YouTube
                </a>
                <a
                  href="https://www.tiktok.com/@futuremindwealth"
                  className="group flex items-center gap-1.5 hover:text-white"
                >
                  <IconTikTok className="h-4 w-4 transition group-hover:drop-shadow-[0_0_6px_rgba(16,185,129,0.8)]" />{" "}
                  TikTok
                </a>
                <a
                  href="https://instagram.com/futuremindwealth"
                  className="group flex items-center gap-1.5 hover:text-white"
                >
                  <IconInstagram className="h-4 w-4 transition group-hover:drop-shadow-[0_0_6px_rgba(16,185,129,0.8)]" />{" "}
                  Instagram
                </a>
              </div>
            </div>

            {/* Right: visual card */}
            <div className="hidden md:block">
              <div className="relative rounded-3xl bg-neutral-950/80 p-6 shadow-[0_0_40px_rgba(16,185,129,0.25)] ring-1 ring-emerald-500/30">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                  The 7-System Stack
                </div>
                <p className="mt-2 text-sm text-neutral-300">
                  A simple, honest map of how AI content, email, and offers
                  work together to build real, repeatable income.
                </p>
                <div className="mt-5 space-y-3 text-xs text-neutral-300">
                  <div className="flex items-center justify-between rounded-xl bg-neutral-900/80 px-3 py-2">
                    <span className="font-semibold text-emerald-300">
                      ① Content Engine
                    </span>
                    <span className="ml-2 text-neutral-400">
                      Shorts, posts, emails
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-neutral-900/80 px-3 py-2">
                    <span className="font-semibold text-emerald-300">
                      ② Lead Engine
                    </span>
                    <span className="ml-2 text-neutral-400">
                      Opt-ins, funnels, automations
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-neutral-900/80 px-3 py-2">
                    <span className="font-semibold text-emerald-300">
                      ③ Offer Engine
                    </span>
                    <span className="ml-2 text-neutral-400">
                      Affiliate, products, services
                    </span>
                  </div>
                </div>
                <div className="mt-5 rounded-xl border border-emerald-500/30 bg-neutral-900/80 px-3 py-3 text-[11px] text-neutral-300">
                  Run by{" "}
                  <span className="font-semibold text-emerald-300">
                    Michael Deeney
                  </span>{" "}
                  – veteran, systems admin, and builder. Built for people who
                  actually want wealth, not hype.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section
        id="systems"
        className="mx-auto max-w-6xl px-6 pb-14 scroll-mt-24"
      >
        <div className="grid gap-8 rounded-3xl bg-neutral-950/70 p-8 shadow-[0_0_30px_rgba(16,185,129,0.18)] ring-1 ring-neutral-900 md:grid-cols-3">
          <div>
            <h2 className="text-xl md:text-2xl font-bold">
              When you join the list, you get:
            </h2>
            <p className="mt-3 text-sm text-neutral-300">
              Everything is designed to stack — not overload you. One clear,
              actionable playbook at a time.
            </p>
          </div>
          <div className="space-y-4 text-sm md:col-span-2">
            <div>
              <div className="text-emerald-300 font-semibold">
                The 7 Systems PDF
              </div>
              <p className="mt-1 text-neutral-300">
                A clear blueprint showing how each AI system fits together to
                create income — not just content.
              </p>
            </div>
            <div>
              <div className="text-emerald-300 font-semibold">
                Weekly Playbook Emails
              </div>
              <p className="mt-1 text-neutral-300">
                One high-signal email per week breaking down a workflow, tool,
                or money-making idea you can copy.
              </p>
            </div>
            <div>
              <div className="text-emerald-300 font-semibold">
                Tool Stack &amp; Templates
              </div>
              <p className="mt-1 text-neutral-300">
                Clickable tool stack, prompts, and templates so you’re never
                staring at a blank page.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY LISTEN TO ME */}
      <section className="mx-auto max-w-6xl px-6 pb-14">
        <div className="flex flex-col gap-4 rounded-3xl bg-neutral-950/80 p-6 md:flex-row md:items-center md:p-7 shadow-[0_0_26px_rgba(16,185,129,0.22)] ring-1 ring-neutral-900">
          <div className="flex-1">
            <h2 className="text-xl font-bold">Why you should listen to me</h2>
            <p className="mt-2 text-sm text-neutral-300">
              I&apos;m Michael Deeney — a veteran and systems admin who&apos;s
              spent years building real systems inside large organizations.
              FutureMind Wealth is my playbook for turning those skills toward
              AI-driven income streams.
            </p>
          </div>
          <div className="flex-1 text-sm text-neutral-300">
            <ul className="space-y-1.5">
              <li>• I actually use the tools I recommend.</li>
              <li>• I care more about predictable income than screenshots.</li>
              <li>
                • Everything I share is built to work for normal people, not
                gurus.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-6xl px-6 pb-14">
        <h2 className="text-xl md:text-2xl font-bold text-center">
          Built for people who actually want results
        </h2>
        <p className="mt-2 text-center text-sm text-neutral-400">
          A few words from people using these systems and playbooks.
        </p>
        <div className="mt-7 grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl bg-neutral-950/80 p-5 text-sm text-neutral-300 shadow-[0_0_20px_rgba(0,0,0,0.6)] ring-1 ring-neutral-900"
            >
              <p className="italic">“{t.quote}”</p>
              <div className="mt-3 text-xs text-neutral-400">
                <span className="font-semibold text-emerald-300">
                  {t.name}
                </span>
                <span className="block text-[11px]">{t.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TOOLS GRID */}
      <section
        id="tools"
        className="mx-auto max-w-6xl px-6 pb-14 scroll-mt-24"
      >
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-xl md:text-2xl font-bold">Tools I actually use</h2>
            <p className="mt-2 text-sm text-neutral-400">
              Some links are affiliate links. If you buy through them, I may
              earn a commission at no extra cost to you.
            </p>
          </div>
          <div className="text-xs text-neutral-500">
            Updated as my stack evolves.
          </div>
        </div>

        <div className="mt-7 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TOOLS.map((t) => (
            <a
              key={t.name}
              href={t.href}
              className="block rounded-2xl bg-neutral-950/80 p-5 shadow-[0_0_20px_rgba(0,0,0,0.6)] ring-1 ring-neutral-900 transition hover:-translate-y-0.5 hover:shadow-[0_0_22px_rgba(16,185,129,0.25)]"
            >
              <div className="text-base font-semibold text-white">
                {t.name}
              </div>
              <div className="mt-1 text-sm text-neutral-300">{t.desc}</div>
              <div className="mt-3 inline-flex items-center text-xs font-semibold text-emerald-400">
                Try now <span className="ml-1">→</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* FEATURED BREAKDOWN */}
      <section className="mx-auto max-w-5xl px-6 pb-14">
        <h2 className="text-xl md:text-2xl font-bold">Featured breakdown</h2>
        <p className="mt-2 text-sm text-neutral-300">
          Watch me walk through one of the core systems from the blueprint.
        </p>
        <div className="mt-4 overflow-hidden rounded-3xl bg-gradient-to-b from-neutral-900 to-black p-[2px] shadow-[0_0_30px_rgba(16,185,129,0.25)]">
          <div className="h-full w-full rounded-3xl bg-neutral-950 p-3 md:p-4">
            <div className="aspect-video w-full overflow-hidden rounded-2xl bg-neutral-900">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                title="FutureMind Wealth – Featured breakdown"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        id="join"
        className="mx-auto max-w-6xl px-6 pb-20 scroll-mt-28"
      >
        <div className="rounded-3xl bg-neutral-950/80 p-8 text-center shadow-[0_0_30px_rgba(16,185,129,0.2)] ring-1 ring-emerald-500/30">
          <h2 className="text-2xl md:text-3xl font-bold">
            Ready to start building your AI income stack?
          </h2>
          <p className="mt-3 text-sm md:text-base text-neutral-300">
            Join the newsletter and get the 7 AI Systems blueprint, weekly
            playbooks, and the exact tools I use — free.
          </p>
          <form
            method="post"
            action="/api/subscribe"
            className="mt-6 flex flex-col items-center gap-3 md:flex-row md:justify-center"
          >
            <input
              required
              name="email"
              type="email"
              placeholder="Your best email"
              className="w-full max-w-md rounded-xl bg-neutral-900 px-4 py-3 text-sm text-white outline-none focus:ring-2 focus:ring-emerald-500 transition placeholder:text-neutral-500"
            />
            <input type="hidden" name="source" value="final-cta" />
            <button
              type="submit"
              className="rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-black shadow-[0_0_18px_rgba(16,185,129,0.6)] transition hover:brightness-110"
            >
              Get the blueprint &amp; join →
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-neutral-900/80">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 md:flex-row">
          <p className="text-xs md:text-sm text-neutral-400">
            © {year} FutureMind Wealth • Automate • Scale • Live Free
          </p>
          <div className="text-xs text-neutral-500">
            <a href="/privacy" className="hover:text-neutral-300">
              Privacy &amp; Disclaimer
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
