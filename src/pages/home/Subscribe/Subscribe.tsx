import Button from "@/components/ui/Button/Button";
import Container from "@/components/ui/Container";

const Subscribe = () => {
  return (
    <div className="bg-[#3f3d2f27]">
      <Container>
        <div className="grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-4 ">
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2511/2511845.png"
              alt=""
              className="max-h-[200px]"
            />
          </div>
          <div>
            <h1 className="text-[33.16px] font-bold pb-4">
              Get our newsletter to get updates & promotions.
            </h1>
          </div>
          <div className="w-full max-w-md">
            <input
              className="w-full border py-2 px-2 mb-2"
              type="email"
              id="email"
              placeholder="Enter your email"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Subscribe;
