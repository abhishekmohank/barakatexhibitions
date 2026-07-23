import { useSupabaseTable } from "../../hooks/useSupabaseTable";
import SectionHeading from "../ui/SectionHeading";

const Partners = () => {
  const { rows: partners, loading } = useSupabaseTable("partners");

  // Nothing to show yet - don't render an empty/awkward section.
  if (loading || partners.length === 0) return null;

  // Duplicate the list so the marquee loops seamlessly.
  const looped = [...partners, ...partners];

  return (
    <section className="px-6 md:px-10 py-16 lg:py-20 bg-white">
      <SectionHeading kicker="Trusted By" title="Our Partners" className="mb-12" />

      <div
        className="max-w-6xl mx-auto overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
        role="region"
        aria-label="Partner and client logos"
      >
        <div className="flex w-max animate-marquee gap-16 items-center">
          {looped.map((partner, index) => (
            <img
              key={`${partner.id}-${index}`}
              src={partner.logo_url}
              alt={partner.name}
              loading="lazy"
              decoding="async"
              className="h-12 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
