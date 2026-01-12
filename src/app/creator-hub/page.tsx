"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

// Pull public URLs from env (with safe fallbacks)
const CHATGPT_URL =
  process.env.NEXT_PUBLIC_CHATGPT_URL ?? "https://chat.openai.com/";
const CANVA_URL =
  process.env.NEXT_PUBLIC_CANVA_URL ?? "https://www.canva.com/";
const ELEVENLABS_URL =
  process.env.NEXT_PUBLIC_ELEVENLABS_URL ?? "https://try.elevenlabs.io/";
const MIDJOURNEY_URL =
  process.env.NEXT_PUBLIC_MIDJOURNEY_URL ?? "https://www.midjourney.com/";
const OPUSCLIP_URL =
  process.env.NEXT_PUBLIC_OPUSCLIP_URL ?? "https://www.opus.pro/";
const DURABLE_URL =
  process.env.NEXT_PUBLIC_DURABLE_URL ?? "https://durable.co/";

// Extra resource URLs for website setup & downloads (safe fallbacks)
const URL_CANVA_STEP_BY_STEP_GUIDE =
  process.env.NEXT_PUBLIC_CANVA_STEP_BY_STEP_GUIDE_URL || "#";
const URL_CANVA_TEMPLATE =
  process.env.NEXT_PUBLIC_CANVA_TEMPLATE_URL || "#";
const URL_WEBSITE_SETUP_GUIDE_DOCX =
  process.env.NEXT_PUBLIC_WEBSITE_SETUP_GUIDE_DOCX_URL || "#";
const URL_AFFILIATE_TOOLS_WEBPAGE =
  process.env.NEXT_PUBLIC_AFFILIATE_TOOLS_WEBPAGE_URL || "#";
const URL_WEBSITE_SETUP_OVERVIEW_PDF =
  process.env.NEXT_PUBLIC_WEBSITE_SETUP_OVERVIEW_PDF_URL || "#";
const URL_QUICK_START_GUIDE_PDF =
  process.env.NEXT_PUBLIC_QUICK_START_GUIDE_PDF_URL || "#";
const URL_WEBSITE_CHECKLIST_DOCX =
  process.env.NEXT_PUBLIC_WEBSITE_CHECKLIST_DOCX_URL || "#";
const URL_HTML_TEMPLATE_ZIP =
  process.env.NEXT_PUBLIC_HTML_TEMPLATE_ZIP_URL || "#";

type Category =
  | "Scripting & Ideas"
  | "Voice & Audio"
  | "Visual Design"
  | "Video Editing & Clips"
  | "Scheduling & Automation"
  | "Analytics & Growth"
  | "AI Avatars"
  | "Websites & Sales Platforms"
  | "Email & Automation"
  | "Business & Finance";

type Tool = {
  id: string;
  name: string;
  href: string;
  category: Category;
  description: string;
  useFor: string;
  tags: string[];
  isAffiliate?: boolean;
};

