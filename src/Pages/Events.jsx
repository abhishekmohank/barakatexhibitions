import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import StaticEvents from "../constants/events";
import { useSupabaseTable } from "../hooks/useSupabaseTable";
import { resolveEventStatus, eventSortValue } from "../lib/eventStatus";

const filters = [
  { key: "all", label: "All" },
  { key: "upcoming", label: "Upcoming" },
  { key: "past", label: "Past" },
];

const Event = () => {
  const { rows } = useSupabaseTable("events");
  const [activeFilter, setActiveFilter] = useState("all");

  const supabaseEvents = rows.map((row) => ({
    id: row.id,
    title: row.title,
    location: row.location,
    date: row.date,
    description: row.description,
    link: row.link,
    image: row.image_url,
    images: [row.image_url],
    endDate: row.end_date,
    status: row.status || "upcoming",
  }));

  const allEvents = [...supabaseEvents, ...StaticEvents]
    .map((event) => ({
      ...event,
      status: resolveEventStatus(event),
    }))
    .sort((a, b) => eventSortValue(b) - eventSortValue(a));

  const visibleEvents =
    activeFilter === "all"
      ? allEvents
      : allEvents.filter((event) => event.status === activeFilter);

  return (
    <>
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#822168]/5 via-white to-white">
        <div
          aria-hidden
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#822168]/10 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#002e5d]/10 blur-3xl"
        />

        <div className="relative xl:mx-auto xl:container lg:px-20 md:px-6 px-4 pt-16 pb-12 md:pt-24 md:pb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-8 bg-[#822168]" />
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#822168]">
                Events
              </p>
              <span className="h-px w-8 bg-[#822168]" />
            </div>
            <h1 className="font-satoshi text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
              Explore Our Events
            </h1>
            <p className="max-w-2xl mx-auto text-base md:text-xl leading-relaxed text-gray-600">
              Discover upcoming exhibitions, international trade fairs, and
              memorable experiences we've proudly delivered across the Middle
              East.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="xl:mx-auto xl:container lg:px-20 md:px-6 px-4 pb-16 md:pb-24">
        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          className="flex items-center justify-center gap-3 mb-12 md:mb-16"
        >
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
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

        {/* Cards */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visibleEvents.map((event, index) => (
              <motion.div
                key={event.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12, scale: 0.98 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                  ease: "easeOut",
                }}
              >
                <Link
                  to={`/events/${event.id}`}
                  className="group flex flex-col h-full rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300"
                >
                  <div className="w-full h-52 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex flex-col flex-1 p-6">
                    <p className="text-sm text-gray-500 pb-1">
                      {event.location}
                    </p>
                    <p className="text-xs text-gray-400 pb-3">{event.date}</p>
                    <p className="text-lg font-semibold text-gray-800 group-hover:text-[#822168] transition-colors mb-4">
                      {event.title}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-[#822168]">
                      Learn More
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {visibleEvents.length === 0 && (
          <p className="text-center text-gray-500 py-16">
            No {activeFilter} events right now.
          </p>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Event;
