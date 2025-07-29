'use client';
import SubPageLayout from '@/components/home/SubPageLayout';
import Image from 'next/image';
import Button from '@/components/home/Button';
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend
} from 'recharts';

// Sample Data Structures (replace later with real API data)
const riskTrendData = [
  { month: 'Jan', riskScore: 72 },
  { month: 'Feb', riskScore: 68 },
  { month: 'Mar', riskScore: 65 },
  { month: 'Apr', riskScore: 61 },
  { month: 'May', riskScore: 58 },
];

const billingData = [
  { month: 'Jan', amount: 120000 },
  { month: 'Feb', amount: 145000 },
  { month: 'Mar', amount: 158000 },
  { month: 'Apr', amount: 132000 },
  { month: 'May', amount: 166000 },
];

const pieData = [
  { name: 'Low Risk', value: 58 },
  { name: 'Moderate', value: 30 },
  { name: 'High Risk', value: 12 },
];

const COLORS = ['#A78BFA', '#7C3AED', '#4C1D95'];

const InsightsPage = () => {
  return (
    <SubPageLayout
      title="Data Insights"
      description="Actionable analytics for better patient outcomes and practice growth."
    >
      {/* Summary Metrics */}
      <section className="grid md:grid-cols-4 gap-6 mb-20">
        {[
          { label: "Active Patients", value: "—", unit: "", tooltip: "Total enrolled in RPM" },
          { label: "Avg. Risk Score", value: "—", unit: "", tooltip: "Across active patients" },
          { label: "30-Day Readmissions", value: "—", unit: "%", tooltip: "Hospital re-visits" },
          { label: "Last Month Billing", value: "—", unit: "PKR", tooltip: "RPM/CCM Total" }
        ].map((item, index) => (
          <div key={index} className="bg-white shadow rounded-xl p-6 text-center hover:shadow-md transition">
            <p className="text-sm text-gray-500 mb-1">{item.label}</p>
            <h3 className="text-2xl font-bold text-[#2E1065]">{item.value} {item.unit}</h3>
          </div>
        ))}
      </section>

      {/* Recharts Section */}
      <section className="grid md:grid-cols-2 gap-6 mb-20">
        {/* Line Chart */}
        <div className="bg-white rounded-xl p-6 shadow">
          <h3 className="text-lg font-semibold text-[#2E1065] mb-2">Avg. Risk Score Trend</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={riskTrendData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <CartesianGrid stroke="#f3f4f6" />
                <Line type="monotone" dataKey="riskScore" stroke="#7C3AED" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bar Chart */}
        <div className="bg-white rounded-xl p-6 shadow">
          <h3 className="text-lg font-semibold text-[#2E1065] mb-2">RPM Billing (Monthly)</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={billingData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <CartesianGrid stroke="#f3f4f6" />
                <Bar dataKey="amount" fill="#4C1D95" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="bg-white rounded-xl p-6 shadow md:col-span-2">
          <h3 className="text-lg font-semibold text-[#2E1065] mb-4 text-center">Patient Risk Distribution</h3>
          <div className="flex justify-center h-64">
            <ResponsiveContainer width="50%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Legend verticalAlign="bottom" height={36} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-[#2E1065] mb-12 text-center">Powerful Analytics Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Real-time Dashboards", icon: "📊", description: "Customizable views of patient data with drill-down capabilities." },
            { title: "Trend Analysis", icon: "📈", description: "Visualize patient progress over time with intuitive charts." },
            { title: "Risk Stratification", icon: "⚠️", description: "Identify high-risk patients with predictive algorithms." },
            { title: "Quality Metrics", icon: "🏆", description: "Track performance on key clinical quality measures." },
            { title: "Billing Reports", icon: "💰", description: "Generate RPM and CCM billing documentation automatically." },
            { title: "Custom Exports", icon: "📤", description: "Export data for further analysis in your preferred format." },
          ].map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg hover:bg-[#F9F5FF] transition">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-[#2E1065] mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Data Sources */}
      <section className="mb-20 max-w-3xl mx-auto">
        <details className="bg-white rounded-xl p-6 shadow">
          <summary className="font-semibold text-[#2E1065] cursor-pointer">
            Data Sources & Methodology
          </summary>
          <p className="mt-4 text-gray-600 text-sm">
            Insights are derived from EHR-integrated vitals, RPM device data, and patient-reported outcomes. 
            Predictive risk models are updated monthly based on clinical performance trends.
          </p>
        </details>
      </section>

      {/* What's Next */}
      <section className="text-center mb-20">
        <h2 className="text-2xl font-bold text-[#2E1065] mb-4">What’s Next in Insights?</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Soon you’ll be able to track real-time vitals, generate predictive alerts, and benchmark care quality against national standards.
        </p>
      </section>

      {/* CTA */}
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
