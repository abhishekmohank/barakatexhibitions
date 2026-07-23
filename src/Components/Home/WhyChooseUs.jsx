import TrophyIcon from "@heroicons/react/24/outline/TrophyIcon";
import FlagIcon from "@heroicons/react/24/outline/FlagIcon";
import ClipboardDocumentListIcon from "@heroicons/react/24/outline/ClipboardDocumentListIcon";
import ShoppingBagIcon from "@heroicons/react/24/outline/ShoppingBagIcon";
import BuildingOffice2Icon from "@heroicons/react/24/outline/BuildingOffice2Icon";
import SparklesIcon from "@heroicons/react/24/outline/SparklesIcon";
import SectionHeading from "../ui/SectionHeading";
import FeatureCard from "../ui/FeatureCard";

const items = [
  {
    title: "18+ Years Experience",
    description:
      "Nearly two decades of expertise delivering exhibitions and events across the Middle East.",
    icon: <TrophyIcon className="w-8 h-8" />,
  },
  {
    title: "International Pavilions",
    description:
      "Purpose-built pavilions representing countries and cultures with authenticity and flair.",
    icon: <FlagIcon className="w-8 h-8" />,
  },
  {
    title: "End-to-End Event Management",
    description:
      "From concept to execution, we manage every detail of your event with precision.",
    icon: <ClipboardDocumentListIcon className="w-8 h-8" />,
  },
  {
    title: "Destination Retail Experiences",
    description:
      "Curated retail marketplaces that turn everyday shopping into a memorable journey.",
    icon: <ShoppingBagIcon className="w-8 h-8" />,
  },
  {
    title: "Trusted Government Partnerships",
    description:
      "Long-standing collaborations with government entities and embassies across the region.",
    icon: <BuildingOffice2Icon className="w-8 h-8" />,
  },
  {
    title: "Creative Pavilion Design",
    description:
      "Immersive, story-driven design that brings every exhibition space to life.",
    icon: <SparklesIcon className="w-8 h-8" />,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="px-6 md:px-10 py-16 lg:py-24 bg-white">
      <SectionHeading
        kicker="Why Choose Us"
        title="What Sets Us Apart"
        className="mb-14"
      />
      <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <FeatureCard key={item.title} {...item} index={index} />
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
