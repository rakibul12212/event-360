
import { Outlet } from "react-router-dom";
import Sideber from "./Sideber";

const AdminLayout = () => {
  return (
    <div className="grid grid-cols-12">
      <Sideber></Sideber>
      <div className="col-span-10 h-[200vh]">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default AdminLayout;
