"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { 
  Stethoscope, 
  Bell, 
  UserPlus, 
  FileText, 
  Heart, 
  Clock, 
  Quote,
  Menu,
  X,
  DollarSign,
  Activity,
  Users,
  BarChart3,
  ChevronsRight
} from "lucide-react";

const NeurologyPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <Stethoscope className="w-8 h-8 text-purple-900" />,
      title: "Real-Time Cardiac Monitoring",
      description:
        "Track blood pressure, heart rate, and ECG for hypertension, heart failure, and arrhythmias with FDA-cleared devices. Integrates with wearables, reducing clinic visits by 45%.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    },
    {
      icon: <Bell className="w-8 h-8 text-purple-900" />,
      title: "Early Intervention Alerts",
      description:
        "Automated alerts for abnormal readings like irregular heartbeats. Custom thresholds reduce hospital readmissions by 30% for heart failure patients.",
      image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&h=600&fit=crop",
    },
    {
      icon: <UserPlus className="w-8 h-8 text-purple-900" />,
      title: "Patient and Caregiver Engagement",
      description:
        "Voice-guided devices in English/Spanish with caregiver portal. Boosts adherence to 88% for better cardiac health management.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop",
    },
    {
      icon: <FileText className="w-8 h-8 text-purple-900" />,
      title: "Reimbursement Optimization",
      description:
        "Automate billing for CPT 99453-99458 with audit-ready reports. Increases reimbursable services by 25%, saving 12 hours weekly.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop",
    },
  ];

  const benefits = [
    {
      icon: <Heart className="w-12 h-12 text-purple-900 mb-4" />,
      title: "Improved Cardiac Outcomes",
      description:
        "Continuous monitoring cuts complications and readmissions by 35%. Real-time data enhances survival and quality of life.",
    },
    {
      icon: <Clock className="w-12 h-12 text-purple-900 mb-4" />,
      title: "Time Efficiency for Providers",
      description:
        "EHR integration reduces check-ups by 40%. Cardiologists save 20 hours weekly for complex cases.",
    },
    {
      icon: <Users className="w-12 h-12 text-purple-900 mb-4" />,
      title: "Enhanced Patient Compliance",
      description:
        "85% adherence with reminders and multilingual support. Reduces adverse events by 30%.",
    },
    {
      icon: <DollarSign className="w-12 h-12 text-purple-900 mb-4" />,
      title: "Maximized Revenue",
      description:
        "$5,000 monthly per physician via accurate coding. Cuts claim denials by 20%.",
    },
  ];

  const testimonials = [
    {
      quote:
        "While we've encountered minor issues, the overall benefits far outweigh them. The platform has streamlined our processes, improved patient outcomes, and boosted revenue.",
      name: "Jessica Putnam, MBA",
      title: "Administrator",
      company: "Virginia Cardiovascular Consultants",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop",
    },
    {
      quote:
        "Implementation of RPM services with Cardiac RMS was very efficient as they were reliable and prepared. Now that our office is providing RPM services, we have a scalable process to help patients become more compliant with their medications, feel connected to their care team, and receive interventions when necessary.",
      name: "Wael Hamade",
      title: "CEO",
      company: "Jackson Cardiology Consultants, PLLC",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop",
    },
    {
      quote:
        "We will not get around introducing remote monitoring. I am confident that the healthcare of the future will be that centers that do not get on the train right now of remote monitoring will be outpaced and will be providing sub-perfect care compared to the competing systems.",
      name: "Dr. Marat Fudim, MD",
      title: "Advanced Heart Failure Specialist and Cardiologist",
      company: "Duke University Medical Center",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop",
    },
    {
      quote:
        "The technology enables our clinic to provide ambulatory cardiac arrhythmia care to patients across a wide geographic area spanning more than 40 counties in rural and suburban Illinois.",
      name: "Dr. Ziad Issa, MD",
      title: "Executive Director of Cardiac Electrophysiology",
      company: "Prairie Heart Institute of Illinois",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=200&h=200&fit=crop",
    },
  ];

  const keyAdvantages = [
    {
      icon: <DollarSign className="w-16 h-16 text-blue-600" />,
      title: "Reduce Healthcare Utilization Costs",
      description: "Lower hospital readmissions and emergency visits through proactive monitoring"
    },
    {
      icon: <Activity className="w-16 h-16 text-blue-600" />,
      title: "Enhance Patient Compliance and Outcomes",
      description: "Improve medication adherence and treatment plan following"
    },
    {
      icon: <Users className="w-16 h-16 text-blue-600" />,
      title: "Boost Patient-Provider Communication & Engagement",
      description: "Enable real-time communication and strengthen patient relationships"
    },
    {
      icon: <BarChart3 className="w-16 h-16 text-blue-600" />,
      title: "Generate Actionable Clinical Data",
      description: "Access comprehensive health data for informed clinical decisions"
    }
  ];

  return (
    <div className="relative min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-4 px-4">
        <div className="container mx-auto text-center">
          <p className="text-blue-900 font-semibold">
            🏥 Two free Remote Monitoring for clinical trials org need! 
            <a href="#" className="underline ml-2">Learn More</a>
          </p>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-[#012c66] mb-4 leading-tight">
                Explore<br />
                Remote Healthcare <br />
                <span className=" bg-clip-text text-[#012c66]">
                  Solutions
                </span><br />
                Tailored to Your Specialty
              </h1>
              <p className="text-gray-700 text-lg mb-6 max-w-xl">
                Remote Patient Monitoring (RPM) programs can be seamlessly customized to enhance patient engagement, improve health outcomes, and maximize the success of your practice.
              </p>
              <Link
                href="/demo"
                className="group bg-[#5ce1e6] hover:bg-[#1faaaf] text-white text-base font-semibold px-6 py-3 rounded-md shadow-md transition-all duration-300 inline-flex items-center gap-2 whitespace-nowrap flex-nowrap min-w-0"
              >
                Request a Demo
                <ChevronsRight size={20} className="transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop"
                alt="Healthcare Professional with Patient"
                className="rounded-lg shadow-xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* RPM Solution Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&h=800&fit=crop"
                alt="Healthcare Support"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#003d7a] mb-6">
                Get a specialized Remote Patient Monitoring (RPM) solution
              </h2>
              <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                Remote healthcare solutions through RPM plays a vital role in healthcare delivery for patients with chronic conditions. Implementing an effective RPM program requires alignment with your medical specialty and the specific conditions you treat.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                At e-Vitals, our comprehensive RPM devices, user-friendly platform, and professional clinical monitoring services are built to support your practice goals and enhance the quality of patient care.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHO WE SERVE Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#003d7a] mb-12 text-center">
            WHO WE SERVE
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left Side - Specialty List */}
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
              <div className="bg-white p-4 border-b-2 border-gray-300">
                <h3 className="font-semibold text-lg text-gray-800">Cardiology</h3>
              </div>
              <div className="bg-white p-4 border-b border-gray-200">
                <h3 className="font-semibold text-lg text-gray-800">Endocrinology</h3>
              </div>
              <div className="bg-white p-4 border-b border-gray-200">
                <h3 className="font-semibold text-gray-800">Geriatrics</h3>
              </div>
              <div className="bg-white p-4 border-b border-gray-200">
                <h3 className="font-semibold text-gray-800">Nephrology</h3>
              </div>
              <div className="bg-[#012c66] p-4 border-b border-gray-200">
                <h3 className="font-bold text-white">Neurology</h3>
              </div>
              <div className="bg-white p-4 border-b border-gray-200">
                <h3 className="font-semibold text-gray-800">Oncology</h3>
              </div>
              <div className="bg-white p-4 border-b border-gray-200">
                <h3 className="font-semibold text-gray-800">Pulmonology</h3>
              </div>
              <div className="bg-white p-4 border-b border-gray-200">
                <h3 className="font-semibold text-gray-800">Rheumatology</h3>
              </div>
            </div>

            {/* Right Side - Cardiologists Details */}
            <div>
              <div className="mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=400&fit=crop"
                  alt="Cardiology Care"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#003d7a] mb-4">Neurologists</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                eVitals revolutionizes neurological care with a state-of-the-art remote patient monitoring (RPM) platform designed for epilepsy, stroke recovery, Parkinson’s, and other neurological disorders. Our FDA-cleared devices and HIPAA-compliant technology deliver real-time data, empowering neurologists to provide proactive, personalized care from anywhere.

With seamless EHR integration and advanced analytics, eVitals enables precise treatment adjustments and early intervention, reducing hospital visits and improving patient quality of life. Join the future of neurology with a platform trusted by leading practices nationwide.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Maximize Care Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#003d7a] mb-4">
            Maximize Care and Growth
          </h2>
          <h3 className="text-xl font-semibold text-gray-700 mb-6">
            The Benefits of Remote Patient Monitoring (RPM) for Specialty Practices
          </h3>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
            Remote healthcare solutions are essential for driving efficiency and improving outcomes in modern specialty care. An advanced RPM platform can transform how your practice manages chronic conditions and interacts with patients.
          </p>
        </div>
      </section>

      {/* Key Advantages Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#003d7a] mb-12 text-center">
            Key Advantages of Implementing an RPM Platform
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {keyAdvantages.map((advantage, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-6 p-6 bg-gray-50 rounded-lg hover:shadow-lg transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex-shrink-0">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    {advantage.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-600">
                    {advantage.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#003d7a] py-16 text-center text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Empowering Every Practice with Smart Monitoring
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Whether you manage a small clinic or a large specialty group, eVitals provides an end-to-end IoT solution that includes HIPAA-complaint device integration, user engagement, and comprehensive patient education and support.
          </p>
          <Link
            href="/contact"
            className="group bg-[#5ce1e6] hover:bg-[#1faaaf] text-white text-base font-semibold px-6 py-3 rounded-md shadow-md transition-all duration-300 inline-flex items-center gap-2 whitespace-nowrap flex-nowrap min-w-0"
          >
            Discover Neurology RPM
            <ChevronsRight size={20} className="transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default NeurologyPage;