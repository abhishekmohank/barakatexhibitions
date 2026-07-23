import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import StaticEvents from "../../constants/events";
import { useSupabaseTable } from "../../hooks/useSupabaseTable";
import { resolveEventStatus, eventSortValue } from "../../lib/eventStatus";

const EventCard = ({ event, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
    className="h-full"
  >
    <Link
      to={`/events/${event.id}`}
      className="group flex flex-col h-full rounded-[24px] overflow-hidden bg-white shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 ease-out"
    >
      <div className="w-full h-[260px] overflow-hidden shrink-0">
        <img
          src={event.image}
          alt={event.title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-center transition-transform duration-300 ease-out group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col flex-1 p-6 md:p-7">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-500 mb-3">
          {event.location && (
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#822168]" strokeWidth={2} />
              {event.location}
            </span>
          )}
          {event.date && (
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#822168]" strokeWidth={2} />
              {event.date}
            </span>
          )}
        </div>

        <h3 className="font-satoshi text-lg md:text-xl font-bold text-gray-900 group-hover:text-[#822168] transition-colors duration-300 mb-2 line-clamp-2">
          {event.title}
        </h3>

        {event.description && (
          <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 mb-4">
            {event.description}
          </p>
        )}

        <span className="mt-auto pt-2 inline-flex items-center gap-1 text-sm font-semibold text-[#822168]">
          Learn More
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </span>
      </div>
    </Link>
  </motion.div>
);

const UpcomingEvents = () => {
  const { rows } = useSupabaseTable("events");

  const supabaseEvents = rows.map((row) => ({
    id: row.id,
    title: row.title,
    location: row.location,
    date: row.date,
    description: row.description,
    image: row.image_url,
    endDate: row.end_date,
    status: row.status || "upcoming",
  }));

  const upcomingEvents = [...supabaseEvents, ...StaticEvents]
    .filter((event) => resolveEventStatus(event) === "upcoming")
    .sort((a, b) => eventSortValue(b) - eventSortValue(a))
    .slice(0, 3);

  if (upcomingEvents.length === 0) return null;

  const count = upcomingEvents.length;

  return (
    <section className="px-6 md:px-10 py-16 lg:py-24 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <SectionHeading
          kicker="What's Next"
          title="Upcoming Events"
          subtitle="Join us at our next exhibitions and pavilions across the region."
          className="mb-14 md:mb-16"
        />

        {count === 1 && (
          <div className="flex justify-center">
            <div className="w-full max-w-[440px]">
              <EventCard event={upcomingEvents[0]} index={0} />
            </div>
          </div>
        )}

        {count === 2 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <EventCard key={event.id} event={event} index={index} />
            ))}
          </div>
        )}

        {count >= 3 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <EventCard key={event.id} event={event} index={index} />
            ))}
          </div>
        )}

        <div className="flex justify-center mt-10 md:mt-14">
          <Link
            to="/events"
            className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#7B1E63] to-[#A52784] px-10 py-4 text-sm md:text-base font-semibold uppercase tracking-wide text-white shadow-[0_8px_30px_rgba(130,33,104,0.35)] transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_12px_40px_rgba(165,39,132,0.55)] hover:from-[#8f2474] hover:to-[#b93293]"
          >
            View All Events
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
