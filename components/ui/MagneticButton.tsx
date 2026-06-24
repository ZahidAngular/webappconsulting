"use client"

import { useRef, type ReactNode } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { cn } from "@/lib/utils"

interface Props {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: "primary" | "ghost" | "accent"
  className?: string
  strength?: number
}

export function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  strength = 0.4,
}: Props) {
  const ref = useRef<HTMLAnchorElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 220, damping: 18 })
  const sy = useSpring(y, { stiffness: 220, damping: 18 })

  function handleMove(e: React.MouseEvent) {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    x.set((e.clientX - (r.left + r.width / 2)) * strength)
    y.set((e.clientY - (r.top + r.height / 2)) * strength)
  }
  function reset() {
    x.set(0)
    y.set(0)
  }

  const base =
    "relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-colors duration-300 will-change-transform"
  const variants = {
    primary:
      "bg-brand text-white shadow-[0_18px_40px_-16px_var(--brand)] hover:bg-brand-deep",
    accent:
      "bg-accent text-[#1a0e00] shadow-[0_18px_40px_-16px_var(--accent)] hover:bg-accent-bright",
    ghost:
      "border border-border-strong bg-surface/40 text-text backdrop-blur hover:border-brand-bright hover:text-brand-bright",
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      data-cursor="hover"
      className={cn(base, variants[variant], className)}
    >
      {children}
    </motion.a>
  )
}
