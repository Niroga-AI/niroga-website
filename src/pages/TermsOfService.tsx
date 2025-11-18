import SEOHead, { pageMetadata } from '../components/SEOHead';

export default function TermsOfService() {
  return (
    <>
      <SEOHead {...pageMetadata.termsOfService} />
      <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
          <section>
            <p className="text-gray-600 mb-4">
              <strong>Last Updated:</strong> November 18, 2025
            </p>
            <p className="text-gray-700 leading-relaxed">
              Welcome to Niroga.ai. These Terms of Service ("Terms") govern your access to and use of Niroga.ai's AI-powered health solutions, devices, software, and services (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              By creating an account, accessing our Services, or using our devices, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you must not use our Services.
            </p>
            <p className="text-gray-700 leading-relaxed">
              These Terms constitute a legally binding agreement between you and Niroga.ai.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Medical Disclaimer</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
              <p className="text-gray-800 font-semibold mb-2">IMPORTANT MEDICAL DISCLAIMER</p>
              <p className="text-gray-700 leading-relaxed">
                Niroga.ai's Services, devices, and AI-powered solutions are designed to assist and support healthcare professionals and individuals in health monitoring and decision-making. However, our Services:
              </p>
            </div>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Do NOT replace professional medical advice, diagnosis, or treatment</li>
              <li>Should NOT be used for medical emergencies</li>
              <li>Are tools to support, not substitute, healthcare providers</li>
              <li>May not be suitable for all medical conditions or situations</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-3">
              Always seek the advice of your physician or qualified healthcare provider with any questions regarding a medical condition. Never disregard professional medical advice or delay seeking it because of information obtained through our Services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Eligibility and Account Registration</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">3.1 Eligibility</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              To use our Services, you must:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Be at least 18 years of age (or the age of majority in your jurisdiction)</li>
              <li>Have the legal capacity to enter into binding contracts</li>
              <li>Not be prohibited from using the Services under applicable laws</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">3.2 Account Security</h3>
            <p className="text-gray-700 leading-relaxed">
              You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must immediately notify us of any unauthorized access or security breach.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Use of Services</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">4.1 License Grant</h3>
            <p className="text-gray-700 leading-relaxed">
              Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to access and use our Services for their intended purpose.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">4.2 Prohibited Uses</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              You agree NOT to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Use the Services for any illegal or unauthorized purpose</li>
              <li>Violate any local, state, national, or international law</li>
              <li>Attempt to reverse engineer, decompile, or extract source code from our software</li>
              <li>Interfere with or disrupt the Services or servers</li>
              <li>Access data not intended for you or log into accounts you are not authorized to access</li>
              <li>Use the Services to harm, threaten, or harass others</li>
              <li>Transmit viruses, malware, or other malicious code</li>
              <li>Sell, rent, lease, or sublicense access to the Services</li>
              <li>Use the Services to make clinical decisions without proper medical supervision</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Device Usage and Maintenance</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              If you use Niroga.ai devices:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Follow all instructions and guidelines provided in the device manual</li>
              <li>Maintain devices according to specified maintenance schedules</li>
              <li>Report any malfunctions or issues immediately</li>
              <li>Use only authorized accessories and components</li>
              <li>Ensure devices are used by trained personnel (where applicable)</li>
              <li>Comply with all applicable safety regulations and standards</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Data and Privacy</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Your use of the Services is also governed by our Privacy Policy. By using our Services, you consent to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Collection and processing of your data as described in the Privacy Policy</li>
              <li>Use of de-identified data for research and AI algorithm improvement</li>
              <li>Data storage and processing in accordance with HIPAA and other regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Intellectual Property Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              All intellectual property rights in the Services, including software, algorithms, designs, trademarks, and content, are owned by Niroga.ai or our licensors. You acknowledge that:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>These Terms do not transfer any ownership rights to you</li>
              <li>You may not use our trademarks without prior written permission</li>
              <li>All feedback, suggestions, and ideas you provide may be used by us without compensation</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Payment and Billing</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">8.1 Fees</h3>
            <p className="text-gray-700 leading-relaxed">
              Certain Services may require payment of fees. You agree to pay all applicable fees as described at the time of purchase or subscription.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">8.2 Subscriptions</h3>
            <p className="text-gray-700 leading-relaxed">
              For subscription-based Services, you will be billed on a recurring basis until you cancel. Subscriptions automatically renew unless canceled before the renewal date.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">8.3 Refunds</h3>
            <p className="text-gray-700 leading-relaxed">
              Refund policies vary by service and jurisdiction. Please contact our support team for refund requests. Hardware devices may have different return policies as specified at the time of purchase.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Warranties and Disclaimers</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">9.1 Limited Warranty</h3>
            <p className="text-gray-700 leading-relaxed">
              We warrant that our Services will perform substantially in accordance with our documentation under normal use. Hardware devices are covered by separate limited warranties as specified in device documentation.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">9.2 Disclaimer</h3>
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-gray-700 leading-relaxed uppercase font-semibold mb-2">
                EXCEPT AS EXPRESSLY PROVIDED, THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We disclaim all warranties, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the Services will be uninterrupted, error-free, or completely secure.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Limitation of Liability</h2>
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-3 uppercase font-semibold">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, NIROGA.AI SHALL NOT BE LIABLE FOR:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES</li>
                <li>LOSS OF PROFITS, REVENUE, DATA, OR USE</li>
                <li>MEDICAL OUTCOMES OR TREATMENT DECISIONS</li>
                <li>DAMAGES RESULTING FROM UNAUTHORIZED ACCESS TO YOUR ACCOUNT</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-3">
                OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID TO US IN THE 12 MONTHS PRECEDING THE CLAIM.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Indemnification</h2>
            <p className="text-gray-700 leading-relaxed">
              You agree to indemnify, defend, and hold harmless Niroga.ai, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from your use of the Services, violation of these Terms, or violation of any rights of another party.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Term and Termination</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              These Terms remain in effect until terminated. We may suspend or terminate your access to the Services:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>For violation of these Terms</li>
              <li>For fraudulent, abusive, or illegal activity</li>
              <li>At our discretion with or without notice</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-3">
              You may terminate your account at any time by contacting support. Upon termination, your right to use the Services immediately ceases.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Regulatory Compliance</h2>
            <p className="text-gray-700 leading-relaxed">
              Our devices and services comply with applicable regulatory requirements, including FDA regulations (where applicable), CE marking requirements, and other international medical device standards. You are responsible for ensuring compliance with local regulations in your jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Governing Law and Dispute Resolution</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">14.1 Governing Law</h3>
            <p className="text-gray-700 leading-relaxed">
              These Terms are governed by the laws of [Your Jurisdiction], without regard to conflict of law principles.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">14.2 Dispute Resolution</h3>
            <p className="text-gray-700 leading-relaxed">
              Any disputes arising from these Terms or the Services shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association, except where prohibited by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">15. Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify these Terms at any time. We will notify you of material changes via email or through the Services. Your continued use of the Services after such modifications constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">16. Miscellaneous</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li><strong>Severability:</strong> If any provision is found unenforceable, the remaining provisions continue in effect</li>
              <li><strong>Waiver:</strong> Failure to enforce any right does not constitute a waiver of that right</li>
              <li><strong>Assignment:</strong> You may not assign these Terms without our consent</li>
              <li><strong>Entire Agreement:</strong> These Terms, together with the Privacy Policy, constitute the entire agreement</li>
              <li><strong>Force Majeure:</strong> We are not liable for delays or failures due to circumstances beyond our control</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">17. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              If you have questions about these Terms, please contact us:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg text-gray-700">
              <p><strong>Niroga.ai</strong></p>
              <p>Email: legal@niroga.ai</p>
              <p>Support: support@niroga.ai</p>
            </div>
          </section>

          <section className="border-t border-gray-200 pt-6">
            <p className="text-sm text-gray-600 italic">
              By using Niroga.ai's Services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy.
            </p>
          </section>
        </div>
      </div>
    </div>
    </>
  );
}
