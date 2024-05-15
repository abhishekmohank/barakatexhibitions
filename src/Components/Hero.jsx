import Header from "./Header";
import indiaVillage from "../assets/images/gvnight1.jpg";

const Hero = () => {
  return (
    <div className="hero relative overflow-hidden bg-opacity-50">
      <div className="bg-[#0a0a0a]">
        <Header />
      </div>
      <img
        src={indiaVillage}
        alt=""
        className="absolute object-cover top-0 left-0 -z-10 w-full h-full"
      />
      <div className="flex flex-col justify-center h-screen text-white bg-black bg-opacity-50 px-6 md:px-10 lg:px-20 pt-10 pb-20 ">
        <p className=" flex text-3xl md:text-5xl lg:text-6xl leading-8 font-medium absolute  items-center font-satoshi pb-10">
          Specialized Exhibition Organizer
          <br />
          in Middle East
        </p>
      </div>
    </div>
  );
};

export default Hero;
