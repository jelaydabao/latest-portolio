// =============================================================
// PROJECTS  —  replace these placeholder entries with your work.
// Drop project images in /public/assets/projects/ and point
// `image` at them, e.g. image: "/assets/projects/project-01.png"
// =============================================================

export type Project = {
  title: string
  description: string
  image: string | null
  technologies: string[]
  role: string
  github: string
  liveDemo: string
  featured: boolean
}

export const projects: Project[] = [
  {
    title: "[PROJECT ONE]",
    description:
      "[Short description of what this project is and why you built it. A sentence or two is plenty.]",
    image: null,
    technologies: ["React", "JavaScript", "CSS"],
    role: "[Your role / contribution]",
    github: "",
    liveDemo: "",
    featured: true,
  },
  {
    title: "[PROJECT TWO]",
    description: "[Short description of this project.]",
    image: null,
    technologies: ["Python", "PostgreSQL"],
    role: "[Your role / contribution]",
    github: "",
    liveDemo: "",
    featured: true,
  },
  {
    title: "[PROJECT THREE]",
    description: "[Short description of this project.]",
    image: null,
    technologies: ["Node.js", "Express", "SQL"],
    role: "[Your role / contribution]",
    github: "",
    liveDemo: "",
    featured: false,
  },
  {
    title: "[PROJECT FOUR]",
    description: "[Short description of this project.]",
    image: null,
    technologies: ["Power BI", "Excel"],
    role: "[Your role / contribution]",
    github: "",
    liveDemo: "",
    featured: false,
  },
]
