import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSupabaseTable } from "../../hooks/useSupabaseTable";
import SectionHeading from "../ui/SectionHeading";

const Testimonials = () => {
  const { rows: testimonials, loading } = useSupabaseTable("testimonials");
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (testimonials.length < 2) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Nothing to show yet - don't render an empty/awkward section.
  if (!loading && testimonials.length === 0) return null;
  if (loading) return null;

  const active = testimonials[activeIndex];

  return (
    <section className="px-6 md:px-10 py-16 lg:py-24 bg-slate-50">
      <SectionHeading
        kicker="Testimonials"
        title="What Our Clients Say"
        className="mb-14"
      />

      <div className="max-w-3xl mx-auto relative min-h-[220px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-center"
          >
            <p className="text-xl md:text-2xl font-satoshi leading-relaxed text-gray-800 mb-8">
              "{active.quote}"
            </p>
            <p className="font-semibold text-gray-900">{active.name}</p>
            {(active.company || active.country) && (
              <p className="text-sm text-gray-500 mt-1">
                {[active.company, active.country].filter(Boolean).join(" · ")}
              </p>
            )}
          </motion.div>
        </AnimatePresence>

        {testimonials.length > 1 && (
          <div className="flex items-center justify-center gap-2 mt-10">
            {testimonials.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setActiveIndex(index)}
                aria-label={`Show testimonial ${index + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "w-6 bg-[#822168]"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
