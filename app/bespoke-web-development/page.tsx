import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Code, CheckCircle, Zap, ArrowRight, Shield, Rocket, Users } from "lucide-react";
import { ShimmerButton } from "@/components/ui/shimmer-button";

export const metadata: Metadata = {
  title: "Bespoke Web Development - The Octopus Labs | Custom Web Applications",
  description: "Get custom bespoke web applications tailored specifically to your business needs. Secure, scalable, and high-performance solutions with 1 year free technical support. Get a free quote today.",
  keywords: "bespoke web development, custom web applications, tailored web solutions, enterprise web development, UK web development",
  openGraph: {
    title: "Bespoke Web Development - The Octopus Labs | Custom Web Applications",
    description: "Get custom bespoke web applications tailored specifically to your business needs. Secure, scalable, and high-performance solutions.",
    url: "https://theoctopuslabs.com/bespoke-web-development",
    siteName: "The Octopus Labs",
    images: [
      {
        url: "/og-image-bespoke-web-development.jpg",
        width: 1200,
        height: 630,
        alt: "Bespoke Web Development - The Octopus Labs",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bespoke Web Development - The Octopus Labs",
    description: "Get custom bespoke web applications tailored specifically to your business needs.",
    images: ["/og-image-bespoke-web-development.jpg"],
  },
};

export default function BespokeWebDevelopmentPage() {
  return (
    <main className="flex flex-col items-center justify-center bg-white min-h-screen pt-32 pb-20">
      <section className="flex flex-col items-center justify-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center mb-20 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Code size={40} className="text-[#E84033]" />
            <h1 className="text-4xl md:text-5xl font-bold text-black">
              Bespoke Web Development
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mb-4">
            Custom web applications tailored specifically to your business needs
          </p>
          <p className="text-lg text-gray-600 max-w-2xl">
            We develop bespoke web applications that perfectly match your unique requirements and business objectives.
          </p>
        </div>

        {/* Features */}
        <div className="w-full mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">
            What We Offer
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#F0F0F0] rounded-2xl p-8">
              <Code size={32} className="text-[#E84033] mb-4" />
              <h3 className="text-xl font-semibold text-black mb-3">Custom Solutions</h3>
              <p className="text-gray-700">
                Fully customized web applications built from scratch to meet your specific business needs.
              </p>
            </div>
            <div className="bg-[#F0F0F0] rounded-2xl p-8">
              <Shield size={32} className="text-[#E84033] mb-4" />
              <h3 className="text-xl font-semibold text-black mb-3">Secure & Scalable</h3>
              <p className="text-gray-700">
                Enterprise-grade security and scalability to grow with your business.
              </p>
            </div>
            <div className="bg-[#F0F0F0] rounded-2xl p-8">
              <Rocket size={32} className="text-[#E84033] mb-4" />
              <h3 className="text-xl font-semibold text-black mb-3">High Performance</h3>
              <p className="text-gray-700">
                Optimized for speed and performance to deliver exceptional user experiences.
              </p>
            </div>
            <div className="bg-[#F0F0F0] rounded-2xl p-8">
              <Users size={32} className="text-[#E84033] mb-4" />
              <h3 className="text-xl font-semibold text-black mb-3">User-Centric Design</h3>
              <p className="text-gray-700">
                Intuitive interfaces designed with your users in mind for maximum engagement.
              </p>
            </div>
            <div className="bg-[#F0F0F0] rounded-2xl p-8">
              <Zap size={32} className="text-[#E84033] mb-4" />
              <h3 className="text-xl font-semibold text-black mb-3">Modern Technologies</h3>
              <p className="text-gray-700">
                Built with the latest frameworks and technologies for future-proof solutions.
              </p>
            </div>
            <div className="bg-[#F0F0F0] rounded-2xl p-8">
              <CheckCircle size={32} className="text-[#E84033] mb-4" />
              <h3 className="text-xl font-semibold text-black mb-3">Ongoing Support</h3>
              <p className="text-gray-700">
                1 year free technical support and maintenance included with every project.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose */}
        <div className="w-full mb-24">
          <div className="bg-linear-to-r from-red-600 to-amber-800 rounded-2xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Why Choose Bespoke Development?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div>
                <h3 className="text-xl font-semibold mb-3">Perfect Fit</h3>
                <p className="opacity-90">
                  Every feature is designed specifically for your business, ensuring a perfect fit with your workflows and processes.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Competitive Advantage</h3>
                <p className="opacity-90">
                  Stand out from competitors with unique features and capabilities tailored to your market.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="w-full text-center">
          <ShimmerButton className="py-6 px-8 text-lg">
            Get a Free Quote
            <ArrowRight size={20} className="ml-2" />
          </ShimmerButton>
        </div>
      </section>
    </main>
  );
}
