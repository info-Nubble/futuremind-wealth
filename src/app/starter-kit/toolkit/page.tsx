// src/app/starter-kit/toolkit/page.tsx
import CheckoutToolkitButton from "./CheckoutToolkitButton";

export default function ToolkitUpsellPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto flex max-w-4xl flex-col gap-10 px-4 py-16">
        <header className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">
            FutureMind Wealth • One-Time Offer
          </p>
          <h1 className="text-3xl font-bold sm:text-4xl">
            Upgrade to the Complete AI Money Toolkit
          </h1>
          <p className="text-slate-300">
            You now own the{" "}
            <span className="font-semibold">
              FutureMind Wealth AI Income Starter Kit
            </span>
            . Before you go download it, you have one chance to add the{" "}
            <span className="font-semibold">
              Complete AI Money Toolkit
            </span>{" "}
            to your order at a special one-time price.
          </p>
        </header>

        <section className="grid gap-8 md:grid-cols-[1.4fr,1fr]">
          <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/50 p-6 shadow-xl">
            <h2 className="text-xl font-semibold">
              Everything you need to launch & scale, done for you.
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-200">
              <li>• 50 high-converting AI prompts for products, funnels, and content</li>
              <li>• 20 plug-and-play TikTok / Reels / Shorts scripts</li>
              <li>• 30-day content calendar for AI income creators</li>
              <li>• Sales page + thank-you page copy templates</li>
              <li>• Daily posting & traffic system checklist</li>
              <li>• Email script pack for follow-up and upsells</li>
              <li>• Funnel & automation workflow diagrams</li>
              <li>• Canva templates for covers and social assets</li>
            </ul>
            <p className="mt-3 text-sm text-emerald-300">
              This is the plug-and-play layer on top of your Starter Kit. Instead of staring at a
              blank page, you&apos;ll have proven words, prompts, and systems ready to go.
            </p>
          </div>

          <aside className="flex flex-col justify-between rounded-2xl border border-emerald-500/40 bg-slate-900/70 p-6 shadow-xl">
            <div className="space-y-2">
              <p className="text-sm font-semibold text-emerald-300">
                One-time offer only
              </p>
              <p className="text-3xl font-bold">
                Add the Toolkit for <span className="text-emerald-400">$47</span>
              </p>
              <p className="text-sm text-slate-300">
                You won&apos;t see this price again. After this page, the Toolkit will only be
                available at the full price.
              </p>
            </div>

            <div className="mt-6 space-y-3">
              <CheckoutToolkitButton />
              <p className="text-xs text-slate-400">
                Secure payment via Stripe. One-time purchase. No subscription.
              </p>
              <p className="text-xs text-slate-500">
                Prefer to skip it? No problem — you&apos;ll still get instant access to your Starter Kit
                on the next page.
              </p>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
