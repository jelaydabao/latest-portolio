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
    cover: "/assets/books/The%20Seven%20Husbands%20od%20Evelyn%20Hugo.png",
    rating: 5,
    dateRead: "",
    status: "favorite",
    thoughts: "One of those books that has permanently taken up space in my brain ♡",
    favoriteQuote: "",
  },
  {
    title: "Better Than the Movies",
    author: "Lynn Painter",
    cover: "/assets/books/Better%20Than%20the%20Movies.png",
    rating: 5,
    dateRead: "",
    status: "favorite",
    thoughts: "I love me some rom-com books!",
    favoriteQuote: "",
    link: "https://www.goodreads.com/book/show/55710822-better-than-the-movies",
    linkLabel: "Goodreads",
  },
  {
    title: "The Spanish Love Deception",
    author: "Elena Armas",
    cover: "/assets/books/The%20Spanish%20Love%20Deception.png",
    rating: 5,
    dateRead: "",
    status: "favorite",
    thoughts: "I love me some rom-com books!",
    favoriteQuote: "",
    link: "https://www.goodreads.com/book/show/52195163-the-spanish-love-deception",
    linkLabel: "Goodreads",
  },
  {
    title: "A Good Girl's Guide to Murder",
    author: "Holly Jackson",
    cover: "/assets/books/A%20Good%20Girl%27s%20Guide%20to%20Murder.png",
    rating: 0,
    dateRead: "",
    status: "read",
    thoughts: "",
    favoriteQuote: "",
    link: "https://www.goodreads.com/book/show/40916679-a-good-girl-s-guide-to-murder",
    linkLabel: "Goodreads",
  },
  {
    title: "Good Girl, Bad Blood",
    author: "Holly Jackson",
    cover: "/assets/books/Good%20Girl%2C%20Bad%20Blood.jpg",
    rating: 0,
    dateRead: "",
    status: "read",
    thoughts: "",
    favoriteQuote: "",
    link: "https://www.goodreads.com/book/show/45346684-good-girl-bad-blood",
    linkLabel: "Goodreads",
  },
  {
    title: "It Ends with Us",
    author: "Colleen Hoover",
    cover: "/assets/books/It%20Ends%20With%20Us.png",
    rating: 0,
    dateRead: "",
    status: "read",
    thoughts: "",
    favoriteQuote: "",
  },
  {
    title: "It Starts with Us",
    author: "Colleen Hoover",
    cover: "/assets/books/It%20Starts%20WIth%20Us.png",
    rating: 0,
    dateRead: "",
    status: "read",
    thoughts: "",
    favoriteQuote: "",
  },
  {
    title: "November 9",
    author: "Colleen Hoover",
    cover: "/assets/books/November%209.png",
    rating: 0,
    dateRead: "",
    status: "read",
    thoughts: "",
    favoriteQuote: "",
  },
  {
    title: "Daisy Jones & The Six",
    author: "Taylor Jenkins Reid",
    cover: "/assets/books/Daisy%20Jones%20%26%20The%20Six.png",
    rating: 0,
    dateRead: "",
    status: "read",
    thoughts: "",
    favoriteQuote: "",
    link: "https://www.goodreads.com/book/show/40597810-daisy-jones-the-six",
    linkLabel: "Goodreads",
  },
  {
    title: "The Housemaid's Secret",
    author: "Freida McFadden",
    cover: "/assets/books/The%20Housemaid%27s%20Secret.png",
    rating: 0,
    dateRead: "",
    status: "want",
    thoughts: "Hopefully this gets me out of my reading slump... 👀",
    favoriteQuote: "",
  },
]
