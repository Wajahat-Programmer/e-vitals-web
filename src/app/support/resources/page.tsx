// app/support/resources/page.tsx

"use client";

import React from "react";
import Link from "next/link";
import { FileText } from "lucide-react";

export default function ResourcesPage() {
  const pdfFiles = [
    { name: "Business Associate Agreement", url: "/pdfs/Business-Associate-Agreement.pdf" },
    { name: "User Manual", url: "/pdfs/user-manual.pdf" },
    { name: "Installation Guide", url: "/pdfs/installation-guide.pdf" },
    { name: "Compliance Checklist", url: "/pdfs/compliance-checklist.pdf" },
    { name: "Training Material", url: "/pdfs/training-material.pdf" },
    
  ];

  return (
    <div className="mb-24 bg-gray-50 p-8">
      <div className="mx-auto p-6">
        <h1 className="text-3xl font-bold mb-8 text-[#2f1266]">Resources</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {pdfFiles.map((pdf, index) => (
            <Link
              key={index}
              href={pdf.url}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="group bg-white rounded-xl border border-gray-200 shadow-md p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer hover:bg-[#f9f5ff]">
              <FileText className="w-12 h-12 text-[#c092e8] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {pdf.name}
              </h3>
              <span className="mt-auto inline-block text-[#2f1266] font-regular hover:underline">
                Download PDF
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
