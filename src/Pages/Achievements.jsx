import { useState } from "react";
import { motion } from "framer-motion";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import StaticAchievements from "../constants/achievements";
import { useSupabaseTable } from "../hooks/useSupabaseTable";
import AchievementCard from "../Components/Achievements/AchievementCard";
import AchievementModal from "../Components/Achievements/AchievementModal";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const AchievementsPage = () => {
  const { rows } = useSupabaseTable("achievements");
  const [activeItem, setActiveItem] = useState(null);

  const supabaseAchievements = rows.map((row) => ({
    id: row.id,
    exhibition: row.exhibition,
    title: row.title,
    description: row.description,
    location: row.location,
    year: row.year,
    sortOrder: row.sort_order,
    cover: row.image_url,
    images: row.image_urls?.length
      ? row.image_urls
      : [row.image_url].filter(Boolean),
    imageCount: row.image_urls?.length || (row.image_url ? 1 : 0),
  }));

  const staticAchievements = StaticAchievements.map((item) => ({
    ...item,
    cover: item.image,
    images: item.images?.length
      ? item.images
      : [item.image].filter(Boolean),
    imageCount: item.images?.length || (item.image ? 1 : 0),
  }));

  const allAchievements = [...supabaseAchievements, ...staticAchievements];

  const groupedByExhibition = allAchievements.reduce((acc, item) => {
    (acc[item.exhibition] ??= []).push(item);
    return acc;
  }, {});

  // Ordered by the admin's manual drag-and-drop order (Manage Achievements
  // in the admin panel), not upload time - items/groups with no order set
  // yet (sortOrder undefined) fall to the bottom.
  const orderOf = (item) => item.sortOrder ?? Infinity;

  const sortedExhibitionGroups = Object.entries(groupedByExhibition)
    .map(([exhibition, items]) => {
      const sortedItems = [...items].sort(
        (a, b) => orderOf(a) - orderOf(b)
      );
      const groupOrder = Math.min(...sortedItems.map(orderOf));
      return [exhibition, sortedItems, groupOrder];
    })
    .sort((a, b) => a[2] - b[2]);

  return (
    <>
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
                Recognition
              </p>
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: 32 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="h-px bg-[#822168]"
              />
            </div>
            <h1 className="font-satoshi text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
              Awards & Achievements
            </h1>
            <p className="max-w-2xl mx-auto text-base md:text-xl leading-relaxed text-gray-600">
              Celebrating our milestones, industry recognition, and
              commitment to excellence in delivering world-class exhibitions
              and international events across the Middle East.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="xl:mx-auto xl:container lg:px-20 md:px-6 px-4 py-16 lg:py-24">
        {Object.keys(groupedByExhibition).length === 0 && (
          <p className="text-center text-gray-500">
            Awards and recognitions will appear here soon.
          </p>
        )}

        {sortedExhibitionGroups.map(([exhibition, items]) => (
          <div key={exhibition} className="mb-20 last:mb-0">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mb-10"
            >
              <h2 className="font-satoshi text-2xl lg:text-3xl font-bold tracking-tight text-gray-900 mb-2">
                {exhibition}
              </h2>
              <p className="text-sm text-gray-500 mb-4">
                {items.length} achievement{items.length > 1 ? "s" : ""}
              </p>
              <div className="h-px w-16 bg-[#822168]" />
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((item, index) => (
                <AchievementCard
                  key={item.id}
                  item={item}
                  index={index}
                  onViewDetails={setActiveItem}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <AchievementModal item={activeItem} onClose={() => setActiveItem(null)} />

      <Footer />
    </>
  );
};

export default AchievementsPage;
