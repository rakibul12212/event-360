import Button from "@/components/ui/Button/Button";
import CheckMark from "@/components/ui/CheckMark/CheckMark";
import Container from "@/components/ui/Container";
import useScrollGrowHook from "@/Hooks/scrollGrowHook";
import { motion } from "framer-motion";
import { getServices } from "@/api/admin/services/service.api";
import { useQuery } from "@tanstack/react-query";
const Pricing = () => {
  const { style, componentRef } = useScrollGrowHook();
  const { data, isLoading } = useQuery({
    queryKey: ["services"],
    queryFn: getServices,
  });
  if (isLoading) {
    return <p>loading...</p>;
  }
  return (
    <Container>
      <motion.div style={style} ref={componentRef}>
        <div className="text-center space-y-6 py-32">
          <p className="text-5xl font-bold">Explore our pricing plans</p>
          <p className="text-xs mx-auto max-w-[800px]">
            Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
            ornare viverra. Ultrices faucibus neque velit risus ac id lorem.Ut
            posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
            ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
          </p>
        </div>
        {/* card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-[32px]">
          {data ? (
            data[0].plans.map((plan) => (
              <div key={plan["plans-id"]}>
                <div className="border rounded-md hover:bg-[#EA9B00] shadow-xl">
                  <div className="px-5 py-5">
                    <h1 className="font-semibold text-lg pb-[20px]">
                      {plan.header}
                    </h1>
                    <p className="text-sm max-w-[250px] pb-[20px]">
                      {plan.title}
                    </p>
                    <p className="font-bold text-[48px] pb-[20px]">
                      <span className="text-[40px]">$</span>
                      {plan.price}
                    </p>
                    <Button className="p-2 mb-5 w-full bg-">
                      Get this package
                    </Button>
                    <ol className="font-semibold text-[12px] pb-[40px] space-y-2">
                      {plan.details.map((detail) => (
                        <div className="flex gap-2" key={detail.id}>
                          <CheckMark children={undefined} />
                          <li>{detail.text}</li>
                        </div>
                      ))}
                    </ol>
                  </div>
                </div>
                <button className="w-full border py-3 bg-[#F2F2F2] hover:bg-gradient-to-r from-amber-400 to-amber-600 p-4 text-black cursor-pointer duration-300 ease-in-out px-10 py-2">
                  See all features
                </button>
              </div>
            ))
          ) : (
            <p className="text-center items-center">Loading...</p>
          )}
        </div>
      </motion.div>
    </Container>
  );
};

export default Pricing;
