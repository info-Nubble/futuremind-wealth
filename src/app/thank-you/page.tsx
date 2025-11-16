export default function ThankYouPage({
  searchParams,
}: {
  searchParams?: { status?: string };
}) {
  const ok = searchParams?.status !== "error";

  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="text-3xl font-bold">
          {ok ? "You’re in ✅" : "Something went wrong"}
        </h1>

        <p className="mt-4 text-neutral-300">
          {ok ? (
            <>
              Check your inbox for a confirmation email. Once you confirm,
              I’ll send over the{" "}
              <span className="text-emerald-400 font-semibold">
                7 AI Systems Blueprint
              </span>
              .
            </>
          ) : (
            <>
              We couldn’t add your email just now. Please go back and try again,
              or contact{" "}
              <span className="font-mono text-emerald-400">
                mike@futuremindwealth.com
              </span>{" "}
              if the issue continues.
            </>
          )}
        </p>

        {ok && (
          <div className="mt-8 rounded-2xl bg-neutral-950/80 p-6 shadow-[0_0_24px_rgba(16,185,129,0.18)] ring-1 ring-neutral-900">
            <h2 className="text-xl font-semibold">Next steps</h2>
            <ol className="mt-3 list-decimal space-y-2 pl-6 text-sm text-neutral-300">
              <li>Open your email and confirm your subscription.</li>
              <li>
                Add{" "}
                <span className="font-mono text-emerald-400">
                  mike@futuremindwealth.com
                </span>{" "}
                to your contacts so nothing hits spam.
              </li>
              <li>Watch for the first playbook email over the next few days.</li>
            </ol>
          </div>
        )}

        <a
          href="/"
          className="mt-10 inline-block rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-black shadow-[0_0_16px_rgba(16,185,129,0.55)] hover:brightness-110"
        >
          Back to the homepage
        </a>
      </div>
    </main>
  );
}
