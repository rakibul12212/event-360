export const getServices = async () => {
    return await fetch("https://event-360-server-green.vercel.app/data").then((res) => res.json());
  };