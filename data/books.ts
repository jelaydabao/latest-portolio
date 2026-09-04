// =============================================================
// BOOKSHELF  —  your books.
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
  link?: string
  linkLabel?: string
}

export const books: Book[] = [
  {
    title: "The Seven Husbands of Evelyn Hugo",
    author: "Taylor Jenkins Reid",
    cover: null,
    rating: 5,
    dateRead: "",
    status: "favorite",
    thoughts: "One of those books that has permanently taken up space in my brain ♡",
    favoriteQuote: "",
  },
  {
    title: "A Good Girl's Guide to Murder Series",
    author: "Holly Jackson",
    cover: null,
    rating: 0,
    dateRead: "",
    status: "read",
    thoughts: "",
    favoriteQuote: "",
    link: "https://www.goodreads.com/series/270081-a-good-girl-s-guide-to-murder",
    linkLabel: "Goodreads Series",
  },
  {
    title: "The Housemaid's Secret",
    author: "Freida McFadden",
    cover: null,
    rating: 0,
    dateRead: "",
    status: "want",
    thoughts: "Hopefully this gets me out of my reading slump... 👀",
    favoriteQuote: "",
  },
]
