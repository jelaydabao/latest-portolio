// =============================================================
// ROOM MAP  —  invisible interaction zones layered over room.png.
// Coordinates are percentages of the room image (which is square).
// { l: left%, t: top%, w: width%, h: height% }
// `kind` is either "section" (opens a window) or "action"
// (easter egg / toggle handled in code).
// Tweak the boxes if you swap in your own room artwork.
// =============================================================

export type Hotspot = {
  id: string
  label: string
  box: { l: number; t: number; w: number; h: number }
  kind: "section" | "action"
}

export const hotspots: Hotspot[] = [
  { id: "laptop", label: "projects", box: { l: 39, t: 39, w: 23, h: 19 }, kind: "section" },
  { id: "resume", label: "resume", box: { l: 28, t: 53, w: 14, h: 11 }, kind: "section" },
  { id: "about", label: "my notes", box: { l: 58, t: 54, w: 15, h: 11 }, kind: "section" },
  { id: "bookshelf", label: "books", box: { l: 1, t: 8, w: 26, h: 33 }, kind: "section" },
  { id: "cassettes", label: "music", box: { l: 1, t: 42, w: 24, h: 9 }, kind: "section" },
  { id: "camera", label: "photography", box: { l: 28, t: 44, w: 9, h: 9 }, kind: "section" },
  { id: "photobooth", label: "photobooth", box: { l: 75, t: 49, w: 8, h: 9 }, kind: "section" },
  { id: "experience", label: "experience", box: { l: 38, t: 45, w: 6, h: 9 }, kind: "section" },
  { id: "corkboard", label: "memories", box: { l: 31, t: 15, w: 27, h: 23 }, kind: "section" },
  { id: "contact", label: "say hi", box: { l: 35, t: 35, w: 6, h: 9 }, kind: "section" },
  { id: "coffee", label: "currently", box: { l: 62, t: 47, w: 9, h: 11 }, kind: "section" },
  // ---- little interactions / easter eggs ----
  { id: "lightswitch", label: "lights", box: { l: 65, t: 24, w: 6, h: 9 }, kind: "action" },
  { id: "clock", label: "time?", box: { l: 63, t: 13, w: 9, h: 10 }, kind: "action" },
  { id: "plant", label: "psst", box: { l: 83, t: 50, w: 16, h: 35 }, kind: "action" },
  { id: "chair", label: "sit?", box: { l: 33, t: 61, w: 24, h: 31 }, kind: "action" },
  { id: "headphones", label: "music?", box: { l: 67, t: 62, w: 8, h: 12 }, kind: "action" },
  { id: "window", label: "outside", box: { l: 78, t: 2, w: 21, h: 35 }, kind: "action" },
]
