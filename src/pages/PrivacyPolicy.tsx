import SEOHead, { pageMetadata } from '../components/SEOHead';

export default function PrivacyPolicy() {
  return (
    <>
      <SEOHead {...pageMetadata.privacyPolicy} />
      <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
          <section>
            <p className="text-gray-600 mb-4">
              <strong>Last Updated:</strong> November 18, 2025
            </p>
            <p className="text-gray-700 leading-relaxed">
              Niroga.ai ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered health solutions and services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">1.1 Personal Information</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              We may collect personal information that you provide directly to us, including but not limited to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Name, email address, and contact information</li>
              <li>Account credentials</li>
              <li>Billing and payment information</li>
              <li>Professional information (for healthcare providers)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">1.2 Health Information</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              With your explicit consent, we may collect:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Medical history and health records</li>
              <li>Diagnostic data from our devices</li>
              <li>Treatment plans and outcomes</li>
              <li>Biometric data collected through our devices</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">1.3 Technical Information</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              We automatically collect certain information, including:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Device information and identifiers</li>
              <li>IP address and location data</li>
              <li>Usage data and analytics</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              We use the collected information for the following purposes:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Providing and improving our health solutions and services</li>
              <li>Processing transactions and managing your account</li>
              <li>Conducting research and development of AI algorithms</li>
              <li>Personalizing your experience and providing recommendations</li>
              <li>Communicating with you about services, updates, and support</li>
              <li>Ensuring security and preventing fraud</li>
              <li>Complying with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Data Security and HIPAA Compliance</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              We implement industry-standard security measures to protect your information:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>End-to-end encryption for health data transmission</li>
              <li>HIPAA-compliant data storage and handling procedures</li>
              <li>Regular security audits and assessments</li>
              <li>Access controls and authentication mechanisms</li>
              <li>Data breach notification procedures</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-3">
              For healthcare providers and covered entities, we maintain Business Associate Agreements (BAAs) as required under HIPAA regulations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Information Sharing and Disclosure</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              We do not sell your personal or health information. We may share information only in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li><strong>With Your Consent:</strong> When you explicitly authorize us to share information</li>
              <li><strong>Healthcare Providers:</strong> With your designated healthcare providers for treatment purposes</li>
              <li><strong>Service Providers:</strong> With trusted third-party service providers who assist in our operations</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect rights and safety</li>
              <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Your Rights and Choices</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              You have the following rights regarding your information:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li><strong>Access:</strong> Request access to your personal and health information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your information (subject to legal obligations)</li>
              <li><strong>Portability:</strong> Request transfer of your data in a machine-readable format</li>
              <li><strong>Opt-Out:</strong> Opt out of marketing communications</li>
              <li><strong>Consent Withdrawal:</strong> Withdraw consent for data processing</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-3">
              To exercise these rights, please contact us at privacy@niroga.ai.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Data Retention</h2>
            <p className="text-gray-700 leading-relaxed">
              We retain your information for as long as necessary to provide our services and comply with legal obligations. Health information is retained in accordance with HIPAA requirements and applicable medical records retention laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              Our services are not intended for individuals under 13 years of age. We do not knowingly collect personal information from children. For minors between 13-18, we require parental or guardian consent before collecting any information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. International Data Transfers</h2>
            <p className="text-gray-700 leading-relaxed">
              If you are accessing our services from outside the United States, please be aware that your information may be transferred to, stored, and processed in the United States. We ensure appropriate safeguards are in place for international data transfers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Updates to This Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. Your continued use of our services after such modifications constitutes your acceptance of the updated Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              If you have questions or concerns about this Privacy Policy, please contact us:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg text-gray-700">
              <p><strong>Niroga.ai</strong></p>
              <p>Email: privacy@niroga.ai</p>
            </div>
          </section>

          <section className="border-t border-gray-200 pt-6">
            <p className="text-sm text-gray-600 italic">
              This Privacy Policy complies with applicable data protection laws including HIPAA, GDPR (where applicable), and CCPA. For healthcare-related services, we maintain strict compliance with all relevant medical privacy regulations.
            </p>
          </section>
        </div>
      </div>
    </div>
    </>
  );
}
