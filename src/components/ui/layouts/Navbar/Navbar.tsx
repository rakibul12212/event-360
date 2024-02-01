import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../../Button";

const Navbar = () => {
  return (
    <header className="h-16 bg-slate-600">
      <nav className="h-full w-full max-w-[1200px] px-[40px] mx-auto flex justify-between items-center">
        <div>
          <span className="font-bold text-2xl text-white">Event</span>{" "}
          <span className="font-bold text-2xl text-[#FFD600]">360</span>
        </div>
        <ul className="space-x-5 text-white">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <Button onClick={() => console.log("Button clicked")}>
            YourButtonText
          </Button>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
