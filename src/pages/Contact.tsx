import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      fullName: formData.get('fullName') as string,
      email: formData.get('email') as string,
      organization: formData.get('organization') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    };

    try {
      const apiUrl = import.meta.env.PROD 
        ? '/api/contact' 
        : 'http://localhost:3001/api/contact';
        
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitted(true);
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError(result.error || 'Failed to send message. Please try again.');
      }
    } catch (err) {
      setError('Failed to send message. Please make sure the server is running.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-80 pt-28 pb-16 overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-500">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <p className="text-indigo-200 font-semibold uppercase tracking-widest mb-4">Get In Touch</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">Contact Niroga</h1>
          <p className="text-xl text-indigo-50 max-w-3xl leading-relaxed">Have questions? Our team is here to help with any inquiries about our products, clinical partnerships, or support</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    name="fullName"
                    required 
                    disabled={loading}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition disabled:bg-gray-100" 
                    placeholder="Your name" 
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    required 
                    disabled={loading}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition disabled:bg-gray-100" 
                    placeholder="your@email.com" 
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Organization</label>
                  <input 
                    type="text" 
                    name="organization"
                    disabled={loading}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition disabled:bg-gray-100" 
                    placeholder="Your hospital or organization" 
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Subject</label>
                  <select 
                    name="subject"
                    required 
                    disabled={loading}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition disabled:bg-gray-100"
                  >
                    <option value="">Select a subject</option>
                    <option value="product">Product Information</option>
                    <option value="clinical">Clinical Partnership</option>
                    <option value="support">Technical Support</option>
                    <option value="sales">Sales Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Message</label>
                  <textarea 
                    name="message"
                    required 
                    rows={5} 
                    disabled={loading}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition disabled:bg-gray-100" 
                    placeholder="Tell us how we can help..."
                  ></textarea>
                </div>

                {error && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                    <AlertCircle className="text-red-600 shrink-0 mt-0.5" size={20} />
                    <p className="text-red-800 text-sm">{error}</p>
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-xl transition flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : submitted ? (
                    <>
                      <CheckCircle size={20} />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Other ways to reach us</h2>
              </div>

              {/* Email Contact */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-200 hover:border-indigo-400 transition">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Contact Us</h3>
                      <a href="mailto:yasantha@niroga.ai" className="text-indigo-600 hover:text-indigo-700 font-semibold">
                        yasantha@niroga.ai
                      </a>
                      <p className="text-gray-600 text-sm mt-1">For all inquiries including general questions, partnerships, and investor relations</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-4">Quick Links</h3>
                <ul className="space-y-3">
                  <li><a href="/" className="text-indigo-600 hover:text-indigo-700 font-medium">← Back to Home</a></li>
                  <li><a href="/technology" className="text-indigo-600 hover:text-indigo-700 font-medium">Learn About Technology</a></li>
                  <li><a href="/devices" className="text-indigo-600 hover:text-indigo-700 font-medium">View Products</a></li>
                  <li><a href="/solutions" className="text-indigo-600 hover:text-indigo-700 font-medium">Clinical Solutions</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Find answers to common questions</p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "How can I order Niroga devices?",
                a: "Visit order.niroga.ai to browse our product catalog and place an order. For bulk or enterprise orders, please contact our sales team at info@niroga.ai"
              },
              {
                q: "What is the typical delivery timeline?",
                a: "Standard orders ship within 5-7 business days. Clinical installations may require additional setup time. Contact us for custom timelines."
              },
              {
                q: "Do you offer technical support?",
                a: "Yes, we provide 24/7 technical support for all customers. Contact support or email info@niroga.ai for assistance."
              },
              {
                q: "Is Niroga HIPAA compliant?",
                a: "Yes, all Niroga devices and cloud infrastructure are HIPAA and GDPR compliant with bank-grade encryption."
              },
              {
                q: "Can I integrate Niroga with our hospital EHR?",
                a: "Absolutely. We support Epic, Cerner, and custom integrations via HL7/FHIR APIs. Contact clinical@niroga.ai to discuss integration options."
              },
              {
                q: "What training is available for healthcare staff?",
                a: "We provide comprehensive online and on-site training for clinical teams. Custom training programs are available upon request."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-indigo-400 transition">
                <h3 className="font-bold text-lg text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Hours */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border-2 border-blue-200">
              <div className="text-5xl font-black text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text mb-4">24/7</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Technical Support</h3>
              <p className="text-gray-600">Emergency support available around the clock for critical issues</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-200">
              <div className="text-5xl font-black text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text mb-4">&lt;1hr</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Response Time</h3>
              <p className="text-gray-600">Most inquiries responded to within 1 hour during business hours</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-200">
              <div className="text-5xl font-black text-transparent bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text mb-4">∞</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Dedicated Team</h3>
              <p className="text-gray-600">Expert team ready to assist with technical and clinical questions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-indigo-50 mb-8">Join healthcare providers transforming patient care with Niroga</p>
          <a href="https://order.niroga.ai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-10 py-4 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-indigo-50 transition">
            Order Now or Learn More
          </a>
        </div>
      </section>
    </main>
  );
}
