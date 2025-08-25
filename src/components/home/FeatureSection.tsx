"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
              image: "/assets/eVitals-Devices.png",
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

      <div className="container-lg mx-auto px-4 py-16">
        {/* Specialties We Serve */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#270949] mb-3">Specialties We Serve</h1>
          <p className="text-slate-600 max-w-3xl mx-auto">
            We work with healthcare providers across multiple specialties, delivering condition-specific monitoring and actionable insights:
          </p>
          <Link
            href="/for-organizations"
            className="inline-flex items-center text-gray-500 underline hover:text-[#36036B] font-bold px-6 py-1 rounded-md transition">
            Learn More →
          </Link>
        </div>

        <div className="relative overflow-hidden">
          {/* Left fade overlay */}
          <div className="absolute left-0 top-0 w-40 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          
          {/* Right fade overlay */}
          <div className="absolute right-0 top-0 w-40 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          
          <div className="marquee">
            <ul className="shrink-0 flex gap-4 md:gap-6 py-2 pr-4">
              {[
                "Family & Internal Medicine",
                "Cardiology",
                "Nephrology",
                "Endocrinology",
                "Pulmonology",
                "Geriatrics",
                "Rural Health Clinics",
              ].map((item) => (
                <li
                  key={item}
                  className="shrink-0 rounded-2xl px-5 py-3 bg-white font-semibold"
                >
                  <span className="text-[#B187E8]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <ul className="shrink-0 flex gap-4 md:gap-6 py-2 pr-4" aria-hidden="true">
              {[
                "Family & Internal Medicine",
                "Cardiology",
                "Nephrology",
                "Endocrinology",
                "Pulmonology",
                "Geriatrics",
                "Rural Health Clinics",
              ].map((item, idx) => (
                <li
                  key={`${item}-${idx}`}
                  className="shrink-0 rounded-2xl px-5 py-3 bg-white font-semibold"
                >
                  <span className="text-[#B187E8]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <style jsx>{`
            .marquee { 
              display: flex; 
              width: max-content; 
              animation: scrollLeft 28s linear infinite; 
            }
            
            @keyframes scrollLeft { 
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
