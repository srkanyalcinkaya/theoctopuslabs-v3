import type { Metadata } from "next";
import { LegalPage } from "@/components/site/legal-page";

export const metadata: Metadata = {
  title: "Payment Methods - The Octopus Labs | Secure Payment Options",
  description: "Secure and convenient payment options at The Octopus Labs. We accept credit cards, debit cards, bank transfers, and online payments. All transactions processed in accordance with UK payment regulations.",
  keywords: "payment methods, secure payment, credit card payment, bank transfer, payment terms, UK payment",
  openGraph: {
    title: "Payment Methods - The Octopus Labs | Secure Payment Options",
    description: "Secure and convenient payment options. We accept credit cards, debit cards, bank transfers, and online payments.",
    url: "https://theoctopuslabs.com/payment",
    siteName: "The Octopus Labs",
    images: [
      {
        url: "/og-image-payment.jpg",
        width: 1200,
        height: 630,
        alt: "Payment Methods - The Octopus Labs",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Payment Methods - The Octopus Labs",
    description: "Secure and convenient payment options. All transactions processed securely.",
    images: ["/og-image-payment.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const toc = [
  { id: "accepted-payment-methods", label: "Accepted Payment Methods" },
  { id: "payment-terms", label: "Payment Terms" },
  { id: "late-payment-charges", label: "Late Payment Charges" },
  { id: "payment-security", label: "Payment Security" },
  { id: "refund-policy", label: "Refund Policy" },
  { id: "payment-disputes", label: "Payment Disputes" },
  { id: "corporate-payment-options", label: "Corporate Payment Options" },
];

export default function PaymentPage() {
  return (
    <LegalPage
      title="Payment Methods"
      intro="We offer secure and convenient payment options. All transactions are processed in accordance with UK payment regulations."
      toc={toc}
      contactTitle="Questions about payment?"
      contactBody="If you have any questions about payment methods or terms, please don't hesitate to contact us."
    >
      <h2 id="accepted-payment-methods">Accepted Payment Methods</h2>
      <h3>Credit & Debit Cards</h3>
      <p>
        We accept all major credit and debit cards including Visa, Mastercard, and American Express.
      </p>
      <h3>Bank Transfer</h3>
      <p>
        Direct bank transfers (BACS) are accepted. Payment details will be provided on your invoice.
      </p>
      <h3>Online Payment</h3>
      <p>
        Secure online payments through our encrypted payment gateway.
      </p>
      <h3>Invoice Payment</h3>
      <p>
        Corporate clients may be eligible for invoice-based payment terms.
      </p>
      <h2 id="payment-terms">Payment Terms</h2>
      <p>
        Our standard payment terms are as follows:
      </p>
      <ul>
        <li><strong>Payment Due Date:</strong> Payment is due within 30 days of invoice date unless otherwise agreed</li>
        <li><strong>Currency:</strong> All payments should be made in GBP (British Pounds) unless otherwise specified</li>
        <li><strong>VAT:</strong> All prices are exclusive of VAT unless otherwise stated. VAT will be added at the current UK rate (20%)</li>
        <li><strong>Deposits:</strong> For projects over £1,000, a deposit may be required before work commences</li>
        <li><strong>Final Payment:</strong> Final payment is due upon completion and acceptance of the work</li>
      </ul>
      <h2 id="late-payment-charges">Late Payment Charges</h2>
      <p>
        In accordance with the Late Payment of Commercial Debts (Interest) Act 1998:
      </p>
      <ul>
        <li>Late payments may incur interest charges at 8% per annum above the Bank of England base rate</li>
        <li>A fixed sum of £40 (for debts under £1,000), £70 (for debts between £1,000 and £10,000), or £100 (for debts over £10,000) may be charged for late payment</li>
        <li>We reserve the right to suspend services in the event of non-payment</li>
        <li>We may recover reasonable costs incurred in recovering overdue payments</li>
      </ul>
      <h2 id="payment-security">Payment Security</h2>
      <p>
        We take payment security seriously:
      </p>
      <ul>
        <li>All online payments are processed through PCI DSS compliant payment gateways</li>
        <li>We use SSL encryption to protect your payment information</li>
        <li>We do not store full credit card details on our servers</li>
        <li>All payment transactions are monitored for fraudulent activity</li>
        <li>We comply with the Payment Card Industry Data Security Standard (PCI DSS)</li>
      </ul>
      <h2 id="refund-policy">Refund Policy</h2>
      <p>
        Our refund policy is in accordance with UK consumer protection laws:
      </p>
      <ul>
        <li>If you are a consumer, you have the right to cancel within 14 days of entering into a contract (subject to certain exceptions)</li>
        <li>For bespoke services, refunds may be limited once work has commenced with your agreement</li>
        <li>Refunds will be processed within 14 days of cancellation or agreement</li>
        <li>Refunds will be made to the original payment method where possible</li>
        <li>Partial refunds may apply if work has already been completed</li>
        <li>For business clients, refund terms will be as specified in the individual Agreement</li>
      </ul>
      <h2 id="payment-disputes">Payment Disputes</h2>
      <p>
        If you have a dispute regarding a payment:
      </p>
      <ul>
        <li>Please contact us immediately to discuss the issue</li>
        <li>We will investigate all payment disputes promptly and fairly</li>
        <li>We aim to resolve disputes within 14 working days</li>
        <li>If you are a consumer, you may have additional rights under the Consumer Rights Act 2015</li>
        <li>For unresolved disputes, you may contact your card issuer or bank</li>
        <li>Alternative dispute resolution services may be available</li>
      </ul>
      <h2 id="corporate-payment-options">Corporate Payment Options</h2>
      <p>
        For corporate clients, we offer flexible payment arrangements:
      </p>
      <ul>
        <li>Invoice-based payment terms (subject to credit checks)</li>
        <li>Payment plans for larger projects</li>
        <li>Monthly retainer arrangements</li>
        <li>Direct debit options</li>
        <li>Custom payment schedules for long-term projects</li>
      </ul>
      <p>
        Please contact us to discuss corporate payment options that suit your business needs.
      </p>
    </LegalPage>
  );
}
