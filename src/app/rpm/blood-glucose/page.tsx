"use client";
import Image from "next/image";
import Button from "@/components/home/Button";
import Link from "next/link";

const GlucoseMonitoring = () => {
  return (
    <main className="bg-white text-black">
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/BGM-hero.jpg"
            alt="Blood Glucose Monitoring"
            fill
            className="object-cover"
            priority
            quality={100}
          />
          {/* Left-side black gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
          {/* <div className="absolute inset-0 bg-gradient-to-t from-[#29003C]/90 to-[#29003C]/70"></div> */}
        </div>

        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
              Advanced <span className="text-[#B187E8]">Blood Glucose</span>{" "}
              Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              Combat hyperglycemia with our AI-powered monitoring system that
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
                  src="/assets/bgm-graph.jpeg"
                  alt="Blood Glucose Data Visualization"
                  width={950}
                  height={500}
                  className="object-contain"
                  quality={100}
                />
              </div>
            </div>

            <div className="md:w-1/2 space-y-8">
              <div className="bg-[#F9F5FF] p-6 rounded-xl border-l-4 border-[#B187E8]">
                <h3 className="text-xl font-bold text-[#2E1065] mb-3">
                  Understanding Hyperglycemia
                </h3>
                <p className="text-gray-700">
                  Hyperglycemia, or high blood sugar, affects those with
                  diabetes and can lead to serious complications like diabetic
                  ketoacidosis if left untreated. Symptoms develop slowly over
                  days or weeks and include frequent urination, increased
                  thirst, vision changes, nausea, weakness, confusion, and even
                  coma.
                </p>
              </div>

              <div className="bg-[#EFF6FF] p-6 rounded-xl border-l-4 border-blue-500">
                <h3 className="text-xl font-bold text-[#2E1065] mb-3">
                  Clinical Benefits of Control
                </h3>
                <p className="text-gray-700">
                  Controlling blood sugar reduces risk of cardiovascular
                  disease, neuropathy, kidney damage, diabetic retinopathy,
                  blindness, and other complications. Vascular damage can lead
                  to severe skin infections, ulcerations, and amputations.
                </p>
              </div>

              <div className="bg-[#FEF2F2] p-6 rounded-xl border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-[#2E1065] mb-3">
                  Continuous Monitoring Importance
                </h3>
                <p className="text-gray-700">
                  Regular monitoring prevents long-term complications as changes
                  in activity, medications, and diet can alter blood sugar
                  levels. Many patients remain asymptomatic despite elevated
                  levels (&gt;200 mg/dL), making continuous monitoring
                  essential.
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
              Comprehensive{" "}
              <span className="text-[#B187E8]">Glucose Monitoring</span>{" "}
              Solutions
            </h2>
            <div className="w-20 h-1 bg-[#B187E8] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our system addresses all aspects of hyperglycemia management and
              prevention
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {[
                {
                  title: "Symptom Recognition",
                  content:
                    "Symptoms often go unnoticed until glucose values exceed 200 mg/dL (10-11.1 mmol/L). Even long-term Type II Diabetes patients can be asymptomatic despite elevated levels.",
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
                  title: "Complication Prevention",
                  content:
                    "The risk of hyperglycemic complications is continuous. Uncontrolled hyperglycemia remains inadequately treated in most patients despite known health risks.",
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
                  title: "Economic Impact",
                  content:
                    "Uncontrolled hyperglycemia is costly to both patients and healthcare systems, making effective monitoring a cost-saving measure.",
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
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Remote Monitoring Advantages",
                  content:
                    "4G-enabled glucometers allow seamless capture and sharing of patient-generated health data (PGHD) with clinicians from any location, enabling better treatment adjustments.",
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
                        d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
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
                    <p className="text-gray-600">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative min-h-[300px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/assets/bpm-dashboard.jpeg"
                alt="Glucose Monitoring Dashboard"
                fill
                className="object-contain"
                quality={100}
              />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div> */}
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
            Ready to Transform Diabetes Care?
          </h2>
          <p className="text-xl text-gray-800 mb-8 max-w-3xl mx-auto">
            Our RPM solution has been clinically proven to improve glucose
            control and reduce complications
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

export default GlucoseMonitoring;
