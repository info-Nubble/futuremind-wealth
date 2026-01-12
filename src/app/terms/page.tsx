// src/app/terms/page.tsx
import { LegalPageShell } from "@/components/LegalPageShell";

export const metadata = {
  title: "Terms of Service | FutureMind Wealth",
  description: "Terms of Service governing the use of FutureMind Wealth.",
};

export default function TermsPage() {
  return (
    <LegalPageShell
      title="Terms of Service"
      subtitle="Please read these terms carefully before using FutureMind Wealth."
    >
      <div className="not-prose space-y-8 text-sm md:text-base text-slate-100">
        <section className="space-y-2 md:space-y-3">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
            Last Updated: <span className="text-slate-200">December 2025</span>
          </p>
          <p>
            Welcome to FutureMind Wealth (“we,” “us,” “our”). By accessing or
            using our website, digital products, templates, courses, membership
            portal, and related services (collectively, the “Services”), you
            agree to be bound by these Terms of Service (“Terms”). If you do not
            agree, please do not use our Services.
          </p>
        </section>

        <section className="space-y-2 md:space-y-3">
          <h2 className="text-base md:text-lg font-semibold text-emerald-200">
            1. Use of the Services
          </h2>
          <p>
            You agree to use the Services only for lawful purposes and in
            accordance with these Terms. You will not:
          </p>
          <ul className="list-disc space-y-1 pl-5 text-sm text-slate-200">
            <li>Attempt to gain unauthorized access to any part of the Services</li>
            <li>Share your login credentials or portal access with others</li>
            <li>Scrape, copy, or systematically extract content without permission</li>
            <li>Use the Services in a way that may harm or impair others’ use</li>
          </ul>
        </section>

        <section className="space-y-2 md:space-y-3">
          <h2 className="text-base md:text-lg font-semibold text-emerald-200">
            2. Accounts &amp; Security
          </h2>
          <p>
            To access purchased products, you must create an account with a
            valid email address. You are responsible for maintaining the
            confidentiality of your login credentials and for all activity that
            occurs under your account.
          </p>
        </section>

        <section className="space-y-2 md:space-y-3">
          <h2 className="text-base md:text-lg font-semibold text-emerald-200">
            3. Digital Product Access
          </h2>
          <p>
            After purchasing a digital product (for example, the AI Income
            Starter Kit or Bundle), you will receive access via the portal or
            direct download links. Access may require email verification (magic
            link).
          </p>
        </section>

        <section className="space-y-2 md:space-y-3">
          <h2 className="text-base md:text-lg font-semibold text-emerald-200">
            4. Intellectual Property
          </h2>
          <p>
            All content provided through FutureMind Wealth—including PDFs,
            templates, scripts, workflows, videos, designs, diagrams, and any
            derivatives—is owned by FutureMind Wealth or its licensors and is
            protected by copyright and other intellectual property laws.
          </p>
          <p>You receive a single-user, non-transferable license. You may <strong>not</strong>:</p>
          <ul className="list-disc space-y-1 pl-5 text-sm text-slate-200">
            <li>Resell, share, or redistribute our digital files</li>
            <li>Publish our content publicly or inside other products</li>
            <li>Rebrand our materials as your own</li>
            <li>
              Use our content to train AI models or similar systems without
              prior written permission
            </li>
          </ul>
        </section>

        <section className="space-y-2 md:space-y-3">
          <h2 className="text-base md:text-lg font-semibold text-emerald-200">
            5. Payments
          </h2>
          <p>
            Payments are processed securely via Stripe. By submitting payment,
            you authorize us (and Stripe) to charge your selected payment method
            for the price shown, including any applicable taxes.
          </p>
        </section>

        <section className="space-y-2 md:space-y-3">
          <h2 className="text-base md:text-lg font-semibold text-emerald-200">
            6. Refunds
          </h2>
          <p>
            Due to the instant and non-returnable nature of digital products,
            all sales are final. For full details, please review our{" "}
            <a
              href="/refund-policy"
              className="text-emerald-300 hover:text-emerald-200"
            >
              Refund Policy
            </a>
            .
          </p>
        </section>

        <section className="space-y-2 md:space-y-3">
          <h2 className="text-base md:text-lg font-semibold text-emerald-200">
            7. No Earnings or Results Guarantees
          </h2>
          <p>
            While we provide educational content, tools, and automation
            frameworks, we do not guarantee any specific income, business
            results, or outcomes. Your results depend on your effort, market
            conditions, and many factors beyond our control.
          </p>
        </section>

        <section className="space-y-2 md:space-y-3">
          <h2 className="text-base md:text-lg font-semibold text-emerald-200">
            8. Third-Party Tools &amp; Links
          </h2>
          <p>
            Our Services may reference or link to third-party tools (for
            example, Canva, ConvertKit, OpusClip, or other AI software). We do
            not control these third parties and are not responsible for their
            performance, pricing, policies, or availability.
          </p>
        </section>

        <section className="space-y-2 md:space-y-3">
          <h2 className="text-base md:text-lg font-semibold text-emerald-200">
            9. Limitation of Liability
          </h2>
          <p>
            To the fullest extent permitted by law, FutureMind Wealth will not
            be liable for any indirect, incidental, special, consequential, or
            punitive damages, or any loss of profits or revenues, whether
            incurred directly or indirectly, or any loss of data, use,
            goodwill, or other intangible losses resulting from:
          </p>
          <ul className="list-disc space-y-1 pl-5 text-sm text-slate-200">
            <li>
              Your access to or use of (or inability to access or use) the
              Services
            </li>
            <li>Any conduct or content of any third party</li>
            <li>Unauthorized access, use, or alteration of your data</li>
          </ul>
        </section>

        <section className="space-y-2 md:space-y-3">
          <h2 className="text-base md:text-lg font-semibold text-emerald-200">
            10. Governing Law
          </h2>
          <p>
            These Terms are governed by the laws of the United States and the
            State of Maine, without regard to its conflict of law principles.
          </p>
        </section>

        <section className="space-y-2 md:space-y-3">
          <h2 className="text-base md:text-lg font-semibold text-emerald-200">
            11. Changes to These Terms
          </h2>
          <p>
            We may update these Terms from time to time. The “Last Updated”
            date at the top of this page reflects the latest version. Continued
            use of the Services after changes are posted constitutes your
            acceptance of the updated Terms.
          </p>
        </section>

        <section className="space-y-2 md:space-y-3">
          <h2 className="text-base md:text-lg font-semibold text-emerald-200">
            12. Contact
          </h2>
          <p>
            For questions about these Terms, contact us at{" "}
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
