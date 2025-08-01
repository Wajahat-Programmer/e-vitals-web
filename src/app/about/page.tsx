"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/home/Button";
import Link from "next/link";

const AboutPage = () => {
  const stats = [
    {
      value: "40%",
      label: "Reduced hospital readmissions",
      description: "Significant decrease in 30-day readmission rates",
    },
    {
      value: "60%",
      label: "Fewer ER visits",
      description: "Reduction in unnecessary emergency department utilization",
    },
    {
      value: "41%",
      label: "Better adherence",
      description: "Improved medication and treatment plan compliance",
    },
  ];

  const features = [
    {
      icon: (
        <svg
          className="w-10 h-10 text-[#B187E8]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      title: "Data Analytics",
      description: "Advanced insights from continuous health monitoring",
    },
    {
      icon: (
        <svg
          className="w-10 h-10 text-[#B187E8]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          />
        </svg>
      ),
      title: "Customization",
      description: "Tailored solutions for your specific needs",
    },
    {
      icon: (
        <svg
          className="w-10 h-10 text-[#B187E8]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: "Security",
      description: "HIPAA-compliant data protection",
    },
    {
      icon: (
        <svg
          className="w-10 h-10 text-[#B187E8]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
          />
        </svg>
      ),
      title: "Cloud-Based",
      description: "Access data anytime, anywhere",
    },
  ];

  return (
    <main className="bg-white text-gray-800">
      {/* Full Screen Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/misson_pic.png"
            alt="About Us"
            fill
            className="object-cover"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 to-blue-900/70"></div>
        </div>
        <div className="relative z-10 h-full flex items-center justify-center text-center px-6 sm:px-12 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white mb-6">
              Transforming <span className="text-purple-300">Healthcare</span>{" "}
              Through Innovation
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              We&rsquo;re revolutionizing remote patient monitoring with
              cutting-edge technology and compassionate care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6 sm:px-12 lg:px-24 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-6">
                Our <span className="text-purple-600">Mission</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At e-Vitals, we believe that proactive healthcare should be
                accessible to everyone. Our mission is to bridge the gap between
                patients and providers through intelligent remote monitoring
                solutions.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                We combine advanced technology with clinical expertise to
                deliver personalized care that improves outcomes and reduces
                healthcare costs.
              </p>
            </div>
            <div className="relative h-[100%] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/misson_pic.png"
                alt="Our Mission"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section - Improved */}
      <section className="py-20 px-6 sm:px-12 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-6">
              Proven <span className="text-purple-600">Impact</span>
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our solutions consistently deliver measurable improvements across
              key healthcare metrics
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative p-8 rounded-xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-white opacity-80 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                <div className="relative z-10 text-center">
                  <h3 className="text-6xl font-bold text-purple-900 mb-4 group-hover:text-purple-700 transition-colors duration-300">
                    {stat.value}
                  </h3>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">
                    {stat.label}
                  </h4>
                  <p className="text-gray-600">{stat.description}</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-purple-200 group-hover:bg-purple-500 transition-colors duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 sm:px-12 lg:px-24 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-6">
              Why <span className="text-purple-600">Choose Us</span>
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with compassionate care to
              deliver exceptional results
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200"
              >
                <div className="bg-purple-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-center text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative text-center px-4 mb-20 py-16 bg-gradient-to-br from-purple-100 via-purple-200 to-purple-100 rounded-3xl shadow-xl overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 600 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full opacity-10"
          >
            <circle cx="100" cy="100" r="80" fill="#a78bfa" />
            <circle cx="500" cy="80" r="60" fill="#7c3aed" />
            <circle cx="300" cy="180" r="40" fill="#c4b5fd" />
          </svg>
        </div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-purple-900 mb-6">
            {" "}
            Ready to Transform Patient Care?
          </h2>
          <p className="text-xl text-gray-800 mb-8 max-w-3xl mx-auto">
            Join hundreds of healthcare providers who trust our solutions for
            better patient outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/demo">
              <Button
                text="Schedule Consultation"
                variant="primary"
                className="bg-gradient-to-r from-purple-700 to-purple-900 text-white px-6 py-3 rounded-full hover:opacity-90 transition font-semibold shadow-lg"
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
