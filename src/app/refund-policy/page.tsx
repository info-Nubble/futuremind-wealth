// src/app/refund-policy/page.tsx
import { LegalPageShell } from "@/components/LegalPageShell";

export const metadata = {
  title: "Refund Policy | FutureMind Wealth",
  description:
    "How refunds and billing issues are handled for FutureMind Wealth digital products.",
};

export default function RefundPolicyPage() {
  return (
    <LegalPageShell
      title="Refund Policy"
      subtitle="How refunds and billing issues are handled for FutureMind Wealth digital products."
    >
      <div className="not-prose space-y-8 text-sm md:text-base text-slate-100">
        <section className="space-y-2 md:space-y-3">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
            Last Updated: <span className="text-slate-200">December 2025</span>
          </p>
          <p>
            Because all FutureMind Wealth products are{" "}
            <strong>digital</strong>, <strong>instantly delivered</strong>, and
            cannot be returned, all sales are <strong>final</strong>.
          </p>
        </section>

        <section className="space-y-2 md:space-y-3">
          <h2 className="text-base md:text-lg font-semibold text-emerald-200">
            1. No Refunds on Digital Products
          </h2>
          <p>We do not offer refunds for any of the following:</p>
          <ul className="list-disc space-y-1 pl-5 text-sm text-slate-200">
            <li>PDFs, workbooks, and guides</li>
            <li>Templates and checklists</li>
            <li>Scripts and workflows</li>
            <li>Courses or trainings</li>
            <li>Membership portal content</li>
            <li>Automation or system build guides</li>
          </ul>
          <p>
            Once access is delivered (for example, you receive a download link,
            portal access, or an email containing your materials), the product
            is considered <strong>used</strong>.
          </p>
        </section>

        <section className="space-y-2 md:space-y-3">
          <h2 className="text-base md:text-lg font-semibold text-emerald-200">
            2. Duplicate Purchases
          </h2>
          <p>
            If you accidentally purchase the same product more than once using
            the same email address, contact us within{" "}
            <strong>7 days</strong> and we will review and correct the issue as
            appropriate.
          </p>
        </section>

        <section className="space-y-2 md:space-y-3">
          <h2 className="text-base md:text-lg font-semibold text-emerald-200">
            3. Access Issues &amp; Broken Links
          </h2>
          <p>
            If you experience technical issues accessing your purchase (for
            example, broken download links or portal access problems), we will
            work with you to restore access as quickly as possible. This may
            include:
          </p>
          <ul className="list-disc space-y-1 pl-5 text-sm text-slate-200">
            <li>Resending access links or emails</li>
            <li>Resetting your login or magic link</li>
            <li>Providing alternative download formats when available</li>
          </ul>
        </section>

        <section className="space-y-2 md:space-y-3">
          <h2 className="text-base md:text-lg font-semibold text-emerald-200">
            4. Billing Issues
          </h2>
          <p>
            If you believe your card was charged without authorization,{" "}
            <strong>contact us and Stripe immediately</strong>.
          </p>

          <p>
            <span className="font-semibold text-slate-50">
              Contact FutureMind Wealth:
            </span>
            <br />
            📩{" "}
            <a
              href="mailto:support@futuremindwealth.com"
              className="text-emerald-300 hover:text-emerald-200"
            >
              support@futuremindwealth.com
            </a>
          </p>

          <p>
            <span className="font-semibold text-slate-50">Contact Stripe:</span>
            <br />
            📞 1-888-926-2289 (U.S.)
            <br />
            🌐{" "}
            <a
              href="https://support.stripe.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-300 hover:text-emerald-200"
            >
              https://support.stripe.com
            </a>
          </p>

          <p>
            Stripe support can help you verify charges, check the merchant
            information, and confirm whether the payment originated from your
            card. We will cooperate with Stripe and your bank in any
            investigation.
          </p>
        </section>

        <section className="space-y-2 md:space-y-3">
          <h2 className="text-base md:text-lg font-semibold text-emerald-200">
            5. Chargebacks
          </h2>
          <p>
            If you initiate a chargeback for a legitimate purchase, we reserve
            the right to revoke access to the product and any associated bonuses
            or future updates while the matter is under review.
          </p>
        </section>

        <section className="space-y-2 md:space-y-3">
          <h2 className="text-base md:text-lg font-semibold text-emerald-200">
            6. Policy Changes
          </h2>
          <p>
            We may update this Refund Policy from time to time. The “Last
            Updated” date at the top of this page will indicate the latest
            revision. Continued use of our products and services after changes
            are made constitutes your acceptance of the updated policy.
          </p>
        </section>

        <section className="space-y-2 md:space-y-3">
          <h2 className="text-base md:text-lg font-semibold text-emerald-200">
            7. Contact
          </h2>
          <p>
            For questions about this Refund Policy, contact us at{" "}
            <a
              href="mailto:support@futuremindwealth.com"
              className="text-emerald-300 hover:text-emerald-200"
            >
              support@futuremindwealth.com
            </a>
            .
          </p>
        </section>
      </div>
    </LegalPageShell>
  );
}
