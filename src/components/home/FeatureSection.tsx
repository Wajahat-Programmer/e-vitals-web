import React from 'react';
import Image from 'next/image';

const FeatureSection = () => {
  return (
    <div className="section-padding bg-white">
      <div className="container-lg">
        {/* Heading Section */}
        <div className="text-center mb-16">
          <p
            className="font-semibold text-slate-900 mb-6 leading-snug"
            style={{ fontSize: '30px' }}
          >
            <span className="text-[#401b62]">For your </span>
            <span className="text-[#a18adb]">patients' vitals</span>
            <span className="text-[#401b62]">. For your </span>
            <span className="text-[#a18adb]">clinical decisions</span>
            <span className="text-[#401b62]">. For </span>
            <span className="text-[#a18adb]">practices</span>
            <span className="text-[#401b62]">. For </span>
            <span className="text-[#a18adb]">health systems</span>
            <span className="text-[#401b62]">
              . For all of it—managed in one place. For care that continues between visits.
            </span>
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-10 mb-20">
          {[
            {
              image: "/assets/kit.jpg",
              title: "No-Cost Welcome Kit",
              description:
                "Your patients receive pre-configured, easy-to-use medical devices delivered to their doorstep—no setup required, no cost to them. All devices are there to keep and begin monitoring right away.",
            },
            {
              image: "/assets/support.jpg",
              title: "Clinical Support",
              description:
                "Our care team provides personalized support for each patient, including guidance around vitals tracking, medication adherence, lifestyle habits, and tech setup—so your patients feel supported every step of the way.",
            },
            {
              image: "/assets/plan.jpg",
              title: "Tailored Monitoring Plan",
              description:
                "Every patient gets a plan built around their unique health profile and clinical goals. Small, consistent improvements—guided by real-time data—lead to better outcomes and fewer surprises.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center"
            >
              <div className="mb-6 flex justify-center">
                <div className="w-28 h-28 rounded-full overflow-hidden shadow-md border-4 border-white flex items-center justify-center bg-white">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="bg-gradient-to-r from-[rgb(var(--primary-rgb))] to-[rgba(var(--primary-rgb),0.8)] rounded-2xl p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            A high-quality care experience—anywhere, anytime
          </h2>
          <p className="text-blue-100 max-w-3xl mx-auto mb-8 text-lg">
            It started with a simple yet revolutionary idea. That everyone should have access to the best healthcare
            anywhere in the world on their terms. That includes you.
          </p>
          <button className="btn-primary inline-flex items-center">
            About Us <span className="ml-2">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
