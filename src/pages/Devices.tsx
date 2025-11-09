import { Bluetooth, Battery, Smartphone, Cloud, ArrowRight, Check } from 'lucide-react';

export default function Devices() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-96 pt-28 pb-16 overflow-hidden bg-gradient-to-br from-teal-600 to-cyan-500">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <p className="text-teal-200 font-semibold uppercase tracking-widest mb-4">Hardware</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">Our Devices</h1>
          <p className="text-xl text-teal-50 max-w-3xl leading-relaxed">Premium hardware designed for continuous acoustic health monitoring with enterprise-grade reliability</p>
        </div>
      </section>

      {/* Niroga Chest Band */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            {/* Left - Content */}
            <div>
              <p className="text-teal-600 font-bold uppercase tracking-widest mb-4">Device 01</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Niroga Chest Band</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">Ultra-sensitive acoustic sensors in a comfortable, hospital-grade fabric band. Continuous 24/7 monitoring without interruption.</p>
              
              <div className="space-y-4 mb-8">
                {[
                  "Ultra-sensitive MEMS microphones capture full-spectrum sound",
                  "Hypoallergenic, breathable fabric rated for 14-day continuous wear",
                  "12-hour battery life with Type-C quick charging",
                  "Waterproof to IP67 - shower and swim-ready",
                  "Wireless Bluetooth 5.2 with 100m range",
                  "App-controlled settings and cloud sync"
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-teal-600 to-cyan-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={16} className="text-white" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <a href="https://orders.niroga.ai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-lg font-semibold hover:shadow-xl transition">
                Order Now <ArrowRight size={18} />
              </a>
            </div>

            {/* Right - Visual */}
            <div className="flex items-center justify-center">
              <div className="relative w-full h-96 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl flex items-center justify-center border-2 border-teal-200">
                <div className="text-9xl">🩺</div>
              </div>
            </div>
          </div>

          {/* Specs Grid */}
          <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl p-8 border border-teal-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Technical Specifications</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  <p className="text-teal-600 font-semibold text-sm uppercase mb-2">{spec.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{spec.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Niroga Stethoscope */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Visual */}
            <div className="order-2 md:order-1 flex items-center justify-center">
              <div className="relative w-full h-96 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl flex items-center justify-center border-2 border-indigo-200 overflow-hidden">
                <img src="/src/assets/Product.png" alt="Niroga Stethoscope" className="w-3/4 h-auto object-contain" />
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
      <section className="py-20 bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Monitor?</h2>
          <p className="text-xl text-teal-50 mb-8">Choose the device that fits your healthcare needs</p>
          <a href="https://orders.niroga.ai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-10 py-4 bg-white text-teal-600 rounded-lg font-semibold hover:bg-teal-50 transition">
            View All Devices <ArrowRight size={20} />
          </a>
        </div>
      </section>
    </main>
  );
}
