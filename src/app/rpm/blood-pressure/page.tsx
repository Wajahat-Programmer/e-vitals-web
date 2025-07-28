import SubPageLayout from '@/components/home/SubPageLayout';
import Image from 'next/image';
import Button from '@/components/home/Button';

const BloodPressureMonitoring = () => {
  return (
    <SubPageLayout 
      title="Smart BP Monitoring" 
      description="Advanced hypertension management with AI-powered insights and real-time tracking."
    >
      {/* Hero Section */}
      <section className="mb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#2E1065] mb-6">Revolutionary Blood Pressure Care</h2>
            <p className="text-lg text-gray-600 mb-6">
              e-Vitals' SmartBP system combines medical-grade monitoring with predictive analytics to 
              prevent hypertensive crises before they occur. Our solution detects subtle patterns 
              that often precede dangerous spikes.
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
      <section className="mb-20 bg-[#F9F5FF] p-12 rounded-2xl">
        <h2 className="text-3xl font-bold text-[#2E1065] mb-12 text-center">The e-Vitals Difference</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Predictive Alerts",
              description: "Our AI identifies at-risk patients 48-72 hours before critical events",
              icon: "🔮"
            },
            {
              title: "Circadian Analytics",
              description: "Tracks morning surge and nocturnal dipping patterns automatically",
              icon: "⏰"
            },
            {
              title: "Medication Impact",
              description: "Visualizes how each medication affects individual BP trends",
              icon: "💊"
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
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-[#2E1065] mb-12 text-center">Seamless Clinical Integration</h2>
        <div className="space-y-12">
          {[
            {
              step: "1",
              title: "Smart Device Pairing",
              description: "Patients receive pre-configured BP cuffs that auto-pair with our secure platform",
              image: "/assets/bp-pairing.jpg"
            },
            {
              step: "2",
              title: "Intelligent Data Capture",
              description: "Devices validate proper technique and flag irregular readings in real-time",
              image: "/assets/bp-data-capture.jpg"
            },
            {
              step: "3",
              title: "Clinician Dashboard",
              description: "Color-coded patient matrix prioritizes those needing immediate attention",
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
      <section className="bg-gradient-to-br from-[#3A0072] to-[#7B2CBF] rounded-2xl p-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-6">Transform Your Hypertension Management</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Reduce preventable hospitalizations and improve quality of life with our next-gen BP monitoring.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            text="Schedule Demo" 
            variant="primary" 
            className="bg-white text-[#4B0082] hover:bg-gray-100 px-8 py-3 text-lg"
          />
          <Button 
            text="Download White Paper" 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-[#4B0082] px-8 py-3 text-lg"
          />
        </div>
      </section>
    </SubPageLayout>
  );
};

export default BloodPressureMonitoring;