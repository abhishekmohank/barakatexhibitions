import Header from "./Header";
import indiaVillage from "../assets/images/gvnight1.webp";

const Hero = () => {
  return (
    <div className="hero relative overflow-hidden bg-opacity-50">
      <div className="bg-[#a7a9c6]">
        <Header />
      </div>
      <img
        src={indiaVillage}
        alt=""
        className="absolute object-cover top-0 left-0 -z-10 w-full h-full"
      />
      <div className="flex flex-col justify-center h-screen text-white bg-black bg-opacity-50 px-6 md:px-10 pt-10 pb-20">
        <p className="text-center text-xs md:text-sm font-semibold uppercase tracking-[0.3em] text-[#e29ac4] mb-4">
          Shams Al Barakat Exhibitions
        </p>
        <h1 className="font-satoshi font-bold tracking-tight leading-tight text-4xl md:text-6xl lg:text-7xl text-center">
          Crafting <span className="text-[#e29ac4]">Unforgettable</span>{" "}
          Experiences
          <br />
          Across the Middle East
        </h1>
      </div>
    </div>
  );
};

export default Hero;
