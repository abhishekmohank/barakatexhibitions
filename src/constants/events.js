import gallery1 from "../assets/images/gallery1.webp";
import gallery7 from "../assets/images/gallery7.webp";
import event3 from "../assets/images/event3.webp";
import event4 from "../assets/images/littileworldkuwait.webp";
import event5 from "../assets/images/LITTLEWORLD.webp";
import event6 from "../assets/images/Damam.webp";
import event7 from "../assets/images/Global_Carnival_Jeddah.webp";

// Any image dropped into src/assets/images/<folder-name>/ is picked up
// automatically and shown on that event's detail page - no code change needed.
const eventImageModules = import.meta.glob(
  "../assets/images/*/*.{jpg,jpeg,JPG,JPEG,png,PNG,webp,WEBP}",
  { eager: true }
);

const folderImages = {};
for (const path in eventImageModules) {
  const match = path.match(/assets\/images\/([^/]+)\//);
  if (!match) continue;
  const folder = match[1];
  (folderImages[folder] ??= []).push(eventImageModules[path].default);
}

const imagesFor = (folder, fallbackImage) =>
  folderImages[folder]?.length ? folderImages[folder] : [fallbackImage];

const Events = [
  {
    id: 7,
    title: "Global Carnival Jeddah",
    location: "Saudi Arabia",
    date: "2025 - 2026",
    description:
      "Global Carnival Jeddah is a groundbreaking cultural extravaganza that brings together the world’s most vibrant traditions, flavors, and experiences in the heart of Saudi Arabia. The event offers visitors an immersive journey through diverse cultures, showcasing authentic pavilions, themed streetscapes, global cuisines, and interactive experiences that celebrate international heritage. From the bustling markets of Marrakech to the serene gardens of Kyoto, and from the vibrant streets of Mumbai to the elegant boulevards of Paris, the carnival creates a unique world-tour experience without leaving the region. Organized by Shams Al Barakat Exhibitions, the event reflects a strong commitment to creativity, cultural storytelling, and high-quality execution. It stands as a celebration of global unity, human creativity, and shared cultural appreciation.",
    link: "https://www.google.com",
    image: event7,
    images: imagesFor("Global Carnival Jeddah", event7),
  },
  {
    id: 5,
    title: "India Pavilion – Global City Dammam",
    location: "Global City Dammam",
    date: "20 Nov 2025 to 18 April 2026",
    link: "https://example.com",
    description:
      "Shams Al Barakat Exhibitions was proud to be entrusted with the organization and execution of the India Pavilion and Africa Pavilion for the inaugural season of Global City Dammam 2025–2026. From concept to completion, our team successfully managed every stage of the project with precision and professionalism. Our scope of work included the complete design and construction of both pavilions, vendor sourcing and onboarding for retail spaces, as well as comprehensive planning, coordination, and on-site project management. By combining creativity, technical expertise, and seamless execution, we transformed the vision into vibrant cultural destinations that showcased authentic experiences, shopping, cuisine, and entertainment. Every aspect of the project was carefully planned and delivered to the highest standards, ensuring a smooth and successful operation throughout the season. This milestone reflects our commitment to delivering large-scale exhibitions and events with excellence, innovation, and meticulous attention to detail, reinforcing our reputation as a trusted partner for world-class event management and exhibition solutions",
    image: event6,
    images: imagesFor("India Pavilion – Global City Dammam", event6),
  },
  {
    id: 6,
    title: "LITTLE WORLD KUWAIT Season-2",
    location: "Mishrif - Kuwait",
    date: "4 Nov 2025 to 14 Feb 2026",
    link: "https://example.com",
    description:
      "Little World Kuwait Season 2025–2026, part of the Kuwait International Tradefare, is a landmark cultural exhibition held in Kuwait, bringing together immersive global experiences under one destination. The event features the India Pavilion, Morocco Pavilion, and Africa Pavilion, all proudly organized and executed by Shams Al Barakat Exhibitions. Each pavilion was thoughtfully designed to reflect the unique culture, heritage, and identity of its region, offering visitors an engaging and authentic experience. From concept development and construction to vendor management and complete on-ground execution, our team delivered each pavilion with precision, creativity, and strong attention to detail. The result was a seamless and vibrant cultural showcase that contributed to the success of the season.This achievement reflects our continued commitment to delivering world-class exhibitions that celebrate global cultures through excellence in design and execution.",
    image: event5,
    images: imagesFor("LITTLE WORLD KUWAIT Season-2", event5),
  },
  {
    id: 2,
    title: "HAWA HERITAGE FESTIVAL - MADINA SAUDI ARABIA",
    location: "MADINA",
    date: "MAY 14 2024 JULY 2024",
    link: "https://www.google.com",
    description:
      "HAWA HERITAGE FESTIVAL, Conducted in MADINA, SAUDI ARABIA from May 15 to July 30 2024",
    image: gallery1,
    images: [gallery1],
  },
  {
    id: 3,
    title: "LITTLE WORLD KUWAIT",
    location: "KUWAIT",
    date: "20 NOV 2024 - 01 MARCH 2025",
    link: "https://www.google.com",
    description:
      "Shams Al Barakat Exhibitions proudly organized and executed the India Pavilion and Africa Pavilion at Little World Kuwait Season 2024–2025, part of the Kuwait International Tradefare, held in Kuwait from November 2024 to March 2025. The project brought together immersive cultural experiences, showcasing the richness of India and Africa through thoughtfully designed pavilions, curated vendor spaces, and engaging visitor environments. Our team managed the complete process, including design, construction, vendor coordination, and on-ground execution with precision and professionalism. This successful participation reflects our commitment to delivering high-quality international exhibition experiences that celebrate culture, creativity, and flawless execution.",
    image: event4,
    images: imagesFor("LITTLE WORLD KUWAIT", event4),
  },
  {
    id: 4,
    title: "SHEIKH ZAYED FESTIVAL",
    location: "ABU DHABI, UAE",
    date: "OCTOBER 2024 - 31 JANUARY 2025",
    description:
      "SHEIKH ZAYED FESTIVAL, at Al Wathba, Abu Dhabi from  1st November 2024 to 15th February 2025",
    link: "https://www.google.com",
    image: event3,
    images: [event3],
  },
];

export default Events;
