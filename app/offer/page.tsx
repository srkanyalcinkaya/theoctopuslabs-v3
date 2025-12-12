import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Gift, CheckCircle, AlertCircle, Clock, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Special Offers - The Octopus Labs | Current Promotions & Discounts",
  description: "Discover our current offers and promotions at The Octopus Labs. New client special offer: 20% off your first project. Get free consultation, 1 year free technical support, and free backup service.",
  keywords: "special offers, promotions, discounts, new client offer, web development offers, UK web services offers",
  openGraph: {
    title: "Special Offers - The Octopus Labs | Current Promotions & Discounts",
    description: "Discover our current offers and promotions. New client special offer: 20% off your first project with free consultation and support.",
    url: "https://theoctopuslabs.com/offer",
    siteName: "The Octopus Labs",
    images: [
      {
        url: "/og-image-offer.jpg",
        width: 1200,
        height: 630,
        alt: "Special Offers - The Octopus Labs",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Special Offers - The Octopus Labs",
    description: "Discover our current offers and promotions. New client special offer: 20% off your first project.",
    images: ["/og-image-offer.jpg"],
  },
};

export default function OfferPage() {
  return (
    <main className="flex flex-col items-center justify-center bg-white min-h-screen pt-32 pb-20">
      <section className="flex flex-col items-center justify-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center justify-center mb-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Gift size={32} className="text-[#E84033]" />
            <h1 className="text-4xl md:text-5xl font-bold text-black">
              Special Offers
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl">
            Discover our current offers and promotions. Terms and conditions apply to all offers.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Offers are subject to availability and may be withdrawn at any time
          </p>
        </div>

        {/* Content Sections */}
        <div className="w-full space-y-8">
          {/* Main Offer Card */}
          <div className="bg-linear-to-r from-red-600 to-amber-800 rounded-2xl p-8 text-white">
            <div className="flex items-center gap-3 mb-4">
              <Star size={28} className="text-yellow-300" />
              <h2 className="text-3xl font-bold">New Client Special Offer</h2>
            </div>
            <p className="text-xl mb-6">
              Get 20% off your first project when you sign up for our services. 
              Limited time offer for new clients only.
            </p>
            <div className="bg-white/10 rounded-lg p-4 mb-6">
              <p className="text-sm mb-2">Offer includes:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>20% discount on initial project</li>
                <li>Free consultation worth £200</li>
                <li>1 year free technical support</li>
                <li>Free backup service for 1 year</li>
              </ul>
            </div>
            <Button className="py-6 px-8 bg-white text-black hover:bg-gray-100">
              Claim Offer
            </Button>
          </div>

          {/* Terms Section */}
          <div className="bg-[#F0F0F0] rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-4">
              <AlertCircle size={24} className="text-[#E84033] mt-1 shrink-0" />
              <div>
                <h2 className="text-2xl font-semibold text-black mb-4">Offer Terms and Conditions</h2>
                <div className="space-y-3 text-gray-700">
                  <p>
                    The following terms and conditions apply to all offers and promotions:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Offers are valid for new clients only unless otherwise stated</li>
                    <li>Offers cannot be combined with other promotions or discounts</li>
                    <li>Offers are subject to availability and may be withdrawn at any time without notice</li>
                    <li>Minimum project value may apply</li>
                    <li>Offers must be claimed within the specified time period</li>
                    <li>Discounts apply to base service fees only, excluding additional services or third-party costs</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Eligibility Section */}
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-4">
              <CheckCircle size={24} className="text-[#027EF2] mt-1 shrink-0" />
              <div>
                <h2 className="text-2xl font-semibold text-black mb-4">Eligibility</h2>
                <div className="space-y-3 text-gray-700">
                  <p>
                    To be eligible for our offers:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>You must be a new client (have not previously used our services)</li>
                    <li>You must meet any minimum project value requirements</li>
                    <li>You must accept our standard Terms of Service</li>
                    <li>Offers are available to clients in the United Kingdom and internationally</li>
                    <li>Business and consumer clients may be subject to different terms</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* How to Claim Section */}
          <div className="bg-[#F0F0F0] rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-4">
              <Clock size={24} className="text-[#E84033] mt-1 shrink-0" />
              <div>
                <h2 className="text-2xl font-semibold text-black mb-4">How to Claim an Offer</h2>
                <div className="space-y-3 text-gray-700">
                  <ol className="list-decimal list-inside space-y-2 ml-4">
                    <li>Contact us via phone, email, or our contact form</li>
                    <li>Mention the specific offer you wish to claim</li>
                    <li>Complete our consultation process</li>
                    <li>Receive a quotation that includes the offer discount</li>
                    <li>Accept the quotation to secure the offer</li>
                  </ol>
                  <p className="mt-4">
                    Offers are subject to our standard Terms of Service and payment terms. 
                    Please ensure you read and understand all terms before accepting an offer.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Consumer Rights Section */}
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-black mb-4">Your Consumer Rights</h2>
            <div className="space-y-3 text-gray-700">
              <p>
                In accordance with UK consumer protection laws, including the Consumer Rights Act 2015:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>You have the right to cancel within 14 days of entering into a contract (subject to certain exceptions for bespoke services)</li>
                <li>All services must be provided with reasonable skill and care</li>
                <li>Services must match any description provided</li>
                <li>You have rights to repair, replacement, or refund if services are not provided as agreed</li>
                <li>For more information about your rights, please see our Terms of Service</li>
              </ul>
            </div>
          </div>

          {/* Additional Offers */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-black mb-3">Referral Program</h3>
              <p className="text-gray-700 mb-4">
                Refer a friend and both you and your friend receive a discount on your next project.
              </p>
              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </div>
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-black mb-3">Bulk Discounts</h3>
              <p className="text-gray-700 mb-4">
                Save more when you book multiple services or projects together.
              </p>
              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-linear-to-r from-blue-400 to-blue-800 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-semibold mb-4">Ready to Take Advantage of Our Offers?</h2>
            <p className="mb-6 text-lg">
              Contact us today to discuss your project and claim your offer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="py-6 px-8 bg-white text-black hover:bg-gray-100">
                Get a Free Quote
              </Button>
              <Button variant="outline" className="py-6 px-8 border-white text-white hover:bg-white/10">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
