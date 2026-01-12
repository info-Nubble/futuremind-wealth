// src/app/portal/page.tsx
import Link from "next/link";
import ProgressChecklist from "./ProgressChecklist";
import { WebsiteTemplatePackSection } from "./WebsiteTemplatePackSection";
import PortalStatusBar from "./PortalStatusBar";
import { StartHereSection } from "./StartHereSection";
import PortalPageClient from "./PortalPageClient";
import { createSupabaseServerClient } from "@/lib/supabaseServer";
import { redirect } from "next/navigation";
import { AICommandPackSection } from "./AICommandPackSection";

type ProductTier = "free" | "starter" | "bundle" | "ultimate";

type PortalState = {
  tier: ProductTier;
  email: string | null;
};

async function getPortalState(): Promise<PortalState> {
  const supabase = await createSupabaseServerClient();

  let user: any = null;

  try {
    const { data, error } = await supabase.auth.getUser();

    if (!error && data?.user) {
      user = data.user;
    }
  } catch {
    user = null;
  }

  // 🔐 HARD GATE: if not signed in, send them to signin
  if (!user) {
    redirect("/signin?next=/portal");
  }

  const { data: profile, error } = await supabase
    .from("profiles")
    .select("product_tier")
    .eq("id", user.id)
    .maybeSingle();

  // Default tier is free if anything goes wrong or no row yet
  let tier: ProductTier = "free";

  if (!error && profile?.product_tier) {
    const raw = String(profile.product_tier).toLowerCase();

    if (raw === "starter" || raw === "bundle" || raw === "ultimate") {
      tier = raw as ProductTier;
    }
  }

  return {
    tier,
    email: user.email ?? null,
  };
}

