import React from 'react';
import Image from 'next/image';

const FeatureSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-lg mx-auto px-4">
        {/* Heading Section */}
        <div className="text-center mb-16">
          <p
            className="font-semibold text-slate-900 mb-6 leading-snug"
            style={{ fontSize: '2.1rem', lineHeight: 1.3 }}
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
                "Patients receive pre-configured, easy-to-use medical devices delivered to their doorstep—no setup required, no cost to them. All devices are theirs to keep and start monitoring right away.",
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
              className="bg-white p-8 rounded-3xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 text-center hover:-translate-y-2 group"
            >
              <div className="mb-6 flex justify-center">
                <div className="w-28 h-28 rounded-full overflow-hidden border border-gray-200 flex items-center justify-center group-hover:scale-105 transition-transform bg-white">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-extrabold text-[#401b62] mb-3">{feature.title}</h3>
              <p className="text-slate-600 text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
