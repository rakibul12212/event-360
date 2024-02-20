import useScrollGrowHook from "@/Hooks/scrollGrowHook";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Marquee from "react-fast-marquee";

const ValuableClient = () => {
  const { style, componentRef } = useScrollGrowHook();
  return (
    <Container className="pt-[131px]">
      <motion.h1
        className="text-center font-extrabold text-[48px]"
        style={style}
        ref={componentRef}
      >
        Our Valuable client
      </motion.h1>
      <Marquee>
        <div className="grid grid-cols-5 gap-28 w-full pt-[103px]">
          <img src="https://i.ibb.co/DkgHwST/Company-logo.png" alt="" />
          <img src="https://i.ibb.co/5Y1BmqB/Company-logo-1.png" alt="" />
          <img src="https://i.ibb.co/SmCbPs1/Company-logo-2.png" alt="" />
          <img src="https://i.ibb.co/ww4J94z/Company-logo-3.png" alt="" />
          <img src="https://i.ibb.co/NZCjMVV/Company-logo-4.png" alt="" />

          <img src="https://i.ibb.co/gJDs545/Company-logo-5.png" alt="" />
          <img src="https://i.ibb.co/7vcJ2FQ/Company-logo-6.png" alt="" />
          <img src="https://i.ibb.co/XsrJMQm/Company-logo-7.png" alt="" />
          <img src="https://i.ibb.co/S3ySTQB/Company-logo-8.png" alt="" />
          <img src="https://i.ibb.co/xLPB3Yp/Company-logo-9.png" alt="" />
        </div>
      </Marquee>
    </Container>
  );
};

export default ValuableClient;
