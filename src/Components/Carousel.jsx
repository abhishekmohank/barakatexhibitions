// Desc: Carousel component for the website
import tickicon from "../assets/images/tickicon.png";

const Carousel = () => {
  return (
    <div className="flex flex-row h-full">
      <div className="flex flex-col gap-2 w-1/4 items-center justify-center p-16 bg-[#002e5d]">
        <img src={tickicon} alt="" className="mb-5" width={75} />
        <div className="w-3/4 text-center text-white ">
          <h1 className="text-3xl font-semibold mb-3">Events</h1>
          <p>
            UPCOMING Shams AlBarakat Exhibitions AT GLOBAL VILLAGE 2022-2023
          </p>
        </div>
        <a href="/Events" className="mt-3 text-white text-lg">
          Read More
        </a>
      </div>
      <div className="flex flex-col gap-2 w-1/4 items-center justify-center p-16 bg-white">
        <img src={tickicon} alt="" className="mb-5" width={75} />
        <div className="w-3/4 text-center  ">
          <h1 className="text-3xl font-semibold mb-3">Events</h1>
          <p>
            UPCOMING Shams AlBarakat Exhibitions AT GLOBAL VILLAGE 2022-2023
          </p>
        </div>
        <a href="/Events" className="mt-3  text-lg">
          Read More
        </a>
      </div>
      <div className="flex flex-col gap-2 w-1/4 items-center justify-center p-16 bg-[#a60000]">
        <img src={tickicon} alt="" className="mb-5" width={75} />
        <div className="w-3/4 text-center text-white ">
          <h1 className="text-3xl font-semibold mb-3">Events</h1>
          <p>
            UPCOMING Shams AlBarakat Exhibitions AT GLOBAL VILLAGE 2022-2023
          </p>
        </div>
        <a href="/Events" className="mt-3 text-white text-lg">
          Read More
        </a>
      </div>
      <div className="flex flex-col gap-2 w-1/4 items-center justify-center p-16 bg-white">
        <img src={tickicon} alt="" className="mb-5" width={75} />
        <div className="w-3/4 text-center  ">
          <h1 className="text-3xl font-semibold mb-3">Events</h1>
          <p>
            UPCOMING Shams AlBarakat Exhibitions AT GLOBAL VILLAGE 2022-2023
          </p>
        </div>
        <a href="/Events" className="mt-3 text-lg">
          Read More
        </a>
      </div>
    </div>
  );
};

export default Carousel;