const TOOLS: Tool[] = [
  // Scripting & Ideas
  {
    id: "chatgpt",
    name: "ChatGPT",
    href: CHATGPT_URL,
    category: "Scripting & Ideas",
    description:
      "General-purpose AI assistant that can generate hooks, scripts, captions, emails, and entire content plans.",
    useFor: "Daily scripts for TikTok, IG, YouTube & emails.",
    tags: ["TikTok", "YouTube", "Scripts", "Prompts"],
    isAffiliate: true,
  },
  {
    id: "claude",
    name: "Claude",
    href: "https://claude.ai/",
    category: "Scripting & Ideas",
    description:
      "Great for long-form thinking and polished YouTube scripts, sales pages, and deep-dive content.",
    useFor: "Long-form YouTube scripts and thoughtful breakdowns.",
    tags: ["YouTube", "Long-form", "Writing"],
  },
  {
    id: "perplexity",
    name: "Perplexity",
    href: "https://www.perplexity.ai/",
    category: "Scripting & Ideas",
    description:
      "Search + AI in one. Perfect for trend research, topic discovery, and building content calendars.",
    useFor: "Finding trending topics and angles in your niche.",
    tags: ["Research", "Trends", "Planning"],
  },
  {
    id: "socialsight-ai",
    name: "SocialSight AI",
    href: "https://socialsight.ai/",
    category: "Scripting & Ideas",
    description:
      "AI-powered creator intelligence for trends, competitors, topics, and hook ideas across TikTok, IG, and YouTube.",
    useFor:
      "Finding viral topics, reverse-engineering top creators, and planning content that has real demand.",
    tags: ["Research", "Trends", "Hooks", "Shorts"],
    isAffiliate: true,
  },
  {
    id: "copy-ai",
    name: "Copy.ai",
    href: "https://www.copy.ai/",
    category: "Scripting & Ideas",
    description:
      "AI copywriter for posts, sales pages, emails, and social captions.",
    useFor: "Quickly spinning up marketing copy and content variations.",
    tags: ["Copywriting", "Marketing", "Emails"],
    isAffiliate: true,
  },
  {
    id: "jasper",
    name: "Jasper",
    href: "https://www.jasper.ai/",
    category: "Scripting & Ideas",
    description:
      "AI content and marketing assistant built for businesses and creators.",
    useFor: "Campaign copy, blog posts, and structured content workflows.",
    tags: ["Marketing", "Blogging", "Scripts"],
    isAffiliate: true,
  },

  // Voice & Audio
  {
    id: "elevenlabs",
    name: "ElevenLabs",
    href: ELEVENLABS_URL,
    category: "Voice & Audio",
    description:
      "AI voice generator that turns your scripts into natural-sounding voiceovers in seconds.",
    useFor: "Faceless voiceovers for TikTok, Reels & Shorts.",
    tags: ["Voiceover", "Faceless", "Audio"],
    isAffiliate: true,
  },
  {
    id: "playht",
    name: "Play.ht",
    href: "https://play.ht/",
    category: "Voice & Audio",
    description:
      "Alternative AI voice solution with strong support for custom voices and longer narration.",
    useFor: "Audiobooks, long-form narration, and explainer videos.",
    tags: ["Voiceover", "Audio", "Narration"],
  },
  {
    id: "aiva",
    name: "AIVA AI Music",
    href: "https://www.aiva.ai/",
    category: "Voice & Audio",
    description:
      "AI-generated music you can use as background tracks without worrying about copyright strikes.",
    useFor: "Royalty-safe background music for videos.",
    tags: ["Music", "Background", "Soundtrack"],
  },

  // Visual Design
  {
    id: "canva",
    name: "Canva Pro",
    href: CANVA_URL,
    category: "Visual Design",
    description:
      "Drag-and-drop design app with templates for thumbnails, Reels layouts, carousels and more.",
    useFor: "Branded templates, covers, carousels and slides.",
    tags: ["Design", "Thumbnails", "Branding"],
    isAffiliate: true,
  },
  {
    id: "midjourney",
    name: "Midjourney",
    href: MIDJOURNEY_URL,
    category: "Visual Design",
    description:
      "Discord-based AI image generation tool with insane artistic control and style options.",
    useFor: "Eye-catching visuals, hooks, and backgrounds.",
    tags: ["Images", "AI Art", "Backgrounds"],
    isAffiliate: true,
  },
  {
    id: "leonardo",
    name: "Leonardo AI",
    href: "https://leonardo.ai/",
    category: "Visual Design",
    description:
      "AI design platform focused on assets, thumbnails, and detailed graphics for content creators.",
    useFor: "YouTube thumbnails & packshot-style graphics.",
    tags: ["Thumbnails", "Design", "Graphics"],
  },
  {
    id: "kittl",
    name: "Kittl",
    href: "https://www.kittl.com/",
    category: "Visual Design",
    description:
      "Advanced design tool for merch, logos, and high-impact typography-driven graphics.",
    useFor: "Logos, merch designs, bold titles & cover art.",
    tags: ["Branding", "Typography", "Merch"],
  },

  // Video Editing & Clips
  {
    id: "opusclip",
    name: "OpusClip",
    href: OPUSCLIP_URL,
    category: "Video Editing & Clips",
    description:
      "AI tool that finds the best clips inside long videos and formats them for TikTok, Reels, and Shorts.",
    useFor: "Auto-clipping long content into short-form bangers.",
    tags: ["Shorts", "Repurposing", "Automation"],
    isAffiliate: true,
  },
  {
    id: "capcut",
    name: "CapCut",
    href: "https://www.capcut.com/",
    category: "Video Editing & Clips",
    description:
      "Free editor built for vertical video with transitions, effects, and template-driven workflows.",
    useFor: "Editing TikToks, Reels & Shorts on mobile or desktop.",
    tags: ["Editing", "Vertical", "Free"],
  },
  {
    id: "runway",
    name: "RunwayML",
    href: "https://runwayml.com/",
    category: "Video Editing & Clips",
    description:
      "AI video suite for generative clips, background removal, motion tracking, and stylized B-roll.",
    useFor: "AI B-roll, text-to-video clips, and creative effects.",
    tags: ["AI Video", "B-roll", "Effects"],
  },
  {
    id: "pika",
    name: "Pika Labs",
    href: "https://pika.art/",
    category: "Video Editing & Clips",
    description:
      "Text and image to video platform, great for visually-rich faceless content.",
    useFor: "Creating animated scenes & cinematic short clips.",
    tags: ["AI Video", "Animation", "Cinematic"],
  },
  {
    id: "creati-studio",
    name: "Creati Studio",
    href: "https://www.creati.studio/",
    category: "Video Editing & Clips",
    description:
      "AI UGC-style video generator that turns product links or images into short-form ads and product clips.",
    useFor:
      "Creating scroll-stopping product videos and UGC-style ads for TikTok, Reels, and Shorts.",
    tags: ["UGC", "Ecom", "Shorts", "TikTok"],
    isAffiliate: true,
  },
  {
    id: "descript-underlord",
    name: "Descript (Underlord)",
    href: "https://www.descript.com/underlord",
    category: "Video Editing & Clips",
    description:
      "AI-enhanced editing suite for YouTube, podcasts, and short-form video with script-based editing and AI B-roll.",
    useFor:
      "Cleaning audio, removing filler words, and turning rough recordings into polished Shorts and long-form videos.",
    tags: ["Editing", "AI Video", "YouTube", "Shorts"],
    isAffiliate: true,
  },
  {
    id: "bigmotion",
    name: "BigMotion.ai",
    href: "https://www.bigmotion.ai/",
    category: "Video Editing & Clips",
    description:
      "High-energy motion captions, zooms, and kinetic text to make talking videos feel like viral edits.",
    useFor:
      "Upgrading simple talking clips into high-retention Shorts with motion captions and punchy camera moves.",
    tags: ["Shorts", "TikTok", "Captions", "Motion"],
    isAffiliate: true,
  },
  {
    id: "zeely-ai",
    name: "Zeely AI",
    href: "https://zeely.ai/",
    category: "Video Editing & Clips",
    description:
      "Mobile-first AI video builder for polished TikToks, Reels, and Shorts, built for small businesses and creators.",
    useFor:
      "Creating branded short-form videos for services, local businesses, ecom products, and personal brands.",
    tags: ["Business", "Shorts", "Mobile", "TikTok"],
    isAffiliate: true,
  },
  {
    id: "pictory",
    name: "Pictory",
    href: "https://pictory.ai/",
    category: "Video Editing & Clips",
    description:
      "Turn long-form content into short, branded video clips with captions and B-roll.",
    useFor: "Repurposing webinars, podcasts, and scripts into Shorts.",
    tags: ["Repurposing", "Shorts", "Captions"],
    isAffiliate: true,
  },
  {
    id: "invideo",
    name: "InVideo",
    href: "https://invideo.io/",
    category: "Video Editing & Clips",
    description:
      "Template-based video editor with AI assistance for social videos and ads.",
    useFor: "Fast social videos, ads, and slideshow-style content.",
    tags: ["Templates", "Ads", "Social Video"],
    isAffiliate: true,
  },

  // Scheduling & Automation
  {
    id: "durable",
    name: "Durable AI Website Builder",
    href: DURABLE_URL,
    category: "Scheduling & Automation",
    description:
      "AI website builder that spins up a full site in minutes — landing pages, sections, and copy included.",
    useFor: "Giving your social traffic a clean place to convert.",
    tags: ["Website", "Funnel", "Landing Page"],
    isAffiliate: true,
  },
  {
    id: "metricool",
    name: "Metricool",
    href: "https://metricool.com/",
    category: "Scheduling & Automation",
    description:
      "All-in-one scheduler for TikTok, Instagram, YouTube, and more with analytics baked in.",
    useFor: "Scheduling and auto-posting your content across platforms.",
    tags: ["Scheduling", "Automation", "Social"],
  },
  {
    id: "repurpose",
    name: "Repurpose.io",
    href: "https://repurpose.io/",
    category: "Scheduling & Automation",
    description:
      "Connect one source and automatically push content out to multiple channels.",
    useFor: "Repurposing one video across every platform automatically.",
    tags: ["Repurposing", "Automation", "Distribution"],
  },

  // Analytics & Growth
  {
    id: "tubebuddy",
    name: "TubeBuddy",
    href: "https://www.tubebuddy.com/",
    category: "Analytics & Growth",
    description:
      "YouTube optimization suite with keyword research, A/B testing, and SEO tools.",
    useFor: "Growing a YouTube channel with better titles and thumbnails.",
    tags: ["YouTube", "SEO", "Analytics"],
  },
  {
    id: "vidiq",
    name: "vidIQ",
    href: "https://vidiq.com/",
    category: "Analytics & Growth",
    description:
      "Content ideas, SEO help, and performance tracking for YouTube creators.",
    useFor: "Finding winning topics and measuring what works on YouTube.",
    tags: ["YouTube", "Trends", "Ideas"],
  },
  {
    id: "socialblade",
    name: "SocialBlade",
    href: "https://socialblade.com/",
    category: "Analytics & Growth",
    description:
      "Public stats on creators across YouTube, TikTok, and more for competitive research.",
    useFor: "Benchmarking yourself against other creators.",
    tags: ["Analytics", "Competitors", "Stats"],
  },

  // AI Avatars
  {
    id: "heygen",
    name: "HeyGen",
    href: "https://www.heygen.com/",
    category: "AI Avatars",
    description:
      "AI avatar video creation — type a script, get a talking head video without filming.",
    useFor: "Faceless talking-head videos & explainers.",
    tags: ["Avatar", "Faceless", "Video"],
  },
  {
    id: "synthesia",
    name: "Synthesia",
    href: "https://www.synthesia.io/",
    category: "AI Avatars",
    description:
      "Enterprise-grade AI avatar studio used by companies for training, explainers, and marketing.",
    useFor: "Professional training videos and corporate content.",
    tags: ["Avatar", "Training", "B2B"],
  },

  // Websites & Sales Platforms
  {
    id: "systeme",
    name: "Systeme.io",
    href: "https://systeme.io/",
    category: "Websites & Sales Platforms",
    description:
      "All-in-one funnel builder, email marketing, and course platform for creators.",
    useFor: "Simple funnels, checkout pages, and basic email flows.",
    tags: ["Funnels", "Courses", "Email"],
    isAffiliate: true,
  },
  {
    id: "clickfunnels",
    name: "ClickFunnels 2.0",
    href: "https://www.clickfunnels.com/",
    category: "Websites & Sales Platforms",
    description:
      "Sales funnel platform focused on high-converting pages and upsell flows.",
    useFor: "Building multi-step funnels and upsell sequences.",
    tags: ["Funnels", "Sales Pages", "Upsells"],
    isAffiliate: true,
  },
  {
    id: "samcart",
    name: "SamCart",
    href: "https://www.samcart.com/",
    category: "Websites & Sales Platforms",
    description:
      "Cart and checkout platform tailored for creators selling digital products.",
    useFor: "One-page checkouts, bump offers, and digital product sales.",
    tags: ["Checkout", "Digital Products", "Upsells"],
    isAffiliate: true,
  },
  {
    id: "shopify",
    name: "Shopify",
    href: "https://www.shopify.com/",
    category: "Websites & Sales Platforms",
    description:
      "The go-to ecommerce platform for physical products and hybrid stores.",
    useFor: "Full online stores, merch, and physical product brands.",
    tags: ["Ecommerce", "Store", "Physical Products"],
    isAffiliate: true,
  },
  {
    id: "mixo",
    name: "Mixo",
    href: "https://mixo.io/",
    category: "Websites & Sales Platforms",
    description:
      "Quick-launch landing page builder for validating ideas and gathering emails.",
    useFor: "Simple landing pages and waitlists.",
    tags: ["Landing Pages", "Validation", "Email Capture"],
    isAffiliate: true,
  },

  // Email & Automation
  {
    id: "convertkit",
    name: "ConvertKit",
    href: "https://convertkit.com/",
    category: "Email & Automation",
    description:
      "Email marketing platform built specifically for creators and digital product businesses.",
    useFor: "Newsletters, launch sequences, and evergreen funnels.",
    tags: ["Email", "Funnels", "Creators"],
    isAffiliate: true,
  },
  {
    id: "beehiiv",
    name: "Beehiiv",
    href: "https://www.beehiiv.com/",
    category: "Email & Automation",
    description:
      "Newsletter platform with growth tools, referrals, and monetization baked in.",
    useFor: "Newsletter-first brands and list growth.",
    tags: ["Newsletter", "Growth", "Monetization"],
    isAffiliate: true,
  },
  {
    id: "zapier",
    name: "Zapier",
    href: "https://zapier.com/",
    category: "Email & Automation",
    description:
      "Glue different apps together to automate uploads, notifications, and tracking.",
    useFor: "Connect your AI tools, cloud storage, and spreadsheets.",
    tags: ["Automation", "Integrations", "Workflow"],
    isAffiliate: true,
  },
  {
    id: "make",
    name: "Make.com",
    href: "https://www.make.com/",
    category: "Email & Automation",
    description:
      "Visual automation platform for building complex workflows between tools.",
    useFor: "Advanced automations across your stack.",
    tags: ["Automation", "Workflows", "Integrations"],
    isAffiliate: true,
  },
  {
    id: "notion-ai",
    name: "Notion AI",
    href: "https://www.notion.so/product/ai",
    category: "Email & Automation",
    description:
      "AI superpowers inside Notion for content, planning, and personal knowledge bases.",
    useFor: "Brain dumps, planning, and repurposing ideas into content.",
    tags: ["Notes", "Planning", "Docs"],
    isAffiliate: true,
  },

  // Business & Finance
  {
    id: "wise",
    name: "Wise",
    href: "https://wise.com/",
    category: "Business & Finance",
    description:
      "Low-fee international banking and transfers for global creators.",
    useFor: "Getting paid globally and holding multi-currency balances.",
    tags: ["Banking", "International", "Payments"],
    isAffiliate: true,
  },
  {
    id: "quickbooks",
    name: "QuickBooks",
    href: "https://quickbooks.intuit.com/",
    category: "Business & Finance",
    description:
      "Bookkeeping and accounting software for small businesses and solopreneurs.",
    useFor: "Tracking income, expenses, and taxes from your creator business.",
    tags: ["Accounting", "Bookkeeping", "Taxes"],
    isAffiliate: true,
  },
  {
    id: "stripe",
    name: "Stripe",
    href: "https://stripe.com/",
    category: "Business & Finance",
    description:
      "Online payments platform for checkouts, subscriptions, and global commerce.",
    useFor: "Collecting payments for digital products, services, and memberships.",
    tags: ["Payments", "Checkout", "Subscriptions"],
    isAffiliate: true,
  },
];

