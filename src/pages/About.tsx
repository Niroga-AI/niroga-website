import { Link } from 'react-router-dom';
import { Target, Eye, Lightbulb, Award } from 'lucide-react';
import SEOHead, { pageMetadata } from '../components/SEOHead';

export default function About() {
  return (
    <>
      <SEOHead {...pageMetadata.about} />
      <main className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-96 pt-28 pb-16 overflow-hidden bg-gradient-to-br from-blue-600 to-green-500">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <p className="text-green-200 font-semibold uppercase tracking-widest mb-4">Our Story</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">About Niroga</h1>
          <p className="text-xl text-blue-50 max-w-3xl leading-relaxed">Pioneering the future of acoustic intelligence in healthcare through revolutionary AI-driven audio cardiography</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">The Challenge We Solve</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">Traditional stethoscopes and wearables have remained largely unchanged for over 200 years. They miss critical acoustic data that could save lives.</p>
              <p className="text-lg text-gray-700 leading-relaxed">Modern wearables focus only on electrical signals (ECG) while ignoring the rich acoustic information that trained clinicians rely on. This gap means early detection opportunities are being missed every day.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-12 border border-blue-200">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">❌</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Limited Data</h3>
                    <p className="text-gray-600 text-sm">Traditional methods capture only surface-level information</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">⚠️</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Late Detection</h3>
                    <p className="text-gray-600 text-sm">Anomalies detected only when conditions become severe</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🔇</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Missed Insights</h3>
                    <p className="text-gray-600 text-sm">Acoustic biomarkers remain invisible to current technology</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Breakthrough */}
          <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-3xl p-12 border-2 border-green-300 mb-24">
            <p className="text-green-700 font-bold uppercase tracking-widest mb-4">Our Breakthrough</p>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Audio Cardiography: The Future of Cardiac Monitoring</h3>
            <p className="text-lg text-gray-700 leading-relaxed">We've developed a revolutionary approach that combines advanced acoustic sensing with artificial intelligence. Our technology captures the full spectrum of heart and lung sounds, processes them through cutting-edge AI algorithms, and delivers actionable insights that go far beyond traditional auscultation.</p>
            <p className="text-lg text-gray-700 mt-4 leading-relaxed">We're not just digitizing the stethoscope—we're reinventing it for the modern era.</p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Core Values</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Target, title: "Mission", color: "from-blue-500 to-cyan-500", desc: "Make acoustic intelligence accessible to clinicians, families, and pets worldwide" },
              { icon: Eye, title: "Vision", color: "from-green-500 to-emerald-500", desc: "Build a global ecosystem for preventive, personalized cardiopulmonary care" },
              { icon: Award, title: "Innovation", color: "from-purple-500 to-pink-500", desc: "4 granted patents with continuous R&D pushing boundaries of acoustic monitoring" },
              { icon: Lightbulb, title: "Impact", color: "from-orange-500 to-red-500", desc: "Transform healthcare across military, maternal, family, and veterinary domains" }
            ].map((value, i) => (
              <div key={i} className={`bg-gradient-to-br ${value.color} rounded-2xl p-8 text-white group hover:shadow-2xl transition transform hover:-translate-y-2`}>
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/30 transition">
                  <value.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                <p className="text-white/90 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Led by Industry Experts</h2>
            <p className="text-xl text-gray-600">Our team combines expertise in healthcare, AI, and acoustic engineering</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Dr. Yasantha", role: "CEO & Founder", cred: "100+ Patents, Silicon Valley Veteran" },
              { name: "Research Team", role: "AI & Acoustics", cred: "PhD Scientists & Engineers" },
              { name: "Clinical Advisors", role: "Medical Expertise", cred: "Veteran & Healthcare Specialists" }
            ].map((member, i) => (
              <div key={i} className="group">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl mb-6 flex items-center justify-center group-hover:shadow-lg transition">
                  <span className="text-5xl">👤</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-1">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.cred}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-500 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Join the Revolution</h2>
          <p className="text-xl text-blue-50 mb-8">Be part of transforming healthcare through acoustic intelligence</p>
          <Link to="/contact" className="inline-block px-10 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition">
            Get In Touch
          </Link>
        </div>
      </section>
    </main>
    </>
  );
}
