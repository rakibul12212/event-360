import Button from "@/components/ui/Button/Button";
import Container from "@/components/ui/Container";

const AddService = () => {
  return (
    <Container>
      <div>
        <p className="text-center text-[48px] font-[extrabold] pt-[131px] pb-5">
          Add Service
        </p>
        <div className="border p-10 rounded-md">
          <form action="#" method="post">
            <div className="mb-4">
              <label htmlFor="text" className="block font-medium py-2">
                image Link:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="image Link"
                className="w-full px-4 py-2 border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="text" className="block font-medium py-2">
                Title:
              </label>
              <input
                type="text"
                id="text"
                name="text"
                placeholder="Title"
                className="w-full px-4 py-2 border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="text" className="block font-medium py-2">
                Add feature:
              </label>
              <input
                type="text"
                id="text"
                name="text"
                placeholder="Add Feature"
                className="w-full px-4 py-2 border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="text" className="block font-medium py-2">
                text-details:
              </label>
              <textarea
                id="text"
                name="text"
                placeholder="text-details"
                className="w-full px-4 py-2 border rounded-md"
                required
              ></textarea>
            </div>
            <Button
              type="submit"
              className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors duration-300"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default AddService;
