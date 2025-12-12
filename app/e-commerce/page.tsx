import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { ShoppingCart, CheckCircle, Zap, ArrowRight, CreditCard, Package, TrendingUp } from "lucide-react";
import { ShimmerButton } from "@/components/ui/shimmer-button";

export const metadata: Metadata = {
  title: "E-Commerce Solutions - The Octopus Labs | Complete Online Shop Solutions",
  description: "Build a powerful online store with our comprehensive e-commerce solutions. Product management, payment integration, order management, analytics. Grow your online sales with 24/7 availability.",
  keywords: "e-commerce, online shop, online store, ecommerce development, shopping cart, payment integration, UK e-commerce",
  openGraph: {
    title: "E-Commerce Solutions - The Octopus Labs | Complete Online Shop Solutions",
    description: "Build a powerful online store with our comprehensive e-commerce solutions. Product management, payment integration, and analytics.",
    url: "https://theoctopuslabs.com/e-commerce",
    siteName: "The Octopus Labs",
    images: [
      {
        url: "/og-image-e-commerce.jpg",
        width: 1200,
        height: 630,
        alt: "E-Commerce Solutions - The Octopus Labs",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "E-Commerce Solutions - The Octopus Labs",
    description: "Build a powerful online store with our comprehensive e-commerce solutions.",
    images: ["/og-image-e-commerce.jpg"],
  },
};

export default function ECommercePage() {
  return (
    <main className="flex flex-col items-center justify-center bg-white min-h-screen pt-32 pb-20">
      <section className="flex flex-col items-center justify-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center justify-center mb-20 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <ShoppingCart size={40} className="text-[#E84033]" />
            <h1 className="text-4xl md:text-5xl font-bold text-black">
              E-Commerce Solutions
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mb-4">
            Complete online shop solutions for your business
          </p>
          <p className="text-lg text-gray-600 max-w-2xl">
            Build a powerful online store that drives sales and grows your business with our comprehensive e-commerce solutions.
          </p>
        </div>

        <div className="w-full mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">
            E-Commerce Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#F0F0F0] rounded-2xl p-8">
              <ShoppingCart size={32} className="text-[#E84033] mb-4" />
              <h3 className="text-xl font-semibold text-black mb-3">Product Management</h3>
              <p className="text-gray-700">
                Easy-to-use admin panel for managing products, inventory, and categories.
              </p>
            </div>
            <div className="bg-[#F0F0F0] rounded-2xl p-8">
              <CreditCard size={32} className="text-[#E84033] mb-4" />
              <h3 className="text-xl font-semibold text-black mb-3">Payment Integration</h3>
              <p className="text-gray-700">
                Secure payment processing with multiple payment gateway options.
              </p>
            </div>
            <div className="bg-[#F0F0F0] rounded-2xl p-8">
              <Package size={32} className="text-[#E84033] mb-4" />
              <h3 className="text-xl font-semibold text-black mb-3">Order Management</h3>
              <p className="text-gray-700">
                Complete order tracking and management system for seamless operations.
              </p>
            </div>
            <div className="bg-[#F0F0F0] rounded-2xl p-8">
              <TrendingUp size={32} className="text-[#E84033] mb-4" />
              <h3 className="text-xl font-semibold text-black mb-3">Analytics & Reports</h3>
              <p className="text-gray-700">
                Detailed analytics to track sales, customer behavior, and performance.
              </p>
            </div>
            <div className="bg-[#F0F0F0] rounded-2xl p-8">
              <Zap size={32} className="text-[#E84033] mb-4" />
              <h3 className="text-xl font-semibold text-black mb-3">Fast Checkout</h3>
              <p className="text-gray-700">
                Streamlined checkout process to reduce cart abandonment and increase conversions.
              </p>
            </div>
            <div className="bg-[#F0F0F0] rounded-2xl p-8">
              <CheckCircle size={32} className="text-[#E84033] mb-4" />
              <h3 className="text-xl font-semibold text-black mb-3">Mobile Optimized</h3>
              <p className="text-gray-700">
                Fully responsive design optimized for mobile shopping experiences.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full mb-24">
          <div className="bg-linear-to-r from-green-500 to-emerald-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Grow Your Online Sales
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div>
                <h3 className="text-xl font-semibold mb-3">24/7 Availability</h3>
                <p className="opacity-90">
                  Your online store is always open, allowing customers to shop anytime, anywhere.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Scalable Growth</h3>
                <p className="opacity-90">
                  Built to scale with your business as you grow and expand your product range.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full text-center">
          <ShimmerButton className="py-6 px-8 text-lg">
            Build Your Online Store
            <ArrowRight size={20} className="ml-2" />
          </ShimmerButton>
        </div>
      </section>
    </main>
  );
}
