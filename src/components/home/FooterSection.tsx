"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const FooterSection = () => {
  return (
    <footer className="bg-[#fafafa] text-slate-700 py-16 px-4 sm:px-6 lg:px-8">
      <div className="container-lg">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <Image
                src="/assets/logo.png"
                alt="e-Vitals Logo"
                width={160}
                height={64}
              />
            </div>
            <p className="text-slate-600 leading-relaxed">
            eVitals is a cutting-edge Remote Patient Monitoring (RPM) platform that empowers healthcare 
            providers with real-time, secure patient insights. Boost efficiency, ensure compliance, and 
            elevate care quality effortlessly with eVitals.

            </p>
            <div className="flex space-x-4">
              {[
                {
                  icon: <FaFacebookF className="w-5 h-5" />,
                  color: "text-blue-600",
                },
                {
                  icon: <FaTwitter className="w-5 h-5" />,
                  color: "text-sky-600",
                },
                {
                  icon: <FaLinkedinIn className="w-5 h-5" />,
                  color: "text-blue-700",
                },
                {
                  icon: <FaInstagram className="w-5 h-5" />,
                  color: "text-pink-600",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className={`${social.color} hover:text-white p-2 rounded-full bg-slate-200 hover:bg-slate-300 transition-colors`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                "Home",
                "RPM Software",
                "RPM Devices",
                "Reimbursement & Billing",
                "Reimbursement Estimator",
              ].map((link) => {
                let href = "#";

                if (link === "Home") href = "/";
                else if (link === "RPM Software") href = "/rpm/RPMSoftware";
                else if (link === "RPM Devices") href = "/rpm/RPMDevices";
                else if (link === "Reimbursement & Billing") href = "/rpm/Reimbursement-and-Billing";
                else if (link === "Reimbursement Estimator") href = "/ReimbursementCalculator";

                return (
                  <li key={link}>
                    <Link
                      href={href}
                      className="text-slate-600 hover:text-slate-900 hover:underline transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-6">
              Support
            </h3>
            <ul className="space-y-3">
              {[
                "Services",
                "Compliance & Security",
                "Downloads",
                "Reimbursement & Billing",
                "Insights",
              ].map((link) => {
                let href = "#";

                if (link === "Services") href = "/services";
                else if (link === "Compliance & Security") href = "/support/compliance-and-security";
                else if (link === "Downloads") href = "/support/resources";
                else if (link === "FAQs") href = "/";
                else if (link === "Insights") href = "/insights/overview";
                

                return (
                  <li key={link}>
                    <Link
                      href={href}
                      className="text-slate-600 hover:text-slate-900 transition-colors hover:underline"
                    >
                      {link}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-6">
              Support
            </h3>
            <ul className="space-y-3">
              {[
                "Book Demo",
                "General Inquiry",
                "Technical Support",
                "Explore Partnership",
              ].map((link) => {
                let href = "#";

                if (link === "Book Demo") href = "/contact?booking=demo";
                else if (link === "General Inquiry") href = "/contact?booking=inquiry";
                else if (link === "Technical Support") href = "/contact?booking=technical-support";
                else if (link === "Explore Partnership") href = "/contact?booking=partnership";

                return (
                  <li key={link}>
                    <Link
                      href={href}
                      className="text-slate-600 hover:text-slate-900 transition-colors hover:underline"
                    >
                      {link}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>



        </div>

        {/* Divider */}
        <div className="border-t border-slate-300 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} eVitals. All rights reserved.
          </p>
          <div className="flex space-x-6">
           <Link href="/privacy-policy" className="text-slate-500 hover:text-slate-700 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-slate-500 hover:text-slate-700 text-sm transition-colors">
              Terms of Service
            </Link>
            {/* <a
              href="#"
              className="text-slate-500 hover:text-slate-700 text-sm transition-colors"
            >
              Cookies
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
