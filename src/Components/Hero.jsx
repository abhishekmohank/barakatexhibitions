import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "./ui/Button";
import indiaVillage from "../assets/images/gvnight1.webp";

const Hero = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <div
      ref={sectionRef}
      className="hero relative overflow-hidden bg-opacity-50"
    >
      <motion.img
        style={{ y: imageY }}
        src={indiaVillage}
        alt="Global Village India Pavilion at night"
        className="absolute object-cover top-0 left-0 -z-10 w-full h-[125%]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />

      <div className="relative flex flex-col items-center justify-center h-screen text-white px-6 md:px-10 pt-10 pb-20">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center text-xs md:text-sm font-semibold uppercase tracking-[0.3em] text-[#e29ac4] mb-4"
        >
          Shams Al Barakat Exhibitions
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="font-satoshi font-bold tracking-tight leading-tight text-4xl md:text-6xl lg:text-7xl text-center max-w-4xl"
        >
          Crafting <span className="text-[#e29ac4]">Unforgettable</span>{" "}
          Experiences
          <br />
          Across the Middle East
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="mt-6 max-w-2xl text-center text-base md:text-xl leading-relaxed text-white/80"
        >
          Delivering world-class exhibitions, destination retail experiences,
          and international pavilions that connect cultures, businesses, and
          communities.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <Button to="/events" variant="primary">
            Explore Events
          </Button>
          <Button to="/contact" variant="outline">
            Contact Us
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          aria-hidden="true"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-white/70">
            Scroll to Explore
          </span>
          <motion.svg
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-5 text-white/70"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </motion.svg>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
