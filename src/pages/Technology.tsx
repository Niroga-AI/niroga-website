import React from 'react';
import { Cpu, Waves, Activity, Database, Shield, Zap, ArrowRight } from 'lucide-react';

export default function Technology() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-96 pt-28 pb-16 overflow-hidden bg-gradient-to-br from-purple-600 to-blue-500">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <p className="text-purple-200 font-semibold uppercase tracking-widest mb-4">Advanced Engineering</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">Our Technology</h1>
          <p className="text-xl text-purple-50 max-w-3xl leading-relaxed">Powered by cutting-edge AI and acoustic engineering for next-generation health monitoring</p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="text-purple-600 font-semibold uppercase tracking-widest mb-4">Process</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">How Niroga Works</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { num: "01", title: "Acoustic Capture", desc: "Ultra-sensitive microphones capture the full spectrum of heart and lung sounds with unprecedented fidelity" },
              { num: "02", title: "AI Processing", desc: "Advanced machine learning algorithms analyze patterns and extract critical acoustic features in real-time" },
              { num: "03", title: "Actionable Insights", desc: "Instant analysis with cloud sharing provides health insights to users and healthcare providers" }
            ].map((step, i) => (
              <div key={i} className="relative">
                {i < 2 && (
                  <div className="hidden md:block absolute top-20 -right-4 w-8 h-1 bg-gradient-to-r from-purple-500 to-blue-500"></div>
                )}
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 border border-gray-200 hover:shadow-xl transition">
                  <div className="text-5xl font-black text-transparent bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text mb-4">{step.num}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 text-white">
            <p className="text-purple-400 font-semibold uppercase tracking-widest mb-4">Capabilities</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Advanced Features</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">Industry-leading acoustic monitoring with AI integration</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Waves, title: "3D Audio Localization", desc: "Spatial audio mapping pinpoints cardiac and pulmonary anomalies with precision" },
              { icon: Cpu, title: "Machine Learning", desc: "Continuously adapting algorithms learn from patterns for better accuracy over time" },
              { icon: Activity, title: "Real-Time Analysis", desc: "Instant processing with edge computing for immediate health insights" },
              { icon: Database, title: "24/7 Logging", desc: "Continuous Holter-style audio recording captures all cardiac events" },
              { icon: Zap, title: "Cloud Integration", desc: "Seamless data sync for long-term analysis and healthcare provider access" },
              { icon: Shield, title: "Enterprise Security", desc: "HIPAA/GDPR compliant with bank-grade encryption for all health data" }
            ].map((feature, i) => (
              <div key={i} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
                <div className="relative bg-gray-800 rounded-2xl p-8 border border-gray-700 group-hover:border-purple-500 transition">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patents & Innovation */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12 border-2 border-purple-200">
            <p className="text-purple-600 font-bold uppercase tracking-widest mb-4">Innovation & IP</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Protected Technology</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <div className="text-5xl font-black text-transparent bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text mb-3">4</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Patents Filed</h3>
                <p className="text-gray-700">Core audio cardiography technology, 3D localization methods, and AI-driven analysis algorithms</p>
              </div>
              <div>
                <div className="text-5xl font-black text-transparent bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text mb-3">∞</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Ongoing R&D</h3>
                <p className="text-gray-700">Continuous innovation in acoustic signal processing, machine learning optimization, and clinical applications</p>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed">Our research team continuously pushes the boundaries of acoustic health monitoring, exploring new clinical applications and improving algorithm accuracy through advanced signal processing techniques.</p>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Niroga Stands Out</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="text-left py-4 px-4 font-bold text-gray-900">Feature</th>
                  <th className="text-center py-4 px-4 font-bold text-gray-600">Apple Watch</th>
                  <th className="text-center py-4 px-4 font-bold text-gray-600">Kardia</th>
                  <th className="text-center py-4 px-4 font-bold text-gray-600">Traditional</th>
                  <th className="text-center py-4 px-4 font-bold text-purple-600 bg-purple-50 rounded-lg">Niroga</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Acoustic Sensing", apple: "✕", kardia: "✕", traditional: "✓", niroga: "✓" },
                  { feature: "AI Analysis", apple: "Limited", kardia: "Limited", traditional: "✕", niroga: "Advanced" },
                  { feature: "24/7 Monitoring", apple: "✓", kardia: "On-demand", traditional: "✕", niroga: "✓" },
                  { feature: "Clinical Grade", apple: "Consumer", kardia: "Consumer", traditional: "Professional", niroga: "Both" },
                  { feature: "Wireless", apple: "✓", kardia: "✓", traditional: "✕", niroga: "Optional" }
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="py-4 px-4 font-semibold text-gray-900">{row.feature}</td>
                    <td className="py-4 px-4 text-center text-gray-700">{row.apple}</td>
                    <td className="py-4 px-4 text-center text-gray-700">{row.kardia}</td>
                    <td className="py-4 px-4 text-center text-gray-700">{row.traditional}</td>
                    <td className={`py-4 px-4 text-center font-bold text-purple-600 bg-purple-50 ${i === 0 ? "rounded-tr-lg" : i === 4 ? "rounded-br-lg" : ""}`}>{row.niroga}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Experience the Technology</h2>
          <p className="text-xl text-purple-50 mb-8">Discover how acoustic intelligence can transform your health monitoring</p>
          <a href="https://order.niroga.ai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-10 py-4 bg-white text-purple-600 rounded-lg font-semibold hover:bg-purple-50 transition">
            Try Niroga Today <ArrowRight size={20} />
          </a>
        </div>
      </section>
    </main>
  );
}