const CATEGORIES: Category[] = [
  "Scripting & Ideas",
  "Voice & Audio",
  "Visual Design",
  "Video Editing & Clips",
  "Scheduling & Automation",
  "Analytics & Growth",
  "AI Avatars",
  "Websites & Sales Platforms",
  "Email & Automation",
  "Business & Finance",
];

type CreatorStack = {
  id: string;
  name: string;
  description: string;
  useCase: string;
  toolIds: string[];
};

const CREATOR_STACKS: CreatorStack[] = [
  {
    id: "tiktok-faceless",
    name: "TikTok Faceless Starter Stack",
    description:
      "Perfect if you want to stay off-camera and still publish daily short-form videos that look and sound pro.",
    useCase:
      "Use AI to write scripts, generate a voice, design simple visuals, and cut vertical videos ready for TikTok and Reels.",
    toolIds: [
      "socialsight-ai",
      "chatgpt",
      "elevenlabs",
      "canva",
      "midjourney",
      "capcut",
      "bigmotion",
    ],
  },
  {
    id: "youtube-automation",
    name: "YouTube Automation Stack",
    description:
      "For faceless or semi-faceless YouTube channels focused on long-form tutorials, explainers, or commentary.",
    useCase:
      "Research topics, draft long-form scripts, generate thumbnails, and use analytics tools to grow your channel.",
    toolIds: [
      "claude",
      "perplexity",
      "socialsight-ai",
      "midjourney",
      "leonardo",
      "runway",
      "tubebuddy",
      "vidiq",
    ],
  },
  {
    id: "local-business",
    name: "Local Business Lead Gen Stack",
    description:
      "Ideal for service providers (real estate, contractors, local shops) who want content that turns into booked calls.",
    useCase:
      "Create short-form educational videos, send people to a simple AI-built site, and track what generates leads.",
    toolIds: [
      "chatgpt",
      "canva",
      "zeely-ai",
      "durable",
      "metricool",
      "repurpose",
      "zapier",
      "socialblade",
    ],
  },
];

