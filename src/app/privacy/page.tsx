// src/app/privacy/page.tsx
import { LegalPageShell } from "@/components/LegalPageShell";

export const metadata = {
  title: "Privacy Policy | FutureMind Wealth",
  description:
    "How FutureMind Wealth collects, uses, and protects your data, plus information about tracking and email.",
};

export default function PrivacyPage() {
  return (
    <LegalPageShell
      title="Privacy Policy"
      subtitle="How we collect, use, and protect your information."
    >
      <div className="not-prose space-y-8 text-sm md:text-base text-slate-100">
        <section className="space-y-2 md:space-y-3">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
            Last Updated: <span className="text-slate-200">December 2025</span>
          </p>
          <p>
            This Privacy Policy explains how FutureMind Wealth (“we,” “us,”
            “our”) collects, uses, and protects your information when you use
            our website, join our email list, purchase our products, or access
            our Services. By using this site, you agree to the collection and
            use of information in accordance with this policy.
          </p>
        </section>

        <section className="space-y-2 md:space-y-3">
          <h2 className="text-base md:text-lg font-semibold text-emerald-200">
            1. Information We Collect
          </h2>

          <div className="space-y-1.5">
            <h3 className="text-sm font-semibold text-emerald-100">
              1.1 Account &amp; Contact Information
            </h3>
            <p>When you interact with our site or products, we may collect:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Email address</li>
              <li>Name (if you choose to provide it)</li>
              <li>Basic login metadata (timestamps, IP for security)</li>
            </ul>
          </div>

          <div className="space-y-1.5">
            <h3 className="text-sm font-semibold text-emerald-100">
              1.2 Purchase &amp; Billing Information
            </h3>
            <p>
              Payments are processed securely via Stripe. We do not store your
              full credit card number. Stripe may collect:
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Payment method details (handled securely by Stripe)</li>
              <li>Billing address or country/region</li>
              <li>Transaction amount, date, and product purchased</li>
            </ul>
          </div>

          <div className="space-y-1.5">
            <h3 className="text-sm font-semibold text-emerald-100">
              1.3 Usage &amp; Analytics Data
            </h3>
            <p>
              We may use basic analytics and cookies to understand how the site
              and portal are used and to improve the experience, including:
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Pages visited and time spent</li>
              <li>Clicks on buttons and links</li>
              <li>Device, browser type, and general location (city/country)</li>
            </ul>
          </div>

          <div className="space-y-1.5">
            <h3 className="text-sm font-semibold text-emerald-100">
              1.4 Email Engagement Data
            </h3>
            <p>
              When you join our email list, our email service provider (such as
              ConvertKit) may track:
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Which emails you open</li>
              <li>Which links you click</li>
              <li>
                Tags related to your status (for example: lead, Starter
                purchaser, Bundle purchaser)
              </li>
            </ul>
          </div>
        </section>

        <section className="space-y-2 md:space-y-3">
          <h2 className="text-base md:text-lg font-semibold text-emerald-200">
            2. How We Use Your Information
          </h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Deliver the digital products and Services you purchase</li>
            <li>Provide portal access and maintain your account</li>
            <li>Send onboarding instructions and product updates</li>
            <li>Send educational content, tips, and relevant offers</li>
            <li>Improve our products, marketing, and user experience</li>
            <li>Prevent fraud, abuse, and unauthorized access</li>
          </ul>
        </section>

        <section className="space-y-2 md:space-y-3">
          <h2 className="text-base md:text-lg font-semibold text-emerald-200">
            3. Cookies &amp; Tracking Technologies
          </h2>
          <p>
            We may use cookies, tracking pixels, and similar technologies to
            remember your preferences, understand how you use the site, and
            measure performance.
          </p>
          <p>
            Most browsers allow you to control cookies through their settings.
            Disabling certain cookies may affect how the site functions.
          </p>
        </section>

        <section className="space-y-2 md:space-y-3">
          <h2 className="text-base md:text-lg font-semibold text-emerald-200">
            4. How We Share Your Information
          </h2>
          <p>
            We do <strong>not</strong> sell your personal information. We may
            share limited data with:
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              <strong>Stripe</strong> – to securely process payments.
            </li>
            <li>
              <strong>Email service providers</strong> – to send emails, manage
              subscriptions, and track engagement.
            </li>
            <li>
              <strong>Hosting and infrastructure providers</strong> – to host
              the site and portal.
            </li>
            <li>
              <strong>Analytics tools</strong> – for aggregated, non-identifying
              usage statistics.
            </li>
          </ul>
        </section>

        <section className="space-y-2 md:space-y-3">
          <h2 className="text-base md:text-lg font-semibold text-emerald-200">
            5. How We Protect Your Data
          </h2>
          <p>
            We use reasonable technical and organizational measures to protect
            your information, including:
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Using Stripe for secure payment processing</li>
            <li>Using HTTPS (SSL) encryption where possible</li>
            <li>Limiting access to systems that store personal data</li>
          </ul>
          <p>
            However, no method of transmission or storage is 100% secure, and we
            cannot guarantee absolute security.
          </p>
        </section>

        <section className="space-y-2 md:space-y-3">
          <h2 className="text-base md:text-lg font-semibold text-emerald-200">
            6. Email Communications &amp; Unsubscribing
          </h2>
          <p>
            When you enter your email on this site, it is stored with our email
            service provider and used to send you content, updates, and relevant
            offers from FutureMind Wealth. You can unsubscribe at any time using
            the link in any email.
          </p>
          <p>
            Transactional emails related to purchases, account access, or
            security may still be sent even if you unsubscribe from marketing
            emails.
          </p>
        </section>

        <section className="space-y-2 md:space-y-3">
          <h2 className="text-base md:text-lg font-semibold text-emerald-200">
            7. Children&apos;s Privacy
          </h2>
          <p>
            Our Services are not directed to children under 13, and we do not
            knowingly collect personal information from children under 13. If
            you believe we have collected such information, please contact us so
            we can remove it.
          </p>
        </section>

        <section className="space-y-2 md:space-y-3">
          <h2 className="text-base md:text-lg font-semibold text-emerald-200">
            8. Your Rights &amp; Choices
          </h2>
          <p>
            Depending on your location, you may have rights regarding your data,
            such as:
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Requesting access to the data we hold about you</li>
            <li>Requesting correction or deletion of your data</li>
            <li>Objecting to certain types of processing</li>
            <li>Withdrawing consent for marketing emails</li>
          </ul>
          <p>
            To exercise any of these rights, contact us using the email address
            below.
          </p>
        </section>

        <section className="space-y-2 md:space-y-3">
          <h2 className="text-base md:text-lg font-semibold text-emerald-200">
            9. Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. The “Last
            Updated” date at the top of this page reflects the most recent
            version. Continued use of the site after changes are posted
            constitutes your acceptance of the updated policy.
          </p>
        </section>

        <section className="space-y-2 md:space-y-3">
          <h2 className="text-base md:text-lg font-semibold text-emerald-200">
            10. Contact
          </h2>
          <p>
            Questions about this policy or your data? Email{" "}
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
