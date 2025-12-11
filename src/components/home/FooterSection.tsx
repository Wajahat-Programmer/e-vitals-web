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
    <footer className="w-full bg-[#fafafa] text-slate-700 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 items-start">
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
            <p className="text-slate-600 leading-relaxed text-justify">
              e-Vitals is a cutting-edge Remote Patient Monitoring (RPM) platform that empowers healthcare 
              providers with real-time, secure patient insights. Boost efficiency, ensure compliance, and 
              elevate care quality effortlessly with e-Vitals.
            </p>
            <div className="flex space-x-4">
              {[
                {
                  icon: <FaFacebookF className="w-5 h-5" />,
                  color: "text-blue-600",
                  label: "Visit our Facebook page",
                  desc: "Follow us on Facebook for updates and news"
                },
                {
                  icon: <FaTwitter className="w-5 h-5" />,
                  color: "text-sky-600",
                  label: "Visit our Twitter profile",
                  desc: "Follow us on Twitter for latest tweets and announcements"
                },
                {
                  icon: <FaLinkedinIn className="w-5 h-5" />,
                  color: "text-blue-700",
                  label: "Visit our LinkedIn page",
                  desc: "Connect with us on LinkedIn for professional updates"
                },
                {
                  icon: <FaInstagram className="w-5 h-5" />,
                  color: "text-pink-600",
                  label: "Visit our Instagram profile",
                  desc: "Follow us on Instagram for photos and stories"
                },
              ].map((social, index) => (
                <React.Fragment key={index}>
                  <a
                    href="#"
                    aria-label={social.label}
                    aria-describedby={`social-desc-${index}`}
                    className={`${social.color} hover:text-white p-2 rounded-full bg-slate-200 hover:bg-slate-300 transition-colors`}
                  >
                    {social.icon}
                  </a>
                  <span id={`social-desc-${index}`} className="sr-only">
                    {social.desc}
                  </span>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Product Section */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-6">
              Product
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Solutions", href: "/solutions", desc: "Explore the solutions we offer for various needs" },
                { label: "How it works", href: "/how-it-works", desc: "Learn how our platform operates and delivers results" },
                { label: "Programs", href: "/programs", desc: "View the different programs and services we provide" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-600 underline hover:text-slate-900 transition-colors"
                    aria-describedby={`desc-${link.label.replace(/\s+/g, "-").toLowerCase()}`}
                  >
                    {link.label}
                  </Link>
                  <span
                    id={`desc-${link.label.replace(/\s+/g, "-").toLowerCase()}`}
                    className="sr-only"
                  >
                    {link.desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-6">
              Resources
            </h3>
            <ul className="space-y-3">
              {[
                {
                  label: "Reimbursement",
                  href: "/rpm/Reimbursement-and-Billing",
                  desc: "Access the Reimbursement and Billing tool to calculate estimated reimbursement amounts"
                },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-600 underline hover:text-slate-900 transition-colors"
                    aria-describedby={`desc-${link.label.replace(/\s+/g, "-").toLowerCase()}`}
                  >
                    {link.label}
                  </Link>
                  <span
                    id={`desc-${link.label.replace(/\s+/g, "-").toLowerCase()}`}
                    className="sr-only"
                  >
                    {link.desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-6">
              Contact
            </h3>
            <div className="space-y-3">
              <a 
                href="mailto:info@evitalsrpm.com" 
                className="text-slate-600 underline hover:text-slate-900 transition-colors"
                aria-describedby="email-desc"
              >
                info@evitalsrpm.com
              </a>
              <span id="email-desc" className="sr-only">
                Send an email to eVitals RPM support for inquiries or assistance.
              </span>
            </div>
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
            <Link
              href="/privacy-policy"
              className="text-slate-500 hover:text-slate-700 text-sm transition-colors"
              aria-describedby="privacy-desc"
            >
              Privacy Policy
            </Link>
            <span id="privacy-desc" className="sr-only">
              Read our Privacy Policy to understand how we collect and handle your information.
            </span>

            <Link
              href="/terms-of-service"
              className="text-slate-500 hover:text-slate-700 text-sm transition-colors"
              aria-describedby="tos-desc"
            >
              Terms of Service
            </Link>
            <span id="tos-desc" className="sr-only">
              View our Terms of Service for rules and guidelines when using our platform.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;