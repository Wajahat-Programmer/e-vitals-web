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
            style={{ fontSize: '2.2rem', lineHeight: 1.4 }}
          >
            <span className="text-[#401b62]">For your </span>
            <span className="text-[#a18adb]">patients&rsquo; vitals</span>
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-6 justify-items-center">
          {[
            {
              image: "/assets/eVitals-RPMDashboard.png",
              title: "Smart RPM Dashboard",
              description:
                "Our platform delivers real-time monitoring, automated alerts, and an intuitive interface that’s designed for both clinicians and patients. With a dedicated patient portal, everyone stays engaged and informed—making remote care seamless, efficient, and effective.",
            },
            {
              image: "/assets/eVitals-devices.png",
              title: "FDA-Approved Devices",
              description:
                "We provide top-tier, FDA-approved devices for accurate and reliable vitals tracking. From blood pressure monitors to pulse oximeters, every tool is chosen for clinical precision—so you can trust the data that drives your care decisions.",
            },
            {
              image: "/assets/eVitals-reimbusement.png",
              title: "Reimbursement Support",
              description:
                "We handle the complexity of RPM billing so your team can focus on care. Our process covers Medicare and most private payers, including 99453, 99454, 99457/99458",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white p-10 rounded-3xl hover:shadow-xl transition-all duration-300 text-center hover:-translate-y-2 group w-full max-w-sm"
            >
              <div className="mb-6 flex justify-center">
                <div className="w-80 h-40 overflow-hidden  flex items-center justify-center group-hover:scale-105 transition-transform bg-white rounded-2xl">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={1000}
                    height={1000}
                    className="object-cover"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#401b62] mb-4">{feature.title}</h3>
              <p className="text-slate-600 text-[1.05rem] leading-relaxed">{feature.description}</p>
            </div>

          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
