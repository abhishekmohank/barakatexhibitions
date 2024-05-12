import Header from "./Header";
import indiaVillage from "../assets/images/gvnight1.jpg";

const Hero = () => {
  return (
    <div className="hero min-h-screen relative overflow-hidden">
      <img
        src={indiaVillage}
        alt=""
        className="absolute object-cover  top-0 left-0 -z-10 w-full "
      />
      <Header />
      <div className=" flex flex-col h-screen text-white items-end pt-10 pr-10">
        <p className="text-2xl ">
          Specialized Exhibition Organizer in Middle East
        </p>
      </div>
    </div>
  );
};

export default Hero;
