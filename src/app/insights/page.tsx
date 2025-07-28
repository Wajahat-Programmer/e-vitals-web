import SubPageLayout from '@/components/home/SubPageLayout';
import Image from 'next/image';
import Button from '@/components/home/Button';

const InsightsPage = () => {
  return (
    <SubPageLayout 
      title="Data Insights" 
      description="Actionable analytics for better patient outcomes and practice growth."
    >
      {/* Insights Intro */}
      <section className="mb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-lg">
            <Image 
              src="/assets/data-analytics.jpg" 
              alt="Data Analytics Dashboard" 
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#2E1065] mb-6">Turn Data Into Better Decisions</h2>
            <p className="text-lg text-gray-600 mb-6">
              Our advanced analytics platform transforms patient health data into actionable insights, 
              helping you identify trends, predict risks, and demonstrate value.
            </p>
            <div className="flex gap-4">
              <Button text="View Demo" variant="primary" />
              <Button text="Download Report" variant="outline" />
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Features */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-[#2E1065] mb-12 text-center">Powerful Analytics Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Real-time Dashboards",
              description: "Customizable views of patient data with drill-down capabilities.",
              icon: "📊"
            },
            {
              title: "Trend Analysis",
              description: "Visualize patient progress over time with intuitive charts.",
              icon: "📈"
            },
            {
              title: "Risk Stratification",
              description: "Identify high-risk patients with predictive algorithms.",
              icon: "⚠️"
            },
            {
              title: "Quality Metrics",
              description: "Track performance on key clinical quality measures.",
              icon: "🏆"
            },
            {
              title: "Billing Reports",
              description: "Generate RPM and CCM billing documentation automatically.",
              icon: "💰"
            },
            {
              title: "Custom Exports",
              description: "Export data for further analysis in your preferred format.",
              icon: "📤"
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-[#2E1065] mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-[#2E1065] mb-12 text-center">Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Reducing Heart Failure Readmissions",
              outcome: "38% reduction in 30-day readmissions",
              description: "How Cardiology Associates leveraged our insights to improve CHF management.",
              image: "/assets/heart-case.jpg"
            },
            {
              title: "Improving Diabetes Outcomes",
              outcome: "1.2% average HbA1c reduction",
              description: "A primary care network's journey to better glycemic control.",
              image: "/assets/diabetes-case.jpg"
            }
          ].map((caseStudy, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="relative h-48">
                <Image 
                  src={caseStudy.image} 
                  alt={caseStudy.title} 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-[#2E1065] mb-2">{caseStudy.title}</h3>
                <p className="text-[#B187E8] font-medium mb-4">{caseStudy.outcome}</p>
                <p className="text-gray-600 mb-6">{caseStudy.description}</p>
                <Button 
                  text="Read Case Study" 
                  variant="outline" 
                  className="border-[#B187E8] text-[#B187E8] hover:bg-[#B187E8] hover:text-white"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Data Security */}
      <section className="bg-[#FAFAFB] rounded-2xl p-12 mb-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#2E1065] mb-6">Enterprise-grade Security</h2>
              <p className="text-gray-600 mb-6">
                Your patient data is protected with the highest standards of security and compliance.
              </p>
              <ul className="space-y-4">
                {[
                  "HIPAA compliant",
                  "SOC 2 Type II certified",
                  "End-to-end encryption",
                  "Role-based access control",
                  "Audit logging"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-[#B187E8] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-64">
              <Image 
                src="/assets/data-security.jpg" 
                alt="Data Security" 
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Webinar Section */}
      <section className="mb-20">
        <div className="grid md:grid-cols-2 gap-12 bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-12">
            <h2 className="text-3xl font-bold text-[#2E1065] mb-6">Upcoming Webinar</h2>
            <p className="text-xl text-gray-600 mb-4 font-medium">
              "Maximizing RPM Reimbursement: A Data-Driven Approach"
            </p>
            <p className="text-gray-600 mb-6">
              Join our experts as they share strategies for optimizing your remote patient monitoring program's financial performance while improving care quality.
            </p>
            <div className="space-y-2 mb-8">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-[#B187E8] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>June 15, 2023 | 1:00 PM EST</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-[#B187E8] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>60 minutes</span>
              </div>
            </div>
            <Button text="Register Now" variant="primary" />
          </div>
          <div className="relative h-96">
            <Image 
              src="/assets/webinar.jpg" 
              alt="Webinar" 
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center">
        <h2 className="text-3xl font-bold text-[#2E1065] mb-6">Ready to Unlock Your Data's Potential?</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Discover how our analytics can transform your practice's approach to patient care.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button text="Request Demo" variant="primary" />
          <Button text="Browse Resources" variant="outline" />
        </div>
      </section>
    </SubPageLayout>
  );
};

export default InsightsPage;