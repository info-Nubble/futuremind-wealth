export const metadata = {
  title: "Privacy & Disclaimer — FutureMind Wealth",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold">Privacy Policy & Affiliate Disclaimer</h1>

      <section className="mt-6 space-y-4 text-sm md:text-base text-neutral-300">
        <p>
          When you enter your email on this site, it is stored with our email
          service provider and used to send you content, updates, and relevant
          offers from FutureMind Wealth. You can unsubscribe at any time using
          the link in any email.
        </p>
        <p>
          We may use basic analytics and cookies to understand how the site is
          used and to improve the experience. We do not sell your personal
          information.
        </p>
      </section>

      <h2 className="mt-10 text-2xl font-semibold">Affiliate disclosure</h2>
      <p className="mt-3 text-sm md:text-base text-neutral-300">
        Some links on this site are affiliate links. If you purchase through
        those links, I may earn a commission at no additional cost to you. I
        only recommend tools I use myself or genuinely believe will help you
        build and automate income streams.
      </p>

      <h2 className="mt-10 text-2xl font-semibold">Contact</h2>
      <p className="mt-3 text-sm md:text-base text-neutral-300">
        Questions about this policy or your data? Email{" "}
        <a
          href="mailto:mike@futuremindwealth.com"
          className="text-emerald-400 hover:text-emerald-300"
        >
          mike@futuremindwealth.com
        </a>
        .
      </p>
    </main>
  );
}
