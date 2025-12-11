"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Gift } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-white w-full">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Logo and Social Media */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/theoctopuslabs-logo.png" alt="logo" width={29} height={29} className="rounded-sm" />
            <span className="text-lg font-bold text-black font-orbitron">The Octopus Labs</span>
          </Link>

          <div className="flex items-center gap-4 flex-wrap">
            <Link href="#" className="text-black hover:text-[#E84033] transition-colors">
              <Facebook size={20} />
            </Link>
            <Link href="#" className="text-black hover:text-[#E84033] transition-colors">
              <Twitter size={20} />
            </Link>
            <Link href="#" className="text-black hover:text-[#E84033] transition-colors">
              <Instagram size={20} />
            </Link>
            <Link href="#" className="text-black hover:text-[#E84033] transition-colors">
              <Linkedin size={20} />
            </Link>
            <Link href="#" className="text-black hover:text-[#E84033] transition-colors">
              <Youtube size={20} />
            </Link>
            <Link href="/blog" className="px-4 py-2 bg-gray-100 rounded-full text-sm hover:bg-gray-200 transition-colors">
              Blog
            </Link>
            <Link href="/journal" className="px-4 py-2 bg-gray-100 rounded-full text-sm hover:bg-gray-200 transition-colors">
              Journal
            </Link>
          </div>
        </div>

        {/* Navigation Links - 5 Columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-8">
          {/* Column 1: Services */}
          <div>
            <h3 className="font-semibold text-black mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/bespoke-web-development" className="text-gray-600 hover:text-black text-sm transition-colors">
                  Bespoke Web Development
                </Link>
              </li>
              <li>
                <Link href="/web-development" className="text-gray-600 hover:text-black text-sm transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/web-design" className="text-gray-600 hover:text-black text-sm transition-colors">
                  Web Design
                </Link>
              </li>
              <li>
                <Link href="/e-commerce" className="text-gray-600 hover:text-black text-sm transition-colors">
                  E-Commerce
                </Link>
              </li>
              <li>
                <Link href="/mobile-application-development" className="text-gray-600 hover:text-black text-sm transition-colors">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link href="/search-engine-optimisation" className="text-gray-600 hover:text-black text-sm transition-colors">
                  SEO
                </Link>
              </li>
              <li>
                <Link href="/graphic-design" className="text-gray-600 hover:text-black text-sm transition-colors">
                  Graphic Design
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: About Us */}
          <div>
            <h3 className="font-semibold text-black mb-4">About Us</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-black text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/media" className="text-gray-600 hover:text-black text-sm transition-colors">
                  For Media
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-black text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-600 hover:text-black text-sm transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/referral" className="text-gray-600 hover:text-black text-sm transition-colors">
                  Referral Program
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Terms */}
          <div>
            <h3 className="font-semibold text-black mb-4">Terms</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-black text-sm transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/offer" className="text-gray-600 hover:text-black text-sm transition-colors">
                  Offer
                </Link>
              </li>
              <li>
                <Link href="/payment" className="text-gray-600 hover:text-black text-sm transition-colors">
                  Payment Methods
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Business Partners */}
          {/* <div>
            <h3 className="font-semibold text-black mb-4">Business Partners</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/corporate" className="text-gray-600 hover:text-black text-sm transition-colors">
                  Corporate Clients
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-600 hover:text-black text-sm transition-colors">
                  Career Opportunities
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-600 hover:text-black text-sm transition-colors">
                  Project Proposals
                </Link>
              </li>
            </ul>
          </div> */}

          {/* Column 5: Career */}
          {/* <div>
            <h3 className="font-semibold text-black mb-4">Career</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/careers/full-time" className="text-gray-600 hover:text-black text-sm transition-colors">
                  Full Time
                </Link>
              </li>
              <li>
                <Link href="/careers/part-time" className="text-gray-600 hover:text-black text-sm transition-colors">
                  Part Time
                </Link>
              </li>
              <li>
                <Link href="/careers/freelance" className="text-gray-600 hover:text-black text-sm transition-colors">
                  Freelance
                </Link>
              </li>
            </ul>
          </div> */}
        </div>


      </div>



      {/* Bottom Section - Contact and Legal Information */}
      <div className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <p className="text-2xl font-bold text-black mb-2">0 000 0000 000 00</p>
              {/* <p className="text-sm text-gray-600">Free call within Turkey</p> */}
            </div>
            <div className="text-sm text-gray-600 max-w-2xl text-right">
              <p className="mb-2">
                Educational services are provided by The Octopus Labs.
              </p>
              <p>
                © 2025 The Octopus Labs. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
