"use client";

import Image from 'next/image';
import Button from '@/components/home/Button';
import Link from 'next/link';

const WeightMonitoring = () => {
  return (
    <main className="bg-white text-black">
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/Weight_Hero.png"
            alt="Weight Management"
            fill
            className="object-cover"
            priority
            quality={100}
          />
          {/* Left-side black gradient overlay */}
          {/* <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />\ */}
          <div className="absolute inset-0 bg-black/50" />
          {/* <div className="absolute inset-0 bg-gradient-to-t from-[\#29003C]/90 to-[#29003C]/70"></div> */}
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
              Advanced <span className="text-[#B187E8]">Weight Management</span> Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              Detect fluid retention early with our AI-powered monitoring system that identifies risks before they become emergencies.
            </p>
            {/* <div className="flex flex-wrap justify-center gap-4">
              <Button 
                text="See How It Works" 
                variant="primary" 
                className="px-8 py-3 text-lg"
              />
            </div> */}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="sticky top-20">
              <div className="relative h-[100%] w-full rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center">
                <Image
                  src="/assets/weight-graph.jpeg"
                  alt="Weight Data Visualization"
                  width={900}
                  height={400}
                  className="object-cover"
                  quality={100}
                />
              </div>
            </div>
            
            <div className="md:w-1/2 space-y-8">
              <div className="bg-[#F9F5FF] p-6 rounded-xl border-l-4 border-[#B187E8]">
                <h3 className="text-xl font-bold text-[#2E1065] mb-3">Understanding Edema</h3>
                <p className="text-gray-700">
                  Unexplained rapid weight gain may be the result of fluid retention and swelling, also known as edema, which can cause the limbs, hands, feet, face, or abdomen to appear swollen.
                </p>
              </div>
              
              <div className="bg-[#EFF6FF] p-6 rounded-xl border-l-4 border-blue-500">
                <h3 className="text-xl font-bold text-[#2E1065] mb-3">Complications of Edema</h3>
                <p className="text-gray-700">
                  If left untreated, can cause increasingly painful swelling, difficulty walking, stiffness of the joints and muscles, increased risk of skin infection and skin ulcers, decreased blood circulation, and decreased elasticity of arteries and veins.
                </p>
              </div>
              
              <div className="bg-[#FEF2F2] p-6 rounded-xl border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-[#2E1065] mb-3">Underlying Conditions</h3>
                <p className="text-gray-700">
                  Edema is not a disease, but rather a symptom that may indicate serious underlying systemic conditions such as congestive heart failure, chronic lung disease, lymphedema, kidney disease, or cirrhosis of the liver.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F9F5FF]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[#2E1065]">
              Transformative <span className="text-[#B187E8]">Weight Monitoring</span> Benefits
            </h2>
            <div className="w-20 h-1 bg-[#B187E8] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our 4G-enabled system delivers measurable improvements in patient outcomes
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {[
                {
                  title: "Early Fluid Retention Detection",
                  description: "Identify concerning weight patterns 48-72 hours before visible swelling occurs",
                  icon: (
                    <svg className="w-10 h-10 text-[#B187E8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  )
                },
                {
                  title: "Heart Failure Management",
                  description: "Congestive heart failure is one of the most common reasons for hospital admission",
                  icon: (
                    <svg className="w-10 h-10 text-[#B187E8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  )
                },
                {
                  title: "Medication Response Tracking",
                  description: "Monitor how weight changes in response to diuretics and other medications",
                  icon: (
                    <svg className="w-10 h-10 text-[#B187E8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )
                },
                {
                  title: "Patient-Generated Health Data",
                  description: "4G enabled weight scales allow patients to generate and share their health data electronically",
                  icon: (
                    <svg className="w-10 h-10 text-[#B187E8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  )
                }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-6 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#2E1065] mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="relative min-h-[300px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/assets/bpm-dashboard.jpeg"
                alt="Weight Monitoring Dashboard"
                fill
                className="object-contain"
                quality={100}
              />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div> */}
            </div>
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
      Ready to Revolutionize Patient Care?
    </h2>
    <p className="text-xl text-gray-800 mb-8 max-w-3xl mx-auto">
      Our RPM solution has been clinically proven to reduce systolic and
      diastolic blood pressure
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Link
        href="/demo"
        className="bg-[#270949] hover:bg-[#1f0636] text-white px-6 py-3 rounded-full transition font-semibold shadow-lg"
      >
        Schedule Consultation
      </Link>
    </div>
  </div>
</section>


    </main>
  );
};

export default WeightMonitoring;