import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import StaticImages from "../constants/galleryimages";
import { useSupabaseTable } from "../hooks/useSupabaseTable";
import GalleryFilters from "../Components/Gallery/GalleryFilters";
import GalleryCard from "../Components/Gallery/GalleryCard";
import Lightbox from "../Components/Gallery/Lightbox";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const imagesOf = (row) =>
  row.image_urls?.length ? row.image_urls : [row.image_url].filter(Boolean);

const Gallery = () => {
  const { rows } = useSupabaseTable("gallery_images");
  const { rows: eventRows } = useSupabaseTable("events");
  const { rows: achievementRows } = useSupabaseTable("achievements");
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const uploadedImages = rows.map((row) => ({
    src: row.image_url,
    thumb: row.thumb_url || row.image_url,
    title: row.title,
    location: row.location,
    year: row.year,
    category: row.category || "events",
  }));

  // Every photo uploaded through Manage Events / Manage Achievements
  // automatically also shows up here, filed under whichever Gallery
  // category the admin picked on that form (defaults to Events / Awards).
  const eventImages = eventRows.flatMap((row) =>
    imagesOf(row).map((url) => ({
      src: url,
      thumb: url,
      title: row.title,
      location: row.location,
      category: row.gallery_category || "events",
    }))
  );

  const achievementImages = achievementRows.flatMap((row) =>
    imagesOf(row).map((url) => ({
      src: url,
      thumb: url,
      title: row.title,
      location: row.location,
      year: row.year,
      category: row.gallery_category || "awards",
    }))
  );

  const allImages = [
    ...uploadedImages,
    ...eventImages,
    ...achievementImages,
    ...StaticImages,
  ];

  const visibleImages =
    activeFilter === "all"
      ? allImages
      : allImages.filter((image) => image.category === activeFilter);

  const closeLightbox = () => setLightboxIndex(null);

  const handlePrev = useCallback(() => {
    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  const handleNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev < visibleImages.length - 1 ? prev + 1 : prev
    );
  }, [visibleImages.length]);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#822168]/5 via-white to-white">
        <div
          aria-hidden="true"
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#822168]/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#002e5d]/10 blur-3xl"
        />

        <div className="relative px-6 md:px-10 pt-16 pb-12 md:pt-24 md:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: 32 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="h-px bg-[#822168]"
              />
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#822168]">
                Our Portfolio
              </p>
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: 32 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="h-px bg-[#822168]"
              />
            </div>
            <h1 className="font-satoshi text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
              Capturing Extraordinary Moments
            </h1>
            <p className="max-w-2xl mx-auto text-base md:text-xl leading-relaxed text-gray-600">
              Explore a collection of exhibitions, international pavilions,
              destination retail experiences, and memorable events we've
              proudly delivered across the Middle East.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-5 md:px-10 pb-16 md:pb-24">
        <GalleryFilters activeFilter={activeFilter} onChange={setActiveFilter} />

        {visibleImages.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {visibleImages.map((image, index) => (
              <GalleryCard
                key={`${image.src}-${index}`}
                image={image}
                index={index}
                onOpen={setLightboxIndex}
              />
            ))}
          </div>
        ) : (
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center text-gray-500 py-16"
          >
            No photos in this category yet.
          </motion.p>
        )}
      </div>

      <Lightbox
        images={visibleImages}
        index={lightboxIndex}
        onClose={closeLightbox}
        onPrev={handlePrev}
        onNext={handleNext}
      />

      <Footer />
    </div>
  );
};

export default Gallery;
