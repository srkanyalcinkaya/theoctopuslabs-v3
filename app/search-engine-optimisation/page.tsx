import type { Metadata } from "next";
import { ServicePage } from "@/components/site/service-page";

export const metadata: Metadata = {
  title: "SEO Services - The Octopus Labs | Improve Your Search Engine Visibility",
  description: "Boost your website's search engine rankings and drive organic traffic with our comprehensive SEO services. Keyword research, on-page SEO, content optimization, link building, and local SEO.",
  keywords: "SEO services, search engine optimization, keyword research, on-page SEO, link building, local SEO, UK SEO services",
  openGraph: {
    title: "SEO Services - The Octopus Labs | Improve Your Search Engine Visibility",
    description: "Boost your website's search engine rankings and drive organic traffic with our comprehensive SEO services.",
    url: "https://theoctopuslabs.com/search-engine-optimisation",
    siteName: "The Octopus Labs",
    images: [
      {
        url: "/og-image-seo.jpg",
        width: 1200,
        height: 630,
        alt: "SEO Services - The Octopus Labs",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Services - The Octopus Labs",
    description: "Boost your website's search engine rankings and drive organic traffic.",
    images: ["/og-image-seo.jpg"],
  },
};

export default function SearchEngineOptimisationPage() {
  return <ServicePage slug="seo" />;
}
