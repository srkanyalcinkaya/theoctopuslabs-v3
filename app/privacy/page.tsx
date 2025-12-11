import { Button } from "@/components/ui/button";
import { Shield, Lock, Eye, FileText, AlertCircle, CheckCircle, Database } from "lucide-react";

export default function PrivacyPage() {
  return (
    <main className="flex flex-col items-center justify-center bg-white min-h-screen pt-32 pb-20">
      <section className="flex flex-col items-center justify-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center justify-center mb-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Shield size={32} className="text-[#E84033]" />
            <h1 className="text-4xl md:text-5xl font-bold text-black">
              Privacy Policy
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl">
            We are committed to protecting your privacy and personal data. This policy explains how we collect, use, and safeguard your information.
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
              <FileText size={24} className="text-[#E84033] mt-1 shrink-0" />
              <div>
                <h2 className="text-2xl font-semibold text-black mb-4">1. Introduction</h2>
                <div className="space-y-3 text-gray-700">
                  <p>
                    The Octopus Labs ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services or visit our website.
                  </p>
                  <p>
                    This policy is designed to comply with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018. By using our services, you consent to the data practices described in this policy.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-4">
              <Database size={24} className="text-[#027EF2] mt-1 shrink-0" />
              <div>
                <h2 className="text-2xl font-semibold text-black mb-4">2. Information We Collect</h2>
                <div className="space-y-3 text-gray-700">
                  <p>
                    We may collect and process the following types of personal data:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Contact Information:</strong> Name, email address, phone number, postal address</li>
                    <li><strong>Business Information:</strong> Company name, job title, business requirements</li>
                    <li><strong>Technical Data:</strong> IP address, browser type, device information, website usage data</li>
                    <li><strong>Communication Data:</strong> Correspondence with us, feedback, and survey responses</li>
                    <li><strong>Payment Information:</strong> Billing details (processed securely through payment providers)</li>
                    <li><strong>Project Data:</strong> Information related to your projects and service requirements</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="bg-[#F0F0F0] rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-4">
              <Eye size={24} className="text-[#E84033] mt-1 shrink-0" />
              <div>
                <h2 className="text-2xl font-semibold text-black mb-4">3. How We Use Your Information</h2>
                <div className="space-y-3 text-gray-700">
                  <p>
                    We use your personal data for the following purposes:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>To provide and deliver our services</li>
                    <li>To communicate with you about your projects and inquiries</li>
                    <li>To process payments and manage accounts</li>
                    <li>To send you service-related updates and information</li>
                    <li>To improve our services and website functionality</li>
                    <li>To comply with legal obligations</li>
                    <li>To protect our rights and prevent fraud</li>
                    <li>For marketing purposes (with your consent where required)</li>
                  </ul>
                  <p className="mt-4">
                    We process your data based on legitimate interests, contractual necessity, legal obligations, or your consent, as appropriate under UK GDPR.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-4">
              <Lock size={24} className="text-[#027EF2] mt-1 shrink-0" />
              <div>
                <h2 className="text-2xl font-semibold text-black mb-4">4. Data Security</h2>
                <div className="space-y-3 text-gray-700">
                  <p>
                    We implement appropriate technical and organizational measures to protect your personal data:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>SSL encryption for data transmission</li>
                    <li>Secure servers and databases</li>
                    <li>Access controls and authentication</li>
                    <li>Regular security assessments</li>
                    <li>Staff training on data protection</li>
                    <li>Secure payment processing through PCI DSS compliant providers</li>
                  </ul>
                  <p className="mt-4">
                    However, no method of transmission over the internet is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <div className="bg-[#F0F0F0] rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-black mb-4">5. Data Sharing and Disclosure</h2>
            <div className="space-y-3 text-gray-700">
              <p>
                We may share your personal data with:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Service Providers:</strong> Third-party companies that help us operate our business (hosting, payment processing, analytics)</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulation</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                <li><strong>With Your Consent:</strong> When you have given explicit consent for sharing</li>
              </ul>
              <p className="mt-4">
                We do not sell your personal data to third parties. All third-party service providers are required to maintain appropriate security measures and use data only for specified purposes.
              </p>
            </div>
          </div>

          {/* Section 6 */}
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-4">
              <CheckCircle size={24} className="text-[#027EF2] mt-1 shrink-0" />
              <div>
                <h2 className="text-2xl font-semibold text-black mb-4">6. Your Rights Under UK GDPR</h2>
                <div className="space-y-3 text-gray-700">
                  <p>
                    Under UK GDPR and the Data Protection Act 2018, you have the following rights:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Right of Access:</strong> Request a copy of your personal data we hold</li>
                    <li><strong>Right to Rectification:</strong> Correct inaccurate or incomplete data</li>
                    <li><strong>Right to Erasure:</strong> Request deletion of your data (subject to legal requirements)</li>
                    <li><strong>Right to Restrict Processing:</strong> Limit how we use your data</li>
                    <li><strong>Right to Data Portability:</strong> Receive your data in a structured, machine-readable format</li>
                    <li><strong>Right to Object:</strong> Object to processing based on legitimate interests</li>
                    <li><strong>Rights Related to Automated Decision-Making:</strong> Not to be subject to automated decision-making</li>
                    <li><strong>Right to Withdraw Consent:</strong> Withdraw consent where processing is based on consent</li>
                  </ul>
                  <p className="mt-4">
                    To exercise these rights, please contact us using the details provided at the end of this policy.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 7 */}
          <div className="bg-[#F0F0F0] rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-black mb-4">7. Cookies and Tracking Technologies</h2>
            <div className="space-y-3 text-gray-700">
              <p>
                Our website uses cookies and similar tracking technologies to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Remember your preferences and settings</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Improve website functionality and user experience</li>
                <li>Provide personalized content and advertisements</li>
              </ul>
              <p className="mt-4">
                You can control cookies through your browser settings. However, disabling cookies may affect website functionality. For more information, please see our Cookie Policy.
              </p>
            </div>
          </div>

          {/* Section 8 */}
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-black mb-4">8. Data Retention</h2>
            <div className="space-y-3 text-gray-700">
              <p>
                We retain your personal data only for as long as necessary to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Fulfill the purposes for which it was collected</li>
                <li>Comply with legal, accounting, or reporting requirements</li>
                <li>Resolve disputes and enforce agreements</li>
              </ul>
              <p className="mt-4">
                When data is no longer needed, we will securely delete or anonymize it in accordance with our data retention policy and legal requirements.
              </p>
            </div>
          </div>

          {/* Section 9 */}
          <div className="bg-[#F0F0F0] rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-4">
              <AlertCircle size={24} className="text-[#E84033] mt-1 shrink-0" />
              <div>
                <h2 className="text-2xl font-semibold text-black mb-4">9. International Data Transfers</h2>
                <div className="space-y-3 text-gray-700">
                  <p>
                    Your data may be transferred to and processed in countries outside the UK. When we transfer data internationally, we ensure appropriate safeguards are in place:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Standard Contractual Clauses approved by the UK Information Commissioner's Office (ICO)</li>
                    <li>Adequacy decisions where applicable</li>
                    <li>Other appropriate safeguards as required by UK GDPR</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Section 10 */}
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-black mb-4">10. Children's Privacy</h2>
            <div className="space-y-3 text-gray-700">
              <p>
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal data from children. If you believe we have collected data from a child, please contact us immediately, and we will take steps to delete such information.
              </p>
            </div>
          </div>

          {/* Section 11 */}
          <div className="bg-[#F0F0F0] rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-black mb-4">11. Changes to This Privacy Policy</h2>
            <div className="space-y-3 text-gray-700">
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of significant changes by:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Posting the updated policy on our website</li>
                <li>Sending an email notification (for material changes)</li>
                <li>Updating the "Last updated" date at the top of this policy</li>
              </ul>
              <p className="mt-4">
                We encourage you to review this policy periodically to stay informed about how we protect your data.
              </p>
            </div>
          </div>

          {/* Section 12 */}
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-black mb-4">12. Contact Information and Complaints</h2>
            <div className="space-y-3 text-gray-700">
              <p>
                If you have questions, concerns, or wish to exercise your rights regarding this Privacy Policy, please contact us:
              </p>
              <div className="bg-[#F0F0F0] rounded-lg p-4 mt-4">
                <p className="font-semibold mb-2">The Octopus Labs</p>
                <p>Email: privacy@theoctopuslabs.com</p>
                <p>Phone: 8 800 700-93-29</p>
                <p className="mt-2">Address: [Your Business Address]</p>
              </div>
              <p className="mt-4">
                If you are not satisfied with our response, you have the right to lodge a complaint with the UK Information Commissioner's Office (ICO):
              </p>
              <div className="bg-[#F0F0F0] rounded-lg p-4 mt-2">
                <p><strong>Information Commissioner's Office</strong></p>
                <p>Website: <a href="https://ico.org.uk" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">ico.org.uk</a></p>
                <p>Phone: 0303 123 1113</p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-linear-to-r from-red-600 to-amber-800 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-semibold mb-4">Questions About Privacy?</h2>
            <p className="mb-6 text-lg">
              If you have any questions about this Privacy Policy or our data practices, please contact us.
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

