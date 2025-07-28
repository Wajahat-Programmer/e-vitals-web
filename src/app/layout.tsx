import './globals.css';
import Header from '@/components/home/Header';

import FooterSection from '../components/home/FooterSection';
import { ReactNode } from 'react';

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: 'e-Vitals - Remote Patient Monitoring',
  description: 'Care beyond clinic, always connected.',
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-slate-50 font-sans">
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