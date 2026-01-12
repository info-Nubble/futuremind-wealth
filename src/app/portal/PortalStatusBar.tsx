// src/app/portal/PortalStatusBar.tsx

import Link from "next/link";

export default function PortalStatusBar() {
  return (
    <div className="w-full border-b border-emerald-500/20 bg-[#05080c]/95 py-3 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.55)]">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4">
        {/* Left: Product status */}
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold tracking-wide text-emerald-300 drop-shadow-[0_0_6px_rgba(16,185,129,0.45)]">
            AI Income Launch Bundle — Lifetime Access
          </p>
          <p className="mt-0.5 text-xs text-slate-400">
            Your downloads, templates, and tools are always available here.
          </p>
        </div>

        {/* Center / Right: Quick actions */}
        <div className="hidden items-center gap-2 md:flex">
          <a
            href="#core-downloads"
            className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-200 hover:bg-emerald-500/20"
          >
            Core downloads
          </a>
          <a
            href="#execution-packs"
            className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-xs font-medium text-slate-200 hover:border-emerald-400/50 hover:text-emerald-200"
          >
            Action packs
          </a>
          <a
            href="#website-templates"
            className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-200 hover:bg-emerald-500/20"
          >
            Website templates
          </a>
          <a
            href="mailto:mike@futuremindwealth.com"
            className="rounded-full border border-slate-600 bg-slate-950 px-3 py-1 text-xs font-medium text-slate-200 hover:border-emerald-400/60 hover:text-emerald-200"
          >
            Support
          </a>
        </div>

        {/* Note: account avatar removed — global navbar handles user display */}
      </div>
    </div>
  );
}
