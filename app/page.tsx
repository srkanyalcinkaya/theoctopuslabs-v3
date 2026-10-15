/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Plus } from "lucide-react";
import { OctopusMark } from "@/components/site/octopus-mark";
import { TestimonialCarousel } from "@/components/site/testimonial-carousel";
import { clients, faqs, services, steps } from "@/components/site/data";
import { CtaPanel, QuoteButton, shell } from "@/components/site/ui";

export const metadata: Metadata = {
  title: "The Octopus Labs - Professional Web Development & Design Solutions",
  description: "The Octopus Labs offers professional bespoke web development, web design, e-commerce solutions, mobile app development, SEO services, and graphic design. Over 10,000+ satisfied customers. Get 1 year free technical support and 30-day money-back guarantee.",
  keywords: "web development, web design, e-commerce, mobile app development, SEO, graphic design, bespoke web development, UK web development",
  openGraph: {
    title: "The Octopus Labs - Professional Web Development & Design Solutions",
    description: "Professional solutions for your business needs. Specialised in Bespoke System Development & Web Design. Over 10,000+ satisfied customers.",
    url: "https://theoctopuslabs.com",
    siteName: "The Octopus Labs",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Octopus Labs - Professional Web Development & Design",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Octopus Labs - Professional Web Development & Design Solutions",
    description: "Professional solutions for your business needs. Specialised in Bespoke System Development & Web Design.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className={`${shell} grid items-center gap-12 pb-20 pt-14 md:pt-20 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:pb-28`}>
        <div>
          <h1 className="f-display text-[clamp(3.4rem,9vw,8.5rem)] font-semibold leading-[0.88]">
            Eight arms.
            <br />
            One studio.
          </h1>
          <p className="mt-8 max-w-[34rem] text-lg leading-relaxed text-(--c-muted) md:text-xl">
            Websites, online shops, apps, SEO and design for UK businesses. One in-house team handles all of it,
            so nothing gets lost between agencies.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <QuoteButton />
            <Link
              href="#services"
              className="inline-flex h-12 items-center rounded-full border border-(--c-ink)/15 px-6 font-medium transition-colors duration-300 hover:border-(--c-ink)"
            >
              See what we do
            </Link>
          </div>
        </div>
        <div className="mx-auto w-full max-w-[24rem] sm:max-w-[36rem]">
          <OctopusMark />
        </div>
      </section>

      {/* Promises + clients */}
      <section aria-label="Our promises" className="border-y border-(--c-ink)/8">
        <dl className={`${shell} grid divide-(--c-ink)/8 sm:grid-cols-3 sm:divide-x`}>
          {[
            ["50+", "businesses with a site built by us"],
            ["1 year", "free technical support and backups"],
            ["30 days", "money-back guarantee on hosting"],
          ].map(([value, label]) => (
            <div key={value} className="flex items-baseline gap-4 py-7 sm:px-8 sm:first:pl-0">
              <dt className="f-display whitespace-nowrap text-3xl font-semibold">{value}</dt>
              <dd className="text-(--c-muted)">{label}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section aria-label="Clients" className="py-14">
        <h2 className={`${shell} mb-8 text-(--c-muted)`}>Some of the businesses we have built for</h2>
        <div className="marquee overflow-hidden">
          <div className="marquee-track flex w-max">
            {[0, 1].map((copy) => (
              <ul key={copy} aria-hidden={copy === 1} className="flex shrink-0 items-center gap-14 pr-14 md:gap-20 md:pr-20">
                {clients.map((client) => (
                  <li key={client.name} className="group flex shrink-0 items-center gap-3">
                    <img
                      src={client.logo}
                      alt=""
                      className="h-10 w-10 shrink-0 object-contain opacity-60 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                    />
                    <span className="f-display whitespace-nowrap text-xl font-medium text-(--c-ink)/80">{client.name}</span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="scroll-mt-20 pt-20 md:pt-32">
        <div className={`${shell} mb-12 grid gap-6 md:mb-16 lg:grid-cols-2`}>
          <h2 className="f-display text-[clamp(2.4rem,5vw,4.5rem)] font-semibold leading-[0.95]">
            Everything your business needs online.
          </h2>
          <p className="max-w-md self-end text-lg leading-relaxed text-(--c-muted) lg:justify-self-end">
            Pick one service or combine several. Either way you deal with the same people from the first call to
            the last fix.
          </p>
        </div>

        <ul className="border-t border-(--c-ink)/10">
          {services.map((service) => (
            <li key={service.slug} className="border-b border-(--c-ink)/10">
              <Link href={service.href} className="group relative block overflow-hidden">
                <span
                  aria-hidden
                  className="absolute inset-0 origin-bottom scale-y-0 bg-(--c-red) transition-transform duration-500 ease-(--ease-out-arm) group-hover:scale-y-100 group-focus-visible:scale-y-100"
                />
                <span className={`${shell} relative grid items-center gap-2 py-7 md:grid-cols-[1.1fr_1fr_auto] md:gap-10 md:py-9`}>
                  <span className="f-display text-[clamp(1.75rem,3.4vw,3rem)] font-medium leading-none transition-colors duration-300 group-hover:text-white group-focus-visible:text-white">
                    {service.title}
                  </span>
                  <span className="max-w-md text-(--c-muted) transition-colors duration-300 group-hover:text-white group-focus-visible:text-white">
                    {service.description}
                  </span>
                  <span className="hidden h-12 w-12 items-center justify-center rounded-full border border-(--c-ink)/15 transition duration-300 group-hover:rotate-45 group-hover:border-white group-hover:text-white md:flex">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Process */}
      <section id="process" className="on-ink mt-24 scroll-mt-20 rounded-t-[2.5rem] bg-(--c-ink) py-20 text-white md:mt-36 md:rounded-t-[4rem] md:py-32">
        <div className={shell}>
          <div className="grid gap-6 lg:grid-cols-2">
            <h2 className="f-display text-[clamp(2.4rem,5vw,4.5rem)] font-semibold leading-[0.95]">
              How a project runs.
            </h2>
            <p className="max-w-md self-end text-lg leading-relaxed text-(--c-muted-on-ink) lg:justify-self-end">
              Five steps, the same for a one-page site or a full booking system. You always know what comes next.
            </p>
          </div>

          <ol className="mt-16 grid gap-px overflow-hidden rounded-3xl bg-white/10 md:mt-20 md:grid-cols-5">
            {steps.map((step, i) => (
              <li key={step.title} className="flex flex-col gap-8 bg-(--c-ink) p-7 md:gap-14 md:p-8">
                <span className="f-display text-6xl font-semibold text-(--c-mark) md:text-7xl">{i + 1}</span>
                <div>
                  <h3 className="f-display text-2xl font-medium">{step.title}</h3>
                  <p className="mt-3 leading-relaxed text-(--c-muted-on-ink)">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Support */}
      <section className="bg-(--c-ink) pb-20 text-white md:pb-32">
        <div className={`${shell} grid items-stretch gap-6 lg:grid-cols-[1fr_1.1fr]`}>
          <div className="relative min-h-[22rem] overflow-hidden rounded-3xl">
            <Image
              src="/images/hero/hero-3.jpg"
              alt="Our team on a support call with a client"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-between gap-12 rounded-3xl bg-(--c-ink-soft) p-8 md:p-12">
            <div>
              <h2 className="f-display text-[clamp(2rem,3.6vw,3.25rem)] font-semibold leading-[1] text-balance">
                Support you can actually call.
              </h2>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-(--c-muted-on-ink)">
                Our support team is in-house and UK-based. Your calls are never diverted overseas, and we are
                happy to meet face to face to talk through ideas and feedback.
              </p>
            </div>
            <dl className="grid divide-y divide-white/10 border-t border-white/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
              <div className="pt-6 pb-2 sm:pr-8 sm:pb-0">
                <dt className="f-display text-5xl font-semibold">1 year</dt>
                <dd className="mt-3 text-(--c-muted-on-ink)">
                  Free technical support and backups after launch. Problems in that year are fixed free of charge.
                </dd>
              </div>
              <div className="pt-6 sm:pl-8">
                <dt className="f-display text-5xl font-semibold">30 days</dt>
                <dd className="mt-3 text-(--c-muted-on-ink)">
                  Money-back guarantee on every hosting plan. Not satisfied? You get a full refund.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={`${shell} overflow-hidden py-24 md:py-36`}>
        <TestimonialCarousel />
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-20 bg-(--c-mist) py-24 md:py-36">
        <div className={`${shell} grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20`}>
          <div>
            <h2 className="f-display text-[clamp(2.4rem,5vw,4.5rem)] font-semibold leading-[0.95]">
              Questions we hear a lot.
            </h2>
            <p className="mt-6 max-w-sm text-lg leading-relaxed text-(--c-muted)">
              Something else on your mind?{" "}
              <Link href="/contact" className="text-(--c-ink) underline decoration-(--c-red) decoration-2 underline-offset-4">
                Ask us directly
              </Link>
              .
            </p>
          </div>
          <div className="border-t border-(--c-ink)/12">
            {faqs.map((faq) => (
              <details key={faq.q} className="group border-b border-(--c-ink)/12">
                <summary className="flex cursor-pointer items-center justify-between gap-6 py-6 text-left">
                  <span className="f-display text-xl font-medium md:text-2xl">{faq.q}</span>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white transition-transform duration-300 group-open:rotate-45">
                    <Plus className="h-5 w-5" />
                  </span>
                </summary>
                <p className="max-w-2xl pb-7 pr-14 leading-relaxed text-(--c-muted)">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaPanel />
    </main>
  );
}
