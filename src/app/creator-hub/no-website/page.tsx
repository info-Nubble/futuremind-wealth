"use client";

import Link from "next/link";

const CHATGPT_URL =
  process.env.NEXT_PUBLIC_CHATGPT_URL ?? "https://chat.openai.com/";
const ELEVENLABS_URL =
  process.env.NEXT_PUBLIC_ELEVENLABS_URL ?? "https://try.elevenlabs.io/";
const OPUSCLIP_URL =
  process.env.NEXT_PUBLIC_OPUSCLIP_URL ?? "https://www.opus.pro/";

// Core creator/affiliate tools
const CANVA_URL =
  process.env.NEXT_PUBLIC_CANVA_URL ?? "https://www.canva.com/";
const MIDJOURNEY_URL =
  process.env.NEXT_PUBLIC_MIDJOURNEY_URL ?? "https://www.midjourney.com/";
const PICTORY_URL = "https://pictory.ai/";
const INVIDEO_URL = "https://invideo.io/";
const COPYAI_URL = "https://www.copy.ai/";
const JASPER_URL = "https://www.jasper.ai/";
const TUBEBUDDY_URL = "https://www.tubebuddy.com/";
const VIDIQ_URL = "https://vidiq.com/";

// Extra short-form helpers
const SOCIALSIGHT_URL = "https://socialsight.ai/";
const PIKA_URL = "https://pika.art/";
const RUNWAY_URL = "https://runwayml.com/";
const CAPCUT_URL = "https://www.capcut.com/";
const DESCRIPT_UNDERLORD_URL = "https://www.descript.com/underlord";
const CREATI_STUDIO_URL = "https://www.creati.studio/";
const BIGMOTION_URL = "https://www.bigmotion.ai/";
const CLAUDE_URL = "https://claude.ai/";
const METRICOOL_URL = "https://metricool.com/";
const PERPLEXITY_URL = "https://www.perplexity.ai/";
const HEYGEN_URL = "https://www.heygen.com/";
const SYNTHESIA_URL = "https://www.synthesia.io/";
const VEED_URL = "https://www.veed.io/";

type Stack = {
  id: string;
  label: string;
  title: string;
  description: string;
  bestFor: string;
  tools: {
    name: string;
    role: string;
    href: string;
    affiliate?: boolean;
  }[];
};

