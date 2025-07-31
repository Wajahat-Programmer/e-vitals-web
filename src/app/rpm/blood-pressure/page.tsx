import Image from 'next/image';
import Button from '@/components/home/Button';

const BloodPressureMonitoring = () => {
  return (
    <main className="bg-white text-black">
      {/* Hero Section */}
      <section className="px-6 py-20 bg-gradient-to-br from-purple-100 via-purple-200 to-purple-100 rounded-b-3xl shadow-md">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold text-[#2E1065] mb-6">
              Smart BP Monitoring
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Advanced hypertension management with AI-powered insights and real-time tracking.
            </p>
            <div className="flex gap-4">
              <Button text="See How It Works" variant="primary" />
              <Button text="View Clinical Data" variant="outline" />
            </div>
          </div>
          <div className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-lg">
            <Image 
              src="/assets/smart-bp-hero.jpg" 
              alt="AI Blood Pressure Monitoring" 
              fill 
              className="object-cover" 
              priority 
            />
          </div>
        </div>
      </section>

      {/* Unique Value Proposition */}
      <section className="mb-20 bg-[#F9F5FF] p-12 rounded-2xl mt-12">
        <h2 className="text-3xl font-bold text-[#2E1065] mb-12 text-center">The e-Vitals Difference</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Predictive Alerts",
              description: "AI identifies at-risk patients 48-72 hours before crises.",
              icon: "🧠"
            },
            {
              title: "Circadian Analytics",
              description: "Monitors morning surges and nocturnal dips in blood pressure.",
              icon: "🕒"
            },
            {
              title: "Medication Impact",
              description: "Shows how medications influence blood pressure over time.",
              icon: "💉"
            }
          ].map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-[#2E1065] mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Clinical Workflow */}
      <section className="mb-20 px-6">
        <h2 className="text-3xl font-bold text-[#2E1065] mb-12 text-center">Seamless Clinical Integration</h2>
        <div className="space-y-12 max-w-6xl mx-auto">
          {[
            {
              step: "",
              title: "Smart Device Pairing",
              description: "Pre-configured BP cuffs auto-connect with our secure system.",
              image: "/assets/bp-pairing.jpg"
            },
            {
              step: "",
              title: "Intelligent Data Capture",
              description: "Validates technique and flags irregular readings instantly.",
              image: "/assets/bp-data-capture.jpg"
            },
            {
              step: "",
              title: "Clinician Dashboard",
              description: "Color-coded patient views for urgent attention.",
              image: "/assets/bp-dashboard.jpg"
            }
          ].map((item, index) => (
            <div key={index} className="grid md:grid-cols-2 gap-8 items-center">
              <div className={`order-1 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                <span className="inline-block bg-[#B187E8] text-white text-xl font-bold rounded-full w-10 h-10 flex items-center justify-center mb-4">
                  {item.step}
                </span>
                <h3 className="text-2xl font-bold text-[#2E1065] mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
              </div>
              <div className={`relative h-64 rounded-xl overflow-hidden shadow-lg ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill 
                  className="object-cover" 
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative text-center px-6 py-16 bg-gradient-to-br from-purple-100 via-purple-200 to-purple-100 rounded-3xl shadow-xl overflow-hidden">
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
    </main>
  );
};

export default BloodPressureMonitoring;
