"use client";

import Image from "next/image";
import Button from "@/components/home/Button";

const WeightMonitoring = () => {
  return (
    <main className="bg-white text-black px-6 py-16 sm:px-10 md:px-20">
      {/* Hero Section */}
      <section className="mb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center border-4 border-[#B187E8] rounded-2xl p-6 shadow-xl">
          <div>
            <h1 className="text-4xl font-extrabold text-[#2E1065] mb-6">Advanced Weight Analytics</h1>
            <p className="text-lg text-gray-700 mb-6">
              Smart weight monitoring with body composition insights for comprehensive care. 
              e-Vitals transforms weight data into meaningful clinical actions.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Button text="View Clinical Applications" variant="primary" />
              <Button text="Device Specifications" variant="outline" />
            </div>
          </div>
          <div className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/assets/weight-analytics-hero.jpg"
              alt="Advanced Weight Analytics"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="mb-20 bg-[#FAFAFB] rounded-2xl p-12 shadow-inner">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#2E1065] mb-12 text-center">Our Weight Intelligence Technology</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-[#2E1065] mb-4">Beyond the Scale</h3>
              <p className="text-gray-700 mb-6">
                e-Vitals' proprietary algorithms go deeper than traditional weight tracking:
              </p>
              <ul className="space-y-4">
                {[
                  "Rate of weight change patterns",
                  "Circadian variation trends",
                  "Correlation with medication changes",
                  "Response to dietary adjustments",
                  "Comparison to baseline dry weight",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="bg-[#B187E8] rounded-full p-1 mr-3 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-64">
              <Image
                src="/assets/weight-analytics-dashboard.jpg"
                alt="Weight Analytics Dashboard"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-[#2E1065] mb-12 text-center">Specialized Monitoring Solutions</h2>
        <div className="space-y-12">
          {[
            {
              title: "Heart Failure Management",
              description: "Early fluid retention detection with predictive alerts.",
              features: [
                "Dry weight tracking",
                "Diuretic response analysis",
                "3-day weight trend forecasting",
                "Integrated with cardiac devices",
              ],
              image: "/assets/hf-weight-monitoring.jpg",
            },
            {
              title: "Bariatric Success Tracking",
              description: "Body composition analytics for surgical and non-surgical weight loss.",
              features: [
                "Muscle mass preservation scoring",
                "Metabolic age tracking",
                "Plateau prediction",
                "Behavioral change feedback",
              ],
              image: "/assets/bariatric-tracking.jpg",
            },
          ].map((program, index) => (
            <div
              key={index}
              className="grid md:grid-cols-2 gap-6 bg-white border border-[#E5E7EB] rounded-xl shadow-md overflow-hidden"
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#2E1065] mb-3">{program.title}</h3>
                <p className="text-gray-700 mb-4">{program.description}</p>
                <ul className="space-y-2 mb-6">
                  {program.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-5 h-5 text-[#B187E8] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-800">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button text="Learn More" variant="outline" />
              </div>
              <div className="relative h-64 md:h-full">
                <Image src={program.image} alt={program.title} fill className="object-cover" />
              </div>
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

export default WeightMonitoring;
