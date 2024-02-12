import Container from "@/components/ui/Container";
import CheckMark from "@/components/ui/CheckMark/CheckMark";
import useScrollGrowHook from "@/Hooks/scrollGrowHook";
import { motion } from "framer-motion";
const OurServices = () => {
  const { style, componentRef } = useScrollGrowHook();
  return (
    <Container>
      <motion.div style={style} ref={componentRef}>
        <div className="pt-[131px] pb-[54px]">
          <h1 className="text-5xl font-bold text-center">Our Services</h1>
          <p className="text-[18px] pt-[12px] text-center mx-auto max-w-[800px]">
            Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
            ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
          </p>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* one */}
          <div className="max-w-sm rounded-md overflow-hidden shadow-sm mx-auto relative bg-gradient-to-t from-transparent to-gray-100">
            <img
              className="w-full max-h-[253px] px-4 py-8"
              src="https://i.ibb.co/RzfZpzM/Rectangle-5.png"
              alt="Image Description"
            />
            <p className=" p-4 font-semibold text-[24px]">Corporate Event</p>
            <div className="p-4">
              <ol className=" text-[18px] pb-[40px] space-y-2 ">
                <div className="flex gap-2 items-center">
                  <CheckMark
                    className="w-5 h-5  rounded-full bg-gray-100 p-1 "
                    children={undefined}
                  />
                  <li>One day pas access all lecture</li>
                </div>
                <div className="flex gap-2">
                  <CheckMark
                    className="w-5 h-5  rounded-full bg-gray-100 p-1 "
                    children={undefined}
                  />
                  <li>Lunch and Snack</li>
                </div>
                <div className="flex gap-2">
                  <CheckMark
                    className="w-5 h-5  rounded-full bg-gray-100 p-1 "
                    children={undefined}
                  />
                  <li>Meet Event Speaker</li>
                </div>
                <div className="flex gap-2">
                  <CheckMark
                    className="w-5 h-5  rounded-full bg-gray-100 p-1 "
                    children={undefined}
                  />
                  <li>Front Seat</li>
                </div>
                <div className="flex gap-2">
                  <CheckMark
                    className="w-5 h-5  rounded-full bg-gray-100 p-1 "
                    children={undefined}
                  />
                  <li>One day pas access all lecture</li>
                </div>
              </ol>
            </div>
            {/* hover */}
            <div className="px-6 py-4 opacity-0 absolute top-0 left-0 right-0 bottom-0 bg-gray-200 transition-opacity duration-300 hover:opacity-100">
              <h1 className="font-bold text-xl mb-2 pt-4">Wedding event</h1>
              <p className="text-gray-700 text-base mb-2 py-5">
                Ut posuere felis arcu tellus tempus in in ultricies. Gravida id
                nibh ornare viverra. Ultrices faucibus neque velit risus ac id
                lorem.Ut posuere felis arcu tellus tempus in in ultricies.Ut
                posuere felis arcu tellus tempus in in ultricies.
              </p>
              <ol className=" text-normal pb-[40px] space-y-2 ">
                <div className="flex gap-2 items-center">
                  <CheckMark
                    className="w-5 h-5  rounded-full bg-gray-100 p-1 "
                    children={undefined}
                  />
                  <li>One day pas access all lecture</li>
                </div>
                <div className="flex gap-2">
                  <CheckMark
                    className="w-5 h-5  rounded-full bg-gray-100 p-1 "
                    children={undefined}
                  />
                  <li>Lunch and Snack</li>
                </div>
                <div className="flex gap-2">
                  <CheckMark
                    className="w-5 h-5  rounded-full bg-gray-100 p-1 "
                    children={undefined}
                  />
                  <li>Meet Event Speaker</li>
                </div>
                <div className="flex gap-2">
                  <CheckMark
                    className="w-5 h-5  rounded-full bg-gray-100 p-1 "
                    children={undefined}
                  />
                  <li>Front Seat</li>
                </div>
                <div className="flex gap-2">
                  <CheckMark
                    className="w-5 h-5  rounded-full bg-gray-100 p-1 "
                    children={undefined}
                  />
                  <li>One day pas access all lecture</li>
                </div>
              </ol>
              <button className="w-full bg-gradient-to-r from-amber-400 to-amber-600 p-4 text-black cursor-pointer hover:opacity-70 transition-opacity duration-300 ease-in-out px-10 py-2">
                Check it out
              </button>
            </div>
          </div>
          {/* two */}
          <div className="max-w-sm rounded-md overflow-hidden shadow-sm mx-auto relative bg-gradient-to-t from-transparent to-gray-100">
            <img
              className="w-full max-h-[253px] px-4 py-8"
              src="https://i.ibb.co/wNF2JJ7/Rectangle-5-1.png"
              alt="Image Description"
            />
            <p className="p-4 font-semibold text-[24px]">Wedding Event</p>
            <div className="p-4">
              <ol className=" text-[18px] pb-[40px] space-y-2 ">
                <div className="flex gap-2 items-center">
                  <CheckMark
                    className="w-5 h-5  rounded-full bg-gray-100 p-1 "
                    children={undefined}
                  />
                  <li>One day pas access all lecture</li>
                </div>
                <div className="flex gap-2">
                  <CheckMark
                    className="w-5 h-5  rounded-full bg-gray-100 p-1 "
                    children={undefined}
                  />
                  <li>Lunch and Snack</li>
                </div>
                <div className="flex gap-2">
                  <CheckMark
                    className="w-5 h-5  rounded-full bg-gray-100 p-1 "
                    children={undefined}
                  />
                  <li>Meet Event Speaker</li>
                </div>
                <div className="flex gap-2">
                  <CheckMark
                    className="w-5 h-5  rounded-full bg-gray-100 p-1 "
                    children={undefined}
                  />
                  <li>Front Seat</li>
                </div>
                <div className="flex gap-2">
                  <CheckMark
                    className="w-5 h-5  rounded-full bg-gray-100 p-1 "
                    children={undefined}
                  />
                  <li>One day pas access all lecture</li>
                </div>
              </ol>
            </div>
            {/* hover */}
            <div className="px-6 py-4 opacity-0 absolute top-0 left-0 right-0 bottom-0 bg-gray-200 transition-opacity duration-300 hover:opacity-100">
              <div className="font-bold text-xl mb-2 pt-4">Wedding event</div>
              <p className="text-gray-700 text-base mb-2 py-5">
                Ut posuere felis arcu tellus tempus in in ultricies. Gravida id
                nibh ornare viverra. Ultrices faucibus neque velit risus ac id
                lorem.Ut posuere felis arcu tellus tempus in in ultricies.Ut
                posuere felis arcu tellus tempus in in ultricies.
              </p>
              <ol className=" text-normal pb-[40px] space-y-2 ">
                <div className="flex gap-2 items-center">
                  <CheckMark
                    className="w-5 h-5  rounded-full bg-gray-100 p-1 "
                    children={undefined}
                  />
                  <li>One day pas access all lecture</li>
                </div>
                <div className="flex gap-2">
                  <CheckMark
                    className="w-5 h-5  rounded-full bg-gray-100 p-1 "
                    children={undefined}
                  />
                  <li>Lunch and Snack</li>
                </div>
                <div className="flex gap-2">
                  <CheckMark
                    className="w-5 h-5  rounded-full bg-gray-100 p-1 "
                    children={undefined}
                  />
                  <li>Meet Event Speaker</li>
                </div>
                <div className="flex gap-2">
                  <CheckMark
                    className="w-5 h-5  rounded-full bg-gray-100 p-1 "
                    children={undefined}
                  />
                  <li>Front Seat</li>
                </div>
                <div className="flex gap-2">
                  <CheckMark
                    className="w-5 h-5  rounded-full bg-gray-100 p-1 "
                    children={undefined}
                  />
                  <li>One day pas access all lecture</li>
                </div>
              </ol>
              <button className="w-full bg-gradient-to-r from-amber-400 to-amber-600 p-4 text-black cursor-pointer hover:opacity-70 transition-opacity duration-300 ease-in-out px-10 py-2">
                Check it out
              </button>
            </div>
          </div>
          {/* three */}
          <div className="max-w-sm rounded-md overflow-hidden shadow-sm mx-auto relative bg-gradient-to-t from-transparent to-gray-100">
            <img
              className="w-full max-h-[253px] px-4 py-8"
              src="https://i.ibb.co/wNF2JJ7/Rectangle-5-1.png"
              alt="Image Description"
            />
            <p className="p-4 font-semibold text-[24px]">Organization Event</p>
            <div className="p-4">
              <ol className=" text-[18px] pb-[40px] space-y-2 ">
                <div className="flex gap-2 items-center">
                  <CheckMark
                    className="w-5 h-5  rounded-full bg-gray-100 p-1 "
                    children={undefined}
                  />
                  <li>One day pas access all lecture</li>
                </div>
                <div className="flex gap-2">
                  <CheckMark
                    className="w-5 h-5  rounded-full bg-gray-100 p-1 "
                    children={undefined}
                  />
                  <li>Lunch and Snack</li>
                </div>
                <div className="flex gap-2">
                  <CheckMark
                    className="w-5 h-5  rounded-full bg-gray-100 p-1 "
                    children={undefined}
                  />
                  <li>Meet Event Speaker</li>
                </div>
                <div className="flex gap-2">
                  <CheckMark
                    className="w-5 h-5  rounded-full bg-gray-100 p-1 "
                    children={undefined}
                  />
                  <li>Front Seat</li>
                </div>
                <div className="flex gap-2">
                  <CheckMark
                    className="w-5 h-5  rounded-full bg-gray-100 p-1 "
                    children={undefined}
                  />
                  <li>One day pas access all lecture</li>
                </div>
              </ol>
            </div>
            {/* hover */}
            <div className="px-6 py-4 opacity-0 absolute top-0 left-0 right-0 bottom-0 bg-gray-200 transition-opacity duration-300 hover:opacity-100">
              <div className="font-bold text-xl mb-2 pt-4">Wedding event</div>
              <p className="text-gray-700 text-normal mb-2 py-5">
                Ut posuere felis arcu tellus tempus in in ultricies. Gravida id
                nibh ornare viverra. Ultrices faucibus neque velit risus ac id
                lorem.Ut posuere felis arcu tellus tempus in in ultricies.Ut
                posuere felis arcu tellus tempus in in ultricies.
              </p>
              <ol className=" text-normal pb-[40px] space-y-2 ">
                <div className="flex gap-2 items-center">
                  <CheckMark
                    className="w-5 h-5  rounded-full bg-gray-100 p-1 "
                    children={undefined}
                  />
                  <li>One day pas access all lecture</li>
                </div>
                <div className="flex gap-2">
                  <CheckMark
                    className="w-5 h-5  rounded-full bg-gray-100 p-1 "
                    children={undefined}
                  />
                  <li>Lunch and Snack</li>
                </div>
                <div className="flex gap-2">
                  <CheckMark
                    className="w-5 h-5  rounded-full bg-gray-100 p-1 "
                    children={undefined}
                  />
                  <li>Meet Event Speaker</li>
                </div>
                <div className="flex gap-2">
                  <CheckMark
                    className="w-5 h-5  rounded-full bg-gray-100 p-1 "
                    children={undefined}
                  />
                  <li>Front Seat</li>
                </div>
                <div className="flex gap-2">
                  <CheckMark
                    className="w-5 h-5  rounded-full bg-gray-100 p-1 "
                    children={undefined}
                  />
                  <li>One day pas access all lecture</li>
                </div>
              </ol>
              <button className="w-full bg-gradient-to-r from-amber-400 to-amber-600 p-4 text-black cursor-pointer hover:opacity-70 transition-opacity duration-300 ease-in-out px-10 py-2">
                Check it out
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </Container>
  );
};

export default OurServices;