export default function AICreatorMarketplacePage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<Category | "All">("All");

  const filteredTools = useMemo(() => {
    const term = search.toLowerCase().trim();

    return TOOLS.filter((tool) => {
      const matchesCategory = category === "All" || tool.category === category;

      if (!term) return matchesCategory;

      const haystack = (
        tool.name +
        tool.description +
        tool.useFor +
        tool.tags.join(" ")
      ).toLowerCase();

      return matchesCategory && haystack.includes(term);
    });
  }, [search, category]);

  return (
    <main className="min-h-screen bg-black text-slate-100">
      {/* HERO */}
      <section className="border-b border-emerald-500/20 bg-gradient-to-br from-black via-black to-black px-4 py-14">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300">
              FutureMind Wealth · AI Creator Marketplace
            </p>
            <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              Your{" "}
              <span className="bg-gradient-to-r from-emerald-300 via-emerald-400 to-cyan-300 bg-clip-text text-transparent">
                AI Software Stack
              </span>{" "}
              for faceless TikTok, Instagram & YouTube.
            </h1>
            <p className="text-sm text-slate-300 leading-relaxed sm:text-base">
              This is your control center for AI creator software. Browse tools
              by category, filter by what you&apos;re building, and plug them
              into your FutureMind Wealth systems. Each listing includes a brief
              description and exactly what you&apos;d use it for.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/bundle"
                className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_32px_rgba(52,211,153,0.8)] transition hover:bg-emerald-300"
              >
                Get the AI Income Launch Bundle →
              </Link>
              <Link
                href="/portal"
                className="inline-flex items-center justify-center rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-emerald-400 hover:text-emerald-300"
              >
                Go to Member Portal
              </Link>
            </div>

            <p className="text-xs text-slate-500">
              Some tools use partner links. You pay the same price; I may earn a
              small commission if you sign up through this page.
            </p>
          </div>

          {/* Highlight card */}
          <div className="max-w-sm rounded-3xl border border-emerald-400/40 bg-black/90 p-5 shadow-[0_0_40px_rgba(16,185,129,0.7)]">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-emerald-300">
              How to use this marketplace
            </p>
            <ol className="mt-3 space-y-3 text-xs text-slate-200 sm:text-sm">
              <li>
                <span className="font-semibold text-emerald-300">1.</span> Pick
                one tool from each major category: scripts, voice, visuals,
                editing, automation, website, and email.
              </li>
              <li>
                <span className="font-semibold text-emerald-300">2.</span> Plug
                them into the workflow from your AI Income Starter Kit.
              </li>
              <li>
                <span className="font-semibold text-emerald-300">3.</span>{" "}
                Upgrade tools over time once they&apos;re actually making you
                money.
              </li>
            </ol>
            <p className="mt-4 text-[0.7rem] text-slate-400">
              You don&apos;t need everything on this page. The goal is to build
              a lean stack that matches your creator style.
            </p>
          </div>
        </div>
      </section>

      {/* SEARCH + FILTERS */}
      <section
        id="browse"
        className="border-b border-slate-800 bg-black/70"
      >
        <div className="mx-auto max-w-6xl px-4 py-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="space-y-1">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                Browse AI creator tools
              </p>
              <p className="text-xs text-slate-400 sm:text-sm">
                Filter by category or search for a tool, capability, or use
                case. Example: &quot;shorts&quot;, &quot;email&quot; or
                &quot;checkout&quot;.
              </p>
            </div>
            <div className="w-full max-w-md">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search tools… (e.g. TikTok, funnels, automation)"
                className="w-full rounded-full border border-slate-700 bg-black px-4 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
              />
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <CategoryPill
              label="All"
              active={category === "All"}
              onClick={() => setCategory("All")}
            />
            {CATEGORIES.map((cat) => (
              <CategoryPill
                key={cat}
                label={cat}
                active={category === cat}
                onClick={() => setCategory(cat)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* TOOL GRID */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        {filteredTools.length === 0 ? (
          <p className="text-sm text-slate-400">
            No tools match that search yet. Try a different keyword or reset
            your filters.
          </p>
        ) : (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        )}
      </section>

      {/* CREATOR SYSTEM CALLOUT (No-Website Short-Form System) */}
      <section className="border-y border-emerald-500/20 bg-gradient-to-r from-slate-950 via-slate-950 to-black">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-emerald-300">
              New · No-website short-form system
            </p>
            <p className="mt-1 text-sm text-slate-200 sm:text-base">
              Want to start with just TikTok, Instagram Reels, or YouTube Shorts
              before you worry about websites, funnels, or email?
            </p>
            <p className="text-xs text-slate-400 sm:text-sm">
              I built a focused, step-by-step stack that shows you exactly which
              AI tools to use to launch a faceless short-form channel in 30
              days.
            </p>
          </div>
          <div className="flex flex-shrink-0 flex-col gap-2 sm:items-end">
            <Link
              href="/creator-hub/no-website"
              className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-5 py-2 text-xs font-semibold text-slate-950 shadow-[0_0_24px_rgba(52,211,153,0.8)] transition hover:bg-emerald-300 sm:text-sm"
            >
              Open the No-Website TikTok/IG/Shorts System →
            </Link>
            <p className="text-[0.7rem] text-slate-500">
              Built for beginners, faceless creators, and busy pros.
            </p>
          </div>
        </div>
      </section>

      {/* CREATOR STACKS */}
      <section
        id="stacks"
        className="border-b border-slate-900 bg-black/80"
      >
        <div className="mx-auto max-w-6xl px-4 py-10">
          <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400 sm:text-sm">
            Done-for-you creator stacks
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-300">
            Don&apos;t want to overthink your setup? Start with one of these
            stacks. Each bundle is a lean set of tools tuned for a specific
            creator style or business model.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {CREATOR_STACKS.map((stack) => {
              const tools = TOOLS.filter((t) => stack.toolIds.includes(t.id));
              return (
                <CreatorStackCard key={stack.id} stack={stack} tools={tools} />
              );
            })}
          </div>
        </div>
      </section>

      {/* FUTUREMIND PRODUCTS SECTION */}
      <section className="border-t border-slate-900 bg-black/90">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400 sm:text-sm">
            Systems that make these tools profitable
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-300">
            Software is only half the story. The FutureMind Wealth products give
            you the playbooks, prompts, and workflows so these tools actually
            lead to income — not just more subscriptions.
          </p>

          <div className="mt-6 grid gap-4 text-sm md:grid-cols-3">
            <ProductCard
              label="$27 · Starter"
              title="AI Income Starter Kit"
              description="165-page blueprint that shows you how to go from idea to a real $27–$97 digital product."
              href="/starter-kit"
            />
            <ProductCard
              label="$49 · Toolkit"
              title="Complete AI Money Toolkit"
              description="Checklists, planners, and action sheets that turn your AI tools into repeatable income workflows."
              href="/starter-kit/toolkit"
            />
            <ProductCard
              label="$149 · Full Bundle"
              title="AI Income Launch Bundle"
              description="All PDFs, execution packs, and the website template bundle, plus this software marketplace to plug everything together."
              href="/bundle"
              highlight
            />
          </div>
        </div>
      </section>

      {/* WEBSITE SETUP & CHATGPT GUIDE */}
      <section className="border-t border-slate-900 bg-black/95">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400 sm:text-sm">
            Website setup & ChatGPT co-pilot
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-slate-300">
            Building your site for the first time? Use this simple system to
            stay organized, keep ChatGPT on-topic, and quickly customize your
            pages—without feeling lost.
          </p>

          {/* Project folder + tracking doc */}
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-black/80 p-4 text-sm text-slate-200">
              <h3 className="text-base font-semibold text-emerald-200">
                Step 1: Create a project folder & Word doc
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Before you start editing anything, set up a simple structure on
                your computer:
              </p>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-400">
                <li>
                  Create a folder like{" "}
                  <span className="text-emerald-300">
                    C:\WebsiteProjects\CreatorSite
                  </span>
                  .
                </li>
                <li>
                  Inside it, create a Word document called{" "}
                  <span className="text-emerald-300">
                    Website-Tasks-and-ChatGPT-Notes.docx
                  </span>
                  .
                </li>
                <li>
                  Use that doc to track:
                  <ul className="mt-1 list-disc pl-5">
                    <li>Pages you&apos;ve finished</li>
                    <li>Copy you still want to improve</li>
                    <li>Ideas ChatGPT gave you that you liked</li>
                  </ul>
                </li>
                <li>
                  At the top of the doc, add a line you can paste into every new
                  ChatGPT chat:{" "}
                  <span className="italic text-emerald-300">
                    &quot;We are working on my website. Stay on topic and don&apos;t
                    get distracted by unrelated ideas.&quot;
                  </span>
                </li>
              </ul>
            </div>

            {/* Helpful prompts */}
            <div className="rounded-2xl border border-slate-800 bg-black/80 p-4 text-sm text-slate-200">
              <h3 className="text-base font-semibold text-emerald-200">
                Step 2: Use ChatGPT as your website editor
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Copy/paste any section of your website into ChatGPT and use
                prompts like:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-400">
                <li>
                  <span className="font-semibold text-emerald-300">
                    Rewrite for clarity:
                  </span>{" "}
                  &quot;Rewrite this section so it sounds clearer, more
                  professional, and niche-specific for [your niche].&quot;
                </li>
                <li>
                  <span className="font-semibold text-emerald-300">
                    Improve your headline:
                  </span>{" "}
                  &quot;Give me 5 homepage headline ideas that help [audience]
                  achieve [result].&quot;
                </li>
                <li>
                  <span className="font-semibold text-emerald-300">
                    Create new pages:
                  </span>{" "}
                  &quot;Create a full About page/FAQ page/Services page using
                  this niche: [your niche].&quot;
                </li>
                <li>
                  <span className="font-semibold text-emerald-300">
                    Fix tone:
                  </span>{" "}
                  &quot;Make this friendlier, simpler, and easier to
                  understand.&quot;
                </li>
                <li>
                  <span className="font-semibold text-emerald-300">
                    Customize HTML:
                  </span>{" "}
                  &quot;Rewrite only the text in this HTML block; keep the code
                  the same.&quot;
                </li>
              </ul>
              <p className="mt-3 text-xs text-slate-400">
                Keep ChatGPT open in another tab while you work in your page
                builder or code editor. Paste sections in, edit, then paste the
                improved version back into your site.
              </p>
            </div>
          </div>

          {/* Resource buttons row */}
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <ResourceButton
              label="Canva step-by-step guide"
              description="Walkthrough for customizing your site visuals and layouts in Canva."
              href={URL_CANVA_STEP_BY_STEP_GUIDE}
            />
            <ResourceButton
              label="Done-for-you Canva website template"
              description="Drop-in Canva site template you can brand in minutes."
              href={URL_CANVA_TEMPLATE}
            />
            <ResourceButton
              label="Website setup overview (PDF)"
              description="High-level PDF showing how your pages and funnels fit together."
              href={URL_WEBSITE_SETUP_OVERVIEW_PDF}
            />
            <ResourceButton
              label="Quick start guide (PDF)"
              description="Short checklist to go from blank to launched without overthinking it."
              href={URL_QUICK_START_GUIDE_PDF}
            />
            <ResourceButton
              label="Website checklist (DOCX)"
              description="Editable checklist you can tweak in Word or Google Docs."
              href={URL_WEBSITE_CHECKLIST_DOCX}
            />
            <ResourceButton
              label="HTML template bundle (ZIP)"
              description="Downloadable HTML templates for a simple, fast-loading website."
              href={URL_HTML_TEMPLATE_ZIP}
            />
          </div>

          {/* Affiliate tools page link */}
          <div className="mt-6 rounded-2xl border border-slate-800 bg-black/80 p-4 text-xs text-slate-300 sm:text-sm">
            <p>
              Want a single place that lists all tools, guides, and templates
              you have access to?{" "}
              {URL_AFFILIATE_TOOLS_WEBPAGE !== "#" ? (
                <a
                  href={URL_AFFILIATE_TOOLS_WEBPAGE}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
                >
                  Open the tools & resources page
                </a>
              ) : (
                <span className="text-slate-500">
                  (Add{" "}
                  <span className="font-mono">
                    NEXT_PUBLIC_AFFILIATE_TOOLS_WEBPAGE_URL
                  </span>{" "}
                  in your .env.local to enable this link.)
                </span>
              )}
              .
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER NOTE */}
      <section className="border-t border-slate-900 bg-black">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            Start lean: pick 1–2 tools from each category or choose a creator
            stack, plug them into your FutureMind workflows, then upgrade only
            when they&apos;re paying for themselves.
          </p>
          <p className="text-[0.7rem]">
            FutureMind Wealth · Veteran-owned · Built with AI and real systems.
          </p>
        </div>
      </section>
    </main>
  );
}

type CategoryPillProps = {
  label: string;
  active: boolean;
  onClick: () => void;
};

function CategoryPill({ label, active, onClick }: CategoryPillProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "rounded-full border px-3 py-1 text-xs font-medium transition",
        active
          ? "border-emerald-400 bg-emerald-500/10 text-emerald-200 shadow-[0_0_18px_rgba(16,185,129,0.5)]"
          : "border-slate-700 bg-black text-slate-300 hover:border-emerald-400 hover:text-emerald-200",
      ].join(" ")}
    >
      {label}
    </button>
  );
}

