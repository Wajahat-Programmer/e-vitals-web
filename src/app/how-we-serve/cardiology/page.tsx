"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { JSX, useEffect, useState } from "react";
import {
  Stethoscope,
  Bell,
  UserPlus,
  FileText,
  Heart,
  Clock,
  Quote,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Head from "next/head";

const CardiologyPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [currentTestimonial, setCurrentTestimonial] = useState<number>(0);
console.log("Rendering Cardiology Page");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const features: Array<{
    icon: JSX.Element;
    title: string;
    description: string;
    image: string;
  }> = [
    {
      icon: <Stethoscope className="w-8 h-8 text-purple-900" />,
      title: "Real-Time Cardiac Monitoring",
      description:
        "Track blood pressure, heart rate, and ECG for hypertension, heart failure, and arrhythmias with FDA-cleared devices. Integrates with wearables, reducing clinic visits by 45%.",
      image: "/assets/realMonit.jpg",
    },
    {
      icon: <Bell className="w-8 h-8 text-purple-900" />,
      title: "Early Intervention Alerts",
      description:
        "Automated alerts for abnormal readings like irregular heartbeats. Custom thresholds reduce hospital readmissions by 30% for heart failure patients.",
      image: "/assets/Alert.png",
    },
    {
      icon: <UserPlus className="w-8 h-8 text-purple-900" />,
      title: "Patient and Caregiver Engagement",
      description:
        "Voice-guided devices in English/Spanish with caregiver portal. Boosts adherence to 88% for better cardiac health management.",
      image: "/assets/CareGiver.jpg",
    },
    {
      icon: <FileText className="w-8 h-8 text-purple-900" />,
      title: "Reimbursement Optimization",
      description:
        "Automate billing for CPT 99453-99458 with audit-ready reports. Increases reimbursable services by 25%, saving 12 hours weekly.",
      image: "/assets/RemOptimization.jpg",
    },
  ];

  const benefits: Array<{ title: string; description: string; image: string }> =
    [
      {
        title: "Improved Cardiac Outcomes",
        description:
          "Continuous monitoring cuts complications and readmissions by 35%. Real-time data enhances survival and quality of life.",
        image: "/assets/ImprovedOutcomes.jpg",
      },
      {
        title: "Time Efficiency for Providers",
        description:
          "EHR integration reduces check-ups by 40%. Cardiologists save 20 hours weekly for complex cases.",
        image: "/assets/Calendar.jpg",
      },
      {
        title: "Enhanced Patient Compliance",
        description:
          "85% adherence with reminders and multilingual support. Reduces adverse events by 30%.",
        image: "/assets/patient-W-Watch.jpg",
      },
      {
        title: "Maximized Revenue",
        description:
          "$5,000 monthly per physician via accurate coding. Cuts claim denials by 20%.",
        image: "/assets/FinancialGraph.jpg",
      },
    ];

  const testimonials = [
    {
      quote:
        "While we’ve encountered minor issues, the overall benefits far outweigh them. The platform has streamlined our processes, improved patient outcomes, and boosted revenue.",
      name: "Jessica Putnam, MBA",
      title: "Administrator",
      company: "Virginia Cardiovascular Consultants",
      image: "/assets/jessica-putnam.jpg",
    },
    {
      quote:
        "Implementation of RPM services with Cardiac RMS was very efficient as they were reliable and prepared. Now that our office is providing RPM services, we have a scalable process to help patients become more compliant with their medications, feel connected to their care team, and receive interventions when necessary. I enthusiastically recommend Cardiac RMS RPM services as an effective and caring way to remotely follow this vulnerable patient population.",
      name: "Wael Hamade",
      title: "CEO",
      company: "Jackson Cardiology Consultants, PLLC",
      image: "/assets/wael-hamade.jpg",
    },
    {
      quote:
        "We will not get around introducing remote monitoring. I'm also confident that the healthcare of the future will be that centers that don't get on the train right now of remote monitoring will be outpaced and will be providing sub-perfect care compared to the competing systems.",
      name: "Dr. Marat Fudim, MD",
      title: "Advanced Heart Failure Specialist and Cardiologist",
      company: "Duke University Medical Center",
      image: "/assets/marat-fudim.jpg",
    },
    {
      quote:
        "The technology enables our clinic to provide ambulatory cardiac arrhythmia care to patients across a wide geographic area spanning more than 40 counties in rural and suburban Illinois.",
      name: "Dr. Ziad Issa, MD",
      title: "Executive Director of Cardiac Electrophysiology",
      company: "Prairie Heart Institute of Illinois",
      image: "/assets/ziad-issa.jpg",
    },
    {
      quote:
        "Since implementing vitalera, our ability to monitor and manage heart failure patients has transformed. The technology’s real-time alerts and data insights have allowed us to intervene earlier, improving patient outcomes and reducing readmissions.",
      name: "Dr. Iustin, PhD, MD",
      title: "Cardiologist",
      company: "Vitalera",
      image: "/assets/iustin.jpg",
    },
    {
      quote:
        "The major take home is that this study demonstrates that telehealth treatment strategies for hypertension are effective in underserved populations. Our findings demonstrate that it is, and pretty convincingly so.",
      name: "Dr. Donald “Trey” Clark, MD",
      title: "Cardiologist and Associate Professor",
      company: "University of Mississippi Medical Center",
      image: "/assets/donald-clark.jpg",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white via-white to-purple-50">
      {/* SEO Meta Tags */}
      <Head>
        <title>
          eVitals - Advanced Remote Patient Monitoring for Cardiology
        </title>
        <meta
          name="description"
          content="eVitals empowers cardiologists with remote patient monitoring for hypertension, heart failure, and arrhythmias. FDA-approved devices, HIPAA-compliant security, and reimbursement support for telehealth in cardiology."
        />
        <meta
          name="keywords"
          content="remote patient monitoring, cardiology RPM, heart failure monitoring, hypertension telehealth, arrhythmias ECG, FDA-approved devices, HIPAA-compliant RPM, cardiology reimbursement, cardiac telemonitoring"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="canonical"
          href="https://www.evitals.com/how-we-serve/cardiology"
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "name": "eVitals Cardiology Solutions",
              "description": "eVitals provides remote patient monitoring for cardiology with FDA-approved devices, HIPAA-compliant data security, and reimbursement support for heart failure, hypertension, and arrhythmias.",
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
            alt="Cardiology Remote Patient Monitoring Hero"
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
              Advanced <span className="text-[#B187E8]">Cardiology</span> RPM
            </h1>
            <p className="text-white text-base md:text-lg mb-4 max-w-3xl">
              eVitals delivers remote patient monitoring for hypertension, heart
              failure, and arrhythmias with FDA-approved devices and real-time
              telehealth insights.
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
              Remote patient monitoring in cardiology tracks cardiac metrics
              like blood pressure and ECG outside clinics. eVitals' FDA-approved
              devices reduce visits by 45% and readmissions by 30% for heart
              failure.
            </p>
            <p className="text-lg text-gray-800 mb-8">
              HIPAA-compliant platform integrates with EHRs for seamless
              telehealth, boosting patient satisfaction to 90%.
            </p>
          </div>
          <Image
            src="/assets/card.jpg"
            alt="Cardiology RPM Illustration"
            width={800}
            height={400}
            className="mx-auto rounded-lg shadow-md mb-8"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-8 text-center">
            How eVitals Supports Cardiology RPM
          </h2>
          <p className="text-lg text-gray-800 mb-8 max-w-3xl mx-auto text-center">
            Tailored remote patient monitoring for cardiology with advanced
            tech, engagement, and reimbursement.
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
                <h3 className="text-xl font-bold text-purple-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-700">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-8 text-center">
            Benefits of Cardiology Remote Monitoring
          </h2>
          <p className="text-lg text-gray-800 mb-8 max-w-3xl mx-auto text-center">
            Measurable improvements in outcomes, efficiency, and satisfaction
            for cardiologists and patients.
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
                <h3 className="text-lg font-semibold text-purple-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-700">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Carousel */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-8 text-center">
            What Cardiologists Say About eVitals RPM
          </h2>
          <p className="text-lg text-gray-800 mb-12 max-w-3xl mx-auto text-center">
            Real testimonials from leading cardiology practices on remote
            patient monitoring success.
          </p>
          <div className="relative  mx-auto">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="relative bg-gradient-to-b from-purple-900 to-purple-800 text-white rounded-xl p-8 shadow-2xl"
            >
              <div className="flex items-start mb-6">
                <Quote className="w-8 h-8 mr-4 mt-1 flex-shrink-0 text-purple-200" />
                <p className="text-xl italic leading-relaxed">
                  "{testimonials[currentTestimonial].quote}"
                </p>
              </div>
              <div className="flex items-center">
                <div className="relative w-20 h-20 mr-6 overflow-hidden rounded-full">
                  <Image
                    src={testimonials[currentTestimonial].image}
                    alt={`${testimonials[currentTestimonial].name} - ${testimonials[currentTestimonial].company}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-purple-200">
                    {testimonials[currentTestimonial].title}
                  </p>
                  <p className="text-purple-100">
                    {testimonials[currentTestimonial].company}
                  </p>
                </div>
              </div>
            </motion.div>

         

            {/* Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial
                      ? "bg-purple-900"
                      : "bg-purple-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-8 text-center">
            Seamless RPM Integration for Cardiology
          </h2>
          <p className="text-lg text-gray-800 mb-8 max-w-3xl mx-auto text-center">
            Easy setup with dedicated support for telehealth adoption.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <Heart className="w-8 h-8 text-purple-900 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-purple-900 mb-2">
                Step 1: Assessment
              </h3>
              <p className="text-gray-700">
                Customize for heart failure and arrhythmias needs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <Clock className="w-8 h-8 text-purple-900 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-purple-900 mb-2">
                Step 2: Implementation
              </h3>
              <p className="text-gray-700">
                Devices, training, and EHR setup in 2 weeks.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <UserPlus className="w-8 h-8 text-purple-900 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-purple-900 mb-2">
                Step 3: Support
              </h3>
              <p className="text-gray-700">
                Ongoing billing and 99.9% uptime assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="relative py-20 min-h-[600px] flex justify-center items-center text-center">
        <div className="absolute inset-0">
          <Image
            src="/assets/cardiology-trust-image.png"
            alt="Trusted Cardiology RPM Provider"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/50" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-shadow-sm">
            Trusted by Cardiologists Nationwide
          </h2>
          <p className="text-lg text-white mb-6 text-shadow-sm">
            600+ practices, 12,000+ patients monitored. Reduces emergencies by
            40%, boosts satisfaction by 35%.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-purple-900 px-8 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Discover Cardiology RPM →
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-6">
            Transform Your Cardiology Practice
          </h2>
          <p className="text-lg text-gray-800 mb-8 max-w-3xl mx-auto">
            Enhance outcomes and revenue with eVitals remote patient monitoring.
            Schedule a demo today.
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
