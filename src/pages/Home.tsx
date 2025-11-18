import React from 'react';
import { Heart, Activity, Radio, Cloud, ArrowRight, Zap, Shield, CheckCircle } from 'lucide-react';
import SEOHead, { pageMetadata } from '../components/SEOHead';

const Home: React.FC = () => {
  return (
    <>
      <SEOHead {...pageMetadata.home} />
      <main className="bg-white">
      {/* Hero Section with Banner Image - Curved Bottom */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] pt-16 sm:pt-24 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/60 md:via-blue-800/40 to-transparent z-10"></div>
          <img 
            src="/images/Eldercare_patient1.jpg" 
            alt="Healthcare Professional with Patient" 
            className="w-full h-full object-cover object-[65%_center] sm:object-[75%_center] md:object-right"
          />
        </div>

        {/* Curved Bottom Shape */}
        <div className="absolute bottom-0 left-0 right-0 z-10 -mb-px">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block h-12 sm:h-auto">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="white"/>
          </svg>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 pb-16 sm:pb-24">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6 sm:mb-8">
              <Zap className="text-blue-300" size={14} />
              <span className="text-xs sm:text-sm font-semibold text-white">AI-Powered Technology</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Reinventing Heart & Lung Monitoring with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-300 to-purple-300">
                AI-Driven Audio Cardiography
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 mb-6 sm:mb-8 leading-relaxed max-w-2xl">
              Continuous, intelligent, non-invasive health insights combining cutting-edge acoustic sensing with artificial intelligence
            </p>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <a 
                href="https://orders.niroga.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 rounded-full font-bold text-base sm:text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 text-center"
              >
                Order Stethoscope Now
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </a>
              <a 
                href="/devices"
                className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-md text-white rounded-full font-bold text-base sm:text-lg border-2 border-white/30 hover:bg-white/20 transition-all duration-300 text-center"
              >
                View All Devices
              </a>
            </div>

            {/* Stats Display */}
            <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl px-4 sm:px-6 py-3 sm:py-4 border border-white/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-black text-lg sm:text-xl">4</span>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-blue-200">Patents</p>
                    <p className="text-sm sm:text-base text-white font-bold">Filed</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl px-4 sm:px-6 py-3 sm:py-4 border border-white/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center flex-shrink-0">
                    <Shield className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-blue-200">24/7</p>
                    <p className="text-sm sm:text-base text-white font-bold">Continuous Monitoring</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-blue-600 font-bold uppercase tracking-wider mb-3 sm:mb-4 text-xs sm:text-sm">Technology</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
              AI-Enhanced Audio Cardiography
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Combining cutting-edge acoustic sensing with artificial intelligence to detect heart and lung anomalies early
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: Heart,
                title: "AI-Enhanced Auscultation",
                description: "Advanced machine learning algorithms analyze heart and lung sounds with unprecedented accuracy",
                color: "from-red-500 to-pink-500"
              },
              {
                icon: Radio,
                title: "3D Audio Localization",
                description: "Pinpoint the exact location of cardiac and pulmonary anomalies with spatial audio mapping",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: Activity,
                title: "Continuous Monitoring",
                description: "24/7 wearable tracking for comprehensive cardiopulmonary health insights",
                color: "from-purple-500 to-indigo-500"
              },
              {
                icon: Cloud,
                title: "Cloud Sharing & Analytics",
                description: "Seamlessly share data with healthcare providers and access detailed health analytics",
                color: "from-green-500 to-emerald-500"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="group relative bg-white p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                {/* Icon */}
                <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <feature.icon className="text-white" size={28} />
                </div>
                
                {/* Content */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{feature.description}</p>

                {/* Decorative gradient corner */}
                <div className="absolute -top-2 -right-2 w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-2xl"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section - Curved Design */}
      <section className="relative py-12 sm:py-16 md:py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        {/* Curved Top Shape */}
        <div className="absolute top-0 left-0 right-0 -mt-px">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full rotate-180 block h-12 sm:h-auto">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="white"/>
          </svg>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-16">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Left - Image */}
            <div className="relative order-2 md:order-1">
              <div className="absolute -top-6 -left-6 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-br from-blue-200 to-purple-200 rounded-3xl blur-3xl opacity-30"></div>
              <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-8 border-2 border-blue-100">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                  <img 
                    src="/images/Product.png" 
                    alt="Niroga Stethoscope" 
                    className="w-full h-auto"
                  />
                </div>
                
                {/* Floating Stats */}
                <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-white rounded-xl sm:rounded-2xl shadow-xl p-3 sm:p-6 border-2 border-blue-100">
                  <p className="text-xs sm:text-sm text-gray-600 mb-0.5 sm:mb-1">AI-Powered</p>
                  <p className="text-base sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Audio Analysis</p>
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-blue-100 rounded-full mb-4 sm:mb-6">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                <span className="text-xs sm:text-sm font-bold text-blue-600">How It Works</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Advanced Acoustic Intelligence
              </h2>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Through proprietary signal processing and AI-driven analysis, Niroga delivers comprehensive cardiopulmonary insights by
              </p>

              {/* Features List */}
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {[
                  "Capturing full-spectrum heart & lung sounds",
                  "AI-enhanced HRV and acoustic feature extraction", 
                  "Cloud + mobile app integration for sharing & analytics"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 sm:gap-4">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="text-white" size={18} />
                    </div>
                    <span className="text-sm sm:text-base md:text-lg font-semibold text-gray-800">{item}</span>
                  </div>
                ))}
              </div>

              <a 
                href="/technology"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold text-sm sm:text-base hover:shadow-2xl hover:scale-105 transition-all duration-300 w-full sm:w-auto"
              >
                See How it Works
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-blue-600 font-bold uppercase tracking-wider mb-3 sm:mb-4 text-xs sm:text-sm">Innovation</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
              Backed By <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Cutting-Edge Research</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Niroga AI's technology is protected by 4 filed patents and validated through ongoing clinical pilots with VA and military partners
            </p>
          </div>
        </div>
      </section>

      {/* Our Devices Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Our Devices</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Professional-grade stethoscope available now. Wearable chest band coming soon!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            {/* Electronic Stethoscope - MAIN HIGHLIGHT */}
            <div className="group relative bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl sm:rounded-3xl p-6 sm:p-10 border-2 border-indigo-400 hover:border-indigo-600 hover:shadow-2xl transition-all duration-300 md:col-span-2 lg:col-span-1">
              {/* Featured Badge */}
              <div className="absolute -top-3 -right-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                AVAILABLE NOW
              </div>
              
              <div className="mb-6 flex justify-center">
                <img src="/images/Product.png" alt="Niroga Electronic Stethoscope" className="w-48 sm:w-56 md:w-64 h-auto object-contain" />
              </div>
              
              <div className="inline-block px-3 sm:px-4 py-2 bg-indigo-600 text-white rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-6">
                USB-C Connected
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Niroga Stethoscope</h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6">
                Ultra-sensitive wired stethoscope for clinicians with high-fidelity sound, AI noise reduction, and 3D pathology localization.
              </p>

              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                {[
                  "High-fidelity audio capture",
                  "AI noise reduction",
                  "3D pathology localization",
                  "Multi-device compatibility"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 sm:gap-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="text-white" size={14} />
                    </div>
                    <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="https://orders.niroga.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-bold text-sm sm:text-base hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
              >
                Order Now <ArrowRight size={16} />
              </a>
            </div>

            {/* Chest Band - COMING SOON */}
            <div className="group relative bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl sm:rounded-3xl p-6 sm:p-10 border-2 border-teal-200 opacity-75 md:col-span-2 lg:col-span-1">
              {/* Coming Soon Badge */}
              <div className="absolute -top-3 -right-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                COMING SOON
              </div>
              
              <div className="mb-6 flex justify-center relative">
                <img src="/images/chest-band.png" alt="Niroga Chest Band" className="w-48 sm:w-56 md:w-64 h-auto object-contain opacity-60" />
              </div>
              
              <div className="inline-block px-3 sm:px-4 py-2 bg-teal-600 text-white rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-6">
                Bluetooth Wearable
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Niroga Chest Band</h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6">
                Continuous AI chest band for 24/7 cardiopulmonary tracking with HRV analysis, stress monitoring, and cloud-linked health dashboard.
              </p>

              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                {[
                  "Continuous acoustic monitoring",
                  "HRV & stress analysis", 
                  "IMU-based activity mapping",
                  "Cloud health dashboard"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 sm:gap-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="text-white" size={14} />
                    </div>
                    <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                disabled
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 bg-gray-400 text-white rounded-full font-bold text-sm sm:text-base w-full sm:w-auto cursor-not-allowed"
              >
                Coming Soon
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Domains */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
              Transforming Healthcare Across Multiple Domains
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { title: "PTSD & Military Health", desc: "AI-based HRV and acoustic pattern monitoring for stress and recovery tracking in veterans", color: "from-red-500 to-orange-500" },
              { title: "Fetal & Maternal Monitoring", desc: "Non-invasive, radiation-free real-time monitoring for mothers and babies", color: "from-pink-500 to-rose-500" },
              { title: "Family Remote Monitoring", desc: "Track aging parents' health remotely with shared auscultation data", color: "from-blue-500 to-cyan-500" },
              { title: "Pet Health", desc: "Detect stress, heart, and respiratory patterns in pets for veterinary care", color: "from-green-500 to-emerald-500" }
            ].map((solution, i) => (
              <div 
                key={i}
                className="group bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 border-2 border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${solution.color} mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}></div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{solution.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{solution.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Curved Design */}
      <section className="relative py-12 sm:py-16 md:py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 overflow-hidden">
        {/* Curved Top */}
        <div className="absolute top-0 left-0 right-0 z-0 -mt-px">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full rotate-180 block h-12 sm:h-auto">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="white"/>
          </svg>
        </div>

        {/* Decorative Circles */}
        <div className="absolute top-20 left-10 w-48 h-48 sm:w-64 sm:h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-purple-400/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-4xl mx-auto px-4 text-center pt-8 sm:pt-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Ready to Transform Healthcare?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-8 sm:mb-10 max-w-2xl mx-auto">
            Join our pilot program or learn more about investment opportunities
          </p>
          
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center">
            <a 
              href="/contact"
              className="px-8 sm:px-10 py-3 sm:py-4 bg-white text-blue-600 rounded-full font-bold text-base sm:text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
    </>
  );
};

export default Home;
