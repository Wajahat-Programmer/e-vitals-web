import './globals.css';
import Header from '@/components/home/Header';
import FooterSection from '../components/home/FooterSection';
import { ReactNode } from 'react';
import { Inter } from 'next/font/google';

interface RootLayoutProps {
  children: ReactNode;
}

// Load Inter font globally
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // adjust as needed
});

export const metadata = {
  metadataBase: new URL('https://www.evitals.healthcare'),
  title: {
    default: 'eVitals | Remote Patient Monitoring (RPM) & CCM Platform',
    template: '%s | eVitals',
  },
  description: 'HIPAA-compliant RPM & CCM platform helping practices improve outcomes and reimbursement with FDA-cleared devices, seamless EHR workflows, and US-based support.',
  keywords: ['Remote Patient Monitoring', 'RPM', 'Chronic Care Management', 'CCM', 'HIPAA', 'FDA-cleared devices', 'EHR integration', 'reimbursement', 'telehealth'],
  icons: {
    icon: '/assets/eVitals-favicon.png',
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: '/',
    title: 'eVitals | Remote Patient Monitoring (RPM) & CCM Platform',
    description: 'Deliver proactive care at scale with HIPAA-compliant RPM & CCM. Boost reimbursements, reduce readmissions, and streamline clinical workflows.',
    siteName: 'eVitals',
    images: [
      {
        url: '/assets/eVitals-Devices.png',
        width: 1200,
        height: 630,
        alt: 'eVitals RPM & CCM Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'eVitals | RPM & CCM Platform',
    description: 'HIPAA-compliant remote patient monitoring with FDA-cleared devices and EHR-friendly workflows.',
    images: ['/assets/eVitals-Devices.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`min-h-screen flex flex-col bg-slate-50 font-sans ${inter.className}`}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <FooterSection />
      </body>
    </html>
  );
};

export default RootLayout;
