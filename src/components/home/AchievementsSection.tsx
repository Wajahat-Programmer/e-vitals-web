"use client";
import React from "react";
import Image from "next/image";

const StatsGrid = () => {
  return (
    <section className="bg-white py-5 px-4 md:px-8">
      
      <div className="max-w-5xl mx-auto text-center px-4 py-8">
        <h1 className="text-4xl font-bold text-[#270949] mb-4">
          A high-quality care experience—anywhere, anytime
        </h1>
        <p className="text-base md:text-lg text-black/80 mb-4">
          It started with a simple yet revolutionary idea. That everyone should have access to the best healthcare anywhere in the world on their terms. That includes you.
        </p>
      </div>

      <div className="flex flex-col items-center md:flex-row md:justify-between md:items-start max-w-5xl mx-auto py-8 px-4 mb-16">
        {/* Step 1 */}
        <div className="flex-1 flex flex-col items-center relative">
          <div className="flex items-center">
            <div className="w-14 h-14 rounded-full bg-[#B187E8] text-white flex items-center justify-center text-2xl font-bold z-10">
              1
            </div>
          </div>
          <h1 className="text-2xl font-semibold mt-4">Enroll Patient</h1>
          <p className="text-gray-600 text-center mt-2">
            Quick onboarding for providers and patients.
          </p>
        </div>

        {/* Step 2 */}
        <div className="flex-1 flex flex-col items-center relative">
          <div className="flex items-center">
            <div className="w-14 h-14 rounded-full bg-[#B187E8] text-white flex items-center justify-center text-2xl font-bold z-10">
              2
            </div>
            
          </div>
          <h1 className="text-2xl font-semibold mt-4">Monitor Remotely</h1>
          <p className="text-gray-600 text-center mt-2">
            Track vitals in real time with our intuitive dashboard.
          </p>
        </div>

        {/* Step 3 */}
        <div className="flex-1 flex flex-col items-center relative">
          <div className="flex items-center">
            <div className="w-14 h-14 rounded-full bg-[#B187E8] text-white flex items-center justify-center text-2xl font-bold z-10">
              3
            </div>
          </div>
          <h1 className="text-2xl font-semibold mt-4">Get Paid</h1>
          <p className="text-gray-600 text-center mt-2">
            Optimize billing with accurate CPT coding and claims support.
          </p>
        </div>
      </div>


      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {/* COLUMN 1 */}
        <div className="flex flex-col space-y-6 h-full">
          <div className="bg-gray-50 p-6 rounded-2xl shadow ">
            <h3 className="text-[#32a852] text-3xl font-bold">88%</h3>
            <p className="text-sm text-gray-800">
              of patients stick to care plans with eVitals continuous monitoring, improving clinical outcomes.
            </p>
            {/* <p className="text-sm text-[#270949] underline cursor-pointer mt-1">
              See reviews
            </p> */}
          </div>

          <div className="relative flex-grow rounded-2xl overflow-hidden shadow group min-h-[300px]">
            <Image
              src="/assets/medical-stats.jpg"
              alt="Trustpilot and Speaker"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>

        {/* COLUMN 2 */}
        <div className="flex flex-col space-y-6 h-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 min-h-[150px]">
            <div className="bg-gray-50 p-2 rounded-2xl shadow text-left justify-center flex flex-col">
              <h3 className="text-[#d156bd] text-3xl font-bold">100k+</h3>
              <p className="text-sm text-gray-700">
                Patients adhere better to care plans with continuous monitoring.
              </p>
              {/* <p className="text-xs text-[#270949] underline cursor-pointer mt-1">
                Learn more
              </p> */}
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl shadow text-left flex justify-center flex-col">
              <h3 className="text-[#48c3c7] text-3xl font-bold">5+</h3>
              <p className="text-sm text-gray-700">
                Years of remote patient monitoring services.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-2 rounded-2xl shadow flex flex-col md:flex-row items-center  gap-4 min-h-[200px]">
            <Image
              src="/assets/doctors-laptop1.png"
              alt="Doctors using eVitals app"
              width={200}
              height={160}
              className="rounded-lg"
            />
            <div className="text-center md:text-left">
              <h3 className="text-[#270949] text-2xl font-bold mb-2">
                100 million+
              </h3>
              <p className="text-sm text-gray-700">
                Members served across the U.S. through connected care.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 min-h-[220px]">
            <div className="bg-gray-50 p-6 rounded-2xl shadow flex flex-col justify-center text-left">
              <h3 className="text-[#d156bd] text-4xl font-bold">40k+</h3>
              <p className="text-sm text-gray-700">
                Providers, therapists & coaches
              </p>
            </div>
          </div>
        </div>

        {/* COLUMN 3 */}
        <div className="flex flex-col space-y-6 h-full">
          <div className="relative rounded-2xl overflow-hidden shadow group min-h-[200px]">
            <Image
              src="/assets/video-1.png"
              alt="Therapy session"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl shadow text-center flex flex-col justify-center min-h-[150px]">
            <p className="text-1xl text-gray-700 leading-tight mb-1">
              Top-Notch{" "}
              <span className="text-[#45a5bf] font-semibold">FDA-Approved </span>{" "}
              vital monitoring devices.
            </p>
            {/* <p className="text-xs text-[#270949] underline cursor-pointer">
              See reviews
            </p> */}
          </div>

          <div className="relative bg-gray-50 rounded-2xl shadow overflow-hidden min-h-[265px]">
            {/* Background image */}
            <Image
              src="/assets/video-call1.png"
              alt="Remote provider call"
              fill
              className="object-cover"
            />

            {/* Black gradient at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

            {/* Text above gradient */}
            <div className="absolute bottom-0 p-4 text-white">
              <h3 className="text-3xl font-bold">eVitals RPM</h3>
              <p className="text-sm">Stay connected to your patients and elevate the quality of care.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StatsGrid;
