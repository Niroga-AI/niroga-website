import { Bluetooth, Battery, Smartphone, Cloud, ArrowRight, Check } from 'lucide-react';
import SEOHead, { pageMetadata } from '../components/SEOHead';

export default function Devices() {
  return (
    <>
      <SEOHead {...pageMetadata.devices} />
      <main className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-64 sm:min-h-80 md:min-h-96 pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 overflow-hidden bg-gradient-to-br from-indigo-600 to-purple-500">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-10 w-48 h-48 sm:w-72 sm:h-72 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <p className="text-purple-200 font-semibold uppercase tracking-widest mb-3 sm:mb-4 text-xs sm:text-sm">Hardware</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">Our Devices</h1>
          <p className="text-base sm:text-lg md:text-xl text-purple-50 max-w-3xl leading-relaxed">Professional-grade stethoscope available now • Wearable chest band launching soon</p>
        </div>
      </section>

      {/* Niroga Stethoscope - MAIN PRODUCT */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16 md:mb-24">
            {/* Left - Visual */}
            <div className="order-2 md:order-1 flex items-center justify-center">
              <div className="relative w-full h-64 sm:h-80 md:h-96 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl sm:rounded-3xl flex items-center justify-center border-2 border-indigo-200 overflow-hidden">
                <img src="/images/Product.png" alt="Niroga Stethoscope" className="w-2/3 sm:w-3/4 h-auto object-contain" />
                {/* Available Now Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                  ✓ AVAILABLE NOW
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="order-1 md:order-2">
              <p className="text-indigo-600 font-bold uppercase tracking-widest mb-3 sm:mb-4 text-xs sm:text-sm">Featured Device</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Niroga Stethoscope</h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">Professional-grade digital stethoscope with advanced acoustic filtering. Perfect for clinical environments and point-of-care assessment.</p>
              
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {[
                  "Dual acoustic chambers for superior clarity",
                  "Active noise cancellation up to -40dB",
                  "Wired & wireless modes for maximum flexibility",
                  "HIPAA-compliant data encryption",
                  "Instant cloud backup and sharing",
                  "Real-time waveform visualization"
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-2 sm:gap-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={14} className="text-white" />
                    </div>
                    <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <a href="https://orders.niroga.ai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-xl transition text-sm sm:text-base w-full sm:w-auto">
                Order Now <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Niroga Chest Band - COMING SOON */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16 md:mb-24">
            {/* Left - Content */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg z-10">
                🚀 COMING SOON
              </div>
              <p className="text-teal-600 font-bold uppercase tracking-widest mb-3 sm:mb-4 text-xs sm:text-sm mt-12">Next Generation</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Niroga Chest Band</h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">Ultra-sensitive acoustic sensors in a comfortable, hospital-grade fabric band. Continuous 24/7 monitoring without interruption.</p>
              
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 opacity-60">
                {[
                  "Ultra-sensitive MEMS microphones capture full-spectrum sound",
                  "Hypoallergenic, breathable fabric rated for 14-day continuous wear",
                  "12-hour battery life with Type-C quick charging",
                  "Waterproof to IP67 - shower and swim-ready",
                  "Wireless Bluetooth 5.2 with 100m range",
                  "App-controlled settings and cloud sync"
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-2 sm:gap-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r from-teal-600 to-cyan-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={14} className="text-white" />
                    </div>
                    <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                disabled
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 bg-gray-400 text-white rounded-lg font-semibold cursor-not-allowed text-sm sm:text-base w-full sm:w-auto"
              >
                Coming Soon
              </button>
            </div>

            {/* Right - Visual */}
            <div className="flex items-center justify-center order-first md:order-last">
              <div className="relative w-full h-64 sm:h-80 md:h-96 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl sm:rounded-3xl flex items-center justify-center border-2 border-teal-200 opacity-75">
                <img src="/images/chest-band.png" alt="Niroga Chest Band" className="w-2/3 sm:w-3/4 h-auto object-contain opacity-60" />
              </div>
            </div>
          </div>

          {/* Specs Grid */}
          <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-teal-200 opacity-60">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">Technical Specifications (Preview)</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {[
                { label: "Microphones", value: "4x MEMS Arrays" },
                { label: "Frequency Range", value: "20Hz - 8kHz" },
                { label: "Battery Life", value: "12 Hours" },
                { label: "Charging Time", value: "45 Minutes" },
                { label: "Weight", value: "85g" },
                { label: "Connectivity", value: "BLE 5.2" },
                { label: "Water Resistance", value: "IP67" },
                { label: "Operating Temp", value: "-10°C to 50°C" }
              ].map((spec, i) => (
                <div key={i}>
                  <p className="text-teal-600 font-semibold text-xs sm:text-sm uppercase mb-1 sm:mb-2">{spec.label}</p>
                  <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">{spec.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases for Stethoscope */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Visual */}
            <div className="order-2 md:order-1 flex items-center justify-center">
              <div className="relative w-full h-96 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl flex items-center justify-center border-2 border-indigo-200 overflow-hidden">
                <img src="/images/Product.png" alt="Niroga Stethoscope" className="w-3/4 h-auto object-contain" />
              </div>
            </div>

            {/* Right - Content */}
            <div className="order-1 md:order-2">
              <p className="text-indigo-600 font-bold uppercase tracking-widest mb-4">Device 02</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Niroga Stethoscope</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">Professional-grade digital stethoscope with advanced acoustic filtering. Perfect for clinical environments and point-of-care assessment.</p>
              
              <div className="space-y-4 mb-8">
                {[
                  "Dual acoustic chambers for superior clarity",
                  "Active noise cancellation up to -40dB",
                  "Wired & wireless modes for maximum flexibility",
                  "HIPAA-compliant data encryption",
                  "Instant cloud backup and sharing",
                  "Real-time waveform visualization"
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={16} className="text-white" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <a href="https://orders.niroga.ai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-xl transition">
                Order Now <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases for Chest Band */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-teal-600 font-bold uppercase tracking-widest mb-4">Use Cases</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Chest Band Applications</h2>
            <p className="text-xl text-gray-600">Ideal for continuous monitoring scenarios</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Hospital Wards", desc: "24/7 patient monitoring post-surgery and critical care", icon: "🏥" },
              { title: "Home Monitoring", desc: "Chronic disease management from the comfort of home", icon: "🏠" },
              { title: "Clinical Trials", desc: "Reliable data collection for pharmaceutical research", icon: "🔬" },
              { title: "Fitness & Wellness", desc: "Athletic performance and recovery optimization", icon: "🏃" },
              { title: "Telemedicine", desc: "Remote patient assessment by healthcare providers", icon: "��" },
              { title: "Insurance Programs", desc: "Risk assessment and preventive care incentives", icon: "📊" }
            ].map((use, i) => (
              <div key={i} className="group bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl border border-gray-200 hover:border-teal-400 hover:shadow-lg transition">
                <div className="text-5xl mb-4">{use.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{use.title}</h3>
                <p className="text-gray-600">{use.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases for Stethoscope */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-indigo-600 font-bold uppercase tracking-widest mb-4">Use Cases</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Stethoscope Applications</h2>
            <p className="text-xl text-gray-600">Built for clinical and professional settings</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Primary Care", desc: "General practitioner examinations and diagnosis", icon: "👨‍⚕️" },
              { title: "Cardiology", desc: "Specialized cardiac assessment and arrhythmia detection", icon: "❤️" },
              { title: "Pulmonology", desc: "Lung disease diagnosis and respiratory monitoring", icon: "💨" },
              { title: "Emergency Dept", desc: "Rapid triage and acute care assessment", icon: "🚑" },
              { title: "Nursing", desc: "Bedside assessment and continuous patient monitoring", icon: "👩‍⚕️" },
              { title: "Medical Education", desc: "Training tools for nursing and medical students", icon: "📚" }
            ].map((use, i) => (
              <div key={i} className="group bg-white p-8 rounded-2xl border border-indigo-200 hover:border-indigo-400 hover:shadow-lg transition">
                <div className="text-5xl mb-4">{use.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{use.title}</h3>
                <p className="text-gray-600">{use.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connectivity & Integration */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Seamless Integration</h2>
            <p className="text-xl text-gray-600">Works with your favorite healthcare platforms</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { name: "iOS App", icon: Smartphone },
              { name: "Android App", icon: Smartphone },
              { name: "Cloud Sync", icon: Cloud },
              { name: "Bluetooth", icon: Bluetooth },
              { name: "Battery Mgmt", icon: Battery }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-4 p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-lg flex items-center justify-center">
                  <item.icon className="text-white" size={24} />
                </div>
                <span className="font-semibold text-gray-900">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Ready to Experience Professional-Grade Audio Cardiography?</h2>
          <p className="text-base sm:text-lg md:text-xl text-indigo-50 mb-6 sm:mb-8">Order the Niroga Stethoscope today. Chest Band launching soon!</p>
          <a href="https://orders.niroga.ai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 sm:px-10 py-3 sm:py-4 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-indigo-50 transition text-sm sm:text-base">
            Order Stethoscope Now <ArrowRight size={20} />
          </a>
        </div>
      </section>
    </main>
    </>
  );
}
