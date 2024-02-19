import { getServices } from "@/api/admin/services/service.api";
import { useQuery } from "@tanstack/react-query";
import CheckMark from "@/components/ui/CheckMark/CheckMark";
import Container from "@/components/ui/Container";

interface ServiceDetail {
  id: string;
  text: string;
}

interface Service {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  services: any;
  "services-id": string;
  image: string;
  title: string;
  details: ServiceDetail[];
  text: string;
}

const ServiceList = () => {
  const { data, isLoading } = useQuery<Service[]>({
    queryKey: ["services"],
    queryFn: getServices,
  });

  if (isLoading || !data) {
    return <p>loading...</p>;
  }

  return (
    <Container>
      <p className="text-center text-[48px] font-[extrabold] pt-[131px] pb-5">
        Service List
      </p>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data[0].services.map((service) => (
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
                    <li>{detail.text}</li>
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
                    <li>{detail.text}</li>
                  </div>
                ))}
              </ol>
              <button className="w-full bg-gradient-to-r from-amber-400 to-amber-600 p-4 text-black cursor-pointer hover:opacity-70 transition-opacity duration-300 ease-in-out px-10 py-2">
                Check it out
              </button>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ServiceList;
