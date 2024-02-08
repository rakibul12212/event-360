import Button from "@/components/ui/Button/Button";
import CheckMark from "@/components/ui/CheckMark/CheckMark";
import Container from "@/components/ui/Container";

const Pricing = () => {
  return (
    <Container>
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
        <div className="border rounded-md hover:bg-[#EA9B00] shadow-xl">
          <div className="px-5 py-5">
            <h1 className="font-semibold text-lg pb-[20px]">Enterprice</h1>
            <p className="text-sm max-w-[250px] pb-[20px]">
              In ornare ligula lorem, sit amet faucibus velit vehicula eget
            </p>
            <p className="font-bold text-[48px] pb-[20px]">
              <span className="text-[40px]">$</span>15
            </p>
            <Button className="p-2 mb-5 w-full">Get this packages</Button>
            <ol className="font-semibold text-[12px] pb-[40px] space-y-2 ">
              <div className="flex gap-2 ">
                <CheckMark />
                <li>ten links available</li>
              </div>
              <div className="flex gap-2">
                <CheckMark />
                <li>Own analytics olatform</li>
              </div>
              <div className="flex gap-2">
                <CheckMark />
                <li>Mobile app</li>
              </div>
              <div className="flex gap-2">
                <CheckMark />
                <li>Chat support</li>
              </div>
              <div className="flex gap-2">
                <CheckMark />
                <li>1000 users</li>
              </div>
              <div className="flex gap-2">
                <CheckMark />
                <li>tamplate library</li>
              </div>
            </ol>
          </div>
          <button className="w-full border py-3 bg-[#F2F2F2] ">
            See all features
          </button>
        </div>
        {/* card-2 */}
        <div className="border rounded-md hover:bg-[#EA9B00] shadow-xl">
          <div className="px-5 py-5">
            <h1 className="font-semibold text-lg pb-[20px]">Forever</h1>
            <p className="text-sm max-w-[250px] pb-[20px]">
              In ornare ligula lorem, sit amet faucibus velit vehicula eget
            </p>
            <p className="font-bold text-[48px] pb-[20px]">
              <span className="text-[40px]">$</span>25
            </p>
            <Button className="p-2 mb-5 w-full">Get this packages</Button>
            <ol className="font-semibold text-[12px] pb-[40px] space-y-2">
              <div className="flex gap-2 ">
                <CheckMark />
                <li>ten links available</li>
              </div>
              <div className="flex gap-2">
                <CheckMark />
                <li>Own analytics olatform</li>
              </div>
              <div className="flex gap-2">
                <CheckMark />
                <li>Mobile app</li>
              </div>
              <div className="flex gap-2">
                <CheckMark />
                <li>Chat support</li>
              </div>
              <div className="flex gap-2">
                <CheckMark />
                <li>1000 users</li>
              </div>
              <div className="flex gap-2">
                <CheckMark />
                <li>tamplate library</li>
              </div>
            </ol>
          </div>
          <button className="w-full border py-3 bg-[#F2F2F2]">
            See all features
          </button>
        </div>
        {/* card-3 */}
        <div className="border rounded-md hover:bg-[#EA9B00] shadow-xl">
          <div className="px-5 py-5">
            <h1 className="font-semibold text-lg pb-[20px]">Business Pack</h1>
            <p className="text-sm max-w-[250px] pb-[20px]">
              In ornare ligula lorem, sit amet faucibus velit vehicula eget
            </p>
            <p className="font-bold text-[48px] pb-[20px]">
              <span className="text-[40px]">$</span>9
            </p>
            <Button className="p-2 mb-5 w-full">Get this packages</Button>
            <ol className="font-semibold text-[12px] pb-[40px] space-y-2">
              <div className="flex gap-2 ">
                <CheckMark />
                <li>ten links available</li>
              </div>
              <div className="flex gap-2">
                <CheckMark />
                <li>Own analytics olatform</li>
              </div>
              <div className="flex gap-2">
                <CheckMark />
                <li>Mobile app</li>
              </div>
              <div className="flex gap-2">
                <CheckMark />
                <li>Chat support</li>
              </div>
              <div className="flex gap-2">
                <CheckMark />
                <li>1000 users</li>
              </div>
              <div className="flex gap-2">
                <CheckMark />
                <li>tamplate library</li>
              </div>
            </ol>
          </div>
          <button className="w-full border py-3 bg-[#F2F2F2]">
            See all features
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Pricing;
