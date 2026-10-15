import type { Metadata } from "next";
import { ServicePage } from "@/components/site/service-page";

export const metadata: Metadata = {
  title: "Graphic Design - The Octopus Labs | Professional Branding & Design",
  description: "Create compelling visual identities and designs that represent your brand. Logo design, brand identity, print design, social media graphics, web graphics, and marketing materials.",
  keywords: "graphic design, logo design, brand identity, print design, social media graphics, web graphics, UK graphic designers",
  openGraph: {
    title: "Graphic Design - The Octopus Labs | Professional Branding & Design",
    description: "Create compelling visual identities and designs that represent your brand. Logo design, brand identity, and marketing materials.",
    url: "https://theoctopuslabs.com/graphic-design",
    siteName: "The Octopus Labs",
    images: [
      {
        url: "/og-image-graphic-design.jpg",
        width: 1200,
        height: 630,
        alt: "Graphic Design - The Octopus Labs",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Graphic Design - The Octopus Labs",
    description: "Create compelling visual identities and designs that represent your brand.",
    images: ["/og-image-graphic-design.jpg"],
  },
};

export default function GraphicDesignPage() {
  return <ServicePage slug="graphic-design" />;
}
