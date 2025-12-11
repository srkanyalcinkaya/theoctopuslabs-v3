"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { Zap, CheckCircle, Award, Heart, FileText, Send, Clock, DollarSign, Target } from "lucide-react";
import { ShimmerButton } from "@/components/ui/shimmer-button";

export default function QuotePage() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const handleServiceToggle = (service: string) => {
    setSelectedServices(prev =>
      prev.includes(service)
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Quote form submitted", { selectedServices });
    // Form submission logic here
  };

  const services = [
    "Bespoke Web Development",
    "Web Development",
    "Web Design",
    "E-Commerce",
    "Mobile App Development",
    "SEO Services",
    "Graphic Design",
  ];

  return (
    <main className="flex flex-col items-center justify-center bg-white min-h-screen pt-32 pb-20">
      <section className="flex flex-col items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center mb-20 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Zap size={32} className="text-[#E84033]" />
            <h1 className="text-4xl md:text-5xl font-bold text-black">
              Get a Free Quote
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mb-4">
            We analyse your current shortcomings within the scope of our proposals
          </p>
          <p className="text-lg text-gray-600 max-w-2xl">
            Fill out the form below and we'll keep you informed about what we will do and how we will do it.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="w-full mb-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col relative items-center justify-center p-4">
              <div className="absolute top-0 bg-black/30 h-px w-[calc(100%+2rem)] -left-4" />
              <div className="absolute bg-black/30 inset-y-0 w-px h-[calc(100%+4rem)] right-0 z-10" />
              <div className="absolute bottom-0 bg-black/30 h-px w-[calc(100%+2rem)] -left-4" />
              <div className="absolute bg-black/30 top-0 w-px h-[calc(100%+4rem)] left-0 z-10" />

              <div className="mb-4">
                <CheckCircle size={32} className="text-[#E84033]" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-3 text-center">
                Free Quote
              </h3>
              <p className="text-base text-gray-700 text-center">
                No obligation, completely free consultation and quote
              </p>
            </div>
            <div className="flex flex-col relative items-center justify-center p-4">
              <div className="absolute top-0 bg-black/30 h-px w-[calc(100%+2rem)] -left-4" />
              <div className="absolute bg-black/30 inset-y-0 w-px h-[calc(100%+4rem)] right-0 z-10" />
              <div className="absolute bottom-0 bg-black/30 h-px w-[calc(100%+2rem)] -left-4" />
              <div className="absolute bg-black/30 top-0 w-px h-[calc(100%+4rem)] left-0 z-10" />

              <div className="mb-4">
                <Clock size={32} className="text-[#E84033]" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-3 text-center">
                Quick Response
              </h3>
              <p className="text-base text-gray-700 text-center">
                We'll get back to you within 24 hours
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
              <h3 className="text-xl font-semibold text-black mb-3 text-center">
                Expert Analysis
              </h3>
              <p className="text-base text-gray-700 text-center">
                Professional assessment of your needs
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
              <h3 className="text-xl font-semibold text-black mb-3 text-center">
                Tailored Solution
              </h3>
              <p className="text-base text-gray-700 text-center">
                Customized proposal for your business
              </p>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="w-full mb-24 relative">
          <div className="absolute -bottom-5 left-0 w-px h-[calc(100%+4rem)] bg-black/20 z-10" />
          <div className="absolute -bottom-5 right-0 w-px h-[calc(100%+4rem)] bg-black/20 z-10" />
          <div className="absolute top-0 -inset-x-10 w-[calc(100%+5rem)] h-px bg-black/20 z-20" />
          <div className="absolute bottom-5 -inset-x-10 w-[calc(100%+5rem)] h-px bg-black/20 z-20" />

          <div className="rounded-2xl p-16 bg-linear-to-r from-red-600 to-amber-800 bg-clip-text text-transparent">
            <div className="grid md:grid-cols-3 gap-12 text-center">
              <div>
                <div className="text-6xl md:text-7xl font-bold mb-4">10,000+</div>
                <div className="text-xl opacity-90 text-black">Satisfied Customers</div>
              </div>
              <div>
                <div className="text-6xl md:text-7xl font-bold mb-4">1 Year</div>
                <div className="text-xl opacity-90 text-black">Free Support</div>
              </div>
              <div>
                <div className="text-6xl md:text-7xl font-bold mb-4">30 Days</div>
                <div className="text-xl opacity-90 text-black">Money-Back Guarantee</div>
              </div>
            </div>
          </div>
        </div>

        {/* Quote Form */}
        <div className="w-full  mb-24">
          <div className="shadow-input rounded-2xl bg-white p-8 md:p-12 border border-gray-200">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Request Your Free Quote
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Please provide us with details about your project so we can create a tailored proposal for you.
            </p>

            <form className="space-y-8" onSubmit={handleSubmit}>
              {/* Personal Information */}
              <div>
                <h3 className="text-xl font-semibold text-black mb-4 flex items-center gap-2">
                  <FileText size={20} className="text-[#E84033]" />
                  Personal Information
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <LabelInputContainer>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" placeholder="John" type="text" required />
                  </LabelInputContainer>
                  <LabelInputContainer>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" placeholder="Doe" type="text" required />
                  </LabelInputContainer>
                </div>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <LabelInputContainer>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" placeholder="john.doe@example.com" type="email" required />
                  </LabelInputContainer>
                  <LabelInputContainer>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" placeholder="+44 20 1234 5678" type="tel" required />
                  </LabelInputContainer>
                </div>
                <div className="mt-6">
                  <LabelInputContainer>
                    <Label htmlFor="company">Company Name</Label>
                    <Input id="company" placeholder="Your Company Ltd." type="text" />
                  </LabelInputContainer>
                </div>
              </div>

              {/* Project Details */}
              <div>
                <h3 className="text-xl font-semibold text-black mb-4 flex items-center gap-2">
                  <Target size={20} className="text-[#E84033]" />
                  Project Details
                </h3>
                <div className="flexspace-y-6">
                  <LabelInputContainer>
                    <Label htmlFor="projectType">Project Type *</Label>
                    <Select name="projectType" required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new-website">New Website</SelectItem>
                        <SelectItem value="redesign">Website Redesign</SelectItem>
                        <SelectItem value="ecommerce">E-Commerce Store</SelectItem>
                        <SelectItem value="mobile-app">Mobile Application</SelectItem>
                        <SelectItem value="seo">SEO Services</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </LabelInputContainer>

                  <LabelInputContainer>
                    <Label htmlFor="budget">Estimated Budget *</Label>
                    <Select name="budget" required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-5k">Under £5,000</SelectItem>
                        <SelectItem value="5k-10k">£5,000 - £10,000</SelectItem>
                        <SelectItem value="10k-25k">£10,000 - £25,000</SelectItem>
                        <SelectItem value="25k-50k">£25,000 - £50,000</SelectItem>
                        <SelectItem value="50k-plus">£50,000+</SelectItem>
                        <SelectItem value="not-sure">Not Sure</SelectItem>
                      </SelectContent>
                    </Select>
                  </LabelInputContainer>

                  <LabelInputContainer>
                    <Label htmlFor="timeline">Project Timeline *</Label>
                    <Select name="timeline" required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asap">As Soon As Possible</SelectItem>
                        <SelectItem value="1-3months">1-3 Months</SelectItem>
                        <SelectItem value="3-6months">3-6 Months</SelectItem>
                        <SelectItem value="6-12months">6-12 Months</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </LabelInputContainer>
                </div>
              </div>

              {/* Services Selection */}
              <div>
                <h3 className="text-xl font-semibold text-black mb-4 flex items-center gap-2">
                  <Award size={20} className="text-[#E84033]" />
                  Services Needed *
                </h3>
                <p className="text-sm text-gray-600 mb-4">Select all services you're interested in:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <div key={service} className="flex items-center space-x-2">
                      <Checkbox
                        id={service}
                        checked={selectedServices.includes(service)}
                        onCheckedChange={() => handleServiceToggle(service)}
                      />
                      <label
                        htmlFor={service}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                      >
                        {service}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Description */}
              <div>
                <h3 className="text-xl font-semibold text-black mb-4 flex items-center gap-2">
                  <FileText size={20} className="text-[#E84033]" />
                  Project Description *
                </h3>
                <LabelInputContainer>
                  <Label htmlFor="description">Tell us about your project *</Label>
                  <Textarea
                    id="description"
                    placeholder="Please describe your project, goals, and any specific requirements..."
                    className="min-h-[150px]"
                    required
                  />
                </LabelInputContainer>
              </div>

              {/* Additional Requirements */}
              <div>
                <h3 className="text-xl font-semibold text-black mb-4">Additional Requirements</h3>
                <LabelInputContainer>
                  <Label htmlFor="additional">Any additional information or requirements?</Label>
                  <Textarea
                    id="additional"
                    placeholder="Hosting preferences, third-party integrations, special features, etc."
                    className="min-h-[100px]"
                  />
                </LabelInputContainer>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  className="group/btn relative flex h-14 w-full items-center justify-center gap-2 rounded-md bg-linear-to-r from-red-600 to-amber-800 font-medium text-white shadow-lg transition-all hover:shadow-xl text-lg"
                  type="submit"
                >
                  <Send size={20} />
                  Submit Quote Request
                  <BottomGradient />
                </button>
                <p className="text-sm text-gray-500 text-center mt-4">
                  By submitting this form, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </form>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="w-full max-w-6xl mb-24">
          <div className="bg-[#F0F0F0] rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-8">
              Why Request a Quote from The Octopus Labs?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-[#E84033] mb-3">1 Year</div>
                <div className="text-lg text-gray-700 font-semibold mb-2">Free Technical Support</div>
                <p className="text-sm text-gray-600">
                  Any problem you face within the 1st year, we fix it FREE of charge.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-[#E84033] mb-3">30 Days</div>
                <div className="text-lg text-gray-700 font-semibold mb-2">Money-Back Guarantee</div>
                <p className="text-sm text-gray-600">
                  If you're not fully satisfied, we'll refund you in full.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-[#E84033] mb-3">24/7</div>
                <div className="text-lg text-gray-700 font-semibold mb-2">UK-Based Support</div>
                <p className="text-sm text-gray-600">
                  Fast, friendly, and practical in-house UK support team.
                </p>
              </div>
            </div>
          </div>
        </div>

        
      </section>
    </main>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-linear-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-linear-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
