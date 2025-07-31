'use client';
import Image from 'next/image';
import Button from '@/components/home/Button';

const GlucoseMonitoring = () => {
  return (
    <main className="bg-white text-black px-6 py-16 sm:px-10 md:px-20">
      {/* Hero Section */}
      <section className="mb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#2E1065] mb-6">Beyond Basic Glucose Tracking</h2>
            <p className="text-lg text-gray-700 mb-6">
              e-Vitals' Glycemic Intelligence Platform transforms raw glucose data into actionable 
              clinical insights. Our system identifies hidden patterns and provides personalized 
              recommendations for both patients and providers.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Button text="See Platform Demo" variant="primary" />
              <Button text="Research Findings" variant="outline" />
            </div>
          </div>
          <div className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-lg">
            <Image 
              src="/assets/glucose-insights-hero.jpg" 
              alt="Advanced Glucose Analytics" 
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-[#2E1065] text-white rounded-2xl p-12 mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Proven Outcomes in Diabetes Care</h2>
          <div className="grid md:grid-cols-2 gap-8 mt-8 text-left">
            <div>
              <h3 className="text-xl font-semibold mb-4">For Patients:</h3>
              <ul className="space-y-3">
                {[
                  "38% reduction in hypoglycemic events",
                  "1.5-point average HbA1c reduction",
                  "72% improvement in testing compliance",
                  "83% feel more in control"
                ].map((point, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="w-5 h-5 text-[#B187E8] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">For Providers:</h3>
              <ul className="space-y-3">
                {[
                  "50% less time reviewing glucose data",
                  "Prioritized patient lists",
                  "Automated Medicare documentation",
                  "Integrated with major EHRs"
                ].map((point, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="w-5 h-5 text-[#B187E8] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center text-[#2E1065] mb-12">Exclusive Glucose Intelligence</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Meal Impact Scoring", description: "Quantifies how different meals affect individual glucose responses", icon: "🍽️" },
            { title: "Microtrend Detection", description: "Identifies subtle patterns before they become problematic", icon: "🔍" },
            { title: "Insulin Optimization", description: "Recommends timing adjustments based on circadian patterns", icon: "⏱️" },
            { title: "Stress Correlation", description: "Links glucose variability with activity and sleep data", icon: "🧘" },
            { title: "Personalized Ranges", description: "Dynamic targets based on individual risk factors", icon: "🎯" },
            { title: "Provider Alerts", description: "Smart notifications only when clinical action is needed", icon: "📩" }
          ].map((feature, i) => (
            <div key={i} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-[#2E1065] mb-2">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
      

      {/* CTA Section */}
      <section className="relative text-center px-6 py-16 bg-gradient-to-br from-purple-100 via-purple-200 to-purple-100 rounded-3xl shadow-xl overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 600 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-10">
            <circle cx="100" cy="100" r="80" fill="#a78bfa" />
            <circle cx="500" cy="80" r="60" fill="#7c3aed" />
            <circle cx="300" cy="180" r="40" fill="#c4b5fd" />
          </svg>
        </div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-purple-900 mb-6">Let’s Make Care Easier — Together</h2>
          <p className="text-xl text-gray-800 mb-8 max-w-3xl mx-auto">
            Want to see how E-Vitals can simplify patient monitoring, reduce staff load, and grow your practice?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button text="Schedule Consultation" variant="primary" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default GlucoseMonitoring;
