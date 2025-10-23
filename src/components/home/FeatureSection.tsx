"use client";
import React, { useState, useEffect } from 'react';
import Image from "next/image"; // Keep Image import for the GIF
import Link from "next/link";
// Icons from Heroicons and Lucide
import { CheckIcon } from '@heroicons/react/24/outline';
import { ChevronsRight } from 'lucide-react';

// ====================================================================
// 1. SampleMonthlyWorkflowAnimation Component (The Static Checklist with GIF Overlay)
// ====================================================================

const SampleMonthlyWorkflowAnimation = () => {
    // State to force a re-render after the component mounts
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        // This runs only once after the initial render (client-side)
        setIsMounted(true);
    }, []);

    // Initial State for Workflow Items - ALL START AS CHECKED (true)
    const initialWorkflow = [
        { text: "Flag abnormal measurement", checked: true },
        { text: "Caregiver review", checked: true },
        { text: "Document interventions", checked: true },
        { text: "Document minutes", checked: true },
    ];

    const [workflowItems] = useState(initialWorkflow); 
    
    return (
        <div 
            className="bg-white rounded-xl p-8 shadow-xl border border-gray-200 h-full min-h-[400px] relative overflow-hidden flex flex-col justify-start" 
        >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 z-10">
                Sample Monthly Workflow
            </h3>
            
            {/* List Items */}
            <ul className="space-y-6 z-10 relative">
                {workflowItems.map((item, index) => (
                    <li
                        key={index}
                        className={`flex items-center text-lg`}
                    >
                        <div className="flex-shrink-0 mr-3 w-6 h-6 relative">
                            {/* Static Checked Box */}
                            <div
                                className={`absolute inset-0 border-2 rounded border-gray-900 bg-gray-200`}
                            ></div>
                            {/* Static Checkmark Icon */}
                            <CheckIcon
                                className={`absolute inset-0 w-6 h-6 text-gray-900 scale-100 opacity-100`}
                            />
                        </div>
                        {/* Text */}
                        <span className={`text-gray-900 text-base font-medium`}>
                            {item.text}
                        </span>
                    </li>
                ))}
            </ul>

            {/* ANIMATION/GIF - Positioned at bottom right */}
            {isMounted && (
                <div className="absolute top-30  right-15 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 z-20">
                    <Image
                        src="/assets/checklist-animation.gif" 
                        alt="Animated checklist completion"
                        width={200}
                        height={200}
                        unoptimized={true}
                        className="w-full h-full object-contain"
                    />
                </div>
            )}
        </div>
    );
};
// ====================================================================
// The rest of the code (FeatureSection) remains the same.
// ====================================================================

