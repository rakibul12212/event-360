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
      <h1>All Data</h1>
      {data ? (
        <div>
          <h2>Services</h2>
          <ul>
            {data[0].services.map((service) => (
              <li key={service["services-id"]}>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <img src={service.image} alt="" />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ServiceList;
