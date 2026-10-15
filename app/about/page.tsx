import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaPanel, PageHero, QuoteButton, SectionHeading, ButtonLink, shell } from "@/components/site/ui";

export const metadata: Metadata = {
  title: "About Us - The Octopus Labs | Professional Web Development Team",
  description: "Learn about The Octopus Labs - a professional web development and design company. We've served over 10,000+ satisfied customers with bespoke web development, web design, e-commerce, mobile apps, SEO, and graphic design services.",
  keywords: "about the octopus labs, web development company, web design team, UK developers, professional web services",
  openGraph: {
    title: "About Us - The Octopus Labs | Professional Web Development Team",
    description: "Learn about The Octopus Labs - a professional web development and design company. Over 10,000+ satisfied customers.",
    url: "https://theoctopuslabs.com/about",
    siteName: "The Octopus Labs",
    images: [
      {
        url: "/og-image-about.jpg",
        width: 1200,
        height: 630,
        alt: "About The Octopus Labs",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - The Octopus Labs",
    description: "Learn about The Octopus Labs - a professional web development and design company.",
    images: ["/og-image-about.jpg"],
  },
};

const offers = [
  {
    title: "Bespoke web development",
    body: "Get custom web applications tailored specifically to your business needs and requirements.",
    href: "/bespoke-web-development",
  },
  {
    title: "Grow your business",
    body: "Enhance your online presence and attract more customers with professional web design and SEO.",
    href: "/search-engine-optimisation",
  },
  {
    title: "Professional solutions",
    body: "Access expert services including e-commerce, mobile apps, graphic design and more.",
    href: "/#services",
  },
  {
    title: "Ongoing support",
    body: "Receive one year of free technical support and backups with every project.",
    href: "/#process",
  },
];

const stack = [
  { area: "Frontend development", tools: "React and Next.js, TypeScript, Tailwind CSS and modern JavaScript for responsive, interactive interfaces." },
  { area: "Backend development", tools: "Node.js, Python, database solutions and API development for robust server-side applications." },
  { area: "Design and tools", tools: "Figma, Adobe Creative Suite, responsive design, UX/UI best practice and version control with Git." },
  { area: "Cloud and hosting", tools: "AWS, Azure, Vercel, Netlify and other cloud platforms for scalable, reliable hosting." },
  { area: "Databases", tools: "PostgreSQL, MongoDB, MySQL, Redis and other databases for efficient data storage." },
  { area: "Payments and e-commerce", tools: "Stripe, PayPal, Shopify, WooCommerce and other payment gateways and shop platforms." },
  { area: "Analytics and SEO", tools: "Google Analytics, Google Search Console, SEMrush and other tools for data-driven decisions." },
  { area: "Security and DevOps", tools: "SSL certificates, Docker, Kubernetes, CI/CD pipelines and security best practice." },
  { area: "CMS platforms", tools: "WordPress, Contentful, Strapi, Sanity and other content management systems." },
];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        title="Professional solutions for your business."
        lead="The Octopus Labs specialises in bespoke system development and web design, with one team covering everything from your first website to the software that runs your business."
        aside={
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem]">
            <Image
              src="/images/hero/hero-1.jpg"
              alt="Two people planning a project on a laptop"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
        }
      >
        <QuoteButton />
        <ButtonLink href="/contact" tone="outline">
          Contact us
        </ButtonLink>
      </PageHero>

      <section aria-label="In numbers" className="border-y border-(--c-ink)/8">
        <dl className={`${shell} grid divide-(--c-ink)/8 sm:grid-cols-3 sm:divide-x`}>
          {[
            ["50+", "businesses with a site built by us"],
            ["8", "services under one roof"],
            ["1 year", "free support with every project"],
          ].map(([value, label]) => (
            <div key={value} className="flex items-baseline gap-4 py-7 sm:px-8 sm:first:pl-0">
              <dt className="f-display whitespace-nowrap text-3xl font-semibold">{value}</dt>
              <dd className="text-(--c-muted)">{label}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className={`${shell} py-24 md:py-32`}>
        <SectionHeading title="What you can do with us." />
        <ul className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-(--c-ink)/10 bg-(--c-ink)/10 sm:grid-cols-2 lg:grid-cols-4">
          {offers.map((item) => (
            <li key={item.title} className="bg-white">
              <Link href={item.href} className="group flex h-full flex-col gap-3 p-8 transition-colors duration-300 hover:bg-(--c-blush)">
                <h3 className="f-display text-2xl font-medium">{item.title}</h3>
                <p className="leading-relaxed text-(--c-muted)">{item.body}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-(--c-mist) py-24 md:py-32">
        <div className={`${shell} grid gap-12 lg:grid-cols-2 lg:gap-20`}>
          <div>
            <h2 className="f-display text-[clamp(2.2rem,4.6vw,4.25rem)] font-semibold leading-[0.95] text-balance">
              We work in the best traditions.
            </h2>
            <div className="mt-8 max-w-xl space-y-5 text-lg leading-relaxed text-(--c-muted)">
              <p>
                We use modern technologies and best practices to deliver exceptional results. Our approach combines
                technical excellence with practical business solutions.
              </p>
              <p>
                Technology helps us deliver high-quality work efficiently, while our community of clients and partners
                helps you feel part of the industry.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-8 rounded-3xl bg-white p-8 md:p-12">
            <div>
              <h2 className="f-display text-[clamp(1.75rem,3vw,2.5rem)] font-semibold leading-[1.05] text-balance">
                A team built to help your business succeed.
              </h2>
              <p className="mt-5 leading-relaxed text-(--c-muted)">
                We work from different locations but are always ready to help each other. Outside of work, we often
                gather online to collaborate, share ideas, or simply connect. And we&apos;re always happy to meet in
                person.
              </p>
            </div>
            <ButtonLink href="/contact" tone="ink" className="self-start">
              Join our team
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="on-ink bg-(--c-ink) py-24 text-white md:py-32">
        <div className={shell}>
          <SectionHeading
            title="The tools we build with."
            lead="Technologies, tools and approaches we use in development, chosen for what each project needs."
          />
          <dl className="mt-14 border-t border-white/12">
            {stack.map((row) => (
              <div key={row.area} className="grid gap-2 border-b border-white/12 py-6 md:grid-cols-[1fr_1.4fr] md:gap-10">
                <dt className="f-display text-2xl font-medium">{row.area}</dt>
                <dd className="max-w-2xl leading-relaxed text-(--c-muted-on-ink)">{row.tools}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <div className="pt-20 md:pt-28">
        <CtaPanel
          title="Let's build the future together."
          body="Get a free and quick quote. We analyse your current needs and keep you informed about what we will do and how we will do it."
        />
      </div>
    </main>
  );
}
