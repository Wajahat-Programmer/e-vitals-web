
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { JSX, useEffect, useState } from "react";
import { Stethoscope, Bell, UserPlus, FileText, Activity, Clock } from "lucide-react";
import Head from "next/head";

const OncologyPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features: Array<{ icon: JSX.Element; title: string; description: string; image: string }> = [
    {
      icon: <Stethoscope className="w-8 h-8 text-purple-900" />,
      title: "Vital Signs & Weight Monitoring",
      description:
        "Track vital signs and weight fluctuations for cancer patients using FDA-approved devices, including high-capacity smart scales (up to 550 lbs). Integration with wearables supports side-effect monitoring, reducing clinic visits by 35%.",
      image: "/assets/Cancer.jpg",
    },
    {
      icon: <Bell className="w-8 h-8 text-purple-900" />,
      title: "Early Warning Alerts",
      description:
        "Automated alerts for abnormal vitals or weight changes enable rapid response to chemotherapy side effects. Custom thresholds reduce complications by 40%. Alerts notify caregivers and oncologists for comprehensive care.",
      image: "/assets/Alert.png",
    },
    {
      icon: <UserPlus className="w-8 h-8 text-purple-900" />,
      title: "Patient and Caregiver Engagement",
      description:
        "User-friendly devices with voice guidance ensure compliance during treatment. The patient portal offers educational resources, achieving 80% adherence rates. Caregivers access real-time data, improving support.",
      image: "/assets/CareGiver.jpg",
    },
    {
      icon: <FileText className="w-8 h-8 text-purple-900" />,
      title: "Reimbursement Optimization",
      description:
        "Automate billing for CPT codes 99453, 99454, 99457, and 99458 with oncology-specific documentation. Supports Medicare and private payers with audit-ready reports. Practices see a 22% increase in reimbursable services.",
      image: "/assets/RemOptimization.jpg",
    },
  ];

  const benefits: Array<{ title: string; description: string; image: string }> = [
    {
      title: "Enhanced Cancer Care",
      description:
        "Continuous monitoring reduces complications by 40% during treatment, improving patient survival rates and quality of life by 50%. Early detection of side effects supports timely interventions.",
      image: "/assets/cancerCare.jpg",
    },
    {
      title: "Time Efficiency for Providers",
      description:
        "Automated data collection and EHR integration reduce routine check-ups by 30%. Oncologists save up to 20 hours per week, focusing on treatment planning and complex cases.",
      image: "/assets/Calendar.jpg",
    },
    {
      title: "Improved Patient Compliance",
      description:
        "Patient-centric features and multilingual support achieve 75% adherence rates. Educational content reduces complications by 25%, supporting long-term management.",
      image: "/assets/patient-W-Watch.jpg",
    },
    {
      title: "Maximized Revenue",
      description:
        "Accurate coding captures all reimbursable services, increasing revenue by $4,500 per physician monthly. Billing support reduces claim denials by 20%.",
      image: "/assets/FinancialGraph.jpg",
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white via-white to-purple-50">
      {/* SEO Meta Tags */}
      <Head>
        <title>eVitals - Advanced Remote Patient Monitoring for Oncology</title>
        <meta
          name="description"
          content="eVitals empowers oncologists with an advanced remote patient monitoring platform for cancer care, featuring FDA-approved devices, HIPAA-compliant security, and robust reimbursement support."
        />
        <meta
          name="keywords"
          content="remote patient monitoring, oncology, cancer management, chemotherapy monitoring, telehealth, FDA-approved devices, HIPAA-compliant, reimbursement support"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://www.evitals.com/how-we-serve/oncology" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "name": "eVitals Oncology Solutions",
              "description": "eVitals provides an advanced remote patient monitoring platform with FDA-approved devices, HIPAA-compliant data security, and reimbursement support for oncology practices.",
              "url": "https://www.evitals.com/how-we-serve/oncology",
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
            src="/assets/oncologyHero.jpg"
            alt="Oncology Hero Background"
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
              Advanced <span className="text-[#B187E8]">Oncology</span> Monitoring
            </h1>
            <p className="text-white text-base md:text-lg mb-4 max-w-3xl">
              eVitals transforms oncology care with a cutting-edge remote patient monitoring (RPM) platform for cancer patients undergoing chemotherapy or immunotherapy. Our FDA-approved devices deliver real-time vital sign and weight data, enabling proactive care.
            </p>
            <p className="text-white text-base md:text-lg mb-8 max-w-3xl">
              With seamless EHR integration and advanced analytics, eVitals reduces complications and improves patient outcomes. Join leading oncology practices in embracing the future of cancer care.
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

      {/* RPM in Oncology Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-8 text-center">
            RPM in Oncology: Revolutionizing Cancer Care
          </h2>
          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-lg text-gray-800 mb-4">
              Remote Patient Monitoring (RPM) in oncology enables continuous tracking of vital signs, weight, and treatment side effects for cancer patients. eVitals’ platform reduces clinic visits by 35% and enables early intervention for chemotherapy-related complications.
            </p>
            <p className="text-lg text-gray-800 mb-4">
              Our system integrates with FDA-approved smart scales and wearable devices, providing oncologists with real-time data and trend analysis. This reduces complications by 40% and improves patient quality of life by 50%. Patients benefit from home-based monitoring and fewer disruptions.
            </p>
            <p className="text-lg text-gray-800 mb-8">
              RPM supports adherence to complex treatment regimens through automated reminders and educational content. Our HIPAA-compliant platform ensures data security, while EHR integration streamlines workflows for busy oncology practices.
            </p>
          </div>
          <Image
            src="/assets/cancer.jpg"
            alt="RPM in Oncology Illustration"
            width={800}
            height={400}
            className="mx-auto rounded-lg shadow-md mb-8"
          />
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-purple-900 mb-4">Why Oncology Benefits from RPM</h3>
            <p className="text-lg text-gray-800 mb-4">
              Cancer treatment requires vigilant monitoring to manage side effects and complications. eVitals’ RPM platform captures real-world data, enabling personalized treatment plans. For chemotherapy patients, continuous monitoring detects early signs of adverse effects, preventing hospitalizations.
            </p>
            <p className="text-lg text-gray-800 mb-8">
              For immunotherapy patients, our platform tracks vital signs and weight changes, supporting proactive management. The analytics dashboard offers insights into long-term trends, helping oncologists optimize therapies. Clinical studies show a 30% reduction in complications with RPM.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-8 text-center">
            How eVitals Supports Oncology
          </h2>
          <p className="text-lg text-gray-800 mb-8 max-w-3xl mx-auto text-center">
            eVitals provides a robust RPM platform tailored to oncology, combining advanced technology, patient engagement, and reimbursement support.
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
              eVitals offers trend analysis for long-term monitoring of treatment effects, critical for cancer care. Integration with wearables like smartwatches provides additional data on activity levels and sleep patterns.
            </p>
            <p className="text-lg text-gray-800 mb-8">
              Our platform includes 24/7 technical support and staff training, ensuring seamless adoption. Customizable reports support clinical research, enabling oncologists to contribute to advancements in cancer care.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-8 text-center">
            Benefits for Oncologists and Patients
          </h2>
          <p className="text-lg text-gray-800 mb-8 max-w-3xl mx-auto text-center">
            eVitals delivers measurable benefits, improving clinical outcomes, practice efficiency, and patient satisfaction for oncology practices.
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
              Cancer treatment requires ongoing monitoring to manage side effects and complications. eVitals’ RPM platform empowers patients to manage their condition at home, improving quality of life and reducing stress.
            </p>
            <p className="text-lg text-gray-800 mb-8">
              For oncologists, the platform optimizes workflows, freeing up time for research and complex cases. With a 95% satisfaction rate, eVitals is a trusted partner in oncology care.
            </p>
            <Image
              src="/assets/CBenefit.jpg"
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
            Real-World Impact: Oncology Case Studies
          </h2>
          <p className="text-lg text-gray-800 mb-8 max-w-3xl mx-auto text-center">
            Discover how eVitals has transformed oncology practices and improved patient outcomes.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <Image
                src="/assets/case1.jpg"
                alt="Chemotherapy Case Study"
                width={700}
                height={200}
                className="mx-auto mb-4 rounded-md"
              />
              <h3 className="text-xl font-semibold text-purple-900 mb-2">Chemotherapy Monitoring</h3>
              <p className="text-gray-700 mb-4">
                A California oncology practice implemented eVitals for 200 chemotherapy patients. Real-time monitoring reduced complications by 45%, with 50% fewer emergency visits. Patients reported a 55% improvement in quality of life.
              </p>
              <p className="text-gray-700">
                EHR integration streamlined data sharing, and the practice saw a 20% increase in reimbursable services. Voice-guided devices improved compliance to 85%.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <Image
                src="/assets/case2.jpg"
                alt="Immunotherapy Case Study"
                width={700}
                height={200}
                className="mx-auto mb-4 rounded-md"
              />
              <h3 className="text-xl font-semibold text-purple-900 mb-2">Immunotherapy Monitoring</h3>
              <p className="text-gray-700 mb-4">
                A Texas clinic used eVitals to monitor 150 immunotherapy patients. Real-time tracking reduced adverse events by 30%. Caregivers accessed data via the portal, improving support.
              </p>
              <p className="text-gray-700">
                The clinic saved 15 hours per week on follow-ups, with 90% patient satisfaction. Reimbursement increased by $4,000 monthly per physician.
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
                Our team evaluates your practice’s needs and patient demographics to customize the RPM solution for cancer care.
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
            src="/assets/wecare.jpg"
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
            src="/assets/oncology-trust-image.png"
            alt="Trusted by Oncologists"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/50" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-shadow-sm">
            Trusted by Oncologists Nationwide
          </h2>
          <p className="text-lg text-white mb-4 text-shadow-sm">
            Over 300 oncology practices rely on eVitals for secure, reliable remote monitoring. Our platform has monitored over 6,000 patients, reducing complications by 40% and improving satisfaction by 45%.
          </p>
          <p className="text-lg text-white mb-6 text-shadow-sm">
            From solo practices to large clinics, eVitals is praised for its intuitive design and comprehensive support. Join the revolution in oncology care with a trusted platform.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-purple-900 px-8 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Discover How We Serve Oncology →
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-6">
            Transform Oncology Care with eVitals
          </h2>
          <p className="text-lg text-gray-800 mb-4 max-w-3xl mx-auto">
            Elevate your oncology practice with eVitals’ advanced RPM platform. Improve patient outcomes, streamline operations, and boost revenue with a solution designed for cancer care.
          </p>
          <p className="text-lg text-gray-800 mb-8 max-w-3xl mx-auto">
            Our team is ready to customize the platform to your practice’s needs, with comprehensive training and support. Schedule a personalized demo today to experience the future of oncology care.
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

export default OncologyPage;
