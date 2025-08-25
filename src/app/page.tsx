import Hero from '../components/home/Hero';
import FeatureSection from '../components/home/FeatureSection';
// import FooterSection from '../components/FooterSection';
import AchievementsSection from '@/components/home/AchievementsSection';
import TestimonialSection from '../components/home/TestimonialSection';
import DeviceSection from '../components/home/DeviceSection';
import Compliance from '../components/home/Compliance';
import RPMReimbursement from '../components/home/RPMReimbursement';
import WhyChooseUs from '../components/home/WhyChooseUs';
import CTASection from '../components/home/CTASection';
// app/layout.tsx (App Router)

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      {/* Add other sections/components here as needed */}
      <FeatureSection />
      <AchievementsSection />
      <DeviceSection />
      <Compliance />
      <RPMReimbursement />
      <WhyChooseUs />
      <TestimonialSection />
      <CTASection />
      
       {/* <FooterSection /> */}
      
    </main>
  );
};

export default Home;