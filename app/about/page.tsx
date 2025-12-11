import { Button } from "@/components/ui/button";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { Code, TrendingUp, Award, Heart, Users, Briefcase, ArrowRight, Layout, Server, Palette, FileCode, Layers, Terminal, Database, Network, GitBranch, Image, PenTool, Cloud, Box, CreditCard, BarChart3, Package, Globe, Shield, Zap } from "lucide-react";
import { ShimmerButton } from "@/components/ui/shimmer-button";

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center justify-center bg-white min-h-screen pt-32 pb-20">
      <section className="flex flex-col items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center mb-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
            The Octopus Labs
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 max-w-4xl mb-4">
            Professional solutions for your business needs
          </p>
          <p className="text-xl text-gray-600 max-w-3xl">
            Specialised in Bespoke System Development & Web Design
          </p>
        </div>

        {/* What You Can Do With Us - 4 Cards */}
        <div className="w-full mb-32 ">
          <h2 className="text-4xl md:text-5xl font-bold text-black text-center mb-16">
            What You Can Do With Us
          </h2>
          
          {/* With Us Content Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col relative items-center justify-center p-4">
              <div className="absolute top-0 bg-black/30 h-px w-[calc(100%+2rem)] -left-4" />
              <div className="absolute bg-black/30 inset-y-0 w-px h-[calc(100%+4rem)] right-0 z-10" />
              <div className="absolute bottom-0 bg-black/30 h-px w-[calc(100%+2rem)] -left-4" />
              <div className="absolute bg-black/30 top-0 w-px h-[calc(100%+4rem)] left-0 z-10" />

              <div className="mb-4">
                <Code size={32} className="text-[#E84033]" />
              </div>
              <h3 className="text-2xl font-semibold text-black mb-3 text-center">
                Bespoke Web Development
              </h3>
              <p className="text-lg text-gray-700 text-center">
                Get custom web applications tailored specifically to your business needs and requirements.
              </p>
            </div>
            <div className="flex flex-col relative items-center justify-center p-4">
              <div className="absolute top-0 bg-black/30 h-px w-[calc(100%+2rem)] -left-4" />
              <div className="absolute bg-black/30 inset-y-0 w-px h-[calc(100%+4rem)] right-0 z-10" />
              <div className="absolute bottom-0 bg-black/30 h-px w-[calc(100%+2rem)] -left-4" />
              <div className="absolute bg-black/30 top-0 w-px h-[calc(100%+4rem)] left-0 z-10" />

              <div className="mb-4">
                <TrendingUp size={32} className="text-[#E84033]" />
              </div>
              <h3 className="text-2xl font-semibold text-black mb-3 text-center">
                Grow Your Business
              </h3>
              <p className="text-lg text-gray-700 text-center">
                Enhance your online presence and attract more customers with professional web design and SEO services.
              </p>
            </div>
            <div className="flex flex-col relative items-center justify-center p-4">
              <div className="absolute top-0 bg-black/30 h-px w-[calc(100%+2rem)] -left-4" />
              <div className="absolute bg-black/30 inset-y-0 w-px h-[calc(100%+4rem)] right-0 z-10" />
              <div className="absolute bottom-0 bg-black/30 h-px w-[calc(100%+2rem)] -left-4" />
              <div className="absolute bg-black/30 top-0 w-px h-[calc(100%+4rem)] left-0 z-10" />

              <div className="mb-4">
                <Award size={32} className="text-[#E84033]" />
              </div>
              <h3 className="text-2xl font-semibold text-black mb-3 text-center">
                Professional Solutions
              </h3>
              <p className="text-lg text-gray-700 text-center">
                Access expert services including e-commerce, mobile apps, graphic design, and more.
              </p>
            </div>
            <div className="flex flex-col relative items-center justify-center p-4">
              <div className="absolute top-0 bg-black/30 h-px w-[calc(100%+2rem)] -left-4" />
              <div className="absolute bg-black/30 inset-y-0 w-px h-[calc(100%+4rem)] right-0 z-10" />
              <div className="absolute bottom-0 bg-black/30 h-px w-[calc(100%+2rem)] -left-4" />
              <div className="absolute bg-black/30 top-0 w-px h-[calc(100%+4rem)] left-0 z-10" />

              <div className="mb-4">
                <Heart size={32} className="text-[#E84033]" />
              </div>
              <h3 className="text-2xl font-semibold text-black mb-3 text-center">
                Ongoing Support
              </h3>
              <p className="text-lg text-gray-700 text-center">
                Receive 1 year free technical support and backup service with every project.
              </p>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="w-full mb-24 relative">
          <div className="absolute -bottom-5 left-0 w-px h-[calc(100%+4rem)]  bg-black/20 z-10" />
          <div className="absolute -bottom-5 right-0 w-px h-[calc(100%+4rem)] bg-black/20 z-10" />
          <div className="absolute top-0 -inset-x-10 w-[calc(100%+5rem)] h-px bg-black/20 z-20" />
          <div className="absolute bottom-5 -inset-x-10 w-[calc(100%+5rem)] h-px bg-black/20 z-20" />
          {/* <div className="absolute -bottom-5 right-0 left-0 w-[calc(100%+4rem)] h-px bg-black/20 z-20"/> */}
          {/* <div className="absolute bottom-0 right-0 w-full h-px bg-black/20 z-10"/> */}


          {/* <div className="bg-linear-to-r from-red-600 to-amber-800 rounded-2xl p-16 text-white"> */}
          <div className="rounded-2xl p-16 bg-linear-to-r from-red-600 to-amber-800 bg-clip-text text-transparent">
            <div className="grid md:grid-cols-3 gap-12 text-center">
              <div>
                <div className="text-6xl md:text-7xl font-bold mb-4">10,000+</div>
                <div className="text-xl opacity-90 text-black">Satisfied Customers</div>
              </div>
              <div>
                <div className="text-6xl md:text-7xl font-bold mb-4">7+</div>
                <div className="text-xl opacity-90 text-black">Services Offered</div>
              </div>
              <div>
                <div className="text-6xl md:text-7xl font-bold mb-4">1 Year</div>
                <div className="text-xl opacity-90 text-black">Free Support Included</div>
              </div>
            </div>
          </div>
        </div>

        {/* We Work in the Best Traditions */}
        <div className="w-full mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-black text-center mb-12">
            We Work in the Best Traditions
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700">
            <p>
              We use modern technologies and best practices to deliver exceptional results. Our approach combines technical excellence with practical business solutions.
            </p>
            <p>
              Technology helps us deliver high-quality work efficiently, while our community of clients and partners helps you feel part of the industry.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="w-full mb-24">
          <HoverEffect
            items={[
              {
                title: "Bespoke Web Development",
                description: "Custom web applications tailored to your needs",
                link: "/bespoke-web-development",
              },
              {
                title: "Web Design",
                description: "Beautiful, responsive designs that convert",
                link: "/web-design",
              },
              {
                title: "E-Commerce",
                description: "Complete online shop solutions",
                link: "/e-commerce",
              },
              {
                title: "Mobile App Development",
                description: "iOS and Android applications",
                link: "/mobile-application-development",
              },
              {
                title: "SEO Services",
                description: "Improve your search engine visibility",
                link: "/search-engine-optimisation",
              },
              {
                title: "Graphic Design",
                description: "Professional branding and design",
                link: "/graphic-design",
              },
            ]}
            className="max-w-7xl mx-auto"
          />
        </div>

        {/* Team Section */}
        <div className="w-full mb-24 relative">
          <div className="absolute -bottom-5 left-0 w-px h-[calc(100%+4rem)]  bg-black/20 z-10" />
          <div className="absolute -bottom-5 right-0 w-px h-[calc(100%+4rem)] bg-black/20 z-10" />
          <div className="absolute top-0 -inset-x-10 w-[calc(100%+5rem)] h-px bg-black/20 z-20" />
          <div className="absolute bottom-5 -inset-x-10 w-[calc(100%+5rem)] h-px bg-black/20 z-20" />

          <div className=" rounded-2xl p-12">
            <h2 className="text-4xl md:text-5xl font-bold text-black text-center mb-8">
              We've Built a Powerful Team to Help Your Business Succeed
            </h2>
            <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-8">
              We work from different locations but are always ready to help each other. Outside of work, we often gather online to collaborate, share ideas, or simply connect. And we're always happy to meet in person.
            </p>
            <div className="flex justify-center">
              <ShimmerButton className="py-2 px-4 text-lg">
                Join Our Team
                <ArrowRight size={20} className="ml-2" />
              </ShimmerButton>
            </div>
          </div>
        </div>

        {/* Learning Culture */}
        {/* <div className="w-full mb-24">
          <div className="bg-linear-to-r from-blue-400 to-blue-800 rounded-2xl p-12 text-white">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
              We Help Others — We Learn Ourselves
            </h2>
            <p className="text-xl text-center max-w-3xl mx-auto mb-8">
              Our team continuously develops professionally and stays up-to-date with the latest technologies and industry trends.
            </p>
            <div className="flex justify-center">
              <Button variant="outline" className="py-6 px-8 text-lg border-white text-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </div>
        </div> */}

        {/* Growth and Career Opportunities */}
        {/* <div className="w-full mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-black text-center mb-16">
            The Octopus Labs is Growing, and We're Always Looking for Great Specialists
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#F0F0F0] rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase size={32} className="text-[#E84033]" />
                <h3 className="text-2xl font-semibold text-black">Full-Time Positions</h3>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                We're hiring for development, design, marketing, and other departments.
              </p>
              <Button variant="outline" className="w-full">
                View Open Positions
                <ArrowRight size={20} className="ml-2" />
              </Button>
            </div>
            <div className="bg-[#F0F0F0] rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Users size={32} className="text-[#E84033]" />
                <h3 className="text-2xl font-semibold text-black">Part-Time & Freelance</h3>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                Opportunities for consultants, designers, and specialists.
              </p>
              <Button variant="outline" className="w-full">
                Learn More
                <ArrowRight size={20} className="ml-2" />
              </Button>
            </div>
          </div>
        </div> */}

        {/* Technologies Section */}
        <div className="w-full mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-black text-center mb-12">
            Technologies, Tools, and Approaches We Use in Development
          </h2>
          <BentoGrid className="lg:grid-cols-3 md:grid-cols-2 max-w-7xl mx-auto">
            <BentoCard
              name="Frontend Development"
              className="col-span-3 lg:col-span-1"
              description="React & Next.js, TypeScript, Tailwind CSS, and Modern JavaScript for building responsive and interactive user interfaces."
              href="/web-development"
              cta="Learn more"
              Icon={Layout}
              background={
                <div className="absolute inset-0 bg-linear-to-br from-blue-500/20 to-purple-500/20 overflow-hidden">
                  <div className="absolute inset-0 opacity-10">
                    <div className="grid grid-cols-4 gap-4 p-8">
                      <FileCode className="w-8 h-8 text-blue-600" />
                      <Layers className="w-8 h-8 text-purple-600" />
                      <Code className="w-8 h-8 text-blue-500" />
                      <Layout className="w-8 h-8 text-indigo-600" />
                      <FileCode className="w-8 h-8 text-blue-600" />
                      <Layers className="w-8 h-8 text-purple-600" />
                      <Code className="w-8 h-8 text-blue-500" />
                      <Layout className="w-8 h-8 text-indigo-600" />
                      <FileCode className="w-8 h-8 text-blue-600" />
                      <Layers className="w-8 h-8 text-purple-600" />
                      <Code className="w-8 h-8 text-blue-500" />
                      <Layout className="w-8 h-8 text-indigo-600" />
                    </div>
                  </div>
                </div>
              }
            />
            <BentoCard
              name="Backend Development"
              className="col-span-3 lg:col-span-1"
              description="Node.js, Python, Database Solutions, and API Development for robust server-side applications and data management."
              href="/bespoke-web-development"
              cta="Learn more"
              Icon={Server}
              background={
                <div className="absolute inset-0 bg-linear-to-br from-green-500/20 to-teal-500/20 overflow-hidden">
                  <div className="absolute inset-0 opacity-10">
                    <div className="grid grid-cols-4 gap-4 p-8">
                      <Server className="w-8 h-8 text-green-600" />
                      <Database className="w-8 h-8 text-teal-600" />
                      <Network className="w-8 h-8 text-emerald-600" />
                      <Terminal className="w-8 h-8 text-green-500" />
                      <Server className="w-8 h-8 text-green-600" />
                      <Database className="w-8 h-8 text-teal-600" />
                      <Network className="w-8 h-8 text-emerald-600" />
                      <Terminal className="w-8 h-8 text-green-500" />
                      <Server className="w-8 h-8 text-green-600" />
                      <Database className="w-8 h-8 text-teal-600" />
                      <Network className="w-8 h-8 text-emerald-600" />
                      <Terminal className="w-8 h-8 text-green-500" />
                    </div>
                  </div>
                </div>
              }
            />
            <BentoCard
              name="Design & Tools"
              className="col-span-3 lg:col-span-1"
              description="Figma, Adobe Creative Suite, Responsive Design, UX/UI Best Practices, and Version Control (Git) for professional design workflows."
              href="/web-design"
              cta="Learn more"
              Icon={Palette}
              background={
                <div className="absolute inset-0 bg-linear-to-br from-pink-500/20 to-orange-500/20 overflow-hidden">
                  <div className="absolute inset-0 opacity-10">
                    <div className="grid grid-cols-4 gap-4 p-8">
                      <Palette className="w-8 h-8 text-pink-600" />
                      <Image className="w-8 h-8 text-orange-600" />
                      <PenTool className="w-8 h-8 text-rose-600" />
                      <GitBranch className="w-8 h-8 text-pink-500" />
                      <Palette className="w-8 h-8 text-pink-600" />
                      <Image className="w-8 h-8 text-orange-600" />
                      <PenTool className="w-8 h-8 text-rose-600" />
                      <GitBranch className="w-8 h-8 text-pink-500" />
                      <Palette className="w-8 h-8 text-pink-600" />
                      <Image className="w-8 h-8 text-orange-600" />
                      <PenTool className="w-8 h-8 text-rose-600" />
                      <GitBranch className="w-8 h-8 text-pink-500" />
                    </div>
                  </div>
                </div>
              }
            />
            <BentoCard
              name="Cloud & Hosting"
              className="col-span-3 lg:col-span-1"
              description="AWS, Azure, Vercel, Netlify, and other cloud platforms for scalable and reliable hosting solutions."
              href="/bespoke-web-development"
              cta="Learn more"
              Icon={Cloud}
              background={
                <div className="absolute inset-0 bg-linear-to-br from-cyan-500/20 to-blue-500/20 overflow-hidden">
                  <div className="absolute inset-0 opacity-10">
                    <div className="grid grid-cols-4 gap-4 p-8">
                      <Cloud className="w-8 h-8 text-cyan-600" />
                      <Globe className="w-8 h-8 text-blue-600" />
                      <Zap className="w-8 h-8 text-sky-600" />
                      <Server className="w-8 h-8 text-cyan-500" />
                      <Cloud className="w-8 h-8 text-cyan-600" />
                      <Globe className="w-8 h-8 text-blue-600" />
                      <Zap className="w-8 h-8 text-sky-600" />
                      <Server className="w-8 h-8 text-cyan-500" />
                      <Cloud className="w-8 h-8 text-cyan-600" />
                      <Globe className="w-8 h-8 text-blue-600" />
                      <Zap className="w-8 h-8 text-sky-600" />
                      <Server className="w-8 h-8 text-cyan-500" />
                    </div>
                  </div>
                </div>
              }
            />
            <BentoCard
              name="Databases"
              className="col-span-3 lg:col-span-1"
              description="PostgreSQL, MongoDB, MySQL, Redis, and other database solutions for efficient data storage and management."
              href="/bespoke-web-development"
              cta="Learn more"
              Icon={Database}
              background={
                <div className="absolute inset-0 bg-linear-to-br from-emerald-500/20 to-green-500/20 overflow-hidden">
                  <div className="absolute inset-0 opacity-10">
                    <div className="grid grid-cols-4 gap-4 p-8">
                      <Database className="w-8 h-8 text-emerald-600" />
                      <Box className="w-8 h-8 text-green-600" />
                      <Server className="w-8 h-8 text-lime-600" />
                      <Network className="w-8 h-8 text-emerald-500" />
                      <Database className="w-8 h-8 text-emerald-600" />
                      <Box className="w-8 h-8 text-green-600" />
                      <Server className="w-8 h-8 text-lime-600" />
                      <Network className="w-8 h-8 text-emerald-500" />
                      <Database className="w-8 h-8 text-emerald-600" />
                      <Box className="w-8 h-8 text-green-600" />
                      <Server className="w-8 h-8 text-lime-600" />
                      <Network className="w-8 h-8 text-emerald-500" />
                    </div>
                  </div>
                </div>
              }
            />
            <BentoCard
              name="Payment & E-Commerce"
              className="col-span-3 lg:col-span-1"
              description="Stripe, PayPal, Shopify, WooCommerce, and other payment gateways and e-commerce platforms for online businesses."
              href="/e-commerce"
              cta="Learn more"
              Icon={CreditCard}
              background={
                <div className="absolute inset-0 bg-linear-to-br from-yellow-500/20 to-amber-500/20 overflow-hidden">
                  <div className="absolute inset-0 opacity-10">
                    <div className="grid grid-cols-4 gap-4 p-8">
                      <CreditCard className="w-8 h-8 text-yellow-600" />
                      <Package className="w-8 h-8 text-amber-600" />
                      <Box className="w-8 h-8 text-orange-600" />
                      <Zap className="w-8 h-8 text-yellow-500" />
                      <CreditCard className="w-8 h-8 text-yellow-600" />
                      <Package className="w-8 h-8 text-amber-600" />
                      <Box className="w-8 h-8 text-orange-600" />
                      <Zap className="w-8 h-8 text-yellow-500" />
                      <CreditCard className="w-8 h-8 text-yellow-600" />
                      <Package className="w-8 h-8 text-amber-600" />
                      <Box className="w-8 h-8 text-orange-600" />
                      <Zap className="w-8 h-8 text-yellow-500" />
                    </div>
                  </div>
                </div>
              }
            />
            <BentoCard
              name="Analytics & SEO"
              className="col-span-3 lg:col-span-1"
              description="Google Analytics, Google Search Console, SEMrush, and other analytics tools for data-driven insights and SEO optimization."
              href="/search-engine-optimisation"
              cta="Learn more"
              Icon={BarChart3}
              background={
                <div className="absolute inset-0 bg-linear-to-br from-indigo-500/20 to-purple-500/20 overflow-hidden">
                  <div className="absolute inset-0 opacity-10">
                    <div className="grid grid-cols-4 gap-4 p-8">
                      <BarChart3 className="w-8 h-8 text-indigo-600" />
                      <TrendingUp className="w-8 h-8 text-purple-600" />
                      <Globe className="w-8 h-8 text-violet-600" />
                      <Zap className="w-8 h-8 text-indigo-500" />
                      <BarChart3 className="w-8 h-8 text-indigo-600" />
                      <TrendingUp className="w-8 h-8 text-purple-600" />
                      <Globe className="w-8 h-8 text-violet-600" />
                      <Zap className="w-8 h-8 text-indigo-500" />
                      <BarChart3 className="w-8 h-8 text-indigo-600" />
                      <TrendingUp className="w-8 h-8 text-purple-600" />
                      <Globe className="w-8 h-8 text-violet-600" />
                      <Zap className="w-8 h-8 text-indigo-500" />
                    </div>
                  </div>
                </div>
              }
            />
            <BentoCard
              name="Security & DevOps"
              className="col-span-3 lg:col-span-1"
              description="SSL certificates, Docker, Kubernetes, CI/CD pipelines, and security best practices for secure and scalable deployments."
              href="/bespoke-web-development"
              cta="Learn more"
              Icon={Shield}
              background={
                <div className="absolute inset-0 bg-linear-to-br from-red-500/20 to-rose-500/20 overflow-hidden">
                  <div className="absolute inset-0 opacity-10">
                    <div className="grid grid-cols-4 gap-4 p-8">
                      <Shield className="w-8 h-8 text-red-600" />
                      <Terminal className="w-8 h-8 text-rose-600" />
                      <Box className="w-8 h-8 text-pink-600" />
                      <Server className="w-8 h-8 text-red-500" />
                      <Shield className="w-8 h-8 text-red-600" />
                      <Terminal className="w-8 h-8 text-rose-600" />
                      <Box className="w-8 h-8 text-pink-600" />
                      <Server className="w-8 h-8 text-red-500" />
                      <Shield className="w-8 h-8 text-red-600" />
                      <Terminal className="w-8 h-8 text-rose-600" />
                      <Box className="w-8 h-8 text-pink-600" />
                      <Server className="w-8 h-8 text-red-500" />
                    </div>
                  </div>
                </div>
              }
            />
            <BentoCard
              name="CMS Platforms"
              className="col-span-3 lg:col-span-1"
              description="WordPress, Contentful, Strapi, Sanity, and other content management systems for easy content management and updates."
              href="/web-development"
              cta="Learn more"
              Icon={Package}
              background={
                <div className="absolute inset-0 bg-linear-to-br from-teal-500/20 to-cyan-500/20 overflow-hidden">
                  <div className="absolute inset-0 opacity-10">
                    <div className="grid grid-cols-4 gap-4 p-8">
                      <Package className="w-8 h-8 text-teal-600" />
                      <Box className="w-8 h-8 text-cyan-600" />
                      <Globe className="w-8 h-8 text-sky-600" />
                      <Layers className="w-8 h-8 text-teal-500" />
                      <Package className="w-8 h-8 text-teal-600" />
                      <Box className="w-8 h-8 text-cyan-600" />
                      <Globe className="w-8 h-8 text-sky-600" />
                      <Layers className="w-8 h-8 text-teal-500" />
                      <Package className="w-8 h-8 text-teal-600" />
                      <Box className="w-8 h-8 text-cyan-600" />
                      <Globe className="w-8 h-8 text-sky-600" />
                      <Layers className="w-8 h-8 text-teal-500" />
                    </div>
                  </div>
                </div>
              }
            />
          </BentoGrid>
        </div>

        {/* CTA Section */}
        <div className="w-full">
          <div className="bg-linear-to-r from-red-600 to-amber-800 rounded-2xl p-16 text-white text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Build the Future Together
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto">
              Get a free and quick quote. We analyze your current needs and keep you informed about what we will do and how we will do it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="py-6 px-8 text-lg bg-white text-black hover:bg-gray-100">
                Get a Free Quote
              </Button>
              <Button variant="outline" className="py-6 px-8 text-lg border-white text-white hover:bg-white/10">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

