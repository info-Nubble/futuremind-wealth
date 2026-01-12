import Link from "next/link";

type Tier = {
  id: string;
  label: string;
  price: string;
  name: string;
  description: string;
  badge?: string;
  highlights: string[];
  ctaLabel: string;
  href: string;
  featured?: boolean;
};

const tiers: Tier[] = [
  {
    id: "starter",
    label: "$27 · STARTER",
    price: "$27",
    name: "AI Income Starter Kit",
    description:
      "The simple, proven roadmap to go from zero to your first income system.",
    highlights: [
      "Mini AI Command Pack (5–10 essential prompts).",
      "Step One Global Setup Prompt to make ChatGPT act like a tactical assistant.",
      "TikTok, YouTube, and short-form script generators.",
      "Starter funnel + landing page prompts.",
      "Core execution system so you’re not staring at a blank page.",
    ],
    ctaLabel: "Start with the Starter Kit →",
    href: "/checkout/starter",
  },
  {
    id: "toolkit",
    label: "$49 · TOOLKIT",
    price: "$49",
    name: "Complete AI Money Toolkit",
    description:
      "Execution packs, checklists, workflows, and templates ready to plug in.",
    badge: "Most Popular",
    highlights: [
      "AI Command Pack — Starter Edition (20+ tactical commands).",
      "Content, funnel, and email systems you can reuse on every offer.",
      "Automation workflows, checklists, and execution templates.",
      "Sales page + landing page builders for fast launches.",
      "Built to stack on top of the Starter Kit when you’re ready to scale.",
    ],
    ctaLabel: "Get the Complete Toolkit →",
    href: "/checkout/toolkit",
    featured: true,
  },
  {
    id: "bundle",
    label: "$149 · FULL BUNDLE",
    price: "$149",
    name: "Full AI Launch Bundle",
    description:
      "All PDFs, execution packs, and the website template pack (zip).",
    highlights: [
      "AI Command Pack — Complete Edition (50+ elite commands).",
      "Business + tax system prompts for structuring and scaling offers.",
      "Reinvestment + automation prompts so you know where the money should go.",
      "Valentina AI workflow commands for consistent, on-brand visuals.",
      "White PDF, dark PDF, and editable Canva template + full portal unlock.",
    ],
    ctaLabel: "Unlock the Full Launch Bundle →",
    href: "/checkout/bundle",
  },
];

function TierCard({ tier }: { tier: Tier }) {
  const isFeatured = tier.featured;

  return (
    <div
      className={[
        "relative flex flex-col rounded-3xl border bg-slate-950/90 p-[1px] shadow-[0_0_60px_rgba(16,185,129,0.25)]",
        isFeatured ? "border-emerald-400/70" : "border-slate-700/80",
      ].join(" ")}
    >
      <div className="flex h-full flex-col rounded-[1.35rem] bg-black/90 px-5 py-6">
        {tier.badge && (
          <div className="mb-2 inline-flex items-center self-start rounded-full border border-emerald-400/50 bg-emerald-500/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-emerald-300">
            {tier.badge}
          </div>
        )}

        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-emerald-300">
          {tier.label}
        </p>
        <h3 className="mt-2 text-lg font-semibold tracking-tight text-slate-50">
          {tier.name}
        </h3>
        <p className="mt-1 text-sm text-slate-300">{tier.description}</p>

        <ul className="mt-4 space-y-1.5 text-sm text-slate-300">
          {tier.highlights.map((item, idx) => (
            <li key={idx} className="flex gap-2">
              <span className="mt-[4px] inline-block h-[5px] w-[5px] rounded-full bg-emerald-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5">
          <Link
            href={tier.href}
            className={[
              "inline-flex w-full items-center justify-center rounded-full px-4 py-2.5 text-[0.8rem] font-semibold transition",
              isFeatured
                ? "bg-emerald-500 text-slate-950 shadow-[0_0_30px_rgba(16,185,129,0.7)] hover:bg-emerald-400"
                : "border border-slate-600 text-slate-100 hover:border-emerald-400 hover:text-emerald-300",
            ].join(" ")}
          >
            {tier.ctaLabel}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function PricingSection() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-12 bg-black">
      <header className="mb-6">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-emerald-300">
          Pick your path
        </p>
        <h2 className="mt-2 text-xl font-semibold tracking-tight text-slate-50">
          Choose how deep you want to go with FutureMind Wealth.
        </h2>
        <p className="mt-1 max-w-2xl text-sm text-slate-300">
          Start light with the Starter Kit, step up to the Toolkit, or unlock
          the full AI Launch Bundle with the complete AI Command Pack and
          launch assets.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-3">
        {tiers.map((tier) => (
          <TierCard key={tier.id} tier={tier} />
        ))}
      </div>
    </section>
  );
}
