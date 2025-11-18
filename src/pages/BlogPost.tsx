import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';
import SEOHead from '../components/SEOHead';

// Blog posts data
const blogPosts = {
  'ai-expanding-role-next-human-chapter': {
    title: "AI's Expanding Role in the Next Human Chapter",
    subtitle: "Tips for Navigating the 4th Industrial Revolution and Beyond",
    author: "Dr. Yasantha Rajakarunanayake",
    date: "2 Nov 2025",
    readTime: "15 min read",
    image: "/images/ai-blog-hero.jpg",
    excerpt: "From ChatGPT to AGI: Understanding how AI is transforming society, economy, and human purpose in the age of automation.",
    content: `
      <h2 class="text-3xl font-bold text-gray-900 mb-6 mt-8">The Four Industrial Revolutions</h2>
      <div class="grid md:grid-cols-2 gap-6 mb-8">
        <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border-2 border-blue-200">
          <h3 class="text-xl font-bold text-gray-900 mb-3">1st: 1780s</h3>
          <p class="text-gray-700">Steam power and mechanisation revolutionized manufacturing</p>
        </div>
        <div class="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border-2 border-purple-200">
          <h3 class="text-xl font-bold text-gray-900 mb-3">2nd: 1890s</h3>
          <p class="text-gray-700">Electricity enabled mass production</p>
        </div>
        <div class="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border-2 border-green-200">
          <h3 class="text-xl font-bold text-gray-900 mb-3">3rd: 1960s</h3>
          <p class="text-gray-700">Computers and the Internet transformed information</p>
        </div>
        <div class="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-xl border-2 border-orange-200">
          <h3 class="text-xl font-bold text-gray-900 mb-3">4th: Present</h3>
          <p class="text-gray-700">AI – Automating cognition and creativity</p>
        </div>
      </div>

      <h2 class="text-3xl font-bold text-gray-900 mb-6 mt-12">From ChatGPT to AGI: The Great Acceleration</h2>
      <div class="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl mb-8">
        <div class="grid md:grid-cols-3 gap-6">
          <div>
            <h3 class="text-2xl font-bold mb-2">2023</h3>
            <p class="text-blue-100">The ChatGPT moment – amazed at conversation</p>
          </div>
          <div>
            <h3 class="text-2xl font-bold mb-2">2025+</h3>
            <p class="text-blue-100">AI sees, hears, creates video, writes code, designs proteins</p>
          </div>
          <div>
            <h3 class="text-2xl font-bold mb-2">2035?</h3>
            <p class="text-blue-100">True AGI >= human-level cognitive ability and flexibility</p>
          </div>
        </div>
      </div>

      <h2 class="text-3xl font-bold text-gray-900 mb-6 mt-12">The Hype Cycle of AI & Tech</h2>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">Generative AI finds itself in the <strong>Trough of Disillusionment</strong> in 2025, facing challenges from poor data quality, unclear value propositions, and high costs.</p>
      
      <div class="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
        <h3 class="text-xl font-bold text-gray-900 mb-3">Key Enablers for Success:</h3>
        <ul class="list-disc list-inside space-y-2 text-gray-700">
          <li>AI-ready data infrastructure</li>
          <li>Mature AI governance frameworks</li>
          <li>Clear business value alignment</li>
        </ul>
      </div>

      <h2 class="text-3xl font-bold text-gray-900 mb-6 mt-12">AI in Society: Applications Transforming Lives</h2>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4">AI Companions</h3>
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">Millions now rely on AI companions for emotional support, battling loneliness and depression. Character.ai users spend approximately <strong>93 minutes per day</strong> with AI bots, finding comfort in always-available digital companionship.</p>

      <h3 class="text-2xl font-bold text-gray-900 mb-4">Replicants & Digital Immortality</h3>
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">AI 'deadbots' reconstruct voices and faces of the deceased, creating an industry worth approximately <strong>$80 billion</strong> within a decade. This raises profound ethical and psychological questions about grief, memory, and identity.</p>

      <h3 class="text-2xl font-bold text-gray-900 mb-4">Governance Divide</h3>
      <div class="grid md:grid-cols-2 gap-6 mb-8">
        <div class="bg-blue-50 p-6 rounded-xl">
          <h4 class="text-xl font-bold text-gray-900 mb-3">🇪🇺 European Union</h4>
          <p class="text-gray-700">Risk-based approach with heavy fines (up to 7% of turnover) and strict prohibitions on unacceptable AI use</p>
        </div>
        <div class="bg-red-50 p-6 rounded-xl">
          <h4 class="text-xl font-bold text-gray-900 mb-3">🇺🇸🇨🇳 US & China</h4>
          <p class="text-gray-700">Deregulation and speed prioritized – innovation and national security over safety concerns</p>
        </div>
      </div>

      <h2 class="text-3xl font-bold text-gray-900 mb-6 mt-12">AI Tackles Humanity's Grand Challenges</h2>
      
      <div class="space-y-6 mb-8">
        <div class="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-xl border-2 border-red-200">
          <h3 class="text-2xl font-bold text-gray-900 mb-3">⚡ Energy: Fusion & Efficiency</h3>
          <p class="text-gray-700">AI controls plasma in fusion reactors and enables analog AI chips that achieve 10-100× better energy efficiency than traditional silicon.</p>
        </div>

        <div class="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border-2 border-green-200">
          <h3 class="text-2xl font-bold text-gray-900 mb-3">🧬 Biology: AlphaFold Revolution</h3>
          <p class="text-gray-700">AlphaFold 3 predicts proteins and nucleic acids with unprecedented accuracy, accelerating drug discovery and understanding biological mechanisms.</p>
        </div>

        <div class="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border-2 border-blue-200">
          <h3 class="text-2xl font-bold text-gray-900 mb-3">🌍 Climate: Digital Earth Twins</h3>
          <p class="text-gray-700">AI weather forecasting uses 1,000× less energy while improving accuracy. Digital twins of Earth enable better climate modeling and prediction.</p>
        </div>
      </div>

      <h2 class="text-3xl font-bold text-gray-900 mb-6 mt-12">AI Economic Revolution</h2>
      
      <div class="bg-gradient-to-br from-purple-900 to-indigo-900 text-white p-8 rounded-2xl mb-8">
        <h3 class="text-2xl font-bold mb-6">Key Economic Impacts</h3>
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <div class="text-4xl font-black mb-2">$15T+</div>
            <p class="text-purple-200">AI products and services market size by 2030</p>
          </div>
          <div>
            <div class="text-4xl font-black mb-2">10×</div>
            <p class="text-purple-200">Productivity increase for AI-augmented developers and professionals</p>
          </div>
        </div>
      </div>

      <div class="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
        <h3 class="text-xl font-bold text-gray-900 mb-3">⚠️ The Inequality Gap</h3>
        <p class="text-gray-700 mb-4">Those who leverage AI pull further ahead; those who don't fall behind. This digital divide threatens to exacerbate existing inequalities.</p>
        <p class="text-gray-700"><strong>Robot Tax Debate:</strong> Bill Gates proposes taxing AI/robots to fund social programs (UBI, retraining), while critics argue taxation of tools harms innovation.</p>
      </div>

      <h2 class="text-3xl font-bold text-gray-900 mb-6 mt-12">How AI 'Thinks': Understanding Intelligence</h2>

      <h3 class="text-2xl font-bold text-gray-900 mb-4">Prediction Engines</h3>
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">Both AI (Large Language Models) and the human brain are fundamentally <strong>prediction engines</strong>. When you say "I'm going to Turkey," your brain predicts whether you'll discuss food or monuments based on your interests. LLMs similarly assign probabilities to the next branch of thought.</p>

      <h3 class="text-2xl font-bold text-gray-900 mb-4">Meaning: Wittgenstein vs. Wierzbicka</h3>
      <div class="grid md:grid-cols-2 gap-6 mb-8">
        <div class="bg-blue-50 p-6 rounded-xl">
          <h4 class="text-xl font-bold text-gray-900 mb-3">Wierzbicka's View</h4>
          <p class="text-gray-700">Meaning is built from universal 'semantic primes' (good, bad, I, you, etc.) – fundamental building blocks of understanding</p>
        </div>
        <div class="bg-purple-50 p-6 rounded-xl">
          <h4 class="text-xl font-bold text-gray-900 mb-3">Wittgenstein's View</h4>
          <p class="text-gray-700">Meaning is use – no single essence, only a 'family resemblance' across contexts. LLMs capture these resemblances statistically</p>
        </div>
      </div>

      <h2 class="text-3xl font-bold text-gray-900 mb-6 mt-12">Philosophical Implications: Kant & Gödel</h2>

      <h3 class="text-2xl font-bold text-gray-900 mb-4">The Kantian Lens</h3>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">Kant argued that the human mind isn't a blank slate – it actively constructs reality using built-in structures (categories) and forms of intuition (space and time).</p>
      
      <div class="bg-indigo-50 p-6 rounded-xl mb-6">
        <h4 class="text-xl font-bold text-gray-900 mb-3">AI's A Priori</h4>
        <p class="text-gray-700">Transformer architecture and attention mechanisms impose <strong>inductive biases</strong> – these act as AI's a priori categories. Training data is its 'raw sense data'; the learned vector space is its phenomenal world.</p>
      </div>

      <div class="bg-red-50 p-6 rounded-xl mb-8">
        <h4 class="text-xl font-bold text-gray-900 mb-3">The Noumenal Barrier</h4>
        <p class="text-gray-700">Kant distinguishes between the <strong>phenomenal</strong> (experience) and <strong>noumenal</strong> (things-in-themselves). The latter is forever inaccessible – both for humans and AIs. AGI learns correlations from data but doesn't possess innate concepts like causality.</p>
      </div>

      <h3 class="text-2xl font-bold text-gray-900 mb-4">Gödel's Incompleteness Theorems</h3>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">Any consistent formal system powerful enough for arithmetic has <strong>true statements it cannot prove</strong>. The Gödel sentence: "This statement cannot be proven" – true, but unprovable within the system.</p>
      
      <div class="bg-purple-50 border-l-4 border-purple-500 p-6 mb-8">
        <p class="text-gray-700 mb-3"><strong>Implications for AGI:</strong></p>
        <p class="text-gray-700">If mind transcends computation (Penrose/Lucas), purely computational AGI cannot reach human-level understanding. Even if mind is computational, AGI shares these Gödelian limits – powerful but always bounded.</p>
      </div>

      <h2 class="text-3xl font-bold text-gray-900 mb-6 mt-12">Hallucinations: When Prediction Goes Astray</h2>
      
      <div class="grid md:grid-cols-2 gap-6 mb-8">
        <div class="bg-red-50 p-6 rounded-xl">
          <h3 class="text-xl font-bold text-gray-900 mb-3">AI Hallucinations</h3>
          <p class="text-gray-700">AI confidently generates incorrect information when statistical predictions diverge from reality</p>
        </div>
        <div class="bg-orange-50 p-6 rounded-xl">
          <h3 class="text-xl font-bold text-gray-900 mb-3">Human Hallucinations</h3>
          <p class="text-gray-700">Perception without external stimulus – the brain's predictions override sensory input (e.g., in schizophrenia)</p>
        </div>
      </div>

      <p class="text-lg text-gray-700 mb-8 leading-relaxed">Both types serve a purpose: Dreams and internal simulations help us rehearse and validate our models, exploring outcomes without real-world consequences.</p>

      <h2 class="text-3xl font-bold text-gray-900 mb-6 mt-12">Purpose in the Age of AI</h2>

      <div class="bg-gradient-to-r from-teal-50 to-cyan-50 p-8 rounded-2xl mb-8 border-2 border-teal-200">
        <h3 class="text-2xl font-bold text-gray-900 mb-6">The Utility Beyond Utility</h3>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="flex items-start gap-3">
            <div class="text-2xl">✨</div>
            <div>
              <h4 class="font-bold text-gray-900">Experience</h4>
              <p class="text-gray-700">Consciousness & subjective feeling</p>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <div class="text-2xl">🤝</div>
            <div>
              <h4 class="font-bold text-gray-900">Relationships</h4>
              <p class="text-gray-700">Deep human connection</p>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <div class="text-2xl">🎨</div>
            <div>
              <h4 class="font-bold text-gray-900">Intrinsic Motivation</h4>
              <p class="text-gray-700">Creation & struggle for its own sake</p>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <div class="text-2xl">🔍</div>
            <div>
              <h4 class="font-bold text-gray-900">Exploration</h4>
              <p class="text-gray-700">Defining new goals & asking new questions</p>
            </div>
          </div>
        </div>
        <p class="text-gray-700 mt-6 text-lg"><strong>Beyond Productivity:</strong> With AI handling utility, the new luxury is time to pursue wisdom, connection, and experience. Human flourishing becomes the goal.</p>
      </div>

      <h2 class="text-3xl font-bold text-gray-900 mb-6 mt-12">Advice for Students in the AI Era</h2>

      <div class="space-y-6 mb-8">
        <div class="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600">
          <h3 class="text-xl font-bold text-gray-900 mb-3">1. Don't Panic</h3>
          <p class="text-gray-700">Every industrial revolution felt overwhelming. Focus on Knowledge, Skills, and Experience (KSE) as universal resources.</p>
        </div>

        <div class="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-600">
          <h3 class="text-xl font-bold text-gray-900 mb-3">2. AI Literacy for All Majors</h3>
          <p class="text-gray-700">Traditional programming may disappear. The programming language of 2026 will be <strong>English</strong>. Learn entrepreneurship and ask: Why, How, When, Who, What?</p>
        </div>

        <div class="bg-green-50 p-6 rounded-xl border-l-4 border-green-600">
          <h3 class="text-xl font-bold text-gray-900 mb-3">3. Develop Core Human Skills</h3>
          <p class="text-gray-700">Adaptability, creativity, teamwork, and ethics. Liberal arts and being well-read are important to converse effectively with AI.</p>
        </div>

        <div class="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-600">
          <h3 class="text-xl font-bold text-gray-900 mb-3">4. Learn Physical Sciences & Hard Skills</h3>
          <p class="text-gray-700">Soft skills alone may not suffice. Combine technical knowledge with human insight.</p>
        </div>

        <div class="bg-teal-50 p-6 rounded-xl border-l-4 border-teal-600">
          <h3 class="text-xl font-bold text-gray-900 mb-3">5. Use AI as Collaborator, Not Competitor</h3>
          <p class="text-gray-700">Master prompt engineering and generative AI platforms. This may even allow you to graduate faster and more efficiently.</p>
        </div>
      </div>

      <h2 class="text-3xl font-bold text-gray-900 mb-6 mt-12">For the Workforce: Lifelong Learning</h2>
      
      <div class="bg-yellow-50 border-2 border-yellow-400 p-6 rounded-xl mb-8">
        <p class="text-xl font-bold text-gray-900 mb-3">⚡ Critical Truth:</p>
        <p class="text-lg text-gray-700">AI will not replace you. But a human with better AI skills might replace you.</p>
      </div>

      <h2 class="text-3xl font-bold text-gray-900 mb-6 mt-12">Industry 5.0: The Return of the Human</h2>

      <div class="grid md:grid-cols-3 gap-6 mb-8">
        <div class="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl text-center">
          <div class="text-4xl mb-3">🧑</div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">Human-Centric</h3>
          <p class="text-gray-700">Empowers and supports workers; wellbeing at the centre</p>
        </div>
        <div class="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl text-center">
          <div class="text-4xl mb-3">🌱</div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">Sustainable</h3>
          <p class="text-gray-700">Respects planetary boundaries; drives green & digital transitions</p>
        </div>
        <div class="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl text-center">
          <div class="text-4xl mb-3">💪</div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">Resilient</h3>
          <p class="text-gray-700">Builds robust supply chains and adaptive systems</p>
        </div>
      </div>

      <div class="bg-gradient-to-r from-indigo-900 to-purple-900 text-white p-8 rounded-2xl mb-8">
        <h3 class="text-2xl font-bold mb-4">Industry 4.0 vs. Industry 5.0</h3>
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <h4 class="text-xl font-bold text-indigo-200 mb-2">Industry 4.0</h4>
            <ul class="space-y-2 text-indigo-100">
              <li>• Efficiency-focused</li>
              <li>• Humans adapt to technology</li>
              <li>• Optimize productivity</li>
            </ul>
          </div>
          <div>
            <h4 class="text-xl font-bold text-purple-200 mb-2">Industry 5.0</h4>
            <ul class="space-y-2 text-purple-100">
              <li>• Purpose-driven (Return of the Human)</li>
              <li>• Technology adapts to humans</li>
              <li>• Optimize for humans & planet</li>
            </ul>
          </div>
        </div>
      </div>

      <h2 class="text-3xl font-bold text-gray-900 mb-6 mt-12">Conclusion: Awakened Humanity</h2>

      <div class="bg-gradient-to-br from-blue-600 to-purple-600 text-white p-10 rounded-2xl mb-8 text-center">
        <p class="text-xl md:text-2xl italic leading-relaxed mb-6">
          "We have built engines of thought, networks that learn, and systems that see.
        </p>
        <p class="text-xl md:text-2xl italic leading-relaxed mb-6">
          Yet the true measure of progress is not in what we make, but in what we become.
        </p>
        <p class="text-xl md:text-2xl italic leading-relaxed mb-6">
          The age ahead is not only intelligent — it is moral, creative, and compassionate.
        </p>
        <p class="text-xl md:text-2xl italic leading-relaxed mb-6">
          Technology will extend our reach, but purpose must guide our hand.
        </p>
        <p class="text-xl md:text-2xl italic leading-relaxed mb-6">
          When power and wisdom walk together, when creation is met with care,
        </p>
        <p class="text-2xl md:text-3xl font-bold leading-relaxed">
          then innovation becomes illumination.
        </p>
        <div class="mt-8 pt-8 border-t border-white/30">
          <p class="text-2xl md:text-3xl font-black">
            The future is not Artificial Intelligence — it is Awakened Humanity.
          </p>
        </div>
      </div>

      <div class="bg-gray-50 p-8 rounded-xl">
        <h3 class="text-2xl font-bold text-gray-900 mb-4">Your Role in Shaping the Future</h3>
        <div class="space-y-4">
          <p class="text-gray-700"><strong>Students:</strong> Become creators, collaborators, and ethical leaders in the age of AI. The future belongs to those who ask good questions with important answers.</p>
          <p class="text-gray-700"><strong>Universities:</strong> Guide, empower, and adapt to foster human flourishing alongside technological progress.</p>
          <p class="text-gray-700"><strong>Together:</strong> Build a future where technology amplifies purpose, connection, and creativity.</p>
        </div>
      </div>
    `
  }
};

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPosts[slug as keyof typeof blogPosts] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-white pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-blue-600 hover:text-blue-700 font-semibold">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEOHead 
        title={`${post.title} | Niroga AI Blog`}
        description={post.excerpt}
        keywords="AI, artificial intelligence, AGI, 4th industrial revolution, machine learning, healthcare AI, Dr. Yasantha Rajakarunanayake"
        type="article"
      />
      
      <article className="bg-white">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 pt-24 pb-16 sm:pt-28 sm:pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 sm:mb-8 transition"
            >
              <ArrowLeft size={20} />
              <span className="font-medium">Back to Blog</span>
            </Link>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              {post.title}
            </h1>
            {post.subtitle && (
              <p className="text-xl sm:text-2xl text-blue-100 mb-6">{post.subtitle}</p>
            )}
            
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <User size={18} />
                <span className="font-medium">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div 
            className="prose prose-lg max-w-none
              prose-headings:font-bold
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-gray-700 prose-p:leading-relaxed
              prose-ul:text-gray-700
              prose-strong:text-gray-900
              prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Share Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 sm:p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">About the Author</h3>
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                  DR
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{post.author}</h4>
                  <p className="text-gray-700">Leading researcher and educator in artificial intelligence, focusing on the societal and philosophical implications of AI technologies in healthcare and beyond.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-12 text-center">
            <Link 
              to="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              <ArrowLeft size={20} />
              Back to All Posts
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
