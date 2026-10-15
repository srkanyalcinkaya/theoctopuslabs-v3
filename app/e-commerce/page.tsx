import type { Metadata } from "next";
import { ServicePage } from "@/components/site/service-page";

export const metadata: Metadata = {
  title: "E-Commerce Solutions - The Octopus Labs | Complete Online Shop Solutions",
  description: "Build a powerful online store with our comprehensive e-commerce solutions. Product management, payment integration, order management, analytics. Grow your online sales with 24/7 availability.",
  keywords: "e-commerce, online shop, online store, ecommerce development, shopping cart, payment integration, UK e-commerce",
  openGraph: {
    title: "E-Commerce Solutions - The Octopus Labs | Complete Online Shop Solutions",
    description: "Build a powerful online store with our comprehensive e-commerce solutions. Product management, payment integration, and analytics.",
    url: "https://theoctopuslabs.com/e-commerce",
    siteName: "The Octopus Labs",
    images: [
      {
        url: "/og-image-e-commerce.jpg",
        width: 1200,
        height: 630,
        alt: "E-Commerce Solutions - The Octopus Labs",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "E-Commerce Solutions - The Octopus Labs",
    description: "Build a powerful online store with our comprehensive e-commerce solutions.",
    images: ["/og-image-e-commerce.jpg"],
  },
};

export default function ECommercePage() {
  return <ServicePage slug="e-commerce" />;
}
