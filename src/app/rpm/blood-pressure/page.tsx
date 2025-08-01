"use client";

import Image from "next/image";
import Button from "@/components/home/Button";
import Link from "next/link";

const BloodPressureMonitoring = () => {
  return (
    <main className="bg-white text-black">
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/BPM-hero.jpg"
            alt="Blood Pressure Monitoring"
            fill
            className="object-cover"
            priority
            quality={100}
          />

          {/* Left-side black gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
        </div>

        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <div className="max-w-4xl">
            {/* <span className="inline-block bg-[#B187E8] text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
              Remote Patient Monitoring
            </span> */}
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
              Advanced <span className="text-[#B187E8]">Blood Pressure</span>{" "}
              Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              Combat hypertension with our AI-powered monitoring system that
              detects risks before they become emergencies.
            </p>
            {/* <div className="flex flex-wrap justify-center gap-4">
              <Button
                text="See How It Works"
                variant="primary"
                className="px-8 py-3 text-lg"
              />
            </div> */}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="sticky top-20">
              <div className="relative h-[100%] w-full rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center">
                <Image
                  src="/assets/bpm-graph.jpeg"
                  alt="Blood Pressure Data Visualization"
                  width={1000}
                  height={400}
                  className="object-cover"
                  quality={100}
                />
              </div>
            </div>

            <div className="md:w-1/2 space-y-8">
              <div className="bg-[#F9F5FF] p-6 rounded-xl border-l-4 border-[#B187E8]">
                <h3 className="text-xl font-bold text-[#2E1065] mb-3">
                  The Silent Killer
                </h3>
                <p className="text-gray-700">
                  High blood pressure quietly damages blood vessels and leads to
                  serious health problems. Fortunately, it's both preventable
                  and treatable with proper monitoring.
                </p>
              </div>

              <div className="bg-[#EFF6FF] p-6 rounded-xl border-l-4 border-blue-500">
                <h3 className="text-xl font-bold text-[#2E1065] mb-3">
                  Clinical Benefits
                </h3>
                <p className="text-gray-700">
                  Controlling hypertension reduces risk of stroke, heart
                  disease, kidney failure, and overall mortality. Risks begin at
                  blood pressure levels as low as 118/75 mm Hg.
                </p>
              </div>

              <div className="bg-[#FEF2F2] p-6 rounded-xl border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-[#2E1065] mb-3">
                  Monitoring Matters
                </h3>
                <p className="text-gray-700">
                  Over 1/3 of hypertension patients have either white-coat or
                  masked hypertension, leading to improper treatment without
                  accurate home monitoring.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F9F5FF]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[#2E1065]">
              Transformative{" "}
              <span className="text-[#B187E8]">Remote Monitoring</span> Benefits
            </h2>
            <div className="w-20 h-1 bg-[#B187E8] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our 4G-enabled system delivers measurable improvements in patient
              outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {[
                {
                  title: "Real-time Health Insights",
                  description:
                    "Continuous data flow provides clinicians with up-to-the-minute patient vitals",
                  icon: (
                    <svg
                      className="w-10 h-10 text-[#B187E8]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Early Risk Detection",
                  description:
                    "AI algorithms identify concerning patterns 48-72 hours before critical events",
                  icon: (
                    <svg
                      className="w-10 h-10 text-[#B187E8]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Improved Treatment Efficacy",
                  description:
                    "Clinicians can adjust medications based on comprehensive trend data",
                  icon: (
                    <svg
                      className="w-10 h-10 text-[#B187E8]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Enhanced Patient Engagement",
                  description:
                    "Users become active participants in their health management",
                  icon: (
                    <svg
                      className="w-10 h-10 text-[#B187E8]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  ),
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-6 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex-shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-[#2E1065] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative w-full min-h-[300px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/assets/bpm-dashboard.jpeg"
                alt="Remote Monitoring Dashboard"
                fill
                className="object-contain"
                quality={100}
              />
              {/* <div className="absolute in\set-0 bg-gradient-to-t from-black/30 to-transparent"></div> */}
            </div>
          </div>
        </div>
      </section>

      <section className="relative text-center px-4 mb-20 py-16 bg-gradient-to-br from-purple-100 via-purple-200 to-purple-100 rounded-3xl shadow-xl overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 600 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full opacity-10"
          >
            <circle cx="100" cy="100" r="80" fill="#a78bfa" />
            <circle cx="500" cy="80" r="60" fill="#7c3aed" />
            <circle cx="300" cy="180" r="40" fill="#c4b5fd" />
          </svg>
        </div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-purple-900 mb-6">
            Ready to Revolutionize Patient Care?
          </h2>
          <p className="text-xl text-gray-800 mb-8 max-w-3xl mx-auto">
            Our RPM solution has been clinically proven to reduce systolic and
            diastolic blood pressure
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/demo">
              <Button
                text="Schedule Consultation"
                variant="primary"
                className="bg-gradient-to-r from-purple-700 to-purple-900 text-white px-6 py-3 rounded-full hover:opacity-90 transition font-semibold shadow-lg"
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BloodPressureMonitoring;
