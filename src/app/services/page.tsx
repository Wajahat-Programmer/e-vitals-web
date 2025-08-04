"use client";

import Image from "next/image";
import Button from "@/components/home/Button";
import SubPageLayout from "@/components/home/SubPageLayout";

// Lucide Medical Icons
import {
  Stethoscope,
  Pill,
  Phone,
  Brain,
  Handshake,
  BarChart3,
} from "lucide-react";
import Link from "next/link";

const ServicesPage = () => {
  const serviceIcons = [
    {
      icon: <Stethoscope className="w-8 h-8 text-purple-900" />,
      title: "Remote Patient Monitoring",
      description:
        "Track vitals 24/7 and catch problems before they become emergencies.",
    },
    {
      icon: <Pill className="w-8 h-8 text-purple-900" />,
      title: "Chronic Care Management",
      description: "Coordinate long-term care plans for better outcomes.",
    },
    {
      icon: <Phone className="w-8 h-8 text-purple-900" />,
      title: "Telehealth Consultations",
      description:
        "Connect with patients anytime, anywhere — securely and easily.",
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-900" />,
      title: "Behavioral Health",
      description:
        "Support your patients' mental health with integrated counseling.",
    },
    {
      icon: <Handshake className="w-8 h-8 text-purple-900" />,
      title: "Care Coordination",
      description:
        "Stay connected with all care providers for seamless treatment.",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-900" />,
      title: "Analytics & Reporting",
      description:
        "Get actionable insights from clean, organized patient data.",
    },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Subtle background gradient */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-white via-white to-purple-50 opacity-90" />

      <>
        {/* HERO SECTION */}
        <section className="relative w-full h-screen overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/assets/services.jpg"
              alt="Healthcare Services"
              fill
              className="object-cover"
              quality={90}
              priority
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>

          <div className="relative z-10 h-full flex items-center justify-center text-center">
            <div className="max-w-3xl px-6">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Services That Support Your Success
              </h1>
              <p className="text-lg md:text-xl text-gray-200">
                We handle the tech and care coordination — so you can focus on
                your patients.
              </p>
            </div>
          </div>
        </section>

        {/* SERVICES LIST SECTION */}
        <section className="mb-20 mt-12 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-4">
              How We Help You
            </h2>
            <p className="text-gray-800 text-lg md:text-xl mb-10">
              We make it easier for your clinic to deliver care, stay compliant,
              and grow revenue — all without extra workload on your staff.
            </p>

            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 grid gap-6">
              {[
                "Personalized education to help patients use medical devices with confidence",
                "Automated monitoring & reminders to keep patients engaged daily",
                "24/7 technical support — so your team doesn’t have to troubleshoot",
                "Real-time alerts sent to physicians when critical vitals change",
                "Fast device replacements to minimize downtime",
                "Clear, customized monthly reports for each patient",
                "Vitals tracked exactly the way you prescribe them",
                "Accurate billing & coding to help you get reimbursed fully",
                "Help enrolling patients — even handling onboarding for you",
              ].map((service, index) => (
                <div key={index} className="flex items-start text-left">
                  <svg
                    className="w-6 h-6 text-purple-700 mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <p className="ml-4 text-lg text-gray-900">{service}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COMPREHENSIVE SERVICES SECTION */}
        <section className="mb-20 px-4">
          <h2 className="text-3xl font-bold text-purple-900 mb-12 text-center">
            Complete Care Solutions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceIcons.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-purple-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA SECTION */}
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
      Let’s Make Care Easier — Together
    </h2>
    <p className="text-xl text-gray-800 mb-8 max-w-3xl mx-auto">
      Want to see how E-Vitals can simplify patient monitoring, reduce
      staff load, and grow your practice?
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Link
        href="/demo"
        className="bg-[#270949] hover:bg-[#1e0635] text-white px-6 py-3 rounded-full hover:opacity-90 transition font-semibold shadow-lg"
      >
        Schedule Consultation
      </Link>
    </div>
  </div>
</section>

      </>
    </div>
  );
};

export default ServicesPage;
