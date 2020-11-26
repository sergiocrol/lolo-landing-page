import HeroSection from '../components/HeroSection';
import FirstSection from '../components/FirstSection';
import MiddleBanner from '../components/MiddleBanner';
import SecondSection from '../components/SecondSection';
import ThirdSection from '../components/ThirdSection';
import FooterSection from '../components/FooterSection';

// import { bgBody } from '../styles/index.module.css';

const Home = () => {
  return (
    <div className={`bg-yellow overflow-hidden`}>
      <HeroSection />
      <FirstSection />
      <MiddleBanner />
      <SecondSection />
      <ThirdSection />
      <FooterSection />
    </div>
  );
};

export default Home;
