// =============================================================
// PHOTOGRAPHY  —  your camera roll. Photos live in /public/assets/photography/.
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
    image: "/assets/photography/DSC03903.JPG",
    title: "DSC03903",
    date: "",
    location: "",
    camera: "",
    caption: "",
  },
  {
    image: "/assets/photography/DSC03827.JPG",
    title: "DSC03827",
    date: "",
    location: "",
    camera: "",
    caption: "",
  },
  {
    image: "/assets/photography/E58F1109-81CD-4048-A9A8-AA2385BD63F0-34759-0000057758B6964A_VSCO.JPG",
    title: "E58F1109",
    date: "",
    location: "",
    camera: "",
    caption: "",
  },
]
