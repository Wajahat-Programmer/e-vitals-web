
"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Download, Printer } from "lucide-react";
import Head from "next/head";

const RPMReimbursementCalculator: React.FC = () => {
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

  // Memoized calculateReimbursement function based on HTML logic
  const calculateReimbursement = useCallback(() => {
    if (enrolled < 0 || newMonthly < 0 || pct54 < 0 || pct54 > 100 || pct57 < 0 || pct57 > 100 || avg58 < 0 || patients99091 < 0) {
      setError("Please enter valid numbers (percentages between 0-100, positive numbers for others).");
      setResults({ monthly: 0, annual: 0, arpu: 0, breakdown: [] });
      return;
    }

    setError("");

    // Calculate percentages (not used directly in current UI)

    // Claims calculation (can be decimals if not rounding)
    const c53 = Math.max(0, Math.floor(newMonthly));
    // let c54 = enrolled * pct54Decimal;
    let c54 = pct54;
    // let c57 = enrolled * pct57Decimal;
    let c57 = pct57;
    let c58 = avg58;       // patients with 1 extra 20-min unit
    let c58_2 = avg58_2;   // patients with 2 extra 20-min units
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
    const rev58 = c58 * rate58;       // 99458 (1 unit)
    const rev58_2 = c58_2 * rate58_2; // 99458 (2 units)
    const rev99091 = c99091 * rate99091;
    const monthly =  rev53 + rev54 + rev57 + rev58 + rev58_2+ rev99091;
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

  // Demo values function removed (unused)

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

  // Normalize numeric input to avoid leading zeros like "05" and handle empty
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
    results.breakdown.forEach((r: { code: string; claims: number; rate: number; subtotal: number }) => {
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
    <div className="relative min-h-screen bg-gradient-to-br from-white via-white to-purple-50 py-16">
      {/* SEO Meta Tags */}
      <Head>
        <title>eVitals - RPM Reimbursement Calculator</title>
        <meta
          name="description"
          content="Estimate your Remote Patient Monitoring (RPM) revenue with eVitals' reimbursement calculator. Input patient numbers and monitoring days to see potential earnings from CPT codes 99453, 99454, 99457, and 99458."
        />
        <meta
          name="keywords"
          content="RPM reimbursement calculator, remote patient monitoring, CPT codes, healthcare revenue, telehealth, eVitals"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://www.evitals.com/rpm-reimbursement-calculator" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "eVitals RPM Reimbursement Calculator",
              "description": "A tool to estimate revenue from Remote Patient Monitoring (RPM) using CPT codes, designed for healthcare providers.",
              "url": "https://www.evitals.com/rpm-reimbursement-calculator",
              "applicationCategory": "Medical",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              }
            }
          `}
        </script>
      </Head>

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/RPMcalhero.jpg"
            alt="RPM Calculator Hero Background"
            fill
            className="object-cover kenburns"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
        </div>
        <div className="relative z-10 w-full text-left pl-6 md:pl-12 lg:pl-20 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              RPM <span className="text-[#B187E8]">Reimbursement</span> Calculator
            </h1>
            <p className="text-white text-base md:text-lg mb-8 max-w-3xl">
              Discover the revenue potential of Remote Patient Monitoring (RPM) with eVitals&apos; comprehensive calculator. Input your practice&apos;s detailed metrics to estimate earnings from CPT codes 99453, 99454, 99457, and 99458.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-8 text-center">
            Calculate Your RPM Revenue
          </h2>
                      <p className="text-lg text-gray-800 mb-8 max-w-3xl mx-auto text-center">
              Use our comprehensive tool to estimate monthly and annual revenue from RPM services. Enter detailed patient metrics and custom rates to see how eVitals can boost your practice&apos;s financial performance.
            </p>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {/* Inputs Card */}
            <motion.div
              className="bg-white rounded-xl p-8 shadow-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-purple-900">Inputs</h3>
                <div className="flex gap-2">
                  {/* <button
                    onClick={useDemoValues}
                    className="text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-md transition-colors"
                  >
                    Demo Values
                  </button> */}
                  <button
                    onClick={resetCalculator}
                    className="text-sm bg-red-100 hover:bg-red-200 text-red-700 px-3 py-1 rounded-md transition-colors"
                  >
                    Reset
                  </button>
                </div>
              </div>

              <div className="space-y-6">
                {/* Patient Metrics */}
                {/* <div>
                  <h4 className="text-lg font-semibold text-purple-900 mb-4">Patient Metrics</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 min-h-[40px] leading-snug">
                        Total enrolled patients
                      </label>
                      <input
                        inputMode="numeric"
                        pattern="[0-9]*"
                        onKeyDown={(e)=> (e.key === 'ArrowUp' || e.key === 'ArrowDown') && e.preventDefault()}
                        value={enrolled}
                        onChange={(e) => setEnrolled(normalizeNumber(e.target.value, false))}
                        min="0"
                        className="w-full p-3 border border-purple-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B187E8]"
                        placeholder="e.g., 120"
                      />
                      <p className="text-xs text-gray-500 mt-1">Patients actively enrolled in RPM this month</p>
                    </div>
                    {/* <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 min-h-[40px] leading-snug">
                        New patient enrollments this month (for 99453)
                      </label>
                      <input
                        inputMode="numeric"
                        pattern="[0-9]*"
                        onKeyDown={(e)=> (e.key === 'ArrowUp' || e.key === 'ArrowDown') && e.preventDefault()}
                        value={newMonthly}
                        onChange={(e) => setNewMonthly(normalizeNumber(e.target.value, false))}
                        min="0"
                        className="w-full p-3 border border-purple-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B187E8]"
                        placeholder="e.g., 15"
                      />
                      <p className="text-xs text-gray-500 mt-1">One-time setup/education billed per newly enrolled patient</p>
                    </div>
                  </div>
                </div> */}

                {/* CPT Settings - compact rows */}
                <div>
                  <h4 className="text-lg font-semibold text-purple-900 mb-2">CPT Settings</h4>
                  <p className="text-xs text-gray-500 mb-3">Each row pairs the patient metric with its corresponding rate.</p>

                  <div className="space-y-3">
                    {/* 99453 - New enrollments + rate */}
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
                      </div>
                    </div>

                    {/* 99454 - % meeting + rate */}
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

                    {/* 99457 - % meeting + rate */}
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

                    {/* 99458 - avg units + rate */}
                    <div className="grid md:grid-cols-2 gap-3 items-start">
                      <div className="flex flex-col">
                        <label className="block text-sm font-medium text-gray-700 mb-1 min-h-[40px] leading-snug">99458 • Additional 20‑min 1 units per patient</label>
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
                      {/* 99458 - avg units + rate */}
                      <div className="grid md:grid-cols-2 gap-3 items-start">
                      <div className="flex flex-col">
                        <label className="block text-sm font-medium text-gray-700 mb-1 min-h-[40px] leading-snug">99458 • Additional 20‑min 2 units per patient</label>
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

                    {/* 99091 - patients + rate */}
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
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={roundClaims}
                      onChange={(e) => setRoundClaims(e.target.checked)}
                      className="rounded border-purple-300 text-[#B187E8] focus:ring-[#B187E8]"
                    />
                    <span className="text-sm text-gray-700">Round patient/claim counts to whole numbers</span>
                  </label>
                </div>
              </div>
            </motion.div>

            {/* Results Card */}
            <motion.div
              className="bg-white rounded-xl p-8 shadow-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
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
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="text-sm text-purple-600 font-medium">Monthly total</div>
                  <div className="text-2xl font-bold text-purple-900">${results.monthly.toLocaleString()}</div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="text-sm text-green-600 font-medium">Annualized (×12)</div>
                  <div className="text-2xl font-bold text-green-900">${results.annual.toLocaleString()}</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-sm text-blue-600 font-medium">Avg. revenue per patient/month</div>
                  <div className="text-2xl font-bold text-blue-900">${results.arpu.toFixed(2)}</div>
                </div>
              </div>

              {/* Breakdown Table */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-purple-900 mb-4">Breakdown by CPT Code</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-300">
                        <th className="text-left py-2 font-semibold text-gray-700">Code</th>
                        <th className="text-right py-2 font-semibold text-gray-700">Claims</th>
                        <th className="text-right py-2 font-semibold text-gray-700">Rate</th>
                        <th className="text-right py-2 font-semibold text-gray-700">Subtotal</th>
                      </tr>
                    </thead>
                    <tbody>
                      {results.breakdown.map((item, index) => (
                        <tr key={index} className="border-b border-gray-200">
                          <td className="py-2">
                            <div className="font-semibold text-purple-900">{item.code}</div>
                            <div className="text-xs text-gray-600">{item.label}</div>
                          </td>
                          <td className="text-right py-2">
                            {roundClaims ? item.claims.toLocaleString() : item.claims.toFixed(2)}
                          </td>
                          <td className="text-right py-2">${item.rate.toFixed(2)}</td>
                          <td className="text-right py-2 font-semibold">${item.subtotal.toLocaleString()}</td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr className="border-t-2 border-purple-300">
                        <td colSpan={3} className="py-2 font-bold text-purple-900">Total (monthly)</td>
                        <td className="text-right py-2 font-bold text-purple-900">${results.monthly.toLocaleString()}</td>
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
            </motion.div>
          </div>

          <Image
            src="/assets/calculator.jpg"
            alt="RPM Calculator Illustration"
            width={800}
            height={400}
            className="mx-auto rounded-lg shadow-md mt-8"
          />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-8 text-center">
            How the Calculator Works
          </h2>
                      <p className="text-lg text-gray-800 mb-8 max-w-3xl mx-auto text-center">
              Our calculator uses standard Medicare CPT code rates to estimate RPM revenue based on your detailed input. Here&apos;s how it breaks down:
            </p>
          <div className="grid md:grid-cols-5 gap-6">
            <motion.div
              className="bg-white p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-2xl font-bold text-purple-900 mb-2">99453</div>
              <h3 className="text-lg font-semibold text-purple-900 mb-2">Setup/Education</h3>
              <p className="text-gray-700 text-sm">
                New patients enrolled this month × entered rate (one‑time per patient).
              </p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-2xl font-bold text-purple-900 mb-2">99454</div>
              <h3 className="text-lg font-semibold text-purple-900 mb-2">Device Supply</h3>
              <p className="text-gray-700 text-sm">
                Enrolled × % meeting ≥16 days of data × rate (billed once each eligible month).
              </p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-2xl font-bold text-purple-900 mb-2">99457</div>
              <h3 className="text-lg font-semibold text-purple-900 mb-2">First 20 Min</h3>
              <p className="text-gray-700 text-sm">
                Enrolled × % meeting ≥20 minutes × rate (billed once per eligible month).
              </p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="text-2xl font-bold text-purple-900 mb-2">99458</div>
              <h3 className="text-lg font-semibold text-purple-900 mb-2">Additional Time</h3>
              <p className="text-gray-700 text-sm">
                99457 patients × average extra 20‑min units × rate (can be 0, 1, 2… units).
              </p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <div className="text-2xl font-bold text-purple-900 mb-2">99091</div>
              <h3 className="text-lg font-semibold text-purple-900 mb-2">Physiologic Data</h3>
              <p className="text-gray-700 text-sm">
                Number of patients × rate (collection and interpretation of physiologic data per month).
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-8 text-center">
            Why Use eVitals for RPM Reimbursement
          </h2>
          <p className="text-lg text-gray-800 mb-8 max-w-3xl mx-auto text-center">
            eVitals’ RPM platform maximizes your practice’s revenue while improving patient outcomes. Here’s how we help:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Accurate Billing",
                description:
                  "Automate billing for CPT codes 99453, 99454, 99457, and 99458 with audit-ready reports, reducing claim denials by 15%.",
                image: "/assets/AccurateBilling.jpg",
              },
              {
                title: "Revenue Growth",
                description:
                  "Practices see an average revenue increase of $3,500 per physician monthly with our optimized RPM workflows.",
                image: "/assets/RevenueGrowth.jpg",
              },
              {
                title: "Time Savings",
                description:
                  "Automated data collection and EHR integration save up to 18 hours per week, allowing focus on patient care.",
      image: "/assets/TimeSaving.jpg",
              },
              {
                title: "Patient Compliance",
                description:
                  "User-friendly devices and educational resources achieve 80% adherence, enhancing outcomes and reimbursement.",
      image: "/assets/patient-W-Watch.jpg",
              },
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="relative w-full h-48 mb-4">
                  <Image
                    src={benefit.image}
                    alt={benefit.title}
                    fill
                    className="rounded-md object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
                <h3 className="text-lg font-semibold text-purple-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-6">
            Maximize Your RPM Revenue with eVitals
          </h2>
          <p className="text-lg text-gray-800 mb-4 max-w-3xl mx-auto">
            Unlock the full financial potential of Remote Patient Monitoring with eVitals’ comprehensive platform. Our team customizes solutions to your practice’s needs, ensuring seamless integration and maximum reimbursement.
          </p>
          <p className="text-lg text-gray-800 mb-8 max-w-3xl mx-auto">
            Schedule a personalized demo today to see how eVitals can transform your practice’s revenue and patient care.
          </p>
          <Link
            href="/contact"
            className="bg-[#36036B] hover:bg-[#4b0d8d] text-white text-base font-semibold px-6 py-3 rounded-md shadow-md transition duration-300 inline-block"
          >
            Schedule a FREE Demo →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default RPMReimbursementCalculator;
