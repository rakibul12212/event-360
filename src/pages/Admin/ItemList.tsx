import Container from "@/components/ui/Container";
const ItemList = () => {
  return (
    <Container>
      <div>
        <div className="pt-[131px] pb-[54px]">
          <h1 className="text-5xl font-bold text-center">Event Items</h1>
          <p className="text-[18px] pt-[12px] text-center mx-auto max-w-[800px]">
            Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
            ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
          </p>
        </div>

        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="col-span-1 md:col-span-1">
              <div className="bg-gray-200 rounded-md p-2 w-full h-full flex flex-col">
                <img
                  src="https://i.ibb.co/9cw91sB/Rectangle-2989.png"
                  alt="Image 1"
                  className="mb-2 w-full flex-grow"
                />
                <p className="flex-shrink-0">Event Item - 1</p>
              </div>
            </div>

            <div className="col-span-1 md:col-span-1">
              <div className="rounded-md h-full flex flex-col">
                <div className="bg-gray-200 rounded-md p-2 w-full flex-grow">
                  <img
                    src="https://i.ibb.co/jrdBZTt/Rectangle-2989-1.png"
                    alt="Image 6"
                    className="mb-2 w-full flex-grow"
                  />
                  <p className="flex-shrink-0">Event Item - 6</p>
                </div>

                <div className="grid grid-cols-2 gap-2 mt-4">
                  <div className="bg-gray-200 rounded-md p-2 w-full flex-grow">
                    <img
                      src="https://i.ibb.co/GV8Dtp4/Rectangle-2989-3.png"
                      alt="Image 2"
                      className="mb-2 w-full flex-grow"
                    />
                    <p className="flex-shrink-0">Event Item - 2</p>
                  </div>
                  <div className="bg-gray-200 rounded-md p-2 w-full flex-grow">
                    <img
                      src="https://i.ibb.co/YjmrjPZ/Rectangle-2989-4.png"
                      alt="Image 3"
                      className="mb-2 w-full flex-grow"
                    />
                    <p className="flex-shrink-0">Event Item - 3</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-1 md:col-span-1 ">
              <div className="grid gap-y-4  rounded-md h-full ">
                <div className="bg-gray-200 rounded-md p-2 w-full flex-grow">
                  <img
                    src="https://i.ibb.co/BTZG9H6/Rectangle-2989-2.png"
                    alt="Image 4"
                    className="mb-2 w-full flex-grow"
                  />
                  <p className="flex-shrink-0">Event Item - 4</p>
                </div>
                <div className="bg-gray-200 rounded-md p-2 w-full flex-grow">
                  <img
                    src="https://i.ibb.co/wNYhhrD/Rectangle-2989-5.png"
                    alt="Image 5"
                    className="mb-2 w-full flex-grow"
                  />
                  <p className="flex-shrink-0">Event Item - 5</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ItemList;
