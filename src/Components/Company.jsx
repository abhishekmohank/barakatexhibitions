import { motion } from "framer-motion";
import gvnight2 from "../assets/images/gvnight2.webp";
import Button from "./ui/Button";

const Company = () => {
  return (
    <section className="px-6 md:px-10 py-16 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#822168] mb-3">
            Who We Are
          </p>
          <h2 className="font-satoshi text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-5">
            Team of Event & Pavilion Specialists
          </h2>
          <p className="text-base leading-relaxed text-gray-600 mb-8">
            Shams Al Barakat Exhibitions LLC is a Dubai-based event
            organizer, pavilion developer, and destination retail experience
            company specializing in country pavilions, retail marketplaces,
            and cultural events across the GCC. With nearly two decades of
            experience, we plan, develop, and manage successful pavilion
            experiences at leading destinations, delivering end-to-end
            solutions that create memorable experiences for exhibitors and
            visitors alike.
          </p>
          <Button to="/about" variant="primary">
            Learn More →
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="relative"
        >
          <div
            aria-hidden="true"
            className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-[#822168]/10 blur-2xl"
          />
          <img
            src={gvnight2}
            alt="Shams Al Barakat Exhibitions pavilion at night"
            loading="lazy"
            decoding="async"
            className="relative w-full h-80 md:h-96 object-cover rounded-3xl shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Company;
