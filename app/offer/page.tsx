import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { ButtonLink, CtaPanel, OctopusGlyph, PageHero, shell } from "@/components/site/ui";

export const metadata: Metadata = {
  title: "Special Offers - The Octopus Labs | Current Promotions & Discounts",
  description: "Discover our current offers and promotions at The Octopus Labs. New client special offer: 20% off your first project. Get free consultation, 1 year free technical support, and free backup service.",
  keywords: "special offers, promotions, discounts, new client offer, web development offers, UK web services offers",
  openGraph: {
    title: "Special Offers - The Octopus Labs | Current Promotions & Discounts",
    description: "Discover our current offers and promotions. New client special offer: 20% off your first project with free consultation and support.",
    url: "https://theoctopuslabs.com/offer",
    siteName: "The Octopus Labs",
    images: [
      {
        url: "/og-image-offer.jpg",
        width: 1200,
        height: 630,
        alt: "Special Offers - The Octopus Labs",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Special Offers - The Octopus Labs",
    description: "Discover our current offers and promotions. New client special offer: 20% off your first project.",
    images: ["/og-image-offer.jpg"],
  },
};

const includes = ["20% discount on initial project", "Free consultation worth £200", "1 year free technical support", "Free backup service for 1 year"];

export default function OfferPage() {
  return (
    <main>
      <PageHero
        title="Special offers."
        lead="Discover our current offers and promotions. Terms and conditions apply to all offers, and offers are subject to availability and may be withdrawn at any time."
      />

      <section className={`${shell} grid gap-6 lg:grid-cols-[1.5fr_1fr]`}>
        <div className="on-red relative overflow-hidden rounded-[2.5rem] bg-(--c-red) p-8 text-white md:p-12">
          <OctopusGlyph className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 text-white opacity-15" />
          <div className="relative">
            <h2 className="f-display text-[clamp(2.2rem,4.4vw,3.75rem)] font-semibold leading-[0.95]">New client special offer.</h2>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/90">
              Get 20% off your first project when you sign up for our services. Limited time offer for new clients only.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {includes.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
            <ButtonLink href="/contact" tone="white" className="mt-10">
              Claim offer
            </ButtonLink>
          </div>
        </div>
        <div className="grid gap-6">
          {[
            ["Referral programme", "Refer a friend and both you and your friend receive a discount on your next project."],
            ["Bulk discounts", "Save more when you book multiple services or projects together."],
          ].map(([title, text]) => (
            <div key={title} className="flex flex-col justify-between gap-6 rounded-[2rem] bg-(--c-mist) p-8">
              <div>
                <h2 className="f-display text-2xl font-semibold">{title}</h2>
                <p className="mt-2 leading-relaxed text-(--c-muted)">{text}</p>
              </div>
              <ButtonLink href="/contact" tone="outline" className="self-start">
                Ask about this offer
              </ButtonLink>
            </div>
          ))}
        </div>
      </section>

      <section className={`${shell} grid gap-x-20 gap-y-14 py-24 md:grid-cols-2 md:py-32`}>
        <div className="legal">
          <h2>Offer terms and conditions</h2>
          <p>The following terms and conditions apply to all offers and promotions:</p>
          <ul>
            <li>Offers are valid for new clients only unless otherwise stated</li>
            <li>Offers cannot be combined with other promotions or discounts</li>
            <li>Offers are subject to availability and may be withdrawn at any time without notice</li>
            <li>Minimum project value may apply</li>
            <li>Offers must be claimed within the specified time period</li>
            <li>Discounts apply to base service fees only, excluding additional services or third-party costs</li>
          </ul>
        </div>
        <div className="legal">
          <h2>Eligibility</h2>
          <p>To be eligible for our offers:</p>
          <ul>
            <li>You must be a new client (have not previously used our services)</li>
            <li>You must meet any minimum project value requirements</li>
            <li>You must accept our standard Terms of Service</li>
            <li>Offers are available to clients in the United Kingdom and internationally</li>
            <li>Business and consumer clients may be subject to different terms</li>
          </ul>
        </div>
        <div className="legal">
          <h2>How to claim an offer</h2>
          <ol>
            <li>Contact us via phone, email, or our contact form</li>
            <li>Mention the specific offer you wish to claim</li>
            <li>Complete our consultation process</li>
            <li>Receive a quotation that includes the offer discount</li>
            <li>Accept the quotation to secure the offer</li>
          </ol>
          <p>
            Offers are subject to our standard Terms of Service and payment terms. Please ensure you read and understand
            all terms before accepting an offer.
          </p>
        </div>
        <div className="legal">
          <h2>Your consumer rights</h2>
          <p>In accordance with UK consumer protection laws, including the Consumer Rights Act 2015:</p>
          <ul>
            <li>You have the right to cancel within 14 days of entering into a contract (subject to certain exceptions for bespoke services)</li>
            <li>All services must be provided with reasonable skill and care</li>
            <li>Services must match any description provided</li>
            <li>You have rights to repair, replacement, or refund if services are not provided as agreed</li>
            <li>
              For more information about your rights, please see our <Link href="/terms">Terms of Service</Link>
            </li>
          </ul>
        </div>
      </section>

      <CtaPanel
        title="Ready to claim your offer?"
        body="Contact us today to discuss your project and claim your offer."
      />
    </main>
  );
}
