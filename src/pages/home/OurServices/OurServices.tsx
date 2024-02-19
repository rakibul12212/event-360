import Container from "@/components/ui/Container";
import { motion } from "framer-motion";
import useScrollGrowHook from "@/Hooks/scrollGrowHook";
import CheckMark from "@/components/ui/CheckMark/CheckMark";
import { getServices } from "@/api/admin/services/service.api";
import { useQuery } from "@tanstack/react-query";

const OurServices = () => {
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
      <div>
        <motion.div
          className="pt-[131px] pb-[54px]"
          style={style}
          ref={componentRef}
        >
          <h1 className="text-5xl font-bold text-center">Our Services</h1>
          <p className="text-[18px] pt-[12px] text-center mx-auto max-w-[800px]">
            Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
            ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
          </p>
        </motion.div>

        {/* ----- */}

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {data ? (
            data[0].services.map((service) => (
              <div
                key={service["services-id"]}
                className="max-w-sm rounded-md overflow-hidden shadow-sm mx-auto relative bg-gradient-to-t from-transparent to-gray-100"
              >
                <img
                  className="w-full max-h-[253px] px-4 py-8"
                  src={service.image}
                  alt=""
                />
                <p className="p-4 font-semibold text-[24px]">{service.title}</p>
                <div className="p-4">
                  <ol className="text-[18px] pb-[40px] space-y-2">
                    {service.details.map((detail) => (
                      <div className="flex gap-2 items-center" key={detail.id}>
                        <CheckMark
                          className="w-5 h-5 rounded-full bg-gray-100 p-1"
                          children={undefined}
                        />
                        <li>{detail["details-text"]}</li>
                      </div>
                    ))}
                  </ol>
                </div>
                {/* Hover */}
                <div className="px-6 py-4 opacity-0 absolute top-0 left-0 right-0 bottom-0 bg-gray-200 transition-opacity duration-300 hover:opacity-100">
                  <h1 className="font-bold text-xl mb-2 pt-4">Wedding event</h1>
                  <p className="text-gray-700 text-base mb-2 py-5">
                    {service.text}
                  </p>
                  <ol className="text-normal pb-[40px] space-y-2">
                    {service.details.map((detail) => (
                      <div className="flex gap-2 items-center" key={detail.id}>
                        <CheckMark
                          className="w-5 h-5 rounded-full bg-gray-100 p-1"
                          children={undefined}
                        />
                        <li>{detail["details-text"]}</li>
                      </div>
                    ))}
                  </ol>
                  <button className="w-full bg-gradient-to-r from-amber-400 to-amber-600 p-4 text-black cursor-pointer hover:opacity-70 transition-opacity duration-300 ease-in-out px-10 py-2">
                    Check it out
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center items-center">Loading...</p>
          )}
        </div>

        {/* ---- */}
      </div>
    </Container>
  );
};

export default OurServices;
