// import { useEffect, useState } from "react";

const ItemList = () => {
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch("http://localhost:5000/data");
  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }
  //     const jsonData = await response.json();
  //     setData(jsonData);
  //   } catch (error) {
  //     console.error("There was a problem fetching the data:", error);
  //   }
  // };
  return (
    // <div>
    //   <h1>All Data</h1>
    //   {data ? (
    //     <div>
    //       <h2>Services</h2>
    //       <ul>
    //         {data[0].services.map((service) => (
    //           <li key={service["services-id"]}>
    //             <h3>{service.title}</h3>
    //             <p>{service.text}</p>
    //             <img src={service.image} alt="" />
    //           </li>
    //         ))}
    //       </ul>

    //       <h2>Items</h2>
    //       <ul>
    //         {data[0].items.map((item) => (
    //           <li key={item.id}>
    //             <h3>{item.title}</h3>
    //           </li>
    //         ))}
    //       </ul>

    //       <h2>Plans</h2>
    //       <ul>
    //         {data[0].plans.map((plan) => (
    //           <li key={plan["plans-id"]}>
    //             <h3>{plan.header}</h3>
    //             <p>{plan.title}</p>
    //           </li>
    //         ))}
    //       </ul>

    //       <h2>Testimonials</h2>
    //       <ul>
    //         {data[0].testimonials.map((testimonial) => (
    //           <li key={testimonial["testimonials-id"]}>
    //             <h3>{testimonial.name}</h3>
    //             <p>{testimonial.description}</p>
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //   ) : (
    //     <p>Loading...</p>
    //   )}
    // </div>
    <div>
      <p>item list</p>
    </div>
  );
};

export default ItemList;
