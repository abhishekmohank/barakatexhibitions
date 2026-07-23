import gvnight1 from "../assets/images/gvnight1.webp";
import gvnight1Thumb from "../assets/images/gvnight1-thumb.webp";
import gvnight2 from "../assets/images/gvnight2.webp";
import gvnight2Thumb from "../assets/images/gvnight2-thumb.webp";
import gvnight3 from "../assets/images/gvnight3.webp";
import gvnight3Thumb from "../assets/images/gvnight3-thumb.webp";
import gvnight4 from "../assets/images/gvnight4.webp";
import gvnight4Thumb from "../assets/images/gvnight4-thumb.webp";
import gvnight5 from "../assets/images/gvnight5.webp";
import gvnight5Thumb from "../assets/images/gvnight5-thumb.webp";

import gallery1 from "../assets/images/gallery1.webp";
import gallery1Thumb from "../assets/images/gallery1-thumb.webp";
import gallery2 from "../assets/images/gallery2.webp";
import gallery2Thumb from "../assets/images/gallery2-thumb.webp";
import gallery3 from "../assets/images/gallery3.webp";
import gallery3Thumb from "../assets/images/gallery3-thumb.webp";
import gallery4 from "../assets/images/gallery4.webp";
import gallery4Thumb from "../assets/images/gallery4-thumb.webp";
import gallery5 from "../assets/images/gallery5.webp";
import gallery5Thumb from "../assets/images/gallery5-thumb.webp";
import gallery6 from "../assets/images/gallery6.webp";
import gallery6Thumb from "../assets/images/gallery6-thumb.webp";
import gallery7 from "../assets/images/gallery7.webp";
import gallery7Thumb from "../assets/images/gallery7-thumb.webp";
import gallery8 from "../assets/images/gallery8.webp";
import gallery8Thumb from "../assets/images/gallery8-thumb.webp";
import gallery9 from "../assets/images/gallery9.webp";
import gallery9Thumb from "../assets/images/gallery9-thumb.webp";

import gallery10 from "../assets/images/gallery10.webp";
import gallery10Thumb from "../assets/images/gallery10-thumb.webp";
import gallery11 from "../assets/images/gallery11.webp";
import gallery11Thumb from "../assets/images/gallery11-thumb.webp";
import gallery12 from "../assets/images/gallery12.webp";
import gallery12Thumb from "../assets/images/gallery12-thumb.webp";
import gallery13 from "../assets/images/gallery13.webp";
import gallery13Thumb from "../assets/images/gallery13-thumb.webp";
import gallery14 from "../assets/images/gallery14.webp";
import gallery14Thumb from "../assets/images/gallery14-thumb.webp";
import gallery15 from "../assets/images/gallery15.webp";
import gallery15Thumb from "../assets/images/gallery15-thumb.webp";
import gallery16 from "../assets/images/gallery16.webp";
import gallery16Thumb from "../assets/images/gallery16-thumb.webp";
import gallery17 from "../assets/images/gallery17.webp";
import gallery17Thumb from "../assets/images/gallery17-thumb.webp";
import gallery18 from "../assets/images/gallery18.webp";
import gallery18Thumb from "../assets/images/gallery18-thumb.webp";
import gallery19 from "../assets/images/gallery19.webp";
import gallery19Thumb from "../assets/images/gallery19-thumb.webp";

// category defaults to "events" since these bundled photos have no
// per-image metadata - real title/location/year/category can be added
// per-photo through the admin panel for any new uploads.
const staticImages = [
  { index: 15, src: gallery16, thumb: gallery16Thumb, category: "events" },
  { index: 16, src: gallery11, thumb: gallery11Thumb, category: "events" },
  { index: 17, src: gallery14, thumb: gallery14Thumb, category: "events" },
  { index: 10, src: gallery10, thumb: gallery10Thumb, category: "events" },
  { index: 18, src: gallery13, thumb: gallery13Thumb, category: "events" },
  { index: 19, src: gallery12, thumb: gallery12Thumb, category: "events" },
  { index: 21, src: gallery17, thumb: gallery17Thumb, category: "events" },
  { index: 20, src: gallery15, thumb: gallery15Thumb, category: "events" },
  { index: 1, src: gallery1, thumb: gallery1Thumb, category: "events" },
  { index: 2, src: gallery18, thumb: gallery18Thumb, category: "events" },
  { index: 4, src: gvnight1, thumb: gvnight1Thumb, category: "events" },
  { index: 3, src: gallery19, thumb: gallery19Thumb, category: "events" },

  { index: 5, src: gvnight2, thumb: gvnight2Thumb, category: "events" },
  { index: 6, src: gvnight3, thumb: gvnight3Thumb, category: "events" },
  { index: 7, src: gvnight4, thumb: gvnight4Thumb, category: "events" },
  { index: 8, src: gvnight5, thumb: gvnight5Thumb, category: "events" },
  { index: 9, src: gallery4, thumb: gallery4Thumb, category: "events" },
  { index: 11, src: gallery6, thumb: gallery6Thumb, category: "events" },
  { index: 12, src: gallery7, thumb: gallery7Thumb, category: "events" },
  { index: 13, src: gallery8, thumb: gallery8Thumb, category: "events" },
  { index: 14, src: gallery9, thumb: gallery9Thumb, category: "events" },
];

// Anything dropped into src/assets/images/gallery/ is picked up automatically
// and shown on the Gallery page - no code change needed. These don't have a
// pre-generated thumb, so the grid falls back to the full image for them.
const uploadedImageModules = import.meta.glob(
  "../assets/images/gallery/*.{jpg,jpeg,JPG,JPEG,png,PNG,webp,WEBP}",
  { eager: true }
);

const uploadedImages = Object.keys(uploadedImageModules)
  .sort()
  .map((path, i) => ({
    index: staticImages.length + i + 1,
    src: uploadedImageModules[path].default,
    thumb: uploadedImageModules[path].default,
    category: "events",
  }));

// Every photo dropped into an event's own folder (src/assets/images/<event
// name>/) is also shown here on the main Gallery page, captioned with that
// folder/event name - no code change needed when new event photos are added.
const eventFolderModules = import.meta.glob(
  "../assets/images/*/*.{jpg,jpeg,JPG,JPEG,png,PNG,webp,WEBP}",
  { eager: true }
);

const eventFolderImages = Object.keys(eventFolderModules)
  .filter((path) => !path.includes("/assets/images/gallery/"))
  .sort()
  .map((path, i) => {
    const match = path.match(/assets\/images\/([^/]+)\//);
    return {
      index: staticImages.length + uploadedImages.length + i + 1,
      src: eventFolderModules[path].default,
      thumb: eventFolderModules[path].default,
      title: match ? match[1] : undefined,
      category: "events",
    };
  });

const Images = [...staticImages, ...uploadedImages, ...eventFolderImages];

export default Images;
