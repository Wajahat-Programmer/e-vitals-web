"use client";
import React, { useState } from "react";
import Link from "next/link";

const RpmOverviewSection: React.FC = () => {
  const [showFullWhoWeServe, setShowFullWhoWeServe] = useState(false);

  const toggleWhoWeServe = () => {
    setShowFullWhoWeServe(!showFullWhoWeServe);
  };

  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* The Crisis */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2E1065] mb-6 text-center">
            The Crisis: Why Remote Patient Monitoring (RPM) is Essential for
            Chronic Care Management
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto text-center leading-relaxed">
            The escalating chronic disease crisis affects nearly 75% of American
            adults, driving up healthcare costs, provider burnout, and care
            gaps. Effective, HIPAA-compliant Remote Patient Monitoring (RPM)
            streamlines chronic care management, simplifies RPM CPT codes, and
            maximizes Medicare reimbursement for proactive, profitable medicine.
          </p>
        </div>

        {/* RPM That Pays */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2E1065] mb-6 text-center">
            RPM That Pays: Elevating Chronic Care and Maximizing Reimbursement
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Optimized Reimbursement",
                desc: "Maximize Medicare reimbursement for RPM CPT codes (99453, 99454) with streamlined billing workflows, ensuring financial sustainability and high capture rates in remote patient monitoring.",
              },
              {
                title: "Seamless Technology",
                desc: "Integrate HIPAA-compliant RPM software with EMR/EHR for real-time vital sign data from connected devices, reducing administrative friction and provider burnout in chronic care management.",
              },
              {
                title: "Superior Patient Outcomes",
                desc: "Enable proactive interventions for hypertension and diabetes via RPM, improving patient adherence, reducing acute incidents, and supporting value-based care models.",
              },
              {
                title: "Clinical Support",
                desc: "Scale RPM programs with dedicated managed services as an extension of your staff, handling logistics and monitoring to minimize hiring and overhead in chronic care.",
              },
              {
                title: "Data & Compliance",
                desc: "Rely on secure, HIPAA-compliant cloud-based RPM for patient vitals monitoring, staying ahead of regulations to focus on care without compliance worries.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#F9F5FF] p-6 rounded-xl border border-purple-100"
              >
                <h3 className="text-xl font-bold text-[#2E1065] mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Clinical Monitoring Services */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2E1065] mb-6 text-center">
            Clinical Monitoring Services: Your Full-Service RPM Solution
          </h2>
          <p className="text-xl font-bold text-[#2E1065] mb-8 text-center">
            Extend Your Reach. Not Your Staff.
          </p>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-8 text-center leading-relaxed">
            Combat provider burnout with comprehensive RPM managed services,
            providing real-time data oversight, patient engagement, and
            compliance for maximum Medicare reimbursement via RPM CPT codes.
          </p>
          <h4 className="text-2xl font-bold text-[#2E1065] mb-6 text-center">
            Turnkey RPM Program Implementation
          </h4>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Patient Engagement and Onboarding",
                desc: "Manage device logistics, setup, education, and consent for FDA-approved connected health devices, ensuring high compliance and seamless Medicare reimbursement in RPM.",
              },
              {
                title: "Proactive Clinical Oversight",
                desc: "Licensed staff monitor vitals data, triage alerts, and send compliance reminders to qualify for RPM CPT codes (99454, 99457), reducing administrative burden.",
              },
              {
                title: "Financial Assurance and Reporting",
                desc: "Track time for CPT 99457/99458 and generate audit-ready billing reports to maximize revenue from eligible RPM services without financial guesswork.",
              },
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl shadow">
                <h5 className="text-lg font-bold text-[#2E1065] mb-3">
                  {item.title}
                </h5>
                <p className="text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Patient Engagement & Outcomes */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2E1065] mb-6 text-center">
            Patient Engagement & Outcomes: Proactive Chronic Care Management
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-8 text-center leading-relaxed">
            Transform episodic care into continuous RPM, empowering patients
            with real-time data for better adherence, reduced readmissions, and
            improved quality of life in hypertension, diabetes, and more.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Proactive Health & Safety Net",
                desc: "FDA-approved devices stream real-time vitals for early detection in chronic conditions, reducing ER visits and hospital readmissions via instant interventions.",
              },
              {
                title: "Empowerment and Adherence",
                desc: "User-friendly telehealth monitoring with reminders drives self-management and sustained adherence to care plans, boosting patient outcomes in RPM programs.",
              },
              {
                title: "Freedom and Quality of Life",
                desc: "Home-based RPM eliminates clinic visits, providing peace of mind through continuous monitoring and flexible chronic care management.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#F9F5FF] p-6 rounded-xl border border-purple-100"
              >
                <h5 className="text-lg font-bold text-[#2E1065] mb-3">
                  {item.title}
                </h5>
                <p className="text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <h4 className="text-2xl font-bold text-[#2E1065] mb-6">
              Ready to Experience Proactive RPM Benefits?
            </h4>
            <p className="text-lg text-gray-700 mb-8">
              Partner with eVitals for superior patient outcomes and enhanced
              telehealth monitoring.
            </p>
            <Link
              href="/contact"
              className="bg-[#36036B] hover:bg-[#4b0d8d] text-white text-base font-semibold px-8 py-4 rounded-md shadow-md transition duration-300 inline-block"
            >
              Request Your Free Consultation Today →
            </Link>
          </div>
        </div>

        {/* Who We Serve */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2E1065] mb-6 text-center">
            Who We Serve: Targeted RPM Solutions for Chronic Care
          </h2>
          <div className="space-y-8">
            {/* By Organizational Model */}
            <div>
              <h3 className="text-2xl font-bold text-[#270949] mb-4">
                1. By Organizational Model
              </h3>
              <div
                className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 ${
                  showFullWhoWeServe ? "" : "max-h-[400px] overflow-hidden"
                }`}
              >
                {[
                  {
                    title: "Physician Practices",
                    desc: "Expand chronic care management without extra staff; handle RPM CPT codes (99457/99458) for maximum Medicare reimbursement and reduced burnout.",
                  },
                  {
                    title: "Value Based Care (VBC) Organizations",
                    desc: "Meet quality metrics and reduce readmissions with real-time RPM data for population health management in risk-bearing models.",
                  },
                  {
                    title: "FQHCs (Federally Qualified Health Centers)",
                    desc: "Extend equitable RPM access to underserved populations with compliant billing for alternative payment models.",
                  },
                  {
                    title: "Hospitals And Health Systems",
                    desc: "Cut 30-day readmissions for post-discharge patients via turnkey RPM managed services.",
                  },
                  {
                    title: "ACOs (Accountable Care Organizations)",
                    desc: "Scale chronic disease management across networks for better KPIs and shared savings.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-4 md:p-6 rounded-xl shadow"
                  >
                    <h4 className="text-lg font-bold text-[#2E1065] mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* By Clinical Focus Area - Shortened to key ones */}
            <div>
              <h3 className="text-2xl font-bold text-[#270949] mb-4">
                2. By Clinical Focus Area
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Primary Care",
                    desc: "Simplify complex panel management with filtered RPM data for profitable chronic care.",
                  },
                  {
                    title: "Cardiology",
                    desc: "Monitor hypertension and heart failure with real-time vitals to prevent readmissions.",
                  },
                  {
                    title: "Endocrinology",
                    desc: "Achieve glycemic control in diabetes via connected glucometers and CPT 99457 tracking.",
                  },
                  {
                    title: "Pulmonology",
                    desc: "Detect COPD exacerbations early with pulse oximetry for better outcomes.",
                  },
                  {
                    title: "Geriatrics",
                    desc: "Support multi-chronic elderly care with easy devices and family monitoring.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-4 md:p-6 rounded-xl shadow"
                  >
                    <h4 className="text-lg font-bold text-[#2E1065] mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* By Chronic Condition */}
            <div>
              <h3 className="text-2xl font-bold text-[#270949] mb-4">
                3. By Chronic Condition
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Hypertension (HTN)",
                    desc: "Continuous blood pressure monitoring for better control and Medicare reimbursement in RPM.",
                  },
                  {
                    title: "Diabetes Mellitus (DM)",
                    desc: "Tight glycemic tracking with glucometers to minimize complications and boost adherence.",
                  },
                  {
                    title: "COPD and Respiratory Conditions",
                    desc: "Early exacerbation detection via oximetry to reduce hospital admissions.",
                  },
                  {
                    title: "Weight Management & Obesity",
                    desc: "Connected scales for accountability in co-morbidity management and chronic care plans.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#F9F5FF] p-6 rounded-xl border border-purple-100"
                  >
                    <h4 className="text-lg font-bold text-[#2E1065] mb-3">
                      {item.title}
                    </h4>
                    <p className="text-gray-700 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {!showFullWhoWeServe && (
            <div className="text-center mt-8">
              <button
                onClick={toggleWhoWeServe}
                className="bg-[#36036B] hover:bg-[#4b0d8d] text-white text-base font-semibold px-6 py-3 rounded-md shadow-md transition duration-300"
              >
                Read More on Targeted RPM Solutions →
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default RpmOverviewSection;
