import logo from "../assets/images/logo-removebg.png";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between lg:w-9/12 m-auto py-2 bg-[#0a0a0a]">
      <div className="flex items-center justify-between w-full lg:w-auto mb-4 lg:mb-0">
        <a href="/">
          <img src={logo} alt="" className="max-w-72" />
        </a>
        <button className="lg:hidden" onClick={toggleMenu}>
          {/* Mobile menu icon */}
          <svg
            className="w-6 h-6 fill-current text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
          </svg>
        </button>
      </div>
      <ul
        className={`lg:flex flex-col lg:flex-row gap-4 lg:gap-10 text-center lg:text-left w-full lg:w-auto ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <li className="hover:text-red-800 text-white font-medium">
          <a href="/about">ABOUT</a>
        </li>
        <li className="hover:text-red-800 text-white font-medium">
          <a href="/events">EVENTS</a>
        </li>
        <li className="hover:text-red-800 text-white font-medium">
          <a href="/gallery">GALLERY</a>
        </li>
        <li className="hover:text-red-800 text-white font-medium">
          <a href="contact">CONTACT</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
