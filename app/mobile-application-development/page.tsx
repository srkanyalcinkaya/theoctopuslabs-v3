import { Button } from "@/components/ui/button";
import { Smartphone, CheckCircle, Zap, ArrowRight, Code, Shield, Rocket } from "lucide-react";
import { ShimmerButton } from "@/components/ui/shimmer-button";

export default function MobileAppDevelopmentPage() {
  return (
    <main className="flex flex-col items-center justify-center bg-white min-h-screen pt-32 pb-20">
      <section className="flex flex-col items-center justify-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center justify-center mb-20 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Smartphone size={40} className="text-[#E84033]" />
            <h1 className="text-4xl md:text-5xl font-bold text-black">
              Mobile App Development
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mb-4">
            iOS and Android applications for your business
          </p>
          <p className="text-lg text-gray-600 max-w-2xl">
            Create powerful mobile applications that engage users and drive business growth on iOS and Android platforms.
          </p>
        </div>

        <div className="w-full mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">
            Mobile Development Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#F0F0F0] rounded-2xl p-8">
              <Code size={32} className="text-[#E84033] mb-4" />
              <h3 className="text-xl font-semibold text-black mb-3">Native Apps</h3>
              <p className="text-gray-700">
                High-performance native applications for iOS and Android platforms.
              </p>
            </div>
            <div className="bg-[#F0F0F0] rounded-2xl p-8">
              <Zap size={32} className="text-[#E84033] mb-4" />
              <h3 className="text-xl font-semibold text-black mb-3">Cross-Platform</h3>
              <p className="text-gray-700">
                Single codebase apps that work seamlessly on both iOS and Android.
              </p>
            </div>
            <div className="bg-[#F0F0F0] rounded-2xl p-8">
              <Shield size={32} className="text-[#E84033] mb-4" />
              <h3 className="text-xl font-semibold text-black mb-3">Secure & Reliable</h3>
              <p className="text-gray-700">
                Enterprise-grade security and reliability for your mobile applications.
              </p>
            </div>
            <div className="bg-[#F0F0F0] rounded-2xl p-8">
              <Rocket size={32} className="text-[#E84033] mb-4" />
              <h3 className="text-xl font-semibold text-black mb-3">App Store Optimization</h3>
              <p className="text-gray-700">
                Optimized for app store visibility and maximum downloads.
              </p>
            </div>
            <div className="bg-[#F0F0F0] rounded-2xl p-8">
              <CheckCircle size={32} className="text-[#E84033] mb-4" />
              <h3 className="text-xl font-semibold text-black mb-3">User Experience</h3>
              <p className="text-gray-700">
                Intuitive interfaces designed for optimal mobile user experience.
              </p>
            </div>
            <div className="bg-[#F0F0F0] rounded-2xl p-8">
              <Smartphone size={32} className="text-[#E84033] mb-4" />
              <h3 className="text-xl font-semibold text-black mb-3">Maintenance & Updates</h3>
              <p className="text-gray-700">
                Ongoing support and updates to keep your app current and functional.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full mb-24">
          <div className="bg-linear-to-r from-purple-500 to-indigo-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Reach Your Customers Anywhere
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div>
                <h3 className="text-xl font-semibold mb-3">Mobile-First World</h3>
                <p className="opacity-90">
                  With most users accessing content via mobile devices, a mobile app is essential for modern businesses.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Direct Engagement</h3>
                <p className="opacity-90">
                  Mobile apps provide direct access to your customers with push notifications and personalized experiences.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full text-center">
          <ShimmerButton className="py-6 px-8 text-lg">
            Develop Your Mobile App
            <ArrowRight size={20} className="ml-2" />
          </ShimmerButton>
        </div>
      </section>
    </main>
  );
}
