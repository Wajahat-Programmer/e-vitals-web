"use client";
import React from "react";
import Image from "next/image";

const StatsGrid = () => {
  return (
    <section className="bg-white py-5 px-4 md:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* COLUMN 1 */}
        <div className="flex flex-col space-y-6 h-full">
          <div className="bg-gray-50 p-6 rounded-2xl shadow text-center">
            <h3 className="text-[#270949] text-3xl font-bold">#1</h3>
            <p className="text-sm text-gray-800">
              Most recognized remote patient monitoring platform.
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
            <div className="bg-gray-50 p-6 rounded-2xl shadow text-center flex flex-col justify-center">
              <h3 className="text-[#270949] text-3xl font-bold">88%</h3>
              <p className="text-sm text-gray-700">
                Patients adhere better to care plans with continuous monitoring.
              </p>
              {/* <p className="text-xs text-[#270949] underline cursor-pointer mt-1">
                Learn more
              </p> */}
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl shadow text-center flex flex-col justify-center">
              <h3 className="text-[#270949] text-3xl font-bold">20+</h3>
              <p className="text-sm text-gray-700">
                Years of digital health innovation.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl shadow flex flex-col md:flex-row items-center justify-between gap-4 min-h-[200px]">
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

          <div className="grid grid-cols-2 gap-4 min-h-[220px]">
            <div className="bg-gray-50 p-6 rounded-2xl shadow flex items-center justify-center text-center">
              <p className="text-sm text-gray-700 leading-tight">
                Founder of the first virtual RPM-centered
                <br />
                <span className="text-[#270949] font-bold">
                  patient safety initiative
                </span>
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl shadow flex flex-col justify-center items-center text-center">
              <h3 className="text-[#270949] text-3xl font-bold">40k+</h3>
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
            <p className="text-sm text-gray-700 leading-tight mb-1">
              Remote Monitoring{" "}
              <span className="text-[#270949] font-semibold">Vital signs </span>{" "}
              tracked from home, in real-time.
            </p>
            {/* <p className="text-xs text-[#270949] underline cursor-pointer">
              See reviews
            </p> */}
          </div>

          <div className="bg-gray-50 rounded-2xl shadow flex flex-col items-center justify-center text-center p-6 min-h-[265px]">
            <Image
              src="/assets/video-call1.png"
              alt="Remote provider call"
              width={200}
              height={150}
              className="mb-3"
            />
            <h3 className="text-[#270949] text-3xl font-bold">Remote Care</h3>
            <p className="text-sm text-gray-700">Anywhere, anytime</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsGrid;
