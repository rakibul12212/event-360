import Button from "@/components/ui/Button/Button";
import Container from "@/components/ui/Container";
import "./HeroSection.css";
import { motion } from "framer-motion";

const intro = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.25,
      delayChildren: 1,
    },
  },
};
const introChildren = {
  hidden: { opacity: 0, y: -200 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, type: "spring", bounce: 0.5 },
  },
};

const introChildren2 = {
  hidden: { opacity: 0, y: -200 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

const HeroSection = () => {
  return (
    <div className="bg">
      <Container>
        <motion.div
          className="text-center  text-white pt-14 md:pt-32 space-y-8 pb-32 "
          variants={intro}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            className=" text-4xl md:text-5xl lg:text-[64px] pb-[8px] font-extrabold"
            variants={introChildren}
          >
            Introducing Our Latest Winter Wonderland Event Experiences!
          </motion.p>
          
          <motion.p
            className="text-[20px] text-[#DFDFDF] mx-auto max-w-[900px] pb=[32px]"
            variants={introChildren2}
          >
            Welcome to Planorama - Where Events Come to Life! Your premier destination for seamless event management solutions. Let's craft unforgettable experiences together
          </motion.p>
          <motion.div variants={introChildren2}>
            <Button>Explore</Button>
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
};

export default HeroSection;
