
"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calculator, DollarSign, Users, Calendar } from "lucide-react";
import Head from "next/head";

const RPMReimbursementCalculator: React.FC = () => {
  // State for input fields and results
  const [patients, setPatients] = useState<number>(100);
  const [monitoringDays, setMonitoringDays] = useState<number>(20);
  const [error, setError] = useState<string>("");
  const [results, setResults] = useState<{ monthly: number; annual: number }>({
    monthly: 0,
    annual: 0,
  });

  // CPT code reimbursement rates (approximate, based on Medicare 2025 rates)
  const cptRates = useMemo(
    () => ({
      cpt99453: 19, // Device setup, one-time per patient
      cpt99454: 50, // Monthly device supply
      cpt99457: 51, // First 20 minutes of monitoring
      cpt99458: 42, // Additional 20 minutes of monitoring
    }),
    []
  );

  // Memoized calculateReimbursement function
  const calculateReimbursement = useCallback(() => {
    if (patients <= 0 || monitoringDays <= 0 || monitoringDays > 31) {
      setError("Please enter valid numbers (patients > 0, monitoring days between 1 and 31).");
      setResults({ monthly: 0, annual: 0 });
      return;
    }

    setError("");

    // Monthly reimbursement calculation
    const monthlyPerPatient =
      cptRates.cpt99454 + // Device supply
      (monitoringDays >= 20 ? cptRates.cpt99457 : 0) + // First 20 minutes if monitored 20+ days
      (monitoringDays >= 40 ? cptRates.cpt99458 : 0); // Additional 20 minutes (simplified assumption)

    const totalMonthly = patients * monthlyPerPatient;
    const totalAnnual = totalMonthly * 12;

    setResults({
      monthly: Math.round(totalMonthly),
      annual: Math.round(totalAnnual),
    });
  }, [patients, monitoringDays, cptRates]);

  // Run calculation when patients or monitoringDays change
  useEffect(() => {
    calculateReimbursement();
  }, [calculateReimbursement]);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white via-white to-purple-50 py-16">
      {/* SEO Meta Tags */}
      <Head>
        <title>eVitals - RPM Reimbursement Calculator</title>
        <meta
          name="description"
          content="Estimate your Remote Patient Monitoring (RPM) revenue with eVitals' reimbursement calculator. Input patient numbers and monitoring days to see potential earnings from CPT codes 99453, 99454, 99457, and 99458."
        />
        <meta
          name="keywords"
          content="RPM reimbursement calculator, remote patient monitoring, CPT codes, healthcare revenue, telehealth, eVitals"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://www.evitals.com/rpm-reimbursement-calculator" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "eVitals RPM Reimbursement Calculator",
              "description": "A tool to estimate revenue from Remote Patient Monitoring (RPM) using CPT codes, designed for healthcare providers.",
              "url": "https://www.evitals.com/rpm-reimbursement-calculator",
              "applicationCategory": "Medical",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              }
            }
          `}
        </script>
      </Head>

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/RPMcalhero.jpg"
            alt="RPM Calculator Hero Background"
            fill
            className="object-cover kenburns"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
        </div>
        <div className="relative z-10 w-full text-left pl-6 md:pl-12 lg:pl-20 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              RPM <span className="text-[#B187E8]">Reimbursement</span> Calculator
            </h1>
            <p className="text-white text-base md:text-lg mb-8 max-w-3xl">
              Discover the revenue potential of Remote Patient Monitoring (RPM) with eVitals’ calculator. Input your practice’s patient numbers and monitoring days to estimate earnings from CPT codes 99453, 99454, 99457, and 99458.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-8 text-center">
            Calculate Your RPM Revenue
          </h2>
          <p className="text-lg text-gray-800 mb-8 max-w-3xl mx-auto text-center">
            Use our interactive tool to estimate monthly and annual revenue from RPM services. Adjust the number of patients and monitoring days to see how eVitals can boost your practice’s financial performance.
          </p>
          <motion.div
            className="bg-white rounded-xl p-8 shadow-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="flex items-center gap-2 text-lg font-semibold text-purple-900 mb-2">
                  <Users className="w-6 h-6" /> Number of Patients
                </label>
                <input
                  type="number"
                  value={patients}
                  onChange={(e) => setPatients(Number(e.target.value))}
                  min="1"
                  className="w-full p-3 border border-purple-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B187E8]"
                  placeholder="Enter number of patients"
                />
              </div>
              <div>
                <label className="flex items-center gap-2 text-lg font-semibold text-purple-900 mb-2">
                  <Calendar className="w-6 h-6" /> Monitoring Days per Month
                </label>
                <input
                  type="number"
                  value={monitoringDays}
                  onChange={(e) => setMonitoringDays(Number(e.target.value))}
                  min="1"
                  max="31"
                  className="w-full p-3 border border-purple-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B187E8]"
                  placeholder="Enter monitoring days"
                />
              </div>
            </div>
            {error && <p className="text-red-600 text-center mb-4">{error}</p>}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-900 mb-4 flex items-center gap-2">
                <DollarSign className="w-6 h-6" /> Estimated Revenue
              </h3>
              <p className="text-lg text-gray-800 mb-2">
                <span className="font-bold">Monthly Revenue:</span> ${results.monthly.toLocaleString()}
              </p>
              <p className="text-lg text-gray-800">
                <span className="font-bold">Annual Revenue:</span> ${results.annual.toLocaleString()}
              </p>
            </div>
          </motion.div>
          <Image
            src="/assets/calculator.jpg"
            alt="RPM Calculator Illustration"
            width={800}
            height={400}
            className="mx-auto rounded-lg shadow-md mt-8"
          />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-8 text-center">
            How the Calculator Works
          </h2>
          <p className="text-lg text-gray-800 mb-8 max-w-3xl mx-auto text-center">
            Our calculator uses standard Medicare CPT code rates to estimate RPM revenue based on your input. Here’s how it breaks down:
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Calculator className="w-8 h-8 text-purple-900 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-purple-900 mb-2">CPT Code Breakdown</h3>
              <p className="text-gray-700">
                Includes CPT 99453 ($19, one-time setup), CPT 99454 ($50/month, device supply), CPT 99457 ($51/month, first 20 minutes), and CPT 99458 ($42/month, additional 20 minutes).
              </p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Users className="w-8 h-8 text-purple-900 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-purple-900 mb-2">Patient Input</h3>
              <p className="text-gray-700">
                Enter the number of patients enrolled in your RPM program. The calculator scales revenue based on patient volume.
              </p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Calendar className="w-8 h-8 text-purple-900 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-purple-900 mb-2">Monitoring Days</h3>
              <p className="text-gray-700">
                Input the average number of days per month each patient is monitored. A minimum of 20 days unlocks additional CPT codes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-8 text-center">
            Why Use eVitals for RPM Reimbursement
          </h2>
          <p className="text-lg text-gray-800 mb-8 max-w-3xl mx-auto text-center">
            eVitals’ RPM platform maximizes your practice’s revenue while improving patient outcomes. Here’s how we help:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Accurate Billing",
                description:
                  "Automate billing for CPT codes 99453, 99454, 99457, and 99458 with audit-ready reports, reducing claim denials by 15%.",
                image: "/assets/AccurateBilling.jpg",
              },
              {
                title: "Revenue Growth",
                description:
                  "Practices see an average revenue increase of $3,500 per physician monthly with our optimized RPM workflows.",
                image: "/assets/RevenueGrowth.jpg",
              },
              {
                title: "Time Savings",
                description:
                  "Automated data collection and EHR integration save up to 18 hours per week, allowing focus on patient care.",
      image: "/assets/TimeSaving.jpg",
              },
              {
                title: "Patient Compliance",
                description:
                  "User-friendly devices and educational resources achieve 80% adherence, enhancing outcomes and reimbursement.",
      image: "/assets/patient-W-Watch.jpg",
              },
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="relative w-full h-48 mb-4">
                  <Image
                    src={benefit.image}
                    alt={benefit.title}
                    fill
                    className="rounded-md object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
                <h3 className="text-lg font-semibold text-purple-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-6">
            Maximize Your RPM Revenue with eVitals
          </h2>
          <p className="text-lg text-gray-800 mb-4 max-w-3xl mx-auto">
            Unlock the full financial potential of Remote Patient Monitoring with eVitals’ comprehensive platform. Our team customizes solutions to your practice’s needs, ensuring seamless integration and maximum reimbursement.
          </p>
          <p className="text-lg text-gray-800 mb-8 max-w-3xl mx-auto">
            Schedule a personalized demo today to see how eVitals can transform your practice’s revenue and patient care.
          </p>
          <Link
            href="/contact"
            className="bg-[#36036B] hover:bg-[#4b0d8d] text-white text-base font-semibold px-6 py-3 rounded-md shadow-md transition duration-300 inline-block"
          >
            Schedule a FREE Demo →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default RPMReimbursementCalculator;
