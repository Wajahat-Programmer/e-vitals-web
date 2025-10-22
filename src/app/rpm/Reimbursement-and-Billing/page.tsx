"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { Download, Printer } from "lucide-react";
import CTASection from "../../../components/home/CTASection";
import { ChevronsRight } from 'lucide-react';
import Link from "next/link";

const RPMCalculator = () => {
  const [isVisible, setIsVisible] = useState(false);

  // State for input fields and results
  const [enrolled, setEnrolled] = useState<number>(0);
  const [newMonthly, setNewMonthly] = useState<number>(0);
  const [pct54, setPct54] = useState<number>(0);
  const [pct57, setPct57] = useState<number>(0);
  const [avg58, setAvg58] = useState<number>(0);
  const [avg58_2, setAvg58_2] = useState<number>(0);
  const [rate53, setRate53] = useState<number>(0);
  const [rate54, setRate54] = useState<number>(0);
  const [rate57, setRate57] = useState<number>(0);
  const [rate58, setRate58] = useState<number>(0);
  const [rate58_2, setRate58_2] = useState<number>(0);
  const [patients99091, setPatients99091] = useState<number>(0);
  const [rate99091, setRate99091] = useState<number>(0);
  const [roundClaims, setRoundClaims] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [results, setResults] = useState<{
    monthly: number;
    annual: number;
    arpu: number;
    breakdown: Array<{
      code: string;
      label: string;
      claims: number;
      rate: number;
      subtotal: number;
    }>;
  }>({
    monthly: 0,
    annual: 0,
    arpu: 0,
    breakdown: [],
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Memoized calculateReimbursement function
  const calculateReimbursement = useCallback(() => {
    if (enrolled < 0 || newMonthly < 0 || pct54 < 0 || pct54 > 100 || pct57 < 0 || pct57 > 100 || avg58 < 0 || patients99091 < 0) {
      setError("Please enter valid numbers (percentages between 0-100, positive numbers for others).");
      setResults({ monthly: 0, annual: 0, arpu: 0, breakdown: [] });
      return;
    }

    setError("");

    // Claims calculation
    const c53 = Math.max(0, Math.floor(newMonthly));
    let c54 = pct54;
    let c57 = pct57;
    let c58 = avg58;
    let c58_2 = avg58_2;
    const c99091 = Math.max(0, Math.floor(patients99091));

    if (roundClaims) {
      c54 = Math.round(c54);
      c57 = Math.round(c57);
      c58 = Math.round(c58);
      c58_2 = Math.round(c58_2);
    }

    // Revenue calculation
    const rev53 = c53 * rate53;
    const rev54 = c54 * rate54;
    const rev57 = c57 * rate57;
    const rev58 = c58 * rate58; //99458 (1 Unit)
    const rev58_2 = c58_2 * rate58_2;
    const rev99091 = c99091 * rate99091;
    const monthly = rev53 + rev54 + rev57 + rev58 + rev58_2 + rev99091;
    const anual = rev54 + rev57 + rev58 + rev58_2 + rev99091;
    const annual = rev53 + anual * 12;
    const arpu = enrolled > 0 ? monthly / enrolled : 0;

    // Breakdown for display
    const breakdown = [
      {
        code: '99453',
        label: 'Setup/education (one-time per new patient)',
        claims: c53,
        rate: rate53,
        subtotal: rev53,
      },
      {
        code: '99454',
        label: 'Device supply with daily recordings (per month)',
        claims: c54,
        rate: rate54,
        subtotal: rev54,
      },
      {
        code: '99457',
        label: 'First 20 min clinical management (per month)',
        claims: c57,
        rate: rate57,
        subtotal: rev57,
      },
      {
        code: '99458 (1 unit)',
        label: 'Each additional 20 min (per month)',
        claims: c58,
        rate: rate58,
        subtotal: rev58,
      },
      {
        code: '99458 (2 units)',
        label: 'Each additional 40 min (per month)',
        claims: c58_2,
        rate: rate58_2,
        subtotal: rev58_2,
      },
      {
        code: '99091',
        label: 'Collection and interpretation of physiologic data (per month)',
        claims: c99091,
        rate: rate99091,
        subtotal: rev99091,
      },
    ];

    setResults({
      monthly: Math.round(monthly),
      annual: Math.round(annual),
      arpu: Math.round(arpu * 100) / 100,
      breakdown,
    });
  }, [enrolled, newMonthly, pct54, pct57, avg58, avg58_2, rate53, rate54, rate57, rate58, rate58_2, patients99091, rate99091, roundClaims]);

  // Run calculation when any input changes
  useEffect(() => {
    calculateReimbursement();
  }, [calculateReimbursement]);

  // Reset function
  const resetCalculator = () => {
    setEnrolled(0);
    setNewMonthly(0);
    setPct54(0);
    setPct57(0);
    setAvg58(0);
    setAvg58_2(0);
    setRate53(0);
    setRate54(0);
    setRate57(0);
    setRate58(0);
    setRate58_2(0);
    setPatients99091(0);
    setRate99091(0);
    setRoundClaims(false);
  };

  // Normalize numeric input
  const normalizeNumber = (value: string, allowDecimal: boolean) => {
    if (value === "" || value === "-") return 0;
    const num = allowDecimal ? parseFloat(value) : parseInt(value, 10);
    return Number.isFinite(num) ? num : 0;
  };

  // Export CSV function
  const exportCSV = () => {
    const header = ['Metric', 'Value'];
    const lines = [header.join(',')];
    const add = (k: string, v: string | number) => lines.push(`${k},${String(v).replace(/,/g, '')}`);

    add('Total enrolled patients', enrolled);
    add('New enrollments (99453)', newMonthly);
    add('% meeting 99454', pct54.toFixed(1) + '%');
    add('% meeting 99457', pct57.toFixed(1) + '%');
    add('Avg extra 99458 units per 99457 pt', avg58);
    add('Patients for 99091', patients99091);
    results.breakdown.forEach((r) => {
      add(`${r.code} claims`, r.claims);
      add(`${r.code} rate`, r.rate);
      add(`${r.code} subtotal`, r.subtotal.toFixed(2));
    });
    add('Monthly total', results.monthly.toFixed(2));
    add('Annualized (x12)', results.annual.toFixed(2));
    add('Avg revenue per enrolled patient / month', results.arpu.toFixed(2));

    const blob = new Blob([lines.join('\n')], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'rpm_reimbursement_calc.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
    <section className="relative w-full overflow-hidden bg-white pt-4 md:pt-6 lg:pt-10 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center min-h-[80vh] md:min-h-[85vh]">
          {/* Left Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-[#0B2B5C]">
              RPM <span className="text-[#00d4ff]">Reimbursement</span>
              <span className="block mt-2">Calculator</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700 leading-relaxed">
              Discover the Financial Impact of Remote Patient Monitoring (RPM) with eVitals' comprehensive calculator. Input your practice's detailed metrics to estimate monthly revenue from RPM CPT codes 99453, 99454, 99457, and 99458.
            </p>
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
              <Link
                  href="/demo"
                  className="group bg-[#5ce1e6] hover:bg-[#1faaaf] text-white text-base font-semibold px-6 py-3 rounded-md shadow-md transition-all duration-300 inline-flex items-center gap-2 whitespace-nowrap flex-nowrap min-w-0"
                >
                  Request a Demo
                  <ChevronsRight size={20} className="transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0" />
                </Link>
                <Link
                  href="/rpm/RPMSoftware"
                  className="bg-[#012c66] hover:bg-[#02224d] text-white backdrop-blur px-6 py-3 rounded-md text-base font-semibold transition inline-flex gap-2 flex-nowrap whitespace-nowrap"
                >
                  See Sample Billing Report
                  <ChevronsRight size={20} className="transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0" />
                </Link>
            </div>
          </div>

          {/* Right Side - Background Image */}
          <div className="relative h-full w-full transition-all duration-1000 delay-300 rounded-4xl">
            {/* Background Image Container */}
            <div className="absolute inset-0 -right-20 -top-10 -bottom-10 z-0">
              <Image
                src="/assets/RPM Calculator.png"
                alt="RPM Calculator Background"
                fill
                className="object-contain rounded-4xl ml-15"
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Calculator Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0B1F3F] mb-4">
              Calculate Your RPM Revenue
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Use our comprehensive tool to estimate monthly and annual revenue from RPM services. Enter detailed patient metrics and custom rates to see how eVitals can boost your practice's financial performance.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {/* Inputs Card */}
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-purple-900">Inputs</h3>
              <div className="flex gap-2">
                <button
                  onClick={resetCalculator}
                  className="text-sm bg-red-100 hover:bg-red-200 text-red-700 px-3 py-1 rounded-md transition-colors"
                >
                  Reset
                </button>
              </div>
            </div>

            <div className="space-y-6">
              {/* Total Enrolled Patients */}
              {/* <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Total enrolled patients</label>
                <input
                  type="number"
                  value={enrolled || ''}
                  onChange={(e) => setEnrolled(normalizeNumber(e.target.value, false))}
                  min="0"
                  className="w-full p-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="e.g., 100"
                />
              </div> */}

              {/* CPT Settings */}
              <div>
                <h4 className="text-lg font-semibold text-purple-900 mb-2">CPT Settings</h4>
                <p className="text-sm text-gray-500 mb-3">Each row pairs the patient metric with its corresponding rate.</p>

                <div className="space-y-3">
                  {/* 99453 */}
                  <div className="grid md:grid-cols-2 gap-3 items-start">
                    <div className="flex flex-col">
                      <label className="block text-sm font-medium text-gray-700 mb-1 min-h-[40px] leading-snug">99453 • New enrollments this month</label>
                      <input
                        inputMode="numeric"
                          pattern="[0-9]*"
                          onKeyDown={(e)=> (e.key === 'ArrowUp' || e.key === 'ArrowDown') && e.preventDefault()}
                          value={newMonthly}
                          onChange={(e) => setNewMonthly(normalizeNumber(e.target.value, false))}
                          min="0"
                          className="w-full p-2.5 border border-purple-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B187E8]"
                          placeholder="e.g., 12"
                      />
                      <p className="text-xs text-gray-500 mt-1">One-time setup/education billed per newly enrolled patient</p>
                    </div>
                    <div className="flex flex-col">
                      <label className="block text-sm font-medium text-gray-700 mb-1 min-h-[40px] leading-snug">Rate for 99453</label>
                      <input
                        inputMode="decimal"
                          pattern="[0-9]*[.,]?[0-9]*"
                          value={rate53}
                          onChange={(e) => setRate53(normalizeNumber(e.target.value, true))}
                          min="0"
                          step="0.01"
                          className="w-full p-2.5 border border-purple-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B187E8]"
                          placeholder="e.g., 20.00"
                      />
                      <div className="h-5 mt-2"></div>
                    </div>
                  </div>

                  {/* 99454 */}
                  <div className="grid md:grid-cols-2 gap-3 items-start">
                    <div className="flex flex-col">
                      <label className="block text-sm font-medium text-gray-700 mb-1 min-h-[40px] leading-snug">99454 • Patients meeting ≥16 days data</label>
                      <input
                        inputMode="numeric"
                          pattern="[0-9]*"
                          onKeyDown={(e)=> (e.key === 'ArrowUp' || e.key === 'ArrowDown') && e.preventDefault()}
                          value={pct54}
                          onChange={(e) => setPct54(normalizeNumber(e.target.value, false))}
                          min="0"
                          max="100"
                          className="w-full p-2.5 border border-purple-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B187E8]"
                          placeholder="e.g., 85"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="block text-sm font-medium text-gray-700 mb-1 min-h-[40px] leading-snug">Rate for 99454</label>
                      <input
                        inputMode="decimal"
                          pattern="[0-9]*[.,]?[0-9]*"
                          value={rate54}
                          onChange={(e) => setRate54(normalizeNumber(e.target.value, true))}
                          min="0"
                          step="0.01"
                          className="w-full p-2.5 border border-purple-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B187E8]"
                          placeholder="e.g., 50.00"
                      />
                    </div>
                  </div>

                  {/* 99457 */}
                  <div className="grid md:grid-cols-2 gap-3 items-start">
                    <div className="flex flex-col">
                      <label className="block text-sm font-medium text-gray-700 mb-1 min-h-[40px] leading-snug">99457 • Patients meeting ≥20 min</label>
                      <input
                        inputMode="numeric"
                          pattern="[0-9]*"
                          onKeyDown={(e)=> (e.key === 'ArrowUp' || e.key === 'ArrowDown') && e.preventDefault()}
                          value={pct57}
                          onChange={(e) => setPct57(normalizeNumber(e.target.value, false))}
                          min="0"
                          max="100"
                          className="w-full p-2.5 border border-purple-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B187E8]"
                          placeholder="e.g., 60"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="block text-sm font-medium text-gray-700 mb-1 min-h-[40px] leading-snug">Rate for 99457</label>
                      <input
                        inputMode="decimal"
                          pattern="[0-9]*[.,]?[0-9]*"
                          value={rate57}
                          onChange={(e) => setRate57(normalizeNumber(e.target.value, true))}
                          min="0"
                          step="0.01"
                          className="w-full p-2.5 border border-purple-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B187E8]"
                          placeholder="e.g., 51.00"
                      />
                    </div>
                  </div>

                  {/* 99458 (1 unit) */}
                  <div className="grid md:grid-cols-2 gap-3 items-start">
                    <div className="flex flex-col">
                      <label className="block text-sm font-medium text-gray-700 mb-1 min-h-[40px] leading-snug">99458 • Additional 20-min 1 units per patient</label>
                      <input
                        inputMode="decimal"
                          pattern="[0-9]*[.,]?[0-9]*"
                          onKeyDown={(e)=> (e.key === 'ArrowUp' || e.key === 'ArrowDown') && e.preventDefault()}
                          value={avg58}
                          onChange={(e) => setAvg58(normalizeNumber(e.target.value, true))}
                          min="0"
                          step="0.1"
                          className="w-full p-2.5 border border-purple-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B187E8]"
                          placeholder="e.g., 0.35"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="block text-sm font-medium text-gray-700 mb-1 min-h-[40px] leading-snug">Rate for 99458</label>
                      <input
                        inputMode="decimal"
                          pattern="[0-9]*[.,]?[0-9]*"
                          value={rate58}
                          onChange={(e) => setRate58(normalizeNumber(e.target.value, true))}
                          min="0"
                          step="0.01"
                          className="w-full p-2.5 border border-purple-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B187E8]"
                          placeholder="e.g., 42.00"
                      />
                    </div>
                  </div>

                  {/* 99458 (2 units) */}
                  <div className="grid md:grid-cols-2 gap-3 items-start">
                    <div className="flex flex-col">
                      <label className="block text-sm font-medium text-gray-700 mb-1 min-h-[40px] leading-snug">99458 • Additional 20-min 2 units per patient</label>
                      <input
                        inputMode="decimal"
                          pattern="[0-9]*[.,]?[0-9]*"
                          onKeyDown={(e)=> (e.key === 'ArrowUp' || e.key === 'ArrowDown') && e.preventDefault()}
                          value={avg58_2}
                          onChange={(e) => setAvg58_2(normalizeNumber(e.target.value, true))}
                          min="0"
                          step="0.1"
                          className="w-full p-2.5 border border-purple-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B187E8]"
                          placeholder="e.g., 0.35"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="block text-sm font-medium text-gray-700 mb-1 min-h-[40px] leading-snug">Rate for 99458</label>
                      <input
                        inputMode="decimal"
                          pattern="[0-9]*[.,]?[0-9]*"
                          value={rate58_2}
                          onChange={(e) => setRate58_2(normalizeNumber(e.target.value, true))}
                          min="0"
                          step="0.01"
                          className="w-full p-2.5 border border-purple-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B187E8]"
                          placeholder="e.g., 42.00"
                      />
                    </div>
                  </div>

                  {/* 99091 */}
                  <div className="grid md:grid-cols-2 gap-3 items-start">
                    <div className="flex flex-col">
                      <label className="block text-sm font-medium text-gray-700 mb-1 min-h-[40px] leading-snug">99091 • Number of patients</label>
                      <input
                        inputMode="numeric"
                          pattern="[0-9]*"
                          onKeyDown={(e)=> (e.key === 'ArrowUp' || e.key === 'ArrowDown') && e.preventDefault()}
                          value={patients99091}
                          onChange={(e) => setPatients99091(normalizeNumber(e.target.value, false))}
                          min="0"
                          className="w-full p-2.5 border border-purple-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B187E8]"
                          placeholder="e.g., 25"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="block text-sm font-medium text-gray-700 mb-1 min-h-[40px] leading-snug">Rate for 99091</label>
                      <input
                        inputMode="decimal"
                          pattern="[0-9]*[.,]?[0-9]*"
                          value={rate99091}
                          onChange={(e) => setRate99091(normalizeNumber(e.target.value, true))}
                          min="0"
                          step="0.01"
                          className="w-full p-2.5 border border-purple-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B187E8]"
                          placeholder="e.g., 35.00"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Options */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={roundClaims}
                    onChange={(e) => setRoundClaims(e.target.checked)}
                    className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                  />
                  <span className="text-sm text-gray-700">Round patient/claim counts to whole numbers</span>
                </label>
              </div>
            </div>
          </div>

            {/* Results Card */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-purple-900">Results</h3>
                <div className="flex gap-2">
                  <button
                    onClick={exportCSV}
                    className="text-sm bg-blue-100 hover:bg-blue-200 text-blue-700 px-3 py-1 rounded-md transition-colors flex items-center gap-1"
                  >
                    <Download className="w-3 h-3" />
                    Export CSV
                  </button>
                  <button
                    onClick={() => window.print()}
                    className="text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-md transition-colors flex items-center gap-1"
                  >
                    <Printer className="w-3 h-3" />
                    Print
                  </button>
                </div>
              </div>

              {error && <p className="text-red-600 text-center mb-4">{error}</p>}

              {/* Key Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <div className="text-sm text-purple-600 font-medium">Monthly total</div>
                  <div className="text-2xl font-bold text-purple-900">${results.monthly.toLocaleString()}</div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <div className="text-sm text-green-600 font-medium">Annualized (×12)</div>
                  <div className="text-2xl font-bold text-green-900">${results.annual.toLocaleString()}</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <div className="text-sm text-blue-600 font-medium">Avg. revenue per patient/month</div>
                  <div className="text-2xl font-bold text-blue-900">${results.arpu.toFixed(2)}</div>
                </div>
              </div>

              {/* Breakdown Table */}
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h4 className="text-lg font-semibold text-purple-900 mb-4">Breakdown by CPT Code</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-300">
                        <th className="text-left py-3 font-semibold text-gray-700">Code</th>
                        <th className="text-right py-3 font-semibold text-gray-700">Claims</th>
                        <th className="text-right py-3 font-semibold text-gray-700">Rate</th>
                        <th className="text-right py-3 font-semibold text-gray-700">Subtotal</th>
                      </tr>
                    </thead>
                    <tbody>
                      {results.breakdown.map((item, index) => (
                        <tr key={index} className="border-b border-gray-200">
                          <td className="py-3">
                            <div className="font-semibold text-purple-900">{item.code}</div>
                            <div className="text-xs text-gray-600">{item.label}</div>
                          </td>
                          <td className="text-right py-3">
                            {roundClaims ? item.claims.toLocaleString() : item.claims.toFixed(2)}
                          </td>
                          <td className="text-right py-3">${item.rate.toFixed(2)}</td>
                          <td className="text-right py-3 font-semibold">${item.subtotal.toLocaleString()}</td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr className="border-t-2 border-purple-300">
                        <td colSpan={3} className="py-3 font-bold text-purple-900">Total (monthly)</td>
                        <td className="text-right py-3 font-bold text-purple-900">${results.monthly.toLocaleString()}</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>

              {/* Warnings */}
              <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <strong>Notes:</strong> This tool is for planning only. Actual coverage, documentation requirements, time thresholds, and rates vary by payer and locality. Enter your own rates; demo values are placeholders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Calculator Works */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#0B1F3F] mb-3">
              How the Calculator Works
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our calculator uses standard Medicare CPT code rates to estimate RPM revenue based on your detailed input. Here's how it breaks down:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Image Card 1 */}
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img 
                src="/api/placeholder/500/300" 
                alt="Professional calculating"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <div className="bg-blue-600 inline-block px-3 py-1 rounded text-sm font-bold mb-2">99453</div>
                  <h3 className="text-xl font-bold mb-1">Setup/Education</h3>
                  <p className="text-sm text-white/90">Initial setup and patient education (one-time per new RPM patient - includes (one-time fee)</p>
                  <div className="mt-2">
                    <span className="text-2xl font-bold">• 99454</span>
                  </div>
                  <p className="text-sm text-white/90 mt-1">Device Supply</p>
                  <p className="text-xs text-white/80">Supply and monitoring of remote devices with daily recording or programmed alerts (per 30 days/16+ days of data - one billable unit per calendar month)</p>
                </div>
              </div>
            </div>

            {/* Image Card 2 */}
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img 
                src="/api/placeholder/500/300" 
                alt="Calculator and stethoscope"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <div className="bg-purple-600 inline-block px-3 py-1 rounded text-sm font-bold mb-2">99457</div>
                  <h3 className="text-xl font-bold mb-1">First 20 Min</h3>
                  <p className="text-sm text-white/90">Interactive communication (first 20 minutes per calendar month, one billable unit per calendar month)</p>
                  <div className="mt-2">
                    <span className="text-2xl font-bold">• 99458</span>
                  </div>
                  <p className="text-sm text-white/90 mt-1">Additional Time</p>
                  <p className="text-xs text-white/80">Additional interactive communication every 20 min (up to 2 units)</p>
                  <div className="mt-2">
                    <span className="text-2xl font-bold">• 99091</span>
                  </div>
                  <p className="text-sm text-white/90 mt-1">Physiological Data</p>
                  <p className="text-xs text-white/80">Number of patients with collection and interpretation of physiological data (first 30 monthly)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Use eVitals */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#0B1F3F] mb-3">
              Why Use eVitals for RPM Reimbursement
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              eVitals' RPM platform maximizes your practice's revenue while improving patient outcomes. Here's how we help:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Accurate Billing",
                desc: "Streamline billing for CPT codes like 99453, 99454, 99457, and 99458 with audit-ready reports, ensuring compliance and accuracy to maximize reimbursement by 15%."
              },
              {
                title: "Revenue Growth",
                desc: "Generate an average increase of $3,500 per physician monthly with automated, HIPAA-compliant workflows."
              },
              {
                title: "Time Savings",
                desc: "Automated reporting and integration save up to 15 hours per week, allowing your team to focus on patient care."
              },
              {
                title: "Patient Compliance",
                desc: "User-friendly devices and proactive alerts achieve 80% adherence, enhancing outcomes and enabling sustainable reimbursement."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 shadow-md border border-gray-200 hover:shadow-lg transition-all">
                <h3 className="text-lg font-bold text-[#0B1F3F] mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

     
    </main>
  );
};

export default RPMCalculator;