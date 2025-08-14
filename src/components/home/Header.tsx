"use client"; 

import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';

const Header: React.FC = () => {
  const [isRpmOpen, setIsRpmOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    setIsRpmOpen(true);
  };

  const handleMouseLeave = () => {
    setIsRpmOpen(false);
  };

  return (
    <div className="w-full">
      {/* Top Bar */}
      <div className="bg-white text-black text-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Link href="/">
              <Image src="/assets/logo.png" alt="e-Vitals Logo" width={140} height={50} />
            </Link>
          </div>
          <div className="flex space-x-6 text-sm">
            <Link href="/for-individuals" className="flex items-center space-x-1 hover:underline">
              <Image src="/assets/individual.png" alt="For Individuals" width={18} height={18} />
              <span>For Individuals</span>
            </Link>
            <Link href="/for-organizations" className="flex items-center space-x-1 hover:underline">
              <Image src="/assets/organization.png" alt="For Organizations" width={25} height={25} />
              <span>For Organizations</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="bg-[#270949] text-white shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <nav className="hidden md:flex space-x-8">
            <div 
              className="relative group" 
              ref={dropdownRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                className="text-m font-medium tracking-wider hover:underline flex items-center"
              >
                RPM Solution
                <svg 
                  className={`ml-1 w-4 h-4 transition-transform ${isRpmOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
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
            <Link href="/services" className="text-m font-medium tracking-wider hover:underline">
              Services
            </Link>
            <Link href="/#" className="text-m font-medium tracking-wider hover:underline">
              Support & Compliance
            </Link>
            <Link href="/insights" className="text-m font-medium tracking-wider hover:underline">
              Insights
            </Link>
            <Link href="/about" className="text-m font-medium tracking-wider hover:underline">
              Company
            </Link>
          </nav>
          <Link
            href="/contact"
            className="bg-[#B187E8] hover:bg-[#9d6dd6] text-white text-sm font-semibold px-5 py-2 rounded-full transition"
          >
            Contact Us
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;