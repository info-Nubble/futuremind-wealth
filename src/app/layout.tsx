import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FutureMind Wealth — Automate • Scale • Live Free",
  description:
    "AI + automation systems to build real online income, run by Michael Deeney (veteran-owned). Learn the workflows and tools that actually pay.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-zinc-200 antialiased relative selection:bg-emerald-500/30 selection:text-white">
        {/* Ambient emerald glow */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(16,185,129,0.25),transparent)]" />
        <div
          className="pointer-events-none absolute right-[-20%] top-[-25%] -z-10 h-[32rem] w-[32rem] rounded-full blur-3xl opacity-25"
          style={{
            background:
              "conic-gradient(from_60deg, rgba(16,185,129,.35), transparent 55%)",
          }}
        />
        {children}
      </body>
    </html>
  );
}
