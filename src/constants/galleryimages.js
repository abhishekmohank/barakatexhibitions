import gvnight1 from "../assets/images/gvnight1.webp";
import gvnight2 from "../assets/images/gvnight2.webp";
import gvnight3 from "../assets/images/gvnight3.webp";
import gvnight4 from "../assets/images/gvnight4.webp";
import gvnight5 from "../assets/images/gvnight5.webp";

import gallery1 from "../assets/images/gallery1.webp";
import gallery2 from "../assets/images/gallery2.webp";
import gallery3 from "../assets/images/gallery3.webp";
import gallery4 from "../assets/images/gallery4.webp";
import gallery5 from "../assets/images/gallery5.webp";
import gallery6 from "../assets/images/gallery6.webp";
import gallery7 from "../assets/images/gallery7.webp";
import gallery8 from "../assets/images/gallery8.webp";
import gallery9 from "../assets/images/gallery9.webp";

import gallery10 from "../assets/images/gallery10.webp";
import gallery11 from "../assets/images/gallery11.webp";
import gallery12 from "../assets/images/gallery12.webp";
import gallery13 from "../assets/images/gallery13.webp";
import gallery14 from "../assets/images/gallery14.webp";
import gallery15 from "../assets/images/gallery15.webp";
import gallery16 from "../assets/images/gallery16.webp";
import gallery17 from "../assets/images/gallery17.webp";
import gallery18 from "../assets/images/gallery18.webp";
import gallery19 from "../assets/images/gallery19.webp";

const staticImages = [
  { index: 15, src: gallery16 },
  { index: 16, src: gallery11 },
  { index: 17, src: gallery14 },
  { index: 10, src: gallery10 },
  { index: 18, src: gallery13 },
  { index: 19, src: gallery12 },
  { index: 21, src: gallery17 },
  { index: 20, src: gallery15 },
  { index: 1, src: gallery1 },
  { index: 2, src: gallery18 },
  { index: 4, src: gvnight1 },
  { index: 3, src: gallery19 },

  { index: 5, src: gvnight2 },
  { index: 6, src: gvnight3 },
  { index: 7, src: gvnight4 },
  { index: 8, src: gvnight5 },
  { index: 9, src: gallery4 },
  { index: 11, src: gallery6 },
  { index: 12, src: gallery7 },
  { index: 13, src: gallery8 },
  { index: 14, src: gallery9 },
];

// Anything dropped into src/assets/images/gallery/ is picked up automatically
// and shown on the Gallery page - no code change needed.
const uploadedImageModules = import.meta.glob(
  "../assets/images/gallery/*.{jpg,jpeg,JPG,JPEG,png,PNG,webp,WEBP}",
  { eager: true }
);

const uploadedImages = Object.keys(uploadedImageModules)
  .sort()
  .map((path, i) => ({
    index: staticImages.length + i + 1,
    src: uploadedImageModules[path].default,
  }));

const Images = [...staticImages, ...uploadedImages];

export default Images;
