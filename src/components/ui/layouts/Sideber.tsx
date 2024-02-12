import { cn } from "@/lib/utils";
import { LayoutDashboard } from "lucide-react";
import { NavLink } from "react-router-dom";

const Sideber = () => {
  return (
    <aside className="bg-gray-100 p-5 col-span-2 h-screen sticky top-0 left-0 overflow-auto">
      <nav className="flex flex-col gap-y-3 text-[18px]">
        <NavLink
          to="/admin/dashboard"
          className={({ isActive }) =>
            cn(
              "bg-gray-300 p-3 rounded-md hover:bg-gradient-to-r from-amber-400 to-amber-600 transition-all flex items-center gap-2",
              {
                "bg-gradient-to-r from-amber-400 to-amber-600": isActive,
              }
            )
          }
        >
          <LayoutDashboard className="shrink-0" />
          <span className="truncate ">Dashboard</span>
        </NavLink>
        <NavLink
          to="/admin/add-service"
          className={({ isActive }) =>
            cn(
              "bg-gray-300 p-3 rounded-md hover:bg-gradient-to-r from-amber-400 to-amber-600 transition-all flex items-center gap-2",
              {
                "bg-gradient-to-r from-amber-400 to-amber-600": isActive,
              }
            )
          }
        >
          <LayoutDashboard className="shrink-0" />
          <span className="truncate ">Add Service</span>
        </NavLink>
        <NavLink
          to="/admin/service-list"
          className={({ isActive }) =>
            cn(
              "bg-gray-300 p-3 rounded-md hover:bg-gradient-to-r from-amber-400 to-amber-600 transition-all flex items-center gap-2",
              {
                "bg-gradient-to-r from-amber-400 to-amber-600": isActive,
              }
            )
          }
        >
          <LayoutDashboard className="shrink-0" />
          <span className="truncate ">Service list</span>
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sideber;
