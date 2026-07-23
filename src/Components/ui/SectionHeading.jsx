import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const SectionHeading = ({
  kicker,
  title,
  subtitle,
  dark = false,
  className = "",
}) => {
  const kickerColor = dark ? "text-[#e29ac4]" : "text-[#822168]";
  const titleColor = dark ? "text-white" : "text-gray-900";
  const subtitleColor = dark ? "text-gray-300" : "text-gray-600";

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeUp}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`text-center max-w-2xl mx-auto ${className}`}
    >
      {kicker && (
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className={`h-px w-8 bg-[#822168]`} />
          <p
            className={`text-xs font-semibold uppercase tracking-[0.3em] ${kickerColor}`}
          >
            {kicker}
          </p>
          <span className={`h-px w-8 bg-[#822168]`} />
        </div>
      )}
      <h2
        className={`font-satoshi text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight ${titleColor}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 text-base md:text-lg leading-relaxed ${subtitleColor}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
