import { contact } from "@/components/site/data";
import { ContactForm } from "@/components/site/forms";
import { ButtonLink, PageHero, shell } from "@/components/site/ui";

export default function ContactPage() {
  return (
    <main>
      <PageHero
        title="Get in touch."
        lead="We're here to help with your business needs. Send us a message, or reach us directly using the details below."
      />

      <section className={`${shell} grid gap-12 pb-24 md:pb-32 lg:grid-cols-[1fr_1.5fr] lg:gap-20`}>
        <div className="flex flex-col gap-10">
          <dl className="border-t border-(--c-ink)/10">
            <div className="border-b border-(--c-ink)/10 py-6">
              <dt className="text-sm text-(--c-muted)">Email</dt>
              <dd className="mt-1">
                <a href={`mailto:${contact.email}`} className="f-display text-2xl font-medium hover:text-(--c-red)">
                  {contact.email}
                </a>
                <p className="mt-1 text-sm text-(--c-muted)">We&apos;ll respond within 24 hours</p>
              </dd>
            </div>
            <div className="border-b border-(--c-ink)/10 py-6">
              <dt className="text-sm text-(--c-muted)">Phone</dt>
              <dd className="mt-1">
                <span className="f-display text-2xl font-medium">{contact.phone}</span>
                <p className="mt-1 text-sm text-(--c-muted)">Free call within Turkey</p>
              </dd>
            </div>
            <div className="border-b border-(--c-ink)/10 py-6">
              <dt className="text-sm text-(--c-muted)">Address</dt>
              <dd className="mt-1">
                <span className="f-display text-2xl font-medium">United Kingdom</span>
                <p className="mt-1 text-sm text-(--c-muted)">UK-based support team</p>
              </dd>
            </div>
          </dl>

          <div className="rounded-3xl bg-(--c-blush) p-8">
            <h2 className="f-display text-2xl font-semibold">Planning a project?</h2>
            <p className="mt-3 leading-relaxed text-(--c-muted)">
              Get a free and quick quote. We analyse your current needs and tell you what we will do and how we will
              do it.
            </p>
            <ButtonLink href="/quote" className="mt-6">
              Get a free quote
            </ButtonLink>
          </div>
        </div>

        <div className="rounded-[2rem] border border-(--c-ink)/10 p-6 sm:p-10">
          <h2 className="f-display text-3xl font-semibold">Send us a message</h2>
          <p className="mb-8 mt-2 text-(--c-muted)">Fill in the form and we&apos;ll get back to you as soon as possible.</p>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
