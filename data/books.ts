// =============================================================
// BOOKSHELF  —  your books. Replace placeholders with real ones.
// Optional cover images go in /public/assets/books/ ->
// cover: "/assets/books/book-01.jpg". If cover is null a colored
// pixel spine is generated automatically.
// status: "reading" | "read" | "favorite" | "want"
// rating: 0-5 (use 0 to hide the stars)
// =============================================================

export type Book = {
  title: string
  author: string
  cover: string | null
  rating: number
  dateRead: string
  status: "reading" | "read" | "favorite" | "want"
  thoughts: string
  favoriteQuote: string
}

export const books: Book[] = [
  {
    title: "[BOOK TITLE]",
    author: "[Author]",
    cover: null,
    rating: 5,
    dateRead: "[2024]",
    status: "reading",
    thoughts: "[A line or two about how you feel about it.]",
    favoriteQuote: "[A quote you loved.]",
  },
  {
    title: "[BOOK TITLE]",
    author: "[Author]",
    cover: null,
    rating: 5,
    dateRead: "[2024]",
    status: "favorite",
    thoughts: "[Why this one stuck with you.]",
    favoriteQuote: "[A quote you loved.]",
  },
  {
    title: "[BOOK TITLE]",
    author: "[Author]",
    cover: null,
    rating: 4,
    dateRead: "[2023]",
    status: "read",
    thoughts: "[Your thoughts.]",
    favoriteQuote: "",
  },
  {
    title: "[BOOK TITLE]",
    author: "[Author]",
    cover: null,
    rating: 0,
    dateRead: "",
    status: "want",
    thoughts: "[On the to-read pile.]",
    favoriteQuote: "",
  },
]
