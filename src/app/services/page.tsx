import Image from 'next/image';
import Button from '@/components/home/Button';
import SubPageLayout from '@/components/home/SubPageLayout';

const ServicesPage = () => {
  // Add a subtle animated gradient background for interactivity
  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 -z-10 animate-gradient bg-gradient-to-br from-[#ede9fe] via-[#f3e8ff] to-[#fff] opacity-80" />
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
              Services That Support Your Success
            </h1>
            <p className="text-lg md:text-xl text-gray-200">
              We handle the tech and care coordination — so you can focus on your patients.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES LIST SECTION */}
      <section className="mb-20 mt-12 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2E1065] mb-4">How We Help You</h2>
          <p className="text-gray-600 text-lg md:text-xl mb-10">
            We make it easier for your clinic to deliver care, stay compliant, and grow revenue — all without extra workload on your staff.
          </p>

          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 grid gap-6">
            {[
              "Personalized education to help patients use medical devices with confidence",
              "Automated monitoring & reminders to keep patients engaged daily",
              "24/7 technical support — so your team doesn’t have to troubleshoot",
              "Real-time alerts sent to physicians when critical vitals change",
              "Fast device replacements to minimize downtime",
              "Clear, customized monthly reports for each patient",
              "Vitals tracked exactly the way you prescribe them",
              "Accurate billing & coding to help you get reimbursed fully",
              "Help enrolling patients — even handling onboarding for you"
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
        <h2 className="text-3xl font-bold text-[#2E1065] mb-12 text-center">Complete Care Solutions</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Remote Patient Monitoring",
              description: "Track vitals 24/7 and catch problems before they become emergencies.",
              icon: "📊"
            },
            {
              title: "Chronic Care Management",
              description: "Let us help you coordinate long-term care plans for better outcomes.",
              icon: "❤️"
            },
            {
              title: "Telehealth Consultations",
              description: "Connect with patients anytime, anywhere — securely and easily.",
              icon: "🎥"
            },
            {
              title: "Behavioral Health",
              description: "Support your patients' mental health with integrated counseling.",
              icon: "🧠"
            },
            {
              title: "Care Coordination",
              description: "We help you stay connected with all care providers for seamless treatment.",
              icon: "🤝"
            },
            {
              title: "Analytics & Reporting",
              description: "Get actionable insights from clean, organized patient data.",
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
      <section className="relative text-center px-4 mb-20 py-16 bg-gradient-to-br from-[#ede9fe] via-[#f3f0ff] to-[#fff] rounded-3xl shadow-xl overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 600 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-20">
        <circle cx="100" cy="100" r="80" fill="#c4b5fd" />
        <circle cx="500" cy="80" r="60" fill="#a78bfa" />
        <circle cx="300" cy="180" r="40" fill="#f3e8ff" />
          </svg>
        </div>
        <div className="relative z-10"></div>
        <h2 className="text-3xl font-bold text-[#2E1065] mb-6">Let’s Make Care Easier — Together</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Want to see how E-Vitals can simplify patient monitoring, reduce staff load, and grow your practice?
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button text="Schedule Consultation" variant="primary" />
        </div>
      </section>
      </>
    </div>
  );
};

export default ServicesPage;