const STACKS: Stack[] = [
  {
    id: "faceless-viral",
    label: "Stack 01",
    title: "Faceless Viral TikTok, Reels & Shorts",
    description:
      "Turn AI scripts into daily viral-style videos without ever showing your face. Perfect for finance, mindset, business tips, or storytelling channels built on TikTok, IG Reels, and YouTube Shorts.",
    bestFor:
      "You want to post 1–2 short-form videos per day using AI scripts, AI voice, bold captions, and high-energy edits.",
    tools: [
      {
        name: "SocialSight AI",
        role:
          "Find trending topics, hooks, and angles in your niche before you write a single script.",
        href: SOCIALSIGHT_URL,
        affiliate: true,
      },
      {
        name: "ChatGPT",
        role:
          "Generate 30–60 hooks, scripts, and captions per month around those winning topics.",
        href: CHATGPT_URL,
        affiliate: true,
      },
      {
        name: "Copy.ai",
        role:
          "Spin variations of your best hooks and captions so you can A/B test intros and CTAs.",
        href: COPYAI_URL,
        affiliate: true,
      },
      {
        name: "Canva Pro",
        role:
          "Create reusable templates for text-over-screen, end cards, and carousel-style shorts.",
        href: CANVA_URL,
        affiliate: true,
      },
      {
        name: "Midjourney",
        role:
          "Generate abstract backgrounds, scenes, and textures you can loop behind your captions.",
        href: MIDJOURNEY_URL,
      },
      {
        name: "ElevenLabs",
        role:
          "Turn your scripts into clean, natural-sounding AI voiceovers so you never have to record daily.",
        href: ELEVENLABS_URL,
        affiliate: true,
      },
      {
        name: "BigMotion.ai",
        role:
          "Layer on motion captions, zooms, and kinetic text so even simple clips feel like viral edits.",
        href: BIGMOTION_URL,
        affiliate: true,
      },
      {
        name: "CapCut",
        role:
          "Assemble clips, add captions, and export vertical videos quickly for TikTok, Reels, and Shorts.",
        href: CAPCUT_URL,
      },
      {
        name: "OpusClip",
        role:
          "If you record longer videos or podcasts, auto-find the best short clips and format them for Shorts.",
        href: OPUSCLIP_URL,
        affiliate: true,
      },
    ],
  },
  {
    id: "ugc-products",
    label: "Stack 02",
    title: "Product & UGC Style Shorts",
    description:
      "Built for Amazon finds, product reviews, list videos, and UGC-style ad content where the video is centered on the product, not you.",
    bestFor:
      "You want to promote affiliate products, Amazon finds, or your own offers with short-form videos.",
    tools: [
      {
        name: "ChatGPT",
        role:
          "Write product review scripts, comparison scripts, and list-style breakdowns with strong CTAs.",
        href: CHATGPT_URL,
        affiliate: true,
      },
      {
        name: "Jasper",
        role:
          "Generate ad angles, bullet points, and product benefit copy you can reuse across shorts and descriptions.",
        href: JASPER_URL,
        affiliate: true,
      },
      {
        name: "Pictory",
        role:
          "Turn your scripts or long product demos into short, punchy clips with captions and stock B-roll.",
        href: PICTORY_URL,
      },
      {
        name: "InVideo",
        role:
          "Use plug-and-play templates for product showcases, list videos, and short ad creatives.",
        href: INVIDEO_URL,
        affiliate: true,
      },
      {
        name: "Canva Pro",
        role:
          "Design pricing callouts, comparison frames, and text elements you can drop into your shorts.",
        href: CANVA_URL,
        affiliate: true,
      },
      {
        name: "ElevenLabs",
        role:
          "Create AI voiceovers for product explainers, listicles, and review shorts when you don’t want to record.",
        href: ELEVENLABS_URL,
        affiliate: true,
      },
      {
        name: "Creati Studio",
        role:
          "Auto-generate UGC-style product clips and ad-style edits from product links or images.",
        href: CREATI_STUDIO_URL,
        affiliate: true,
      },
      {
        name: "OpusClip",
        role:
          "Repurpose long product demos, livestreams, or reviews into multiple scheduled shorts.",
        href: OPUSCLIP_URL,
        affiliate: true,
      },
    ],
  },
  {
    id: "story-commentary",
    label: "Stack 03",
    title: "Story & Commentary Shorts System",
    description:
      "Perfect for Reddit readings, business breakdowns, motivation edits, and news or story channels built from voiceover + visuals.",
    bestFor:
      "You like storytelling or commentary and want a repeatable system to publish daily shorts without being on camera.",
    tools: [
      {
        name: "SocialSight AI",
        role:
          "Find trending story formats, commentary topics, and viral patterns in your category.",
        href: SOCIALSIGHT_URL,
        affiliate: true,
      },
      {
        name: "Perplexity",
        role:
          "Research backstories, case studies, and niche topics your audience actually cares about.",
        href: PERPLEXITY_URL,
      },
      {
        name: "ChatGPT",
        role:
          "Turn topics into tight 30–90 second scripts with strong hooks and simple story arcs.",
        href: CHATGPT_URL,
        affiliate: true,
      },
      {
        name: "ElevenLabs",
        role:
          "Record AI voiceovers that match your channel’s tone so every story feels consistent.",
        href: ELEVENLABS_URL,
        affiliate: true,
      },
      {
        name: "Pictory",
        role:
          "Match scripts with B-roll and captions to create story-style shorts from text or long-form content.",
        href: PICTORY_URL,
      },
      {
        name: "Descript Underlord",
        role:
          "Clean audio, remove filler, and edit commentary or narration by editing text.",
        href: DESCRIPT_UNDERLORD_URL,
        affiliate: true,
      },
      {
        name: "TubeBuddy",
        role:
          "Research YouTube titles, tags, and keywords for story/commentary channels.",
        href: TUBEBUDDY_URL,
      },
      {
        name: "vidIQ",
        role:
          "Track performance, discover new topics, and see what’s working in your niche on YouTube.",
        href: VIDIQ_URL,
      },
      {
        name: "CapCut or VEED.io",
        role:
          "Edit, caption, and export your shorts quickly for multi-platform posting.",
        href: VEED_URL,
      },
    ],
  },
];

