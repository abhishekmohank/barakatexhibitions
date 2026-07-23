import { motion } from "framer-motion";
import Button from "./Button";

const CTASection = ({ title, subtitle, buttonLabel, buttonTo }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#822168] to-[#5f1750] px-6 md:px-10 py-16 lg:py-24">
      <div
        aria-hidden="true"
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-white/10 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative max-w-2xl mx-auto text-center"
      >
        <h2 className="font-satoshi text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5">
          {title}
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-white/80 mb-10">
          {subtitle}
        </p>
        <Button to={buttonTo} variant="light">
          {buttonLabel}
        </Button>
      </motion.div>
    </section>
  );
};

export default CTASection;
