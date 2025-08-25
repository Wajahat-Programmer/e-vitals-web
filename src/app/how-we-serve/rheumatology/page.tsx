
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { JSX, useEffect, useState } from "react";
import { Stethoscope, Bell, UserPlus, FileText, Activity, Clock } from "lucide-react";
import Head from "next/head";

const RheumatologyPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features: Array<{ icon: JSX.Element; title: string; description: string }> = [
    {
      icon: <Stethoscope className="w-8 h-8 text-purple-900" />,
      title: "Joint Health Monitoring",
      description:
        "Track pain levels, joint mobility, and vital signs for RA and lupus patients using FDA-approved wearable devices. Integration with patient-reported outcomes reduces clinic visits by 35%.",
    },
    {
      icon: <Bell className="w-8 h-8 text-purple-900" />,
      title: "Flare and Vital Alerts",
      description:
        "Automated alerts for disease flares or abnormal vitals enable rapid response to worsening symptoms. Custom thresholds reduce emergency visits by 30%. Alerts notify caregivers and rheumatologists.",
    },
    {
      icon: <UserPlus className="w-8 h-8 text-purple-900" />,
      title: "Patient and Caregiver Engagement",
      description:
        "User-friendly devices with voice guidance ensure compliance. The patient portal offers educational resources, achieving 80% adherence rates. Caregivers access real-time data, improving support.",
    },
    {
      icon: <FileText className="w-8 h-8 text-purple-900" />,
      title: "Reimbursement Optimization",
      description:
        "Automate billing for CPT codes 99453, 99454, 99457, and 99458 with rheumatology-specific documentation. Supports Medicare and private payers with audit-ready reports. Practices see a 20% increase in reimbursable services.",
    },
  ];

  const benefits: Array<{ title: string; description: string }> = [
    {
      title: "Enhanced Rheumatology Care",
      description:
        "Continuous monitoring reduces flares by 35% for RA and lupus patients. Early detection of symptoms improves outcomes and quality of life by 50%.",
    },
    {
      title: "Time Efficiency for Providers",
      description:
        "Automated data collection and EHR integration reduce routine check-ups by 30%. Rheumatologists save up to 18 hours per week, focusing on high-risk cases.",
    },
    {
      title: "Improved Patient Compliance",
      description:
        "Patient-centric features and multilingual support achieve 80% adherence rates. Educational content reduces complications by 25%, supporting long-term management.",
    },
    {
      title: "Maximized Revenue",
      description:
        "Accurate coding captures all reimbursable services, increasing revenue by $3,500 per physician monthly. Billing support reduces claim denials by 15%.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white via-white to-purple-50">
      {/* SEO Meta Tags */}
      <Head>
        <title>eVitals - Advanced Remote Patient Monitoring for Rheumatology</title>
        <meta
          name="description"
          content="eVitals empowers rheumatologists with an advanced remote patient monitoring platform for RA and lupus patients, featuring FDA-approved devices, HIPAA-compliant security, and robust reimbursement support."
        />
        <meta
          name="keywords"
          content="remote patient monitoring, rheumatology, rheumatoid arthritis management, lupus monitoring, telehealth, FDA-approved devices, HIPAA-compliant, reimbursement support"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://www.evitals.com/how-we-serve/rheumatology" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "name": "eVitals Rheumatology Solutions",
              "description": "eVitals provides an advanced remote patient monitoring platform with FDA-approved devices, HIPAA-compliant data security, and reimbursement support for rheumatology practices.",
              "url": "https://www.evitals.com/how-we-serve/rheumatology",
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
            src="/assets/rheumatology-hero-bg.png"
            alt="Rheumatology Hero Background"
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
              Advanced <span className="text-[#B187E8]">Rheumatology</span> Monitoring
            </h1>
            <p className="text-white text-base md:text-lg mb-4 max-w-3xl">
              eVitals transforms rheumatology care with a cutting-edge remote patient monitoring (RPM) platform for rheumatoid arthritis (RA) and lupus patients. Our FDA-approved devices deliver real-time pain, mobility, and vital sign data, enabling proactive care.
            </p>
            <p className="text-white text-base md:text-lg mb-8 max-w-3xl">
              With seamless EHR integration and advanced analytics, eVitals reduces flares and improves patient outcomes. Join leading rheumatology practices in embracing the future of autoimmune care.
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

      {/* RPM in Rheumatology Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-8 text-center">
            RPM in Rheumatology: Revolutionizing Autoimmune Care
          </h2>
          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-lg text-gray-800 mb-4">
              Remote Patient Monitoring (RPM) in rheumatology enables continuous tracking of pain levels, joint mobility, and vital signs for RA and lupus patients. eVitals’ platform reduces clinic visits by 35% and enables early intervention for disease flares.
            </p>
            <p className="text-lg text-gray-800 mb-4">
              Our system integrates with FDA-approved wearable devices, providing rheumatologists with real-time data and trend analysis. This reduces flares by 35% and improves patient quality of life by 50%. Patients benefit from home-based care and fewer disruptions.
            </p>
            <p className="text-lg text-gray-800 mb-8">
              RPM supports adherence to complex medication regimens through automated reminders and educational content. Our HIPAA-compliant platform ensures data security, while EHR integration streamlines workflows for busy rheumatology practices.
            </p>
          </div>
          <Image
            src="/assets/rheumatology-rpm-image.png"
            alt="RPM in Rheumatology Illustration"
            width={800}
            height={400}
            className="mx-auto rounded-lg shadow-md mb-8"
          />
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-purple-900 mb-4">Why Rheumatology Benefits from RPM</h3>
            <p className="text-lg text-gray-800 mb-4">
              Autoimmune conditions require vigilant monitoring to prevent flares and complications. eVitals’ RPM platform captures real-world data, enabling personalized treatment plans. For RA patients, continuous monitoring detects early signs of joint inflammation, preventing disability.
            </p>
            <p className="text-lg text-gray-800 mb-8">
              For lupus patients, our platform tracks symptoms and vital signs, supporting proactive management. The analytics dashboard offers insights into long-term trends, helping rheumatologists optimize therapies. Clinical studies show a 30% reduction in flares with RPM.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-8 text-center">
            How eVitals Supports Rheumatology
          </h2>
          <p className="text-lg text-gray-800 mb-8 max-w-3xl mx-auto text-center">
            eVitals provides a robust RPM platform tailored to rheumatology, combining advanced technology, patient engagement, and reimbursement support.
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
                <Image
                  src="/assets/rheumatology-feature-image.png"
                  alt={feature.title}
                  width={200}
                  height={100}
                  className="mx-auto mb-4 rounded-md"
                />
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-purple-900 mb-2">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-purple-900 mb-4">Additional Features</h3>
            <p className="text-lg text-gray-800 mb-4">
              eVitals offers trend analysis for long-term monitoring of joint health, critical for RA and lupus management. Integration with wearables like smartwatches provides additional data on activity levels and sleep patterns.
            </p>
            <p className="text-lg text-gray-800 mb-8">
              Our platform includes 24/7 technical support and staff training, ensuring seamless adoption. Customizable reports support clinical research, enabling rheumatologists to contribute to advancements in autoimmune care.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-8 text-center">
            Benefits for Rheumatologists and Patients
          </h2>
          <p className="text-lg text-gray-800 mb-8 max-w-3xl mx-auto text-center">
            eVitals delivers measurable benefits, improving clinical outcomes, practice efficiency, and patient satisfaction for rheumatology practices.
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
                <Image
                  src="/assets/rheumatology-benefit-image.png"
                  alt={benefit.title}
                  width={200}
                  height={100}
                  className="mx-auto mb-4 rounded-md"
                />
                <h3 className="text-lg font-semibold text-purple-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-purple-900 mb-4">Why These Benefits Matter</h3>
            <p className="text-lg text-gray-800 mb-4">
              Autoimmune conditions require ongoing monitoring to prevent flares and complications. eVitals’ RPM platform empowers patients to manage their condition at home, improving quality of life and reducing stress.
            </p>
            <p className="text-lg text-gray-800 mb-8">
              For rheumatologists, the platform optimizes workflows, freeing up time for research and complex cases. With a 95% satisfaction rate, eVitals is a trusted partner in rheumatology care.
            </p>
            <Image
              src="/assets/rheumatology-benefit-overview.png"
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
            Real-World Impact: Rheumatology Case Studies
          </h2>
          <p className="text-lg text-gray-800 mb-8 max-w-3xl mx-auto text-center">
            Discover how eVitals has transformed rheumatology practices and improved patient outcomes.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <Image
                src="/assets/rheumatology-case-study1.png"
                alt="RA Case Study"
                width={400}
                height={200}
                className="mx-auto mb-4 rounded-md"
              />
              <h3 className="text-xl font-semibold text-purple-900 mb-2">Rheumatoid Arthritis Management</h3>
              <p className="text-gray-700 mb-4">
                A New York rheumatology practice implemented eVitals for 200 RA patients. Real-time monitoring reduced flares by 40%, with 50% fewer emergency visits. Patients reported a 55% improvement in quality of life.
              </p>
              <p className="text-gray-700">
                EHR integration streamlined data sharing, and the practice saw a 20% increase in reimbursable services. Voice-guided devices improved compliance to 85%.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <Image
                src="/assets/rheumatology-case-study2.png"
                alt="Lupus Case Study"
                width={400}
                height={200}
                className="mx-auto mb-4 rounded-md"
              />
              <h3 className="text-xl font-semibold text-purple-900 mb-2">Lupus Monitoring</h3>
              <p className="text-gray-700 mb-4">
                A California clinic used eVitals to monitor 150 lupus patients. Real-time tracking reduced flares by 30%. Caregivers accessed data via the portal, improving support.
              </p>
              <p className="text-gray-700">
                The clinic saved 12 hours per week on follow-ups, with 88% patient satisfaction. Reimbursement increased by $3,000 monthly per physician.
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
                Our team evaluates your practice’s needs and patient demographics to customize the RPM solution for RA and lupus patients.
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
            src="/assets/rheumatology-implementation-image.png"
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
            src="/assets/rheumatology-trust-image.png"
            alt="Trusted by Rheumatologists"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/50" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-shadow-sm">
            Trusted by Rheumatologists Nationwide
          </h2>
          <p className="text-lg text-white mb-4 text-shadow-sm">
            Over 250 rheumatology practices rely on eVitals for secure, reliable remote monitoring. Our platform has monitored over 5,000 patients, reducing flares by 35% and improving satisfaction by 40%.
          </p>
          <p className="text-lg text-white mb-6 text-shadow-sm">
            From solo practices to large clinics, eVitals is praised for its intuitive design and comprehensive support. Join the revolution in rheumatology care with a trusted platform.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-purple-900 px-8 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Discover How We Serve Rheumatology →
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-6">
            Transform Rheumatology Care with eVitals
          </h2>
          <p className="text-lg text-gray-800 mb-4 max-w-3xl mx-auto">
            Elevate your rheumatology practice with eVitals’ advanced RPM platform. Improve patient outcomes, streamline operations, and boost revenue with a solution designed for autoimmune care.
          </p>
          <p className="text-lg text-gray-800 mb-8 max-w-3xl mx-auto">
            Our team is ready to customize the platform to your practice’s needs, with comprehensive training and support. Schedule a personalized demo today to experience the future of rheumatology care.
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

export default RheumatologyPage;