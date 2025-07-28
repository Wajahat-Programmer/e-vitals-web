import Image from 'next/image';
import Button from '@/components/home/Button';
import SubPageLayout from '@/components/home/SubPageLayout';

const ServicesPage = () => {
  return (
    <>
      {/* HERO SECTION */}
<section className="relative w-full h-screen overflow-hidden">
  {/* Background Image */}
  <div className="absolute inset-0 z-0">
    <Image
      src="/assets/services.jpg"
      alt="Healthcare Services"
      fill
      className="object-cover"
      quality={90}
      priority
    />
    <div className="absolute inset-0 bg-black/50" />
  </div>

  {/* Foreground Content */}
  <div className="relative z-10 h-full flex items-center justify-center text-center">
    <div className="max-w-3xl px-6">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
        Our Services
      </h1>
      <p className="text-lg md:text-xl text-gray-200">
        Comprehensive healthcare solutions designed for modern practices.
      </p>
    </div>
  </div>
</section>


      {/* SERVICES LIST SECTION */}
      <section className="mb-20 mt-12 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2E1065] mb-4">What We Offer</h2>
          <p className="text-gray-600 text-lg md:text-xl mb-10">
            Empowering healthcare providers with comprehensive, patient-focused support services.
          </p>

          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 grid gap-6">
            {[
              "Guided education on how to use medical devices effectively",
              "Ongoing monitoring with patient reminders to ensure adherence",
              "24/7 technical assistance for patient support and troubleshooting",
              "Timely physician alerts when critical thresholds are reached",
              "Immediate device replacement in case of faults or malfunctions",
              "Detailed monthly reports tailored to individual patient needs",
              "Tracking of vitals based on physician-defined parameters",
              "Accurate billing and coding support for reimbursements",
              "Assistance with patient screening and enrollment upon request"
            ].map((service, index) => (
              <div key={index} className="flex items-start text-left">
                <svg className="w-6 h-6 text-[#8B5CF6] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <p className="ml-4 text-lg text-gray-700">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* COMPREHENSIVE SERVICES SECTION */}
      <section className="mb-20 px-4">
        <h2 className="text-3xl font-bold text-[#2E1065] mb-12 text-center">Our Comprehensive Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Remote Patient Monitoring",
              description: "Continuous tracking of vital signs for chronic condition management.",
              icon: "📊"
            },
            {
              title: "Chronic Care Management",
              description: "Coordinated care plans for patients with multiple chronic conditions.",
              icon: "❤️"
            },
            {
              title: "Telehealth Consultations",
              description: "Secure video visits for convenient patient-provider communication.",
              icon: "🎥"
            },
            {
              title: "Behavioral Health",
              description: "Integrated mental health support and counseling services.",
              icon: "🧠"
            },
            {
              title: "Care Coordination",
              description: "Seamless collaboration between providers and specialists.",
              icon: "🤝"
            },
            {
              title: "Analytics & Reporting",
              description: "Actionable insights from comprehensive patient data.",
              icon: "📈"
            }
          ].map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-[#2E1065] mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="text-center px-4 mb-20">
        <h2 className="text-3xl font-bold text-[#2E1065] mb-6">Ready to Enhance Your Services?</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Our team is ready to help you implement the right solutions for your practice.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button text="Schedule Consultation" variant="primary" />
          {/* <Button text="Browse All Services" variant="outline" /> */}
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
