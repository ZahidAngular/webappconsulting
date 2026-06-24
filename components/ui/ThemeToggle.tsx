"use client"

import { Moon, Sun } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "@/components/providers/ThemeProvider"

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggle } = useTheme()
  const dark = theme === "dark"
  return (
    <button
      onClick={toggle}
      aria-label="Toggle colour theme"
      className={`group relative grid h-10 w-10 place-items-center overflow-hidden rounded-full border border-border-soft bg-surface/60 backdrop-blur transition-colors hover:border-brand-bright ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={dark ? "moon" : "sun"}
          initial={{ y: 14, opacity: 0, rotate: -40 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: -14, opacity: 0, rotate: 40 }}
          transition={{ duration: 0.25 }}
          className="text-brand-bright"
        >
          {dark ? <Moon size={17} /> : <Sun size={18} className="text-accent" />}
        </motion.span>
      </AnimatePresence>
    </button>
  )
}
