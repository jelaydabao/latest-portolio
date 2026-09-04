// =============================================================
// LITTLE MEMORIES  —  scrapbook. Photos are organized by album folder in
// /public/assets/memories/. Add captions when you're ready.
// `category` groups them: "college" | "friends" | "trips" | "moments"
// (add your own categories freely).
// =============================================================

export type Memory = {
  image: string | null
  caption: string
  category: string
}

export const memoryCategories = ["college", "friends", "trips", "moments"]

export const memories: Memory[] = [
  { image: "/assets/memories/moments/IMG_7981.jpg", caption: "", category: "moments" },
  { image: "/assets/memories/all/59D35D5C-44A9-48C9-B978-F7ED4ED80529-5326-00000143251F2367_VSCO.JPG", caption: "", category: "all" },
  { image: "/assets/memories/all/IMG_3973.JPG", caption: "", category: "all" },
  { image: "/assets/memories/all/DSC01531.JPG", caption: "", category: "all" },
  { image: "/assets/memories/all/DSC01734.JPG", caption: "", category: "all" },
  { image: "/assets/memories/all/IMG_9243.JPG", caption: "", category: "all" },
  { image: "/assets/memories/all/IMG_9336_VSCO.JPG", caption: "", category: "all" },
  { image: "/assets/memories/friends/IMG_4464.JPG", caption: "", category: "friends" },
  { image: "/assets/memories/friends/IMG_4862.JPG", caption: "", category: "friends" },
  { image: "/assets/memories/trips/IMG_3226.JPG", caption: "", category: "trips" },
  { image: "/assets/memories/trips/IMG_2197.JPG", caption: "", category: "trips" },
  { image: "/assets/memories/college/DSC_0700.JPG", caption: "", category: "college" },
]
