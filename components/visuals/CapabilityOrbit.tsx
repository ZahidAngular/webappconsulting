"use client"

import { motion } from "framer-motion"
import { Layers, Cloud, Workflow, Network, DatabaseZap, CreditCard, Zap } from "lucide-react"

const inner = [Layers, Cloud, Workflow]
const outer = [Network, DatabaseZap, CreditCard, Zap]

function Ring({
  items,
  radius,
  duration,
  reverse,
}: {
  items: typeof inner
  radius: number
  duration: number
  reverse?: boolean
}) {
  return (
    <motion.div
      className="absolute inset-0"
      style={{ animationDirection: reverse ? "reverse" : "normal" }}
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
    >
      <div className="absolute left-1/2 top-1/2 rounded-full border border-dashed border-border-soft" style={{ width: radius * 2, height: radius * 2, transform: "translate(-50%,-50%)" }} />
      {items.map((Icon, i) => {
        const angle = (i / items.length) * Math.PI * 2
        const x = Math.cos(angle) * radius
        const y = Math.sin(angle) * radius
        return (
          <div
            key={i}
            className="absolute left-1/2 top-1/2"
            style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
          >
            <motion.div
              animate={{ rotate: reverse ? 360 : -360 }}
              transition={{ duration, repeat: Infinity, ease: "linear" }}
              className="grid h-12 w-12 place-items-center rounded-2xl border border-border-soft bg-surface text-brand-bright shadow-[0_10px_24px_-14px_var(--brand)]"
            >
              <Icon size={20} />
            </motion.div>
          </div>
        )
      })}
    </motion.div>
  )
}

export function CapabilityOrbit() {
  return (
    <div className="relative grid aspect-square w-full place-items-center overflow-hidden rounded-[var(--radius-xl2)] border border-border-soft bg-gradient-to-br from-surface to-surface-2">
      <div className="pointer-events-none absolute inset-0 bg-dots opacity-30" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/20 blur-3xl" />

      <div className="relative h-full w-full">
        <Ring items={outer} radius={150} duration={32} />
        <Ring items={inner} radius={92} duration={22} reverse />

        {/* core */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="absolute left-1/2 top-1/2 grid h-24 w-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-3xl bg-gradient-to-br from-brand to-brand-deep text-white shadow-[0_20px_50px_-18px_var(--brand)]"
        >
          <span className="text-center font-display text-sm font-bold leading-tight">Web<br />App</span>
        </motion.div>
      </div>
    </div>
  )
}
