"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef } from "react";

const Header: React.FC = () => {
  const [isRpmOpen, setIsRpmOpen] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const [isServeOpen, setIsServeOpen] = useState(false);
  const rpmDropdownRef = useRef<HTMLDivElement>(null);
  const supportDropdownRef = useRef<HTMLDivElement>(null);
  const serveDropdownRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setOpen(true);
  };

  const handleMouseLeave = (
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setOpen(false);
  };

  return (
    <div className="w-full">
      {/* Top Bar - Blue Background */}
      <div className="w-full bg-[#012c66] text-white border-b border-gray-300 mt-10">
        <div className="container mx-auto flex justify-between items-center py-1 px-4">

          {/* Left Section - Stars + Text */}
          <div className="flex items-center">
            {/* Stars Image */}
            <Image
              src="/assets/stars.png"
              alt="Stars"
              width={55}
              height={55}
              className="object-contain mr-4"
            />

            {/* Text */}
            <p className="text-white text-lg">
              Earn joy, improve Patient Monitoring for clients of any size.
            </p>
          </div>

          {/* Right Section - HIPAA Logo */}
          <div className="flex items-center">
            <Image
              src="/assets/hipa-logo.png"
              alt="HIPAA Logo"
              width={160}
              height={60}
              className="object-contain ml-4"
            />
          </div>

        </div>
      </div>

      {/* Main Navbar */}
      <header className="bg-white text-gray-800 border-b border-gray-200 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/assets/logo.png"
                alt="eVitals Logo"
                width={100}
                height={40}
              />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex space-x-6 flex-1 ml-8">
            {/* Solutions Dropdown */}
            <div
              className="relative group"
              ref={rpmDropdownRef}
              onMouseEnter={() => handleMouseEnter(setIsRpmOpen)}
              onMouseLeave={() => handleMouseLeave(setIsRpmOpen)}
            >
              <button className="text-sm font-medium text-gray-700 hover:text-[#003d82] flex items-center py-2">
                Solutions
                <svg
                  className={`ml-1 w-4 h-4 transition-transform ${
                    isRpmOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isRpmOpen && (
                <div className="absolute left-0 top-full mt-0 w-48 bg-white rounded-md shadow-lg z-50 border border-gray-200">
                  <div className="py-2">
                    <Link
                      href="/rpm/RPMSoftware"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#003d82]"
                    >
                      RPM Software
                    </Link>
                    <Link
                      href="/rpm/RPMDevices"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#003d82]"
                    >
                      RPM Devices
                    </Link>
                    <Link
                      href="/rpm/Reimbursement-and-Billing"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#003d82]"
                    >
                      Reimbursement and Billing
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* How it Works */}
            {/* Who We Serve Dropdown */}
            <div
              className="relative group"
              ref={serveDropdownRef}
              onMouseEnter={() => handleMouseEnter(setIsServeOpen)}
              onMouseLeave={() => handleMouseLeave(setIsServeOpen)}
            >
              <button className="text-sm font-medium text-gray-700 hover:text-[#003d82] flex items-center py-2">
                Who We Serve
                <svg
                  className={`ml-1 w-4 h-4 transition-transform ${
                    isServeOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isServeOpen && (
                <div className="absolute left-0 top-full mt-0 w-56 bg-white rounded-md shadow-lg z-50 border border-gray-200">
                  <div className="py-2">
                    <Link
                      href="/how-we-serve/cardiology"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#003d82]"
                    >
                      Cardiology
                    </Link>
                    <Link
                      href="/how-we-serve/endocrinology"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#003d82]"
                    >
                      Endocrinology
                    </Link>
                    <Link
                      href="/how-we-serve/geriatrics"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#003d82]"
                    >
                      Geriatrics
                    </Link>
                    <Link
                      href="/how-we-serve/nephrology"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#003d82]"
                    >
                      Nephrology
                    </Link>
                    <Link
                      href="/how-we-serve/neurology"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#003d82]"
                    >
                      Neurology
                    </Link>
                    <Link
                      href="/how-we-serve/oncology"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#003d82]"
                    >
                      Oncology
                    </Link>
                    <Link
                      href="/how-we-serve/pulmonology"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#003d82]"
                    >
                      Pulmonology
                    </Link>
                    <Link
                      href="/how-we-serve/rheumatology"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#003d82]"
                    >
                      Rheumatology
                    </Link>

                  </div>
                </div>
              )}
            </div>


            {/* Why us Dropdown */}
            <div
              className="relative group"
              ref={supportDropdownRef}
              onMouseEnter={() => handleMouseEnter(setIsSupportOpen)}
              onMouseLeave={() => handleMouseLeave(setIsSupportOpen)}
            >
              <button className="text-sm font-medium text-gray-700 hover:text-[#003d82] flex items-center py-2">
                Why us
                <svg
                  className={`ml-1 w-4 h-4 transition-transform ${
                    isSupportOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isSupportOpen && (
                <div className="absolute left-0 top-full mt-0 w-48 bg-white rounded-md shadow-lg z-50 border border-gray-200">
                  <div className="py-2">
                    <Link
                      href="/why-us/clinical-expertise"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#003d82]"
                    >
                      Clinical Expertise
                    </Link>
                    <Link
                      href="/support/compliance-and-security"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#003d82]"
                    >
                      Compliance & Security
                    </Link>
                    {/* <Link
                      href="/why-us/support"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#003d82]"
                    >
                      Support
                    </Link> */}
                  </div>
                </div>
              )}
            </div>

            {/* Resources */}
            <Link
              href="/support/resources"
              className="text-sm font-medium text-gray-700 hover:text-[#003d82] py-2"
            >
              Resources
            </Link>

            {/* FAQ */}
            {/* <Link
              href="/faq"
              className="text-sm font-medium text-gray-700 hover:text-[#003d82] py-2"
            >
              FAQ
            </Link> */}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <Link
              href="/contact"
              className="text-sm font-medium text-gray-700 hover:text-[#003d82]"
            >
              Login
            </Link>
            <Link
              href="/demo"
              className="bg-[#008191] hover:bg-[#00acc1] text-white text-sm font-bold text-[16px] px-4 py-2 rounded transition"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;