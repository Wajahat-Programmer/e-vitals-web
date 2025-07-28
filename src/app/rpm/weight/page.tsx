import SubPageLayout from '@/components/home/SubPageLayout';
import Image from 'next/image';
import Button from '@/components/home/Button';

const WeightMonitoring = () => {
  return (
    <SubPageLayout 
      title="Advanced Weight Analytics" 
      description="Smart weight monitoring with body composition insights for comprehensive care."
    >
      {/* Hero with Clinical Focus */}
      <section className="mb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#2E1065] mb-6">Weight Data That Matters</h2>
            <p className="text-lg text-gray-600 mb-6">
              e-Vitals transforms simple weight measurements into powerful clinical insights. 
              Our advanced analytics distinguish between fluid retention and true weight changes, 
              providing actionable data for heart failure, renal, and bariatric care.
            </p>
            <div className="flex gap-4">
              <Button text="View Clinical Applications" variant="primary" />
              <Button text="Device Specifications" variant="outline" />
            </div>
          </div>
          <div className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-lg">
            <Image 
              src="/assets/weight-analytics-hero.jpg" 
              alt="Advanced Weight Analytics" 
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Proprietary Technology */}
      <section className="mb-20 bg-[#FAFAFB] rounded-2xl p-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#2E1065] mb-12 text-center">Our Weight Intelligence Technology</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-[#2E1065] mb-4">Beyond the Scale</h3>
              <p className="text-gray-600 mb-6">
                Traditional weight monitoring misses critical nuances. e-Vitals' proprietary algorithms analyze:
              </p>
              <ul className="space-y-4">
                {[
                  "Rate of weight change patterns",
                  "Circadian variation trends",
                  "Correlation with medication changes",
                  "Response to dietary adjustments",
                  "Comparison to baseline dry weight"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="bg-[#B187E8] rounded-full p-1 mr-3 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
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
      </section>

      {/* Specialized Solutions */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-[#2E1065] mb-12 text-center">Specialized Monitoring Solutions</h2>
        <div className="space-y-8">
          {[
            {
              title: "Heart Failure Management",
              description: "Early fluid retention detection with predictive alerts",
              features: [
                "Dry weight tracking",
                "Diuretic response analysis",
                "3-day weight trend forecasting",
                "Integrated with cardiac devices"
              ],
              image: "/assets/hf-weight-monitoring.jpg"
            },
            {
              title: "Bariatric Success Tracking",
              description: "Body composition analytics for surgical and non-surgical weight loss",
              features: [
                "Muscle mass preservation scoring",
                "Metabolic age tracking",
                "Plateau prediction",
                "Behavioral change feedback"
              ],
              image: "/assets/bariatric-tracking.jpg"
            }
          ].map((program, index) => (
            <div key={index} className="grid md:grid-cols-2 gap-8 bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#2E1065] mb-3">{program.title}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <ul className="space-y-2 mb-6">
                  {program.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-5 h-5 text-[#B187E8] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button text="Learn More" variant="outline" />
              </div>
              <div className="relative h-64 md:h-full">
                <Image 
                  src={program.image} 
                  alt={program.title} 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#2E1065] to-[#5B21B6] rounded-2xl p-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-6">Transform Weight Data Into Clinical Action</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Our intelligent weight monitoring solutions provide the insights you need to prevent complications and improve outcomes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            text="Request Demo" 
            variant="primary" 
            className="bg-white text-[#2E1065] hover:bg-gray-100 px-8 py-3 text-lg"
          />
          <Button 
            text="Download Case Studies" 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-[#2E1065] px-8 py-3 text-lg"
          />
        </div>
      </section>
    </SubPageLayout>
  );
};

export default WeightMonitoring;