export default function NoWebsiteCreatorSystemPage() {
  return (
    <main className="min-h-screen bg-black text-slate-50">
      {/* HERO */}
      <section className="border-b border-emerald-500/20 bg-gradient-to-br from-black via-black to-black px-4 py-14">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300">
              FutureMind Wealth · No-Website Creator System
            </p>
            <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              Launch a{" "}
              <span className="bg-gradient-to-r from-emerald-300 via-emerald-400 to-cyan-300 bg-clip-text text-transparent">
                TikTok, Reels & YouTube Shorts
              </span>{" "}
              channel with AI — no website required.
            </h1>
            <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
              This page gives you a focused, “no excuses” AI stack for short-form
              content. Pick one creator style below and plug in the exact tools
              to publish daily videos on TikTok, Instagram, and YouTube Shorts —
              before you ever touch a website, funnel, or landing page.
            </p>

            {/* UPDATED CTA ROW WITH FREE GUIDE */}
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href="/creator-hub"
                className="inline-flex items-center justify-center rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-emerald-400 hover:text-emerald-300"
              >
                ← Back to AI Creator Marketplace
              </Link>
              <Link
                href="/starter-kit"
                className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_32px_rgba(52,211,153,0.8)] transition hover:bg-emerald-300"
              >
                Get the AI Income Starter Kit
              </Link>
              <Link
                href="/starter-kit/free-shortform-guide"
                className="inline-flex items-center justify-center rounded-full bg-cyan-300/90 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_24px_rgba(103,232,249,0.7)] transition hover:bg-cyan-200"
              >
                Download Free Short-Form Content Guide
              </Link>
            </div>

            <p className="text-xs text-slate-500">
              Some links on this page use partner/affiliate tracking. You pay the
              same price — I may earn a small commission if you sign up using
              these recommendations.
            </p>
          </div>

          {/* Side card */}
          <div className="max-w-sm rounded-3xl border border-emerald-400/40 bg-black/90 p-5 shadow-[0_0_40px_rgba(16,185,129,0.7)]">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-emerald-300">
              The simple three-phase plan
            </p>
            <ol className="mt-3 space-y-3 text-xs text-slate-200 sm:text-sm">
              <li>
                <span className="font-semibold text-emerald-300">1.</span> Pick
                one stack below that matches how you want to create: faceless,
                product/UGC, or story-driven.
              </li>
              <li>
                <span className="font-semibold text-emerald-300">2.</span> Use
                the tools in the order listed to publish your first 20–30
                TikToks, Reels, or Shorts.
              </li>
              <li>
                <span className="font-semibold text-emerald-300">3.</span> Once
                content is getting views, plug into a website & funnel using the
                systems from your Starter Kit or Bundle.
              </li>
            </ol>
            <p className="mt-4 text-[0.7rem] text-slate-400">
              The goal: start fast, stay consistent, and only add complexity
              (websites, email, funnels) once attention and data are coming in.
            </p>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="border-b border-white/10 bg-black/90">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400 sm:text-sm">
            Who this no-website system is for
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-slate-300">
            If any of these sound like you, you&apos;re in the right place:
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <WhoCard
              title="You’re just getting started"
              body="You want to prove that your niche and message resonate before you spend time or money on a full website."
            />
            <WhoCard
              title="You prefer faceless or low-friction content"
              body="You’d rather use AI voices, avatars, visuals and B-roll than record talking-head videos every day."
            />
            <WhoCard
              title="You want a repeatable publishing system"
              body="You care more about a daily/weekly workflow than chasing hacks. Tools are there to support the system, not replace it."
            />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="border-b border-white/10 bg-black">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400 sm:text-sm">
            How this AI short-form system works
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-slate-300">
            Each stack below follows the same skeleton. The exact tools change,
            but the logic stays the same:
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-4 text-sm text-slate-300">
            <StepCard
              step="01"
              title="Research & ideas"
              body="Use SocialSight and Perplexity to find topics, angles, and audience problems worth talking about."
            />
            <StepCard
              step="02"
              title="Script & structure"
              body="Turn ideas into tight short-form scripts: hook, promise, 2–3 points, and a simple call to action."
            />
            <StepCard
              step="03"
              title="Voice & visuals"
              body="Generate AI voiceovers, avatar videos, or visual scenes that pair with your script and niche."
            />
            <StepCard
              step="04"
              title="Edit, post, repeat"
              body="Edit once, then publish across TikTok, Instagram Reels, and YouTube Shorts. Track what works and double down."
            />
          </div>
        </div>
      </section>

      {/* STACKS */}
      <section id="stacks-section" className="border-b border-white/10 bg-black/95">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400 sm:text-sm">
            Pick your no-website creator stack
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-slate-300">
            Start with{" "}
            <span className="font-semibold text-emerald-300">one</span> stack.
            You can always switch or upgrade later — the important part is
            publishing consistently on TikTok, Instagram, and YouTube Shorts.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {STACKS.map((stack) => (
              <StackCard key={stack.id} stack={stack} />
            ))}
          </div>
        </div>
      </section>

      {/* WHEN TO ADD A WEBSITE */}
      <section className="border-b border-white/10 bg-black/90">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400 sm:text-sm">
            When (& how) to add a website and funnel
          </h2>
          <div className="mt-4 grid gap-5 md:grid-cols-2 text-sm text-slate-300">
            <div className="rounded-2xl border border-white/10 bg-black/70 p-4">
              <h3 className="text-base font-semibold text-emerald-200">
                Step 1: Hit your consistency & signal goals
              </h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300">
                <li>Post at least 30–50 TikToks/Reels/Shorts in one niche.</li>
                <li>Identify 3–5 videos that clearly outperform the rest.</li>
                <li>
                  Notice patterns: topics, hooks, and angles that get the most
                  watch time and saves.
                </li>
              </ul>
              <p className="mt-3 text-xs text-slate-500">
                Only after this do you really know what kind of offer and
                website you need.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/70 p-4">
              <h3 className="text-base font-semibold text-emerald-200">
                Step 2: Plug into your FutureMind systems
              </h3>
              <p className="mt-2">
                Once your content is getting traction, use the{" "}
                <span className="font-semibold text-emerald-300">
                  AI Income Starter Kit
                </span>{" "}
                or{" "}
                <span className="font-semibold text-emerald-300">
                  AI Income Launch Bundle
                </span>{" "}
                to:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300">
                <li>Define a simple low-ticket offer or lead magnet.</li>
                <li>Use the website templates and checklists to launch fast.</li>
                <li>
                  Connect your TikTok/IG/YouTube traffic to an email list and
                  sales page.
                </li>
              </ul>
              <div className="mt-4 flex flex-wrap gap-3 text-xs">
                <Link
                  href="/starter-kit"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-4 py-2 font-semibold text-slate-950 shadow-[0_0_24px_rgba(52,211,153,0.8)] transition hover:bg-emerald-300"
                >
                  View Starter Kit →
                </Link>
                <Link
                  href="/bundle"
                  className="inline-flex items-center justify-center rounded-full border border-slate-700 px-4 py-2 font-semibold text-slate-200 transition hover:border-emerald-400 hover:text-emerald-300"
                >
                  Explore full Bundle →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ / CTA */}
      <section className="bg-black">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="grid gap-6 md:grid-cols-[2fr,1fr]">
            <div className="space-y-4 text-sm text-slate-300">
              <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400 sm:text-sm">
                Common questions
              </h2>
              <div>
                <h3 className="text-sm font-semibold text-emerald-200">
                  Do I really not need a website to start?
                </h3>
                <p className="mt-1 text-sm text-slate-300">
                  Correct. The goal here is to get attention and proof of demand
                  first. A simple TikTok/IG/YouTube profile with a clear bio is
                  enough to start. Once you see what resonates, you&apos;ll build a
                  website that matches reality — not guesses.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-emerald-200">
                  Can this work for a full YouTube channel too?
                </h3>
                <p className="mt-1 text-sm text-slate-300">
                  Yes. These stacks are optimized for Shorts first, but the same
                  scripts and workflows can be expanded into 5–15 minute videos.
                  Start with Shorts to find winning topics, then promote your
                  best ideas into longform content.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-emerald-200">
                  What if I get overwhelmed by tools?
                </h3>
                <p className="mt-1 text-sm text-slate-300">
                  Limit yourself to the tools listed in your chosen stack. Don&apos;t
                  buy everything. Don&apos;t sign up everywhere. Pick the minimum
                  viable stack, get comfortable, and only upgrade once the
                  channel is producing results.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-emerald-500/30 bg-black/90 p-5 text-sm text-slate-200 shadow-[0_0_34px_rgba(16,185,129,0.6)]">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-emerald-300">
                Next move
              </p>
              <h3 className="mt-2 text-base font-semibold text-slate-50">
                Choose your stack, then set a 30–day posting challenge.
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Pick one stack above, commit to 30 days of TikTok/IG/Shorts, and
                use the Starter Kit or Bundle to build out your first offer
                while the content engine is running.
              </p>
              <div className="mt-4 flex flex-col gap-3">
                <a
                  href="#stacks-section"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-4 py-2 text-sm font-semibold text-slate-950 shadow-[0_0_26px_rgba(52,211,153,0.8)] transition hover:bg-emerald-300"
                >
                  Scroll to stacks ↑
                </a>
                <Link
                  href="/creator-hub"
                  className="inline-flex items-center justify-center rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-emerald-400 hover:text-emerald-300"
                >
                  Browse all AI creator tools →
                </Link>
              </div>
              <p className="mt-3 text-[0.7rem] text-slate-500">
                You don&apos;t need the perfect plan to start — you need one
                opinionated system you can actually follow. This page is that
                system for TikTok, Reels, and YouTube Shorts.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

