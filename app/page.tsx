import { Button } from "@/components/ui/button";
import { Activity, Blend, LayoutPanelTop, PenTool, Star, TabletSmartphone, VectorSquare, WholeWord, Zap, ZapIcon } from "lucide-react";
import { FeaturesAnimatedList } from "@/components/features-animated-list";
import { TestimonialsSection } from "@/components/testimonials-section";
import AppleCardsCarouselDemo from "@/components/apple-cards-carousel-demo";

export default function Home() {

  const services = [
    {
      icon: <VectorSquare color="#fff" className="w-4 h-4 md:h-6 md:w-6" />,
      title: "Bespoke Web Development",
      description: "We develop bespoke web applications for your business needs.",
    },
    {
      icon: <Blend color="#fff" className="w-4 h-4 md:h-6 md:w-6" />,
      title: "Web Development",
      description: "We develop web applications for your business needs.",
    },
    {
      icon: <PenTool color="#fff" className="w-4 h-4 md:h-6 md:w-6" />,
      title: "Web Design",
      description: "We design web applications for your business needs.",
    },
    {
      icon: <LayoutPanelTop color="#fff" className="w-4 h-4 md:h-6 md:w-6" />,
      title: "E-Commerce (Online Shop)",
      description: "We develop e-commerce applications for your business needs.",
    },
    {
      icon: <Activity color="#fff" className="w-4 h-4 md:h-6 md:w-6" />,
      title: "Social Media",
      description: "We develop social media applications for your business needs.",
    },
    {
      icon: <TabletSmartphone color="#fff" className="w-4 h-4 md:h-6 md:w-6" />,
      title: "Mobile Application Development",
      description: "We develop mobile applications for your business needs.",
    },
    {
      icon: <WholeWord color="#fff" className="w-4 h-4 md:h-6 md:w-6" />,
      title: "Search Engine Optimisation",
      description: "We develop search engine optimisation for your business needs.",
    },
  ];
  return (
    <main className="flex flex-col items-center justify-center bg-white h-full ">
      <section className="flex flex-col items-center justify-center max-w-6xl md:mx-auto mx-4">
        <div className="flex flex-col items-center justify-center pt-32 pb-20">
          <div className="flex items-center justify-center gap-2 mb-10">
            <Zap size={20} className="text-[#E84033] w-5 h-5" />
            <span className="text-lg">
              Over 10,000 + customers
            </span>
          </div>
          <h1 className="md:text-4xl text-2xl text-center max-w-[800px]">The Octopus Labs —
            Professional solutions for your business needs
            Specialised in Bespoke System Development & Web Design</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 content-center items-center justify-center gap-6 container md:mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-1 items-center   md:max-w-[370px] h-auto justify-center bg-[#1E1E1E] rounded-2xl p-[6px] gap-[6px]">
            {services.map((service, index) => (
              <div key={index} className={`${index === 0 ? 'rounded-t-xl rounded-b-sm' : index === services.length - 1 ? 'rounded-b-xl rounded-t-sm ' : 'rounded-sm'} ${index === services.length - 1 ? 'md:col-span-1 col-span-2 h-[50px]! md:h-full ' : ''} bg-[#2D2D2D] md:p-6 p-2 flex items-center justify-start w-full gap-2 md:gap-5 hover:bg-[#3D3D3D] transition-all duration-300 h-full`}>
                {service.icon}
                <span className="text-white  text-sm md:text-lg ">
                  {service.title}
                </span>
              </div>
            ))}
          </div>
          <div className="flex md:flex-col flex-row gap-6 w-full h-full">
            <div className="w-auto md:max-h-[300px] h-[235px] md:h-full rounded-2xl">
              <img src="/images/hero/hero-1.jpg" alt="service-1" className="rounded-2xl w-full h-full object-cover" />
            </div>
            <div className="w-auto md:max-h-[300px] h-[235px] md:h-full rounded-2xl">
              <img src="/images/hero/hero-3.jpg" alt="service-2" className="rounded-2xl w-full h-full object-cover" />
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-6 w-full h-full">
            <div className="w-auto md:max-h-[300px] h-[235px] md:h-full rounded-2xl">
              <img src="/images/hero/hero-5.jpg" alt="service-3" className="rounded-2xl w-full h-full object-cover" />
            </div>
            <div className="w-auto md:max-h-[300px] h-[235px] md:h-full  rounded-2xl">
              <img src="/images/hero/hero-1.jpg" alt="service-4" className="rounded-2xl w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center w-full h-full mt-20 max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center w-full h-full">
          <div className="flex flex-col items-center justify-center rounded-2xl bg-linear-to-r from-red-600 to-amber-800 h-full w-full p-16 gap-4">
            <div className="flex flex-col items-center justify-center  gap-10">
              <h2 className="text-5xl  text-white text-center">Get a free and quick quote</h2>
              <p className="text-lg - text-white max-w-lg text-center mb-4">
                We analyse your current shortcomings within the scope of our proposals and keep you informed and what we will do and how we will do it. Then, you can calmly decide whether or not you wish to proceed with the offer.
              </p>
              <Button className="py-6 px-8">Get a free quote</Button>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center w-full h-full mt-20  max-w-7xl md:mx-auto mx-1">
        <div className="flex flex-col items-center justify-center w-full h-full">
          <div className="flex flex-col items-center justify-center rounded-md  h-full w-full gap-4">
            <div className="flex flex-col items-center justify-center  gap-10">
              <h2 className="md:text-5xl text-3xl  text-black max-w-xl text-center">Why Choose The Octopus Labs Web Design</h2>
              <div className="flex items-center justify-center gap-2">
                <Star size={20} color="blue" />
                <span className="text-lg text-black">We work every day to ensure your company continues to grow.</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <div
                  className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-center"
                 
                >
                  <div className="flex flex-col items-center justify-center gap-6">

                    <div className="bg-[#F0F0F0] rounded-md px-6 py-2 flex flex-row items-center justify-center gap-2 h-fit">
                      <p className="md:text-md text-xs text-start text-black">
                        Fast, friendly and practical in-house UK support. Your calls are never diverted overseas. Our team is always here to help — just give us a call. We also offer face-to-face meetings where you can share your ideas and feedback about your website.
                      </p>
                      <img src="/images/why-1.png" alt="service-1" className="w-1/3  object-cover" />
                    </div>

                    <div className="bg-[#F0F0F0] rounded-md px-6 py-2 flex flex-row items-center justify-center gap-2 ">
                      <p className="md:text-md text-xs text-start text-black">
                        Your web site design will be responsive. 21st April 2015 Google has announced any website that is not responsive to mobile and tablets will be under risk of losing traffic.
                      </p>
                      <img src="/images/why-1.png" alt="service-1" className="w-1/3  object-cover" />
                    </div>
                  </div>
                  <div
                    className="flex flex-col  gap-4 bg-linear-to-r from-blue-400 to-blue-800 rounded-md overflow-hidden h-[525px]"
                    // style={{ gridRow: 'span 2', height: '100%' }}
                  >
                    <div className="flex items-start justify-start">
                      <span className="text-white text-lg text-left max-w-md p-8">
                        Your website package also includes a complimentary Basic SEO service, helping improve your site’s visibility on search engines and attract more visitors.
                      </span>

                    </div>
                    <div className="w-full flex-1 min-h-0 overflow-hidden">
                      <FeaturesAnimatedList className="h-full" />
                    </div>
                    <div className="flex items-center justify-center">
                      <Button className="py-6 px-8 mt-auto mb-8">Request a Quote</Button>

                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2 w-auto h-[622px] md:h-auto relative mt-6">
                  <div className="w-full h-full rounded-xl overflow-hidden md:block hidden">
                    <img src="/images/why-2.png" alt="service-2" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-full h-full rounded-xl overflow-hidden md:hidden block">
                    <img src="/images/why-3.png" alt="service-2" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute md:top-10 md:right-10 bottom-20  flex flex-col md:flex-row items-center justify-center md:gap-6 gap-4">
                    <div className="h-[150px] md:h-[340px] w-full md:w-[250px] rounded-2xl backdrop-blur-xl p-6 flex flex-col justify-between">
                      <div className="flex items-end justify-start gap-1">
                        <span className="text-white md:text-7xl text-4xl ">1</span>
                        <span className="text-white md:text-lg text-sm">/ Year</span>
                      </div>
                      <span className="text-white md:text-md text-sm">
                        Once we developed your website, we give <strong>1 YEAR FREE Technical Support</strong>  and <strong>1 Year FREE Backup Service</strong>. Which means any problem you face within 1st year, we would fix it <strong>FREE</strong> of charge.
                      </span>
                    </div>
                    <div className="h-[150px] md:h-[340px] w-full md:w-[250px] rounded-2xl backdrop-blur-xl p-6 flex flex-col items-start justify-between">
                      <div className="flex items-end justify-start gap-1">
                        <span className="text-white md:text-7xl text-4xl ">30</span>
                        <span className="text-white md:text-lg text-sm">/ Day</span>
                      </div>
                      <span className="text-white md:text-md text-sm">
                        All hosting plans include a 30-day money-back guarantee. If you’re not fully satisfied within 30 days of your order, we’ll refund you in full.
                      </span>
                    </div>
                  </div>
                  <div className="absolute md:bottom-0 -bottom-5 md:right-10 right-1/2 ">
                    <Button className="py-6 px-8 mt-auto mb-8 bg-[#027EF2] text-white">Request a Quote</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection />

      <section className="flex flex-col items-center justify-center w-full h-full mt-32 max-w-7xl mx-auto">
        <h2 className="md:text-5xl text-3xl text-black text-center mb-10">
          Client Testimonials & Video Reviews
        </h2>
        <AppleCardsCarouselDemo />
      </section>
    </main>
  );
}
