"use client";
import React from "react";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

const DeviceSection = () => {
  return (
    <section className="bg-gradient-to-b from-[#f0f9fb] to-[#e0f2f7] py-24">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-center text-[#29003C] text-4xl md:text-5xl font-extrabold mb-16 tracking-tight drop-shadow-sm">
          Discover Our Advanced RPM Devices
        </h2>

        {/* 2-in-1 Device */}
        <div className="flex flex-col lg:flex-row items-center gap-12 bg-white rounded-3xl p-8 md:p-16 shadow-2xl mb-20 hover:shadow-purple-200 transition-shadow duration-300">
          {/* Image */}
          <div className="flex-1 flex justify-center">
            <Image
              src="/assets/bp.jpg"
              alt="2-in-1 Blood Pressure and Glucose Monitor"
              width={340}
              height={240}
              className="object-contain rounded-2xl shadow-md border-4 border-[#f0f9fb] hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>

          {/* Text */}
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-bold text-[#29003C] mb-4 flex items-center gap-2">
              <span className="inline-block bg-[#e0f2f7] rounded-full px-4 py-1 text-sm font-semibold text-[#1e1e2f] shadow-sm">
                New
              </span>
              Blood Pressure & Glucose Monitoring System
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed text-lg">
              Remotely monitor and adjust treatment plans to keep chronic
              diseases under control. Patients can easily monitor their blood
              glucose and pressure themselves or with a caregiver — anytime,
              anywhere. Device data is automatically transmitted to the eVitals
              RPM Telehealth System via built-in cellular connectivity.
            </p>

            <ul className="list-disc pl-6 text-gray-700 space-y-2 text-base">
              <li>2-in-1 blood glucose and blood pressure measurements</li>
              <li>Audible results in English/Spanish</li>
              <li>Alternative site testing approved</li>
              <li>Smart Averaging Technology (AVG Mode)</li>
              <li>Irregular Rapid Beat (IRB) technology</li>
              <li>Built-in 4G network SIM card</li>
            </ul>
          </div>
        </div>

        {/* Weight Scale */}
        <div className="flex flex-col lg:flex-row items-center gap-12 bg-white rounded-3xl p-8 md:p-16 shadow-2xl hover:shadow-purple-200 transition-shadow duration-300">
          {/* Image */}
          <div className="flex-1 flex justify-center">
            <Image
              src="/assets/weight.jpg"
              alt="Weight Scale"
              width={340}
              height={240}
              className="object-contain rounded-2xl shadow-md border-4 border-[#f0f9fb] hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>

          {/* Text */}
          <div className="flex-1">
            <h4 className="text-2xl md:text-3xl font-bold text-[#29003C] mb-4 flex items-center gap-2">
              <span className="inline-block bg-[#e0f2f7] rounded-full px-4 py-1 text-sm font-semibold text-[#1e1e2f] shadow-sm">
                New
              </span>
              Weight Scale
            </h4>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 text-base">
              <li>Supports up to 550 lbs</li>
              <li>Low profile, wide platform</li>
              <li>Large backlit LCD display</li>
              <li>Audible results in English, Spanish & French</li>
            </ul>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-20 flex justify-center">
          <Link
        href="/for-organizations"
        className="bg-gradient-to-r from-purple-700 to-purple-900 text-white px-6 py-3 rounded-full hover:opacity-90 transition font-semibold shadow-lg"
      >
        Become our Technology Partner
      </Link>
        </div>
      </div>
    </section>
  );
};

export default DeviceSection;
