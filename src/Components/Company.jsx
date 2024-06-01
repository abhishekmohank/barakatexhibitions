import gvnight2 from "../assets/images/gvnight2.jpg";

const Company = () => {
  return (
    <div>
      <img
        src={gvnight2}
        alt=""
        className="absolute object-cover -z-10 w-full "
      />

      <div className="relative p-20 flex justify-center">
        <div className="bg-gray-800 opacity-50 absolute inset-0"></div>
        <div className="md:w-96 md:h-96 bg-white flex flex-col  text-center relative z-10 rounded-[30px]">
          <h1 className="p-5 pt-10 font-semibold text-3xl">
            Team of Exhibition Specialist
          </h1>
          <p className="px-8 pt-5 text-base">
            Shams Al Barakat Exhibitions LLC is the Event and Exhibition
            Specialist based in Dubai, United Arab Emirates, engaged in the
            Exhibition in the entire Middle East cities – Dubai, Abu Dhabi, Al
            Ain (UAE) Madina, Jeddah, and Riyadh (Saudi Arabia) Kuwait City
            (Kuwait)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Company;
