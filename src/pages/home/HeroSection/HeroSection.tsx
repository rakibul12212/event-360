import Button from "@/components/ui/Button/Button";
import Container from "@/components/ui/Container";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="bg">
      <Container className="text-center  text-white pt-28 md:pt-48 space-y-6 pb-64 ">
        <p className="text-4xl md:text-5xl lg:text-6xl font-extrabold">
          BRAND NEW EVENT PACKAGES
        </p>
        <p className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#FFD600]">
          For Winter
        </p>
        <p className="text-md mx-auto max-w-[900px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga a vero
          obcaecati aut totam delectus reprehenderit velit, consequuntur nostrum
          aperiam quis non voluptatum voluptate nisi.
        </p>

        <Button>Explore</Button>
      </Container>
    </div>
  );
};

export default HeroSection;
