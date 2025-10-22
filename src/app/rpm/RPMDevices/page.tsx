"use client";

import Image from "next/image";
import Link from "next/link";
import CTASection from "../../../components/home/CTASection";
import { useEffect, useState } from "react";
import { ChevronsRight } from 'lucide-react';

const RPMDevices = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="bg-white text-black">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full overflow-hidden bg-white py-16 md:py-0">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
            {/* Left Content */}
            <div
              className={`transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-[#0B2B5C]">
                FDA-Cleared Devices Designed for Seamless Remote Care
              </h1>
              <p className="text-lg md:text-xl mb-6 text-gray-700 leading-relaxed">
                Our RPM devices are built to deliver accurate, real-time patient
                data directly to your clinic—no complicated setup, no missed
                readings. From 2-in-1 monitoring devices to high-capacity
                weight scales, each device integrates with our eVitals RPM
                platform to ensure providers get the insights they need and
                patients enjoy a simple, stress-free experience.
              </p>
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
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
            </div>

            {/* Right Image with Icons */}
            <div
              className={`relative transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <div className="relative">
                {/* Background Image for Icons */}
                <div className="absolute -top-20 -left-20 -right-20 -bottom-20 z-0">
                  <Image
                    src="/assets/device1-img.jpg" 
                    alt="Background Pattern"
                    fill
                    className="object-cover rounded-4xl  opacity-30 ml-15"
                    quality={100}
                  />
                </div>

                {/* Phone Image */}
                <div className="relative z-10 rounded-4xl mx-auto w-64 h-[500px]">
                  {/* <Image
                    src="/assets/device1-img.jpg"
                    alt="RPM Mobile App"
                    fill
                    className="object-contain"
                    quality={100}
                  /> */}
                </div>

                {/* Floating Icons */}
                <div className="absolute top-0 left-0 w-full h-full z-20">
                  {/* Medical Cross Icon - Top Left */}
                  <div className="absolute top-8 left-4 w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center shadow-lg animate-bounce">
                    <svg
                      className="w-10 h-10 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                    </svg>
                  </div>

                  {/* Heart Icon - Top Center */}
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-red-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <svg
                      className="w-12 h-12 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  </div>

                  {/* Lock Icon - Top Right */}
                  <div className="absolute top-12 right-8 w-14 h-14 bg-blue-400 rounded-2xl flex items-center justify-center shadow-lg animate-pulse">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
                    </svg>
                  </div>

                  {/* Chart Icon - Left */}
                  <div className="absolute top-1/3 left-0 w-14 h-14 bg-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
                    </svg>
                  </div>

                  {/* Calendar Icon - Right */}
                  <div className="absolute top-1/3 right-4 w-14 h-14 bg-purple-600 rounded-2xl flex items-center justify-center shadow-lg animate-bounce">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
                    </svg>
                  </div>

                  {/* Document Icon - Bottom Left */}
                  <div className="absolute bottom-20 left-8 w-14 h-14 bg-red-400 rounded-2xl flex items-center justify-center shadow-lg animate-pulse">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
                    </svg>
                  </div>

                  {/* Clock Icon - Bottom Right */}
                  <div className="absolute bottom-16 right-0 w-14 h-14 bg-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2-in-1 Device Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Grid Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="relative min-h-[400px]">
                <Image
                  src="/assets/bp.png"
                  alt="ForaCare D40g 2-in-1 Monitor"
                  width={400}
                  height={400}
                  className="mx-auto hover:scale-105 transition-transform duration-500 h-auto w-full object-contain"
                />
              </div>
            </div>

            <div
              className={`transition-all duration-1000 delay-500 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B2B5C] mb-4">
                2-in-1 Remote Blood Pressure & Blood Glucose Monitor
              </h2>
              <h3 className="text-xl font-bold text-[#6B46C1] mb-6">
                Two Critical Readings. One Smart Device.
              </h3>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                The ForaCare D40g combines blood pressure and blood glucose
                monitoring in one FDA-cleared device—perfect for patients
                managing multiple chronic conditions.
              </p>

              <div className="mt-8">
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 bg-[#0B2B5C] text-white px-6 py-3 rounded-lg hover:bg-[#0a2449] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
                >
                  📄 Download User Guide →
                </Link>
              </div>
            </div>
          </div>

          {/* Key Features Grid */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <h4 className="text-3xl font-bold text-[#0B2B5C] inline-block bg-white px-8 py-4 rounded-2xl shadow-md">
                Key Features
              </h4>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "2-in-1 Monitoring",
                  desc: "BP + glucose readings with a single device",
                },
                {
                  title: "Cellular Connectivity (4G)",
                  desc: "Automatic data uploads, no Wi-Fi or smartphone required",
                },
                {
                  title: "Smart Averaging Mode (AVG)",
                  desc: "Combines multiple readings for more accurate results",
                },
                {
                  title: "IRB Detection",
                  desc: "Identifies irregular rapid heartbeats during BP measurement",
                },
                {
                  title: "Voice Guidance",
                  desc: "English & Spanish audio instructions for accessibility",
                },
                {
                  title: "Data Storage",
                  desc: "Holds up to 864 measurement records in memory",
                },
                {
                  title: "Cloud Integration",
                  desc: "Syncs with eVitals RPM dashboard for clinician review",
                },
                {
                  title: "Backlit LCD Display",
                  desc: "Large, easy-to-read screen",
                },
                {
                  title: "Alternative Site Glucose Testing",
                  desc: "Less finger discomfort for patients",
                },
                {
                  title: "Dual Power Options",
                  desc: "Rechargeable lithium-ion battery or standard AA batteries",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-[#E8E4F3] p-6 rounded-xl hover:shadow-lg transition-all duration-300 group border-l-4 border-[#6B46C1]"
                >
                  <h5 className="font-bold text-[#0B2B5C] mb-2 text-lg">
                    {feature.title}
                  </h5>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Weight Scale Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Grid Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="relative min-h-[400px]">
                <Image
                  src="/assets/weight.png"
                  alt="ForaCare TNG Scale 550 Mobile"
                  width={400}
                  height={400}
                  className="mx-auto hover:scale-105 transition-transform duration-500 h-auto w-full object-contain"
                />
              </div>
            </div>

            <div
              className={`transition-all duration-1000 delay-500 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B2B5C] mb-4">
                High-Capacity Smart Weight Scale
              </h2>
              <h3 className="text-xl font-bold text-[#6B46C1] mb-6">
                Track Weight Trends for Better Chronic Care
              </h3>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                The ForaCare TNG Scale 550 Mobile is ideal for monitoring
                conditions like CHF, CKD, and obesity, where daily weight
                changes can signal early complications.
              </p>

              <div className="mt-8">
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 bg-[#0B2B5C] text-white px-6 py-3 rounded-lg hover:bg-[#0a2449] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
                >
                  📄 Download User Guide →
                </Link>
              </div>
            </div>
          </div>

          {/* Key Features Grid */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <h4 className="text-3xl font-bold text-[#0B2B5C] inline-block bg-white px-8 py-4 rounded-2xl shadow-md">
                Key Features
              </h4>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "High Capacity",
                  desc: "Supports up to 550 lb (250 kg)",
                },
                {
                  title: "Bluetooth Connectivity",
                  desc: "Syncs readings with eVitals RPM platform",
                },
                {
                  title: "Talking Function",
                  desc: "Announces weight in English, Spanish, or French",
                },
                {
                  title: "Backlit LCD Display",
                  desc: "Easy-to-read even in low light",
                },
                {
                  title: "Multi-User Memory",
                  desc: "Stores data for up to 5 users (135 entries each)",
                },
                {
                  title: "Automatic Step-On & Auto-Off",
                  desc: "Convenient and energy-efficient",
                },
                {
                  title: "Low Profile Design",
                  desc: "Stable base with tempered glass surface",
                },
                {
                  title: "BMI Display",
                  desc: "Automatically calculates Body Mass Index",
                },
                {
                  title: "Multiple Units Supported",
                  desc: "Pounds or kilograms",
                },
                {
                  title: "Battery Operated",
                  desc: "Uses 4 AAA batteries (easy to replace)",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-[#E8E4F3] p-6 rounded-xl hover:shadow-lg transition-all duration-300 group border-l-4 border-[#6B46C1]"
                >
                  <h5 className="font-bold text-[#0B2B5C] mb-2 text-lg">
                    {feature.title}
                  </h5>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Our Devices Stand Out */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B2B5C] mb-6">
              Why Our RPM Devices Stand Out
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🏥",
                title: "FDA-Cleared",
                desc: "Meets all regulatory standards for clinical use",
              },
              {
                icon: "🔌",
                title: "Plug-and-Play Setup",
                desc: "No complex pairing or tech skills required",
              },
              {
                icon: "📡",
                title: "Automatic Data Transmission",
                desc: "Ensures providers get timely readings",
              },
              {
                icon: "👥",
                title: "Patient-Friendly Design",
                desc: "Large displays, voice prompts, and simple controls",
              },
              {
                icon: "🌐",
                title: "Multi-Language Support",
                desc: "Accessibility for diverse populations",
              },
              {
                icon: "🔒",
                title: "Secure & Compliant",
                desc: "HIPAA-compliant data transmission and storage",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-[#0B2B5C] mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 bg-[#F0F4F8]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B2B5C] mb-6">
                Compliance-Ready for RPM Billing
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Our devices meet all requirements for successful RPM program
                implementation and billing.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-[#0B2B5C] mb-6">
                Our devices:
              </h3>
              <div className="space-y-4">
                {[
                  "Meet the FDA definition of a medical device",
                  "Automatically upload data to a secure, HIPAA-compliant location",
                  "Support the 16-day minimum data collection requirement for CPT reimbursement",
                ].map((requirement, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="w-6 h-6 bg-[#6B46C1] rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-125 transition-all duration-300">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-base">
                      {requirement}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </main>
  );
};

export default RPMDevices;