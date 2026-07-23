import { Link } from "react-router-dom";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/events", label: "Events" },
  { to: "/gallery", label: "Gallery" },
  { to: "/achievements", label: "Achievements" },
  { to: "/contact", label: "Contact" },
];

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Footer = () => {
  return (
    <div className="relative bg-gray-900 text-white">
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className="absolute -top-6 left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-[#822168] text-white shadow-lg hover:bg-[#6d1b56] hover:-translate-y-1 transition-all duration-300"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </button>

      <div className="container mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              height="28px"
              width="28px"
              strokeWidth="1.5"
              stroke="currentColor"
              className="mb-3 text-[#e29ac4]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
            <h3 className="font-satoshi font-semibold mb-2">Visit</h3>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://maps.app.goo.gl/kex1Ed72K5aquwGU7?g_st=iw"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Shams Al Barakat Exhibitions LLC Office: M-09 Arabilla Building,
              15C Street, Hor Al Anz East, Dubai - UAE
            </a>
          </div>

          <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              height="28px"
              width="28px"
              stroke="currentColor"
              className="mb-3 text-[#e29ac4]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
            <h3 className="font-satoshi font-semibold mb-2">Mobile</h3>
            <a
              href="tel:+971503545972"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              +971 50 354 5972
            </a>
          </div>

          <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              height="28px"
              width="28px"
              stroke="currentColor"
              className="mb-3 text-[#e29ac4]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
            <h3 className="font-satoshi font-semibold mb-2">Email</h3>
            <a
              href="mailto:info@barakatexhibitions.com"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              info@barakatexhibitions.com
            </a>
          </div>

          <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
            <h3 className="font-satoshi font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10">
          <p className="text-sm text-gray-500">
            © 2026 Shams Al Barakat Exhibitions LLC. All rights reserved.
          </p>
          <a
            href="https://www.instagram.com/barakatexhibitions/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-[#e29ac4] transition-colors"
            aria-label="Instagram"
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
