"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { HelpCircle, Volume2, VolumeX } from "lucide-react"
import { RoomScene } from "@/components/room-scene"
import { PixelWindow } from "@/components/pixel-window"
import { MusicPlayer } from "@/components/music-player"
import { Section, sectionMeta, type SectionId } from "@/components/sections"
import { music } from "@/data/music"
import { playSfx, setSfxMuted } from "@/lib/sfx"
import { site } from "@/data/site"

type Lighting = "day" | "cozy" | "night"
type Phase = "intro" | "loading" | "ready"

const SECTION_IDS: SectionId[] = [
  "laptop",
  "resume",
  "about",
  "bookshelf",
  "cassettes",
  "camera",
  "photobooth",
  "experience",
  "corkboard",
  "contact",
  "coffee",
]

const SFX: Record<string, string> = {
  laptop: "click",
  resume: "paper",
  about: "paper",
  bookshelf: "book",
  cassettes: "cassette",
  camera: "camera",
  corkboard: "click",
  contact: "paper",
  coffee: "click",
}

const LOADING_STEPS = ["turning on the lights...", "booting up the computer...", "brewing coffee...", "welcome home ♡"]

const PLANT_LINES = ["still alive, somehow.", "psst... water me?", "growing strong \uD83C\uDF31", "photosynthesizing."]
const CHAIR_LINES = ["comfiest seat in the house.", "*creak*", "stay a while."]
const WINDOW_LINES = ["quiet night out there.", "the moon says hi.", "a few stars are out."]
const LANDING_ROLES = ["Frontend Developer", "Data Analyst", "UI/UX Designer"]

