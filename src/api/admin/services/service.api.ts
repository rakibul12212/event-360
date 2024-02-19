

export const getServices = async () => {
    return await fetch("http://localhost:5000/data").then((res) => res.json());
  };




