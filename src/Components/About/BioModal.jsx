import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import XMarkIcon from "@heroicons/react/24/outline/XMarkIcon";

const BioModal = ({ member, onClose }) => {
  useEffect(() => {
    if (!member) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [member, onClose]);

  return (
    <AnimatePresence>
      {member && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="bio-modal-name"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4 py-8"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-white rounded-2xl shadow-2xl p-8 md:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              aria-label="Close biography"
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 transition-colors"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
              <img
                src={member.img}
                alt={member.name}
                loading="lazy"
                decoding="async"
                style={{ objectPosition: member.imagePosition || "center top" }}
                className="w-28 h-28 rounded-full object-cover shadow-md shrink-0"
              />
              <div className="text-center sm:text-left">
                <h2
                  id="bio-modal-name"
                  className="font-satoshi text-2xl font-bold tracking-tight text-gray-900"
                >
                  {member.name}
                </h2>
                <p className="text-sm font-semibold uppercase tracking-wide text-[#822168] mt-1">
                  {member.role}
                </p>
              </div>
            </div>

            <p className="text-base leading-relaxed text-gray-600 text-justify hyphens-auto whitespace-pre-line">
              {member.bio}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BioModal;
