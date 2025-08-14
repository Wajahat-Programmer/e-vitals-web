"use client";
import React from "react";
import Link from "next/link";

const RPMReimbursement = () => {
  return (
    <section className="bg-[#f9f5ff] py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#270949] mb-8">
          Turn Better Care into Revenue
          </h2>
          
          {/* Subtitle */}
          <p className="text-lg text-gray-700 mb-12 leading-relaxed">
          Our RPM program is fully aligned with Medicare and private payer reimbursement policies, helping providers maximize earnings
          </p>

          {/* CPT Codes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* CPT 99453 */}
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#c092e8]">
              <h3 className="text-xl font-bold text-[#270949] mb-2">CPT 99453</h3>
              <p className="text-gray-700">Patient Setup & Education</p>
            </div>

            {/* CPT 99454 */}
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#c092e8]">
              <h3 className="text-xl font-bold text-[#270949] mb-2">CPT 99454</h3>
              <p className="text-gray-700">Device Supply & Data Transmission</p>
            </div>

            {/* CPT 99457 */}
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#c092e8]">
              <h3 className="text-xl font-bold text-[#270949] mb-2">CPT 99457</h3>
              <p className="text-gray-700">First 20 Minutes of Care Management</p>
            </div>

            {/* CPT 99458 */}
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#c092e8]">
              <h3 className="text-xl font-bold text-[#270949] mb-2">CPT 99458</h3>
              <p className="text-gray-700">Additional 20 Minutes of Care</p>
            </div>
          </div>

          {/* Reimbursement Info */}
          <div className="p-8 rounded-2xl mb-2 border border-gray-100">
            {/* Fist Row - Text */}
            <div className="flex items-center justify-center">
               <p className="text-gray-700 text-lg text-center">
                 With our streamlined workflow, you can increase practice revenue with minimal staff time.
               </p>
             </div>
          </div>
            {/* Second Row - Horizontal Flex */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <h3 className="text-2xl font-bold text-gray-700">
                Potential Monthly Reimbursement:
              </h3>
              <div className="bg-[#f9f5ff] p-4 rounded-xl border-2 border-[#c092e8] sm:flex-row">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#270949]">$120-150+</div>
                  <div className="text-sm text-gray-600">per patient/month</div>
                </div>
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