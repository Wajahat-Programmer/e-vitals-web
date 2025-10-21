"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { ChevronsRight, Check } from 'lucide-react';

const features = [
  "HIPAA-Compliant Workflows",
  "FDA-Cleared Devices",
  "RPM Reimbursement",
];

const backgroundImages = [
  "/assets/herobg.jpg",
  "/assets/bg2hero.jpg",
  "/assets/bghero3.jpg",
];

const Hero: React.FC = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const current = features[index % features.length];
    const speed = isDeleting ? 20 : 50; // speed in ms

    const handler = setTimeout(() => {
      if (!isDeleting) {
        setText(current.substring(0, text.length + 1));
        if (text === current) {
          setTimeout(() => setIsDeleting(true), 1000); // pause before deleting
        }
      } else {
        setText(current.substring(0, text.length - 1));
        if (text === "") {
          setIsDeleting(false);
          setIndex((prev) => prev + 1);
        }
      }
    }, speed);

    return () => clearTimeout(handler);
  }, [text, isDeleting, index]);

  return (
    <section className="relative h-[70vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div className="bg-white" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-start justify-between">
          {/* Left Content */}
          <div className="text-left max-w-3xl lg:max-w-2xl">
            <h1 className="text-black text-4xl md:text-6xl font-bold leading-tight mb-6">
              Turn-key  
              <span className="text-[#012c66]"> Remote Patient Monitoring</span>
              <br />
              <span className="text-black">for chronic conditions</span>
            </h1>

            <p className="text-black text-base md:text-lg mb-8 max-w-2xl">
              e-Vitals equips your practice with devices, onboarding, clinical dashboards,
              and billing support so you can improve outcomes, reduce readmissions,
              and grow reimbursable services without extra admin burden.
            </p>

            {/* CTA Buttons */}
            <div className="flex items-center gap-4 mb-8">
              <Link
                href="/demo"
                className="group bg-[#5ce1e6] hover:bg-[#1faaaf] text-white text-base font-semibold px-6 py-3 rounded-md shadow-md transition-all duration-300 inline-flex items-center gap-2 whitespace-nowrap flex-nowrap min-w-0"
              >
                Request a Demo
                <ChevronsRight size={20} className="transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0" />
              </Link>
              <Link
                href="/rpm/RPMSoftware"
                className="bg-[#012c66] hover:bg-[#02224d] text-white backdrop-blur px-6 py-3 rounded-md text-base font-semibold transition inline-flex gap-2 flex-nowrap whitespace-nowrap"
              >
                See Sample Billing Report
                <ChevronsRight size={20} className="transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0" />
              </Link>
            </div>

            {/* Features List */}
            <div className="flex flex-wrap gap-4">
              {["Device provisioning", "Clinical monitoring", "Billing workflows"].map((feature) => (
                <div key={feature} className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg">
                  <Check size={18} className="text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Simple LARGE Flex Box */}
          <div className="w-full lg:w-auto flex justify-center lg:justify-end">
            <div className="bg-white/80 backdrop-blur-xl border border-white/50 rounded-3xl shadow-2xl p-10 w-full max-w-lg lg:max-w-2xl xl:max-w-3xl">
              <h3 className="text-4xl font-bold text-gray-800 mb-10 text-center">
                Unified Patient Dashboard
              </h3>
              <div className="space-y-4">
                {[
                  "Device provisioning & setup",
                  "Clinical monitoring dashboards",
                  "Automated billing workflows", 
                  "HIPAA compliance management",
                  "FDA-cleared medical devices",
                  "Reimbursement optimization",
                  "Patient onboarding support",
                  "24/7 technical assistance"
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <Check size={20} className="text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-base">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
// // Hero.tsx
// import Image from 'next/image';
// import Link from 'next/link';
// import React from 'react';

// const Hero: React.FC = () => {
//   return (
//     <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
//       {/* Background image with overlay */}
//       <div className="absolute inset-0 bg-[rgba(var(--primary-rgb),0.7)] z-0">
//         <Image
//           src="/assets/background.jpg"
//           alt="Background"
//           fill
//           className="object-cover"
//           priority
//         />
//       </div>

//       {/* Content container */}
//       <div className="container mx-auto px-4 relative z-10">
//         <div className="max-w-4xl mx-auto text-center">
//           {/* Main heading */}
//           <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
//             Welcome to <span className="text-[rgb(var(--secondary-rgb))]">eVitals</span>
//           </h1>

//           {/* Subheading */}
//           <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl mx-auto">
//             Care beyond clinic, always connected.
//           </p>

//           {/* White card with content */}
//           <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 mb-12 shadow-2xl max-w-3xl mx-auto animate-fadeIn">
//             <p className="text-slate-700 text-lg md:text-xl mb-8 leading-relaxed">
//               eVitals is a remote patient monitoring solution designed to help clinicians deliver proactive, personalized care—right from a distance.
//               <br className="hidden sm:block" />
//               Because better insights lead to better outcomes.
//             </p>

//             {/* Get Started button */}
//             <div className="flex justify-center gap-4">
//               <Link
//                 href="#"
//                 className="btn-primary inline-flex items-center"
//               >
//                 Get Started <span className="ml-2">→</span>
//               </Link>
//               <Link
//                 href="#"
//                 className="btn-outline inline-flex items-center"
//               >
//                 Learn More
//               </Link>
//             </div>
//           </div>

//           {/* Bottom links */}
//           <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-12">
//             <Link href="#" className="text-blue-100 hover:text-white font-medium text-lg transition-colors">
//               For Individuals
//             </Link>
//             <Link href="#" className="text-blue-100 hover:text-white font-medium text-lg transition-colors">
//               For Organizations
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
