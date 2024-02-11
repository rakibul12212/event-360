import EventItem from "./EventItem/EventItem";
import Gallery from "./Gallery/Gallery";
import HeroSection from "./HeroSection/HeroSection";
import Pricing from "./Pricing/Pricing";
import RecentEvent from "./RecentEvent/RecentEvent";
import Subscribe from "./Subscribe/Subscribe";
import Team from "./Team/Team";
import Testimonial from "./Testimonial/Testimonial";
import ValuableClient from "./ValuableClient/ValuableClient";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <EventItem></EventItem>
      <Pricing></Pricing>
      <Gallery></Gallery>
      <RecentEvent></RecentEvent>
      <Testimonial></Testimonial>
      <ValuableClient></ValuableClient>
      <Team></Team>
      <Subscribe></Subscribe>
    </div>
  );
};

export default Home;
