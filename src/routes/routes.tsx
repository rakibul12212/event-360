import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";

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
