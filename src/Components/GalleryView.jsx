import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import gallery1 from "../assets/images/gallery1-thumb.webp";
import gallery18 from "../assets/images/gallery18-thumb.webp";
import gallery19 from "../assets/images/gallery19-thumb.webp";
import gvnight3 from "../assets/images/gvnight3-thumb.webp";
import SectionHeading from "./ui/SectionHeading";
import Button from "./ui/Button";

const images = [gallery1, gallery18, gallery19, gvnight3];

const GalleryView = () => {
  return (
    <section className="bg-white px-6 md:px-16 py-16 md:py-24">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-12">
        <SectionHeading
          kicker="Explore"
          title="Our Gallery"
          subtitle="A glimpse into the exhibitions, pavilions, and experiences we've delivered across the Middle East."
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
              className="group relative aspect-square overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={img}
                alt="Exhibition gallery preview"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>

        <Button to="/gallery" variant="primary">
          View Gallery
        </Button>
      </div>
    </section>
  );
};

export default GalleryView;
