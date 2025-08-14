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
  title: 'e-Vitals - Remote Patient Monitoring',
  description: 'Care beyond clinic, always connected.',
  icons: {
    icon: 'assets/eVitals-favicon.png', // Path relative to public/
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
