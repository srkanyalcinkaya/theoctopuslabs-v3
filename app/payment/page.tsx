import { Button } from "@/components/ui/button";
import { CreditCard, Shield, CheckCircle, AlertCircle, Lock, Banknote } from "lucide-react";

export default function PaymentPage() {
  return (
    <main className="flex flex-col items-center justify-center bg-white min-h-screen pt-32 pb-20">
      <section className="flex flex-col items-center justify-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center justify-center mb-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <CreditCard size={32} className="text-[#E84033]" />
            <h1 className="text-4xl md:text-5xl font-bold text-black">
              Payment Methods
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl">
            We offer secure and convenient payment options. All transactions are processed in accordance with UK payment regulations.
          </p>
        </div>

        {/* Content Sections */}
        <div className="w-full space-y-8">
          {/* Accepted Payment Methods */}
          <div className="bg-linear-to-r from-red-600 to-amber-800 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-6">Accepted Payment Methods</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <CreditCard size={24} />
                  <h3 className="text-xl font-semibold">Credit & Debit Cards</h3>
                </div>
                <p className="text-sm opacity-90">
                  We accept all major credit and debit cards including Visa, Mastercard, and American Express.
                </p>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Banknote size={24} />
                  <h3 className="text-xl font-semibold">Bank Transfer</h3>
                </div>
                <p className="text-sm opacity-90">
                  Direct bank transfers (BACS) are accepted. Payment details will be provided on your invoice.
                </p>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Lock size={24} />
                  <h3 className="text-xl font-semibold">Online Payment</h3>
                </div>
                <p className="text-sm opacity-90">
                  Secure online payments through our encrypted payment gateway.
                </p>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle size={24} />
                  <h3 className="text-xl font-semibold">Invoice Payment</h3>
                </div>
                <p className="text-sm opacity-90">
                  Corporate clients may be eligible for invoice-based payment terms.
                </p>
              </div>
            </div>
          </div>

          {/* Payment Terms */}
          <div className="bg-[#F0F0F0] rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-4">
              <AlertCircle size={24} className="text-[#E84033] mt-1 shrink-0" />
              <div>
                <h2 className="text-2xl font-semibold text-black mb-4">Payment Terms</h2>
                <div className="space-y-3 text-gray-700">
                  <p>
                    Our standard payment terms are as follows:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Payment Due Date:</strong> Payment is due within 30 days of invoice date unless otherwise agreed</li>
                    <li><strong>Currency:</strong> All payments should be made in GBP (British Pounds) unless otherwise specified</li>
                    <li><strong>VAT:</strong> All prices are exclusive of VAT unless otherwise stated. VAT will be added at the current UK rate (20%)</li>
                    <li><strong>Deposits:</strong> For projects over £1,000, a deposit may be required before work commences</li>
                    <li><strong>Final Payment:</strong> Final payment is due upon completion and acceptance of the work</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Late Payment */}
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-4">
              <AlertCircle size={24} className="text-[#E84033] mt-1 shrink-0" />
              <div>
                <h2 className="text-2xl font-semibold text-black mb-4">Late Payment Charges</h2>
                <div className="space-y-3 text-gray-700">
                  <p>
                    In accordance with the Late Payment of Commercial Debts (Interest) Act 1998:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Late payments may incur interest charges at 8% per annum above the Bank of England base rate</li>
                    <li>A fixed sum of £40 (for debts under £1,000), £70 (for debts between £1,000 and £10,000), or £100 (for debts over £10,000) may be charged for late payment</li>
                    <li>We reserve the right to suspend services in the event of non-payment</li>
                    <li>We may recover reasonable costs incurred in recovering overdue payments</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Security */}
          <div className="bg-[#F0F0F0] rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-4">
              <Shield size={24} className="text-[#027EF2] mt-1 shrink-0" />
              <div>
                <h2 className="text-2xl font-semibold text-black mb-4">Payment Security</h2>
                <div className="space-y-3 text-gray-700">
                  <p>
                    We take payment security seriously:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>All online payments are processed through PCI DSS compliant payment gateways</li>
                    <li>We use SSL encryption to protect your payment information</li>
                    <li>We do not store full credit card details on our servers</li>
                    <li>All payment transactions are monitored for fraudulent activity</li>
                    <li>We comply with the Payment Card Industry Data Security Standard (PCI DSS)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Refunds */}
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-4">
              <CheckCircle size={24} className="text-[#027EF2] mt-1 shrink-0" />
              <div>
                <h2 className="text-2xl font-semibold text-black mb-4">Refund Policy</h2>
                <div className="space-y-3 text-gray-700">
                  <p>
                    Our refund policy is in accordance with UK consumer protection laws:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>If you are a consumer, you have the right to cancel within 14 days of entering into a contract (subject to certain exceptions)</li>
                    <li>For bespoke services, refunds may be limited once work has commenced with your agreement</li>
                    <li>Refunds will be processed within 14 days of cancellation or agreement</li>
                    <li>Refunds will be made to the original payment method where possible</li>
                    <li>Partial refunds may apply if work has already been completed</li>
                    <li>For business clients, refund terms will be as specified in the individual Agreement</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Dispute Resolution */}
          <div className="bg-[#F0F0F0] rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-black mb-4">Payment Disputes</h2>
            <div className="space-y-3 text-gray-700">
              <p>
                If you have a dispute regarding a payment:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Please contact us immediately to discuss the issue</li>
                <li>We will investigate all payment disputes promptly and fairly</li>
                <li>We aim to resolve disputes within 14 working days</li>
                <li>If you are a consumer, you may have additional rights under the Consumer Rights Act 2015</li>
                <li>For unresolved disputes, you may contact your card issuer or bank</li>
                <li>Alternative dispute resolution services may be available</li>
              </ul>
            </div>
          </div>

          {/* Corporate Payment Options */}
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-black mb-4">Corporate Payment Options</h2>
            <div className="space-y-3 text-gray-700">
              <p>
                For corporate clients, we offer flexible payment arrangements:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Invoice-based payment terms (subject to credit checks)</li>
                <li>Payment plans for larger projects</li>
                <li>Monthly retainer arrangements</li>
                <li>Direct debit options</li>
                <li>Custom payment schedules for long-term projects</li>
              </ul>
              <p className="mt-4">
                Please contact us to discuss corporate payment options that suit your business needs.
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-linear-to-r from-blue-400 to-blue-800 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-semibold mb-4">Questions About Payment?</h2>
            <p className="mb-6 text-lg">
              If you have any questions about payment methods or terms, please don't hesitate to contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="py-6 px-8 bg-white text-black hover:bg-gray-100">
                Contact Us
              </Button>
              <Button variant="outline" className="py-6 px-8 border-white text-white hover:bg-white/10">
                View Terms of Service
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
