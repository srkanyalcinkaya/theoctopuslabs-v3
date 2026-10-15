import type { Metadata } from "next";
import { ServicePage } from "@/components/site/service-page";

export const metadata: Metadata = {
  title: "Social Media - The Octopus Labs | Content and Campaigns for Your Channels",
  description: "Social media content planning, post design, profile setup, paid campaigns and monthly reporting from The Octopus Labs. Get a free quote.",
  keywords: "social media management, social media content, social media design, paid social, UK social media agency",
  openGraph: {
    title: "Social Media - The Octopus Labs | Content and Campaigns for Your Channels",
    description: "Social media content planning, post design, profile setup, paid campaigns and monthly reporting.",
    url: "https://theoctopuslabs.com/social-media",
    siteName: "The Octopus Labs",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Social Media - The Octopus Labs" }],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Media - The Octopus Labs",
    description: "Social media content planning, post design, paid campaigns and monthly reporting.",
    images: ["/og-image.jpg"],
  },
};

export default function SocialMediaPage() {
  return <ServicePage slug="social-media" />;
}
