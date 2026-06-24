"use client"

import { motion } from "framer-motion"
import { FileText, ArrowRight, MonitorSmartphone, Check } from "lucide-react"

/**
 * Content-matching visual for the paperless message:
 * paper documents being digitized into a single screen.
 */
export function PaperlessVisual() {
  return (
    <div className="relative flex h-full w-full items-center justify-between gap-4 overflow-hidden rounded-[var(--radius-xl2)] border border-border-soft bg-gradient-to-br from-surface-2 to-surface p-8 sm:p-10">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
      <div className="pointer-events-none absolute -left-10 top-1/2 h-44 w-44 -translate-y-1/2 rounded-full bg-accent/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 top-1/2 h-44 w-44 -translate-y-1/2 rounded-full bg-brand/20 blur-3xl" />

      {/* paper stack */}
      <div className="relative z-10 flex-1">
        <div className="relative h-32 w-24">
          {[0, 1, 2].map((n) => (
            <motion.div
              key={n}
              initial={{ opacity: 0, y: 20, rotate: -6 + n * 4 }}
              whileInView={{ opacity: 1, y: -n * 6, rotate: -6 + n * 6, x: n * 6 }}
              viewport={{ once: true }}
              transition={{ delay: n * 0.12, duration: 0.5 }}
              className="absolute inset-0 flex flex-col gap-1.5 rounded-lg border border-black/10 bg-gradient-to-b from-white to-[#e9eef3] p-3 shadow-[0_10px_24px_-8px_rgba(0,0,0,0.55)]"
            >
              <FileText size={16} className="mb-0.5 text-slate-400" />
              {/* faux text lines so it reads as a real paper document */}
              <span className="h-1 w-full rounded-full bg-slate-300" />
              <span className="h-1 w-4/5 rounded-full bg-slate-300" />
              <span className="h-1 w-full rounded-full bg-slate-200" />
              <span className="h-1 w-3/5 rounded-full bg-slate-200" />
            </motion.div>
          ))}
        </div>
        <p className="mt-4 text-xs font-medium uppercase tracking-wider text-text-3">Paper-based</p>
      </div>

      {/* arrow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, type: "spring", stiffness: 220 }}
        className="relative z-10 grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand to-brand-deep text-white"
      >
        <ArrowRight size={18} />
      </motion.div>

      {/* digital screen */}
      <div className="relative z-10 flex-1">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative grid h-32 w-full max-w-[10rem] place-items-center rounded-2xl border border-brand/40 bg-gradient-to-br from-brand/20 to-surface shadow-[0_18px_40px_-18px_var(--brand)]"
        >
          <MonitorSmartphone size={34} className="text-brand-bright" />
          <motion.span
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.1, type: "spring", stiffness: 300 }}
            className="absolute -right-2 -top-2 grid h-7 w-7 place-items-center rounded-full bg-accent text-[#1a0e00]"
          >
            <Check size={15} />
          </motion.span>
        </motion.div>
        <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-brand-bright">Digitized</p>
      </div>
    </div>
  )
}
