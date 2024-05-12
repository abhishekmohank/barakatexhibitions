import gallery1 from "../assets/images/gallery1.jpg";

const GalleryView = () => {
  return (
    <div className="flex justify-center p-16 bg-[#002e5d]">
      <div className="flex flex-col w-3/4 gap-10 items-center justify-center">
        <div className="flex flex-row gap-6 text-white">
          <p className="font-bold text-5xl">G</p>
          <p className="font-bold text-5xl">A</p>
          <p className="font-bold text-5xl">L</p>
          <p className="font-bold text-5xl">L</p>
          <p className="font-bold text-5xl">E</p>
          <p className="font-bold text-5xl">R</p>
          <p className="font-bold text-5xl">Y</p>
        </div>
        <div className="flex flex-row gap-10">
          <div>
            <img src={gallery1} alt="" className="object-contain" width={350} />
          </div>
          <div>
            <img src={gallery1} alt="" className="object-contain" width={350} />
          </div>
          <div>
            <img src={gallery1} alt="" className="object-contain" width={350} />
          </div>
          <div>
            <img src={gallery1} alt="" className="object-contain" width={350} />
          </div>
          <div className="bg-[#a60000] w-[350px]  flex items-center justify-center">
            <a
              href="/Gallery"
              className="font-semibold text-xl text-white align-middle	hover:text-black"
            >
              {" "}
              View Gallery {">"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryView;
