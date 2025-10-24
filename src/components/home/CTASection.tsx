"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronsRight } from "lucide-react";

const CTASection = () => {
  return (
    <section
      className="relative py-12 md:py-16 overflow-hidden"
      style={{
        backgroundImage: "url('/assets/Readytosee-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="lg:w-1/2 text-left mb-8 lg:mb-0 lg:pr-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#012c66] mb-6 leading-tight">
              Ready to see it in action?
            </h2>

            <p className="text-base md:text-lg text-black mb-8 leading-relaxed text-justify">
              Start improving outcomes and growing your practice today with our
              e-Vitals RPM platform, FDA-cleared devices, and dedicated support
              team — deliver higher-quality care while generating new revenue
              streams.
            </p>

            <div className="space-y-4 mb-8">
              {/* Phone */}
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-full bg-white/30 backdrop-blur-md shadow-md">
                  <svg
                    className="w-5 h-5 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-black text-sm font-medium">Call us at</p>
                  <p className="text-black text-base font-semibold">
                    +1 (800) 123-4567
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-full bg-white/30 backdrop-blur-md shadow-md">
                  <svg
                    className="w-5 h-5 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-black text-sm font-medium">Email us at</p>
                  <p className="text-black text-base font-semibold">
                    support@evitals.com
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              href="/demo"
              className="group bg-[#5ce1e6] hover:bg-[#1faaaf] text-white text-base font-semibold px-6 py-3 rounded-md shadow-md transition-all duration-300 inline-flex items-center gap-2"
            >
              Request a Demo
              <ChevronsRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-[90%] sm:w-[80%] lg:w-[85%] rounded-3xl backdrop-blur-lg bg-white/20 shadow-2xl overflow-hidden">
              <Image
                src="/assets/remote-consultations.png"
                alt="eVitals RPM Platform Demo"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
