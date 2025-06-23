import gallery1 from "../assets/images/gallery1.jpg";
import gallery18 from "../assets/images/gallery18.jpg";
import gallery19 from "../assets/images/gallery19.jpg";
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
                src={gallery18}
                alt=""
                className="object-contain"
                width={350}
              />
            </div>
            <div>
              <img
                src={gallery19}
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
          <div className="bg-gray-900 h-14 flex items-center justify-center mt-10 w-52 rounded-xl">
            <a
              href="/Gallery"
              className="font-semibold text-xl hover:text-white align-middle	text-gray-300"
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
