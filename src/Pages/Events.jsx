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
              <div className="w-full lg:w-1/2 md:py-9 py-6">
                <img
                  src={event.image}
                  alt="bag"
                  className="lg:w-full h-full object-cover object-center w-full"
                />
              </div>
              <div className="lg:w-1/2 lg:pl-12 lg:pr-24">
                <p className="text-sm leading-none text-gray-600 pb-2">
                  {event.location}
                </p>
                <p className="md:text-3xl lg:text-4xl text-2xl font-semibold lg:leading-9 text-gray-800 lg:pb-6 md:pb-4 pb-2">
                  {event.title}
                </p>
                <p className="text-sm leading-5 text-gray-600 md:pb-10 pb-8">
                  {event.description}
                </p>
                <div className="md:block flex items-center justify-center">
                  <a href={event.link}>
                    <button className="lg:w-auto w-full border border-gray-800 hover:text-gray-50 hover:bg-gray-800 focus:outline-none lg:px-10 px-7 lg:py-4 py-3 text-sm leading-none text-gray-800">
                      Read More
                    </button>
                  </a>
                </div>
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
