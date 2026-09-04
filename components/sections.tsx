"use client"

import { useEffect, useRef, useState } from "react"
import {
  ExternalLink,
  Mail,
  Globe,
  Download,
  FileText,
  Star,
  Camera,
  Music2,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
} from "lucide-react"
import { projects, type Project } from "@/data/projects"
import { site, techStack, resume } from "@/data/site"
import { about, currently } from "@/data/about"
import { books, type Book } from "@/data/books"
import { photos } from "@/data/photos"
import { memories, memoryCategories } from "@/data/memories"
import { music } from "@/data/music"
import { experiences } from "@/data/experience"

export type SectionId =
  | "laptop"
  | "resume"
  | "about"
  | "bookshelf"
  | "cassettes"
  | "camera"
  | "experience"
  | "corkboard"
  | "contact"
  | "coffee"
  | "help"

export const sectionMeta: Record<
  SectionId,
  { title: string; variant?: "computer" | "paper" | "default"; wide?: boolean }
> = {
  laptop: { title: "My Projects", variant: "computer", wide: true },
  resume: { title: "Jamie's Resume", variant: "paper" },
  about: { title: "My Notes", variant: "paper" },
  bookshelf: { title: "My Bookshelf", wide: true },
  cassettes: { title: "Jamie's Mixtapes" },
  camera: { title: "Photography", wide: true },
  experience: { title: "Experience", variant: "paper", wide: true },
  corkboard: { title: "Little Memories", wide: true },
  contact: { title: "Say Hi", variant: "paper" },
  coffee: { title: "Currently..." },
  help: { title: "How To Explore" },
}

const SPINE_COLORS = ["#a95745", "#596044", "#c9794f", "#704638", "#b97a70", "#e8b95c"]

/* ------------------------------------------------------------------ */
export function Section({ id }: { id: SectionId }) {
  switch (id) {
    case "laptop":
      return <ProjectsSection />
    case "resume":
      return <ResumeSection />
    case "about":
      return <AboutSection />
    case "bookshelf":
      return <BooksSection />
    case "cassettes":
      return <MusicSection />
    case "camera":
      return <PhotosSection />
    case "experience":
      return <ExperienceSection />
    case "corkboard":
      return <MemoriesSection />
    case "contact":
      return <ContactSection />
    case "coffee":
      return <CurrentlySection />
    case "help":
      return <HelpSection />
  }
}

