"use client"

import { useMemo, useRef, type CSSProperties } from "react"
import { hotspots } from "@/data/hotspots"

type Lighting = "day" | "cozy" | "night"

const lightingVars: Record<Lighting, CSSProperties> = {
  day: {
    "--scene-brightness": "1.16",
    "--scene-contrast": "1",
    "--scene-saturate": "1.06",
    "--tint-color": "255 240 200",
    "--tint-opacity": "0.05",
    "--dark-opacity": "0",
    "--lamp-opacity": "0.14",
    "--lamp-size": "42%",
    "--window-day": "0.9",
    "--stars-opacity": "0",
  } as CSSProperties,
  cozy: {
    "--scene-brightness": "1",
    "--scene-contrast": "1.02",
    "--scene-saturate": "1.06",
    "--tint-color": "232 185 92",
    "--tint-opacity": "0.18",
    "--dark-opacity": "0.24",
    "--lamp-opacity": "0.5",
    "--lamp-size": "46%",
    "--window-day": "0",
    "--stars-opacity": "0.4",
  } as CSSProperties,
  night: {
    "--scene-brightness": "0.68",
    "--scene-contrast": "1.06",
    "--scene-saturate": "0.95",
    "--tint-color": "255 200 110",
    "--tint-opacity": "0.12",
    "--dark-opacity": "0.66",
    "--lamp-opacity": "0.85",
    "--lamp-size": "40%",
    "--window-day": "0",
    "--stars-opacity": "1",
  } as CSSProperties,
}

const ariaLabels: Record<string, string> = {
  laptop: "Open projects on the laptop",
  resume: "Open the resume on the desk",
  about: "Read my notes",
  bookshelf: "Browse the bookshelf",
  cassettes: "Open the mixtapes and music",
  camera: "Open the photography gallery",
  corkboard: "Look at the memories on the corkboard",
  contact: "Open contact and socials",
  coffee: "See what I'm currently into",
  lightswitch: "Toggle the room lighting",
  clock: "Check the time",
  plant: "Poke the plant",
  chair: "Sit in the chair",
  headphones: "Toggle the music player",
  window: "Look out the window",
}

export function RoomScene({
  lighting,
  reducedMotion,
  onHotspot,
}: {
  lighting: Lighting
  reducedMotion: boolean
  onHotspot: (id: string) => void
}) {
  const parallaxRef = useRef<HTMLDivElement>(null)

  const stars = useMemo(
    () =>
      Array.from({ length: 22 }, () => ({
        left: Math.random() * 96 + "%",
        top: Math.random() * 90 + "%",
        dur: (2 + Math.random() * 3).toFixed(2) + "s",
        delay: (Math.random() * 3).toFixed(2) + "s",
      })),
    [],
  )

  const motes = useMemo(
    () =>
      Array.from({ length: 16 }, () => ({
        left: 52 + Math.random() * 30 + "%",
        top: 40 + Math.random() * 30 + "%",
        dur: (6 + Math.random() * 6).toFixed(2) + "s",
        delay: (Math.random() * 6).toFixed(2) + "s",
      })),
    [],
  )

  function handleMouse(e: React.MouseEvent<HTMLDivElement>) {
    if (reducedMotion || !parallaxRef.current) return
    const r = e.currentTarget.getBoundingClientRect()
    const dx = (e.clientX - r.left) / r.width - 0.5
    const dy = (e.clientY - r.top) / r.height - 0.5
    parallaxRef.current.style.transform = `translate(${(-dx * 14).toFixed(1)}px, ${(-dy * 14).toFixed(1)}px)`
  }

  function resetMouse() {
    if (parallaxRef.current) parallaxRef.current.style.transform = "translate(0,0)"
  }

  return (
    <div
      className="room-stage"
      style={lightingVars[lighting]}
      onMouseMove={handleMouse}
      onMouseLeave={resetMouse}
    >
      <div className="room-parallax" ref={parallaxRef}>
        <img
          src="/assets/room/room.png"
          alt="A cozy pixel-art study room with a desk, laptop, bookshelf, corkboard, plants and a window into the night."
          className="room-img"
          draggable={false}
        />

        {hotspots.map((h) => (
          <button
            key={h.id}
            className="hotspot"
            aria-label={ariaLabels[h.id] ?? h.label}
            onClick={() => onHotspot(h.id)}
            style={{
              left: `${h.box.l}%`,
              top: `${h.box.t}%`,
              width: `${h.box.w}%`,
              height: `${h.box.h}%`,
            }}
          >
            <span className="tooltip" aria-hidden>
              {h.label}
            </span>
          </button>
        ))}
      </div>

      {/* lighting overlays */}
      <div className="light-layer light-tint" aria-hidden />
      <div className="light-layer light-dark" aria-hidden />
      <div className="light-layer light-lamp" aria-hidden />
      <div className="light-layer light-window-day" aria-hidden />

      {/* night stars */}
      <div className="stars" aria-hidden>
        {stars.map((s, i) => (
          <span
            key={i}
            className="star"
            style={{ left: s.left, top: s.top, ["--tw" as string]: s.dur, animationDelay: s.delay }}
          />
        ))}
      </div>

      {/* dust motes in the lamp light */}
      <div className="dust" aria-hidden>
        {motes.map((m, i) => (
          <span
            key={i}
            className="mote"
            style={{ left: m.left, top: m.top, animationDuration: m.dur, animationDelay: m.delay }}
          />
        ))}
      </div>

      {/* coffee steam */}
      <div className="steam" aria-hidden>
        <span style={{ left: "0%" }} />
        <span style={{ left: "40%", animationDelay: "1s" }} />
        <span style={{ left: "70%", animationDelay: "2s" }} />
      </div>
    </div>
  )
}
