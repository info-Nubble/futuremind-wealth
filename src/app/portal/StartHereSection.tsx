"use client";

export function StartHereSection() {
  return (
    <section
      id="start-here"
      className="mt-10 mb-12 max-w-5xl mx-auto rounded-3xl border border-emerald-500/25 bg-slate-950/70 px-6 py-8 shadow-[0_0_35px_rgba(16,185,129,0.18)]"
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        {/* Left: text + steps */}
        <div className="max-w-xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-emerald-300/80 uppercase mb-2">
            Start here
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">
            Do these 3 things first (prevents overwhelm).
          </h2>

          <ol className="space-y-2 text-sm text-slate-200/80 list-decimal list-inside">
            <li>Download and read the START-HERE README.</li>
            <li>Download the Starter Kit PDF and skim the first section.</li>
            <li>Pick one “quick win” (7-Day Plan OR Tool Stack Guide).</li>
          </ol>

          <p className="mt-4 text-sm text-slate-200/70">
            Everything below is designed to keep the customer moving forward
            without getting stuck.
          </p>
        </div>

        {/* Right: download buttons */}
        <div className="mt-6 md:mt-0 w-full md:w-80 shrink-0">
          <div className="rounded-2xl border border-emerald-500/25 bg-slate-950/90 px-4 py-4 flex flex-col gap-3">
            <p className="text-xs font-semibold tracking-[0.16em] text-emerald-300/80 uppercase">
              Starter downloads (from portal)
            </p>

            <DownloadButton
              title="START-HERE-READ-ME (PDF)"
              helper="Read this first. It tells them what to do next."
              href="/api/download?path=starter/START-HERE-READ-ME.pdf"
            />

            <DownloadButton
              title="AI Income Starter Kit (PDF)"
              helper="Main roadmap."
              href="/api/download?path=starter/AI_Income_Starter_Kit-2025-2026.pdf"
            />

            <DownloadButton
              title="7-Day Action Plan (PDF)"
              helper="Fast execution plan."
              href="/api/download?path=starter/7-Day_Action_Plan.pdf"
            />

            <DownloadButton
              title="Tool Stack & Setup Guide (PDF)"
              helper="Stops them from buying random tools."
              href="/api/download?path=starter/Tool_Stack_and_Setup_Guide.pdf"
            />

            <DownloadButton
              title="Templates & Checklists Pack (PDF)"
              helper="Use after the Starter Kit."
              href="/api/download?path=starter/Templates_and_Checklists_Pack.pdf"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

type DownloadButtonProps = {
  title: string;
  href: string;
  helper?: string;
};

function DownloadButton({ title, href, helper }: DownloadButtonProps) {
  return (
    <div className="space-y-1">
      <a
        href={href}
        className="inline-flex w-full items-center justify-center rounded-full bg-emerald-400 px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_0_25px_rgba(45,212,191,0.7)] transition hover:bg-emerald-300 hover:shadow-[0_0_35px_rgba(45,212,191,0.8)]"
      >
        Download
        <span className="ml-2 text-[11px] uppercase tracking-[0.18em] text-emerald-950/80">
          PDF
        </span>
      </a>
      <p className="text-xs font-semibold text-slate-100">{title}</p>
      {helper && (
        <p className="text-[11px] leading-snug text-slate-300/75">{helper}</p>
      )}
    </div>
  );
}
