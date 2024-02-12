import { getServices } from "@/api/admin/services/service.api";
import { useQuery } from "@tanstack/react-query";

const ServiceList = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["services"],
    queryFn: getServices,
  });

  if (isLoading) {
    return <p>loading...</p>;
  }

  console.log({ isLoading, data });

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          {item.data.map((service) => (
            <div key={service.id}>
              <h2>{service.title}</h2>
            </div>
          ))}
        </div>
      ))}
      {/* {data.map((item) => (
        <h1 key={item.id}>{item.title}</h1>
      ))} */}
    </div>
  );
};

export default ServiceList;
