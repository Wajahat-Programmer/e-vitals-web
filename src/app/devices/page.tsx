import Image from "next/image";
import Button from "@/components/home/Button";
import Link from "next/link";

const WeightMonitoring = () => {
  return (
    <div className="bg-white text-black">
      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/devices-hero.jpg"
            alt="Advanced Weight Analytics"
            fill
            className="object-cover"
            quality={90}
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center text-center">
          <div className="max-w-3xl px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              4G Devices
            </h1>
            <p className="text-lg md:text-xl text-gray-200">
              Stay connected with high-speed 4G-enabled devices for seamless
              data transmission and remote monitoring.
            </p>
          </div>
        </div>
      </section>

      {/* Proprietary Technology */}
      {/* <section className="py-20 px-6 md:px-12 bg-[#FAFAFB]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#2E1065] mb-12 text-center">
            Our Weight Intelligence Technology
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-[#2E1065] mb-4">
                Beyond the Scale
              </h3>
              <p className="text-gray-600 mb-6">
                Traditional weight monitoring misses critical nuances. e-Vitals'
                proprietary algorithms analyze:
              </p>
              <ul className="space-y-4">
                {[
                  "Rate of weight change patterns",
                  "Circadian variation trends",
                  "Correlation with medication changes",
                  "Response to dietary adjustments",
                  "Comparison to baseline dry weight",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="bg-[#B187E8] rounded-full p-1 mr-3 mt-0.5">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-64">
              <Image
                src="/assets/weight-analytics-dashboard.jpg"
                alt="Weight Analytics Dashboard"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* Specialized Solutions */}
      <section className="py-20 px-6 md:px-12">
        <h2 className="text-3xl font-bold text-[#2E1065] mb-12 text-center">
          Specialized Monitoring Solutions
        </h2>
        <div className="space-y-8">
          {[
            {
              title: "Blood Pressure and Blood Glucose Monitoring System",
              description:
                "Track vital signs with real-time blood pressure and glucose level monitoring for proactive health management.",
              features: [
                "2 in 1 blood glucose and blood pressure measurement",
                "Audible results in English / Spanish",
                "Alterative site testing approved in blood glucose measurement",
                "Smart averaging technology ( AVG Mode )",
                "Irregular rapid beat ( IRB ) technology",
                "Bluetooth connectivity",
              ],
              image: "/assets/BPM_BGM.png",
            },
            {
              title: "Weight Scale",
              description:
                "Monitor body weight accurately to support fitness goals and chronic condition management.",
              features: [
                "Supports up to 550 lbs",
                "Low profile",
                "Wide platform",
                "Large LCD display",
                "Audible results in English / Spanish / French",
              ],
              image: "/assets/Weight_scale.png",
            },
          ].map((program, index) => (
            <div
              key={index}
              className="grid md:grid-cols-2 gap-8 bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#2E1065] mb-3">
                  {program.title}
                </h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <ul className="space-y-2 mb-6">
                  {program.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-[#B187E8] mr-2 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                {/* <Button text="Learn More" variant="outline" /> */}
              </div>
              <div className="relative h-64 md:h-full">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
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
            Let’s Make Care Easier — Together
          </h2>
          <p className="text-xl text-gray-800 mb-8 max-w-3xl mx-auto">
            Want to see how E-Vitals can simplify patient monitoring, reduce
            staff load, and grow your practice?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/demo"
              className="bg-gradient-to-r from-purple-700 to-purple-900 text-white px-6 py-3 rounded-full hover:opacity-90 transition font-semibold shadow-lg"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WeightMonitoring;
