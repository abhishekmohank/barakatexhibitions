import { supabase } from "../supabaseClient";

const MAX_DIMENSION = 1920;
const THUMB_DIMENSION = 480;
const WEBP_QUALITY = 0.82;
const THUMB_QUALITY = 0.7;

function loadImage(file) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = URL.createObjectURL(file);
  });
}

async function compressToWebp(file, maxDimension = MAX_DIMENSION, quality = WEBP_QUALITY) {
  // Skip formats that don't benefit from/support canvas re-encoding.
  if (!file.type.startsWith("image/") || file.type === "image/svg+xml") {
    return file;
  }

  const img = await loadImage(file);
  let { width, height } = img;

  if (width > maxDimension || height > maxDimension) {
    const scale = maxDimension / Math.max(width, height);
    width = Math.round(width * scale);
    height = Math.round(height * scale);
  }

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  canvas.getContext("2d").drawImage(img, 0, 0, width, height);
  URL.revokeObjectURL(img.src);

  const blob = await new Promise((resolve) =>
    canvas.toBlob(resolve, "image/webp", quality)
  );

  // Older browsers may not support WebP encoding via canvas - fall back
  // to uploading the original file untouched in that case.
  if (!blob || blob.type !== "image/webp") {
    return file;
  }

  const webpName = file.name.replace(/\.[^.]+$/, "") + ".webp";
  return new File([blob], webpName, { type: "image/webp" });
}

async function uploadFile(file, folder) {
  const ext = file.name.split(".").pop();
  const path = `${folder}/${crypto.randomUUID()}.${ext}`;

  const { error } = await supabase.storage.from("media").upload(path, file);
  if (error) throw error;

  const { data } = supabase.storage.from("media").getPublicUrl(path);
  return data.publicUrl;
}

export async function uploadImage(file, folder) {
  const compressed = await compressToWebp(file);
  return uploadFile(compressed, folder);
}

// For the gallery grid, which shows many small tiles at once - uploads a
// full-size image plus a small thumbnail so the grid doesn't have to load
// full-resolution photos just to show tiny squares.
export async function uploadGalleryImage(file, folder) {
  const [full, thumb] = await Promise.all([
    compressToWebp(file),
    compressToWebp(file, THUMB_DIMENSION, THUMB_QUALITY),
  ]);

  const [image_url, thumb_url] = await Promise.all([
    uploadFile(full, folder),
    uploadFile(thumb, `${folder}/thumbs`),
  ]);

  return { image_url, thumb_url };
}

// Uploads just a small thumbnail (no full-size upload) - used as a grid
// cover image, e.g. the Events listing page's card thumbnail.
export async function uploadThumbnail(file, folder) {
  const thumb = await compressToWebp(file, THUMB_DIMENSION, THUMB_QUALITY);
  return uploadFile(thumb, `${folder}/thumbs`);
}
