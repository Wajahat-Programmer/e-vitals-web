
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { JSX, useEffect, useState } from "react";
import { Stethoscope, Bell, UserPlus, FileText, Activity, Clock } from "lucide-react";
import Head from "next/head";

const PulmonologyPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features: Array<{ icon: JSX.Element; title: string; description: string }> = [
    {
      icon: <Stethoscope className="w-8 h-8 text-purple-900" />,
      title: "Pulse Oximetry Monitoring",
      description:
        "Track oxygen saturation and pulse rate for COPD, asthma, and pulmonary fibrosis using FDA-approved cellular-enabled pulse oximeters. Integration with spirometry devices provides comprehensive respiratory data, reducing clinic visits by 40%.",
    },
    {
      icon: <Bell className="w-8 h-8 text-purple-900" />,
      title: "Real-Time Respiratory Alerts",
      description:
        "Automated alerts for low oxygen levels or abnormal pulse rates enable immediate intervention. Custom thresholds reduce emergency visits by 30%. Alerts can notify multiple caregivers for comprehensive support.",
    },
    {
      icon: <UserPlus className="w-8 h-8 text-purple-900" />,
      title: "Patient and Caregiver Engagement",
      description:
        "User-friendly devices with voice guidance ensure compliance. The patient portal offers educational resources on respiratory health, achieving 85% adherence rates. Caregivers access real-time data, improving family support.",
    },
    {
      icon: <FileText className="w-8 h-8 text-purple-900" />,
      title: "Reimbursement Optimization",
      description:
        "Automate billing for CPT codes 99453, 99454, 99457, and 99458 with pulmonology-specific documentation. Supports Medicare and private payers with audit-ready reports. Practices see a 20% increase in reimbursable services.",
    },
  ];

  const benefits: Array<{ title: string; description: string }> = [
    {
      title: "Improved Respiratory Outcomes",
      description:
        "Continuous monitoring reduces exacerbations by 35% for COPD and asthma patients. Early detection of respiratory distress improves outcomes and quality of life by 50%.",
    },
    {
      title: "Time Efficiency for Providers",
      description:
        "Automated data collection and EHR integration reduce routine check-ups by 30%. Pulmonologists save up to 18 hours per week, focusing on high-risk cases.",
    },
    {
      title: "Enhanced Patient Compliance",
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
        <title>eVitals - Advanced Remote Patient Monitoring for Pulmonology</title>
        <meta
          name="description"
          content="eVitals empowers pulmonologists with an advanced remote patient monitoring platform for COPD, asthma, and pulmonary disorders, featuring FDA-approved devices, HIPAA-compliant security, and robust reimbursement support."
        />
        <meta
          name="keywords"
          content="remote patient monitoring, pulmonology, COPD management, asthma monitoring, telehealth, FDA-approved devices, HIPAA-compliant, reimbursement support"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://www.evitals.com/how-we-serve/pulmonology" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "name": "eVitals Pulmonology Solutions",
              "description": "eVitals provides an advanced remote patient monitoring platform with FDA-approved devices, HIPAA-compliant data security, and reimbursement support for pulmonology practices.",
              "url": "https://www.evitals.com/how-we-serve/pulmonology",
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
            src="/assets/pulmonology-hero-bg.png"
            alt="Pulmonology Hero Background"
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
              Advanced <span className="text-[#B187E8]">Pulmonology</span> Monitoring
            </h1>
            <p className="text-white text-base md:text-lg mb-4 max-w-3xl">
              eVitals transforms pulmonology care with a cutting-edge remote patient monitoring (RPM) platform for COPD, asthma, and pulmonary fibrosis. Our FDA-approved devices deliver real-time respiratory data, enabling proactive care.
            </p>
            <p className="text-white text-base md:text-lg mb-8 max-w-3xl">
              With seamless EHR integration and advanced analytics, eVitals reduces exacerbations and improves patient outcomes. Join leading pulmonology practices in embracing the future of respiratory care.
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

      {/* RPM in Pulmonology Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-8 text-center">
            RPM in Pulmonology: Revolutionizing Respiratory Care
          </h2>
          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-lg text-gray-800 mb-4">
              Remote Patient Monitoring (RPM) in pulmonology enables continuous tracking of oxygen saturation, pulse rate, and spirometry data for patients with COPD, asthma, and other respiratory disorders. eVitals’ platform reduces clinic visits by 40% and enables early intervention.
            </p>
            <p className="text-lg text-gray-800 mb-4">
              Our system integrates with FDA-approved pulse oximeters and spirometry devices, providing pulmonologists with real-time data and trend analysis. This reduces exacerbations by 35% and improves patient quality of life by 50%. Patients benefit from home-based care and fewer disruptions.
            </p>
            <p className="text-lg text-gray-800 mb-8">
              RPM supports medication adherence through automated reminders and educational content, critical for managing respiratory regimens. Our HIPAA-compliant platform ensures data security, while EHR integration streamlines workflows for busy practices.
            </p>
          </div>
          <Image
            src="/assets/pulmonology-rpm-image.png"
            alt="RPM in Pulmonology Illustration"
            width={800}
            height={400}
            className="mx-auto rounded-lg shadow-md mb-8"
          />
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-purple-900 mb-4">Why Pulmonology Benefits from RPM</h3>
            <p className="text-lg text-gray-800 mb-4">
              Respiratory conditions require vigilant monitoring to prevent exacerbations. eVitals’ RPM platform captures real-world data, enabling personalized treatment plans. For COPD patients, continuous monitoring detects early signs of distress, preventing emergency visits.
            </p>
            <p className="text-lg text-gray-800 mb-8">
              For asthma patients, our platform tracks triggers and symptoms, supporting proactive management. The analytics dashboard offers insights into long-term trends, helping pulmonologists optimize therapies. Clinical studies show a 30% reduction in complications with RPM.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-8 text-center">
            How eVitals Supports Pulmonology
          </h2>
          <p className="text-lg text-gray-800 mb-8 max-w-3xl mx-auto text-center">
            eVitals provides a robust RPM platform tailored to pulmonology, combining advanced technology, patient engagement, and reimbursement support.
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
                  src="/assets/pulmonology-feature-image.png"
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
              eVitals offers trend analysis for long-term respiratory monitoring, critical for COPD and asthma management. Integration with wearables like smartwatches provides additional data on activity levels and sleep patterns.
            </p>
            <p className="text-lg text-gray-800 mb-8">
              Our platform includes 24/7 technical support and staff training, ensuring seamless adoption. Customizable reports support clinical research, enabling pulmonologists to contribute to advancements in respiratory care.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-8 text-center">
            Benefits for Pulmonologists and Patients
          </h2>
          <p className="text-lg text-gray-800 mb-8 max-w-3xl mx-auto text-center">
            eVitals delivers measurable benefits, improving clinical outcomes, practice efficiency, and patient satisfaction for pulmonology practices.
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
                  src="/assets/pulmonology-benefit-image.png"
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
              Respiratory conditions require ongoing monitoring to prevent exacerbations. eVitals’ RPM platform empowers patients to manage their condition at home, improving quality of life and reducing stress.
            </p>
            <p className="text-lg text-gray-800 mb-8">
              For pulmonologists, the platform optimizes workflows, freeing up time for research and complex cases. With a 95% satisfaction rate, eVitals is a trusted partner in respiratory care.
            </p>
            <Image
              src="/assets/pulmonology-benefit-overview.png"
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
            Real-World Impact: Pulmonology Case Studies
          </h2>
          <p className="text-lg text-gray-800 mb-8 max-w-3xl mx-auto text-center">
            Discover how eVitals has transformed pulmonology practices and improved patient outcomes.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <Image
                src="/assets/pulmonology-case-study1.png"
                alt="COPD Case Study"
                width={400}
                height={200}
                className="mx-auto mb-4 rounded-md"
              />
              <h3 className="text-xl font-semibold text-purple-900 mb-2">COPD Management</h3>
              <p className="text-gray-700 mb-4">
                A Colorado practice implemented eVitals for 200 COPD patients. Real-time oxygen monitoring reduced exacerbations by 40%, with 50% fewer emergency visits. Patients reported a 55% improvement in quality of life.
              </p>
              <p className="text-gray-700">
                EHR integration streamlined data sharing, and the practice saw a 20% increase in reimbursable services. Voice-guided devices improved compliance to 90%.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <Image
                src="/assets/pulmonology-case-study2.png"
                alt="Asthma Case Study"
                width={400}
                height={200}
                className="mx-auto mb-4 rounded-md"
              />
              <h3 className="text-xl font-semibold text-purple-900 mb-2">Asthma Control</h3>
              <p className="text-gray-700 mb-4">
                A Florida clinic used eVitals to monitor 150 asthma patients. Real-time tracking reduced emergency visits by 30%. Caregivers accessed data via the portal, improving support.
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
                Our team evaluates your practice’s needs and patient demographics to customize the RPM solution for COPD and asthma.
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
            src="/assets/pulmonology-implementation-image.png"
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
            src="/assets/pulmonology-trust-image.png"
            alt="Trusted by Pulmonologists"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/50" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-shadow-sm">
            Trusted by Pulmonologists Nationwide
          </h2>
          <p className="text-lg text-white mb-4 text-shadow-sm">
            Over 350 pulmonology practices rely on eVitals for secure, reliable remote monitoring. Our platform has monitored over 7,000 patients, reducing exacerbations by 35% and improving satisfaction by 40%.
          </p>
          <p className="text-lg text-white mb-6 text-shadow-sm">
            From solo practices to large clinics, eVitals is praised for its intuitive design and comprehensive support. Join the revolution in respiratory care with a trusted platform.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-purple-900 px-8 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Discover How We Serve Pulmonology →
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-6">
            Transform Pulmonology Care with eVitals
          </h2>
          <p className="text-lg text-gray-800 mb-4 max-w-3xl mx-auto">
            Elevate your pulmonology practice with eVitals’ advanced RPM platform. Improve patient outcomes, streamline operations, and boost revenue with a solution designed for respiratory care.
          </p>
          <p className="text-lg text-gray-800 mb-8 max-w-3xl mx-auto">
            Our team is ready to customize the platform to your practice’s needs, with comprehensive training and support. Schedule a personalized demo today to experience the future of pulmonology care.
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

export default PulmonologyPage;