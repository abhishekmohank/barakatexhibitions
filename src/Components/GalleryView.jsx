import gallery1 from "../assets/images/gallery1.jpg";
import gallery2 from "../assets/images/gallery2.jpg";
import gallery3 from "../assets/images/gallery3.jpg";
import gvnight3 from "../assets/images/gvnight3.jpg";

const GalleryView = () => {
  return (
    <div className="flex justify-center md:px-16 md:py-20 bg-slate-200 pb-6">
      <div className="flex flex-col w-3/4 gap-10 items-center justify-center">
        <div className="flex flex-row gap-6 text-[#002e5d]">
          <p className="font-bold text-5xl">G</p>
          <p className="font-bold text-5xl">A</p>
          <p className="font-bold text-5xl">L</p>
          <p className="font-bold text-5xl">L</p>
          <p className="font-bold text-5xl">E</p>
          <p className="font-bold text-5xl">R</p>
          <p className="font-bold text-5xl">Y</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-wrap justify-center  gap-10">
            <div>
              <img
                src={gallery1}
                alt=""
                className="object-contain"
                width={350}
              />
            </div>
            <div>
              <img
                src={gallery2}
                alt=""
                className="object-contain"
                width={350}
              />
            </div>
            <div>
              <img
                src={gallery3}
                alt=""
                className="object-contain"
                width={350}
              />
            </div>
            <div>
              <img
                src={gvnight3}
                alt=""
                className="object-contain"
                width={350}
              />
            </div>
          </div>
          <div className="bg-[#a60000] h-14 flex items-center justify-center mt-10 w-52 rounded-xl">
            <a
              href="/Gallery"
              className="font-semibold text-xl text-white align-middle	hover:text-black"
            >
              {" "}
              View Gallery
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryView;
