"use client"

import { useEffect, useRef, type ReactNode } from "react"

type Props = {
  title: string
  variant?: "computer" | "paper" | "default"
  wide?: boolean
  onClose: () => void
  children: ReactNode
}

export function PixelWindow({ title, variant = "default", wide, onClose, children }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null)
  const bodyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    closeRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [onClose])

  const dots =
    variant === "paper"
      ? ["#c98", "#b87", "#a76"]
      : ["#a95745", "#e8b95c", "#596044"]

  return (
    <div
      className="scrim"
      role="presentation"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        className={`pwindow ${wide ? "pwindow--wide" : ""} ${
          variant === "paper" ? "pwindow--paper" : ""
        }`}
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        <div className="pwindow__bar">
          <div className="pwindow__dots" aria-hidden>
            {dots.map((c, i) => (
              <span key={i} className="pwindow__dot" style={{ background: c }} />
            ))}
          </div>
          <span className="pwindow__title">{title}</span>
          <button ref={closeRef} className="xbtn" onClick={onClose} aria-label="Close window">
            X
          </button>
        </div>
        <div className="pwindow__body" ref={bodyRef}>
          {children}
        </div>
      </div>
    </div>
  )
}
