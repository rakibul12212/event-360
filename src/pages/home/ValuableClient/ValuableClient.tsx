import React from "react";
import Container from "@/components/ui/Container";
import Marquee from "react-fast-marquee";
const ValuableClient = () => {
  return (
    <Container className="pt-[131px]">
      <h1 className="text-center font-extrabold text-[48px]">
        Our Valuable client
      </h1>
      <Marquee>
        <div className="grid grid-cols-5 gap-28 w-full pt-[103px]">
          <img src="../../../../public/assets/client/Company logo.png" alt="" />
          <img
            src="../../../../public/assets/client/Company logo (1).png"
            alt=""
          />
          <img
            src="../../../../public/assets/client/Company logo (2).png"
            alt=""
          />
          <img
            src="../../../../public/assets/client/Company logo (3).png"
            alt=""
          />
          <img
            src="../../../../public/assets/client/Company logo (4).png"
            alt=""
          />

          <img
            src="../../../../public/assets/client/Company logo (5).png"
            alt=""
          />
          <img
            src="../../../../public/assets/client/Company logo (6).png"
            alt=""
          />
          <img
            src="../../../../public/assets/client/Company logo (7).png"
            alt=""
          />
          <img
            src="../../../../public/assets/client/Company logo (8).png"
            alt=""
          />
          <img
            src="../../../../public/assets/client/Company logo (9).png"
            alt=""
          />
        </div>
      </Marquee>
    </Container>
  );
};

export default ValuableClient;