type WhoCardProps = {
  title: string;
  body: string;
};

function WhoCard({ title, body }: WhoCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/80 p-4 text-xs text-slate-300 shadow-[0_0_26px_rgba(15,23,42,0.9)] sm:text-sm">
      <h3 className="text-sm font-semibold text-slate-50 sm:text-base">
        {title}
      </h3>
      <p className="mt-2 text-slate-300">{body}</p>
    </div>
  );
}

type StepCardProps = {
  step: string;
  title: string;
  body: string;
};

function StepCard({ step, title, body }: StepCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/80 p-4 text-xs text-slate-300 shadow-[0_0_26px_rgba(15,23,42,0.9)] sm:text-sm">
      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-emerald-300">
        Step {step}
      </p>
      <h3 className="mt-1 text-sm font-semibold text-slate-50 sm:text-base">
        {title}
      </h3>
      <p className="mt-2 text-slate-300">{body}</p>
    </div>
  );
}

type StackCardProps = {
  stack: Stack;
};

function StackCard({ stack }: StackCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-emerald-500/30 bg-black/90 p-4 text-xs text-slate-200 shadow-[0_0_28px_rgba(16,185,129,0.45)] sm:text-sm">
      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-emerald-300">
        {stack.label}
      </p>
      <h3 className="mt-1 text-sm font-semibold text-slate-50 sm:text-base">
        {stack.title}
      </h3>
      <p className="mt-2 text-slate-200">{stack.description}</p>
      <p className="mt-2 text-[0.7rem] text-emerald-300 sm:text-xs">
        <span className="font-semibold">Best for:</span> {stack.bestFor}
      </p>

      <div className="mt-3 space-y-2">
        <p className="text-[0.7rem] font-semibold text-slate-300">
          Tools in this stack & how to use them:
        </p>
        <ul className="space-y-1.5">
          {stack.tools.map((tool) => (
            <li key={tool.name} className="text-[0.7rem] sm:text-xs">
              <a
                href={tool.href}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-emerald-200 underline underline-offset-4 hover:text-emerald-100"
              >
                {tool.name}
              </a>
              <span className="text-slate-400">
                {" "}
                — {tool.role}
                {tool.affiliate && (
                  <span className="ml-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-emerald-300">
                    Partner
                  </span>
                )}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-3 text-[0.7rem] text-slate-500">
        Commit to this stack for 30 days. Don&apos;t add more tools until this
        combo is producing content and data.
      </p>
    </article>
  );
}
