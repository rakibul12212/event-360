import Container from "@/components/ui/Container";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import useScrollGrowHook from "@/Hooks/scrollGrowHook";
import { motion } from "framer-motion";
import { getServices } from "@/api/admin/services/service.api";
import { useQuery } from "@tanstack/react-query";

interface TestimonialProps {
  testimonial: {
    "testimonials-id": string;
    image: string;
    name: string;
    designation: string;
    description: string;
  };
}

const Testimonial = () => {
  const { style, componentRef } = useScrollGrowHook();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const sliderRef = useRef<Slider>(null);
  const slideNext = () => {
    sliderRef.current?.slickNext();
  };

  const slidePrev = () => {
    sliderRef.current?.slickPrev();
  };

  const { data, isLoading } = useQuery({
    queryKey: ["services"],
    queryFn: getServices,
  });
  if (isLoading || !data) {
    return <p>loading...</p>;
  }

  return (
    <Container>
      <motion.div
        className="flex sm:flex-wrap justify-between items-center py-[88px]"
        style={style}
        ref={componentRef}
      >
        <h1 className="font-extrabold text-[48px]">
          What Our Client Said about us
        </h1>
        <div className="flex gap-3" style={{ textAlign: "center" }}>
          <button
            className="p-5 rounded-full bg-[#D9D9D9] hover:bg-gradient-to-r from-amber-400 to-amber-600  text-black cursor-pointer  transition-opacity duration-300 ease-in-out"
            onClick={slidePrev}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </button>
          <button
            className="p-5 rounded-full bg-[#D9D9D9] hover:bg-gradient-to-r from-amber-400 to-amber-600 p-4 text-black cursor-pointer  transition-opacity duration-300 ease-in-out"
            onClick={slideNext}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
      </motion.div>

      <Slider {...settings} ref={sliderRef}>
        {data[0].testimonials.map(
          (testimonial: TestimonialProps["testimonial"]) => (
            <div key={testimonial["testimonials-id"]}>
              <div className="space-y-2 p-5 mx-2 rounded-xl bg-[#D9D9D9] hover:bg-gradient-to-r from-amber-400 to-amber-600 p-4 text-black cursor-pointer">
                <div className="flex sm:flex-wrap justify-start items-center gap-3">
                  <img src={testimonial.image} alt="" />
                  <div className="space-y-1">
                    <h1 className="font-md text-[28px]">{testimonial.name}</h1>
                    <p className="text-[20px]">{testimonial.designation}</p>
                  </div>
                </div>
                <p className="text-[16px]">{testimonial.description}</p>
              </div>
            </div>
          )
        )}
      </Slider>
    </Container>
  );
};

export default Testimonial;
