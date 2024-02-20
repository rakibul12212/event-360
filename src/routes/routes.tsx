import App from "@/App";
import AdminLayout from "@/components/ui/layouts/AdminLayout";
import About from "@/pages/About";
import AddItem from "@/pages/Admin/AddItem";
import AddService from "@/pages/Admin/AddService";
import Dashboard from "@/pages/Admin/Dashboard";
import ItemList from "@/pages/Admin/ItemList";
import ServiceList from "@/pages/Admin/ServiceList";
import Contact from "@/pages/Contact";
import Home from "@/pages/home/HomeIndex";

import { Navigate, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      { index: true, element: <Home></Home> },
      { path: "about", element: <About></About> },
      { path: "contact", element: <Contact></Contact> },
      { path: "admin", element: <AdminLayout></AdminLayout> },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout></AdminLayout>,
    children: [
      { index: true, element: <Navigate to="/admin/dashboard"></Navigate> },
      { path: "dashboard", element: <Dashboard></Dashboard> },
      { path: "service-list", element: <ServiceList></ServiceList> },
      { path: "add-service", element: <AddService></AddService> },
      { path: "add-item", element: <AddItem></AddItem> },
      { path: "item-list", element: <ItemList></ItemList> },
    ],
  },
]);

export default router;
