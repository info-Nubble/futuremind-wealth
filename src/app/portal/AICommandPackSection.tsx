// src/app/portal/AICommandPackSection.tsx
import Link from "next/link";

type Props = {
  hasToolkitAccess: boolean;
  hasBundleAccess: boolean;
};

export function AICommandPackSection({
  hasToolkitAccess,
  hasBundleAccess,
}: Props) {
  const hasStarterEdition = hasToolkitAccess; // starter + toolkit access
  const hasFullEdition = hasBundleAccess; // bundle only

  return (
    <div className="space-y-5 rounded-3xl border border-slate-800 bg-slate-950/80 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.9)]">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-emerald-300">
            AI Command Pack
          </p>
          <h2 className="mt-1 text-xl font-semibold tracking-tight text-emerald-100 sm:text-2xl">
            Turn ChatGPT into your execution engine.
          </h2>
          <p className="mt-1 text-sm text-slate-300">
            Load this once and ChatGPT stops acting like a random chatbot and
            starts behaving like a tactical assistant for{" "}
            <span className="font-semibold text-slate-100">
              digital products, automation, and content.
            </span>
          </p>
        </div>
        <p className="text-xs text-slate-500">
          Best practice: use the Step One prompt before starting any new
          project.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {/* STEP ONE – ALWAYS AVAILABLE (for signed-in users) */}
        <article className="flex flex-col rounded-2xl border border-slate-800 bg-black/80 p-4">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-emerald-300">
            Step One
          </p>
          <h3 className="mt-1 text-sm font-semibold text-slate-50 sm:text-base">
            Global Setup Prompt
          </h3>
          <p className="mt-2 flex-1 text-xs text-slate-400 sm:text-sm">
            Copy this into ChatGPT before you ask for anything. It locks in: no
            fluff, no guessing, tactical execution only.
          </p>
          <a
            href="/api/download?path=starter/FMW_StepOne_Global_Setup_Prompt.pdf"
            className="mt-3 inline-flex items-center justify-center rounded-full border border-emerald-400 bg-emerald-500/10 px-4 py-2 text-[0.75rem] font-semibold text-emerald-200 shadow-[0_0_26px_rgba(16,185,129,0.7)] transition hover:bg-emerald-400 hover:text-slate-950"
          >
            Download Step One Prompt
          </a>
        </article>

        {/* STARTER EDITION – STARTER / TOOLKIT / BUNDLE */}
        <article className="flex flex-col rounded-2xl border border-slate-800 bg-black/80 p-4">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-emerald-300">
            Commands
          </p>
          <h3 className="mt-1 text-sm font-semibold text-slate-50 sm:text-base">
            AI Command Pack – Starter Edition
          </h3>
          <p className="mt-2 flex-1 text-xs text-slate-400 sm:text-sm">
            20+ core commands for content, funnels, and email. Designed to pair
            with the AI Income Starter Kit and Toolkit.
          </p>

          {hasStarterEdition ? (
            <a
              href="/api/download?path=starter/FMW_AI_Command_Pack_Starter.pdf"
              className="mt-3 inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-[0.75rem] font-semibold text-slate-100 transition hover:border-emerald-400 hover:text-emerald-200"
            >
              Download Starter Edition
            </a>
          ) : (
            <Link
              href="/#pricing"
              className="mt-3 inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-[0.75rem] font-semibold text-slate-400 transition hover:border-emerald-400 hover:text-emerald-200"
            >
              Locked · Upgrade to Starter or Toolkit
            </Link>
          )}
        </article>

        {/* COMPLETE EDITION – BUNDLE ONLY */}
        <article className="flex flex-col rounded-2xl border border-emerald-500/60 bg-black/90 p-4 shadow-[0_0_30px_rgba(16,185,129,0.7)]">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-emerald-300">
            Full System
          </p>
          <h3 className="mt-1 text-sm font-semibold text-slate-50 sm:text-base">
            AI Command Pack – Complete Edition
          </h3>
          <p className="mt-2 flex-1 text-xs text-slate-300 sm:text-sm">
            50+ elite commands including business & tax, Valentina workflows,
            launch sprints, and reinvestment systems.
          </p>

          {hasFullEdition ? (
            <div className="mt-3 space-y-2">
              <a
                href="/api/download?path=bundle/FMW_AI_Command_Pack_Complete_White.pdf"
                className="inline-flex w-full items-center justify-center rounded-full border border-emerald-400 bg-emerald-500/10 px-4 py-2 text-[0.75rem] font-semibold text-emerald-200 transition hover:bg-emerald-400 hover:text-slate-950"
              >
                Download PDF (White Layout)
              </a>
              <a
                href="/api/download?path=bundle/FMW_AI_Command_Pack_Complete_Dark.pdf"
                className="inline-flex w-full items-center justify-center rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-[0.75rem] font-semibold text-slate-100 transition hover:border-emerald-400 hover:text-emerald-200"
              >
                Download PDF (Dark Layout)
              </a>
              <a
                href="/api/download?path=bundle/FMW_AI_Command_Pack_Complete_Canva.txt"
                className="inline-flex w-full items-center justify-center rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-[0.75rem] font-semibold text-slate-100 transition hover:border-emerald-400 hover:text-emerald-200"
              >
                Open Canva Template Link
              </a>
            </div>
          ) : (
            <Link
              href="/#pricing"
              className="mt-3 inline-flex items-center justify-center rounded-full border border-emerald-500/60 bg-black px-4 py-2 text-[0.75rem] font-semibold text-emerald-200 transition hover:bg-emerald-500/10"
            >
              Locked · Upgrade to Full AI Launch Bundle
            </Link>
          )}
        </article>
      </div>
    </div>
  );
}
