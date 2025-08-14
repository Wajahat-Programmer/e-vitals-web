"use client";
import React from "react";
import Link from "next/link";

const RPMReimbursement = () => {
  return (
    <section className="bg-[#f8f9fa] py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#270949] mb-8">
            Maximize Your RPM Reimbursements
          </h2>
          
          {/* Subtitle */}
          <p className="text-lg text-gray-700 mb-12 leading-relaxed">
            We'll guide you through RPM billing and help you take full advantage of:
          </p>

          {/* CPT Codes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* CPT 99453 */}
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#00b6c6]">
              <h3 className="text-xl font-bold text-[#270949] mb-2">CPT 99453</h3>
              <p className="text-gray-700">Patient Setup & Education</p>
            </div>

            {/* CPT 99454 */}
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#00b6c6]">
              <h3 className="text-xl font-bold text-[#270949] mb-2">CPT 99454</h3>
              <p className="text-gray-700">Device Supply & Data Transmission</p>
            </div>

            {/* CPT 99457 */}
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#00b6c6]">
              <h3 className="text-xl font-bold text-[#270949] mb-2">CPT 99457</h3>
              <p className="text-gray-700">First 20 Minutes of Care Management</p>
            </div>

            {/* CPT 99458 */}
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#00b6c6]">
              <h3 className="text-xl font-bold text-[#270949] mb-2">CPT 99458</h3>
              <p className="text-gray-700">Additional 20 Minutes of Care</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Link
              href="/rpm-guide"
              className="bg-[#270949] text-white px-8 py-4 rounded-full hover:opacity-90 transition font-semibold shadow-lg text-lg inline-flex items-center gap-2"
            >
              Download Free RPM Reimbursement Guide
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M17 8l4 4m0 0l-4 4m4-4H3" 
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RPMReimbursement; 