type ToolCardProps = {
  tool: Tool;
};

function ToolCard({ tool }: ToolCardProps) {
  const isInternal = tool.href.startsWith("/");
  const isPlaceholder = tool.href === "#";
  const Wrapper: any = isInternal ? Link : "a";

  const body = (
    <div className="flex h-full flex-col rounded-2xl border border-slate-800 bg-black/80 p-4 text-xs shadow-[0_0_26px_rgba(15,23,42,0.9)] transition hover:border-emerald-400/70 hover:shadow-[0_0_36px_rgba(16,185,129,0.6)] sm:text-sm">
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-emerald-300">
            {tool.category}
          </p>
          <h3 className="mt-1 text-sm font-semibold text-slate-50 sm:text-base">
            {tool.name}
          </h3>
        </div>
        {tool.isAffiliate && (
          <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-emerald-300">
            Partner
          </span>
        )}
      </div>
      <p className="mt-2 text-slate-300">{tool.description}</p>
      <p className="mt-2 text-[0.7rem] text-emerald-300 sm:text-xs">
        <span className="font-semibold">Use it for:</span> {tool.useFor}
      </p>
      <div className="mt-3 flex flex-wrap gap-1">
        {tool.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-slate-900 px-2 py-1 text-[0.65rem] text-slate-400"
          >
            {tag}
          </span>
        ))}
      </div>
      {!isPlaceholder && (
        <span className="mt-3 inline-flex text-[0.75rem] font-semibold text-emerald-300">
          Open tool →
        </span>
      )}
    </div>
  );

  if (isPlaceholder) {
    return body;
  }

  return (
    <Wrapper
      href={tool.href}
      {...(!isInternal ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {body}
    </Wrapper>
  );
}

type CreatorStackCardProps = {
  stack: CreatorStack;
  tools: Tool[];
};

function CreatorStackCard({ stack, tools }: CreatorStackCardProps) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-emerald-500/30 bg-black/90 p-4 text-xs shadow-[0_0_28px_rgba(16,185,129,0.45)] sm:text-sm">
      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-emerald-300">
        Creator Stack
      </p>
      <h3 className="mt-1 text-sm font-semibold text-slate-50 sm:text-base">
        {stack.name}
      </h3>
      <p className="mt-2 text-slate-200">{stack.description}</p>
      <p className="mt-2 text-[0.7rem] text-emerald-300 sm:text-xs">
        <span className="font-semibold">Best for:</span> {stack.useCase}
      </p>

      <div className="mt-3 space-y-1">
        <p className="text-[0.7rem] font-semibold text-slate-300">
          Tools in this stack:
        </p>
        <div className="flex flex-wrap gap-1">
          {tools.map((tool) => (
            <span
              key={tool.id}
              className="rounded-full bg-slate-900 px-2 py-1 text-[0.65rem] text-slate-300"
            >
              {tool.name}
            </span>
          ))}
        </div>
      </div>

      <p className="mt-3 text-[0.7rem] text-slate-500">
        Start by getting comfortable with this stack. Once it&apos;s making you
        money, you can upgrade individual tools.
      </p>

      <a
        href="#browse"
        className="mt-3 inline-flex text-[0.75rem] font-semibold text-emerald-300 hover:text-emerald-200"
      >
        View tools in this stack →
      </a>
    </div>
  );
}

