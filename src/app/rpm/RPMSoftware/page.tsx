"use client";

import Image from "next/image";
import Link from "next/link";

const RPMSoftware = () => {
  return (
    <main className="bg-white text-black">
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
                      <Image
              src="/assets/eVitals-bgrpmsw.png"
              alt="RPM Software"
              fill
              className="object-cover blur-sm"
              priority
              quality={100}
            />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-[#2E1065]/70" />

        </div>

        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <div className="max-w-4xl">
            <p className="inline-block bg-[#B187E8]/70 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4 shadow-lg">
              Remote Patient Monitoring (RPM) Software – eVitals Platform
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white text-shadow-lg">
              Smart, Secure, and Clinician-Friendly <span className="text-[#B187E8]">RPM Software</span>
            </h1>
            <p className="text-xl md:text-1xl mb-8 text-white/90 max-w-3xl mx-auto text-shadow-lg">
              Our eVitals RPM platform empowers healthcare providers to remotely track patients’ vitals in real time, detect early warning signs, and intervene before conditions worsen—all while meeting Medicare and private payer requirements for reimbursement.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-[#2E1065] mb-4">What is RPM Software?</h2>
              <p className="text-gray-700 mb-6">
                Remote Patient Monitoring (RPM) software collects, transmits, and displays patients’ physiologic data from FDA-cleared devices, giving providers continuous visibility between office visits.
              </p>
              <div className="bg-[#F9F5FF] p-6 rounded-xl border-l-4 border-[#B187E8]">
                <h3 className="text-xl font-semibold text-[#2E1065] mb-3">With eVitals, you can:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="mt-1">
                      <svg className="w-5 h-5 text-[#B187E8]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                    </span>
                    <span>Monitor patients 24/7 with automated alerts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1">
                      <svg className="w-5 h-5 text-[#B187E8]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                    </span>
                    <span>Access a secure, HIPAA-compliant dashboard</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1">
                      <svg className="w-5 h-5 text-[#B187E8]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                    </span>
                    <span>Integrate data with your EHR for streamlined workflows</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative min-h-[320px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/assets/eVitals-RPMDashboard.png"
                alt="eVitals RPM Dashboard"
                fill
                className="object-cover"
                quality={100}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F9F5FF]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2E1065]">Key Features of eVitals RPM Software</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Real-Time Data Access",
                points: [
                  "View patient vitals instantly—blood pressure, glucose, weight, SpO₂, and more.",
                  "Color-coded alerts for abnormal readings.",
                ],
              },
              {
                title: "Multi-Device Integration",
                points: [
                  "Works with our FDA-cleared 2-in-1 BP + Glucose Monitor and High-Capacity Weight Scale.",
                  "Supports Bluetooth, Wi-Fi, and 4G cellular-enabled devices.",
                ],
              },
              {
                title: "Automated Compliance Tracking",
                points: [
                  "Built-in RPM compliance rules (16-day minimum data requirement per 30 days).",
                  "Patient adherence reports for billing audits.",
                ],
              },
              {
                title: "EHR Integration",
                points: [
                  "Compatible with Epic, Cerner, Athenahealth, and more.",
                  "Avoid duplicate data entry and save staff time.",
                ],
              },
              {
                title: "Secure & HIPAA-Compliant",
                points: [
                  "End-to-end encryption.",
                  "Business Associate Agreement (BAA) provided.",
                ],
              },
              {
                title: "Multi-Language Patient Support",
                points: [
                  "English, Spanish, and more—ensuring accessibility for diverse patient populations.",
                ],
              },
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-[#2E1065] mb-3">{feature.title}</h3>
                <ul className="space-y-2 text-gray-700">
                  {feature.points.map((p, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1">
                        <svg className="w-5 h-5 text-[#B187E8]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                      </span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2E1065]">How It Works</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "Step 1", title: "Enroll Patients", desc: "Our team assists with onboarding and obtaining patient consent." },
              { step: "Step 2", title: "Monitor in Real-Time", desc: "Vitals automatically upload to the eVitals dashboard without patient intervention." },
              { step: "Step 3", title: "Intervene Early", desc: "Clinicians receive alerts for readings outside set thresholds." },
              { step: "Step 4", title: "Get Reimbursed", desc: "Automated reports help you bill CPT 99453, 99454, 99457, and 99458 accurately." },
            ].map((item, index) => (
              <div key={index} className="bg-[#F9F5FF] p-6 rounded-xl border border-purple-100">
                <div className="text-[#B187E8] font-semibold mb-2">{item.step}</div>
                <h3 className="text-lg font-bold text-[#2E1065] mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F9F5FF]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2E1065]">Benefits for Providers</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Improve Patient Outcomes", desc: "Catch changes early, prevent hospitalizations." },
              { title: "Increase Practice Revenue", desc: "Earn $120–$150+ per patient/month." },
              { title: "Save Time", desc: "Automated alerts and reports reduce manual workload." },
              { title: "Boost Patient Engagement", desc: "Give patients real-time feedback and support." },
            ].map((b, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-[#2E1065] mb-2">{b.title}</h3>
                <p className="text-gray-700">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2E1065]">Who Uses eVitals?</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {[
              "Family & Internal Medicine – Manage chronic conditions like hypertension and diabetes.",
              "Cardiology – Track CHF, arrhythmias, and post-MI recovery.",
              "Nephrology – Monitor fluid balance, BP, and glucose in CKD patients.",
              "Endocrinology – Improve diabetes control with continuous glucose tracking.",
              "Rural Health Clinics – Provide care to patients without frequent in-person visits.",
            ].map((item, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg p-4 flex items-start gap-3">
                <svg className="w-5 h-5 text-[#B187E8] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F9F5FF]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2E1065]">Compliance-Ready by Design</h2>
          </div>
          <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-md">
            <ul className="space-y-3 text-gray-700">
              {[
                "Devices are FDA-cleared medical devices.",
                "Data is collected for at least 16 days every 30 days.",
                "All transmissions are encrypted and securely stored.",
                "Patient consent is documented and stored for audit readiness.",
              ].map((line, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1">
                    <svg className="w-5 h-5 text-[#B187E8]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                  </span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
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
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-purple-900 mb-6">Ready to See It in Action?</h2>
          <p className="text-lg text-gray-800 mb-6">
            Experience how eVitals can simplify RPM for your clinic and improve patient care.
          </p>
          <div className="space-y-2 text-gray-900 mb-8">
            <p>📞 Call us at (XXX) XXX-XXXX</p>
            <p>📧 Email <a href="mailto:info@yourcompany.com" className="underline">info@yourcompany.com</a></p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/demo"
              className="bg-[#270949] hover:bg-[#1f0636] text-white px-6 py-3 rounded-full transition font-semibold shadow-lg"
            >
              Schedule Your Free Demo →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RPMSoftware;


