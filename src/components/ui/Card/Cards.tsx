import { Avatar, Card } from "keep-react";
import { FacebookLogo, LinkedinLogo, TwitterLogo } from "phosphor-react";

const Cards = () => {
  return (
    <Card className="max-w-[250px] p-3 shadow-md">
      <Card.Container className="flex items-center justify-center">
        <Avatar
          img="https://www.sketch.ca/sketchPub/uploads/2021/01/woman-of-Igbo-sun-portrait-details.jpg"
          statusPosition="bottom-right"
          size="3xl"
          className="rounded-md"
        />
      </Card.Container>
      <Card.Container className="text-center">
        <Card.Title className="font-md text-[28px] text-metal-800 ">
          Michael Wells
        </Card.Title>
        <Card.Title className="!text-body-6 font-normal text-metal-400 md:text-body-5">
          Marketing Expert
        </Card.Title>
      </Card.Container>
      <Card.Container className="circled mx-auto flex max-w-[220px] items-center justify-center divide-x divide-metal-200 rounded-md border border-metal-200 p-1 md:p-2">
        <Card.Link
          className="flex items-center justify-center px-3 py-1"
          icon={<LinkedinLogo size={24} color="#0072b1" weight="fill" />}
          href="#"
        />
        <Card.Link
          className="flex items-center justify-center px-3 py-1"
          icon={<FacebookLogo size={24} color="#0C63D4" weight="fill" />}
          href="#"
        />
        <Card.Link
          className="flex items-center justify-center px-3 py-1"
          icon={<TwitterLogo size={24} color="#0C8BD9" weight="fill" />}
          href="#"
        />
      </Card.Container>
    </Card>
  );
};

export default Cards;
