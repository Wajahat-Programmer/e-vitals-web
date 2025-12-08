"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { ChevronsRight, Check } from 'lucide-react';

const features = [
  "HIPAA-Compliant Workflows",
  "FDA-Cleared Devices",
  "RPM Reimbursement",
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
    // <section className="relative min-h-screen flex items-center overflow-hidden py-8 lg:py-0">
    <section className="relative min-h-[80vh] sm:min-h-screen flex items-center overflow-hidden py-6 sm:py-8 lg:py-0">
      {/* Background image */}
      {/* <div className="absolute inset-0 z-0">
        <div className="bg-white" />
      </div> */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <div className="bg-white w-full h-full" />
      </div>


      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-12">
          {/* Left Content - Always comes first on all screens */}
          <div className="text-left w-full lg:max-w-2xl">
            <h1 className="text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
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
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
              {/* <Link
                href="/demo"
                className="group bg-[#5ce1e6] hover:bg-[#1faaaf] text-white text-base font-semibold px-6 py-3 rounded-md shadow-md transition-all duration-300 inline-flex items-center gap-2 whitespace-nowrap justify-center w-full sm:w-auto"
              >
                Request a Demo
                <ChevronsRight size={20} className="transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0" />
              </Link> */}
              <Link
                href="/rpm/RPMSoftware"
                className="bg-[#012c66] hover:bg-[#02224d] text-white backdrop-blur px-6 py-3 rounded-md text-base font-semibold transition inline-flex gap-2 items-center justify-center w-full sm:w-auto"
              >
                See Sample Billing Report
                <ChevronsRight size={20} className="transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0" />
              </Link>
            </div>

            {/* Features List */}
            <div className="flex flex-wrap gap-3">
              {["Device provisioning", "Clinical monitoring", "Billing workflows"].map((feature) => (
                <div key={feature} className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg">
                  <Check size={16} className="text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Dashboard Card - Always comes after the heading content on small screens */}
          <div className="w-full lg:w-auto flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="bg-white/80 backdrop-blur-xl border border-white/50 rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 w-full max-w-md lg:max-w-lg xl:max-w-2xl">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 lg:mb-10 text-center">
                Unified Patient Dashboard
              </h3>
              <div className="space-y-3 lg:space-y-4">
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
                    <Check size={18} className="text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm lg:text-base">{feature}</span>
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