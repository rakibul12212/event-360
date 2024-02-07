import React from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button/Button";
const Contact = () => {
  return (
    <Container>
      <div className="py-10 flex justify-center items-center">
        <div>
          <p className="text-xl">Online order</p>
          <p className="font-extrabold text-[48px]">Contact our sales</p>
          <p className="text-[16px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <div className="flex pt-10 gap-4">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-16 h-16  px-2 rounded-md bg-gradient-to-r from-amber-400 to-amber-600"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
            </span>
            <div>
              <p className="text-[18px] font-bold">Ticket Order</p>
              <p className="text-[30px] font-extrabold">888-2003-212</p>
            </div>
          </div>
          <div className="flex pt-10 gap-4">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-16 h-16  px-2 rounded-md bg-gradient-to-r from-amber-400 to-amber-600"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
            </span>
            <div>
              <p className="text-[18px] font-bold">Email support</p>
              <p className="text-[30px] font-extrabold">support@domain.tld</p>
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://www.ohmautomotives.com/assets/img/contactus.png"
            alt=""
            className="my-auto"
          />
        </div>
      </div>
      <Button>Chat sales</Button>
    </Container>
  );
};

export default Contact;
