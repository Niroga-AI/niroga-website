import { Calendar, User, ArrowRight, Search, Tag } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead, { pageMetadata } from '../components/SEOHead';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  image: string;
  featured?: boolean;
}

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'AI Technology', 'Healthcare', 'Research', 'Product Updates', 'Case Studies'];

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'The Future of AI in Medical Diagnostics: A Comprehensive Guide',
      excerpt: 'Explore how artificial intelligence is revolutionizing medical diagnostics, from early disease detection to personalized treatment plans.',
      category: 'AI Technology',
      date: '2025-11-15',
      author: 'Dr. Sarah Johnson',
      readTime: '8 min read',
      image: '/images/blog/ai-diagnostics.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'Audio-Based Disease Detection: Breaking New Ground in Healthcare',
      excerpt: 'Discover how acoustic intelligence is enabling non-invasive disease detection through advanced sound analysis and machine learning.',
      category: 'Research',
      date: '2025-11-10',
      author: 'Dr. Michael Chen',
      readTime: '6 min read',
      image: '/images/blog/audio-detection.jpg',
      featured: true
    },
    {
      id: 3,
      title: 'Case Study: Improving Cardiac Care with AI-Powered Solutions',
      excerpt: 'Learn how a major hospital reduced diagnosis time by 40% using Niroga.ai\'s cardiac monitoring technology.',
      category: 'Case Studies',
      date: '2025-11-08',
      author: 'Emily Rodriguez',
      readTime: '10 min read',
      image: '/images/blog/cardiac-case-study.jpg'
    },
    {
      id: 4,
      title: 'Understanding HIPAA Compliance in AI Healthcare Applications',
      excerpt: 'A detailed look at how AI healthcare solutions maintain patient privacy while delivering cutting-edge diagnostics.',
      category: 'Healthcare',
      date: '2025-11-05',
      author: 'James Patterson',
      readTime: '7 min read',
      image: '/images/blog/hipaa-compliance.jpg'
    },
    {
      id: 5,
      title: 'Product Update: Enhanced Respiratory Analysis Features',
      excerpt: 'Introducing new capabilities in our respiratory disease detection system with improved accuracy and faster results.',
      category: 'Product Updates',
      date: '2025-11-01',
      author: 'Product Team',
      readTime: '5 min read',
      image: '/images/blog/product-update.jpg'
    },
    {
      id: 6,
      title: 'Machine Learning Models for Early Disease Detection',
      excerpt: 'Deep dive into the neural networks and algorithms powering our diagnostic solutions.',
      category: 'AI Technology',
      date: '2025-10-28',
      author: 'Dr. Sarah Johnson',
      readTime: '12 min read',
      image: '/images/blog/ml-models.jpg'
    },
    {
      id: 7,
      title: 'Supporting Veterans: AI Healthcare for Defense Personnel',
      excerpt: 'How specialized AI diagnostics are improving healthcare outcomes for military veterans.',
      category: 'Healthcare',
      date: '2025-10-22',
      author: 'Dr. Michael Chen',
      readTime: '9 min read',
      image: '/images/blog/veterans-healthcare.jpg'
    },
    {
      id: 8,
      title: 'The Science Behind Acoustic Intelligence in Medicine',
      excerpt: 'Understanding the physics and biology that make audio-based diagnostics possible.',
      category: 'Research',
      date: '2025-10-18',
      author: 'Dr. Lisa Wang',
      readTime: '11 min read',
      image: '/images/blog/acoustic-science.jpg'
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <>
      <SEOHead 
        title="Blog - Latest Insights on AI Healthcare | Niroga.ai"
        description="Stay updated with the latest articles, research, and insights on AI-powered healthcare, medical diagnostics, and healthcare technology innovations from Niroga.ai."
        keywords="healthcare blog, AI medical articles, healthcare technology news, medical research, diagnostic innovations"
      />
      <main className="bg-white">
        {/* Hero Section */}
        <section className="relative min-h-96 pt-28 pb-16 overflow-hidden bg-gradient-to-br from-indigo-600 to-purple-600">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 right-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-200 rounded-full blur-3xl"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Niroga.ai Blog
            </h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto mb-8">
              Insights, research, and innovations in AI-powered healthcare
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white placeholder-white/70 focus:outline-none focus:border-white/50"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition ${
                    selectedCategory === category
                      ? 'bg-indigo-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        {selectedCategory === 'All' && (
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Articles</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {featuredPosts.map((post) => (
                  <article key={post.id} className="group bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl overflow-hidden border-2 border-indigo-200 hover:border-indigo-400 transition shadow-lg hover:shadow-2xl">
                    <div className="h-64 bg-gradient-to-br from-indigo-200 to-purple-200 flex items-center justify-center">
                      <div className="text-center text-indigo-600">
                        <Calendar size={48} className="mx-auto mb-2" />
                        <p className="text-sm font-medium">Featured Article</p>
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-indigo-600 text-white text-sm rounded-full">{post.category}</span>
                        <span className="text-gray-500 text-sm">{post.readTime}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between pt-4 border-t border-indigo-200">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <User size={16} />
                          <span>{post.author}</span>
                          <span className="text-gray-400">•</span>
                          <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        </div>
                        <button className="text-indigo-600 font-semibold hover:gap-3 flex items-center gap-2 transition-all">
                          Read More <ArrowRight size={16} />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Posts Grid */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {selectedCategory === 'All' ? 'Latest Articles' : `${selectedCategory} Articles`}
            </h2>
            
            {filteredPosts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <article key={post.id} className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-indigo-400 transition shadow-md hover:shadow-xl">
                    <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                      <Tag className="text-gray-400" size={48} />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full font-medium">{post.category}</span>
                        <span className="text-gray-400 text-xs">{post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="pt-4 border-t border-gray-100">
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <div className="flex items-center gap-1">
                            <User size={14} />
                            <span>{post.author}</span>
                          </div>
                          <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Subscription */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
            <p className="text-xl text-indigo-100 mb-8">
              Subscribe to our newsletter for the latest insights in AI healthcare
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="px-8 py-4 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-indigo-50 transition">
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
