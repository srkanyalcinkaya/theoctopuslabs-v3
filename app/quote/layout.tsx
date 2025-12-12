import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get a Free Quote - The Octopus Labs | Request Your Project Quote",
  description: "Get a free and quick quote from The Octopus Labs. We analyse your current needs and keep you informed about what we will do and how we will do it. No obligation, completely free consultation.",
  keywords: "free quote, web development quote, web design quote, project quote, get quote, free consultation",
  openGraph: {
    title: "Get a Free Quote - The Octopus Labs | Request Your Project Quote",
    description: "Get a free and quick quote from The Octopus Labs. We analyse your current needs and provide a tailored proposal.",
    url: "https://theoctopuslabs.com/quote",
    siteName: "The Octopus Labs",
    images: [
      {
        url: "/og-image-quote.jpg",
        width: 1200,
        height: 630,
        alt: "Get a Free Quote - The Octopus Labs",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Get a Free Quote - The Octopus Labs",
    description: "Get a free and quick quote from The Octopus Labs. No obligation, completely free consultation.",
    images: ["/og-image-quote.jpg"],
  },
};

export default function QuoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
