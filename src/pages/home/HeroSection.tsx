import Button from "@/components/ui/Button/Button";
import Container from "@/components/ui/Container";
import React from "react";

const HeroSection = () => {
  return (
    <Container className="text-center bg-slate-600 text-white pt-8 md:pt-16 space-y-6 pb-20 ">
      <p className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold">
        BRAND NEW EVENT PACKAGES
      </p>
      <p className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-[#FFD600]">
        For Winter
      </p>
      <p className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl mx-auto max-w-[800px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga a vero
        obcaecati aut totam delectus reprehenderit velit, consequuntur nostrum
        aperiam quis non voluptatum voluptate nisi.
      </p>

      <Button></Button>
    </Container>
  );
};

export default HeroSection;