type ProductCardProps = {
  label: string;
  title: string;
  description: string;
  href: string;
  highlight?: boolean;
};

function ProductCard({
  label,
  title,
  description,
  href,
  highlight,
}: ProductCardProps) {
  return (
    <Link
      href={href}
      className={[
        "group flex flex-col rounded-2xl border p-4 shadow-[0_0_26px_rgba(15,23,42,0.9)] transition",
        highlight
          ? "border-emerald-400/70 bg-black hover:shadow-[0_0_38px_rgba(16,185,129,0.9)]"
          : "border-slate-800 bg-black/80 hover:border-emerald-400/60 hover:shadow-[0_0_30px_rgba(16,185,129,0.6)]",
      ].join(" ")}
    >
      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-emerald-300">
        {label}
      </p>
      <p className="mt-1 text-sm font-semibold text-slate-50 sm:text-base">
        {title}
      </p>
      <p className="mt-2 flex-1 text-xs text-slate-400 sm:text-sm">
        {description}
      </p>
      <span className="mt-3 inline-flex text-[0.75rem] font-semibold text-emerald-300 group-hover:text-emerald-200">
        View details →
      </span>
    </Link>
  );
}

type ResourceButtonProps = {
  label: string;
  description: string;
  href: string;
};

function ResourceButton({ label, description, href }: ResourceButtonProps) {
  const isActive = href !== "#";

  if (!isActive) {
    return (
      <div className="flex h-full flex-col rounded-2xl border border-dashed border-slate-700 bg-black/60 p-4 text-xs text-slate-400 sm:text-sm">
        <p className="font-semibold text-slate-300">{label}</p>
        <p className="mt-1 flex-1 text-slate-500">{description}</p>
        <p className="mt-2 text-[0.7rem] text-slate-500">
          Add the matching <span className="font-mono">NEXT_PUBLIC_…_URL</span>{" "}
          value in your <span className="font-mono">.env.local</span> file to
          enable this download/link.
        </p>
      </div>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex h-full flex-col rounded-2xl border border-emerald-500/30 bg-black/80 p-4 text-xs text-slate-200 shadow-[0_0_26px_rgba(16,185,129,0.45)] transition hover:border-emerald-400/70 hover:shadow-[0_0_34px_rgba(16,185,129,0.7)] sm:text-sm"
    >
      <p className="font-semibold text-emerald-200">{label}</p>
      <p className="mt-1 flex-1 text-slate-300">{description}</p>
      <span className="mt-2 text-[0.75rem] font-semibold text-emerald-300">
        Open resource →
      </span>
    </a>
  );
}
