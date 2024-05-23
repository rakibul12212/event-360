import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const NavBar = ({ scrollThreshold = 0 }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollThreshold]);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header
      className={`h-16 sticky-nav ${
        isScrolled ? `bg-stone-600` : `bg-[#1b1a14cc]`
      }`}
    >
      <nav className="h-16 sticky-nav h-full w-full max-w-[1340px]  mx-auto px-10 flex justify-between items-center">
        <div>
          <a href="/" className="font-bold text-amber-400 border rounded px-4 py-2">
          Planorama
          </a>
        </div>
        <div className="hidden md:flex items-center space-x-5">
          <NavLink to="/" className="text-white hover:text-[#FFD600]">
            Home
          </NavLink>
          <NavLink to="/about" className="text-white hover:text-[#FFD600]">
            About
          </NavLink>
          <NavLink to="/contact" className="text-white hover:text-[#FFD600]">
            Contact
          </NavLink>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleDropdown}
            className="text-white focus:outline-none focus:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Responsive Dropdown */}
      {isDropdownOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-slate-600">
          <ul className="text-white p-4 space-y-2">
            <li>
              <NavLink to="/" onClick={toggleDropdown}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={toggleDropdown}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={toggleDropdown}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default NavBar;
