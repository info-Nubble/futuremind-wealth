import Link from "next/link";

export function AICommandPackHighlight() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-12 bg-black">
      <div className="rounded-3xl border border-emerald-500/30 bg-slate-950/80 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.9)]">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-emerald-300">
          New · AI Command Pack
        </p>

        <div className="mt-3 grid gap-5 md:grid-cols-[2fr,1.2fr] md:items-center">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-50">
              Turn ChatGPT into your personal{" "}
              <span className="text-emerald-300">execution engine</span>.
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              Load this once and ChatGPT stops acting like a random chatbot and
              starts behaving like a tactical assistant for{" "}
              <span className="font-semibold text-slate-100">
                digital products, automation, and content.
              </span>
            </p>

            <ul className="mt-3 space-y-1.5 text-sm text-slate-300">
              <li>• Global setup prompt (Step One – start every project here).</li>
              <li>• 50+ commands for content, funnels, email, and execution.</li>
              <li>• Business & tax prompts for structuring offers the right way.</li>
              <li>• Exclusive Valentina / AI workflow prompts (bundle only).</li>
            </ul>

            <p className="mt-3 text-xs text-slate-400">
              Included with every FutureMind Wealth product. Higher tiers unlock
              the full Command Pack.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-black/70 p-4 text-xs text-slate-300">
            <p className="font-semibold text-emerald-200">What you get by tier</p>
            <ul className="mt-2 space-y-1.5">
              <li>
                <span className="font-semibold text-emerald-300">Free: </span>
                Mini Command Pack + Step One setup prompt.
              </li>
              <li>
                <span className="font-semibold text-emerald-300">Starter: </span>
                Pro Command Pack for content, funnels, and email.
              </li>
              <li>
                <span className="font-semibold text-emerald-300">Bundle: </span>
                Complete Command Pack + Valentina + business/tax systems.
              </li>
            </ul>

            <div className="mt-3 flex flex-wrap gap-2">
              <Link
                href="/bundle"
                className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-4 py-2 text-[0.75rem] font-semibold text-slate-950 shadow-[0_0_26px_rgba(16,185,129,0.7)] transition hover:bg-emerald-400"
              >
                See everything that’s included →
              </Link>
              <Link
                href="/portal"
                className="inline-flex items-center justify-center rounded-full border border-slate-600 px-4 py-2 text-[0.75rem] font-semibold text-slate-100 transition hover:border-emerald-400 hover:text-emerald-300"
              >
                Access your Command Pack
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
