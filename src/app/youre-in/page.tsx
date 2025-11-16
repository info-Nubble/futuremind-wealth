// src/app/youre-in/page.tsx
import Link from "next/link";

export default function YoureInPage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="max-w-xl w-full text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs font-medium mb-6">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          You’re officially in
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4">
          Check your inbox —{" "}
          <span className="text-emerald-400">
            your AI Income Blueprint is on its way.
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-sm sm:text-base text-gray-300 mb-8">
          I’ve emailed you a copy of the{" "}
          <span className="font-semibold">AI Income Blueprint PDF</span>.
          <br />
          If you don’t see it in a few minutes, check your spam or promotions
          tab.
        </p>

        {/* Instant download backup */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 mb-6">
          <p className="text-xs sm:text-sm text-gray-300 mb-3">
            Want instant access while you’re here?
          </p>
          <Link
            href="/ai-income-blueprint.pdf"
            target="_blank"
            className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold bg-emerald-500 hover:bg-emerald-400 text-black transition"
          >
            Download the AI Income Blueprint (PDF)
            <span className="text-xs">⬇️</span>
          </Link>
        </div>

        {/* Extra note */}
        <p className="text-xs text-gray-400">
          Pro tip: Save the PDF — you’ll use it as your roadmap for building
          your AI income system.
        </p>

        {/* Back link */}
        <div className="mt-8">
          <Link
            href="/"
            className="text-xs text-gray-400 hover:text-emerald-400 underline underline-offset-4"
          >
            ← Back to FutureMindWealth.com
          </Link>
        </div>
      </div>
    </main>
  );
}
