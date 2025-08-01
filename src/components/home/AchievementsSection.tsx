// src/components/home/AchievementsSection.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";

const AchievementsSection = () => {
  return (
    <>
      {/* Decorative Top Wave */}
      <div className="w-full overflow-hidden leading-none -mb-1">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-10 md:h-16"
        >
          <path fill="#FAFAFB" d="M0,0 C480,60 960,0 1440,60 L1440,0 L0,0 Z" />
        </svg>
      </div>

      <section className="bg-[#FAFAFB] py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-[26px] md:text-3xl font-bold text-[#2E1065]">
            A high-quality care experience—anywhere, anytime
          </h2>
          <p className="text-[#4B5563] max-w-3xl mx-auto mt-4 text-base md:text-lg">
            It started with a simple yet revolutionary idea. That everyone
            should have access to the best healthcare anywhere in the world or
            the terms. That includes you.
          </p>

          {/* Unified Button */}
          <div className="mt-8 flex justify-center">
            <Link
              href="/about"
              className="bg-gradient-to-r from-purple-700 to-purple-900 text-white px-6 py-3 rounded-full hover:opacity-90 transition font-semibold shadow-lg"
            >
              Learn more about us
            </Link>
          </div>

          {/* PNG Image */}
          <div className="mt-16 flex justify-center">
            <Image
              src="/assets/Inudstrial-Automation.png"
              alt="Achievements Overview"
              width={1200}
              height={800}
              className="rounded-xl shadow-md"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AchievementsSection;
