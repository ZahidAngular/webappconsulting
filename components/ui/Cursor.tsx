"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function Cursor() {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 })
  const [hovering, setHovering] = useState(false)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    // only on fine pointers (desktop)
    if (!window.matchMedia("(pointer: fine)").matches) return
    setEnabled(true)
    document.documentElement.classList.add("cursor-none-fine")

    const move = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      const t = e.target as HTMLElement
      setHovering(!!t.closest('a, button, [data-cursor="hover"]'))
    }
    window.addEventListener("mousemove", move)
    return () => {
      window.removeEventListener("mousemove", move)
      document.documentElement.classList.remove("cursor-none-fine")
    }
  }, [x, y])

  if (!enabled) return null

  return (
    <>
      <motion.div
        style={{ left: sx, top: sy }}
        className="pointer-events-none fixed z-[9999] -translate-x-1/2 -translate-y-1/2"
      >
        <motion.div
          animate={{ scale: hovering ? 2.4 : 1, opacity: hovering ? 0.18 : 0.28 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="h-8 w-8 rounded-full border border-brand-bright bg-brand-bright/20"
        />
      </motion.div>
      <motion.div
        style={{ left: x, top: y }}
        className="pointer-events-none fixed z-[9999] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent"
      />
    </>
  )
}
