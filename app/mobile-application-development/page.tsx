import type { Metadata } from "next";
import { ServicePage } from "@/components/site/service-page";

export const metadata: Metadata = {
  title: "Mobile App Development - The Octopus Labs | iOS & Android Applications",
  description: "Create powerful mobile applications for iOS and Android platforms. Native apps, cross-platform solutions, secure and reliable. App store optimization and ongoing support included.",
  keywords: "mobile app development, iOS app development, Android app development, cross-platform apps, mobile applications, app development UK",
  openGraph: {
    title: "Mobile App Development - The Octopus Labs | iOS & Android Applications",
    description: "Create powerful mobile applications for iOS and Android platforms. Native and cross-platform solutions with app store optimization.",
    url: "https://theoctopuslabs.com/mobile-application-development",
    siteName: "The Octopus Labs",
    images: [
      {
        url: "/og-image-mobile-app.jpg",
        width: 1200,
        height: 630,
        alt: "Mobile App Development - The Octopus Labs",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile App Development - The Octopus Labs",
    description: "Create powerful mobile applications for iOS and Android platforms.",
    images: ["/og-image-mobile-app.jpg"],
  },
};

export default function MobileApplicationDevelopmentPage() {
  return <ServicePage slug="mobile" />;
}
