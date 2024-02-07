import AboutSection from "./AboutSection";
import HeroSection from "./HeroSection/HeroSection";
import Pricing from "./Pricing/Pricing";
import RecentEvent from "./RecentEvent/RecentEvent";
import Subscribe from "./Subscribe/Subscribe";
import Testimonial from "./Testimonial/Testimonial";
import ValuableClient from "./ValuableClient/ValuableClient";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <Pricing></Pricing>
      <RecentEvent></RecentEvent>
      <Testimonial></Testimonial>
      <ValuableClient></ValuableClient>
      <Subscribe></Subscribe>
      <AboutSection></AboutSection>
    </div>
  );
};

export default Home;
