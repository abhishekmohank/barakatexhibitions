import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Events from "../constants/events";

const Event = () => {
  return (
    <>
      <div className="bg-[#a7a9c6]">
        <Header />
      </div>

      <div className="xl:mx-auto xl:container lg:px-20 md:px-6 px-4 md:py-12 py-8">
        <h1 className="font-satoshi text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 pb-8">
          Upcoming & Past Events
        </h1>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {Events.map((event) => (
            <Link
              to={`/events/${event.id}`}
              key={event.id}
              className="group flex flex-col rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="w-full h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col flex-1 p-5">
                <p className="text-sm text-gray-500 pb-1">{event.location}</p>
                <p className="text-xs text-gray-400 pb-3">{event.date}</p>
                <p className="text-lg font-semibold text-gray-800 group-hover:text-[#822168] transition-colors">
                  {event.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Event;
