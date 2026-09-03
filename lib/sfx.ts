// Tiny, forgiving sound-effect helper.
// Drop optional files in /public/assets/audio/ named:
//   click.mp3  paper.mp3  camera.mp3  cassette.mp3  book.mp3  switch.mp3  close.mp3
// Missing files simply do nothing (no errors, no noise).

let muted = false
const cache: Record<string, HTMLAudioElement> = {}

export function setSfxMuted(value: boolean) {
  muted = value
}

export function playSfx(name: string, volume = 0.35) {
  if (muted || typeof window === "undefined") return
  try {
    let a = cache[name]
    if (!a) {
      a = new Audio(`/assets/audio/${name}.mp3`)
      a.preload = "auto"
      cache[name] = a
    }
    a.currentTime = 0
    a.volume = volume
    const p = a.play()
    if (p && typeof p.catch === "function") p.catch(() => {})
  } catch {
    /* no-op */
  }
}
