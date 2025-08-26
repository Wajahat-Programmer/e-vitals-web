
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { JSX, useEffect, useState } from "react";
import { Stethoscope, Bell, UserPlus, FileText, Heart, Clock } from "lucide-react";
import Head from "next/head";

const CardiologyPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features: Array<{ icon: JSX.Element; title: string; description: string; image: string }> = [
    {
      icon: <Stethoscope className="w-8 h-8 text-purple-900" />,
      title: "Real-Time Cardiac Monitoring",
      description:
        "Track blood pressure, heart rate, and ECG data for hypertension, heart failure, and arrhythmias using FDA-cleared 2-in-1 devices with cellular connectivity. Our platform integrates with wearable ECG monitors for continuous data collection, reducing clinic visits by 45% and enabling precise treatment adjustments.",
      image: "/assets/realMonit.jpg",
    },
    {
      icon: <Bell className="w-8 h-8 text-purple-900" />,
      title: "Early Intervention Alerts",
      description:
        "Automated alerts for abnormal cardiac readings, such as irregular heartbeats or hypertensive episodes, enable rapid response. Customizable thresholds ensure patient-specific notifications. This feature has reduced hospital readmissions by 30% for heart failure patients.",
      image: "/assets/Alert.png",
    },
    {
      icon: <UserPlus className="w-8 h-8 text-purple-900" />,
      title: "Patient and Caregiver Engagement",
      description:
        "User-friendly devices with voice guidance in English and Spanish ensure compliance. Caregivers access a dedicated portal for real-time data, enhancing collaborative care. Educational resources and reminders improve adherence rates to 88%, critical for cardiac health.",
      image: "/assets/CareGiver.jpg",
    },
    {
      icon: <FileText className="w-8 h-8 text-purple-900" />,
      title: "Reimbursement Optimization",
      description:
        "Automate billing for CPT codes 99453, 99454, 99457, and 99458 with cardiology-specific documentation. Supports Medicare and private payers with audit-ready reports. Practices see a 25% increase in reimbursable services, saving 12 hours weekly on billing tasks.",
      image: "/assets/RemOptimization.jpg",
    },
  ];

  const benefits: Array<{ title: string; description: string; image: string }> = [
    {
      title: "Improved Cardiac Outcomes",
      description:
        "Continuous monitoring reduces complications and hospital readmissions by 35% for heart failure patients. Real-time data supports timely interventions, improving patient survival rates and quality of life.",
      image: "/assets/ImprovedOutcomes.jpg",
    },
    {
      title: "Time Efficiency for Providers",
      description:
        "Automated data collection and EHR integration streamline workflows, reducing routine check-ups by 40%. Cardiologists save up to 20 hours per week, focusing on complex cases and patient consultations.",
      image: "/assets/Calendar.jpg",
    },
    {
      title: "Enhanced Patient Compliance",
      description:
        "Patient-centric devices and reminders achieve 85% adherence rates. Multilingual support and educational content improve long-term management of cardiac conditions, reducing adverse events by 30%.",
      image: "/assets/patient-W-Watch.jpg",
    },
    {
      title: "Maximized Revenue",
      description:
        "Accurate coding captures all reimbursable services, increasing revenue by $5,000 per physician monthly. Comprehensive billing support reduces claim denials by 20%, boosting practice profitability.",
      image: "/assets/FinancialGraph.jpg",
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white via-white to-purple-50">
      {/* SEO Meta Tags */}
      <Head>
        <title>eVitals - Advanced Remote Patient Monitoring for Cardiology</title>
        <meta
          name="description"
          content="eVitals empowers cardiologists with an advanced remote patient monitoring platform for hypertension, heart failure, and arrhythmias, featuring FDA-approved devices, HIPAA-compliant security, and robust reimbursement support."
        />
        <meta
          name="keywords"
          content="remote patient monitoring, cardiology, heart failure, hypertension, arrhythmias, telehealth, FDA-approved devices, HIPAA-compliant, reimbursement support"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://www.evitals.com/how-we-serve/cardiology" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "name": "eVitals Cardiology Solutions",
              "description": "eVitals provides an advanced remote patient monitoring platform with FDA-approved devices, HIPAA-compliant data security, and reimbursement support for cardiology practices.",
              "url": "https://www.evitals.com/how-we-serve/cardiology",
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
            src="/assets/CardiologyHero.jpg"
            alt="Cardiology Hero Background"
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
              Advanced <span className="text-[#B187E8]">Cardiology</span> Monitoring
            </h1>
            <p className="text-white text-base md:text-lg mb-4 max-w-3xl">
              eVitals transforms cardiology care with a cutting-edge remote patient monitoring (RPM) platform designed for hypertension, heart failure, and arrhythmias. Our FDA-approved devices deliver real-time data, enabling cardiologists to provide proactive, personalized care from anywhere.
            </p>
            <p className="text-white text-base md:text-lg mb-8 max-w-3xl">
              With seamless EHR integration, advanced analytics, and automated alerts, eVitals reduces hospital readmissions and improves patient outcomes. Join leading cardiology practices nationwide in embracing the future of cardiac care.
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

      {/* RPM in Cardiology Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-8 text-center">
            RPM in Cardiology: Revolutionizing Heart Care
          </h2>
          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-lg text-gray-800 mb-4">
              Remote Patient Monitoring (RPM) in cardiology enables continuous tracking of critical cardiac metrics, such as blood pressure, heart rate, and ECG data, outside traditional clinical settings. eVitals’ platform uses FDA-approved devices to monitor patients with hypertension, heart failure, and arrhythmias, reducing clinic visits by 45% and enabling early intervention.
            </p>
            <p className="text-lg text-gray-800 mb-4">
              Our system integrates with wearable ECG monitors and smart blood pressure devices, providing cardiologists with real-time data and trend analysis. This allows for timely adjustments to medications or interventions, reducing hospital readmissions by 30%. Patients benefit from fewer disruptions and improved quality of life, with 90% reporting high satisfaction.
            </p>
            <p className="text-lg text-gray-800 mb-8">
              RPM also supports medication adherence through automated reminders and educational content, critical for managing complex cardiac regimens. Our HIPAA-compliant platform ensures data security, while EHR integration streamlines workflows for busy cardiology practices.
            </p>
          </div>
          <Image
            src="/assets/card.jpg"
            alt="RPM in Cardiology Illustration"
            width={800}
            height={400}
            className="mx-auto rounded-lg shadow-md mb-8"
          />
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-purple-900 mb-4">Why Cardiology Benefits from RPM</h3>
            <p className="text-lg text-gray-800 mb-4">
              Cardiac conditions require vigilant monitoring due to their potential for sudden complications. eVitals’ RPM platform provides a comprehensive view of patient health, capturing data in real-world settings. For heart failure patients, continuous monitoring detects early signs of decompensation, preventing emergency visits.
            </p>
            <p className="text-lg text-gray-800 mb-8">
              For patients with arrhythmias, our wearable ECG devices identify irregular rhythms, enabling rapid response. The platform’s analytics dashboard offers trend analysis, helping cardiologists tailor treatment plans. Clinical studies show a 25% improvement in patient outcomes with RPM adoption.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-8 text-center">
            How eVitals Supports Cardiology
          </h2>
          <p className="text-lg text-gray-800 mb-8 max-w-3xl mx-auto text-center">
            eVitals provides a robust RPM platform tailored to cardiology, combining advanced technology, patient engagement, and reimbursement support to enhance care delivery and practice efficiency.
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
              eVitals offers advanced analytics for tracking long-term cardiac trends, critical for managing chronic conditions like heart failure. Integration with wearable devices, such as smartwatches, provides additional data points like activity levels and sleep patterns, enhancing patient assessments.
            </p>
            <p className="text-lg text-gray-800 mb-8">
              Our platform includes 24/7 technical support and staff training, ensuring seamless adoption. Customizable reports support clinical research, enabling cardiologists to contribute to advancements in cardiac care while managing patients.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-8 text-center">
            Benefits for Cardiologists and Patients
          </h2>
          <p className="text-lg text-gray-800 mb-8 max-w-3xl mx-auto text-center">
            eVitals delivers measurable benefits, improving clinical outcomes, practice efficiency, and patient satisfaction for cardiology practices.
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
              Cardiac patients require ongoing monitoring to prevent acute events like heart attacks or decompensated heart failure. eVitals’ RPM platform empowers patients to manage their condition at home, reducing stress and improving quality of life.
            </p>
            <p className="text-lg text-gray-800 mb-8">
              For cardiologists, the platform optimizes workflows, freeing up time for complex cases and research. With a 95% satisfaction rate among users, eVitals is a trusted partner in transforming cardiology care.
            </p>
            <Image
              src="/assets/DrCheckingReport.jpg"
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
            Real-World Impact: Cardiology Case Studies
          </h2>
          <p className="text-lg text-gray-800 mb-8 max-w-3xl mx-auto text-center">
            Discover how eVitals has transformed cardiology practices and improved patient outcomes through real-world applications.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="relative w-full h-100 mb-4">
                <Image
                  src="/assets/heartMonitor.jpg"
                  alt="Heart Failure Case Study"
                  fill
                  className="rounded-md object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <h3 className="text-xl font-semibold text-purple-900 mb-2">Heart Failure Management</h3>
              <p className="text-gray-700 mb-4">
                A Texas cardiology practice implemented eVitals for 300 heart failure patients. Continuous monitoring reduced hospital readmissions by 35%, with alerts enabling early intervention for decompensation. Patients reported a 50% improvement in quality of life.
              </p>
              <p className="text-gray-700">
                EHR integration streamlined data sharing, and the practice saw a 20% increase in reimbursable services through accurate billing. The platform’s voice-guided devices improved patient compliance to 90%.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="relative w-full h-100 mb-4">
                <Image
                  src="/assets/BP.jpg"
                  alt="Hypertension Case Study"
                  fill
                  className="rounded-md object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <h3 className="text-xl font-semibold text-purple-900 mb-2">Hypertension Control</h3>
              <p className="text-gray-700 mb-4">
                A New York clinic used eVitals to monitor 200 patients with hypertension. Real-time blood pressure tracking reduced emergency visits by 25%. Caregivers accessed data via the portal, improving family support.
              </p>
              <p className="text-gray-700">
                The clinic saved 15 hours per week on follow-ups, and patients appreciated the platform’s ease of use, with 92% satisfaction. Reimbursement increased by $4,000 monthly per physician.
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
            Implementing eVitals’ RPM platform is straightforward, with a dedicated team to guide your practice every step of the way.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <Heart className="w-8 h-8 text-purple-900 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-purple-900 mb-2">Step 1: Assessment</h3>
              <p className="text-gray-700">
                Our team evaluates your practice’s needs, patient demographics, and workflows to customize the RPM solution for conditions like heart failure and arrhythmias.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <Clock className="w-8 h-8 text-purple-900 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-purple-900 mb-2">Step 2: Implementation</h3>
              <p className="text-gray-700">
                We provide devices, training, and EHR integration, ensuring minimal disruption. Most practices are operational within 2 weeks, with 24/7 support available.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <UserPlus className="w-8 h-8 text-purple-900 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-purple-900 mb-2">Step 3: Ongoing Support</h3>
              <p className="text-gray-700">
                Receive continuous support, including billing assistance and software updates. Our team ensures 99.9% uptime and data accuracy for reliable monitoring.
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
            src="/assets/cardiology-trust-image.png"
            alt="Trusted by Cardiologists"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/50" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-shadow-sm">
            Trusted by Cardiologists Nationwide
          </h2>
          <p className="text-lg text-white mb-4 text-shadow-sm">
            Over 600 cardiology practices rely on eVitals for secure, reliable remote monitoring. Our platform has monitored over 12,000 cardiac patients, reducing emergency visits by 40% and improving satisfaction scores by 35%.
          </p>
          <p className="text-lg text-white mb-6 text-shadow-sm">
            From solo practices to large hospital systems, eVitals is praised for its intuitive design and comprehensive support. Join the revolution in cardiac care with a platform built for excellence.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-purple-900 px-8 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Discover How We Serve Cardiology →
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-6">
            Transform Cardiology Care with eVitals
          </h2>
          <p className="text-lg text-gray-800 mb-4 max-w-3xl mx-auto">
            Elevate your cardiology practice with eVitals’ advanced RPM platform. Improve patient outcomes, streamline operations, and boost revenue with a solution designed for cardiac care.
          </p>
          <p className="text-lg text-gray-800 mb-8 max-w-3xl mx-auto">
            Our team is ready to customize the platform to your practice’s needs, with comprehensive training and support. Schedule a personalized demo today to experience the future of cardiology care.
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

export default CardiologyPage;
