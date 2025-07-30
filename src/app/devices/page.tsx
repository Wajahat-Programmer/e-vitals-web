'use client';
import Image from 'next/image';
import SubPageLayout from '@/components/home/SubPageLayout';
import Button from '@/components/home/Button';

const DevicesPage = () => {
  const featuredDevices = [
    {
      name: 'Blood Pressure Monitor',
      description: 'Track both blood glucose and pressure in one device — designed for ease and accuracy.',
      award: 'Popular',
      features: [
        'Smart Averaging Technology',
        'Built-in Cellular SIM',
        'Spoken results in English/Spanish',
        'Compact and lightweight',
      ],
      image: '/assets/bp-glucose-device.jpg',
    },
    {
      name: 'Bluetooth Weight Scale',
      description: 'A medical-grade scale with wide platform, high capacity, and automatic data transmission.',
      award: 'New',
      features: [
        'Supports up to 550 lbs',
        'Large backlit LCD',
        'Low profile design',
        'Multilingual support',
      ],
      image: '/assets/pro-scale.jpg',
    },
  ];

  return (
    <SubPageLayout 
      title="Our Devices" 
      description="Clinically validated monitoring devices for comprehensive remote care."
    >
      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/devices-hero.jpg"
            alt="Our RPM Devices"
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
              Our Remote Monitoring Devices
            </h1>
            <p className="text-lg md:text-xl text-gray-200">
              Clinically validated RPM tools that enable better care — anytime, anywhere.
            </p>
          </div>
        </div>
      </section>

      {/* Devices Intro */}
      <section className="mb-20 px-4">
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
              src="/assets/devices pic 1.jpg" 
              alt="e-Vitals Devices" 
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Device Categories */}
      <section className="mb-20 px-4">
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
      <section className="mb-20 px-4">
        <h2 className="text-3xl font-bold text-[#4B0082] mb-12 text-center">Featured Devices</h2>
        <div className="space-y-12">
          {featuredDevices.map((device, index) => (
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
      <section className="mb-20 px-4">
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
      <section className="relative text-center px-4 mb-20 py-16 bg-gradient-to-br from-purple-100 via-purple-200 to-purple-100 rounded-3xl shadow-xl overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 600 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-10">
            <circle cx="100" cy="100" r="80" fill="#a78bfa" />
            <circle cx="500" cy="80" r="60" fill="#7c3aed" />
            <circle cx="300" cy="180" r="40" fill="#c4b5fd" />
          </svg>
        </div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-purple-900 mb-6">Let’s Make Care Easier — Together</h2>
          <p className="text-xl text-gray-800 mb-8 max-w-3xl mx-auto">
            Want to see how E-Vitals can simplify patient monitoring, reduce staff load, and grow your practice?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              text="Schedule Consultation"
              variant="primary"
              className="bg-gradient-to-r from-purple-700 to-purple-900 text-white px-6 py-3 rounded-full hover:opacity-90 transition font-semibold shadow-lg"
            />
          </div>
        </div>
      </section>
    </SubPageLayout>
  );
};

export default DevicesPage;
