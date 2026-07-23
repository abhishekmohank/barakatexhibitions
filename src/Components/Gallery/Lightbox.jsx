import { useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import XMarkIcon from "@heroicons/react/24/outline/XMarkIcon";
import ChevronLeftIcon from "@heroicons/react/24/outline/ChevronLeftIcon";
import ChevronRightIcon from "@heroicons/react/24/outline/ChevronRightIcon";

const Lightbox = ({ images, index, onClose, onPrev, onNext }) => {
  const isOpen = index !== null;
  const image = isOpen ? images[index] : null;

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  const hasCaption = image && (image.title || image.location || image.year);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex flex-col justify-center items-center px-4"
          onClick={onClose}
        >
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-6 right-6 rounded-full p-2 text-white hover:bg-white/10 transition-colors"
          >
            <XMarkIcon className="h-7 w-7" />
          </button>

          <div className="flex items-center gap-4 md:gap-8 w-full max-w-5xl">
            <button
              disabled={index === 0}
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              aria-label="Previous image"
              className="shrink-0 rounded-full p-2 text-white disabled:opacity-30 hover:bg-white/10 transition-colors"
            >
              <ChevronLeftIcon className="h-8 w-8" />
            </button>

            <motion.img
              key={image?.src}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              src={image?.src}
              alt={image?.title || "Gallery photo"}
              className="max-h-[75vh] w-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              disabled={index === images.length - 1}
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              aria-label="Next image"
              className="shrink-0 rounded-full p-2 text-white disabled:opacity-30 hover:bg-white/10 transition-colors"
            >
              <ChevronRightIcon className="h-8 w-8" />
            </button>
          </div>

          <div className="mt-6 text-center">
            {hasCaption && (
              <>
                {image.title && (
                  <p className="text-white font-semibold">{image.title}</p>
                )}
                {(image.location || image.year) && (
                  <p className="text-gray-300 text-sm mt-1">
                    {[image.location, image.year].filter(Boolean).join(" · ")}
                  </p>
                )}
              </>
            )}
            <p className="text-sm text-gray-400 mt-2">
              {index + 1} / {images.length}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Lightbox;
