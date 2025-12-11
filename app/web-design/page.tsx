import { Button } from "@/components/ui/button";
import { Palette, CheckCircle, Zap, ArrowRight, Eye, Smartphone, Sparkles } from "lucide-react";
import { ShimmerButton } from "@/components/ui/shimmer-button";

export default function WebDesignPage() {
  return (
    <main className="flex flex-col items-center justify-center bg-white min-h-screen pt-32 pb-20">
      <section className="flex flex-col items-center justify-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center justify-center mb-20 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Palette size={40} className="text-[#E84033]" />
            <h1 className="text-4xl md:text-5xl font-bold text-black">
              Web Design
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mb-4">
            Beautiful, responsive designs that convert
          </p>
          <p className="text-lg text-gray-600 max-w-2xl">
            We create stunning, user-friendly website designs that not only look great but also drive results for your business.
          </p>
        </div>

        <div className="w-full mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">
            Design Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#F0F0F0] rounded-2xl p-8">
              <Eye size={32} className="text-[#E84033] mb-4" />
              <h3 className="text-xl font-semibold text-black mb-3">UI/UX Design</h3>
              <p className="text-gray-700">
                Intuitive user interfaces designed for optimal user experience and engagement.
              </p>
            </div>
            <div className="bg-[#F0F0F0] rounded-2xl p-8">
              <Smartphone size={32} className="text-[#E84033] mb-4" />
              <h3 className="text-xl font-semibold text-black mb-3">Responsive Design</h3>
              <p className="text-gray-700">
                Designs that look perfect on all devices and screen sizes.
              </p>
            </div>
            <div className="bg-[#F0F0F0] rounded-2xl p-8">
              <Sparkles size={32} className="text-[#E84033] mb-4" />
              <h3 className="text-xl font-semibold text-black mb-3">Brand Identity</h3>
              <p className="text-gray-700">
                Consistent branding that reflects your company's values and personality.
              </p>
            </div>
            <div className="bg-[#F0F0F0] rounded-2xl p-8">
              <Zap size={32} className="text-[#E84033] mb-4" />
              <h3 className="text-xl font-semibold text-black mb-3">Modern Aesthetics</h3>
              <p className="text-gray-700">
                Contemporary design trends that keep your website fresh and appealing.
              </p>
            </div>
            <div className="bg-[#F0F0F0] rounded-2xl p-8">
              <CheckCircle size={32} className="text-[#E84033] mb-4" />
              <h3 className="text-xl font-semibold text-black mb-3">Conversion Focused</h3>
              <p className="text-gray-700">
                Designs optimized to convert visitors into customers and leads.
              </p>
            </div>
            <div className="bg-[#F0F0F0] rounded-2xl p-8">
              <Palette size={32} className="text-[#E84033] mb-4" />
              <h3 className="text-xl font-semibold text-black mb-3">Custom Graphics</h3>
              <p className="text-gray-700">
                Unique graphics and visual elements tailored to your brand.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full mb-24">
          <div className="bg-linear-to-r from-pink-500 to-orange-500 rounded-2xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Why Professional Design Matters
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div>
                <h3 className="text-xl font-semibold mb-3">First Impressions</h3>
                <p className="opacity-90">
                  Your website is often the first interaction customers have with your brand. Make it count.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">User Trust</h3>
                <p className="opacity-90">
                  Professional design builds trust and credibility with your audience.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full text-center">
          <ShimmerButton className="py-6 px-8 text-lg">
            Start Your Design Project
            <ArrowRight size={20} className="ml-2" />
          </ShimmerButton>
        </div>
      </section>
    </main>
  );
}
