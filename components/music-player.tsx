"use client"

import { useEffect, useRef, useState } from "react"
import { Play, Pause, Music2 } from "lucide-react"
import { audio, music } from "@/data/music"

export function MusicPlayer({
  playing,
  muted,
  onToggle,
}: {
  playing: boolean
  muted: boolean
  onToggle: () => void
}) {
  const ref = useRef<HTMLAudioElement>(null)
  const [volume, setVolume] = useState(0.5)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.volume = volume
    if (playing && !muted) {
      const p = el.play()
      if (p && typeof p.catch === "function") p.catch(() => {})
    } else {
      el.pause()
    }
  }, [playing, muted, volume])

  const active = playing && !muted

  return (
    <div
      className="hud"
      style={{ left: 14, bottom: 14, background: "rgba(52,36,31,.82)", border: "2px solid var(--gold)", borderRadius: 8, padding: 8, backdropFilter: "blur(3px)", boxShadow: "0 3px 0 #1a1310" }}
    >
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <audio ref={ref} src={audio.ambience} loop preload="none" />
      <button
        className="hud-btn"
        data-on={active}
        onClick={onToggle}
        aria-label={active ? "Pause music" : "Play music"}
        style={{ boxShadow: "none" }}
      >
        {active ? <Pause size={16} /> : <Play size={16} />}
      </button>
      <div style={{ display: "flex", flexDirection: "column", gap: 2, minWidth: 108 }}>
        <span
          className="title-pixel"
          style={{ fontSize: 7, color: "var(--lamp)", display: "flex", alignItems: "center", gap: 4 }}
        >
          <Music2 size={10} /> {active ? "PLAYING" : "PAUSED"}
        </span>
        <span
          style={{
            fontSize: 12,
            color: "var(--cream)",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxWidth: 130,
          }}
        >
          {music.currentlyListening}
        </span>
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={(e) => setVolume(Number(e.target.value))}
          aria-label="Music volume"
          style={{ width: 120, accentColor: "var(--gold)" }}
        />
      </div>
    </div>
  )
}
