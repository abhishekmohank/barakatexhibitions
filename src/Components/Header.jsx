import logo from "../assets/images/logo-removebg.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const navLinks = [
  { to: "/", label: "HOME" },
  { to: "/about", label: "ABOUT" },
  { to: "/events", label: "EVENTS" },
  { to: "/gallery", label: "GALLERY" },
  { to: "/contact", label: "CONTACT" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between lg:w-9/12 m-auto py-3">
      <div className="flex items-center justify-between w-full lg:w-auto mb-4 lg:mb-0">
        <a href="/" className="transition-transform hover:scale-[1.02]">
          <img src={logo} alt="" className="max-w-60 lg:max-w-72" />
        </a>
        <button
          className="lg:hidden p-1"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-7 h-7 fill-none stroke-white stroke-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>
      <ul
        className={`lg:flex flex-col lg:flex-row gap-5 lg:gap-10 text-center lg:text-left w-full lg:w-auto ${
          isMenuOpen ? "flex" : "hidden"
        }`}
      >
        {navLinks.map((link) => (
          <li key={link.to} className="text-[#822168] font-medium">
            <NavLink
              to={link.to}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `relative inline-block py-1 tracking-wide after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:bg-[#822168] after:transition-all after:duration-300 ${
                  isActive
                    ? "font-semibold after:w-full"
                    : "after:w-0 hover:after:w-full"
                }`
              }
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
