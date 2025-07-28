import React from 'react';
import Image from 'next/image';
import Button from './Button';

const DeviceSection = () => {
  return (
    <section className="section-padding bg-[#f0f9fb]">
      <div className="container-lg">
        {/* Section Heading */}
        <h2 className="text-center text-[rgb(var(--primary-rgb))] text-xl font-semibold mb-12">
          Learn about our RPM Devices
        </h2>

        {/* 2-in-1 Device Block */}
        <div className="relative bg-white rounded-2xl p-8 md:p-12 overflow-hidden shadow-md mb-16">
          {/* Device Image Behind Text */}
          <div className="absolute right-0 top-0 w-72 lg:w-96 opacity-80 pointer-events-none z-0">
            <Image
              src="/assets/bp.jpg"
              alt="2-in-1 Blood Pressure and Glucose Monitor"
              width={400}
              height={300}
              className="object-contain"
            />
          </div>

          {/* Text Content */}
          <div className="relative z-10 max-w-2xl">
            <h3 className="text-3xl font-bold text-slate-800 mb-6 leading-tight">
              2-in-1 Blood Pressure and Blood Glucose Monitoring System
            </h3>

            <p className="text-slate-600 mb-6">
              Remotely monitor and adjust treatment plans to keep chronic diseases under control.
              Patients can easily monitor their blood glucose levels and blood pressure by
              themselves or with the help of a caregiver at any place, anytime—in an instant.
              Information can be transmitted to the eVitals RPM 24/7 HealthView Telehealth System
              via the built-in cellular connectivity in the device.
            </p>

            <ul className="list-disc pl-5 text-slate-600 space-y-2 mb-8">
              <li>2-in-1 blood glucose and blood pressure measurements</li>
              <li>Audible results in English/Spanish</li>
              <li>Alternative site testing approved in blood glucose measurement</li>
              <li>Smart Averaging Technology (AVG Mode)</li>
              <li>Irregular Rapid Beat (IRB) technology</li>
              <li>Internal 4G network SIM card</li>
            </ul>
          </div>
        </div>

        {/* Weight Scale Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 bg-white rounded-2xl p-8 shadow-md">
          {/* Left Text */}
          <div className="flex-1">
            <h4 className="text-2xl font-bold text-slate-800 mb-4">Weight Scale</h4>
            <ul className="list-disc pl-5 text-slate-600 space-y-2">
              <li>Supports up to 550 lbs</li>
              <li>Low profile</li>
              <li>Wide platform</li>
              <li>Large LCD display</li>
              <li>Audible results in English/Spanish/French</li>
            </ul>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-[300px] h-auto flex justify-center">
            <Image
              src="/assets/weight.jpg"
              alt="Weight Scale"
              width={300}
              height={200}
              className="object-contain rounded-lg"
            />
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-16 flex justify-center">
          <Button text="Become our Technology Partner" />
        </div>
      </div>
    </section>
  );
};

export default DeviceSection;