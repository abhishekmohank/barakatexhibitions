import { motion } from "framer-motion";

const filters = [
  { key: "all", label: "All" },
  { key: "events", label: "Events" },
  { key: "pavilions", label: "Pavilions" },
  { key: "awards", label: "Awards" },
  { key: "behind-the-scenes", label: "Behind the Scenes" },
];

const GalleryFilters = ({ activeFilter, onChange }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      role="group"
      aria-label="Filter gallery by category"
      className="flex flex-wrap items-center justify-center gap-3 mb-12 md:mb-16"
    >
      {filters.map((filter) => (
        <button
          key={filter.key}
          onClick={() => onChange(filter.key)}
          aria-pressed={activeFilter === filter.key}
          className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ${
            activeFilter === filter.key
              ? "bg-[#822168] text-white shadow-md"
              : "bg-white text-gray-600 border border-gray-200 hover:border-[#822168] hover:text-[#822168]"
          }`}
        >
          {filter.label}
        </button>
      ))}
    </motion.div>
  );
};

export default GalleryFilters;
