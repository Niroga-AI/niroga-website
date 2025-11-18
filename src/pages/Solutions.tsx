import { ArrowRight, Heart, Users, Baby, Zap } from 'lucide-react';
import SEOHead, { pageMetadata } from '../components/SEOHead';

export default function Solutions() {
  return (
    <>
      <SEOHead {...pageMetadata.solutions} />
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
                <img src="/images/Eldercare_patient.jpg" alt="Eldercare Patient" className="w-full h-full object-cover" />
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
              
              {/* Pet Image */}
              <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                <img 
                  src="/images/VetWithDog.png" 
                  alt="Pet Health Monitoring" 
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="relative p-12 text-white min-h-96 flex flex-col justify-between z-10">
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

      {/* Telemedicine & Family Connection Use Cases */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Telemedicine & Family Connection</h2>
            <p className="text-xl text-gray-600">Remote auscultation powered by Niroga — hear hearts clearly from anywhere</p>
          </div>

          <div className="flex flex-col gap-12 md:gap-16">
            {/* Telemedicine: Doctor listens remotely */}
            <div className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white flex flex-col md:flex-row">
              <div className="absolute inset-0 opacity-15 group-hover:opacity-25 transition-opacity duration-500"></div>
              <div className="md:w-[48%] lg:w-1/2 h-full">
                <img
                  src="/images/Doctorwittelemedicine.png"
                  alt="Doctor remotely listening via telemedicine"
                  className="w-full h-full min-h-[380px] object-cover object-center"
                />
              </div>
              <div className="md:w-[52%] lg:w-1/2 p-8 flex flex-col justify-center">
                  <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 mb-2">Use Case</p>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Telemedicine Auscultation</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    A clinician can perform real-time heart and lung listening while the patient (or caregiver) places the
                    Niroga stethoscope at home. High-fidelity audio and AI-guided placement ensure clinical-quality auscultation
                    over a secure connection.
                  </p>
                  <ul className="space-y-2 text-gray-700 mb-6">
                    <li>• Live remote listening with clinical clarity</li>
                    <li>• AI prompts for correct placement and recording</li>
                    <li>• Session notes and recordings saved to the chart</li>
                  </ul>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white bg-linear-to-r from-blue-600 to-purple-600 font-semibold hover:shadow-lg transition"
                  >
                    Talk to Sales <ArrowRight size={16} />
                  </a>
              </div>
            </div>

            {/* Family connection: child hears mother's heart from abroad */}
            <div className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white flex flex-col md:flex-row">
              <div className="md:w-[52%] lg:w-1/2 order-2 md:order-1 p-8 flex flex-col justify-center">
                  <p className="text-sm font-semibold uppercase tracking-wider text-rose-600 mb-2">Use Case</p>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Cross‑Border Family Heart Listening</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Families separated by distance can listen to each other’s heart sounds in real time. A mother at home places the
                    Niroga stethoscope, and her child abroad can listen live and share the moment—strengthening connection and enabling
                    remote wellness checks.
                  </p>
                  <ul className="space-y-2 text-gray-700 mb-6">
                    <li>• Private, secure live heart sharing</li>
                    <li>• Record and replay treasured heartbeats</li>
                    <li>• Optional clinician review when needed</li>
                  </ul>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white bg-linear-to-r from-rose-600 to-orange-600 font-semibold hover:shadow-lg transition"
                  >
                    Get Early Access <ArrowRight size={16} />
                  </a>
              </div>
              <div className="md:w-[48%] lg:w-1/2 order-1 md:order-2 h-full">
                <img
                  src="/images/Eldercare_patient.png"
                  alt="Family listening to heart sounds remotely"
                  className="w-full h-full min-h-[380px] object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Dedicated Veterinary Telemedicine Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 items-stretch">
            {/* Image Side */}
            <div className="lg:col-span-7 rounded-3xl overflow-hidden shadow-xl ring-1 ring-gray-200 bg-white">
              <img
                src="/images/VetWithDog.png"
                alt="Veterinarian performing remote-enabled auscultation on a dog"
                className="w-full h-full object-cover object-center min-h-[420px]"
                loading="lazy"
              />
            </div>
            {/* Content Side */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="mb-6">
                <p className="text-sm font-semibold tracking-wider uppercase text-amber-600 mb-2">Veterinary Telemedicine</p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">Remote Auscultation for Companion Animal Care</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Extend high-quality cardiac and respiratory assessment beyond the clinic. Niroga enables veterinarians to
                  guide pet owners in real time, capturing diagnostic-grade heart and lung sounds for triage, follow‑ups,
                  anesthesia risk evaluation, and post‑operative recovery.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  'Pre‑op & anesthesia risk review',
                  'Post‑surgery recovery monitoring',
                  'Chronic condition management',
                  'Senior pet cardiopulmonary trends'
                ].map((point) => (
                  <div key={point} className="flex items-start gap-2">
                    <span className="mt-1 inline-block w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                    <span className="text-gray-700 text-sm font-medium leading-snug">{point}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-4 text-gray-700 text-sm leading-relaxed mb-8">
                <p>
                  AI‑assisted placement guides owners to optimal acoustic windows. Automatic quality scoring prevents
                  unusable captures, while encrypted sharing lets specialists review complex cases without delay.
                </p>
                <p>
                  Historical waveform comparison and trend analytics help intervene earlier in degenerative or progressive
                  cardiopulmonary disease, improving outcomes and reducing in‑clinic stress for anxious animals.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a href="/contact" className="px-7 py-3 rounded-full bg-linear-to-r from-amber-600 to-orange-600 text-white font-semibold shadow hover:shadow-lg transition inline-flex items-center gap-2">
                  Request Vet Pilot <ArrowRight size={16} />
                </a>
                <a href="https://orders.niroga.ai" target="_blank" rel="noopener noreferrer" className="px-7 py-3 rounded-full border border-amber-300 text-amber-700 font-semibold hover:bg-amber-50 transition">
                  View Pricing
                </a>
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
    </>
  );
}
