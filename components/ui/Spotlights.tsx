"use client"

import { useEffect } from "react"

/** Global controller: updates --mx/--my on any hovered `.spotlight` element. */
export function Spotlights() {
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return
    let frame = 0
    const onMove = (e: MouseEvent) => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        const el = (e.target as HTMLElement)?.closest?.(".spotlight") as HTMLElement | null
        if (!el) return
        const r = el.getBoundingClientRect()
        el.style.setProperty("--mx", `${e.clientX - r.left}px`)
        el.style.setProperty("--my", `${e.clientY - r.top}px`)
      })
    }
    window.addEventListener("mousemove", onMove, { passive: true })
    return () => window.removeEventListener("mousemove", onMove)
  }, [])
  return null
}
