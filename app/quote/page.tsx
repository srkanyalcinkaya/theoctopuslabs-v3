import { QuoteForm } from "@/components/site/forms";
import { PageHero, shell } from "@/components/site/ui";

const benefits = [
  ["Free quote", "No obligation, completely free consultation and quote."],
  ["Quick response", "We get back to you within 24 hours."],
  ["Expert analysis", "A professional assessment of your needs."],
  ["Tailored solution", "A proposal written for your business."],
];

const next = [
  ["We review your request", "We look at your current site or idea and point out what is holding it back."],
  ["You get a proposal", "It says what we would do, how we would do it, and the price."],
  ["You decide", "Take your time. There is no obligation to go ahead."],
];

export default function QuotePage() {
  return (
    <main>
      <PageHero
        title="Get a free quote."
        lead="Tell us about your project. We analyse your current shortcomings and keep you informed about what we will do and how we will do it."
      />

      <section aria-label="What you get" className="border-y border-(--c-ink)/8">
        <dl className={`${shell} grid divide-(--c-ink)/8 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x`}>
          {benefits.map(([title, body]) => (
            <div key={title} className="py-7 lg:px-8 lg:first:pl-0">
              <dt className="f-display text-xl font-semibold">{title}</dt>
              <dd className="mt-1 text-(--c-muted)">{body}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className={`${shell} grid gap-14 py-20 md:py-28 lg:grid-cols-[1.6fr_1fr] lg:gap-20`}>
        <QuoteForm />

        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="on-ink rounded-[2rem] bg-(--c-ink) p-8 text-white md:p-10">
            <h2 className="f-display text-2xl font-semibold">What happens next</h2>
            <ol className="mt-8 space-y-7">
              {next.map(([title, body], i) => (
                <li key={title} className="grid grid-cols-[2.25rem_1fr] gap-3">
                  <span className="f-display text-3xl font-semibold leading-none text-(--c-mark)">{i + 1}</span>
                  <div>
                    <h3 className="font-medium">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-(--c-muted-on-ink)">{body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-white/12 pt-8">
              <div>
                <dt className="f-display text-3xl font-semibold">1 year</dt>
                <dd className="mt-1 text-sm text-(--c-muted-on-ink)">free technical support</dd>
              </div>
              <div>
                <dt className="f-display text-3xl font-semibold">30 days</dt>
                <dd className="mt-1 text-sm text-(--c-muted-on-ink)">money-back guarantee</dd>
              </div>
            </dl>
          </div>
        </aside>
      </section>
    </main>
  );
}
