"use client";
import React from "react";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

const DeviceSection = () => {
  return (
    <section className="bg-[#fff] py-24">
      <div className="bg-[#e4f5fb] container mx-auto px-4 py-24"
      style={{ borderRadius: "45px" }}>
        {/* Section Heading */}
        <h2 className="text-center text-[#00b6c6] text-3xl md:text-5xl font-extrabold mb-16 tracking-tight ">
          Learn about our RPM Devices
        </h2>

        {/* 2-in-1 Device */}
        <div className="w-full relative rounded-3xl overflow-hidden p-8 md:p-16 mb-20 duration-300 min-h-[350px] flex">
          {/* Text on the left */}
          <div className="relative z-10 max-w-xl flex-1">
            <span className="inline-block bg-[#00b6c6] rounded-full px-4 py-1 text-sm font-semibold text-[#fff] shadow-sm mb-2">
                New
              </span>
            <h3 className="text-2xl md:text-3xl font-bold text-[#013550] mb-4 flex items-center gap-2">
              Blood Pressure & Glucose Monitoring System
            </h3>
            <p className="text-black mb-6 leading-relaxed text-lg">
              Remotely monitor and adjust treatment plans to keep chronic
              diseases under control. Patients can easily monitor their blood
              glucose and pressure themselves or with a caregiver — anytime,
              anywhere. Device data is automatically transmitted to the eVitals
              RPM Telehealth System via built-in cellular connectivity.
            </p>
            <ul className="list-disc pl-6 text-black space-y-2 text-base">
              <li>2-in-1 blood glucose and blood pressure measurements</li>
              <li>Audible results in English/Spanish</li>
              <li>Alternative site testing approved</li>
              <li>Smart Averaging Technology (AVG Mode)</li>
              <li>Irregular Rapid Beat (IRB) technology</li>
              <li>Built-in 4G network SIM card</li>
            </ul>
          </div>

          {/* Image on the right */}
          <div className="relative flex-1 flex justify-end items-center">
            <Image
              src="/assets/bp.png"
              alt="2-in-1 Blood Pressure and Glucose Monitor"
              width={500}
              height={500}
              className="h-full w-auto object-contain"
              priority
            />
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
            <h4 className="text-2xl md:text-3xl font-bold text-[#270949] mb-4 flex items-center gap-2">
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
            className="bg-[#270949] text-white px-6 py-3 rounded-full hover:opacity-90 transition font-semibold shadow-lg"
          >
            Become our Technology Partner
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DeviceSection;
