import type { Metadata } from "next";
import { ServicePage } from "@/components/site/service-page";

export const metadata: Metadata = {
  title: "Web Development - The Octopus Labs | Professional Web Applications",
  description: "Professional web development services with modern, responsive web applications. Frontend and backend development, SEO optimized, fast performance. UK-based support team.",
  keywords: "web development, web applications, frontend development, backend development, responsive web design, UK web developers",
  openGraph: {
    title: "Web Development - The Octopus Labs | Professional Web Applications",
    description: "Professional web development services with modern, responsive web applications. Frontend and backend development with UK-based support.",
    url: "https://theoctopuslabs.com/web-development",
    siteName: "The Octopus Labs",
    images: [
      {
        url: "/og-image-web-development.jpg",
        width: 1200,
        height: 630,
        alt: "Web Development - The Octopus Labs",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development - The Octopus Labs",
    description: "Professional web development services with modern, responsive web applications.",
    images: ["/og-image-web-development.jpg"],
  },
};

export default function WebDevelopmentPage() {
  return <ServicePage slug="web-development" />;
}
