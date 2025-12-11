import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/ui/navbar-menu";
import { Footer } from "@/components/ui/footer";
import { Inter, Orbitron } from "next/font/google";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Octopus Labs",
  description: "The Octopus Lab is a lab for the Octopus",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${orbitron.variable} ${inter.variable} font-inter`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