const FeatureSection = () => {
 // ... (rest of the FeatureSection code is unchanged)
    return (
        <section className="bg-white">
            {/* How It Works Section */}
            <div className="bg-gray-100 py-12 px-4">
                <div className="container mx-auto max-w-7xl">
                    <div className="mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
                            How it works
                        </h2>
                        <p className="text-base text-gray-600">
                            From enrolling to billing in 4 easy steps.....
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            {
                                number: "1",
                                title: "Enroll eligible patients",
                                description: "We enroll patients and provision the device",
                            },
                            {
                                number: "2",
                                title: "Connect device",
                                description:
                                    "Cellular devices sync to patient charts as soon as the patient is enrolled",
                            },
                            {
                                number: "3",
                                title: "Monitor & intervene",
                                description:
                                    "Clinical team reviews data, documents time, and escalates when needed.",
                            },
                            {
                                number: "4",
                                title: "Bill & reconcile",
                                description: "Monthly RPM codes report is generated",
                            },
                        ].map((step, index) => (
                            <div
                                key={index}
                                className="bg-white/40 backdrop-blur-md rounded-4xl p-6 shadow-2xl border border-white/30 hover:shadow-4xl hover:scale-105 transition-all duration-300"
                            >
                                <h3 className="text-base font-bold text-gray-900 mb-3">
                                    {step.number}. {step.title}
                                </h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Clinical Programs Section */}
            <div className="py-16 px-4 bg-white">
                <div className="container mx-auto max-w-7xl">
                    <div className="mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                            Clinical programs
                        </h2>
                        <p className="text-base text-gray-600">
                            Purpose-built pathways for chronic conditions.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {["Hypertension", "Congestive Heart Failure", "Diabetes"].map(
                            (program, index) => (
                                <div
                                    key={index}
                                    className="bg-white/70 backdrop-blur-lg rounded-4xl p-8 shadow-xl border border-white/50 min-h-[140px] flex items-center justify-center hover:shadow-4xl hover:scale-105 transition-all duration-300"
                                >
                                    <h3 className="text-xl font-semibold text-gray-900 text-center">
                                        {program}
                                    </h3>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>

            {/* Remote Patient Monitoring Devices Section */}
            <div className="py-16 px-4 bg-gray-50">
              <div className="container mx-auto max-w-7xl">
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    Remote Patient Monitoring Devices
                    </h2>
                    <p className="text-base text-gray-600">
                    e-Vitals provide FDA-cleared, clinically validated devices for seamless
                    patient data collection.
                    </p>
                </div>

                {/* Blood Pressure Device */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <div className="bg-white/70 backdrop-blur-lg rounded-4xl p-8 shadow-xl hover:shadow-4xl hover:scale-105 transition-all duration-300 border border-white/50">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                        2-in-1 Blood pressure & Blood glucose monitor
                    </h3>
                    <ul className="space-y-3">
                        {[
                        "Accurate results in English/Spanish",
                        "Interactive cuff testing algorithm",
                        "Atrial Fibrillation Technology (Afib Detect)",
                        "Automatic BP averaging per AHA/ACC",
                        "Built-in 4G network, SIM card",
                        ].map((feature, index) => (
                        <li key={index} className="flex items-start">
                            <span className="text-gray-700 mr-2">•</span>
                            <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                        ))}
                    </ul>
                    </div>
                    <div className=" flex items-center justify-center">
                    <div className="w-full max-w-sm">
                        <Image
                        src="/assets/bp-machine.png"
                        alt="Blood Pressure Monitor"
                        width={400}
                        height={400}
                        className="w-full h-auto"
                        />
                    </div>
                    </div>
                </div>

                {/* Weight Scale */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-white/70 backdrop-blur-lg rounded-4xl p-8 shadow-xl hover:shadow-4xl hover:scale-105 transition-all duration-300 border border-white/50">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">
                        Weight scale
                    </h3>
                    <ul className="space-y-3">
                        {[
                        "Supports up to 550 lbs",
                        "High-contrast LCD screen",
                        "Large backlit LCD display",
                        "Available results in English, Spanish & French",
                        ].map((feature, index) => (
                        <li key={index} className="flex items-start">
                            <span className="text-gray-700 mr-2">•</span>
                            <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                        ))}
                    </ul>
                    </div>
                    <div className="flex items-center justify-center">
                    <div className="w-full max-w-sm">
                        <Image
                        src="/assets/weight-scale.png"
                        alt="Weight Scale"
                        width={400}
                        height={400}
                        className="w-full h-auto"
                        />
                    </div>
                    </div>
                </div>
                </div>
            </div>

            {/* Reimbursement CPT Codes Section - Responsive layout maintained */}
            <div className="bg-[#e0e0e0] py-16 px-4">
                <div className="container mx-auto max-w-7xl">
                    <div className="mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                            Reimbursement CPT codes
                        </h2>
                    </div>

                    {/* Responsive grid for CPT codes and workflow */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* CPT Codes List */}
                        <div className="space-y-4">
                            {[
                                {
                                    code: "CPT 99453",
                                    description: "RPM device setup/education (once)",
                                    amount: "$20",
                                },
                                {
                                    code: "CPT 99454",
                                    description: "RPM device supply + data (monthly)",
                                    amount: "$44",
                                },
                                {
                                    code: "CPT 99447",
                                    description: "RPM 1st 20 minutes/monitoring (monthly)",
                                    amount: "$48",
                                },
                                {
                                    code: "CPT 99448",
                                    description: "RPM each add'l 20 minutes",
                                    amount: "$44",
                                },
                                {
                                    code: "CPT 99091",
                                    description: "RMedicaid patient billing",
                                    amount: "$160",
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-4xl p-6 border-white/30 shadow-xl hover:shadow-4xl hover:scale-105 transition-all duration-300 border"
                                >
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        {item.code}
                                    </h3>
                                    <p className="text-base text-gray-700 mb-2">
                                        {item.description}
                                    </p>
                                    <p className="text-base font-bold text-red-600">
                                        Reimbursement &asymp; <span className="text-2xl">{item.amount}</span>
                                    </p>
                                </div>
                            ))}
                            <p className="text-sm text-gray-800 pt-4">
                                Note: Coding and reimbursement vary by payer and plan. Verify
                                current policies before billing.
                            </p>
                        </div>

                        {/* Sample Monthly Workflow - INSERTED ANIMATED COMPONENT HERE */}
                        <SampleMonthlyWorkflowAnimation />
                        
                    </div>
                </div>
            </div>

            {/* See eVitals in Action & Request Demo Section */}
            <div className="py-16 px-4 bg-white">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Left Side - See eVitals in action */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                See e-Vitals in action
                            </h2>
                            <p className="text-gray-700 mb-8">
                                Tell us about your practice(s) and we'll tailor a demo to your
                                patient population, workflows, and payers.
                            </p>

                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    Cardiology, Primary Care, Endocrinology, Pulmonology
                                </h3>
                                <p className="text-gray-700 mb-2">
                                    Clinical practice for any device
                                </p>
                            </div>

                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    Remote Patient Monitoring adds a new layer of care
                                </h3>
                                <ul className="space-y-2">
                                    {[
                                        "Improved vitals",
                                        "Reduced hospitalizations",
                                        "Fewer interventions",
                                        "Better outcomes/year",
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-center">
                                            <span className="text-red-500 mr-2">•</span>
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mb-10">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    Reimbursement
                                </h3>
                                <p className="text-red-600 font-semibold text-lg">
                                    + $275/patient: 8-10% added per month
                                </p>
                            </div>

                            <div className="mb-10 flex items-center justify-start">
                                <div>
                                    <h3 className="text-4xl font-black text-gray-900 leading-tight">
                                        <span className="block">LET'S</span>
                                        <span className="block">PARTNER IN</span>
                                        <span className="block">CARE</span>
                                    </h3>
                                </div>
                                {/* Image for Care Partner - Restored original Image component */}
                                <div className="ml-8">
                                    <Image
                                        src="/assets/care-partner.png"
                                        alt="Partnership"
                                        width={150}
                                        height={150}
                                        className="w-32 h-auto"
                                    />
                                </div>
                            </div>

                            <Link
                                href="/ReimbursementCalculator"
                                className="group bg-[#001f54] text-white text-lg px-8 py-4 rounded-lg font-semibold hover:bg-[#001840] transition-colors w-full sm:w-auto inline-flex items-center justify-center gap-2 whitespace-nowrap"
                            >
                                Check out the Reimbursement calculator
                                <ChevronsRight size={20} className="transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0" />
                            </Link>
                        </div>

                        {/* Right Side - Request a demo form */}
                        <div className="bg-white border-2 border-grey-300 rounded-4xl p-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                            Request a demo
                        </h2>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold text-gray-900 mb-2">
                                First Name
                                </label>
                                <input
                                type="text"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-900 mb-2">
                                Last Name
                                </label>
                                <input
                                type="text"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold text-gray-900 mb-2">
                                email
                                </label>
                                <input
                                type="email"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-900 mb-2">
                                Phone
                                </label>
                                <input
                                type="tel"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold text-gray-900 mb-2">
                                Practice name
                                </label>
                                <input
                                type="text"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-900 mb-2">
                                Website
                                </label>
                                <input
                                type="url"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold text-gray-900 mb-2">
                                Specialty
                                </label>
                                <input
                                type="text"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-900 mb-2">
                                Number of providers
                                </label>
                                <input
                                type="text"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            </div>

                            <div>
                            <label className="block text-sm font-semibold text-gray-900 mb-2">
                                Message
                            </label>
                            <textarea
                                rows={4}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            ></textarea>
                            </div>

                            <p className="text-xs text-gray-800">
                            By submitting, you agree to be contacted about eVitals. You
                            can opt out at any time.
                            </p>

                            <div className="flex gap-4 justify-center">
                            <button
                                type="submit"
                                className="bg-[#012c66] text-white px-16 py-4 rounded-lg font-semibold hover:bg-[#02224d] transition-colors text-lg"
                            >
                                Submit
                            </button>
                            <button
                                type="button"
                                className="bg-[#012c66] text-white px-16 py-4 rounded-lg font-semibold hover:bg-[#02224d] transition-colors text-lg"
                            >
                                Clear
                            </button>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureSection;