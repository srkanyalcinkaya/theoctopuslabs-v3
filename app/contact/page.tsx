"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Mail, Phone, MapPin, Send, Zap } from "lucide-react";

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
    // Form submission logic here
  };

  return (
    <main className="flex flex-col items-center justify-center bg-white min-h-screen pt-32 pb-20">
      <section className="flex flex-col items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center mb-20 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Zap size={32} className="text-[#E84033]" />
            <h1 className="text-4xl md:text-5xl font-bold text-black">
              Contact Us
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mb-4">
            Get in touch with us. We're here to help you with your business needs.
          </p>
          <p className="text-lg text-gray-600 max-w-2xl">
            Fill out the form below or reach us directly through our contact information.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 w-full max-w-6xl mb-24">
          {/* Contact Information */}
          <div className="flex flex-col space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-black mb-6">Get in Touch</h2>
              <p className="text-lg text-gray-700 mb-8">
                We analyse your current shortcomings within the scope of our proposals and keep you informed about what we will do and how we will do it.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#F0F0F0] rounded-lg p-3">
                  <Phone size={24} className="text-[#E84033]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black mb-1">Phone</h3>
                  <p className="text-gray-700">8 800 700-93-29</p>
                  <p className="text-sm text-gray-500">Free call within Turkey</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#F0F0F0] rounded-lg p-3">
                  <Mail size={24} className="text-[#E84033]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black mb-1">Email</h3>
                  <p className="text-gray-700">info@theoctopuslabs.com</p>
                  <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#F0F0F0] rounded-lg p-3">
                  <MapPin size={24} className="text-[#E84033]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black mb-1">Address</h3>
                  <p className="text-gray-700">United Kingdom</p>
                  <p className="text-sm text-gray-500">UK-based support team</p>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-linear-to-r from-red-600 to-amber-800 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Get a Free Quote</h3>
              <p className="mb-6 text-lg opacity-90">
                Get a free and quick quote. We analyse your current needs and keep you informed about what we will do and how we will do it.
              </p>
              <Button className="bg-white text-black hover:bg-gray-100">
                Request a Quote
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="shadow-input mx-auto w-full rounded-2xl bg-white p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-black mb-2">
              Send us a Message
            </h2>
            <p className="text-sm text-gray-600 mb-8">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-4">
                <LabelInputContainer>
                  <Label htmlFor="firstname">First Name</Label>
                  <Input id="firstname" placeholder="John" type="text" required />
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label htmlFor="lastname">Last Name</Label>
                  <Input id="lastname" placeholder="Doe" type="text" required />
                </LabelInputContainer>
              </div>

              <LabelInputContainer>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" placeholder="john.doe@example.com" type="email" required />
              </LabelInputContainer>

              <LabelInputContainer>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="+44 20 1234 5678" type="tel" />
              </LabelInputContainer>

              <LabelInputContainer>
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="What is this regarding?" type="text" required />
              </LabelInputContainer>

              <LabelInputContainer>
                <Label htmlFor="message">Message</Label>
                <textarea
                  id="message"
                  placeholder="Tell us about your project..."
                  className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  required
                />
              </LabelInputContainer>

              <button
                className="group/btn relative flex h-12 w-full items-center justify-center gap-2 rounded-md bg-linear-to-r from-red-600 to-amber-800 font-medium text-white shadow-lg transition-all hover:shadow-xl"
                type="submit"
              >
                <Send size={20} />
                Send Message
                <BottomGradient />
              </button>
            </form>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="w-full max-w-6xl">
          <div className="bg-[#F0F0F0] rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Why Choose The Octopus Labs?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div>
                <div className="text-4xl font-bold text-[#E84033] mb-2">1 Year</div>
                <div className="text-lg text-gray-700">Free Technical Support</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#E84033] mb-2">30 Days</div>
                <div className="text-lg text-gray-700">Money-Back Guarantee</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#E84033] mb-2">24/7</div>
                <div className="text-lg text-gray-700">UK-Based Support</div>
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
