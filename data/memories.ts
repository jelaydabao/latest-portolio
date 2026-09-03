// =============================================================
// LITTLE MEMORIES  —  scrapbook. Drop images in
// /public/assets/memories/ and set image: "/assets/memories/memory-01.jpg".
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
  { image: null, caption: "[a handwritten caption]", category: "college" },
  { image: null, caption: "[a handwritten caption]", category: "friends" },
  { image: null, caption: "[a handwritten caption]", category: "trips" },
  { image: null, caption: "[a handwritten caption]", category: "moments" },
  { image: null, caption: "[a handwritten caption]", category: "friends" },
  { image: null, caption: "[a handwritten caption]", category: "trips" },
]
