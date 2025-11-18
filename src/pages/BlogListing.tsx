import { Calendar, User, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  featured?: boolean;
}

export default function BlogListing() {
  const blogPosts: BlogPost[] = [
    {
      slug: 'ai-expanding-role-next-human-chapter',
      title: 'AI\'s Expanding Role in the Next Human Chapter',
      excerpt: 'From ChatGPT to AGI: Understanding how AI is transforming society, economy, and human purpose in the age of automation. Exploring the philosophical implications, economic impacts, and practical advice for navigating the 4th Industrial Revolution and beyond.',
      category: 'AI & Society',
      date: '2 Nov 2025',
      author: 'Dr. Yasantha Rajakarunanayake',
      readTime: '15 min read',
      featured: true
    }
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <>
      <SEOHead 
        title="Blog - Latest Insights on AI & Healthcare | Niroga.ai"
        description="Stay updated with the latest articles, research, and insights on AI-powered healthcare, medical diagnostics, and healthcare technology innovations from Niroga.ai experts."
        keywords="healthcare blog, AI medical articles, healthcare technology news, medical research, diagnostic innovations, AI society, 4th industrial revolution"
      />
      <main className="bg-white">
        {/* Hero Section */}
        <section className="relative min-h-96 pt-28 pb-16 overflow-hidden bg-gradient-to-br from-indigo-600 to-purple-600">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 right-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-200 rounded-full blur-3xl"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white border border-white/30">
                <Sparkles size={20} />
                <span className="font-semibold">Insights & Research</span>
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Niroga.ai Blog
            </h1>
            <p className="text-xl sm:text-2xl text-indigo-100 max-w-3xl mx-auto">
              Exploring AI's impact on healthcare, society, and the future of humanity
            </p>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <Sparkles className="text-indigo-600" size={28} />
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Featured Articles</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Link 
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl overflow-hidden border-2 border-indigo-200 hover:border-indigo-400 transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1"
                >
                  <div className="h-64 bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-10 right-10 w-32 h-32 bg-white rounded-full blur-2xl"></div>
                      <div className="absolute bottom-10 left-10 w-40 h-40 bg-purple-200 rounded-full blur-2xl"></div>
                    </div>
                    <div className="relative text-center text-white z-10">
                      <Sparkles size={64} className="mx-auto mb-4" />
                      <p className="text-lg font-semibold">Featured Article</p>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4 flex-wrap">
                      <span className="px-4 py-1.5 bg-indigo-600 text-white text-sm rounded-full font-semibold">{post.category}</span>
                      <span className="text-gray-500 text-sm">{post.readTime}</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition">
                      {post.title}
                    </h3>
                    <p className="text-gray-700 mb-6 leading-relaxed line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-6 border-t border-indigo-200">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <User size={18} />
                        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                          <span className="font-semibold">{post.author}</span>
                          <span className="hidden sm:inline text-gray-400">•</span>
                          <span>{post.date}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-indigo-600 font-semibold group-hover:gap-3 transition-all">
                        Read More <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* All Posts Section */}
        <section className="py-16 sm:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
              All Articles
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {blogPosts.map((post) => (
                <Link 
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-indigo-400 transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="h-48 bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                    <Sparkles className="text-white" size={48} />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full font-medium">{post.category}</span>
                      <span className="text-gray-400 text-xs">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">{post.excerpt}</p>
                    <div className="pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <User size={14} />
                          <span className="line-clamp-1">{post.author}</span>
                        </div>
                        <span className="whitespace-nowrap">{post.date}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* More articles coming soon */}
            <div className="mt-12 text-center">
              <div className="inline-block px-6 py-3 bg-gray-100 text-gray-600 rounded-full font-medium">
                <Calendar className="inline mr-2" size={18} />
                More articles coming soon
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Subscription */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Sparkles size={48} className="mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Stay Updated</h2>
            <p className="text-lg sm:text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest insights in AI, healthcare innovation, and the future of technology
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-4 focus:ring-white/50"
              />
              <button type="submit" className="px-8 py-4 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-indigo-50 transition">
                Subscribe
              </button>
            </form>
            <p className="text-sm text-indigo-200 mt-4">
              Join our community of healthcare professionals, researchers, and innovators
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
