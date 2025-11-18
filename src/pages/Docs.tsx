import { Book, Code, FileText, Search, ChevronRight, Download, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import SEOHead from '../components/SEOHead';

interface DocSection {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  articles: DocArticle[];
}

interface DocArticle {
  id: string;
  title: string;
  description: string;
  lastUpdated: string;
}

export default function Docs() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  const docSections: DocSection[] = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: <Book size={24} />,
      description: 'Quick start guides and tutorials to get you up and running',
      articles: [
        {
          id: 'quick-start',
          title: 'Quick Start Guide',
          description: 'Get started with Niroga.ai in 5 minutes',
          lastUpdated: '2025-11-15'
        },
        {
          id: 'installation',
          title: 'Installation & Setup',
          description: 'Step-by-step installation instructions for all devices',
          lastUpdated: '2025-11-14'
        },
        {
          id: 'first-diagnosis',
          title: 'Running Your First Diagnosis',
          description: 'Learn how to perform your first diagnostic scan',
          lastUpdated: '2025-11-13'
        },
        {
          id: 'account-setup',
          title: 'Account Setup & Configuration',
          description: 'Configure your account and preferences',
          lastUpdated: '2025-11-12'
        }
      ]
    },
    {
      id: 'api-reference',
      title: 'API Reference',
      icon: <Code size={24} />,
      description: 'Complete API documentation for developers',
      articles: [
        {
          id: 'authentication',
          title: 'Authentication',
          description: 'API authentication methods and security',
          lastUpdated: '2025-11-10'
        },
        {
          id: 'rest-api',
          title: 'REST API Endpoints',
          description: 'Complete list of available REST endpoints',
          lastUpdated: '2025-11-10'
        },
        {
          id: 'websocket',
          title: 'WebSocket API',
          description: 'Real-time data streaming with WebSockets',
          lastUpdated: '2025-11-08'
        },
        {
          id: 'rate-limits',
          title: 'Rate Limits & Quotas',
          description: 'Understanding API rate limits and quotas',
          lastUpdated: '2025-11-05'
        },
        {
          id: 'error-codes',
          title: 'Error Codes & Handling',
          description: 'API error codes and troubleshooting',
          lastUpdated: '2025-11-03'
        }
      ]
    },
    {
      id: 'devices',
      title: 'Device Documentation',
      icon: <FileText size={24} />,
      description: 'Hardware setup, calibration, and maintenance',
      articles: [
        {
          id: 'device-setup',
          title: 'Device Setup & Calibration',
          description: 'Initial setup and calibration procedures',
          lastUpdated: '2025-11-12'
        },
        {
          id: 'maintenance',
          title: 'Maintenance & Cleaning',
          description: 'Regular maintenance and cleaning guidelines',
          lastUpdated: '2025-11-10'
        },
        {
          id: 'troubleshooting',
          title: 'Device Troubleshooting',
          description: 'Common issues and solutions',
          lastUpdated: '2025-11-08'
        },
        {
          id: 'firmware',
          title: 'Firmware Updates',
          description: 'How to update device firmware',
          lastUpdated: '2025-11-05'
        }
      ]
    },
    {
      id: 'integrations',
      title: 'Integrations',
      icon: <ExternalLink size={24} />,
      description: 'Connect Niroga.ai with your existing systems',
      articles: [
        {
          id: 'ehr-integration',
          title: 'EHR Integration',
          description: 'Integrate with Electronic Health Records systems',
          lastUpdated: '2025-11-11'
        },
        {
          id: 'webhooks',
          title: 'Webhooks',
          description: 'Real-time notifications and event handling',
          lastUpdated: '2025-11-09'
        },
        {
          id: 'cloud-storage',
          title: 'Cloud Storage Integration',
          description: 'Connect to AWS, Azure, and Google Cloud',
          lastUpdated: '2025-11-07'
        },
        {
          id: 'third-party',
          title: 'Third-Party Integrations',
          description: 'Integration with popular healthcare platforms',
          lastUpdated: '2025-11-04'
        }
      ]
    },
    {
      id: 'security',
      title: 'Security & Compliance',
      icon: <FileText size={24} />,
      description: 'HIPAA compliance, data security, and privacy',
      articles: [
        {
          id: 'hipaa',
          title: 'HIPAA Compliance',
          description: 'How we ensure HIPAA compliance',
          lastUpdated: '2025-11-13'
        },
        {
          id: 'data-encryption',
          title: 'Data Encryption',
          description: 'End-to-end encryption implementation',
          lastUpdated: '2025-11-11'
        },
        {
          id: 'access-control',
          title: 'Access Control & Permissions',
          description: 'Managing user roles and permissions',
          lastUpdated: '2025-11-09'
        },
        {
          id: 'audit-logs',
          title: 'Audit Logs & Monitoring',
          description: 'Security monitoring and audit trails',
          lastUpdated: '2025-11-06'
        }
      ]
    },
    {
      id: 'best-practices',
      title: 'Best Practices',
      icon: <Book size={24} />,
      description: 'Expert tips and recommended workflows',
      articles: [
        {
          id: 'clinical-workflows',
          title: 'Clinical Workflows',
          description: 'Optimize your clinical diagnostic workflows',
          lastUpdated: '2025-11-10'
        },
        {
          id: 'data-management',
          title: 'Data Management',
          description: 'Best practices for patient data management',
          lastUpdated: '2025-11-08'
        },
        {
          id: 'quality-assurance',
          title: 'Quality Assurance',
          description: 'Ensuring diagnostic accuracy and quality',
          lastUpdated: '2025-11-05'
        },
        {
          id: 'performance',
          title: 'Performance Optimization',
          description: 'Tips for optimal system performance',
          lastUpdated: '2025-11-02'
        }
      ]
    }
  ];

  const allArticles = docSections.flatMap(section => 
    section.articles.map(article => ({ ...article, sectionId: section.id, sectionTitle: section.title }))
  );

  const filteredSections = searchQuery
    ? docSections.map(section => ({
        ...section,
        articles: section.articles.filter(article =>
          article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          article.description.toLowerCase().includes(searchQuery.toLowerCase())
        )
      })).filter(section => section.articles.length > 0)
    : docSections;

  return (
    <>
      <SEOHead 
        title="Documentation - Niroga.ai Developer & User Docs"
        description="Comprehensive documentation, API references, guides, and tutorials for Niroga.ai's AI-powered healthcare solutions. Everything you need to get started."
        keywords="API documentation, user guides, developer docs, healthcare API, medical device documentation, integration guides"
      />
      <main className="bg-white">
        {/* Hero Section */}
        <section className="relative min-h-96 pt-28 pb-16 overflow-hidden bg-gradient-to-br from-blue-600 to-cyan-500">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-200 rounded-full blur-3xl"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Documentation
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Everything you need to build, integrate, and optimize with Niroga.ai
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white placeholder-white/70 focus:outline-none focus:border-white/50"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-12 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-6">
              <a href="#" className="group bg-white rounded-xl p-6 border-2 border-blue-200 hover:border-blue-400 transition shadow-md hover:shadow-lg">
                <Book className="text-blue-600 mb-3" size={32} />
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition">Quick Start</h3>
                <p className="text-sm text-gray-600">Get up and running in minutes</p>
              </a>
              <a href="#" className="group bg-white rounded-xl p-6 border-2 border-cyan-200 hover:border-cyan-400 transition shadow-md hover:shadow-lg">
                <Code className="text-cyan-600 mb-3" size={32} />
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-cyan-600 transition">API Reference</h3>
                <p className="text-sm text-gray-600">Complete API documentation</p>
              </a>
              <a href="#" className="group bg-white rounded-xl p-6 border-2 border-teal-200 hover:border-teal-400 transition shadow-md hover:shadow-lg">
                <Download className="text-teal-600 mb-3" size={32} />
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition">SDKs & Tools</h3>
                <p className="text-sm text-gray-600">Download our developer tools</p>
              </a>
              <a href="#" className="group bg-white rounded-xl p-6 border-2 border-indigo-200 hover:border-indigo-400 transition shadow-md hover:shadow-lg">
                <ExternalLink className="text-indigo-600 mb-3" size={32} />
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition">Integrations</h3>
                <p className="text-sm text-gray-600">Connect with your systems</p>
              </a>
            </div>
          </div>
        </section>

        {/* Documentation Sections */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {filteredSections.map((section) => (
                <div key={section.id} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition">
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6">
                    <div className="flex items-center gap-3 mb-2">
                      {section.icon}
                      <h2 className="text-2xl font-bold">{section.title}</h2>
                    </div>
                    <p className="text-blue-100">{section.description}</p>
                  </div>
                  <div className="p-6">
                    <div className="space-y-3">
                      {section.articles.map((article) => (
                        <a
                          key={article.id}
                          href={`#${section.id}-${article.id}`}
                          className="group block p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-400 hover:shadow-md transition"
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition mb-1">
                                {article.title}
                              </h3>
                              <p className="text-sm text-gray-600 mb-2">{article.description}</p>
                              <p className="text-xs text-gray-400">
                                Updated {new Date(article.lastUpdated).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                              </p>
                            </div>
                            <ChevronRight className="text-gray-400 group-hover:text-blue-600 transition flex-shrink-0 ml-2" size={20} />
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredSections.length === 0 && (
              <div className="text-center py-16">
                <p className="text-gray-500 text-lg">No documentation found matching your search.</p>
              </div>
            )}
          </div>
        </section>

        {/* Additional Resources */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Additional Resources</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 border-2 border-blue-200 text-center">
                <Download className="mx-auto text-blue-600 mb-4" size={48} />
                <h3 className="text-xl font-bold text-gray-900 mb-3">SDK Downloads</h3>
                <p className="text-gray-600 mb-6">Official SDKs for Python, JavaScript, and more</p>
                <a href="#" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
                  Browse SDKs
                </a>
              </div>
              <div className="bg-white rounded-2xl p-8 border-2 border-cyan-200 text-center">
                <Code className="mx-auto text-cyan-600 mb-4" size={48} />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Code Examples</h3>
                <p className="text-gray-600 mb-6">Sample code and implementation guides</p>
                <a href="#" className="inline-block px-6 py-3 bg-cyan-600 text-white rounded-lg font-semibold hover:bg-cyan-700 transition">
                  View Examples
                </a>
              </div>
              <div className="bg-white rounded-2xl p-8 border-2 border-teal-200 text-center">
                <Book className="mx-auto text-teal-600 mb-4" size={48} />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Video Tutorials</h3>
                <p className="text-gray-600 mb-6">Step-by-step video guides and walkthroughs</p>
                <a href="#" className="inline-block px-6 py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition">
                  Watch Videos
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Need More Help?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Our support team is here to assist you with any questions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition">
                Contact Support
              </a>
              <a href="/support" className="px-8 py-4 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800 transition border-2 border-white/30">
                Visit Support Center
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