export function RoomExperience() {
  const [phase, setPhase] = useState<Phase>("intro")
  const [loadStep, setLoadStep] = useState(0)
  const [lighting, setLighting] = useState<Lighting>("cozy")
  const [active, setActive] = useState<SectionId | null>(null)
  const [muted, setMuted] = useState(false)
  const [musicOn, setMusicOn] = useState(false)
  const [songIndex, setSongIndex] = useState(0)
  const [showMusicPrompt, setShowMusicPrompt] = useState(false)
  const [toast, setToast] = useState<{ msg: string; key: number } | null>(null)
  const [roleIndex, setRoleIndex] = useState(0)
  const [roleText, setRoleText] = useState("")
  const [deletingRole, setDeletingRole] = useState(false)
  const laptopClicks = useRef(0)
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const reducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false
    return window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false
  }, [])

  // restore lighting preference
  useEffect(() => {
    const saved = localStorage.getItem("room-light") as Lighting | null
    if (saved) setLighting(saved)
  }, [])

  useEffect(() => {
    setSfxMuted(muted)
  }, [muted])

  useEffect(() => {
    const role = LANDING_ROLES[roleIndex]
    const finishedTyping = !deletingRole && roleText === role
    const finishedDeleting = deletingRole && roleText === ""
    const delay = finishedDeleting ? 120 : finishedTyping ? 2000 : deletingRole ? 75 : 105
    const timer = setTimeout(() => {
      if (finishedDeleting) {
        setDeletingRole(false)
        setRoleIndex((index) => (index + 1) % LANDING_ROLES.length)
      } else if (finishedTyping) {
        setDeletingRole(true)
      } else if (deletingRole) {
        setRoleText((text) => text.slice(0, -1))
      } else {
        setRoleText(role.slice(0, roleText.length + 1))
      }
    }, delay)
    return () => clearTimeout(timer)
  }, [deletingRole, roleIndex, roleText])

  const showToast = useCallback((msg: string) => {
    setToast({ msg, key: Date.now() })
    if (toastTimer.current) clearTimeout(toastTimer.current)
    toastTimer.current = setTimeout(() => setToast(null), 3400)
  }, [])

  // intro -> loading sequence
  function enterRoom() {
    setPhase("loading")
    playSfx("switch", 0.4)
  }

  useEffect(() => {
    if (phase !== "loading") return
    const total = reducedMotion ? 1 : LOADING_STEPS.length
    let i = 0
    setLoadStep(0)
    const iv = setInterval(
      () => {
        i += 1
        if (i >= total) {
          clearInterval(iv)
          setPhase("ready")
          setShowMusicPrompt(true)
        } else {
          setLoadStep(i)
        }
      },
      reducedMotion ? 300 : 620,
    )
    return () => clearInterval(iv)
  }, [phase, reducedMotion])

  const cycleLight = useCallback(() => {
    setLighting((l) => {
      const next: Lighting = l === "day" ? "cozy" : l === "cozy" ? "night" : "day"
      localStorage.setItem("room-light", next)
      return next
    })
  }, [])

  const changeSong = useCallback((offset: number) => {
    setSongIndex((index) => (index + offset + music.songs.length) % music.songs.length)
    setMusicOn(true)
  }, [])

  const selectSong = useCallback((index: number) => {
    setSongIndex(index)
    setMusicOn(true)
  }, [])

  const handleHotspot = useCallback(
    (id: string) => {
      if (SECTION_IDS.includes(id as SectionId)) {
        playSfx(SFX[id] ?? "click")
        setActive(id as SectionId)
        if (id === "laptop") {
          laptopClicks.current += 1
          if (laptopClicks.current === 4) showToast("you really like this laptop, huh? ♡")
        }
        return
      }
      // actions / easter eggs
      switch (id) {
        case "lightswitch": {
          playSfx("switch", 0.4)
          cycleLight()
          break
        }
        case "clock": {
          const now = new Date()
          const t = now.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })
          showToast(`it's ${t}. time flies in here.`)
          break
        }
        case "plant":
          playSfx("click", 0.25)
          showToast(PLANT_LINES[Math.floor(Math.random() * PLANT_LINES.length)])
          break
        case "chair":
          playSfx("click", 0.25)
          showToast(CHAIR_LINES[Math.floor(Math.random() * CHAIR_LINES.length)])
          break
        case "window":
          showToast(WINDOW_LINES[Math.floor(Math.random() * WINDOW_LINES.length)])
          break
        case "headphones":
          playSfx("click", 0.3)
          setMusicOn((m) => !m)
          showToast(musicOn ? "music off." : "music on \u266A")
          break
      }
    },
    [cycleLight, showToast, musicOn],
  )

  const meta = active ? sectionMeta[active] : null

  return (
    <main className="room-root">
      <RoomScene lighting={lighting} reducedMotion={reducedMotion} onHotspot={handleHotspot} />

      {/* corner HUD */}
      {phase === "ready" && (
        <>
          <div className="hud" style={{ top: 14, right: 14 }}>
            <button
              className="hud-btn"
              data-on={!muted}
              aria-label={muted ? "Unmute sound" : "Mute sound"}
              onClick={() => setMuted((m) => !m)}
            >
              {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
            <button className="hud-btn" aria-label="How to explore" onClick={() => setActive("help")}>
              <HelpCircle size={18} />
            </button>
          </div>

          <MusicPlayer
            playing={musicOn}
            muted={muted}
            onToggle={() => setMusicOn((m) => !m)}
            songIndex={songIndex}
            onSongChange={changeSong}
          />
        </>
      )}

      {/* section window */}
      {active && meta && (
        <PixelWindow
          title={meta.title}
          variant={meta.variant}
          wide={meta.wide}
          onClose={() => {
            playSfx("close", 0.3)
            setActive(null)
          }}
        >
          <Section
            id={active}
            musicControls={{
              songIndex,
              playing: musicOn,
              onToggle: () => setMusicOn((m) => !m),
              onSongChange: changeSong,
              onSongSelect: selectSong,
            }}
          />
        </PixelWindow>
      )}

      {/* toast / easter-egg note */}
      {toast && (
        <div className="toast" key={toast.key} role="status">
          {toast.msg}
        </div>
      )}

      {/* music prompt */}
      {phase === "ready" && showMusicPrompt && (
        <div className="scrim" style={{ zIndex: 55 }}>
          <div className="pwindow" style={{ width: "min(100%, 380px)" }}>
            <div className="pwindow__bar">
              <span className="pwindow__title" style={{ marginInline: 0 }}>
                ♪ a little music?
              </span>
            </div>
            <div className="pwindow__body" style={{ textAlign: "center" }}>
              <p style={{ fontSize: 14, color: "var(--muted-foreground)", marginBottom: 16, lineHeight: 1.6 }}>
                {"Want some cozy background sound while you look around?"}
              </p>
              <div className="flex justify-center gap-2">
                <button
                  className="pixel-btn"
                  onClick={() => {
                    setMusicOn(true)
                    setShowMusicPrompt(false)
                    playSfx("click", 0.3)
                  }}
                >
                  PLAY MUSIC
                </button>
                <button
                  className="pixel-btn pixel-btn--muted"
                  onClick={() => {
                    setShowMusicPrompt(false)
                    playSfx("click", 0.3)
                  }}
                >
                  NO THANKS
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* intro + loading */}
      {phase !== "ready" && (
        <div
          className="scrim"
          style={{
            zIndex: 80,
            background: "radial-gradient(120% 90% at 50% 45%, #2a1d17 0%, #150e0c 75%)",
            backdropFilter: "none",
          }}
        >
          <div style={{ textAlign: "center", padding: 24, maxWidth: 560 }}>
            {phase === "intro" ? (
              <>
                <h1
                  className="font-hand"
                  style={{ fontSize: "clamp(48px, 10vw, 82px)", fontWeight: 600, color: "var(--lamp)", lineHeight: 1, textShadow: "0 4px 0 #1a1310", marginBottom: 10 }}
                >
                  {site.name}
                </h1>
                <p style={{ fontSize: 14, color: "var(--cream)", margin: "0 0 14px", letterSpacing: "0.08em" }}>
                  Jamie Andrea C. Dabao
                </p>
                <p className="title-pixel" style={{ fontSize: 10, minHeight: 22, color: "var(--gold)", margin: "0 0 28px" }} aria-label={roleText}>
                  &gt; {roleText}<span className="blink" aria-hidden>_</span>
                </p>
                <button className="pixel-btn" style={{ fontSize: 11, padding: "12px 18px" }} onClick={enterRoom} autoFocus>
                  ↓ COME IN
                </button>
                <p style={{ fontSize: 12, color: "var(--muted-foreground)", marginTop: 18 }}>
                  {"click around once you're inside — everything is interactive."}
                </p>
              </>
            ) : (
              <>
                <div
                  className="floaty"
                  aria-hidden
                  style={{ fontSize: 40, marginBottom: 18 }}
                >
                  {"\uD83D\uDD6F\uFE0F"}
                </div>
                <p className="title-pixel blink" style={{ fontSize: 12, color: "var(--lamp)", lineHeight: 1.8 }}>
                  {LOADING_STEPS[loadStep]}
                </p>
                <div
                  style={{
                    marginTop: 18,
                    height: 10,
                    width: 220,
                    marginInline: "auto",
                    border: "2px solid var(--gold)",
                    borderRadius: 3,
                    overflow: "hidden",
                    background: "#1a1310",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: `${((loadStep + 1) / LOADING_STEPS.length) * 100}%`,
                      background: "var(--gold)",
                      transition: "width .4s ease",
                    }}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </main>
  )
}
