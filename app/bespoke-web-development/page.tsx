import type { Metadata } from "next";
import { ServicePage } from "@/components/site/service-page";

export const metadata: Metadata = {
  title: "Bespoke Web Development - The Octopus Labs | Custom Web Applications",
  description: "Get custom bespoke web applications tailored specifically to your business needs. Secure, scalable, and high-performance solutions with 1 year free technical support. Get a free quote today.",
  keywords: "bespoke web development, custom web applications, tailored web solutions, enterprise web development, UK web development",
  openGraph: {
    title: "Bespoke Web Development - The Octopus Labs | Custom Web Applications",
    description: "Get custom bespoke web applications tailored specifically to your business needs. Secure, scalable, and high-performance solutions.",
    url: "https://theoctopuslabs.com/bespoke-web-development",
    siteName: "The Octopus Labs",
    images: [
      {
        url: "/og-image-bespoke-web-development.jpg",
        width: 1200,
        height: 630,
        alt: "Bespoke Web Development - The Octopus Labs",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bespoke Web Development - The Octopus Labs",
    description: "Get custom bespoke web applications tailored specifically to your business needs.",
    images: ["/og-image-bespoke-web-development.jpg"],
  },
};

export default function BespokeWebDevelopmentPage() {
  return <ServicePage slug="bespoke" />;
}
