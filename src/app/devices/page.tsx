"use client";
import SubPageLayout from "@/components/home/SubPageLayout";
import Image from "next/image";
import Button from "@/components/home/Button";

const DevicesPage = () => {
  return (
    <SubPageLayout 
      title="Our Devices" 
      description="Clinically validated monitoring devices for comprehensive remote care."
    >
      {/* Devices Intro */}
      <section className="mb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#4B0082] mb-6">Precision Monitoring Devices</h2>
            <p className="text-lg text-gray-600 mb-6">
              Our FDA-cleared devices provide accurate, reliable health data with seamless integration to our RPM platform. 
              Each device is designed for ease of use and clinical accuracy.
            </p>
            <div className="flex gap-4">
              <Button text="View All Devices" variant="primary" />
              <Button text="Technical Specs" variant="outline" />
            </div>
          </div>
          <div className="relative h-80 md:h-96">
            <Image 
              src="/assets/all-devices.png" 
              alt="e-Vitals Devices" 
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Device Categories */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-[#4B0082] mb-12 text-center">Device Categories</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Vital Signs Monitors",
              count: "5 Devices",
              description: "Track blood pressure, heart rate, temperature and more",
              image: "/assets/vitals-monitor.jpg"
            },
            {
              title: "Glucose Monitoring",
              count: "3 Systems",
              description: "Accurate blood glucose tracking with smart averaging",
              image: "/assets/glucose-monitor.jpg"
            },
            {
              title: "Specialized Devices",
              count: "4 Solutions",
              description: "Including weight scales, pulse oximeters and spirometers",
              image: "/assets/specialized-devices.jpg"
            }
          ].map((category, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image 
                  src={category.image} 
                  alt={category.title} 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-[#4B0082]">{category.title}</h3>
                  <span className="bg-[#F3E8FF] text-[#6B21A8] text-sm px-3 py-1 rounded-full">{category.count}</span>
                </div>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <Button 
                  text="View Devices" 
                  variant="outline" 
                  className="border-[#B187E8] text-[#B187E8] hover:bg-[#B187E8] hover:text-white text-sm px-4 py-2"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Devices */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-[#4B0082] mb-12 text-center">Featured Devices</h2>
        <div className="space-y-12">
          {[
            {
              name: "BP+Glucose 2-in-1 Monitor",
              description: "The only device that measures both blood pressure and glucose with clinical accuracy in one compact unit.",
              features: [
                "FDA-cleared for accuracy",
                "Built-in cellular connectivity",
                "Voice-guided operation",
                "Smart averaging technology"
              ],
              image: "/assets/bp-glucose-device.jpg",
              award: "Best RPM Device 2023"
            },
            {
              name: "Pro Weight Scale",
              description: "High-capacity scale with body composition analysis and seamless data transmission.",
              features: [
                "Supports up to 550 lbs (250 kg)",
                "Measures BMI and body fat %",
                "Bluetooth and cellular options",
                "Large backlit display"
              ],
              image: "/assets/pro-scale.jpg",
              award: "Editors' Choice"
            },
            {
              name: "Pulse Oximeter Pro",
              description: "Hospital-grade SpO2 monitoring with perfusion index and plethysmograph.",
              features: [
                "FDA 510(k) cleared",
                "Continuous or spot check modes",
                "Low perfusion performance",
                "Multi-directional display"
              ],
              image: "/assets/oximeter.jpg",
              award: "Innovation Award"
            }
          ].map((device, index) => (
            <div key={index} className="grid md:grid-cols-2 gap-8 bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-8">
                {device.award && (
                  <span className="inline-block bg-[#F3E8FF] text-[#6B21A8] text-sm font-medium px-3 py-1 rounded-full mb-4">
                    {device.award}
                  </span>
                )}
                <h3 className="text-2xl font-bold text-[#4B0082] mb-3">{device.name}</h3>
                <p className="text-gray-600 mb-6">{device.description}</p>
                <ul className="space-y-3 mb-8">
                  {device.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-5 h-5 text-[#B187E8] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex gap-4">
                  <Button text="View Details" variant="primary" />
                  <Button text="Data Sheet" variant="outline" />
                </div>
              </div>
              <div className="relative h-64 md:h-full">
                <Image 
                  src={device.image} 
                  alt={device.name} 
                  fill
                  className="object-contain p-8"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Support Section */}
      <section className="mb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-12">
            <h2 className="text-3xl font-bold text-[#4B0082] mb-6">Comprehensive Device Support</h2>
            <p className="text-gray-600 mb-6">
              Our dedicated support team ensures your devices are always functioning optimally, with 24/7 technical assistance and rapid replacement if needed.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "24/7 technical support",
                "Device replacement program",
                "Online training resources",
                "Clinical support hotline",
                "Multilingual instructions"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-[#B187E8] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button text="Contact Support" variant="primary" />
          </div>
          <div className="relative h-96">
            <Image 
              src="/assets/support-team.jpg" 
              alt="Support Team" 
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-[#4B0082] to-[#6A0DAD] rounded-2xl p-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-6">Ready to Equip Your Practice?</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Our team can help you select the right devices for your patient population and clinical needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            text="Get Device Demo" 
            variant="primary" 
            className="bg-white text-[#4B0082] hover:bg-gray-100 px-8 py-3 text-lg"
          />
          <Button 
            text="Talk to Specialist" 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-[#4B0082] px-8 py-3 text-lg"
          />
        </div>
      </section>
    </SubPageLayout>
  );
};

export default DevicesPage;
