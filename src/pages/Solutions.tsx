import { ArrowRight, Heart, Users, Baby, Zap } from 'lucide-react';

export default function Solutions() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-96 pt-28 pb-16 overflow-hidden bg-gradient-to-br from-orange-600 to-red-500">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <p className="text-orange-200 font-semibold uppercase tracking-widest mb-4">Healthcare Domains</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">Clinical Solutions</h1>
          <p className="text-xl text-orange-50 max-w-3xl leading-relaxed">Specialized acoustic monitoring for diverse healthcare needs and patient populations</p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* PTSD & Mental Health */}
            <div className="group relative overflow-hidden rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-700 group-hover:scale-105 transition duration-500"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-white"></div>
              <div className="relative p-12 text-white min-h-96 flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white/30 transition">
                    <Zap size={32} />
                  </div>
                  <p className="text-indigo-100 font-semibold uppercase tracking-wider mb-3">Solution 01</p>
                  <h3 className="text-4xl font-bold mb-4">Military PTSD & Combat Trauma</h3>
                  <p className="text-xl text-indigo-50 leading-relaxed mb-6">Advanced acoustic monitoring for veterans experiencing PTSD, with continuous heart rate variability assessment and stress pattern detection.</p>
                </div>
                
                <div className="space-y-3">
                  <p className="font-semibold text-indigo-100 uppercase text-sm">Key Benefits:</p>
                  <ul className="space-y-2 text-indigo-50">
                    <li>✓ Early panic attack detection</li>
                    <li>✓ Stress level quantification</li>
                    <li>✓ Therapy progress tracking</li>
                    <li>✓ Integration with VA systems</li>
                  </ul>
                  <a href="https://orders.niroga.ai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-6 px-6 py-2 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-indigo-50 transition">
                    Learn More <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>

            {/* Maternal Health */}
            <div className="group relative overflow-hidden rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-600 to-rose-600 group-hover:scale-105 transition duration-500"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-white"></div>
              <div className="relative p-12 text-white min-h-96 flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white/30 transition">
                    <Baby size={32} />
                  </div>
                  <p className="text-pink-100 font-semibold uppercase tracking-wider mb-3">Solution 02</p>
                  <h3 className="text-4xl font-bold mb-4">Maternal & Fetal Health</h3>
                  <p className="text-xl text-pink-50 leading-relaxed mb-6">Monitor maternal cardiac health and detect complications during pregnancy with continuous acoustic surveillance.</p>
                </div>
                
                <div className="space-y-3">
                  <p className="font-semibold text-pink-100 uppercase text-sm">Key Benefits:</p>
                  <ul className="space-y-2 text-pink-50">
                    <li>✓ Gestational hypertension detection</li>
                    <li>✓ Fetal heart pattern analysis</li>
                    <li>✓ Postpartum complications prevention</li>
                    <li>✓ OB/GYN integration</li>
                  </ul>
                  <a href="https://orders.niroga.ai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-6 px-6 py-2 bg-white text-pink-600 rounded-lg font-semibold hover:bg-pink-50 transition">
                    Learn More <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>

            {/* Chronic Disease Management */}
            <div className="group relative overflow-hidden rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-teal-600 group-hover:scale-105 transition duration-500"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-white"></div>
              {/* Background Image */}
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition duration-500">
                <img src="/src/assets/images/1.jpg" alt="Eldercare Patient" className="w-full h-full object-cover" />
              </div>
              <div className="relative p-12 text-white min-h-96 flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white/30 transition backdrop-blur-sm">
                    <Heart size={32} />
                  </div>
                  <p className="text-emerald-100 font-semibold uppercase tracking-wider mb-3">Solution 03</p>
                  <h3 className="text-4xl font-bold mb-4 drop-shadow-lg">Family Care & Chronic Disease</h3>
                  <p className="text-xl text-emerald-50 leading-relaxed mb-6 drop-shadow-md">Comprehensive home monitoring for hypertension, diabetes complications, and age-related cardiac conditions.</p>
                </div>
                
                <div className="space-y-3">
                  <p className="font-semibold text-emerald-100 uppercase text-sm">Key Benefits:</p>
                  <ul className="space-y-2 text-emerald-50">
                    <li>✓ Arrhythmia early detection</li>
                    <li>✓ Medication effectiveness tracking</li>
                    <li>✓ Hospital readmission prevention</li>
                    <li>✓ Multi-generational monitoring</li>
                  </ul>
                  <a href="https://orders.niroga.ai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-6 px-6 py-2 bg-white text-emerald-600 rounded-lg font-semibold hover:bg-emerald-50 transition">
                    Learn More <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>

            {/* Veterinary Health */}
            <div className="group relative overflow-hidden rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-600 to-orange-600 group-hover:scale-105 transition duration-500"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-white"></div>
              <div className="relative p-12 text-white min-h-96 flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white/30 transition">
                    <Users size={32} />
                  </div>
                  <p className="text-amber-100 font-semibold uppercase tracking-wider mb-3">Solution 04</p>
                  <h3 className="text-4xl font-bold mb-4">Veterinary & Animal Health</h3>
                  <p className="text-xl text-amber-50 leading-relaxed mb-6">Advanced cardiac monitoring for pets and animals, from diagnosis to post-operative recovery management.</p>
                </div>
                
                <div className="space-y-3">
                  <p className="font-semibold text-amber-100 uppercase text-sm">Key Benefits:</p>
                  <ul className="space-y-2 text-amber-50">
                    <li>✓ Non-invasive cardiac assessment</li>
                    <li>✓ Anesthesia risk profiling</li>
                    <li>✓ Surgical recovery monitoring</li>
                    <li>✓ Senior pet health tracking</li>
                  </ul>
                  <a href="https://orders.niroga.ai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-6 px-6 py-2 bg-white text-amber-600 rounded-lg font-semibold hover:bg-amber-50 transition">
                    Learn More <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation & Support */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Implementation & Support</h2>
            <p className="text-xl text-gray-600">We handle the technical details so you can focus on patient care</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: "01", title: "Assessment", desc: "We evaluate your clinical requirements and customize solutions for your patient population" },
              { num: "02", title: "Deployment", desc: "Seamless integration with existing EHR/EMR systems with minimal disruption to workflows" },
              { num: "03", title: "Training", desc: "Comprehensive staff training and ongoing clinical support for healthcare teams" },
              { num: "04", title: "Monitoring", desc: "24/7 technical support and performance monitoring for all deployments" },
              { num: "05", title: "Analytics", desc: "Real-time dashboards and reporting for clinical decision-making" },
              { num: "06", title: "Optimization", desc: "Continuous improvement based on outcomes data and clinical feedback" }
            ].map((step, i) => (
              <div key={i} className="group bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200 hover:border-orange-400 hover:shadow-lg transition">
                <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text mb-4">{step.num}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Ecosystem */}
      <section className="py-24 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Enterprise Integration</h2>
            <p className="text-xl text-gray-600">Works seamlessly with healthcare infrastructure</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              "Epic EHR",
              "Cerner EMR",
              "HL7 FHIR",
              "HIPAA Vault",
              "APIs & Webhooks"
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border-2 border-gray-200 text-center font-semibold text-gray-900 hover:border-orange-400 transition">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Flexible Pricing Models</h2>
            <p className="text-xl text-gray-600">Solutions for every healthcare organization size</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Per-Patient",
                price: "Custom",
                desc: "Pay per monitored patient per month",
                features: ["Device costs", "Cloud storage", "24/7 support"]
              },
              {
                title: "Enterprise",
                price: "Custom",
                desc: "Volume licensing for health systems",
                features: ["Unlimited devices", "Dedicated support", "Custom integration"]
              },
              {
                title: "Research",
                price: "Custom",
                desc: "Special rates for clinical trials",
                features: ["Study pricing", "Data export", "Publication support"]
              }
            ].map((plan, i) => (
              <div key={i} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border-2 border-gray-200 hover:border-orange-400 transition">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.title}</h3>
                <p className="text-orange-600 text-3xl font-black mb-2">{plan.price}</p>
                <p className="text-gray-600 mb-6">{plan.desc}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fi) => (
                    <li key={fi} className="text-gray-700 font-medium">✓ {feature}</li>
                  ))}
                </ul>
                <a href="https://orders.niroga.ai" target="_blank" rel="noopener noreferrer" className="block w-full text-center px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg font-semibold hover:shadow-lg transition">
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Healthcare?</h2>
          <p className="text-xl text-orange-50 mb-8">Contact our team to discuss your specific clinical needs</p>
          <a href="mailto:clinical@niroga.ai" className="inline-flex items-center gap-2 px-10 py-4 bg-white text-orange-600 rounded-lg font-semibold hover:bg-orange-50 transition">
            Contact Clinical Team <ArrowRight size={20} />
          </a>
        </div>
      </section>
    </main>
  );
}
