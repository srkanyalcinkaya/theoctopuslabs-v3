import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Search, CheckCircle, Zap, ArrowRight, TrendingUp, Target, BarChart3 } from "lucide-react";
import { ShimmerButton } from "@/components/ui/shimmer-button";

export const metadata: Metadata = {
  title: "SEO Services - The Octopus Labs | Improve Your Search Engine Visibility",
  description: "Boost your website's search engine rankings and drive organic traffic with our comprehensive SEO services. Keyword research, on-page SEO, content optimization, link building, and local SEO.",
  keywords: "SEO services, search engine optimization, keyword research, on-page SEO, link building, local SEO, UK SEO services",
  openGraph: {
    title: "SEO Services - The Octopus Labs | Improve Your Search Engine Visibility",
    description: "Boost your website's search engine rankings and drive organic traffic with our comprehensive SEO services.",
    url: "https://theoctopuslabs.com/search-engine-optimisation",
    siteName: "The Octopus Labs",
    images: [
      {
        url: "/og-image-seo.jpg",
        width: 1200,
        height: 630,
        alt: "SEO Services - The Octopus Labs",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Services - The Octopus Labs",
    description: "Boost your website's search engine rankings and drive organic traffic.",
    images: ["/og-image-seo.jpg"],
  },
};

export default function SEOPage() {
  return (
    <main className="flex flex-col items-center justify-center bg-white min-h-screen pt-32 pb-20">
      <section className="flex flex-col items-center justify-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center justify-center mb-20 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Search size={40} className="text-[#E84033]" />
            <h1 className="text-4xl md:text-5xl font-bold text-black">
              SEO Services
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mb-4">
            Improve your search engine visibility
          </p>
          <p className="text-lg text-gray-600 max-w-2xl">
            Boost your website's search engine rankings and drive organic traffic with our comprehensive SEO services.
          </p>
        </div>

        <div className="w-full mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">
            SEO Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#F0F0F0] rounded-2xl p-8">
              <Target size={32} className="text-[#E84033] mb-4" />
              <h3 className="text-xl font-semibold text-black mb-3">Keyword Research</h3>
              <p className="text-gray-700">
                Identify the right keywords to target for maximum visibility and traffic.
              </p>
            </div>
            <div className="bg-[#F0F0F0] rounded-2xl p-8">
              <TrendingUp size={32} className="text-[#E84033] mb-4" />
              <h3 className="text-xl font-semibold text-black mb-3">On-Page SEO</h3>
              <p className="text-gray-700">
                Optimize your website's content, structure, and technical elements.
              </p>
            </div>
            <div className="bg-[#F0F0F0] rounded-2xl p-8">
              <BarChart3 size={32} className="text-[#E84033] mb-4" />
              <h3 className="text-xl font-semibold text-black mb-3">Analytics & Reporting</h3>
              <p className="text-gray-700">
                Track your SEO performance with detailed analytics and regular reports.
              </p>
            </div>
            <div className="bg-[#F0F0F0] rounded-2xl p-8">
              <Zap size={32} className="text-[#E84033] mb-4" />
              <h3 className="text-xl font-semibold text-black mb-3">Content Optimization</h3>
              <p className="text-gray-700">
                Create and optimize content that ranks well and engages your audience.
              </p>
            </div>
            <div className="bg-[#F0F0F0] rounded-2xl p-8">
              <CheckCircle size={32} className="text-[#E84033] mb-4" />
              <h3 className="text-xl font-semibold text-black mb-3">Link Building</h3>
              <p className="text-gray-700">
                Build quality backlinks to improve your domain authority and rankings.
              </p>
            </div>
            <div className="bg-[#F0F0F0] rounded-2xl p-8">
              <Search size={32} className="text-[#E84033] mb-4" />
              <h3 className="text-xl font-semibold text-black mb-3">Local SEO</h3>
              <p className="text-gray-700">
                Optimize for local search to attract customers in your area.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full mb-24">
          <div className="bg-linear-to-r from-yellow-500 to-orange-500 rounded-2xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Increase Your Online Visibility
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div>
                <h3 className="text-xl font-semibold mb-3">Organic Traffic</h3>
                <p className="opacity-90">
                  Attract qualified visitors who are actively searching for your products or services.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Long-Term Results</h3>
                <p className="opacity-90">
                  SEO provides sustainable, long-term growth compared to paid advertising.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full text-center">
          <ShimmerButton className="py-6 px-8 text-lg">
            Improve Your SEO
            <ArrowRight size={20} className="ml-2" />
          </ShimmerButton>
        </div>
      </section>
    </main>
  );
}
