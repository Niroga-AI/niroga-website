import { MessageCircle, Phone, Mail, Clock, Search, HelpCircle, Book, Video, Users, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import SEOHead from '../components/SEOHead';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export default function Support() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: 'How do I get started with Niroga.ai?',
      answer: 'Getting started is easy! First, create an account on our platform. Then, choose the diagnostic solution that fits your needs. Follow our quick start guide in the documentation, and you\'ll be up and running in minutes. Our onboarding team is also available to assist you.',
      category: 'Getting Started'
    },
    {
      question: 'What types of diagnostics does Niroga.ai support?',
      answer: 'Niroga.ai supports a wide range of diagnostic capabilities including cardiac monitoring, respiratory analysis, neurological assessments, and general health screening. Our AI-powered audio analysis can detect various conditions through acoustic signatures.',
      category: 'Product'
    },
    {
      question: 'Is my patient data secure and HIPAA compliant?',
      answer: 'Absolutely. We take data security seriously. All patient data is encrypted end-to-end, stored in HIPAA-compliant infrastructure, and we maintain strict access controls. We conduct regular security audits and maintain all necessary compliance certifications.',
      category: 'Security'
    },
    {
      question: 'What are the system requirements for Niroga.ai devices?',
      answer: 'Our devices are designed to work with modern computers and mobile devices. Minimum requirements include: Windows 10/macOS 10.15 or later, 8GB RAM, stable internet connection. Mobile apps require iOS 14+ or Android 10+.',
      category: 'Technical'
    },
    {
      question: 'How accurate are the AI diagnostic results?',
      answer: 'Our AI models have been trained on millions of data points and achieve accuracy rates of 94-98% depending on the specific diagnostic type. All results should be reviewed by qualified healthcare professionals as part of the clinical decision-making process.',
      category: 'Product'
    },
    {
      question: 'Can I integrate Niroga.ai with my existing EHR system?',
      answer: 'Yes! We offer integrations with major EHR systems including Epic, Cerner, and Meditech. We also provide a robust API for custom integrations. Our integration team can help you set up seamless data flow between systems.',
      category: 'Integration'
    },
    {
      question: 'What kind of training is provided?',
      answer: 'We provide comprehensive training including video tutorials, documentation, live webinars, and one-on-one training sessions. Our customer success team works with you to ensure your staff is fully comfortable using the platform.',
      category: 'Training'
    },
    {
      question: 'What is your pricing model?',
      answer: 'We offer flexible pricing based on your organization\'s size and needs. Options include per-device licensing, subscription plans, and enterprise packages. Contact our sales team for a customized quote tailored to your requirements.',
      category: 'Billing'
    },
    {
      question: 'How quickly can I expect support responses?',
      answer: 'For critical issues, our response time is under 1 hour. Standard support requests receive responses within 4 business hours. Enterprise customers have access to 24/7 priority support with dedicated account managers.',
      category: 'Support'
    },
    {
      question: 'Can I try Niroga.ai before purchasing?',
      answer: 'Yes! We offer a 30-day free trial for qualified healthcare organizations. This includes full access to our platform, devices, and support. Contact us to schedule a demo and start your trial.',
      category: 'Sales'
    }
  ];

  const filteredFAQs = searchQuery
    ? faqs.filter(faq =>
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : faqs;

  return (
    <>
      <SEOHead 
        title="Support Center - Get Help with Niroga.ai"
        description="Access comprehensive support resources, FAQs, documentation, and contact our expert team for assistance with Niroga.ai's AI-powered healthcare solutions."
        keywords="customer support, technical support, help center, healthcare support, FAQ, troubleshooting, contact support"
      />
      <main className="bg-white">
        {/* Hero Section */}
        <section className="relative min-h-96 pt-28 pb-16 overflow-hidden bg-gradient-to-br from-teal-600 to-emerald-500">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 right-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-200 rounded-full blur-3xl"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              How can we help you?
            </h1>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto mb-8">
              Get answers, find resources, or connect with our support team
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search for help..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white placeholder-white/70 focus:outline-none focus:border-white/50"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-teal-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Get in Touch</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white rounded-2xl p-8 border-2 border-teal-200 hover:border-teal-400 transition text-center shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Live Chat</h3>
                <p className="text-gray-600 mb-4">Chat with our support team in real-time</p>
                <button className="px-6 py-2 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition">
                  Start Chat
                </button>
              </div>

              <div className="bg-white rounded-2xl p-8 border-2 border-emerald-200 hover:border-emerald-400 transition text-center shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Email Support</h3>
                <p className="text-gray-600 mb-4">Response within 4 hours</p>
                <a href="mailto:support@niroga.ai" className="inline-block px-6 py-2 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition">
                  Email Us
                </a>
              </div>

              <div className="bg-white rounded-2xl p-8 border-2 border-cyan-200 hover:border-cyan-400 transition text-center shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Phone Support</h3>
                <p className="text-gray-600 mb-4">Mon-Fri, 8am-8pm EST</p>
                <a href="tel:+1-800-NIROGA" className="inline-block px-6 py-2 bg-cyan-600 text-white rounded-lg font-semibold hover:bg-cyan-700 transition">
                  Call Us
                </a>
              </div>

              <div className="bg-white rounded-2xl p-8 border-2 border-blue-200 hover:border-blue-400 transition text-center shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Video className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Video Call</h3>
                <p className="text-gray-600 mb-4">Schedule a screen share session</p>
                <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
                  Schedule
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Support Statistics */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="p-6">
                <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600 mb-3">
                  <Clock size={48} className="mx-auto text-teal-600" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">&lt;1hr</div>
                <p className="text-gray-600">Average Response Time</p>
              </div>
              <div className="p-6">
                <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600 mb-3">
                  <Users size={48} className="mx-auto text-emerald-600" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">24/7</div>
                <p className="text-gray-600">Enterprise Support</p>
              </div>
              <div className="p-6">
                <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 mb-3">
                  <CheckCircle size={48} className="mx-auto text-cyan-600" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">98%</div>
                <p className="text-gray-600">Customer Satisfaction</p>
              </div>
              <div className="p-6">
                <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-3">
                  <MessageCircle size={48} className="mx-auto text-blue-600" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">10K+</div>
                <p className="text-gray-600">Tickets Resolved</p>
              </div>
            </div>
          </div>
        </section>

        {/* Self-Service Resources */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-teal-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Self-Service Resources</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <a href="/docs" className="group bg-white rounded-2xl p-8 border-2 border-teal-200 hover:border-teal-400 transition shadow-lg hover:shadow-xl">
                <Book className="text-teal-600 mb-4" size={48} />
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition">Documentation</h3>
                <p className="text-gray-600 mb-4">Comprehensive guides, API references, and tutorials</p>
                <span className="text-teal-600 font-semibold flex items-center gap-2">
                  Browse Docs <CheckCircle size={16} />
                </span>
              </a>

              <a href="/blog" className="group bg-white rounded-2xl p-8 border-2 border-emerald-200 hover:border-emerald-400 transition shadow-lg hover:shadow-xl">
                <Video className="text-emerald-600 mb-4" size={48} />
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition">Video Tutorials</h3>
                <p className="text-gray-600 mb-4">Step-by-step video guides and training materials</p>
                <span className="text-emerald-600 font-semibold flex items-center gap-2">
                  Watch Videos <CheckCircle size={16} />
                </span>
              </a>

              <a href="#" className="group bg-white rounded-2xl p-8 border-2 border-cyan-200 hover:border-cyan-400 transition shadow-lg hover:shadow-xl">
                <Users className="text-cyan-600 mb-4" size={48} />
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition">Community Forum</h3>
                <p className="text-gray-600 mb-4">Connect with other users and share experiences</p>
                <span className="text-cyan-600 font-semibold flex items-center gap-2">
                  Join Community <CheckCircle size={16} />
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
            
            {filteredFAQs.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-gray-500 text-lg">No FAQs found matching your search.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredFAQs.map((faq, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
                    <button
                      onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                      className="w-full px-6 py-4 text-left flex items-start justify-between hover:bg-gray-100 transition"
                    >
                      <div className="flex items-start gap-3 flex-1">
                        <HelpCircle className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">{faq.question}</h3>
                          <span className="text-xs text-teal-600 font-medium">{faq.category}</span>
                        </div>
                      </div>
                      <div className={`transform transition-transform ${expandedFAQ === index ? 'rotate-180' : ''}`}>
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>
                    {expandedFAQ === index && (
                      <div className="px-6 py-4 bg-white border-t border-gray-200">
                        <p className="text-gray-700 leading-relaxed pl-8">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Status & Updates */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-teal-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 border-2 border-green-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <h3 className="text-xl font-bold text-gray-900">System Status</h3>
                </div>
                <p className="text-gray-600 mb-4">All systems operational</p>
                <a href="#" className="text-teal-600 font-semibold hover:text-teal-700 transition">
                  View Status Page →
                </a>
              </div>

              <div className="bg-white rounded-2xl p-8 border-2 border-blue-200">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="text-blue-600" size={24} />
                  <h3 className="text-xl font-bold text-gray-900">Latest Updates</h3>
                </div>
                <p className="text-gray-600 mb-4">New features and improvements</p>
                <a href="#" className="text-teal-600 font-semibold hover:text-teal-700 transition">
                  View Changelog →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-teal-600 to-emerald-600 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Still need help?</h2>
            <p className="text-xl text-teal-100 mb-8">
              Our expert support team is standing by to assist you
            </p>
            <a href="/contact" className="inline-block px-8 py-4 bg-white text-teal-600 rounded-lg font-semibold hover:bg-teal-50 transition">
              Contact Support Team
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
