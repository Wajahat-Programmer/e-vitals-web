"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
// import { Inter } from "next/font/google";

// // Load Inter
// const inter = Inter({
//   subsets: ["latin"],
//   weight: ["400", "600", "700"], // adjust weights as needed
// });

const features = [
  "HIPAA Compliance",
  "FDA-Approved Devices",
  "Reimbursement Support",
];

const Hero: React.FC = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

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
    <section className="relative h-[90vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/herobg.jpg"
          alt="eVitals Hero Background"
          fill
          className="object-cover kenburns"
          priority
        />

        {/* Left-side black gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="text-left pl-6 md:pl-12 lg:pl-20 max-w-3xl">
          <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight mb-6">
            Elevating Patient Care <br />
            with Advanced Remote
            <span className="text-[#B187E8]"> Patient Monitoring</span>
          </h1>

          <p className="text-white text-base md:text-lg mb-8">
            eVitals delivers comprehensive RPM to US healthcare facilities,
            enhancing patient outcomes while maximizing provider reimbursement
            and practice efficiency.
          </p>

          {/* Typewriter Effect */}
          <p className="text-[#B187E8] text-base md:text-4xl mb-8 font-bold">
            {text}
            <span className="border-r-2 border-white animate-pulse ml-1"></span>
          </p>

          {/* CTA Button */}
          <Link
            href="/for-organizations"
            className="bg-[#36036B] hover:bg-[#4b0d8d] text-white text-base font-semibold px-6 py-3 rounded-md shadow-md transition duration-300 inline-block"
          >
            Schedule a FREE demo →
          </Link>
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
