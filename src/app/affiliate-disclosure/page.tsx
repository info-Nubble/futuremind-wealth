// src/app/affiliate-disclosure/page.tsx
import { LegalPageShell } from "@/components/LegalPageShell";

export const metadata = {
  title: "Affiliate Disclosure | FutureMind Wealth",
  description:
    "Transparency about how FutureMind Wealth may earn commissions from recommended tools and services.",
};

export default function AffiliateDisclosurePage() {
  return (
    <LegalPageShell
      title="Affiliate Disclosure"
      subtitle="Transparency about how we may earn commissions from recommended tools."
    >
      <div className="not-prose space-y-8 text-sm md:text-base text-slate-100">
        <section className="space-y-2 md:space-y-3">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
            Last Updated: <span className="text-slate-200">December 2025</span>
          </p>
          <p>
            FutureMind Wealth participates in various affiliate programs. This
            means that some links on our website, inside our PDFs, in the
            Creator Hub, and in our emails are affiliate links. If you click an
            affiliate link and make a purchase, we may earn a commission—at no
            additional cost to you.
          </p>
        </section>

        <section className="space-y-2 md:space-y-3">
          <h2 className="text-base md:text-lg font-semibold text-emerald-200">
            1. Why We Use Affiliate Links
          </h2>
          <p>
            Affiliate partnerships help support the time, tools, and systems
            required to create high-quality content and digital products. They
            allow us to keep prices reasonable while continuing to improve what
            we offer.
          </p>
        </section>

        <section className="space-y-2 md:space-y-3">
          <h2 className="text-base md:text-lg font-semibold text-emerald-200">
            2. Tools We May Recommend
          </h2>
          <p>Examples of tools we may recommend include (but are not limited to):</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Design tools (e.g., Canva)</li>
            <li>Email service providers (e.g., ConvertKit)</li>
            <li>AI tools (e.g., ChatGPT, ElevenLabs)</li>
            <li>Video and clip tools (e.g., OpusClip or similar)</li>
            <li>Website and hosting platforms</li>
            <li>Other software and services in our AI tool stack</li>
          </ul>
          <p>
            When a link is an affiliate link, we aim to make that clear either
            in the surrounding copy or in a general disclosure near the link or
            section.
          </p>
        </section>

        <section className="space-y-2 md:space-y-3">
          <h2 className="text-base md:text-lg font-semibold text-emerald-200">
            3. Our Recommendation Philosophy
          </h2>
          <p>
            We strive to recommend products and services that we use ourselves
            or genuinely believe can help you build and automate income streams.
            However, you should always do your own research and evaluate whether
            a tool is appropriate for your specific situation, budget, and
            goals.
          </p>
        </section>

        <section className="space-y-2 md:space-y-3">
          <h2 className="text-base md:text-lg font-semibold text-emerald-200">
            4. No Extra Cost to You
          </h2>
          <p>
            When you purchase through an affiliate link, the price you pay is
            typically the same as if you visited the site directly. In some
            cases, we may even be able to share discounts or special offers.
          </p>
        </section>

        <section className="space-y-2 md:space-y-3">
          <h2 className="text-base md:text-lg font-semibold text-emerald-200">
            5. Questions
          </h2>
          <p>
            If you have any questions about our affiliate relationships or how
            they work, contact us at{" "}
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
