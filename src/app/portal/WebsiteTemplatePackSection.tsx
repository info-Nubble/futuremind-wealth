// src/app/portal/WebsiteTemplatePackSection.tsx
// Rebuilt to match Supabase Storage reality:
// paid-downloads/bundle/START-HERE-READ-ME.pdf
// paid-downloads/bundle/Website-Template-Pack.zip

export function WebsiteTemplatePackSection() {
  return (
    <section
      id="website-templates"
      className="mt-16 rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-[#0b0e12] via-[#0b0f13] to-[#0c1114] shadow-[0_18px_60px_rgba(0,0,0,0.65)]"
    >
      <div className="px-6 py-8 sm:px-10 sm:py-10">
        {/* Section header */}
        <div className="max-w-3xl">
          <p className="inline-flex items-center rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-emerald-300">
            Bonus inside the bundle
          </p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-emerald-100 sm:text-3xl drop-shadow-[0_0_6px_rgba(16,185,129,0.4)]">
            Website Template Pack
          </h2>
          <p className="mt-3 text-sm text-slate-300 sm:text-base">
            You don’t just get PDFs. You also get a plug-and-play website
            template pack you can unzip and customize fast using ChatGPT.
          </p>
        </div>

        {/* Quick “how it works” row */}
        <div className="mt-6 grid gap-4 text-xs text-slate-300 sm:grid-cols-3 sm:text-sm">
          <div className="flex gap-3 rounded-2xl bg-slate-900/60 px-4 py-3 ring-1 ring-slate-800">
            <div className="mt-0.5 h-6 w-6 shrink-0 rounded-full bg-emerald-500/15 text-center text-[0.7rem] font-semibold text-emerald-300">
              1
            </div>
            <div>
              <p className="font-medium text-slate-100">Open the README</p>
              <p className="text-slate-400">
                Start with the instructions so you don’t get stuck.
              </p>
            </div>
          </div>
          <div className="flex gap-3 rounded-2xl bg-slate-900/60 px-4 py-3 ring-1 ring-slate-800">
            <div className="mt-0.5 h-6 w-6 shrink-0 rounded-full bg-emerald-500/15 text-center text-[0.7rem] font-semibold text-emerald-300">
              2
            </div>
            <div>
              <p className="font-medium text-slate-100">Download the ZIP</p>
              <p className="text-slate-400">
                Unzip the pack and choose the template that fits your niche.
              </p>
            </div>
          </div>
          <div className="flex gap-3 rounded-2xl bg-slate-900/60 px-4 py-3 ring-1 ring-slate-800">
            <div className="mt-0.5 h-6 w-6 shrink-0 rounded-full bg-emerald-500/15 text-center text-[0.7rem] font-semibold text-emerald-300">
              3
            </div>
            <div>
              <p className="font-medium text-slate-100">Customize + launch</p>
              <p className="text-slate-400">
                Edit the text with ChatGPT, upload it to Vercel/hosting, go live.
              </p>
            </div>
          </div>
        </div>

        {/* ZIP + README cards */}
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {/* README card */}
          <div className="group flex flex-col justify-between rounded-2xl border border-emerald-500/25 bg-slate-950/40 p-5 transition hover:border-emerald-400/40 hover:bg-slate-900/60">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-emerald-400">
                Step 1 (required)
              </p>
              <h3 className="mt-1 text-sm font-semibold text-slate-50 sm:text-base">
                START-HERE-READ-ME (PDF)
              </h3>
              <p className="mt-2 text-xs text-slate-400 sm:text-sm">
                This is the “do this next” guide. It explains how to use the
                template pack and the fastest path to launch.
              </p>
            </div>
            <div className="mt-4 flex items-center justify-between gap-3">
              <a
                href="/api/download?path=bundle/START-HERE-READ-ME.pdf"
                className="inline-flex items-center justify-center rounded-full bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-950 transition group-hover:bg-emerald-400"
              >
                Open README
              </a>
              <span className="text-[0.7rem] text-slate-500">
                Read first · prevents overwhelm
              </span>
            </div>
          </div>

          {/* ZIP card */}
          <div className="group flex flex-col justify-between rounded-2xl border border-emerald-500/25 bg-slate-950/40 p-5 transition hover:border-emerald-400/40 hover:bg-slate-900/60">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-emerald-400">
                Step 2
              </p>
              <h3 className="mt-1 text-sm font-semibold text-slate-50 sm:text-base">
                Website-Template-Pack (ZIP)
              </h3>
              <p className="mt-2 text-xs text-slate-400 sm:text-sm">
                This ZIP contains the full set of website templates. Unzip it
                and choose the one that matches your niche.
              </p>
            </div>
            <div className="mt-4 flex items-center justify-between gap-3">
              <a
                href="/api/download?path=bundle/Website-Template-Pack.zip"
                className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950 shadow-[0_0_25px_rgba(16,185,129,0.55)] transition group-hover:bg-emerald-400"
              >
                Download ZIP
              </a>
              <span className="text-[0.7rem] text-slate-500">
                ZIP file · includes templates
              </span>
            </div>
          </div>
        </div>

        {/* Unzip help (support-ticket killer) */}
        <div className="mt-6 rounded-2xl border border-slate-800 bg-black/40 p-4 text-xs text-slate-400">
          <p className="font-semibold text-slate-200">Unzip instructions:</p>
          <ul className="mt-2 list-disc pl-5 space-y-1">
            <li>
              <span className="font-semibold text-slate-200">Windows:</span>{" "}
              Right-click the ZIP → <span className="text-slate-200">Extract All</span>
            </li>
            <li>
              <span className="font-semibold text-slate-200">Mac:</span>{" "}
              Double-click the ZIP to extract
            </li>
            <li>
              Open the extracted folder → open the HTML file in a browser → edit
              the text using ChatGPT prompts from the README.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
