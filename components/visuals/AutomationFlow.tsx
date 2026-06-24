"use client"

import { motion } from "framer-motion"
import { FileText, CheckCircle2, Receipt, PackageCheck, Zap } from "lucide-react"

/**
 * Content-matching visual for "What do we automate?".
 * An animated pipeline showing a repeatable, multi-step transaction
 * (Quote → Approve → Invoice → Fulfil) flowing through systems.
 * Fills its container top-to-bottom (header • steps • result).
 */
const steps = [
  { icon: FileText, label: "Quote" },
  { icon: CheckCircle2, label: "Approve" },
  { icon: Receipt, label: "Invoice" },
  { icon: PackageCheck, label: "Fulfil" },
]

export function AutomationFlow() {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[var(--radius-xl2)] border border-border-soft bg-gradient-to-br from-surface to-surface-2 p-7">
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand/20 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-dots opacity-40" />

      {/* header */}
      <div className="relative flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-text-3">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
        Live automation pipeline
      </div>

      {/* steps — distributed to fill height */}
      <div className="relative mt-6 flex flex-1 flex-col justify-between">
        {/* rail */}
        <span className="absolute left-[1.45rem] top-4 bottom-4 w-px bg-[repeating-linear-gradient(var(--border-strong)_0_4px,transparent_4px_8px)]" />
        <motion.span
          className="absolute left-[1.45rem] top-4 w-px origin-top bg-brand-bright"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
          style={{ bottom: "1rem" }}
        />

        {steps.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.3, duration: 0.5 }}
            className="relative z-10 flex items-center gap-4"
          >
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-border-soft bg-surface text-brand-bright shadow-[0_8px_24px_-12px_var(--brand)]">
              <s.icon size={19} />
            </span>
            <div className="flex flex-1 items-center justify-between rounded-xl border border-border-soft bg-bg-2/50 px-4 py-3">
              <span className="text-sm font-semibold">{s.label}</span>
              <motion.span
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.45 + i * 0.3, type: "spring", stiffness: 300 }}
                className="rounded-full bg-brand/15 px-2.5 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider text-brand-bright"
              >
                auto
              </motion.span>
            </div>
          </motion.div>
        ))}

        {/* travelling packet */}
        <motion.span
          aria-hidden
          className="absolute left-[1.2rem] z-20 h-3 w-3 rounded-full bg-accent shadow-[0_0_14px_4px_var(--accent)]"
          initial={{ top: "4%", opacity: 0 }}
          whileInView={{ top: ["4%", "92%"], opacity: [0, 1, 1, 0] }}
          viewport={{ once: true }}
          transition={{ duration: 2.2, delay: 0.4, ease: "easeInOut", repeat: Infinity, repeatDelay: 1.4 }}
        />
      </div>

      {/* result footer */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1.4, duration: 0.5 }}
        className="relative mt-6 flex items-center gap-3 rounded-2xl border border-brand/30 bg-gradient-to-r from-brand/15 to-accent/10 p-4"
      >
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand to-brand-deep text-white">
          <Zap size={18} />
        </span>
        <div>
          <p className="text-sm font-semibold text-text">Zero manual hand-offs</p>
          <p className="text-xs text-text-3">Every step runs automatically, end to end.</p>
        </div>
      </motion.div>
    </div>
  )
}
