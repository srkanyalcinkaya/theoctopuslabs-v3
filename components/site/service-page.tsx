import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { services } from "./data";
import { servicePages } from "./service-pages";
import { ButtonLink, CtaPanel, OctopusGlyph, PageHero, QuoteButton, SectionHeading, shell } from "./ui";

export function ServicePage({ slug }: { slug: string }) {
  const index = services.findIndex((s) => s.slug === slug);
  const service = services[index];
  const page = servicePages[slug];

  return (
    <main>
      <nav aria-label="Breadcrumb" className={cn(shell, "pt-10 text-sm text-(--c-muted)")}>
        <ol className="flex items-center gap-2">
          <li>
            <Link href="/#services" className="hover:text-(--c-ink)">
              Services
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li aria-current="page" className="text-(--c-ink)">
            {service.title}
          </li>
        </ol>
      </nav>

      <PageHero
        title={page.headline}
        lead={page.lead}
        aside={
          <div className="relative aspect-square w-full overflow-hidden rounded-[2.5rem] bg-(--c-red)">
            <OctopusGlyph highlight={index} className="absolute inset-[12%] text-white" />
          </div>
        }
      >
        <QuoteButton />
        <ButtonLink href="/contact" tone="outline">
          Talk to us
        </ButtonLink>
      </PageHero>

      <section className={cn(shell, "pb-24 pt-10 md:pb-36")}>
        <SectionHeading title={`${page.featuresTitle}.`} className="text-(--c-ink)" />
        <ul className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-(--c-ink)/10 bg-(--c-ink)/10 sm:grid-cols-2 lg:grid-cols-3">
          {page.features.map((feature) => (
            <li key={feature.title} className="bg-white p-8 md:p-10">
              <h3 className="f-display text-2xl font-medium">{feature.title}</h3>
              <p className="mt-3 leading-relaxed text-(--c-muted)">{feature.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="on-ink bg-(--c-ink) py-20 text-white md:py-28">
        <div className={cn(shell, "grid items-stretch gap-6", page.image && "lg:grid-cols-[1fr_1.1fr]")}>
          {page.image && (
            <div className="relative min-h-[20rem] overflow-hidden rounded-3xl">
              <Image src={page.image.src} alt={page.image.alt} fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
            </div>
          )}
          <div className={cn("flex flex-col justify-between gap-12", page.image ? "rounded-3xl bg-(--c-ink-soft) p-8 md:p-12" : "lg:flex-row lg:items-end")}>
            <h2 className="f-display max-w-xl text-[clamp(2rem,3.6vw,3.25rem)] font-semibold leading-[1] text-balance">
              {page.whyTitle}
              {page.whyTitle.endsWith("?") ? "" : "."}
            </h2>
            <dl className={cn("grid gap-8 sm:grid-cols-2", !page.image && "lg:max-w-2xl")}>
              {page.why.map((item) => (
                <div key={item.title} className="border-t border-white/15 pt-5">
                  <dt className="f-display text-xl font-medium">{item.title}</dt>
                  <dd className="mt-2 leading-relaxed text-(--c-muted-on-ink)">{item.body}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className={cn(shell, "py-20 md:py-28")}>
        <h2 className="mb-6 text-(--c-muted)">Other services</h2>
        <ul className="flex flex-wrap gap-2">
          {services
            .filter((s) => s.slug !== slug)
            .map((s) => (
              <li key={s.slug}>
                <Link
                  href={s.href}
                  className="inline-flex h-11 items-center rounded-full border border-(--c-ink)/12 px-5 transition-colors duration-300 hover:border-(--c-red) hover:bg-(--c-red) hover:text-white"
                >
                  {s.title}
                </Link>
              </li>
            ))}
        </ul>
      </section>

      <CtaPanel />
    </main>
  );
}
