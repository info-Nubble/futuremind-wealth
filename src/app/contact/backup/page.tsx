// src/app/contact/page.tsx
import { LegalPageShell } from "@/components/LegalPageShell";

export const metadata = {
  title: "Contact | FutureMind Wealth",
  description:
    "Get help with your FutureMind Wealth purchases, portal access, and billing questions.",
};

export default function ContactPage() {
  return (
    <LegalPageShell
      title="Contact Us"
      subtitle="Need help with your purchase, portal access, or downloads?"
    >
      <div className="space-y-8 text-sm md:text-base text-slate-100">

        {/* Top highlight */}
        <div className="rounded-xl border border-emerald-500/30 bg-slate-900/70 p-5 shadow-inner shadow-emerald-500/10 md:p-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p className="text-sm md:text-base text-slate-100">
              We’re here to help with any issues related to your purchases,
              portal access, billing questions, or product support.
            </p>

            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-200 md:text-sm">
              ⏱ Typical response time: 24–48 hours (Mon–Fri)
            </div>
          </div>
        </div>

        {/* Two-column grid */}
        <div className="grid gap-6 md:grid-cols-2">

          {/* Email support */}
          <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-5 shadow-sm md:p-6">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
              Email Support
            </h2>

            <p className="mt-2 text-sm md:text-base">
              The best way to reach us is by email. We handle all support, access issues,
              and billing questions from this inbox.
            </p>

            <p className="mt-4 flex items-center gap-2 text-sm font-semibold text-emerald-300 md:text-base">
              <span className="text-base">📧</span>
              <a
                href="mailto:support@futuremindwealth.com"
                className="hover:text-emerald-200"
              >
                support@futuremindwealth.com
              </a>
            </p>

            <p className="mt-2 text-xs text-slate-400 md:text-sm">
              Please include the email you used at checkout and any relevant details
              (order, product, screenshots).
            </p>
          </div>

          {/* Common reasons */}
          <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-5 shadow-sm md:p-6">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
              Common Reasons to Contact Us
            </h2>

            <ul className="mt-3 space-y-2 text-sm md:text-base text-slate-200">
              <li>• Trouble accessing the portal or logging in</li>
              <li>• Magic link expired or not received</li>
              <li>• Missing or broken download links</li>
              <li>• Questions about your purchase or upgrade options</li>
              <li>• Billing issues or duplicate charges</li>
              <li>• Technical issues with a template or file</li>
            </ul>
          </div>
        </div>

        {/* Business details */}
        <div className="rounded-xl border border-slate-900 bg-slate-950/80 p-5 text-xs md:text-sm text-slate-400 md:p-6">
          <h2 className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-slate-300">
            Business Details
          </h2>
          <p>
            FutureMind Wealth operates as an online digital products and education brand
            focused on AI, automation, and income systems.
          </p>
          <p className="mt-2">
            For legal or administrative correspondence, please reach out via email first
            at{" "}
            <a
              href="mailto:support@futuremindwealth.com"
              className="text-emerald-300 hover:text-emerald-200"
            >
              support@futuremindwealth.com
            </a>
            .
          </p>
        </div>
      </div>
    </LegalPageShell>
  );
}
