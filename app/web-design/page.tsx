import type { Metadata } from "next";
import { ServicePage } from "@/components/site/service-page";

export const metadata: Metadata = {
  title: "Web Design - The Octopus Labs | Beautiful, Responsive Designs That Convert",
  description: "Professional web design services with beautiful, responsive designs that convert. UI/UX design, brand identity, modern aesthetics. Get a free quote for your design project.",
  keywords: "web design, UI/UX design, responsive design, brand identity, website design, UK web designers, conversion focused design",
  openGraph: {
    title: "Web Design - The Octopus Labs | Beautiful, Responsive Designs That Convert",
    description: "Professional web design services with beautiful, responsive designs that convert. UI/UX design and brand identity.",
    url: "https://theoctopuslabs.com/web-design",
    siteName: "The Octopus Labs",
    images: [
      {
        url: "/og-image-web-design.jpg",
        width: 1200,
        height: 630,
        alt: "Web Design - The Octopus Labs",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design - The Octopus Labs",
    description: "Professional web design services with beautiful, responsive designs that convert.",
    images: ["/og-image-web-design.jpg"],
  },
};

export default function WebDesignPage() {
  return <ServicePage slug="web-design" />;
}
