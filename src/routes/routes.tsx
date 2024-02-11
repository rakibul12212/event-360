import App from "@/App";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Home from "@/pages/home/HomeIndex";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      { index: true, element: <Home></Home> },
      { path: "about", element: <About></About> },
      { path: "contact", element: <Contact></Contact> },
    ],
  },
]);

export default router;