export default async function PortalPage() {
  const { tier: currentTier, email } = await getPortalState();

  const hasToolkitAccess =
    currentTier === "starter" || currentTier === "bundle" || currentTier === "ultimate";

  const hasBundleAccess = currentTier === "bundle" || currentTier === "ultimate";

  const hasUltimateAccess = currentTier === "ultimate";

  const tierLabel =
    currentTier === "ultimate"
      ? "Ultimate · Full access"
      : currentTier === "bundle"
      ? "Bundle · Full access"
      : currentTier === "starter"
      ? "Starter · Toolkit access"
      : "Free · Preview mode";

  return (
    <PortalPageClient>
      <main className="min-h-screen bg-slate-950 text-slate-50">
        {/* Top status bar (tier, email, etc. – stays as-is for now) */}
        <PortalStatusBar />

        {/* MAIN LAYOUT: sidebar + content */}
        <div className="mx-auto max-w-6xl px-4 pb-16 pt-8 lg:grid lg:grid-cols-[260px,1fr] lg:gap-8">
          {/* SIDEBAR – HYBRID DASHBOARD NAV */}
          <aside className="mb-8 lg:mb-0 lg:sticky lg:top-6">
            <div className="space-y-6 rounded-3xl border border-emerald-500/25 bg-gradient-to-b from-[#05070b] via-[#050609] to-[#050506] p-4 shadow-[0_18px_60px_rgba(0,0,0,0.85)]">
              <div>
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-emerald-300">
                  Member Dashboard
                </p>
                <h1 className="mt-2 text-lg font-semibold tracking-tight text-emerald-50">
                  AI Income Launch Bundle
                </h1>
                <p className="mt-2 text-xs leading-relaxed text-slate-400">
                  Work through the sections from top to bottom. Each one will
                  move you closer to a real $27–$97 digital income stream.
                </p>
              </div>

              {/* Sidebar navigation – now vertical buttons */}
              <nav
                className="flex flex-col gap-2 text-xs sm:text-sm"
                aria-label="Portal navigation"
              >
                <SidebarLink href="#overview" label="Overview" />
                <SidebarLink href="#start-here" label="Start here" />
                <SidebarLink href="#progress" label="Progress checklist" />
                <SidebarLink href="#core-downloads" label="Core downloads" />
                <SidebarLink href="#ai-command-pack" label="AI Command Pack" />
                <SidebarLink href="#execution-packs" label="Execution packs" />
                <SidebarLink href="#website-templates" label="Website templates" />
                <SidebarLink href="#support" label="Support & help" />
                <SidebarLink href="#chatgpt-website-guide" label="ChatGPT Website Guide" />
              </nav>

              <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-3 text-[0.7rem] text-slate-400">
                <p className="font-semibold text-emerald-200">
                  Quick start suggestion
                </p>
                <p className="mt-1">
                  Today: download the Starter Kit, complete the first{" "}
                  <span className="font-semibold text-emerald-300">3 pages</span>
                  , and tick off one item in your progress checklist.
                </p>
              </div>

              {/* (Optional) Tiny debug note – hidden in UI but can help you verify Ultimate quickly */}
              <div className="hidden text-[0.7rem] text-slate-500">
                hasUltimateAccess: {String(hasUltimateAccess)}
              </div>
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <div className="space-y-10">
            {/* MOBILE TOP NAV (mirrors sidebar) */}
            <div className="mb-3 lg:hidden">
              <div className="flex gap-2 overflow-x-auto rounded-2xl border border-emerald-500/30 bg-slate-950/80 p-2 text-xs">
                <SidebarLink href="#overview" label="Overview" />
                <SidebarLink href="#start-here" label="Start here" />
                <SidebarLink href="#progress" label="Checklist" />
                <SidebarLink href="#core-downloads" label="Downloads" />
                <SidebarLink href="#ai-command-pack" label="AI Cmd Pack" />
                <SidebarLink href="#execution-packs" label="Action packs" />
                <SidebarLink href="#website-templates" label="Templates" />
                <SidebarLink href="#support" label="Support" />
                <SidebarLink href="#chatgpt-website-guide" label="ChatGPT Guide" />
              </div>
            </div>

            {/* HERO / INTRO */}
            <section
              id="overview"
              className="scroll-mt-28 rounded-3xl border border-emerald-500/25 bg-gradient-to-br from-[#0b0e12] via-[#0b0f13] to-[#0c1114] px-6 py-7 shadow-[0_22px_70px_rgba(0,0,0,0.75)] sm:px-10 sm:py-9"
            >
              <p className="inline-flex items-center rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
                AI Income Launch Bundle · Member Portal
              </p>

              <div className="mt-2 flex flex-wrap items-center gap-2">
                <p className="inline-flex rounded-full bg-slate-900/70 px-3 py-1 text-[0.7rem] font-medium text-emerald-200 ring-1 ring-emerald-500/40">
                  Current access: {tierLabel}
                </p>
                {email && (
                  <p className="text-[0.7rem] text-slate-400">
                    Signed in as{" "}
                    <span className="font-medium text-slate-100">{email}</span>
                  </p>
                )}
              </div>

              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-emerald-100 drop-shadow-[0_0_6px_rgba(16,185,129,0.4)] sm:text-3xl">
                Welcome to your{" "}
                <span className="text-emerald-300">AI Income Launch Bundle</span>
              </h2>
              <p className="mt-3 max-w-2xl text-sm text-slate-300 sm:text-base">
                Everything you need to go from “idea in your head” to a real
                $27–$97 digital income stream: the Starter Kit, execution
                playbooks, website blueprints, and a complete website template
                pack you can launch quickly.
              </p>

              <div className="mt-5 grid gap-4 text-xs text-slate-300 sm:grid-cols-3 sm:text-sm">
                <div className="rounded-2xl bg-slate-900/70 px-4 py-3 ring-1 ring-slate-800">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-emerald-300">
                    Step 1
                  </p>
                  <p className="mt-1 font-medium text-slate-50">
                    Download your Starter Kit
                  </p>
                  <p className="mt-1 text-slate-400">
                    Start with the 165-page roadmap so every other asset plugs
                    into a clear plan.
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-900/70 px-4 py-3 ring-1 ring-slate-800">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-emerald-300">
                    Step 2
                  </p>
                  <p className="mt-1 font-medium text-slate-50">
                    Use the Toolkit & execution packs
                  </p>
                  <p className="mt-1 text-slate-400">
                    Build and launch your first simple offer using the
                    checklists, workflows, and prompts.
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-900/70 px-4 py-3 ring-1 ring-slate-800">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-emerald-300">
                    Step 3
                  </p>
                  <p className="mt-1 font-medium text-slate-50">
                    Launch your website template
                  </p>
                  <p className="mt-1 text-slate-400">
                    Plug in the ready-made site, customize it with ChatGPT, and
                    go live with confidence.
                  </p>
                </div>
              </div>
            </section>

            {/* START HERE – WORKBOOK + PDF DOWNLOADS */}
            <section id="start-here" className="scroll-mt-28">
              <StartHereSection />
            </section>

            {/* PROGRESS CHECKLIST */}
            <section id="progress" className="scroll-mt-28">
              <ProgressChecklist />
            </section>

            {/* MAIN DOWNLOADS – CORE BUNDLE */}
            <section id="core-downloads" className="scroll-mt-28 mt-2 space-y-5">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h2 className="text-xl font-semibold tracking-tight text-emerald-100 sm:text-2xl">
                    Core downloads
                  </h2>
                  <p className="mt-1 text-sm text-slate-300">
                    These are the main PDFs you’ll use over and over. Save them
                    somewhere safe.
                  </p>
                </div>
                <p className="text-xs text-slate-500">
                  Need help? Email{" "}
                  <a
                    href="mailto:mike@futuremindwealth.com"
                    className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
                  >
                    mike@futuremindwealth.com
                  </a>
                  .
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {/* Starter Kit – always unlocked (for any signed-in user) */}
                <article className="flex flex-col rounded-2xl border border-slate-800 bg-slate-950/70 p-4 shadow-[0_16px_40px_rgba(0,0,0,0.5)]">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-emerald-300">
                    System
                  </p>
                  <h3 className="mt-1 text-sm font-semibold text-slate-50 sm:text-base">
                    AI Income Starter Kit (165 pages)
                  </h3>
                  <p className="mt-2 flex-1 text-xs text-slate-400 sm:text-sm">
                    Full roadmap for designing, building, and launching a real
                    $27–$97 AI income stream — not just content.
                  </p>
                  <a
                    href="/api/download?path=starter/AI_Income_Starter_Kit-2025-2026.pdf"
                    className="mt-3 inline-flex items-center justify-center rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950 shadow-[0_0_30px_rgba(16,185,129,0.7)] transition hover:bg-emerald-400"
                  >
                    Download Starter Kit
                  </a>
                </article>

                {/* AI Money Toolkit – gated for Starter/Bundle/Ultimate */}
                <article className="flex flex-col rounded-2xl border border-slate-800 bg-slate-950/70 p-4 shadow-[0_16px_40px_rgba(0,0,0,0.5)]">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-emerald-300">
                    Execution
                  </p>
                  <h3 className="mt-1 text-sm font-semibold text-slate-50 sm:text-base">
                    The Complete AI Money Toolkit (10 pages)
                  </h3>
                  <p className="mt-2 flex-1 text-xs text-slate-400 sm:text-sm">
                    Plug-and-play worksheets, prompts, and frameworks so you
                    never stare at a blank page when it’s time to build.
                  </p>

                  {hasToolkitAccess ? (
                    <a
                      href="/api/download?path=starter/AI_Money_Toolkit.pdf"
                      className="mt-3 inline-flex items-center justify-center rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950 shadow-[0_0_30px_rgba(16,185,129,0.7)] transition hover:bg-emerald-400"
                    >
                      Download Toolkit
                    </a>
                  ) : (
                    <LockedButton upgradeHref="/bundle" tier="toolkit" />
                  )}
                </article>

                {/* Blueprint & Website Guide – gated for Starter/Bundle/Ultimate */}
                <article className="flex flex-col rounded-2xl border border-slate-800 bg-slate-950/70 p-4 shadow-[0_16px_40px_rgba(0,0,0,0.5)]">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-emerald-300">
                    Blueprint
                  </p>
                  <h3 className="mt-1 text-sm font-semibold text-slate-50 sm:text-base">
                    AI Blueprint & Website Guide
                  </h3>
                  <p className="mt-2 flex-1 text-xs text-slate-400 sm:text-sm">
                    Quick-start site planner so your offer, messaging, and layout
                    are aligned before you ever open a page builder.
                  </p>

                  {hasToolkitAccess ? (
                    <a
                      href="/api/download?path=starter/AI_Blueprint_and_Website_Guide.pdf"
                      className="mt-3 inline-flex items-center justify-center rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950 shadow-[0_0_30px_rgba(16,185,129,0.7)] transition hover:bg-emerald-400"
                    >
                      Download Blueprint
                    </a>
                  ) : (
                    <LockedButton upgradeHref="/bundle" tier="toolkit" />
                  )}
                </article>
              </div>
            </section>

            {/* AI COMMAND PACK SECTION */}
            <section id="ai-command-pack" className="scroll-mt-28">
              <AICommandPackSection
                hasToolkitAccess={hasToolkitAccess}
                hasBundleAccess={hasBundleAccess}
              />
            </section>

            {/* EXECUTION PACKS */}
            <section id="execution-packs" className="scroll-mt-28">
              <h2 className="text-xl font-semibold tracking-tight text-emerald-100 sm:text-2xl">
                Execution packs & quick wins
              </h2>
              <p className="mt-1 text-sm text-slate-300">
                These are the “do this next” guides you’ll reach for when you
                want a quick, focused work session.
              </p>

              {hasToolkitAccess ? (
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <article className="flex flex-col rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                    <h3 className="text-sm font-semibold text-slate-50 sm:text-base">
                      Tool Stack & Setup Guide
                    </h3>
                    <p className="mt-2 flex-1 text-xs text-slate-400 sm:text-sm">
                      The exact AI + automation tools to use (and skip) so you
                      don&apos;t drown in subscriptions.
                    </p>
                    <a
                      href="/api/download?path=starter/Tool_Stack_and_Setup_Guide.pdf"
                      className="mt-3 inline-flex items-center justify-center rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950 transition hover:bg-emerald-400"
                    >
                      Download Tool Stack Guide
                    </a>
                  </article>

                  <article className="flex flex-col rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                    <h3 className="text-sm font-semibold text-slate-50 sm:text-base">
                      Templates & Checklists Pack
                    </h3>
                    <p className="mt-2 flex-1 text-xs text-slate-400 sm:text-sm">
                      Swipeable checklists and templates so you can execute without
                      wondering if you missed a step.
                    </p>
                    <a
                      href="/api/download?path=starter/Templates_and_Checklists_Pack.pdf"
                      className="mt-3 inline-flex items-center justify-center rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950 transition hover:bg-emerald-400"
                    >
                      Download Templates Pack
                    </a>
                  </article>

                  <article className="flex flex-col rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                    <h3 className="text-sm font-semibold text-slate-50 sm:text-base">
                      20-Minute Automation Build Guide
                    </h3>
                    <p className="mt-2 flex-1 text-xs text-slate-400 sm:text-sm">
                      A fast, repeatable process for building tiny automations that
                      actually save you time and money.
                    </p>
                    <a
                      href="/api/download?path=starter/20-Minute_Automation_Build_Guide.pdf"
                      className="mt-3 inline-flex items-center justify-center rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950 transition hover:bg-emerald-400"
                    >
                      Download 20-Minute Guide
                    </a>
                  </article>

                  <article className="flex flex-col rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                    <h3 className="text-sm font-semibold text-slate-50 sm:text-base">
                      7-Day Action Plan
                    </h3>
                    <p className="mt-2 flex-1 text-xs text-slate-400 sm:text-sm">
                      A one-week sprint plan that tells you what to do each day to
                      get your first offer live.
                    </p>
                    <a
                      href="/api/download?path=starter/7-Day_Action_Plan.pdf"
                      className="mt-3 inline-flex items-center justify-center rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950 transition hover:bg-emerald-400"
                    >
                      Download 7-Day Plan
                    </a>
                  </article>
                </div>
              ) : (
                <LockedSection
                  tier="toolkit"
                  description="Upgrade to unlock the Tool Stack guide, Templates & Checklists, 20-Minute Automation, and the 7-Day Action Plan."
                  upgradeHref="/bundle"
                />
              )}
            </section>

            {/* WEBSITE TEMPLATE PACK */}
            <section id="website-templates" className="scroll-mt-28">
              {hasBundleAccess ? (
                <WebsiteTemplatePackSection />
              ) : (
                <LockedSection
                  tier="bundle"
                  description="The full website template pack is included with the AI Income Launch Bundle. Upgrade to download the complete site you can customize and launch."
                  upgradeHref="/bundle"
                />
              )}
            </section>

            {/* SUPPORT / LINKS BACK */}
            <section
              id="support"
              className="scroll-mt-28 mt-4 flex flex-col items-start justify-between gap-4 rounded-2xl border border-slate-800 bg-slate-950/80 px-5 py-4 text-xs text-slate-400 sm:flex-row sm:items-center sm:text-sm"
            >
              <div>
                <p>
                  Want to re-read the full offer breakdown?{" "}
                  <Link
                    href="/bundle"
                    className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
                  >
                    Go back to the AI Income Launch Bundle page
                  </Link>
                  .
                </p>
                <p className="mt-1">
                  If something looks broken or a file won&apos;t open, email{" "}
                  <a
                    href="mailto:mike@futuremindwealth.com"
                    className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
                  >
                    mike@futuremindwealth.com
                  </a>{" "}
                  and I&apos;ll fix it.
                </p>
              </div>
              <p className="text-[0.7rem] text-slate-500">
                FutureMind Wealth · Veteran-owned · Built with AI + a lot of coffee.
              </p>
            </section>

            {/* CHATGPT WEBSITE IMPROVEMENT GUIDE */}
            <section
              id="chatgpt-website-guide"
              className="scroll-mt-28 mt-6 rounded-3xl border border-emerald-500/25 bg-slate-950/80 px-6 py-7 shadow-[0_20px_70px_rgba(0,0,0,0.7)]"
            >
              {/* START OF GUIDE CONTENT */}
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-emerald-300">
                Website Editing Guide
              </p>

              <h2 className="mt-3 text-xl font-semibold text-emerald-100 sm:text-2xl">
                How to Use ChatGPT to Edit or Improve Your Website
              </h2>

              <p className="mt-2 text-sm text-slate-300">
                Any time you&apos;re unsure how to write something, fix grammar,
                add new sections, or improve your website, ChatGPT can help.
                Just copy/paste the text you want to change and use the prompts
                below.
              </p>

              {/* PROJECT FOLDER + DOC TRACKING */}
              <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                <h3 className="text-lg font-semibold text-emerald-200">
                  Step 1: Create a Project Folder &amp; Tracking Doc
                </h3>
                <p className="mt-2 text-sm text-slate-300">
                  To stay organized and keep ChatGPT focused, set up a simple
                  system on your computer:
                </p>
                <ul className="mt-3 list-disc space-y-1.5 pl-6 text-sm text-slate-400">
                  <li>
                    Create a folder such as{" "}
                    <span className="text-emerald-300">
                      C:\Website Projects\MyWebsite
                    </span>
                    .
                  </li>
                  <li>
                    Inside that folder, create a Word document named{" "}
                    <span className="text-emerald-300">
                      Website-Tasks-and-ChatGPT-Notes.docx
                    </span>
                    .
                  </li>
                  <li>
                    Use the document to keep a running task list, notes about
                    what you&apos;ve already done, and ideas for future changes.
                  </li>
                  <li>
                    At the top of the document, add a reminder for every new
                    ChatGPT session:{" "}
                    <span className="italic text-emerald-300">
                      &quot;We are working on my website. Stay on topic and
                      don&apos;t drift into unrelated ideas.&quot;
                    </span>
                    .
                  </li>
                  <li>
                    When you finish a session, quickly jot down what you
                    completed so it&apos;s easy to pick up next time.
                  </li>
                </ul>
              </div>

              {/* HELPFUL PROMPTS */}
              <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                <h3 className="text-lg font-semibold text-emerald-200">
                  Helpful Prompts You Can Use
                </h3>
                <p className="mt-2 text-sm text-slate-300">
                  Paste any of these prompts into ChatGPT while you&apos;re
                  working on your website:
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6 text-sm text-slate-400">
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
                    &quot;Give me 5 homepage headline ideas that help
                    [audience] achieve [result].&quot;
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
                    &quot;Rewrite only the text in this HTML block; keep the
                    code the same.&quot;
                  </li>
                </ul>
              </div>

              {/* FINAL NOTE */}
              <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                <h3 className="text-lg font-semibold text-emerald-200">
                  Keep ChatGPT Open as Your Website Co-Pilot
                </h3>
                <p className="mt-2 text-sm text-slate-300">
                  Keep ChatGPT open in another browser tab while you edit your
                  website. Any time you get stuck, paste in the section
                  you&apos;re working on, describe what you want, and let
                  ChatGPT do the heavy lifting—while your task list and project
                  folder keep everything on track.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </PortalPageClient>
  );
}

