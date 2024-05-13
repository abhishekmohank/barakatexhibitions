import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Images from "../constants/galleryimages";
import XMarkIcon from "@heroicons/react/24/outline/XMarkIcon";
import ChevronLeftIcon from "@heroicons/react/24/outline/ChevronLeftIcon";
import ChevronRightIcon from "@heroicons/react/24/outline/ChevronRightIcon";
import { useState } from "react";

const Gallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(null);

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
  };

  const handleCloseOverlay = () => {
    setCurrentImageIndex(null); // Close the overlay
  };

  const handlePrevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const handleNextImage = () => {
    if (currentImageIndex < Images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  return (
    <div className="bg-[#002e5d] min-h-screen">
      <div className="bg-gray-900">
        <Header />
      </div>
      <div className="gallery-container mx-auto max-w-7xl p-5 md:p-10">
        <div className="text-center py-10">
          <h1 className="text-4xl md:text-6xl font-bold tracking-widest text-white">
            Gallery
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Images.map((image, index) => (
            <div key={index} className="image-container">
              <img
                src={image.src}
                alt=""
                onClick={() => handleImageClick(index)}
                className="cursor-pointer w-full"
              />
            </div>
          ))}
        </div>
        {currentImageIndex !== null && (
          <div
            className="overlay fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 z-50 flex justify-center items-center"
            onClick={handleCloseOverlay}
          >
            <div className="image-wrapper flex justify-center items-center md:flex-row shadow-lg rounded-lg p-4 gap-5">
              <XMarkIcon
                className="absolute top-0 right-0 h-8 w-8 cursor-pointer text-white hover:text-gray-500 m-4"
                onClick={handleCloseOverlay}
              />
              <button
                className="disabled:opacity-50 hover:text-gray-500"
                disabled={currentImageIndex === 0}
                onClick={(e) => e.stopPropagation()}
              >
                <ChevronLeftIcon
                  className="h-10 w-10 text-white"
                  onClick={handlePrevImage}
                />
              </button>
              <img
                src={Images[currentImageIndex].src}
                alt=""
                className="w-full object-contain max-w-screen-sm"
                onClick={(e) => e.stopPropagation()}
              />
              <button
                className="disabled:opacity-50 hover:text-gray-500"
                disabled={currentImageIndex === Images.length - 1}
                onClick={(e) => e.stopPropagation()}
              >
                <ChevronRightIcon
                  className="h-10 w-10 text-white"
                  onClick={handleNextImage}
                />
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
