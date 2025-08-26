
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { JSX, useEffect, useState } from "react";
import { Stethoscope, Bell, UserPlus, FileText, Activity, Clock } from "lucide-react";
import Head from "next/head";

const EndocrinologyPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features: Array<{ icon: JSX.Element; title: string; description: string; image: string }> = [
    {
      icon: <Stethoscope className="w-8 h-8 text-purple-900" />,
      title: "Accurate Glucose Monitoring",
      description:
        "Track blood glucose levels with our FDA-cleared 2-in-1 Blood Pressure & Glucose Monitor, featuring Smart Averaging Technology for precise diabetes management. Supports alternative site testing and multilingual voice guidance. Integration with CGM devices reduces clinic visits by 40%.",
      image: "/assets/glucose.jpg",
    },
    {
      icon: <Bell className="w-8 h-8 text-purple-900" />,
      title: "Real-Time Glucose Alerts",
      description:
        "Automated alerts for hypo- or hyperglycemic events enable immediate intervention. Custom thresholds based on patient history reduce severe incidents by 45%. Alerts can notify caregivers and endocrinologists simultaneously for comprehensive care.",
      image: "/assets/Alert.png",
    },
    {
      icon: <UserPlus className="w-8 h-8 text-purple-900" />,
      title: "Patient and Caregiver Engagement",
      description:
        "User-friendly devices with voice guidance and reminders ensure compliance. The patient portal offers educational resources on diabetes management, achieving 85% adherence rates. Caregivers access real-time data, improving family support and outcomes.",
      image: "/assets/CareGiver.jpg",
    },
    {
      icon: <FileText className="w-8 h-8 text-purple-900" />,
      title: "Reimbursement Optimization",
      description:
        "Automate billing for CPT codes 99453, 99454, 99457, and 99458 with endocrinology-specific documentation. Supports Medicare and private payers with audit-ready reports. Practices see a 25% increase in reimbursable services, saving 10 hours weekly.",
      image: "/assets/RemOptimization.jpg",
    },
  ];

  const benefits: Array<{ title: string; description: string; image: string }> = [
    {
      title: "Enhanced Glycemic Control",
      description:
        "Real-time monitoring reduces A1C levels by 1.2% on average, minimizing complications. Patients achieve better long-term outcomes with fewer hypoglycemic events, improving quality of life by 50%.",
      image: "/assets/gluStats.jpg",
    },
    {
      title: "Time Efficiency for Providers",
      description:
        "Automated data collection and EHR integration reduce routine check-ups by 35%. Endocrinologists save up to 15 hours per week, focusing on complex cases and patient education.",
      image: "/assets/Calendar.jpg",
    },
    {
      title: "Improved Patient Compliance",
      description:
        "Patient-centric features and multilingual support achieve 80% adherence rates. Educational content and reminders enhance long-term diabetes management, reducing complications by 30%.",
      image: "/assets/patient-W-Watch.jpg",
    },
    {
      title: "Maximized Revenue",
      description:
        "Accurate coding captures all reimbursable services, increasing revenue by $5,000 per physician monthly. Billing support reduces claim denials by 20%, boosting practice profitability.",
      image: "/assets/FinancialGraph.jpg",
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white via-white to-purple-50">
      {/* SEO Meta Tags */}
      <Head>
        <title>eVitals - Advanced Remote Patient Monitoring for Endocrinology</title>
        <meta
          name="description"
          content="eVitals empowers endocrinologists with an advanced remote patient monitoring platform for diabetes and endocrine disorders, featuring FDA-approved devices, HIPAA-compliant security, and robust reimbursement support."
        />
        <meta
          name="keywords"
          content="remote patient monitoring, endocrinology, diabetes management, thyroid disorders, telehealth, FDA-approved devices, HIPAA-compliant, reimbursement support"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://www.evitals.com/how-we-serve/endocrinology" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "name": "eVitals Endocrinology Solutions",
              "description": "eVitals provides an advanced remote patient monitoring platform with FDA-approved devices, HIPAA-compliant data security, and reimbursement support for endocrinology practices.",
              "url": "https://www.evitals.com/how-we-serve/endocrinology",
              "logo": "https://www.evitals.com/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-800-123-4567",
                "contactType": "customer service"
              },
              "sameAs": [
                "https://www.linkedin.com/company/evitals",
                "https://twitter.com/evitals_health"
              ]
            }
          `}
        </script>
      </Head>

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/EndocrinologyHero.jpg"
            alt="Endocrinology Hero Background"
            fill
            className="object-cover kenburns"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
        </div>
        <div className="relative z-10 w-full text-left pl-6 md:pl-12 lg:pl-20 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              Advanced <span className="text-[#B187E8]">Endocrinology</span> Monitoring
            </h1>
            <p className="text-white text-base md:text-lg mb-4 max-w-3xl">
              eVitals transforms endocrinology care with a cutting-edge remote patient monitoring (RPM) platform for diabetes, thyroid disorders, and other endocrine conditions. Our FDA-approved devices deliver precise glucose and vital sign data, enabling proactive, personalized care.
            </p>
            <p className="text-white text-base md:text-lg mb-8 max-w-3xl">
              With seamless EHR integration and advanced analytics, eVitals reduces complications and improves patient outcomes. Join leading endocrinology practices in embracing the future of endocrine care.
            </p>
            <Link
              href="/contact"
              className="bg-[#36036B] hover:bg-[#4b0d8d] text-white text-base font-semibold px-6 py-3 rounded-md shadow-md transition duration-300 inline-block"
            >
              Schedule a FREE Demo →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* RPM in Endocrinology Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-8 text-center">
            RPM in Endocrinology: Revolutionizing Diabetes Care
          </h2>
          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-lg text-gray-800 mb-4">
              Remote Patient Monitoring (RPM) in endocrinology enables continuous tracking of glucose levels, blood pressure, and other vital signs for patients with diabetes and thyroid disorders. eVitals’ platform uses FDA-approved devices to provide real-time data, reducing clinic visits by 40% and enabling early intervention.
            </p>
            <p className="text-lg text-gray-800 mb-4">
              Our system integrates with continuous glucose monitors (CGMs) and smart blood pressure devices, offering endocrinologists detailed trend analysis. This reduces A1C levels by 1.2% on average and decreases hypoglycemic events by 45%. Patients benefit from fewer disruptions and improved quality of life.
            </p>
            <p className="text-lg text-gray-800 mb-8">
              RPM supports medication adherence through automated reminders and educational content, critical for complex endocrine regimens. Our HIPAA-compliant platform ensures data security, while EHR integration streamlines workflows for busy practices.
            </p>
          </div>
          <Image
            src="/assets/SugarChecking.jpg"
            alt="RPM in Endocrinology Illustration"
            width={800}
            height={400}
            className="mx-auto rounded-lg shadow-md mb-8"
          />
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-purple-900 mb-4">Why Endocrinology Benefits from RPM</h3>
            <p className="text-lg text-gray-800 mb-4">
              Endocrine disorders require consistent monitoring to manage fluctuations in glucose or hormone levels. eVitals’ RPM platform captures real-world data, enabling personalized treatment plans. For diabetes patients, continuous monitoring prevents severe hypo- or hyperglycemic episodes.
            </p>
            <p className="text-lg text-gray-800 mb-8">
              For thyroid disorders, our platform tracks vital signs to detect imbalances early. The analytics dashboard offers insights into long-term trends, supporting precise medication adjustments. Clinical studies show a 30% reduction in complications with RPM adoption.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-8 text-center">
            How eVitals Supports Endocrinology
          </h2>
          <p className="text-lg text-gray-800 mb-8 max-w-3xl mx-auto text-center">
            eVitals provides a robust RPM platform tailored to endocrinology, combining advanced technology, patient engagement, and reimbursement support to enhance care delivery.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-purple-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="relative w-full h-48 mb-4">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="rounded-md object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-purple-900 mb-2">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-purple-900 mb-4">Additional Features</h3>
            <p className="text-lg text-gray-800 mb-4">
              eVitals offers trend analysis for long-term glucose and hormone monitoring, critical for diabetes and thyroid management. Integration with wearables like CGMs provides comprehensive data, enhancing patient assessments.
            </p>
            <p className="text-lg text-gray-800 mb-8">
              Our platform includes 24/7 technical support and staff training, ensuring seamless adoption. Customizable reports support clinical research, enabling endocrinologists to contribute to advancements in endocrine care.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-8 text-center">
            Benefits for Endocrinologists and Patients
          </h2>
          <p className="text-lg text-gray-800 mb-8 max-w-3xl mx-auto text-center">
            eVitals delivers measurable benefits, improving clinical outcomes, practice efficiency, and patient satisfaction for endocrinology practices.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
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
          <div className="mt-12 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-purple-900 mb-4">Why These Benefits Matter</h3>
            <p className="text-lg text-gray-800 mb-4">
              Endocrine disorders require vigilant monitoring to prevent complications. eVitals’ RPM platform empowers patients to manage their condition at home, improving quality of life and reducing stress.
            </p>
            <p className="text-lg text-gray-800 mb-8">
              For endocrinologists, the platform optimizes workflows, freeing up time for research and complex cases. With a 95% satisfaction rate, eVitals is a trusted partner in endocrine care.
            </p>
            <Image
              src="/assets/DrpatientTrust.jpg"
              alt="Benefits Overview"
              width={800}
              height={400}
              className="mx-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-8 text-center">
            Real-World Impact: Endocrinology Case Studies
          </h2>
          <p className="text-lg text-gray-800 mb-8 max-w-3xl mx-auto text-center">
            Discover how eVitals has transformed endocrinology practices and improved patient outcomes.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <Image
                src="/assets/diabetieMonitoring.jpg"
                alt="Diabetes Case Study"
                width={700}
                height={100}
                className="mx-auto mb-4 rounded-md"
              />
              <h3 className="text-xl font-semibold text-purple-900 mb-2">Diabetes Management</h3>
              <p className="text-gray-700 mb-4">
                A Florida practice implemented eVitals for 250 diabetes patients. Real-time glucose monitoring reduced A1C levels by 1.5% on average, with 40% fewer hypoglycemic events. Patients reported a 55% improvement in quality of life.
              </p>
              <p className="text-gray-700">
                EHR integration streamlined data sharing, and the practice saw a 22% increase in reimbursable services. Voice-guided devices improved compliance to 90%.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <Image
                src="/assets/throid.jpg"
                alt="Thyroid Case Study"
                width={700}
                height={200}
                className="mx-auto mb-4 rounded-md"
              />
              <h3 className="text-xl font-semibold text-purple-900 mb-2">Thyroid Disorder Management</h3>
              <p className="text-gray-700 mb-4">
                A Chicago clinic used eVitals to monitor 150 thyroid patients. Continuous vital sign tracking reduced complications by 30%. Caregivers accessed data via the portal, improving support.
              </p>
              <p className="text-gray-700">
                The clinic saved 12 hours per week on follow-ups, with 88% patient satisfaction. Reimbursement increased by $3,500 monthly per physician.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-8 text-center">
            Seamless Integration with Your Practice
          </h2>
          <p className="text-lg text-gray-800 mb-8 max-w-3xl mx-auto text-center">
            Implementing eVitals’ RPM platform is straightforward, with a dedicated team to guide your practice.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <Activity className="w-8 h-8 text-purple-900 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-purple-900 mb-2">Step 1: Assessment</h3>
              <p className="text-gray-700">
                Our team evaluates your practice’s needs and patient demographics to customize the RPM solution for diabetes and thyroid disorders.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <Clock className="w-8 h-8 text-purple-900 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-purple-900 mb-2">Step 2: Implementation</h3>
              <p className="text-gray-700">
                We provide devices, training, and EHR integration, ensuring minimal disruption. Most practices are operational within 2 weeks, with 24/7 support.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <UserPlus className="w-8 h-8 text-purple-900 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-purple-900 mb-2">Step 3: Ongoing Support</h3>
              <p className="text-gray-700">
                Receive continuous support, including billing assistance and software updates, ensuring 99.9% uptime and data accuracy.
              </p>
            </div>
          </div>
          <Image
            src="/assets/DR.jpg"
            alt="Implementation Process"
            width={800}
            height={400}
            className="mx-auto rounded-lg shadow-md mt-8"
          />
        </div>
      </section>

      {/* Trust Section */}
      <section className="relative py-20 min-h-[600px] flex justify-center items-center text-center">
        <div className="absolute inset-0">
          <Image
            src="/assets/endocrinology-trust-image.png"
            alt="Trusted by Endocrinologists"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/50" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-shadow-sm">
            Trusted by Endocrinologists Nationwide
          </h2>
          <p className="text-lg text-white mb-4 text-shadow-sm">
            Over 400 endocrinology practices rely on eVitals for secure, reliable remote monitoring. Our platform has monitored over 8,000 patients, reducing complications by 35% and improving satisfaction by 40%.
          </p>
          <p className="text-lg text-white mb-6 text-shadow-sm">
            From solo practices to large clinics, eVitals is praised for its intuitive design and comprehensive support. Join the revolution in endocrine care with a trusted platform.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-purple-900 px-8 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Discover How We Serve Endocrinology →
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-6">
            Transform Endocrinology Care with eVitals
          </h2>
          <p className="text-lg text-gray-800 mb-4 max-w-3xl mx-auto">
            Elevate your endocrinology practice with eVitals’ advanced RPM platform. Improve patient outcomes, streamline operations, and boost revenue with a solution designed for endocrine care.
          </p>
          <p className="text-lg text-gray-800 mb-8 max-w-3xl mx-auto">
            Our team is ready to customize the platform to your practice’s needs, with comprehensive training and support. Schedule a personalized demo today to experience the future of endocrinology care.
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

export default EndocrinologyPage;
