import { Button } from "@/components/ui/button";
import { Image, CheckCircle, Zap, ArrowRight, Palette, Sparkles, Brush } from "lucide-react";
import { ShimmerButton } from "@/components/ui/shimmer-button";

export default function GraphicDesignPage() {
  return (
    <main className="flex flex-col items-center justify-center bg-white min-h-screen pt-32 pb-20">
      <section className="flex flex-col items-center justify-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center justify-center mb-20 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Palette size={40} className="text-[#E84033]" />
            <h1 className="text-4xl md:text-5xl font-bold text-black">
              Graphic Design
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mb-4">
            Professional branding and design
          </p>
          <p className="text-lg text-gray-600 max-w-2xl">
            Create compelling visual identities and designs that represent your brand and captivate your audience.
          </p>
        </div>

        <div className="w-full mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">
            Design Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#F0F0F0] rounded-2xl p-8">
              <Palette size={32} className="text-[#E84033] mb-4" />
              <h3 className="text-xl font-semibold text-black mb-3">Brand Identity</h3>
              <p className="text-gray-700">
                Complete brand identity packages including logos, color schemes, and style guides.
              </p>
            </div>
            <div className="bg-[#F0F0F0] rounded-2xl p-8">
              <Image size={32} className="text-[#E84033] mb-4" />
              <h3 className="text-xl font-semibold text-black mb-3">Logo Design</h3>
              <p className="text-gray-700">
                Unique, memorable logos that represent your brand's personality and values.
              </p>
            </div>
            <div className="bg-[#F0F0F0] rounded-2xl p-8">
              <Brush size={32} className="text-[#E84033] mb-4" />
              <h3 className="text-xl font-semibold text-black mb-3">Print Design</h3>
              <p className="text-gray-700">
                Business cards, brochures, flyers, and other print materials.
              </p>
            </div>
            <div className="bg-[#F0F0F0] rounded-2xl p-8">
              <Sparkles size={32} className="text-[#E84033] mb-4" />
              <h3 className="text-xl font-semibold text-black mb-3">Social Media Graphics</h3>
              <p className="text-gray-700">
                Eye-catching graphics for social media posts, ads, and campaigns.
              </p>
            </div>
            <div className="bg-[#F0F0F0] rounded-2xl p-8">
              <Zap size={32} className="text-[#E84033] mb-4" />
              <h3 className="text-xl font-semibold text-black mb-3">Web Graphics</h3>
              <p className="text-gray-700">
                Custom graphics, icons, and visual elements for websites and applications.
              </p>
            </div>
            <div className="bg-[#F0F0F0] rounded-2xl p-8">
              <CheckCircle size={32} className="text-[#E84033] mb-4" />
              <h3 className="text-xl font-semibold text-black mb-3">Marketing Materials</h3>
              <p className="text-gray-700">
                Design for banners, posters, and promotional materials.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full mb-24">
          <div className="bg-linear-to-r from-rose-500 to-pink-500 rounded-2xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Make Your Brand Stand Out
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div>
                <h3 className="text-xl font-semibold mb-3">Visual Impact</h3>
                <p className="opacity-90">
                  Professional design creates a strong first impression and builds brand recognition.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Consistent Branding</h3>
                <p className="opacity-90">
                  Cohesive visual identity across all touchpoints strengthens your brand presence.
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
