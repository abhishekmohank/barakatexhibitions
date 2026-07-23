import logo from "../assets/images/logo-removebg.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const navLinks = [
  { to: "/", label: "HOME" },
  { to: "/about", label: "ABOUT" },
  { to: "/events", label: "EVENTS" },
  { to: "/gallery", label: "GALLERY" },
  { to: "/achievements", label: "ACHIEVEMENTS" },
];

const ContactButton = ({ className = "", onClick }) => (
  <div className={`relative group shrink-0 animate-contact-pulse ${className}`}>
    <div
      aria-hidden="true"
      className="absolute -inset-[3px] rounded-full opacity-60 blur-md transition-opacity duration-300 group-hover:opacity-100 animate-spin-slow"
      style={{
        background:
          "conic-gradient(from 0deg, transparent 0%, #A52784 25%, transparent 55%, #7B1E63 80%, transparent 100%)",
      }}
    />
    <NavLink
      to="/contact"
      onClick={onClick}
      className="relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#7B1E63] to-[#A52784] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#7B1E63]/30 transition-all duration-300 ease-out group-hover:-translate-y-[3px] group-hover:scale-[1.03] group-hover:from-[#8f2474] group-hover:to-[#b93293] group-hover:shadow-xl group-hover:shadow-[#A52784]/50"
    >
      Contact Us
    </NavLink>
  </div>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((open) => !open);

  return (
    <header className="relative z-50 pt-4 md:pt-6 px-4">
      <div className="md:mx-auto md:w-[92%] lg:w-[80%] max-w-6xl rounded-[24px] bg-white/90 backdrop-blur-lg shadow-lg">
        <div className="flex items-center justify-between h-16 px-6 md:px-8">
          <NavLink
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className="py-2 pr-4 transition-transform duration-300 hover:scale-105"
          >
            <img
              src={logo}
              alt="Shams Al Barakat Exhibitions"
              className="h-12 lg:h-[60px] w-auto"
            />
          </NavLink>

          <button
            className="lg:hidden p-1"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg
              className="w-7 h-7 fill-none stroke-[#822168] stroke-2"
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

          <div className="hidden lg:flex items-center gap-10">
            <ul className="flex items-center gap-9">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `relative inline-block py-1 text-sm font-medium tracking-wide text-[#822168] transition-colors duration-300 after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:bg-[#822168] after:transition-all after:duration-300 ${
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

            <ContactButton />
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <ul className="lg:hidden mt-3 mx-auto w-[92%] max-w-6xl rounded-[24px] bg-white/95 backdrop-blur-xl shadow-xl flex flex-col items-center gap-5 py-6">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `relative inline-block py-1 font-medium tracking-wide text-[#822168] after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:bg-[#822168] after:transition-all after:duration-300 ${
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
          <li>
            <ContactButton onClick={() => setIsMenuOpen(false)} />
          </li>
        </ul>
      )}
    </header>
  );
};

export default Header;