/* ------------------------------ PROJECTS -------------------------- */
function ProjectsSection() {
  return (
    <div>
      <p className="font-pixel" style={{ fontSize: 9, color: "var(--lamp)", lineHeight: 1.8 }}>
        {"> ls ~/projects"}
      </p>
      <hr className="rule" />
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.title} p={p} />
        ))}
      </div>

      <h3 className="title-pixel" style={{ fontSize: 11, marginTop: 22, color: "var(--lamp)" }}>
        TECH STACK
      </h3>
      <hr className="rule" />
      <div className="flex flex-wrap gap-2">
        {techStack.map((t) => (
          <span key={t} className="pixel-tag">
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

function ProjectCard({ p }: { p: Project }) {
  return (
    <div className="pixel-card overflow-hidden">
      <div
        className="flex items-center justify-center"
        style={{ height: 116, background: "#1f1611", borderBottom: "2px solid var(--border)" }}
      >
        {p.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={p.image || "/placeholder.svg"}
            alt={p.title}
            style={{ width: "100%", height: "100%", objectFit: "cover", imageRendering: "pixelated" }}
          />
        ) : (
          <span className="font-pixel" style={{ fontSize: 8, color: "var(--muted-foreground)" }}>
            {"[ screenshot ]"}
          </span>
        )}
      </div>
      <div className="p-3">
        <div className="flex items-center gap-2">
          {p.logo && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={p.logo}
              alt=""
              aria-hidden="true"
              style={{ width: 28, height: 28, objectFit: "contain", imageRendering: "pixelated" }}
            />
          )}
          <h4 className="title-pixel" style={{ fontSize: 11, color: "var(--cream)" }}>
            {p.title}
          </h4>
        </div>
        <p style={{ fontSize: 13, margin: "7px 0", color: "var(--muted-foreground)", lineHeight: 1.5 }}>
          {p.description}
        </p>
        <p style={{ fontSize: 12, color: "var(--gold)", marginBottom: 8 }}>{p.role}</p>
        <div className="flex flex-wrap gap-1.5" style={{ marginBottom: 10 }}>
          {p.technologies.map((t) => (
            <span key={t} className="pixel-tag" style={{ fontSize: 7 }}>
              {t}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {p.github && (
            <a className="pixel-btn pixel-btn--muted" href={p.github} target="_blank" rel="noreferrer">
              <ExternalLink size={12} /> CODE
            </a>
          )}
          {p.liveDemo && (
            <a className="pixel-btn" href={p.liveDemo} target="_blank" rel="noreferrer">
              <Play size={12} /> LIVE VIEW
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

/* ------------------------------ RESUME ---------------------------- */
function ResumeSection() {
  return (
    <div>
      <div className="flex flex-wrap gap-2" style={{ marginBottom: 16 }}>
        <a className="pixel-btn" href={resume.file} target="_blank" rel="noreferrer">
          <FileText size={13} /> VIEW
        </a>
        <a className="pixel-btn pixel-btn--muted" href={resume.file} download={resume.downloadName}>
          <Download size={13} /> DOWNLOAD
        </a>
      </div>
      <div
        style={{
          border: "2px solid #cbb27f",
          borderRadius: 4,
          overflow: "hidden",
          background: "#fff",
          height: "min(60vh, 520px)",
        }}
      >
        <object data={resume.file} type="application/pdf" width="100%" height="100%" aria-label="Resume PDF">
          <div style={{ padding: 24, color: "#5a4a38", fontSize: 14, lineHeight: 1.6 }}>
            {"No resume found yet. Drop your PDF at "}
            <code>public{resume.file}</code>
            {" and it'll show up right here."}
          </div>
        </object>
      </div>
    </div>
  )
}

/* ------------------------------ ABOUT ----------------------------- */
function AboutSection() {
  return (
    <div className="paper-lines" style={{ color: "#3a2a20" }}>
      <p className="font-hand" style={{ fontSize: 26, lineHeight: 1.35, marginBottom: 18 }}>
        {about.intro}
      </p>

      <h3 className="title-pixel" style={{ fontSize: 11, color: "#7a5a3c" }}>
        CURRENTLY
      </h3>
      <ul style={{ margin: "8px 0 18px", listStyle: "none", padding: 0 }}>
        {about.currently.map((c) => (
          <li key={c.label} className="font-hand" style={{ fontSize: 21, lineHeight: 1.5 }}>
            <span style={{ color: "#a06a3a" }}>{c.label}: </span>
            {c.value}
          </li>
        ))}
      </ul>

      <h3 className="title-pixel" style={{ fontSize: 11, color: "#7a5a3c" }}>
        THINGS I LOVE
      </h3>
      <div className="flex flex-wrap gap-2" style={{ margin: "8px 0 18px" }}>
        {about.interests.map((i) => (
          <span
            key={i}
            className="font-hand"
            style={{
              fontSize: 18,
              padding: "2px 10px",
              background: "#e7d5ac",
              border: "1px solid #cbb27f",
              borderRadius: 20,
            }}
          >
            {i}
          </span>
        ))}
      </div>

      <h3 className="title-pixel" style={{ fontSize: 11, color: "#7a5a3c" }}>
        FUN FACTS
      </h3>
      <div className="grid gap-3 sm:grid-cols-3" style={{ marginTop: 10 }}>
        {about.funFacts.map((f, i) => (
          <div
            key={i}
            className="font-hand"
            style={{
              fontSize: 18,
              lineHeight: 1.3,
              padding: 12,
              background: ["#fff3b0", "#c7e5c1", "#f7c9c0"][i % 3],
              color: "#40372a",
              transform: `rotate(${[-2, 1.5, -1][i % 3]}deg)`,
              boxShadow: "0 4px 8px rgba(0,0,0,.12)",
            }}
          >
            {f}
          </div>
        ))}
      </div>
    </div>
  )
}

/* ------------------------------ BOOKS ----------------------------- */
function BooksSection() {
  const [selected, setSelected] = useState<Book | null>(null)
  const groups: { key: Book["status"]; label: string }[] = [
    { key: "reading", label: "Currently Reading" },
    { key: "favorite", label: "Favorites" },
    { key: "read", label: "Read" },
    { key: "want", label: "Want To Read" },
  ]

  return (
    <div>
      {groups.map((g) => {
        const list = books.filter((b) => b.status === g.key)
        if (!list.length && g.key !== "reading") return null
        return (
          <div key={g.key} style={{ marginBottom: 18 }}>
            <h3 className="title-pixel" style={{ fontSize: 11, color: "var(--lamp)" }}>
              {g.label}
            </h3>
            <hr className="rule" />
            {list.length ? (
              <div className="flex flex-wrap gap-3">
                {list.map((b, i) => (
                  <button
                    key={b.title + i}
                    className="hotspot"
                    onClick={() => setSelected(b)}
                    style={{ position: "relative", textAlign: "left" }}
                    aria-label={`Open details for ${b.title}`}
                  >
                    <BookSpine book={b} index={i} />
                  </button>
                ))}
              </div>
            ) : (
              <p className="font-hand" style={{ fontSize: 21, color: "var(--muted-foreground)" }}>
                Nothing at the moment! I'm in a bit of a reading slump 😭
              </p>
            )}
          </div>
        )
      })}

      {selected && (
        <div className="pixel-card" style={{ padding: 16, marginTop: 6 }}>
          <div className="flex items-start gap-4">
            <BookSpine book={selected} index={0} big />
            <div style={{ flex: 1 }}>
              <h4 className="title-pixel" style={{ fontSize: 12, color: "var(--cream)" }}>
                {selected.title}
              </h4>
              <p style={{ fontSize: 13, color: "var(--gold)", margin: "4px 0 8px" }}>
                {selected.author} {selected.dateRead && `· ${selected.dateRead}`}
              </p>
              <Stars n={selected.rating} />
              <p style={{ fontSize: 14, color: "var(--muted-foreground)", lineHeight: 1.6, marginTop: 8 }}>
                {selected.thoughts}
              </p>
              {selected.link && (
                <a className="pixel-btn" href={selected.link} target="_blank" rel="noreferrer" style={{ marginTop: 10 }}>
                  <ExternalLink size={12} /> {selected.linkLabel ?? "OPEN LINK"}
                </a>
              )}
              {selected.favoriteQuote && (
                <p className="font-hand" style={{ fontSize: 20, color: "var(--lamp)", marginTop: 8 }}>
                  {`"${selected.favoriteQuote}"`}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function BookSpine({ book, index, big }: { book: Book; index: number; big?: boolean }) {
  const w = big ? 74 : 58
  const h = big ? 108 : 86
  if (book.cover) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={book.cover || "/placeholder.svg"}
        alt={book.title}
        style={{ width: w, height: h, objectFit: "cover", borderRadius: 2, imageRendering: "pixelated" }}
      />
    )
  }
  return (
    <div
      style={{
        width: w,
        height: h,
        background: SPINE_COLORS[index % SPINE_COLORS.length],
        borderRadius: 2,
        border: "2px solid rgba(0,0,0,.25)",
        boxShadow: "inset -6px 0 0 rgba(0,0,0,.18)",
        padding: 6,
        display: "flex",
        alignItems: "flex-end",
      }}
    >
      <span
        style={{
          fontSize: big ? 9 : 7.5,
          color: "#fff",
          fontFamily: "var(--font-pixel), monospace",
          lineHeight: 1.4,
          textShadow: "0 1px 0 rgba(0,0,0,.4)",
        }}
      >
        {book.title.replace(/[[\]]/g, "")}
      </span>
    </div>
  )
}

function Stars({ n }: { n: number }) {
  if (!n) return null
  return (
    <div className="flex gap-0.5" aria-label={`${n} out of 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} size={14} color="var(--gold)" fill={i < n ? "var(--gold)" : "transparent"} />
      ))}
    </div>
  )
}

/* ------------------------------ MUSIC ----------------------------- */
function MusicSection() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [songIndex, setSongIndex] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(false)
  const [volume, setVolume] = useState(0.5)
  const [progress, setProgress] = useState(0)
  const song = music.songs[songIndex]

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.load()
    setProgress(0)
    if (playing) audio.play().catch(() => setPlaying(false))
  }, [songIndex])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.volume = volume
    audio.muted = muted
    if (playing) audio.play().catch(() => setPlaying(false))
    else audio.pause()
  }, [playing, muted, volume])

  function selectSong(index: number) {
    setSongIndex(index)
    setPlaying(true)
  }

  function changeSong(offset: number) {
    selectSong((songIndex + offset + music.songs.length) % music.songs.length)
  }

  function handleProgress(e: React.ChangeEvent<HTMLInputElement>) {
    const next = Number(e.target.value)
    setProgress(next)
    if (audioRef.current?.duration) audioRef.current.currentTime = (next / 100) * audioRef.current.duration
  }

  return (
    <div>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <audio
        ref={audioRef}
        src={song.src}
        onTimeUpdate={(e) => {
          const audio = e.currentTarget
          setProgress(audio.duration ? (audio.currentTime / audio.duration) * 100 : 0)
        }}
        onEnded={() => changeSong(1)}
        preload="metadata"
      />
      <div
        className="pixel-card"
        style={{ padding: 16, display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}
      >
        <div
          className="floaty"
          style={{
            width: 66,
            height: 44,
            background: "var(--darkwood)",
            border: "2px solid var(--gold)",
            borderRadius: 4,
            display: "grid",
            placeItems: "center",
          }}
          aria-hidden
        >
          <div style={{ display: "flex", gap: 14 }}>
            <span style={{ width: 12, height: 12, borderRadius: "50%", border: "2px solid var(--lamp)", animation: playing ? "spinReels 1.2s linear infinite" : "none" }} />
            <span style={{ width: 12, height: 12, borderRadius: "50%", border: "2px solid var(--lamp)", animation: playing ? "spinReels 1.2s linear infinite" : "none" }} />
          </div>
        </div>
        <div>
          <p className="title-pixel" style={{ fontSize: 9, color: "var(--muted-foreground)" }}>
            NOW PLAYING
          </p>
          <p className="font-hand" style={{ fontSize: 24, color: "var(--lamp)", lineHeight: 1.1 }}>
            {song.title} - {song.artist}
          </p>
          <p style={{ fontSize: 12, color: "var(--muted-foreground)", marginTop: 4 }}>{playing ? "PLAYING" : "PAUSED"}</p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2" style={{ marginBottom: 10 }}>
        <button className="pixel-btn pixel-btn--muted" onClick={() => changeSong(-1)} aria-label="Previous song">
          <SkipBack size={13} /> PREV
        </button>
        <button className="pixel-btn" onClick={() => setPlaying((value) => !value)} aria-label={playing ? "Pause song" : "Play song"}>
          {playing ? <Pause size={13} /> : <Play size={13} />} {playing ? "PAUSE" : "PLAY"}
        </button>
        <button className="pixel-btn pixel-btn--muted" onClick={() => changeSong(1)} aria-label="Next song">
          <SkipForward size={13} /> NEXT
        </button>
        <button className="hud-btn" onClick={() => setMuted((value) => !value)} aria-label={muted ? "Unmute music" : "Mute music"}>
          {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </button>
      </div>
      <div className="flex items-center gap-2" style={{ marginBottom: 16 }}>
        <input type="range" min={0} max={100} step={0.1} value={progress} onChange={handleProgress} aria-label="Song progress" style={{ flex: 1, accentColor: "var(--gold)" }} />
        <input type="range" min={0} max={1} step={0.01} value={volume} onChange={(e) => setVolume(Number(e.target.value))} aria-label="Music volume" style={{ width: 74, accentColor: "var(--gold)" }} />
      </div>

      {music.spotifyProfile && music.spotifyProfile !== "PASTE_SPOTIFY_LINK_HERE" ? (
        <a className="pixel-btn" href={music.spotifyProfile} target="_blank" rel="noreferrer">
          <Music2 size={13} /> OPEN SPOTIFY
        </a>
      ) : (
        <p style={{ fontSize: 13, color: "var(--muted-foreground)" }}>
          {"Paste your Spotify link in "}
          <code>data/music.ts</code>
          {" to light this up."}
        </p>
      )}

      <h3 className="title-pixel" style={{ fontSize: 11, marginTop: 20, color: "var(--lamp)" }}>
        MIXTAPE SONGS
      </h3>
      <hr className="rule" />
      <div className="grid gap-2 sm:grid-cols-2">
        {music.songs.map((track, i) => (
          <button
            key={track.src}
            className="pixel-card"
            onClick={() => selectSong(i)}
            aria-pressed={songIndex === i}
            style={{
              padding: "10px 12px",
              display: "flex",
              alignItems: "center",
              gap: 10,
              color: "var(--cream)",
              textDecoration: "none",
              opacity: songIndex === i ? 1 : 0.75,
              borderColor: songIndex === i ? "var(--lamp)" : undefined,
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                background: SPINE_COLORS[i % SPINE_COLORS.length],
                borderRadius: 2,
              }}
            />
            <span style={{ fontSize: 14 }}>{track.title} <span style={{ color: "var(--muted-foreground)", fontSize: 11 }}>— {track.artist}</span></span>
          </button>
        ))}
      </div>
    </div>
  )
}

/* ------------------------------ PHOTOS ---------------------------- */
function PhotosSection() {
  return (
    <div>
      <p style={{ fontSize: 13, color: "var(--muted-foreground)", marginBottom: 14 }}>
        {"A few frames from my camera roll."}
      </p>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {photos.map((ph, i) => (
          <figure
            key={i}
            className="pixel-card"
            style={{
              padding: 8,
              paddingBottom: 12,
              background: "#f3e7cd",
              transform: `rotate(${[-2, 1.5, -1, 2, -1.5, 1][i % 6]}deg)`,
            }}
          >
            <div
              style={{
                aspectRatio: "1/1",
                background: "#241611",
                display: "grid",
                placeItems: "center",
                marginBottom: 8,
                overflow: "hidden",
              }}
            >
              {ph.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={ph.image || "/placeholder.svg"}
                  alt={ph.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", imageRendering: "pixelated" }}
                />
              ) : (
                <Camera size={26} color="#8a6a4a" />
              )}
            </div>
            <figcaption className="font-hand" style={{ fontSize: 19, color: "#3a2a20", lineHeight: 1.2 }}>
              {ph.caption}
              <span style={{ display: "block", fontSize: 13, color: "#8a6a4a" }}>
                {[ph.location, ph.date].filter(Boolean).join(" · ")}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  )
}

/* ------------------------------ MEMORIES -------------------------- */
function MemoriesSection() {
  const [cat, setCat] = useState<string>("all")
  const list = cat === "all" ? memories : memories.filter((m) => m.category === cat)
  return (
    <div>
      <div className="flex flex-wrap gap-2" style={{ marginBottom: 16 }}>
        <FilterChip label="all" active={cat === "all"} onClick={() => setCat("all")} />
        {memoryCategories.map((c) => (
          <FilterChip key={c} label={c} active={cat === c} onClick={() => setCat(c)} />
        ))}
      </div>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {list.map((m, i) => (
          <figure
            key={i}
            style={{
              position: "relative",
              padding: 8,
              paddingBottom: 10,
              background: "#f3e7cd",
              boxShadow: "0 5px 12px rgba(0,0,0,.25)",
              transform: `rotate(${[-3, 2, -1.5, 3, -2, 1.5][i % 6]}deg)`,
            }}
          >
            <span
              aria-hidden
              style={{
                position: "absolute",
                top: -8,
                left: "50%",
                transform: "translateX(-50%) rotate(-4deg)",
                width: 46,
                height: 16,
                background: "rgba(232,185,92,.55)",
                border: "1px solid rgba(0,0,0,.08)",
              }}
            />
            <div
              style={{
                aspectRatio: "4/3",
                background: "#241611",
                display: "grid",
                placeItems: "center",
                overflow: "hidden",
              }}
            >
              {m.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={m.image || "/placeholder.svg"}
                  alt={m.caption}
                  style={{ width: "100%", height: "100%", objectFit: "cover", imageRendering: "pixelated" }}
                />
              ) : (
                <span className="font-pixel" style={{ fontSize: 7, color: "#8a6a4a" }}>
                  [ photo ]
                </span>
              )}
            </div>
            <figcaption className="font-hand" style={{ fontSize: 19, color: "#3a2a20", marginTop: 6 }}>
              {m.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  )
}

/* --------------------------- EXPERIENCE --------------------------- */
function ExperienceSection() {
  return (
    <div className="paper-lines" style={{ color: "#3a2a20" }}>
      <p className="font-hand" style={{ fontSize: 26, lineHeight: 1.3, marginBottom: 18 }}>
        A little timeline of the work I've done so far.
      </p>
      <div style={{ display: "grid", gap: 16 }}>
        {experiences.map((experience) => (
          <article key={`${experience.role}-${experience.company}`} style={{ borderLeft: "3px solid #cbb27f", paddingLeft: 14 }}>
            <h3 className="title-pixel" style={{ fontSize: 11, color: "#7a5a3c", lineHeight: 1.5 }}>
              {experience.role}
            </h3>
            <p style={{ fontSize: 16, fontWeight: 700, color: "#a06a3a", marginTop: 3 }}>
              {experience.company}
            </p>
            <p style={{ fontSize: 13, color: "#8a6a4a", marginTop: 2 }}>
              {experience.dates} · {experience.location}
            </p>
            <p style={{ fontSize: 14, lineHeight: 1.55, marginTop: 7 }}>
              {experience.description}
            </p>
          </article>
        ))}
      </div>
    </div>
  )
}

function FilterChip({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="pixel-tag"
      style={{
        cursor: "pointer",
        background: active ? "var(--gold)" : "var(--darkwood)",
        color: active ? "var(--brown)" : "var(--lamp)",
      }}
    >
      {label}
    </button>
  )
}

/* ------------------------------ CONTACT --------------------------- */
function ContactSection() {
  const c = site.contact
  const [message, setMessage] = useState("")
  const [formNote, setFormNote] = useState("")
  const links = [
    c.email && { icon: <Mail size={13} />, label: "EMAIL", href: `mailto:${c.email}` },
    c.github && { icon: <ExternalLink size={13} />, label: "GITHUB", href: c.github },
    c.linkedin && { icon: <ExternalLink size={13} />, label: "LINKEDIN", href: c.linkedin },
    c.portfolio && { icon: <Globe size={13} />, label: "PORTFOLIO", href: c.portfolio },
  ].filter(Boolean) as { icon: React.ReactNode; label: string; href: string }[]

  return (
    <div className="paper-lines" style={{ color: "#3a2a20" }}>
      <p className="font-hand" style={{ fontSize: 26, lineHeight: 1.3, marginBottom: 6 }}>
        {"Come say hi! I'd love to hear from you."}
      </p>
      <p style={{ fontSize: 13, color: "#7a5a3c", marginBottom: 16 }}>
        {"Whether it's a project, an idea, or just a hello."}
      </p>
      <p style={{ fontSize: 13, color: "#7a5a3c", marginBottom: 16 }}>
        {"You can also reach me through my "}
        <a href={c.linkedin} target="_blank" rel="noreferrer" style={{ color: "#a06a3a", textDecoration: "underline" }}>
          LinkedIn
        </a>
        {" and "}
        <a href={c.github} target="_blank" rel="noreferrer" style={{ color: "#a06a3a", textDecoration: "underline" }}>
          GitHub
        </a>
        {"."}
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          if (!message.trim()) return
          if (!c.email) {
            setFormNote("Add your email in data/site.ts to receive messages.")
            return
          }
          window.location.href = `mailto:${c.email}?subject=Hello from your little room&body=${encodeURIComponent(message)}`
          setMessage("")
          setFormNote("Your email app should open with the message ready to send.")
        }}
        style={{ marginBottom: 18 }}
      >
        <label htmlFor="contact-message" className="title-pixel" style={{ display: "block", fontSize: 10, color: "#7a5a3c", marginBottom: 7 }}>
          LEAVE A MESSAGE
        </label>
        <textarea
          id="contact-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="write me a little note..."
          rows={4}
          required
          style={{ width: "100%", resize: "vertical", padding: 10, border: "2px solid #cbb27f", background: "rgba(255,255,255,.42)", color: "#3a2a20", fontFamily: "inherit", fontSize: 16, lineHeight: 1.4, borderRadius: 3 }}
        />
        <button type="submit" className="pixel-btn" style={{ marginTop: 8 }}>
          <Mail size={13} /> SEND MESSAGE
        </button>
        {formNote && <p role="status" style={{ fontSize: 13, color: "#7a5a3c", marginTop: 8 }}>{formNote}</p>}
      </form>
      {links.length ? (
        <div className="flex flex-wrap gap-2">
          {links.map((l) => (
            <a
              key={l.label}
              className="pixel-btn"
              href={l.href}
              target={l.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noreferrer"
            >
              {l.icon} {l.label}
            </a>
          ))}
        </div>
      ) : (
        <p style={{ fontSize: 14, color: "#7a5a3c" }}>
          {"Add your links in "}
          <code>data/site.ts</code>
          {" to fill in this card."}
        </p>
      )}
    </div>
  )
}

/* ------------------------------ CURRENTLY ------------------------- */
function CurrentlySection() {
  const rows = [
    { k: "reading", v: currently.reading },
    { k: "listening to", v: currently.listening },
    { k: "learning", v: currently.learning },
    { k: "watching", v: currently.watching },
    { k: "obsessed with", v: currently.obsessedWith },
  ]
  return (
    <div>
      <p style={{ fontSize: 13, color: "var(--muted-foreground)", marginBottom: 12 }}>
        {"a little snapshot of right now ☕"}
      </p>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {rows.map((r) => (
          <li
            key={r.k}
            className="pixel-card"
            style={{ padding: "10px 12px", marginBottom: 8, display: "flex", gap: 10, alignItems: "baseline" }}
          >
            <span className="title-pixel" style={{ fontSize: 8, color: "var(--gold)", minWidth: 92 }}>
              {r.k.toUpperCase()}
            </span>
            <span style={{ fontSize: 14, color: "var(--cream)" }}>{r.v}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

/* ------------------------------ HELP ------------------------------ */
function HelpSection() {
  const tips = [
    "Click things in the room — the laptop, bookshelf, corkboard, camera and more.",
    "Flip the light switch on the wall to change the mood: day, cozy, or night.",
    "Poke the plant, check the clock, or peek out the window for little surprises.",
    "Tap the headphones to open the music player.",
    "Use the buttons up top for sound and this help note anytime.",
  ]
  return (
    <div>
      <p className="font-hand" style={{ fontSize: 24, color: "var(--lamp)", marginBottom: 12 }}>
        {"Welcome in — make yourself at home."}
      </p>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {tips.map((t, i) => (
          <li
            key={i}
            style={{ display: "flex", gap: 10, fontSize: 14, color: "var(--cream)", lineHeight: 1.6, marginBottom: 10 }}
          >
            <span className="title-pixel" style={{ fontSize: 10, color: "var(--gold)" }}>
              {String(i + 1).padStart(2, "0")}
            </span>
            {t}
          </li>
        ))}
      </ul>
    </div>
  )
}
