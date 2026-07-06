import { Link } from "react-router-dom";
import gallery1 from "../assets/images/gallery1.jpg";
import gallery18 from "../assets/images/gallery18.jpg";
import gallery19 from "../assets/images/gallery19.jpg";
import gvnight3 from "../assets/images/gvnight3.jpg";

const images = [gallery1, gallery18, gallery19, gvnight3];

const GalleryView = () => {
  return (
    <div className="bg-slate-100 px-6 md:px-16 py-16 md:py-20">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-12">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#822168] mb-2">
            Explore
          </p>
          <h1 className="font-satoshi text-4xl md:text-5xl font-bold tracking-tight text-[#002e5d]">
            Gallery
          </h1>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full">
          {images.map((img, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden rounded-xl shadow-md"
            >
              <img
                src={img}
                alt=""
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        <Link
          to="/gallery"
          className="inline-block rounded-full bg-[#822168] px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-lg hover:bg-[#6d1b56] transition-colors"
        >
          View Gallery
        </Link>
      </div>
    </div>
  );
};

export default GalleryView;
