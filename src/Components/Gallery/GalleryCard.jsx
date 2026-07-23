import { motion } from "framer-motion";

const GalleryCard = ({ image, index, onOpen }) => {
  const hasCaption = image.title || image.location || image.year;

  return (
    <motion.button
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: (index % 8) * 0.06, ease: "easeOut" }}
      onClick={() => onOpen(index)}
      aria-label={image.title ? `View ${image.title}` : "View image"}
      className="group relative aspect-square overflow-hidden rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#822168] focus-visible:ring-offset-2"
    >
      <img
        src={image.thumb}
        alt={image.title || "Gallery photo"}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute inset-x-0 bottom-0 p-4 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 text-left">
        {hasCaption && (
          <>
            {image.title && (
              <p className="text-white font-semibold text-sm leading-tight">
                {image.title}
              </p>
            )}
            {(image.location || image.year) && (
              <p className="text-white/70 text-xs mt-0.5">
                {[image.location, image.year].filter(Boolean).join(" · ")}
              </p>
            )}
          </>
        )}
        <span className="inline-flex items-center gap-1 text-xs font-semibold text-white mt-2">
          View Gallery
          <span aria-hidden="true">→</span>
        </span>
      </div>
    </motion.button>
  );
};

export default GalleryCard;