type SidebarLinkProps = {
  href: string;
  label: string;
};

function SidebarLink({ href, label }: SidebarLinkProps) {
  return (
    <a
      href={href}
      className="block w-full whitespace-nowrap rounded-full border border-transparent bg-slate-900/60 px-3 py-2 text-left text-slate-200 transition hover:border-emerald-500/70 hover:bg-slate-900 hover:text-emerald-100"
    >
      {label}
    </a>
  );
}

type LockedSectionProps = {
  tier: "toolkit" | "bundle";
  description: string;
  upgradeHref: string;
};

function LockedSection({ tier, description, upgradeHref }: LockedSectionProps) {
  const label =
    tier === "bundle" ? "AI Income Launch Bundle" : "Complete AI Money Toolkit";

  return (
    <div className="mt-4 rounded-3xl border border-emerald-500/25 bg-slate-950/80 p-6 text-sm text-slate-200 shadow-[0_18px_50px_rgba(0,0,0,0.8)]">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">
        Locked content
      </p>
      <p className="mt-2 text-sm text-slate-100">{description}</p>
      <Link
        href={upgradeHref}
        className="mt-4 inline-flex items-center rounded-full bg-emerald-500 px-5 py-2 text-xs font-semibold text-slate-950 shadow-[0_0_30px_rgba(16,185,129,0.7)] transition hover:bg-emerald-400"
      >
        Upgrade to {label}
      </Link>
      <p className="mt-2 text-[0.7rem] text-slate-500">
        Already upgraded? Make sure you&apos;re logged in with the same email
        you used at checkout.
      </p>
    </div>
  );
}

type LockedButtonProps = {
  upgradeHref: string;
  tier: "toolkit" | "bundle";
};

function LockedButton({ upgradeHref, tier }: LockedButtonProps) {
  const label =
    tier === "bundle" ? "AI Income Launch Bundle" : "Complete AI Money Toolkit";

  return (
    <Link
      href={upgradeHref}
      className="mt-3 inline-flex items-center justify-center rounded-full border border-emerald-500/60 bg-transparent px-4 py-2 text-[0.7rem] font-semibold text-emerald-300 shadow-[0_0_16px_rgba(16,185,129,0.5)] transition hover:bg-emerald-500/10 hover:text-emerald-200"
    >
      Locked · Upgrade to {label}
    </Link>
  );
}
