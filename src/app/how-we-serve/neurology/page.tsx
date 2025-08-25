
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { JSX, useEffect, useState } from "react";
import { Stethoscope, Bell, UserPlus, FileText, Brain, Clock } from "lucide-react";
import Head from "next/head";

const NeurologyPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features: Array<{ icon: JSX.Element; title: string; description: string }> = [
    {
      icon: <Stethoscope className="w-8 h-8 text-purple-900" />,
      title: "Advanced Neurological Monitoring",
      description:
        "Track critical neurological indicators such as blood pressure, heart rate, and oxygen saturation for epilepsy, stroke recovery, and neurodegenerative conditions using FDA-approved devices with cellular connectivity. Our platform integrates with wearable EEG devices for real-time seizure detection, enabling neurologists to monitor patients remotely with unparalleled precision. This reduces clinic visits by 40% and provides continuous data for accurate assessments.",
    },
    {
      icon: <Bell className="w-8 h-8 text-purple-900" />,
      title: "Immediate Alert System",
      description:
        "Receive automated, customizable alerts for abnormal readings, such as irregular heart rates or seizure indicators, allowing rapid response to potential neurological events. Alerts can be configured for multiple recipients, including caregivers and emergency services, ensuring comprehensive coverage. This feature has reduced emergency response times by 50% in clinical studies, minimizing complications for epilepsy and stroke patients.",
    },
    {
      icon: <UserPlus className="w-8 h-8 text-purple-900" />,
      title: "Patient and Caregiver Engagement",
      description:
        "User-friendly devices with voice guidance in multiple languages (English, Spanish, and more) ensure compliance, even for patients with cognitive impairments. Caregivers access a dedicated portal for real-time data and trend analysis, fostering collaborative care. Educational resources, including video tutorials and medication guides, enhance patient and family involvement, improving adherence rates to 85%.",
    },
    {
      icon: <FileText className="w-8 h-8 text-purple-900" />,
      title: "Reimbursement Optimization",
      description:
        "Automate billing for CPT codes 99453, 99454, 99457, and 99458 with neurology-specific documentation. Our system supports Medicare and private payers, generating audit-ready reports to ensure compliance. Practices report a 20-30% increase in reimbursable services, with dedicated support for navigating complex billing requirements, saving up to 15 hours weekly on administrative tasks.",
    },
  ];

  const benefits: Array<{ title: string; description: string }> = [
    {
      title: "Enhanced Patient Safety",
      description:
        "Continuous monitoring detects neurological events early, preventing complications and reducing hospital admissions by 35% for epilepsy patients. Real-time data allows for timely interventions, improving outcomes for stroke and Parkinson’s patients. Patients report greater peace of mind knowing their condition is monitored 24/7.",
    },
    {
      title: "Time Efficiency for Providers",
      description:
        "Automated data collection and EHR integration streamline workflows, allowing neurologists to focus on complex cases. Routine check-ups are reduced by 30%, saving up to 25 hours per week. Our platform’s intuitive dashboard provides actionable insights, enabling faster decision-making and treatment adjustments.",
    },
    {
      title: "Improved Patient Compliance",
      description:
        "Patient-centric devices with reminders and multilingual support achieve 80% adherence rates. Personalized education plans and caregiver involvement enhance long-term management. Studies show a 40% improvement in medication adherence, critical for managing neurological conditions like epilepsy and migraines.",
    },
    {
      title: "Maximized Revenue",
      description:
        "Accurate coding and documentation capture all reimbursable services, increasing revenue by an average of $4,000 per physician monthly. Our billing support team ensures compliance with Medicare and private payer requirements, reducing claim denials by 25% and boosting practice profitability.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white via-white to-purple-50">
      {/* SEO Meta Tags */}
      <Head>
        <title>eVitals - Advanced Remote Patient Monitoring for Neurology</title>
        <meta
          name="description"
          content="eVitals empowers neurologists with an advanced remote patient monitoring platform for epilepsy, stroke, Parkinson’s, and other neurological disorders, featuring FDA-approved devices, HIPAA-compliant security, and robust reimbursement support."
        />
        <meta
          name="keywords"
          content="remote patient monitoring, neurology, epilepsy management, stroke recovery, Parkinson’s monitoring, telehealth, FDA-approved devices, HIPAA-compliant, reimbursement support"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://www.evitals.com/how-we-serve/neurology" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "name": "eVitals Neurology Solutions",
              "description": "eVitals provides an advanced remote patient monitoring platform with FDA-approved devices, HIPAA-compliant data security, and reimbursement support for neurology practices.",
              "url": "https://www.evitals.com/how-we-serve/neurology",
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
            src="/assets/neurology-hero-bg.png"
            alt="Neurology Hero Background"
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
              Advanced <span className="text-[#B187E8]">Neurology</span> Monitoring
            </h1>
            <p className="text-white text-base md:text-lg mb-4 max-w-3xl">
              eVitals revolutionizes neurological care with a state-of-the-art remote patient monitoring (RPM) platform designed for epilepsy, stroke recovery, Parkinson’s, and other neurological disorders. Our FDA-approved devices and HIPAA-compliant technology deliver real-time data, empowering neurologists to provide proactive, personalized care from anywhere.
            </p>
            <p className="text-white text-base md:text-lg mb-8 max-w-3xl">
              With seamless EHR integration and advanced analytics, eVitals enables precise treatment adjustments and early intervention, reducing hospital visits and improving patient quality of life. Join the future of neurology with a platform trusted by leading practices nationwide.
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

      {/* RPM in Neurology Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-8 text-center">
            RPM in Neurology: Transforming Patient Care
          </h2>
          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-lg text-gray-800 mb-4">
              Remote Patient Monitoring (RPM) in neurology is redefining how neurologists manage chronic conditions like epilepsy, stroke, Parkinson’s disease, and multiple sclerosis. By leveraging FDA-approved devices, eVitals enables continuous tracking of vital signs and neurological indicators in patients’ daily environments, capturing data that traditional clinic visits often miss.
            </p>
            <p className="text-lg text-gray-800 mb-4">
              Our platform uses advanced algorithms to detect patterns associated with neurological events, such as seizures or stroke precursors, enabling early intervention. This reduces emergency hospital admissions by 35% and improves patient outcomes. Integration with wearable EEG devices and telemedicine platforms allows for comprehensive monitoring and virtual consultations, ensuring seamless care delivery.
            </p>
            <p className="text-lg text-gray-800 mb-8">
              RPM also supports medication adherence through automated reminders and progress tracking, critical for conditions requiring complex regimens. Patients and caregivers benefit from real-time data access, fostering collaborative care. Clinical studies show that RPM increases patient adherence to neurological treatment plans by 40%, leading to better disease management and fewer complications.
            </p>
          </div>
          <Image
            src="/assets/neurology-rpm-image.png"
            alt="RPM in Neurology Illustration"
            width={800}
            height={400}
            className="mx-auto rounded-lg shadow-md mb-8"
          />
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-purple-900 mb-4">Why Neurology Benefits from RPM</h3>
            <p className="text-lg text-gray-800 mb-4">
              Neurological conditions often require long-term monitoring due to their unpredictable nature. eVitals’ RPM solution provides neurologists with a holistic view of patient health, including trends in blood pressure, heart rate, and neurological activity. This data-driven approach supports personalized treatment plans, reducing the risk of adverse events.
            </p>
            <p className="text-lg text-gray-800 mb-8">
              For example, in epilepsy management, our platform can detect pre-seizure patterns, allowing for timely medication adjustments. For stroke patients, continuous monitoring of vitals helps prevent secondary events. Our system’s HIPAA-compliant security ensures patient data is protected, while integration with EHR systems streamlines workflows for busy neurology practices.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-8 text-center">
            How eVitals Supports Neurology
          </h2>
          <p className="text-lg text-gray-800 mb-8 max-w-3xl mx-auto text-center">
            eVitals provides a comprehensive RPM platform tailored to the unique needs of neurology practices. Our solution combines cutting-edge technology, patient-centric design, and robust support to enhance care delivery and practice efficiency.
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
                  src="/assets/neurology-feature-image.png"
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
              Beyond core monitoring, eVitals offers trend analysis for long-term disease progression tracking, critical for conditions like Parkinson’s and Alzheimer’s. Our platform supports integration with third-party wearables, such as smartwatches, for additional data points like sleep patterns and activity levels, which are vital for neurological assessments.
            </p>
            <p className="text-lg text-gray-800 mb-8">
              We also provide 24/7 technical support and training for practice staff, ensuring seamless adoption. Our analytics dashboard includes customizable reports for clinical research, enabling neurologists to contribute to advancements in the field while managing patient care.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-8 text-center">
            Benefits for Neurologists and Patients
          </h2>
          <p className="text-lg text-gray-800 mb-8 max-w-3xl mx-auto text-center">
            eVitals’ RPM platform delivers measurable benefits for both neurologists and their patients, enhancing clinical outcomes, practice efficiency, and patient satisfaction.
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
                  src="/assets/neurology-benefit-image.png"
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
              For patients with chronic neurological conditions, consistent monitoring is critical to preventing acute events. eVitals’ RPM platform reduces the burden on patients by allowing them to manage their condition from home, improving their quality of life. For neurologists, the platform frees up valuable time, enabling focus on complex cases and research.
            </p>
            <p className="text-lg text-gray-800 mb-8">
              Our reimbursement support ensures practices can sustainably implement RPM without financial strain. With a 98% satisfaction rate among users, eVitals is a trusted partner in transforming neurological care delivery.
            </p>
            <Image
              src="/assets/neurology-benefit-overview.png"
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
            Real-World Impact: Neurology Case Studies
          </h2>
          <p className="text-lg text-gray-800 mb-8 max-w-3xl mx-auto text-center">
            See how eVitals has transformed neurology practices and improved patient outcomes through real-world applications of our RPM platform.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <Image
                src="/assets/neurology-case-study1.png"
                alt="Epilepsy Case Study"
                width={400}
                height={200}
                className="mx-auto mb-4 rounded-md"
              />
              <h3 className="text-xl font-semibold text-purple-900 mb-2">Epilepsy Management</h3>
              <p className="text-gray-700 mb-4">
                A large neurology practice in California implemented eVitals’ RPM platform for 200 epilepsy patients. By using wearable EEG devices and automated alerts, the practice reduced seizure-related emergency visits by 45%. Patients reported a 50% improvement in quality of life due to fewer disruptions and better medication adherence.
              </p>
              <p className="text-gray-700">
                The platform’s integration with EHR systems allowed seamless data sharing, enabling neurologists to adjust anti-epileptic drugs based on real-time data. The practice also saw a 25% increase in reimbursable services through accurate CPT code documentation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <Image
                src="/assets/neurology-case-study2.png"
                alt="Stroke Recovery Case Study"
                width={400}
                height={200}
                className="mx-auto mb-4 rounded-md"
              />
              <h3 className="text-xl font-semibold text-purple-900 mb-2">Stroke Recovery</h3>
              <p className="text-gray-700 mb-4">
                A Midwest hospital used eVitals to monitor 150 stroke patients post-discharge. Continuous tracking of blood pressure and heart rate reduced secondary stroke events by 30%. Caregivers accessed real-time data, improving family support and patient compliance.
              </p>
              <p className="text-gray-700">
                The hospital reported saving 20 hours per week on follow-up visits, allowing staff to focus on acute care. Patients appreciated the platform’s ease of use, with 90% reporting high satisfaction with the voice-guided devices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="relative py-20 min-h-[600px] flex justify-center items-center text-center">
        <div className="absolute inset-0">
          <Image
            src="/assets/neurology-trust-image.png"
            alt="Trusted by Neurologists"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/50" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-shadow-sm">
            Trusted by Neurologists Nationwide
          </h2>
          <p className="text-lg text-white mb-4 text-shadow-sm">
            Over 500 neurology practices across the U.S. rely on eVitals for secure, reliable remote monitoring. Our platform has monitored over 10,000 neurological patients, reducing emergency interventions by 40% and improving patient satisfaction scores by 35%.
          </p>
          <p className="text-lg text-white mb-6 text-shadow-sm">
            From small clinics to large hospital systems, eVitals is praised for its intuitive interface, robust analytics, and dedicated support. Our platform empowers neurologists to deliver cutting-edge care while optimizing practice operations.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-purple-900 px-8 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Discover How We Serve Neurology →
          </Link>
        </div>
      </section>

      {/* Implementation Process Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-8 text-center">
            Seamless Integration with Your Practice
          </h2>
          <p className="text-lg text-gray-800 mb-8 max-w-3xl mx-auto text-center">
            Implementing eVitals’ RPM platform is straightforward, with a dedicated team to guide your practice every step of the way. Here’s how we ensure a smooth transition:
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <Brain className="w-8 h-8 text-purple-900 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-purple-900 mb-2">Step 1: Assessment</h3>
              <p className="text-gray-700">
                Our team evaluates your practice’s needs, patient demographics, and existing workflows to customize the RPM solution. We identify key conditions like epilepsy or Parkinson’s to prioritize monitoring parameters.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <Clock className="w-8 h-8 text-purple-900 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-purple-900 mb-2">Step 2: Implementation</h3>
              <p className="text-gray-700">
                We provide devices, training, and EHR integration, ensuring minimal disruption. Our team handles device setup for patients and staff, with 24/7 support available. Most practices are fully operational within 2 weeks.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <UserPlus className="w-8 h-8 text-purple-900 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-purple-900 mb-2">Step 3: Ongoing Support</h3>
              <p className="text-gray-700">
                Receive continuous support, including billing assistance, software updates, and patient education resources. Our team monitors system performance to ensure 99.9% uptime and data accuracy.
              </p>
            </div>
          </div>
          <Image
            src="/assets/neurology-implementation-image.png"
            alt="Implementation Process"
            width={800}
            height={400}
            className="mx-auto rounded-lg shadow-md mt-8"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-6">
            Transform Neurology Care with eVitals
          </h2>
          <p className="text-lg text-gray-800 mb-4 max-w-3xl mx-auto">
            Elevate your neurology practice with eVitals’ advanced RPM platform. Improve patient outcomes, streamline operations, and boost revenue with a solution designed for the unique challenges of neurological care.
          </p>
          <p className="text-lg text-gray-800 mb-8 max-w-3xl mx-auto">
            Our team is ready to customize the platform to your practice’s needs, with comprehensive training and support. Schedule a personalized demo today to experience how eVitals can revolutionize your approach to patient care.
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

export default NeurologyPage;