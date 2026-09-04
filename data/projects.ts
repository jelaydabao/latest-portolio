// =============================================================
// PROJECTS  —  replace these placeholder entries with your work.
// Drop project images in /public/assets/projects/ and point
// `image` at them, e.g. image: "/assets/projects/project-01.png"
// Add each live project URL to that project's `liveDemo` field.
// Add each project logo to its `logo` field, e.g. "/assets/projects/logo-01.png".
// =============================================================

export type Project = {
  title: string
  description: string
  image: string | null
  logo: string | null
  technologies: string[]
  role: string
  github: string
  liveDemo: string
  featured: boolean
}

export const projects: Project[] = [
  {
    title: "TURO: Mentorship Mobile Application",
    description:
      "A mentorship mobile application designed to connect mentors and mentees through a seamless and user-friendly platform. Contributed to the UI/UX design, frontend development, and deployment of the application to the Apple App Store.",
    image: "/assets/projects/TURO.png",
    logo: null,
    technologies: ["Flutter", "Dart", "Figma", "Xcode"],
    role: "Frontend Development · UI/UX Design · DevOps",
    github: "",
    liveDemo: "https://apps.apple.com/ph/app/turo/id6760473404",
    featured: true,
  },
  {
    title: "velvet & film",
    description:
      "A vintage-inspired photobooth website with customizable photo strips, multiple layouts, playful filters, stickers, and thoughtful details designed to make every session feel special.",
    image: "/assets/projects/Velvet%20%26%20Film.png",
    logo: null,
    technologies: ["Next.js", "React", "Tailwind CSS", "PostCSS"],
    role: "Solo Developer",
    github: "",
    liveDemo: "https://velvet-film-gj76.vercel.app/",
    featured: true,
  },
  {
    title: "MangaVerse",
    description:
      "A UI/UX prototype for an online manga reading platform, focused on intuitive navigation and creating an engaging reading experience.",
    image: "/assets/projects/Mangaverse.png",
    logo: null,
    technologies: ["Figma"],
    role: "UI/UX Design · Page Design · Prototyping",
    github: "",
    liveDemo:
      "https://www.figma.com/proto/Q1V3kqwqmUE6dejcYeTn38/MANGAVERSE-PROTOTYPE?node-id=283-1625&p=f&t=xCX2KwX5XDtTWiXZ-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=285%3A2486&show-proto-sidebar=1",
    featured: false,
  },
  {
    title: "Year-over-Year Restaurant Sales Analysis",
    description:
      "A Business Intelligence research project analyzing restaurant sales trends across multiple periods, using data visualization and Power BI dashboards to identify patterns and year-over-year growth.",
    image: "/assets/projects/Research.png",
    logo: null,
    technologies: ["Microsoft Excel", "Power BI", "Data Visualization", "Dashboarding"],
    role: "Business Intelligence · Data Analysis · Research",
    github: "",
    liveDemo:
      "https://www.researchgate.net/publication/392270745_Year-Over-Year_Growth_Analysis_of_Restaurant_Sales_PatternS_and_Visualization",
    featured: false,
  },
]
