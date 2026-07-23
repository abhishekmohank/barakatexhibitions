import { motion } from "framer-motion";

const AchievementCard = ({ item, index, onViewDetails }) => {
  const hasMeta = item.location || item.year;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.08, ease: "easeOut" }}
      className="group flex flex-col h-full rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300"
    >
      <div className="relative w-full h-56 bg-gray-50 flex items-center justify-center overflow-hidden">
        {item.cover ? (
          <>
            <img
              src={item.cover}
              alt={item.title}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {item.imageCount > 1 && (
              <span className="absolute bottom-3 right-3 rounded-full bg-black/50 backdrop-blur text-white text-xs font-semibold px-2.5 py-1 tracking-wide">
                +{item.imageCount - 1} photos
              </span>
            )}
          </>
        ) : (
          <span className="text-sm text-gray-400">Image coming soon</span>
        )}
      </div>
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="h-px w-5 bg-[#822168]" />
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#822168]">
            Achievement
          </p>
        </div>
        <h3 className="font-satoshi text-lg font-bold tracking-tight text-gray-900 mb-1">
          {item.title}
        </h3>
        {hasMeta && (
          <p className="text-xs text-gray-400 mb-3">
            {[item.location, item.year].filter(Boolean).join(" · ")}
          </p>
        )}
        <p className="text-sm leading-relaxed text-gray-600 line-clamp-3 mb-5">
          {item.description}
        </p>
        <button
          onClick={() => onViewDetails(item)}
          aria-haspopup="dialog"
          className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-[#822168] hover:gap-2 transition-all self-start"
        >
          View Details
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </motion.div>
  );
};

export default AchievementCard;
