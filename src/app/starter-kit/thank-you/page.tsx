// src/app/starter-kit/thank-you/page.tsx
import Link from "next/link";

type SearchParams = { [key: string]: string | string[] | undefined };

export default function StarterKitThankYouPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto flex max-w-3xl flex-col gap-8 px-4 py-16">
        <header className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
            FutureMind Wealth
          </p>
          <h1 className="text-3xl font-bold sm:text-4xl">
            You&apos;re in. Your resources are ready. ✅
          </h1>
          <p className="text-slate-300">
            Your payment was processed securely via Stripe.
          </p>
        </header>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl space-y-4">
          <h2 className="text-xl font-semibold">Next step</h2>
          <p className="text-slate-300">
            All of your files live inside the member portal so you can always
            access the latest versions.
          </p>

          <Link
            href="/portal"
            className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-emerald-400"
          >
            Go to your member portal →
          </Link>

          <p className="text-xs text-slate-400">
            Tip: Bookmark the portal so you can come back anytime.
          </p>
        </section>

        <footer className="border-t border-slate-800 pt-6 text-sm text-slate-500">
          <p>
            Need help? Reply to any email from FutureMind Wealth and I&apos;ll help you.
          </p>
        </footer>
      </div>
    </main>
  );
}
