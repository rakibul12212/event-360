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
    <div className="bg ">
      <Container>
        <motion.div
          className="text-center  text-white pt-28 md:pt-60 space-y-8 pb-64 "
          variants={intro}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            className="text-4xl md:text-5xl lg:text-[64px] pb-[8px] font-extrabold"
            variants={introChildren}
          >
            BRAND NEW EVENT PACKAGES
          </motion.p>
          <motion.p
            className="text-3xl md:text-4xl lg:text-[56px] pb-[32px] font-extrabold text-[#FFD600]"
            variants={introChildren}
          >
            For Winter
          </motion.p>
          <motion.p
            className="text-[20px] text-[#DFDFDF] mx-auto max-w-[900px] pb=[32px]"
            variants={introChildren2}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga a vero
            obcaecati aut totam delectus reprehenderit velit, consequuntur
            nostrum aperiam quis non voluptatum voluptate nisi.
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
