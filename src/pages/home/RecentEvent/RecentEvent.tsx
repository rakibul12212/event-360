import useScrollGrowHook from "@/Hooks/scrollGrowHook";
import Container from "../../../components/ui/Container";
import Button from "@/components/ui/Button/Button";
import { motion } from "framer-motion";

const RecentEvent = () => {
  const { style, componentRef } = useScrollGrowHook();
  return (
    <Container>
      <motion.div style={style} ref={componentRef}>
        {" "}
        <div className="flex flex-wrap justify-center items-center gap-[70px] pt-[131px]">
          <div>
            <h1 className="font-extrabold text-[48px] pb-[24px]">
              Recent Event
            </h1>
            <p className="text-[18px] max-w-[518px] ">
            An exclusive event uniting industry leaders for strategic insights, networking, and collaboration. Featuring keynote presentations, panel discussions, and interactive workshops, attendees gained valuable knowledge and forged new partnerships. The summit concluded with a gala dinner, celebrating achievements and fostering a spirit of innovation and growth. 
            </p>
            <Button className="mt-[24px]">Learn more</Button>
          </div>
          <div className="grid grid-cols-3 gap-[20px] justify-items-center">
            <img src="https://i.ibb.co/KbKHz1N/Rectangle-185.png" alt="" />
            <img src="https://i.ibb.co/2sp4PJG/Rectangle-184.png" alt="" />
            <img src="https://i.ibb.co/Mhz62vh/Rectangle-181.png" alt="" />
            <img src="https://i.ibb.co/9GqZ8JN/Rectangle-182.png" alt="" />
            <img src="https://i.ibb.co/NmRynyT/Rectangle-183.png" alt="" />
            <img src="https://i.ibb.co/jLDZvWC/Rectangle-186.png" alt="" />
          </div>
        </div>
      </motion.div>
    </Container>
  );
};

export default RecentEvent;
