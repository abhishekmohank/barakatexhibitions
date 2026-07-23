import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import XMarkIcon from "@heroicons/react/24/outline/XMarkIcon";
import ChevronLeftIcon from "@heroicons/react/24/outline/ChevronLeftIcon";
import ChevronRightIcon from "@heroicons/react/24/outline/ChevronRightIcon";

const AchievementModal = ({ item, onClose }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = item?.images?.length ? item.images : [];
  const hasMultiple = images.length > 1;

  useEffect(() => {
    setActiveIndex(0);
  }, [item]);

  useEffect(() => {
    if (!item) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && hasMultiple) {
        setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
      }
      if (e.key === "ArrowRight" && hasMultiple) {
        setActiveIndex((prev) => (prev + 1) % images.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [item, onClose, hasMultiple, images.length]);

  const hasMeta = item && (item.location || item.year);

  const goPrev = (e) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goNext = (e) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="achievement-modal-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center px-4 py-8"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              aria-label="Close achievement details"
              className="absolute top-4 right-4 z-20 rounded-full bg-white/95 backdrop-blur p-2 text-gray-500 shadow-md hover:text-gray-900 hover:scale-105 transition-all duration-200"
            >
              <XMarkIcon className="w-5 h-5" />
            </button>

            {images.length > 0 && (
              <div className="relative w-full h-64 md:h-96 bg-gray-100 overflow-hidden rounded-t-3xl">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeIndex}
                    src={images[activeIndex]}
                    alt={`${item.title} ${activeIndex + 1}`}
                    loading="lazy"
                    decoding="async"
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>

                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />

                {hasMultiple && (
                  <>
                    <button
                      onClick={goPrev}
                      aria-label="Previous image"
                      className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 backdrop-blur p-2 text-gray-700 shadow-md hover:bg-white hover:scale-110 transition-all duration-200"
                    >
                      <ChevronLeftIcon className="w-5 h-5" />
                    </button>
                    <button
                      onClick={goNext}
                      aria-label="Next image"
                      className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 backdrop-blur p-2 text-gray-700 shadow-md hover:bg-white hover:scale-110 transition-all duration-200"
                    >
                      <ChevronRightIcon className="w-5 h-5" />
                    </button>
                    <span className="absolute bottom-4 right-4 rounded-full bg-black/60 text-white text-xs font-semibold px-3 py-1 tracking-wide">
                      {activeIndex + 1} / {images.length}
                    </span>
                  </>
                )}
              </div>
            )}

            {hasMultiple && (
              <div className="flex gap-2.5 px-8 md:px-10 pt-5 overflow-x-auto">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    aria-label={`View image ${index + 1}`}
                    aria-current={index === activeIndex}
                    className={`shrink-0 w-16 h-16 rounded-xl overflow-hidden ring-2 transition-all duration-200 ${
                      index === activeIndex
                        ? "ring-[#822168] scale-[1.03]"
                        : "ring-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={img}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            <div className="p-8 md:p-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-8 bg-[#822168]" />
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#822168]">
                  {item.exhibition}
                </p>
              </div>
              <h2
                id="achievement-modal-title"
                className="font-satoshi text-2xl md:text-3xl font-bold tracking-tight text-gray-900 mb-2"
              >
                {item.title}
              </h2>
              {hasMeta && (
                <p className="text-sm text-gray-400 mb-6">
                  {[item.location, item.year].filter(Boolean).join(" · ")}
                </p>
              )}

              <p className="text-base leading-relaxed text-gray-600 text-justify hyphens-auto">
                {item.description}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AchievementModal;
