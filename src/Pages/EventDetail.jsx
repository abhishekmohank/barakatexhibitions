import { useParams, Link, Navigate } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import StaticEvents from "../constants/events";
import { useSupabaseTable } from "../hooks/useSupabaseTable";

const EventDetail = () => {
  const { id } = useParams();
  const { rows, loading } = useSupabaseTable("events");

  const supabaseEvent = rows.find((row) => String(row.id) === id);
  const staticEvent = StaticEvents.find((item) => String(item.id) === id);

  const event = supabaseEvent
    ? {
        id: supabaseEvent.id,
        title: supabaseEvent.title,
        location: supabaseEvent.location,
        date: supabaseEvent.date,
        description: supabaseEvent.description,
        images:
          supabaseEvent.image_urls?.length
            ? supabaseEvent.image_urls
            : [supabaseEvent.image_url],
      }
    : staticEvent;

  if (!event) {
    if (loading) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-gray-500">Loading…</p>
        </div>
      );
    }
    return <Navigate to="/events" replace />;
  }

  const images =
    event.images && event.images.length ? event.images : [event.image];

  return (
    <>
      <Header />

      <div className="xl:mx-auto xl:container lg:px-20 md:px-6 px-4 pt-8 md:pt-12 pb-12 md:pb-16">
        <Link
          to="/events"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#822168] hover:underline mb-8"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Events
        </Link>

        <p className="leading-none text-gray-600 pb-2 text-base">
          {event.location}
        </p>

        <p className="text-sm text-gray-500 pb-4 flex items-center gap-2">
          <svg
            className="w-4 h-4 text-gray-500"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          {event.date}
        </p>

        <h1 className="md:text-4xl lg:text-5xl text-3xl font-semibold lg:leading-tight text-gray-800 pb-6">
          {event.title}
        </h1>

        <p className="text-base leading-7 text-gray-600 max-w-3xl pb-10 text-justify hyphens-auto">
          {event.description}
        </p>

        <div
          className={`grid gap-4 pb-12 ${
            images.length > 1 ? "sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
          }`}
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${event.title} ${index + 1}`}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover rounded-lg shadow"
            />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default EventDetail;
