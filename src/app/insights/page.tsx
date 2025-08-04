'use client';
import Image from 'next/image';
import Button from '@/components/home/Button';
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend
} from 'recharts';
import Link from 'next/link';

// Dummy data
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
    <main className="bg-white text-black">

      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden rounded-b-3xl">
        <Image
          src="/assets/data_insights_hero.jpg"
          alt="Insights Background"
          fill
          className="object-cover opacity-80"
          priority
        />
        
        <div className="absolute inset-0 bg-black/50" />
        {/* <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-white/40 z-10"></div> */}
        <div className="absolute z-20 inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Data Insights
          </h1>
          <p className="text-lg text-white md:text-xl text-gray-700 max-w-2xl">
            Actionable analytics for better patient outcomes and practice growth.
          </p>
        </div>
      </section>

      {/* Summary Metrics */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-4 gap-6">
        {[
          { label: "Active Patients", value: "187", unit: "" },
          { label: "Avg. Risk Score", value: "3.8/5", unit: "" },
          { label: "30-Day Readmissions", value: "4.2", unit: "%" },
          { label: "Last Month Billing", value: "7,580", unit: "$" },
        ].map((item, index) => (
          <div key={index} className="bg-white shadow rounded-xl p-6 text-center hover:shadow-md transition">
            <p className="text-sm text-gray-500 mb-1">{item.label}</p>
            <h3 className="text-2xl font-bold text-[#2E1065]">{item.value} {item.unit}</h3>
          </div>
        ))}
      </section>

      {/* Charts */}
      <section className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-6 mb-20">
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

      {/* Data Sources */}
      {/* <section className="max-w-3xl mx-auto px-4 mb-20">
        <details className="bg-white rounded-xl p-6 shadow">
          <summary className="font-semibold text-[#2E1065] cursor-pointer">
            Data Sources & Methodology
          </summary>
          <p className="mt-4 text-gray-600 text-sm">
            Insights are derived from EHR-integrated vitals, RPM device data, and patient-reported outcomes. 
            Predictive risk models are updated monthly based on clinical performance trends.
          </p>
        </details>
      </section> */}

      {/* CTA */}
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
      Let’s Make Care Easier — Together
    </h2>
    <p className="text-xl text-gray-800 mb-8 max-w-3xl mx-auto">
      Want to see how E-Vitals can simplify patient monitoring, reduce
      staff load, and grow your practice?
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Link
        href="/demo"
        className="bg-[#270949] hover:bg-[#1e0635] text-white px-6 py-3 rounded-full hover:opacity-90 transition font-semibold shadow-lg"
      >
        Schedule Consultation
      </Link>
    </div>
  </div>
</section>

    </main>
  );
};

export default InsightsPage;
