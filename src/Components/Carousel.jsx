import { Link } from "react-router-dom";
import tickicon from "../assets/images/tickicon.png";

const items = [
  {
    title: "Experience",
    description: "More than 18 years of experience in the industry.",
    to: "/about",
    icon: <img src={tickicon} alt="" className="w-10 h-10" />,
  },
  {
    title: "Events",
    description:
      "Learn more about our upcoming events and exhibitions in the industry.",
    to: "/events",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
        <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
        <path
          fillRule="evenodd"
          d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    title: "Our Offices",
    description:
      "We are headquartered in Dubai, UAE. Our work covers the Middle East and is expanding.",
    to: "https://maps.app.goo.gl/kex1Ed72K5aquwGU7?g_st=iw",
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
        <path
          fillRule="evenodd"
          d="M4.5 2.25a.75.75 0 0 0 0 1.5v16.5h-.75a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5h-.75V3.75a.75.75 0 0 0 0-1.5h-15ZM9 6a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H9Zm-.75 3.75A.75.75 0 0 1 9 9h1.5a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM9 12a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H9Zm3.75-5.25A.75.75 0 0 1 13.5 6H15a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM13.5 9a.75.75 0 0 0 0 1.5H15A.75.75 0 0 0 15 9h-1.5Zm-.75 3.75a.75.75 0 0 1 .75-.75H15a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM9 19.5v-2.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 9 19.5Z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    title: "Contact",
    description:
      "If you have an idea for a new event, or want to speak with a member of the team, please get in touch.",
    to: "/contact",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
        <path
          fillRule="evenodd"
          d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

const Carousel = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200">
      {items.map((item) => (
        <div
          key={item.title}
          className="group flex flex-col items-center text-center gap-4 bg-white p-10 md:p-12 hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-[#822168]/10 text-[#822168]">
            {item.icon}
          </div>
          <h1 className="text-2xl font-semibold text-gray-900">
            {item.title}
          </h1>
          <p className="text-gray-600 max-w-xs">{item.description}</p>

          {item.external ? (
            <a
              href={item.to}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center gap-1 text-sm font-semibold uppercase tracking-wide text-[#822168] group-hover:gap-2 transition-all"
            >
              Read More
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          ) : (
            <Link
              to={item.to}
              className="mt-2 inline-flex items-center gap-1 text-sm font-semibold uppercase tracking-wide text-[#822168] group-hover:gap-2 transition-all"
            >
              Read More
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};

export default Carousel;
