"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef } from "react";

const Header: React.FC = () => {
  const [isRpmOpen, setIsRpmOpen] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
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
      {/* Top Bar */}
      <div className="bg-white text-black text-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Link href="/">
              <Image
                src="/assets/logo.png"
                alt="eVitals Logo"
                width={140}
                height={50}
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="bg-[#270949] text-white shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <nav className="hidden md:flex space-x-8">
            {/* RPM Solution Dropdown */}
            <div
              className="relative group"
              ref={rpmDropdownRef}
              onMouseEnter={() => handleMouseEnter(setIsRpmOpen)}
              onMouseLeave={() => handleMouseLeave(setIsRpmOpen)}
            >
              <button className="text-m font-medium tracking-wider hover:underline flex items-center">
                RPM Solution
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
                <div className="absolute left-0 top-full w-56 bg-white rounded-md shadow-lg z-50">
                  <div className="py-1">
                    <Link
                      href="/rpm/RPMSoftware"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-900"
                    >
                      RPM Software
                    </Link>
                    <Link
                      href="/rpm/RPMDevices"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-900"
                    >
                      RPM Devices
                    </Link>
                    <Link
                      href="/rpm/Reimbursement-and-Billing"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-900"
                    >
                      Reimbursement and Billing
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Services Dropdown (now includes Who We Serve) */}
            <div
              className="relative group"
              onMouseEnter={() => handleMouseEnter(setIsServicesOpen)}
              onMouseLeave={() => handleMouseLeave(setIsServicesOpen)}
            >
              <button className="text-m font-medium tracking-wider hover:underline flex items-center">
                Services
                <svg
                  className={`ml-1 w-4 h-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`}
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
              {isServicesOpen && (
                <div className="absolute left-0 top-full w-[560px] bg-white rounded-md shadow-lg z-50 p-4 grid grid-cols-2 gap-4">
                  <div>
                    <Link
                      href="/services"
                      className="block px-3 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-900 rounded"
                    >
                      Services Overview
                    </Link>
                    <Link
                      href="/insights/overview"
                      className="block px-3 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-900 rounded"
                    >
                      Insights
                    </Link>
                    <Link
                      href="/ReimbursementCalculator"
                      className="block px-3 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-900 rounded"
                    >
                      RPM Reimbursement Calculator
                    </Link>
                  </div>
                  <div>
                    <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Who We Serve</div>
                    <Link href="/how-we-serve/cardiology" className="block px-3 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-900 rounded">Cardiology</Link>
                    <Link href="/how-we-serve/endocrinology" className="block px-3 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-900 rounded">Endocrinology</Link>
                    <Link href="/how-we-serve/neurology" className="block px-3 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-900 rounded">Neurology</Link>
                    <Link href="/how-we-serve/pulmonology" className="block px-3 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-900 rounded">Pulmonology</Link>
                    <Link href="/how-we-serve/oncology" className="block px-3 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-900 rounded">Oncology</Link>
                    <Link href="/how-we-serve/geriatrics" className="block px-3 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-900 rounded">Geriatrics</Link>
                    <Link href="/how-we-serve/nephrology" className="block px-3 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-900 rounded">Nephrology</Link>
                    <Link href="/how-we-serve/rheumatology" className="block px-3 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-900 rounded">Rheumatology</Link>
                  </div>
                </div>
              )}
            </div>

            {/* Support & Compliance Dropdown */}
            <div
              className="relative group"
              ref={supportDropdownRef}
              onMouseEnter={() => handleMouseEnter(setIsSupportOpen)}
              onMouseLeave={() => handleMouseLeave(setIsSupportOpen)}
            >
              <button className="text-m font-medium tracking-wider hover:underline flex items-center">
                Support & Compliance
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
                <div className="absolute left-0 top-full w-56 bg-white rounded-md shadow-lg z-50">
                  <div className="py-1">
                    <Link
                      href="/support/compliance-and-security"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-900"
                    >
                      Compliance & Security
                    </Link>
                    <Link
                      href="/support/resources"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-900"
                    >
                      Resources
                    </Link>
                    {/* <Link
                      href="/support/faqs"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-900"
                    >
                      FAQs
                    </Link> */}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/insights/overview"
              className="text-m font-medium tracking-wider hover:underline"
            >
              Insights
            </Link>

            {/* Who We Serve merged into Services dropdown above */}
            <Link
              href="/ReimbursementCalculator"
              className="text-m font-medium tracking-wider hover:underline"
            >
              RPM Reimbursement Calculator
            </Link>
          </nav>

          <Link
            href="/contact"
            className="bg-[#B187E8] hover:bg-[#9d6dd6] text-white text-lg text-shadow-lg font-semibold px-5 py-2 rounded-full transition"
          >
            Contact Us
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
