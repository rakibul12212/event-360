import Cards from "@/components/ui/Card/Cards";
import Container from "@/components/ui/Container";
const Team = () => {
  return (
    <Container className="pt-[131px]">
      <p className="text-[18px]">Team Member</p>
      <h1 className="font-extrabold text-[48px] max-w-[450px]">
        Life is an event. Make it memorable.
      </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-5 py-[88px]">
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
      </div>
    </Container>
  );
};

export default Team;
