import Hero from '../components/home/Hero';
import FeatureSection from '../components/home/FeatureSection';
// import FooterSection from '../components/FooterSection';
import AchievementsSection from '@/components/home/AchievementsSection';
import TestimonialSection from '../components/home/TestimonialSection';
import DeviceSection from '../components/home/DeviceSection';

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      {/* Add other sections/components here as needed */}
      <FeatureSection />
       {/* <AchievementsSection /> */}
      <DeviceSection />
      <TestimonialSection />
       {/* <FooterSection /> */}
      
    </main>
  );
};

export default Home;