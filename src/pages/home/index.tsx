import AboutSection from "./AboutSection";
import HeroSection from "./HeroSection/HeroSection";
import Pricing from "./Pricing/Pricing";
import RecentEvent from "./RecentEvent/RecentEvent";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <Pricing></Pricing>
      <RecentEvent></RecentEvent>
      <Testimonial></Testimonial>
      <AboutSection></AboutSection>
    </div>
  );
};

export default Home;
