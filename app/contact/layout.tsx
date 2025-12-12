import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - The Octopus Labs | Get in Touch",
  description: "Contact The Octopus Labs for professional web development, web design, e-commerce, mobile app development, SEO, and graphic design services. UK-based support team available 24/7. Get a free quote today.",
  keywords: "contact the octopus labs, web development contact, web design contact, UK web services, get quote",
  openGraph: {
    title: "Contact Us - The Octopus Labs | Get in Touch",
    description: "Contact The Octopus Labs for professional web development and design services. UK-based support team available 24/7.",
    url: "https://theoctopuslabs.com/contact",
    siteName: "The Octopus Labs",
    images: [
      {
        url: "/og-image-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact The Octopus Labs",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - The Octopus Labs",
    description: "Contact The Octopus Labs for professional web development and design services.",
    images: ["/og-image-contact.jpg"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
