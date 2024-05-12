import indiaVillage from "../assets/images/gvindia.jpg";

const Company = () => {
  return (
    <div>
      <img
        src={indiaVillage}
        alt=""
        className="absolute object-cover -z-10 w-full "
      />
      <div
        className=" inset-0 bg-red-500 opacity-50"
        style={{ mixBlendMode: "multiply" }}
      ></div>

      <div className="p-20 flex justify-center items-center">
        <div className="w-96 h-96 rounded-full bg-white flex flex-col justify-center  text-center">
          <h1 className="pb-5 font-semibold text-lg ">
            Team of Exhibhition Specialist
          </h1>
          <p className="p-3">
            Shams Al Barakat Exhibitions LLC is the Event and Exhibition
            Specialist based in Dubai, United Arab Emirates, engaged in the
            Exhibition in the entire middle East cities – Dubai, Abu Dhabi, Al
            Ain (UAE) Madina, Jedda and Riyad(Saudi Arabia) Kuwait City(Kuwait)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Company;
