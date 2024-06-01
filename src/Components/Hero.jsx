import Header from "./Header";
import indiaVillage from "../assets/images/gvnight1.jpg";

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
      <div className="flex flex-col justify-center h-screen text-white bg-black bg-opacity-50 px-6 md:px-10  pt-10 pb-20 ">
        <p className="  text-3xl md:text-5xl lg:text-6xl  font-medium text-center  items-center font-satoshi pb-10">
          Crafting Unforgettable Experiences
          <br />
          Across the Middle East
        </p>
      </div>
    </div>
  );
};

export default Hero;
