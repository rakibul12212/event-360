import AboutSection from "./AboutSection";
import HeroSection from "./HeroSection/HeroSection";
import Pricing from "./Pricing/Pricing";
import RecentEvent from "./RecentEvent/RecentEvent";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <Pricing></Pricing>
      <RecentEvent></RecentEvent>
      <AboutSection></AboutSection>
    </div>
  );
};

export default Home;
