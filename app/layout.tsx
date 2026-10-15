import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
});

const body = Instrument_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://theoctopuslabs.com"),
  title: {
    default: "The Octopus Labs - Professional Web Development & Design Solutions",
    template: "%s | The Octopus Labs",
  },
  description: "The Octopus Labs offers professional bespoke web development, web design, e-commerce solutions, mobile app development, SEO services, and graphic design. Over 10,000+ satisfied customers.",
  keywords: ["web development", "web design", "e-commerce", "mobile app development", "SEO", "graphic design", "bespoke web development", "UK web development"],
  authors: [{ name: "The Octopus Labs" }],
  creator: "The Octopus Labs",
  publisher: "The Octopus Labs",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://theoctopuslabs.com",
    siteName: "The Octopus Labs",
    title: "The Octopus Labs - Professional Web Development & Design Solutions",
    description: "Professional solutions for your business needs. Specialised in Bespoke System Development & Web Design.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Octopus Labs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Octopus Labs - Professional Web Development & Design Solutions",
    description: "Professional solutions for your business needs. Specialised in Bespoke System Development & Web Design.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable}`}>
        <Header />
        {children}
        <Footer />
        <GoogleAnalytics gaId="G-7N1HQTLCZ0" />
      </body>
    </html>
  );
}
