import React from 'react';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

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
              eVitals is a remote patient monitoring solution designed to help clinicians deliver proactive, personalized care—right from a distance.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <FaFacebookF className="w-5 h-5" />, color: "text-blue-600" },
                { icon: <FaTwitter className="w-5 h-5" />, color: "text-sky-600" },
                { icon: <FaLinkedinIn className="w-5 h-5" />, color: "text-blue-700" },
                { icon: <FaInstagram className="w-5 h-5" />, color: "text-pink-600" }
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
            <h3 className="text-lg font-semibold text-slate-900 mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'RPM', 'CCM', 'Telehealth', 'Behavioral Health'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-6">Our Services</h3>
            <ul className="space-y-3">
              {['Remote Monitoring', 'Chronic Care', 'Virtual Consultations', 'Health Analytics', 'Device Integration'].map((service) => (
                <li key={service}>
                  <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact/Info */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-6">Contact</h3>
            <ul className="space-y-3">
              {['Contact Us', 'Careers', 'Privacy Policy', 'Terms & Conditions', 'Support Center'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
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
            <a href="#" className="text-slate-500 hover:text-slate-700 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-slate-700 text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-slate-500 hover:text-slate-700 text-sm transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;