import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { FileText, Shield, AlertCircle, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service - The Octopus Labs | Terms & Conditions",
  description: "Read The Octopus Labs Terms of Service. Our terms and conditions for web development, web design, and all services. Payment terms, intellectual property rights, cancellation policy, and more.",
  keywords: "terms of service, terms and conditions, service terms, legal terms, UK terms of service",
  openGraph: {
    title: "Terms of Service - The Octopus Labs | Terms & Conditions",
    description: "Read The Octopus Labs Terms of Service. Our terms and conditions for web development, web design, and all services.",
    url: "https://theoctopuslabs.com/terms",
    siteName: "The Octopus Labs",
    images: [
      {
        url: "/og-image-terms.jpg",
        width: 1200,
        height: 630,
        alt: "Terms of Service - The Octopus Labs",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service - The Octopus Labs",
    description: "Read The Octopus Labs Terms of Service. Our terms and conditions for all services.",
    images: ["/og-image-terms.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <main className="flex flex-col items-center justify-center bg-white min-h-screen pt-32 pb-20">
      <section className="flex flex-col items-center justify-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center justify-center mb-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <FileText size={32} className="text-[#E84033]" />
            <h1 className="text-4xl md:text-5xl font-bold text-black">
              Terms of Service
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl">
            Please read these terms and conditions carefully before using our services. 
            By using our services, you agree to be bound by these terms.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>
        </div>

        {/* Content Sections */}
        <div className="w-full space-y-8">
          {/* Section 1 */}
          <div className="bg-[#F0F0F0] rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-4">
              <Shield size={24} className="text-[#E84033] mt-1 shrink-0" />
              <div>
                <h2 className="text-2xl font-semibold text-black mb-4">1. Definitions and Interpretation</h2>
                <div className="space-y-3 text-gray-700">
                  <p>
                    In these Terms of Service, unless the context otherwise requires:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>"Company"</strong> means The Octopus Labs, a company registered in England and Wales.</li>
                    <li><strong>"Services"</strong> means all services provided by The Octopus Labs including but not limited to web development, web design, e-commerce solutions, mobile application development, SEO, and graphic design services.</li>
                    <li><strong>"Client"</strong> means any person or entity that engages the Company to provide Services.</li>
                    <li><strong>"Agreement"</strong> means these Terms of Service together with any written quotation, proposal, or contract agreed between the Company and the Client.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-4">
              <CheckCircle size={24} className="text-[#027EF2] mt-1 shrink-0" />
              <div>
                <h2 className="text-2xl font-semibold text-black mb-4">2. Acceptance of Terms</h2>
                <div className="space-y-3 text-gray-700">
                  <p>
                    By accessing or using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and all applicable laws and regulations of England and Wales. If you do not agree with any of these terms, you are prohibited from using or accessing our Services.
                  </p>
                  <p>
                    These Terms constitute a legally binding agreement between you and The Octopus Labs. Your use of our Services constitutes acceptance of these Terms.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="bg-[#F0F0F0] rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-4">
              <AlertCircle size={24} className="text-[#E84033] mt-1 shrink-0" />
              <div>
                <h2 className="text-2xl font-semibold text-black mb-4">3. Services and Obligations</h2>
                <div className="space-y-3 text-gray-700">
                  <p>
                    The Company agrees to provide Services to the Client in accordance with the Agreement. The Company will:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Perform Services with reasonable skill and care in accordance with industry standards</li>
                    <li>Comply with all applicable laws and regulations in England and Wales</li>
                    <li>Maintain appropriate professional indemnity insurance</li>
                    <li>Keep the Client informed of progress on projects</li>
                    <li>Deliver Services within agreed timeframes where specified</li>
                  </ul>
                  <p className="mt-4">
                    The Client agrees to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Provide accurate and complete information necessary for the provision of Services</li>
                    <li>Make timely payments in accordance with the payment terms</li>
                    <li>Cooperate with the Company in the provision of Services</li>
                    <li>Obtain all necessary permissions and licenses for content provided to the Company</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-black mb-4">4. Payment Terms</h2>
            <div className="space-y-3 text-gray-700">
              <p>
                Payment terms will be as specified in the individual Agreement or quotation. Unless otherwise agreed:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Payment is due within 30 days of invoice date</li>
                <li>Late payment may incur interest charges at 8% per annum above the Bank of England base rate, in accordance with the Late Payment of Commercial Debts (Interest) Act 1998</li>
                <li>The Company reserves the right to suspend Services in the event of non-payment</li>
                <li>All prices are exclusive of VAT unless otherwise stated</li>
                <li>Payment must be made in GBP (British Pounds) unless otherwise agreed</li>
              </ul>
            </div>
          </div>

          {/* Section 5 */}
          <div className="bg-[#F0F0F0] rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-black mb-4">5. Intellectual Property Rights</h2>
            <div className="space-y-3 text-gray-700">
              <p>
                Unless otherwise agreed in writing:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>All intellectual property rights in work created by the Company shall remain with the Company until full payment is received</li>
                <li>Upon full payment, the Company will assign all intellectual property rights in the commissioned work to the Client</li>
                <li>The Company retains the right to use the work for portfolio and marketing purposes unless otherwise agreed</li>
                <li>Any pre-existing intellectual property rights remain with their respective owners</li>
                <li>The Client warrants that all materials provided to the Company do not infringe any third-party rights</li>
              </ul>
            </div>
          </div>

          {/* Section 6 */}
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-black mb-4">6. Cancellation and Refunds</h2>
            <div className="space-y-3 text-gray-700">
              <p>
                In accordance with the Consumer Contracts (Information, Cancellation and Additional Charges) Regulations 2013:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>If you are a consumer, you have the right to cancel within 14 days of entering into the contract, unless Services have been fully performed with your consent</li>
                <li>For bespoke services, cancellation rights may be limited once work has commenced with your agreement</li>
                <li>Refunds will be processed within 14 days of cancellation, less any costs for work already completed</li>
                <li>For business clients, cancellation terms will be as specified in the individual Agreement</li>
              </ul>
            </div>
          </div>

          {/* Section 7 */}
          <div className="bg-[#F0F0F0] rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-black mb-4">7. Limitation of Liability</h2>
            <div className="space-y-3 text-gray-700">
              <p>
                Subject to applicable law, including the Consumer Rights Act 2015:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>The Company's total liability shall not exceed the total fees paid by the Client in the 12 months preceding the claim</li>
                <li>The Company shall not be liable for indirect, consequential, or special damages</li>
                <li>The Company's liability for death or personal injury caused by negligence is not limited</li>
                <li>The Company is not liable for any loss arising from the Client's failure to provide accurate information</li>
                <li>All warranties, conditions, and terms implied by statute or common law are excluded to the fullest extent permitted by law</li>
              </ul>
            </div>
          </div>

          {/* Section 8 */}
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-black mb-4">8. Data Protection</h2>
            <div className="space-y-3 text-gray-700">
              <p>
                The Company will process personal data in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Personal data will be processed only for the purposes of providing Services</li>
                <li>Data will be kept secure and confidential</li>
                <li>You have rights including access, rectification, erasure, and data portability</li>
                <li>For more information, please see our Privacy Policy</li>
              </ul>
            </div>
          </div>

          {/* Section 9 */}
          <div className="bg-[#F0F0F0] rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-black mb-4">9. Dispute Resolution</h2>
            <div className="space-y-3 text-gray-700">
              <p>
                In the event of a dispute:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Parties will attempt to resolve disputes through good faith negotiation</li>
                <li>If negotiation fails, disputes may be referred to mediation</li>
                <li>These Terms are governed by English law and subject to the exclusive jurisdiction of the English courts</li>
                <li>For consumers, alternative dispute resolution services may be available</li>
              </ul>
            </div>
          </div>

          {/* Section 10 */}
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-black mb-4">10. General Provisions</h2>
            <div className="space-y-3 text-gray-700">
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>These Terms may be updated from time to time, and continued use of Services constitutes acceptance</li>
                <li>If any provision is found to be unenforceable, the remaining provisions shall continue in effect</li>
                <li>These Terms constitute the entire agreement between the parties unless otherwise specified</li>
                <li>No waiver of any term shall be deemed a further waiver of that or any other term</li>
                <li>The Company may assign these Terms, but the Client may not without written consent</li>
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-linear-to-r from-red-600 to-amber-800 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-semibold mb-4">Questions About These Terms?</h2>
            <p className="mb-6 text-lg">
              If you have any questions about these Terms of Service, please contact us.
            </p>
            <Button className="py-6 px-8 bg-white text-black hover:bg-gray-100">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
