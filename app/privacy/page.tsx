import type { Metadata } from "next";
import { LegalPage } from "@/components/site/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy - The Octopus Labs | Data Protection & Privacy",
  description: "The Octopus Labs Privacy Policy. Learn how we collect, use, and safeguard your personal data in accordance with UK GDPR and the Data Protection Act 2018. Your privacy rights and data protection.",
  keywords: "privacy policy, data protection, GDPR, UK GDPR, privacy rights, data security, personal data",
  openGraph: {
    title: "Privacy Policy - The Octopus Labs | Data Protection & Privacy",
    description: "Learn how we collect, use, and safeguard your personal data in accordance with UK GDPR and the Data Protection Act 2018.",
    url: "https://theoctopuslabs.com/privacy",
    siteName: "The Octopus Labs",
    images: [
      {
        url: "/og-image-privacy.jpg",
        width: 1200,
        height: 630,
        alt: "Privacy Policy - The Octopus Labs",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy - The Octopus Labs",
    description: "Learn how we collect, use, and safeguard your personal data in accordance with UK GDPR.",
    images: ["/og-image-privacy.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const toc = [
  { id: "introduction", label: "1. Introduction" },
  { id: "information-we-collect", label: "2. Information We Collect" },
  { id: "how-we-use-your-information", label: "3. How We Use Your Information" },
  { id: "data-security", label: "4. Data Security" },
  { id: "data-sharing-and-disclosure", label: "5. Data Sharing and Disclosure" },
  { id: "your-rights-under-uk-gdpr", label: "6. Your Rights Under UK GDPR" },
  { id: "cookies-and-tracking-technologies", label: "7. Cookies and Tracking Technologies" },
  { id: "data-retention", label: "8. Data Retention" },
  { id: "international-data-transfers", label: "9. International Data Transfers" },
  { id: "children-s-privacy", label: "10. Children's Privacy" },
  { id: "changes-to-this-privacy-policy", label: "11. Changes to This Privacy Policy" },
  { id: "contact-information-and-complaints", label: "12. Contact Information and Complaints" },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="We are committed to protecting your privacy and personal data. This policy explains how we collect, use, and safeguard your information."
      showUpdated
      toc={toc}
      contactTitle="Questions about privacy?"
      contactBody="If you have any questions about this Privacy Policy or our data practices, please contact us."
    >
      <h2 id="introduction">1. Introduction</h2>
      <p>
        The Octopus Labs (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services or visit our website.
      </p>
      <p>
        This policy is designed to comply with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018. By using our services, you consent to the data practices described in this policy.
      </p>
      <h2 id="information-we-collect">2. Information We Collect</h2>
      <p>
        We may collect and process the following types of personal data:
      </p>
      <ul>
        <li><strong>Contact Information:</strong> Name, email address, phone number, postal address</li>
        <li><strong>Business Information:</strong> Company name, job title, business requirements</li>
        <li><strong>Technical Data:</strong> IP address, browser type, device information, website usage data</li>
        <li><strong>Communication Data:</strong> Correspondence with us, feedback, and survey responses</li>
        <li><strong>Payment Information:</strong> Billing details (processed securely through payment providers)</li>
        <li><strong>Project Data:</strong> Information related to your projects and service requirements</li>
      </ul>
      <h2 id="how-we-use-your-information">3. How We Use Your Information</h2>
      <p>
        We use your personal data for the following purposes:
      </p>
      <ul>
        <li>To provide and deliver our services</li>
        <li>To communicate with you about your projects and inquiries</li>
        <li>To process payments and manage accounts</li>
        <li>To send you service-related updates and information</li>
        <li>To improve our services and website functionality</li>
        <li>To comply with legal obligations</li>
        <li>To protect our rights and prevent fraud</li>
        <li>For marketing purposes (with your consent where required)</li>
      </ul>
      <p>
        We process your data based on legitimate interests, contractual necessity, legal obligations, or your consent, as appropriate under UK GDPR.
      </p>
      <h2 id="data-security">4. Data Security</h2>
      <p>
        We implement appropriate technical and organizational measures to protect your personal data:
      </p>
      <ul>
        <li>SSL encryption for data transmission</li>
        <li>Secure servers and databases</li>
        <li>Access controls and authentication</li>
        <li>Regular security assessments</li>
        <li>Staff training on data protection</li>
        <li>Secure payment processing through PCI DSS compliant providers</li>
      </ul>
      <p>
        However, no method of transmission over the internet is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.
      </p>
      <h2 id="data-sharing-and-disclosure">5. Data Sharing and Disclosure</h2>
      <p>
        We may share your personal data with:
      </p>
      <ul>
        <li><strong>Service Providers:</strong> Third-party companies that help us operate our business (hosting, payment processing, analytics)</li>
        <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulation</li>
        <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
        <li><strong>With Your Consent:</strong> When you have given explicit consent for sharing</li>
      </ul>
      <p>
        We do not sell your personal data to third parties. All third-party service providers are required to maintain appropriate security measures and use data only for specified purposes.
      </p>
      <h2 id="your-rights-under-uk-gdpr">6. Your Rights Under UK GDPR</h2>
      <p>
        Under UK GDPR and the Data Protection Act 2018, you have the following rights:
      </p>
      <ul>
        <li><strong>Right of Access:</strong> Request a copy of your personal data we hold</li>
        <li><strong>Right to Rectification:</strong> Correct inaccurate or incomplete data</li>
        <li><strong>Right to Erasure:</strong> Request deletion of your data (subject to legal requirements)</li>
        <li><strong>Right to Restrict Processing:</strong> Limit how we use your data</li>
        <li><strong>Right to Data Portability:</strong> Receive your data in a structured, machine-readable format</li>
        <li><strong>Right to Object:</strong> Object to processing based on legitimate interests</li>
        <li><strong>Rights Related to Automated Decision-Making:</strong> Not to be subject to automated decision-making</li>
        <li><strong>Right to Withdraw Consent:</strong> Withdraw consent where processing is based on consent</li>
      </ul>
      <p>
        To exercise these rights, please contact us using the details provided at the end of this policy.
      </p>
      <h2 id="cookies-and-tracking-technologies">7. Cookies and Tracking Technologies</h2>
      <p>
        Our website uses cookies and similar tracking technologies to:
      </p>
      <ul>
        <li>Remember your preferences and settings</li>
        <li>Analyze website traffic and usage patterns</li>
        <li>Improve website functionality and user experience</li>
        <li>Provide personalized content and advertisements</li>
      </ul>
      <p>
        You can control cookies through your browser settings. However, disabling cookies may affect website functionality. For more information, please see our Cookie Policy.
      </p>
      <h2 id="data-retention">8. Data Retention</h2>
      <p>
        We retain your personal data only for as long as necessary to:
      </p>
      <ul>
        <li>Fulfill the purposes for which it was collected</li>
        <li>Comply with legal, accounting, or reporting requirements</li>
        <li>Resolve disputes and enforce agreements</li>
      </ul>
      <p>
        When data is no longer needed, we will securely delete or anonymize it in accordance with our data retention policy and legal requirements.
      </p>
      <h2 id="international-data-transfers">9. International Data Transfers</h2>
      <p>
        Your data may be transferred to and processed in countries outside the UK. When we transfer data internationally, we ensure appropriate safeguards are in place:
      </p>
      <ul>
        <li>Standard Contractual Clauses approved by the UK Information Commissioner&apos;s Office (ICO)</li>
        <li>Adequacy decisions where applicable</li>
        <li>Other appropriate safeguards as required by UK GDPR</li>
      </ul>
      <h2 id="children-s-privacy">10. Children&apos;s Privacy</h2>
      <p>
        Our services are not directed to individuals under the age of 18. We do not knowingly collect personal data from children. If you believe we have collected data from a child, please contact us immediately, and we will take steps to delete such information.
      </p>
      <h2 id="changes-to-this-privacy-policy">11. Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of significant changes by:
      </p>
      <ul>
        <li>Posting the updated policy on our website</li>
        <li>Sending an email notification (for material changes)</li>
        <li>Updating the &quot;Last updated&quot; date at the top of this policy</li>
      </ul>
      <p>
        We encourage you to review this policy periodically to stay informed about how we protect your data.
      </p>
      <h2 id="contact-information-and-complaints">12. Contact Information and Complaints</h2>
      <p>
        If you have questions, concerns, or wish to exercise your rights regarding this Privacy Policy, please contact us:
      </p>
      <address>
        <strong>The Octopus Labs</strong>
        <br />
        Email: <a href="mailto:privacy@theoctopuslabs.com">privacy@theoctopuslabs.com</a>
        <br />
        Phone: 8 800 700-93-29
        <br />
        Address: [Your Business Address]
      </address>
      <p>
        If you are not satisfied with our response, you have the right to lodge a complaint with the UK Information Commissioner&apos;s Office (ICO):
      </p>
      <address>
        <strong>Information Commissioner&apos;s Office</strong>
        <br />
        Website: <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">ico.org.uk</a>
        <br />
        Phone: 0303 123 1113
      </address>
    </LegalPage>
  );
}
