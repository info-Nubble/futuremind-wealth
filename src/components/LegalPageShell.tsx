// src/components/LegalPageShell.tsx
import Link from "next/link";

export function LegalPageShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    // IMPORTANT: background is global (layout.tsx). Keep this transparent.
    <main className="min-h-screen bg-transparent text-slate-100 py-10 md:py-14">
      <div className="mx-auto max-w-3xl px-4">
        {/* Back link */}
        <div className="mb-4 text-xs text-emerald-300/80">
          <Link href="/" className="hover:text-emerald-200">
            ← Back to FutureMind Wealth
          </Link>
        </div>

        {/* Header */}
        <h1 className="text-3xl font-semibold text-emerald-300">{title}</h1>
        {subtitle && (
          <p className="mt-1 text-sm md:text-base text-slate-400">{subtitle}</p>
        )}

        {/* Card */}
        <div className="mt-6 rounded-2xl border border-emerald-500/25 bg-black/80 p-6 shadow-xl shadow-emerald-500/10">
          <div className="space-y-8 text-sm md:text-base leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}
