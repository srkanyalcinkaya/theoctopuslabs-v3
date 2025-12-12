import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Globe, CheckCircle, Zap, ArrowRight, Layers, Smartphone, Code } from "lucide-react";
import { ShimmerButton } from "@/components/ui/shimmer-button";

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
  return (
    <main className="flex flex-col items-center justify-center bg-white min-h-screen pt-32 pb-20">
      <section className="flex flex-col items-center justify-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center justify-center mb-20 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Globe size={40} className="text-[#E84033]" />
            <h1 className="text-4xl md:text-5xl font-bold text-black">
              Web Development
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mb-4">
            Professional web applications for your business
          </p>
          <p className="text-lg text-gray-600 max-w-2xl">
            We develop modern, responsive web applications that help your business grow and succeed online.
          </p>
        </div>

        <div className="w-full mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#F0F0F0] rounded-2xl p-8">
              <Code size={32} className="text-[#E84033] mb-4" />
              <h3 className="text-xl font-semibold text-black mb-3">Frontend Development</h3>
              <p className="text-gray-700">
                Modern, responsive user interfaces built with React, Next.js, and TypeScript.
              </p>
            </div>
            <div className="bg-[#F0F0F0] rounded-2xl p-8">
              <Layers size={32} className="text-[#E84033] mb-4" />
              <h3 className="text-xl font-semibold text-black mb-3">Backend Development</h3>
              <p className="text-gray-700">
                Robust server-side applications with secure APIs and database integration.
              </p>
            </div>
            <div className="bg-[#F0F0F0] rounded-2xl p-8">
              <Smartphone size={32} className="text-[#E84033] mb-4" />
              <h3 className="text-xl font-semibold text-black mb-3">Responsive Design</h3>
              <p className="text-gray-700">
                Perfect display on all devices - desktop, tablet, and mobile.
              </p>
            </div>
            <div className="bg-[#F0F0F0] rounded-2xl p-8">
              <Zap size={32} className="text-[#E84033] mb-4" />
              <h3 className="text-xl font-semibold text-black mb-3">Fast Performance</h3>
              <p className="text-gray-700">
                Optimized for speed and performance to ensure fast loading times.
              </p>
            </div>
            <div className="bg-[#F0F0F0] rounded-2xl p-8">
              <CheckCircle size={32} className="text-[#E84033] mb-4" />
              <h3 className="text-xl font-semibold text-black mb-3">SEO Optimized</h3>
              <p className="text-gray-700">
                Built with SEO best practices to improve your search engine rankings.
              </p>
            </div>
            <div className="bg-[#F0F0F0] rounded-2xl p-8">
              <Globe size={32} className="text-[#E84033] mb-4" />
              <h3 className="text-xl font-semibold text-black mb-3">Cross-Browser</h3>
              <p className="text-gray-700">
                Compatible with all major browsers for maximum reach.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full mb-24">
          <div className="bg-linear-to-r from-blue-400 to-blue-800 rounded-2xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Why Choose Our Web Development?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div>
                <h3 className="text-xl font-semibold mb-3">Modern Stack</h3>
                <p className="opacity-90">
                  We use the latest technologies and frameworks to build future-proof applications.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">UK Support</h3>
                <p className="opacity-90">
                  Fast, friendly UK-based support team available to help whenever you need.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full text-center">
          <ShimmerButton className="py-6 px-8 text-lg">
            Get Started
            <ArrowRight size={20} className="ml-2" />
          </ShimmerButton>
        </div>
      </section>
    </main>
  );
}
