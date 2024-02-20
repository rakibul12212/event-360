

export const getServices = async () => {
    return await fetch("https://event360-server-eta.vercel.app/data").then((res) => res.json());
  };




