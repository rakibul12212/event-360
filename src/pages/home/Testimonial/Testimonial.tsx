import React from "react";
import Container from "../../../components/ui/Container";
import Button from "@/components/ui/Button/Button";
const Testimonial = () => {
  return (
    <Container className="pt-[173px]">
      <div className="flex justify-between items-center">
        <h1 className="font-extrabold text-[48px]">
          What Our Client Said about us
        </h1>
        <div className="flex gap-3">
          <Button className="p-5 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </Button>
          <Button className="p-5 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Testimonial;
