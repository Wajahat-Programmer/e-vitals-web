"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronsRight } from "lucide-react";

const EndocrinologyPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                <span className="text-black">Explore</span><br />
                <span className="text-[#012c66]">Remote Healthcare</span><br />
                <span className="text-[#012c66]">Solutions</span><br />
                <span className="text-black">Tailored to Your Specialty</span>
              </h1>
              <p className="text-gray-700 text-lg mb-6 max-w-xl text-justify">
                Remote Patient Monitoring (RPM) programs can be seamlessly customized to enhance patient 
                engagement, improve health outcomes, and maximize the success of your practice.
              </p>
              {/* <Link
                href="/demo"
                className="group bg-[#5ce1e6] hover:bg-[#1faaaf] text-white text-base font-semibold px-6 py-3 rounded-md shadow-md transition-all duration-300 inline-flex items-center gap-2 whitespace-nowrap flex-nowrap min-w-0"
              >
                Request a Demo
                <ChevronsRight size={20} className="transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0" />
              </Link> */}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <Image 
                src="/assets/endocrinology.jpeg"
                alt="Healthcare Professional with Patient"
                width={800}
                height={600}
                className="rounded-lg shadow-xl w-full"
                priority
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
              <Image 
                src="/assets/rpm-endocrine.jpg"
                alt="Healthcare Professional with Patient"
                width={800}
                height={600}
                className="rounded-lg shadow-xl w-full"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#012c66] mb-6">
                Get a specialized Remote Patient Monitoring (RPM) solution
              </h2>
              <p className="text-gray-700 text-lg mb-4 leading-relaxed text-justify">
                Remote healthcare solutions through RPM plays a vital role in healthcare delivery for 
                patients with chronic conditions. Implementing an effective RPM program requires 
                alignment with your medical specialty and the specific conditions you treat.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed text-justify">
                At e-Vitals, our comprehensive RPM devices, user-friendly platform, and professional
                clinical monitoring services are built to support your practice goals and enhance 
                the quality of patient care.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHO WE SERVE Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#012c66] mb-12 text-center">
            WHO WE SERVE
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Side - Specialty List */}
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
              <div className="bg-white p-4 border-b-2 border-gray-300">
                <h3 className="font-semibold text-lg text-gray-800">Cardiology</h3>
              </div>
              <div className="bg-[#012c66] p-4 border-b border-gray-200">
                <h3 className="font-bold text-lg text-white">Endocrinology</h3>
              </div>
              <div className="bg-white p-4 border-b border-gray-200">
                <h3 className="font-semibold text-gray-800">Geriatrics</h3>
              </div>
              <div className="bg-white p-4 border-b border-gray-200">
                <h3 className="font-semibold text-gray-800">Nephrology</h3>
              </div>
              <div className="bg-white p-4 border-b border-gray-200">
                <h3 className="font-semibold text-gray-800">Neurology</h3>
              </div>
              <div className="bg-white p-4 border-b border-gray-200">
                <h3 className="font-semibold text-gray-800">Oncoology</h3>
              </div>
              <div className="bg-white p-4 border-b border-gray-200">
                <h3 className="font-semibold text-gray-800">Pulmonology</h3>
              </div>
              <div className="bg-white p-4 border-b border-gray-200">
                <h3 className="font-semibold text-gray-800">Rheumatology</h3>
              </div>
            </div>

            {/* Right Side - Endocrinologists Details */}
            <div>
              <div className="mb-6">
                <Image 
                src="/assets/endocrinologist.jpg"
                alt="Healthcare Professional with Patient"
                width={800}
                height={600}
                className="rounded-lg shadow-xl w-full"
              />
              </div>
              <h3 className="text-2xl font-bold text-[#003d7a] mb-4">Endocrinology</h3>
              <p className="text-gray-700 text-lg leading-relaxed text-justify">
                Our glucose and weight monitoring tools help endocrinologists manage diabetes 
                and metabolic disorders with precision. e-Vitals ensures continuous patient 
                feedback and trend analysis for better glycemic control and medication adherence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Maximize Care Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white rounded-4xl shadow-2xl p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-[#012c66] mb-6">
              Maximize Care and Growth
            </h2>
            
            <h3 className="text-xl md:text-2xl font-bold text-black mb-8">
              The Benefits of Remote Patient Monitoring (RPM)<br />
              for Specialty Practices
            </h3>
            
            <p className="text-gray-800 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
              Remote healthcare solutions are essential for driving efficiency and improving 
              outcomes in modern specialty care. An advanced RPM platform can transform how 
              your practice manages chronic conditions and interacts with patients.
            </p>
          </div>
        </div>
      </section>

      {/* Key Advantages Section */}
      <section className="py-16 bg-white flex justify-center items-center">
        <div className="w-full max-w-5xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#012c66] mb-2">
            Key Advantages of
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold text-[#012c66] mb-12">
            Implementing an RPM Platform
          </h2>

          <div className="space-y-10">
            {/* Reusable Row Style */}
            {[
              {
                img: "/assets/reduce-costs.jpg",
                text: "Reduce Healthcare Utilization Costs",
              },
              {
                img: "/assets/patient-compliance.jpeg",
                text: "Enhance Patient Compliance and Outcomes",
              },
              {
                img: "/assets/patient-provider.jpg",
                text: "Boost Patient-Provider Communication & Engagement",
              },
              {
                img: "/assets/clinical-data.jpeg",
                text: "Generate Actionable Clinical Data",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center justify-center md:space-x-8 space-y-4 md:space-y-0"
              >
                <Image
                  src={item.img}
                  alt={item.text}
                  width={160}
                  height={160}
                  className="w-40 h-40 object-cover rounded-lg shadow-md"
                />
                <div className="md:w-[350px] flex justify-center">
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 text-center md:text-left leading-snug">
                    {item.text}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#012c66] py-16 text-center text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Empowering Every Practice with Smart Monitoring
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Whether you manage a small clinic or a large specialty group, e-Vitals 
            provides an end-to-end IoT solution that includes HIPAA-complaint device 
            integration, user engagement, and comprehensive patient education and support.
          </p>
          <Link
            href="/contact"
            className="group bg-[#307b7f] hover:bg-[#1faaaf] text-white text-base font-semibold px-6 py-3 rounded-md shadow-md transition-all duration-300 inline-flex items-center gap-2 whitespace-nowrap flex-nowrap min-w-0"
          >
            Discover Endocrinology RPM
            <ChevronsRight size={20} className="transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default EndocrinologyPage;