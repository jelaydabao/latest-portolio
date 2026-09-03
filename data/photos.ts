// =============================================================
// PHOTOGRAPHY  —  your camera roll. Drop images in
// /public/assets/photos/ and set image: "/assets/photos/photo-01.jpg".
// Entries with image: null render as an empty film frame so the
// gallery still looks nice while you gather your shots.
// =============================================================

export type Photo = {
  image: string | null
  title: string
  date: string
  location: string
  camera: string
  caption: string
}

export const photos: Photo[] = [
  {
    image: null,
    title: "[PHOTO TITLE]",
    date: "[2024]",
    location: "[where]",
    camera: "[camera / film]",
    caption: "[a little caption]",
  },
  {
    image: null,
    title: "[PHOTO TITLE]",
    date: "[2024]",
    location: "[where]",
    camera: "[camera / film]",
    caption: "[a little caption]",
  },
  {
    image: null,
    title: "[PHOTO TITLE]",
    date: "[2024]",
    location: "[where]",
    camera: "[camera / film]",
    caption: "[a little caption]",
  },
  {
    image: null,
    title: "[PHOTO TITLE]",
    date: "[2024]",
    location: "[where]",
    camera: "[camera / film]",
    caption: "[a little caption]",
  },
]
