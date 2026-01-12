// src/app/layout.tsx
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { createSupabaseServerClient } from "@/lib/supabaseServer";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "FutureMind Wealth — Automate • Scale • Live Free",
  description:
    "AI + automation systems to build real online income. Learn the workflows, tools, and systems that actually pay.",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default async function RootLayout({ children }: RootLayoutProps) {
  const supabase = await createSupabaseServerClient();
  let user: any = null;

  if (supabase) {
    try {
      const { data, error } = await supabase.auth.getUser();

      if (!error && data?.user) {
        user = data.user;

        if (user.email) {
          try {
            const { error: syncError } = await supabase.rpc(
              "sync_user_purchases",
              {
                p_user_id: user.id,
                p_email: user.email,
              }
            );

            if (syncError) {
              console.error("❌ Error running sync_user_purchases:", syncError);
            }
          } catch (rpcErr) {
            console.error("❌ RPC error:", rpcErr);
          }
        }
      }
    } catch {
      user = null;
    }
  }

  const year = new Date().getFullYear();

  return (
    <html lang="en" className="h-full">
      {/* ✅ FIX: TRUE BLACK BACKGROUND */}
      <body className="min-h-screen bg-black text-slate-100 antialiased">
        <div className="flex min-h-screen flex-col">
          <SiteNavbar user={user} />
          <main className="flex-1">{children}</main>
          <SiteFooter year={year} />
        </div>
      </body>
    </html>
  );
}

/* ------------------------------ SITE NAVBAR ------------------------------ */

type SiteNavbarProps = {
  user:
    | {
        email?: string;
        user_metadata?: Record<string, any>;
      }
    | null;
};

function SiteNavbar({ user }: SiteNavbarProps) {
  const loggedIn = !!user;

  const displayName =
    (user?.user_metadata as any)?.full_name ||
    user?.email ||
    "FutureMind Member";

  return (
    <header className="sticky top-0 z-40 border-b border-emerald-500/15 bg-black/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400/90 via-emerald-500 to-emerald-300 shadow-[0_0_25px_rgba(52,211,153,0.85)]">
            <span className="text-xs font-black tracking-tighter text-black">
              FM
            </span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300/95">
              FutureMind
            </span>
            <span className="text-sm font-medium text-slate-200">
              Wealth Systems
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-4 text-xs md:flex">
          <NavLink href="/">Home</NavLink>

          {/* PRIMARY ENTRY */}
          <NavLink href="/blueprint">
            <span className="font-semibold text-emerald-300">Start Here</span>
          </NavLink>

          {/* PAID OFFER */}
          <NavLink href="/bundle">Pro Bundle</NavLink>

          {/* SECONDARY */}
          <NavLink href="/creator-hub">Creator Hub</NavLink>

          {/* MEMBER */}
          <NavLink href="/portal">Portal</NavLink>
        </nav>

        <div className="flex items-center gap-3">
          {!loggedIn ? (
            <>
              <Link
                href="/signin"
                className="hidden text-xs text-neutral-300 transition hover:text-emerald-300 md:inline"
              >
                Sign in
              </Link>
              <Link
                href="/blueprint"
                className="rounded-full bg-emerald-400 px-4 py-2 text-xs font-semibold text-black shadow-[0_0_20px_rgba(52,211,153,0.8)] transition hover:bg-emerald-300"
              >
                Get the blueprint
              </Link>
            </>
          ) : (
            <div className="flex items-center gap-3">
              <div className="hidden flex-col text-right text-[10px] leading-tight text-slate-300 sm:flex">
                <span className="max-w-[220px] truncate font-semibold text-slate-50">
                  {displayName}{" "}
                  <span className="font-normal text-slate-400">(Account)</span>
                </span>
                <span className="text-[9px] text-slate-500">
                  FutureMind Wealth · Member
                </span>
              </div>

              <Link
                href="/portal"
                className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-200 transition hover:bg-emerald-500/20"
              >
                Portal
              </Link>

              <Link
                href="/signout"
                className="hidden text-xs font-medium text-neutral-300 transition hover:text-emerald-300 md:inline-flex"
              >
                Sign out
              </Link>

              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-emerald-500/40 bg-emerald-500/10 text-[10px] font-semibold text-emerald-200 md:hidden">
                {getInitials(displayName)}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="border-b border-transparent pb-0.5 text-neutral-300 transition hover:border-emerald-400 hover:text-emerald-300"
    >
      {children}
    </Link>
  );
}

function getInitials(name: string): string {
  if (!name) return "FM";
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[1][0]).toUpperCase();
}

/* ------------------------------- FOOTER ------------------------------- */

function SiteFooter({ year }: { year: number }) {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-[11px] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} FutureMind Wealth. All rights reserved.</p>

        <nav className="flex flex-wrap items-center gap-x-4 gap-y-1">
          <Link href="/terms" className="hover:text-emerald-300">Terms</Link>
          <span className="text-slate-600">•</span>
          <Link href="/privacy" className="hover:text-emerald-300">Privacy</Link>
          <span className="text-slate-600">•</span>
          <Link href="/refund-policy" className="hover:text-emerald-300">Refunds</Link>
          <span className="text-slate-600">•</span>
          <Link href="/affiliate-disclosure" className="hover:text-emerald-300">Affiliates</Link>
          <span className="text-slate-600">•</span>
          <Link href="/contact" className="hover:text-emerald-300">Contact</Link>
        </nav>
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-4 text-[10px] text-slate-600">
        <a
          href="https://nubbletechnology.com"
          target="_blank"
          rel="noreferrer"
          className="hover:text-emerald-300 transition"
        >
          Designed by Nubble Technology
        </a>
      </div>
    </footer>
  );
}
