import Button from "@/components/ui/Button/Button";
import Container from "@/components/ui/Container";
import React from "react";

const Subscribe = () => {
  return (
    <div className="pt-[131px]  ">
      <Container className="grid xs:grid-cols-1 sm:grid-cols-1 xs:grid-cols-2 lg:grid-cols-2 place-items-center gap-5 ">
        <div className="h-30%">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2511/2511845.png"
            alt=""
          />
        </div>
        <div className="w-40%">
          <h1 className="text-[33.16px] font-bold pb-4">
            Get our newsletter to get update information, news, insight or
            promotions.
          </h1>
          <div className="w-full max-w-md">
            <input
              className="w-full border py-2 px-2 mb-2"
              type="email"
              id="email"
              placeholder="Enter your email"
            />
          </div>
          <Button>Subscribe</Button>
        </div>
      </Container>
    </div>
  );
};

export default Subscribe;
