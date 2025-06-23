import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Events from "../constants/events";

const Event = () => {
  return (
    <>
      <div className="bg-[#a7a9c6]">
        <Header />
      </div>

      <div className="xl:mx-auto xl:container">
        {Events.map((event, index) => (
          <div className="lg:px-20 md:px-6 px-4 md:py-12 py-8" key={index}>
            <div className="flex flex-col-reverse lg:flex-row items-center">
              {/* Event Image */}
              <div className="w-full lg:w-1/2 md:py-9 py-6">
                <img
                  src={event.image}
                  alt={event.title}
                  className="lg:w-full h-full object-cover object-center w-full rounded"
                />
              </div>

              {/* Event Content */}
              <div className="lg:w-1/2 lg:pl-12 lg:pr-24">
                {/* Location */}
                <p className="leading-none text-gray-600 pb-2 text-base">
                  {event.location}
                </p>

                {/* Date with optional calendar icon */}
                <p className="text-sm text-gray-500 pb-2 flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  {event.date}
                </p>

                {/* Title */}
                <p className="md:text-3xl lg:text-4xl text-2xl font-semibold lg:leading-9 text-gray-800 lg:pb-6 md:pb-4 pb-2">
                  {event.title}
                </p>

                {/* Description */}
                <p className="text-md leading-5 text-gray-600 md:pb-10 pb-8">
                  {event.description}
                </p>

                {/* Optional: Learn more link (commented out) */}
                {/*
                {event.link && (
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Learn more →
                  </a>
                )}
                */}
              </div>
            </div>
          </div>
        ))}

        <Footer />
      </div>
    </>
  );
};

export default Event;
