import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Images from "../constants/galleryimages";
import XMarkIcon from "@heroicons/react/24/outline/XMarkIcon";
import ChevronLeftIcon from "@heroicons/react/24/outline/ChevronLeftIcon";
import ChevronRightIcon from "@heroicons/react/24/outline/ChevronRightIcon";
import MagnifyingGlassPlusIcon from "@heroicons/react/24/outline/MagnifyingGlassPlusIcon";
import { useState, useEffect, useCallback } from "react";

const Gallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(null);

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
  };

  const handleCloseOverlay = () => {
    setCurrentImageIndex(null);
  };

  const handlePrevImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  const handleNextImage = useCallback(() => {
    setCurrentImageIndex((prev) =>
      prev < Images.length - 1 ? prev + 1 : prev
    );
  }, []);

  useEffect(() => {
    if (currentImageIndex === null) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") handleCloseOverlay();
      if (e.key === "ArrowLeft") handlePrevImage();
      if (e.key === "ArrowRight") handleNextImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentImageIndex, handlePrevImage, handleNextImage]);

  return (
    <div className="bg-[#002e5d] min-h-screen">
      <div className="bg-[#a7a9c6]">
        <Header />
      </div>
      <div className="gallery-container mx-auto max-w-7xl p-5 md:p-10">
        <div className="text-center py-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#e29ac4] mb-3">
            Our Work
          </p>
          <h1 className="font-satoshi text-4xl md:text-6xl font-bold tracking-tight text-white">
            Gallery
          </h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {Images.map((image, index) => (
            <button
              key={index}
              onClick={() => handleImageClick(index)}
              className="group relative aspect-square overflow-hidden rounded-xl shadow-md"
            >
              <img
                src={image.src}
                alt=""
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <MagnifyingGlassPlusIcon className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </button>
          ))}
        </div>

        {currentImageIndex !== null && (
          <div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex flex-col justify-center items-center px-4"
            onClick={handleCloseOverlay}
          >
            <button
              onClick={handleCloseOverlay}
              aria-label="Close"
              className="absolute top-6 right-6 rounded-full p-2 text-white hover:bg-white/10 transition-colors"
            >
              <XMarkIcon className="h-7 w-7" />
            </button>

            <div className="flex items-center gap-4 md:gap-8 w-full max-w-5xl">
              <button
                disabled={currentImageIndex === 0}
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevImage();
                }}
                aria-label="Previous image"
                className="shrink-0 rounded-full p-2 text-white disabled:opacity-30 hover:bg-white/10 transition-colors"
              >
                <ChevronLeftIcon className="h-8 w-8" />
              </button>

              <img
                src={Images[currentImageIndex].src}
                alt=""
                className="max-h-[80vh] w-full object-contain rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />

              <button
                disabled={currentImageIndex === Images.length - 1}
                onClick={(e) => {
                  e.stopPropagation();
                  handleNextImage();
                }}
                aria-label="Next image"
                className="shrink-0 rounded-full p-2 text-white disabled:opacity-30 hover:bg-white/10 transition-colors"
              >
                <ChevronRightIcon className="h-8 w-8" />
              </button>
            </div>

            <p className="mt-6 text-sm text-gray-300">
              {currentImageIndex + 1} / {Images.length}
            </p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
