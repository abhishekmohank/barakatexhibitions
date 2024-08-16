// Desc: Carousel component for the website
import tickicon from "../assets/images/tickicon.png";

const Carousel = () => {
  return (
    <div className="flex md:flex-row flex-col h-auto">
      <div className="flex flex-col gap-2 md:w-1/4 w-auto items-center justify-center p-16 bg-[#002e5d]">
        <img src={tickicon} alt="" className="mb-5" width={75} />
        <div className="w-3/4 text-center text-white ">
          <h1 className="text-3xl font-semibold mb-3">Experience</h1>
          <p className="text-md">
            More than 18 Years of Experience in the Industry
          </p>
        </div>
        <a
          href="/About"
          className="mt-3 text-white text-lg hover:text-gray-950"
        >
          Read More
        </a>
      </div>
      <div className="flex flex-col gap-2 md:w-1/4 items-center justify-center p-16 bg-white">
        <div className="py-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-20 h-20"
          >
            <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
            <path
              fillRule="evenodd"
              d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="w-3/4 text-center  ">
          <h1 className="text-3xl font-semibold mb-3">Events</h1>
          <p>
            Learn More about our upcoming Events and Exhibitions in the Industry
          </p>
        </div>
        <a href="/Events" className="mt-3  text-lg hover:text-[#a60000]">
          Read More
        </a>
      </div>
      <div className="flex flex-col gap-2 md:w-1/4 items-center justify-center p-16 bg-[#002e5d]">
        <div className="py-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-20 h-20"
          >
            <path
              fillRule="evenodd"
              d="M4.5 2.25a.75.75 0 0 0 0 1.5v16.5h-.75a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5h-.75V3.75a.75.75 0 0 0 0-1.5h-15ZM9 6a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H9Zm-.75 3.75A.75.75 0 0 1 9 9h1.5a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM9 12a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H9Zm3.75-5.25A.75.75 0 0 1 13.5 6H15a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM13.5 9a.75.75 0 0 0 0 1.5H15A.75.75 0 0 0 15 9h-1.5Zm-.75 3.75a.75.75 0 0 1 .75-.75H15a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM9 19.5v-2.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 9 19.5Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="w-3/4 text-center  text-white">
          <h1 className="text-3xl font-semibold mb-3">Our Offices</h1>
          <p>
            We are headquartered in Dubai, UAE. Our work covers the Middle East
            and is Expanding
          </p>
        </div>
        <a
          target="blank"
          href="https://maps.app.goo.gl/kex1Ed72K5aquwGU7?g_st=iw"
          className="mt-3  text-lg text-white hover:text-gray-950"
        >
          Read More
        </a>
      </div>
      <div className="flex flex-col gap-2 md:w-1/4 items-center justify-center p-16 bg-white">
        <div className="py-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-20 h-20"
          >
            <path
              fillRule="evenodd"
              d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="w-3/4 text-center  ">
          <h1 className="text-3xl font-semibold mb-3">Contact</h1>
          <p>
            If you have an idea for a new event, or want to speak with a member
            of the team please get in touch.
          </p>
        </div>
        <a href="/Contact" className="mt-3 text-lg hover:text-[#a60000]">
          Read More
        </a>
      </div>
    </div>
  );
};

export default Carousel;
