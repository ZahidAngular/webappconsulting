"use client"

import { useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import {
  Layers,
  Cloud,
  Workflow,
  Network,
  DatabaseZap,
  CreditCard,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react"
import { services, capabilities } from "@/lib/content"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { RevealGroup, RevealItem } from "@/components/ui/Reveal"
import { Marquee } from "@/components/ui/Marquee"

const iconMap: Record<string, LucideIcon> = {
  Layers,
  Cloud,
  Workflow,
  Network,
  DatabaseZap,
  CreditCard,
}

function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 18 })
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 18 })

  function onMove(e: React.MouseEvent) {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width - 0.5)
    my.set((e.clientY - r.top) / r.height - 0.5)
  }
  function reset() {
    mx.set(0)
    my.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d", transformPerspective: 900 }}
      className="h-full"
    >
      {children}
    </motion.div>
  )
}

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            index="03"
            eyebrow="Our technology"
            title="Platforms we"
            highlight="build & automate on"
            description="Advice and the tools to streamline business processes — built on the platforms enterprises already trust."
          />
        </div>

        <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          {services.map((s) => {
            const Icon = iconMap[s.icon] ?? Layers
            return (
              <RevealItem key={s.title} className="h-full">
                <TiltCard>
                  <div className="shine-border spotlight group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border-soft bg-surface/50 p-7 transition-colors hover:bg-surface">
                    <div
                      className="mb-6 grid h-14 w-14 place-items-center rounded-2xl border border-border-soft bg-surface text-brand-bright transition-all duration-300 group-hover:border-brand group-hover:bg-brand group-hover:text-white"
                      style={{ transform: "translateZ(40px)" }}
                    >
                      <Icon size={24} />
                    </div>
                    <h3 className="font-display text-xl font-semibold" style={{ transform: "translateZ(25px)" }}>
                      {s.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-text-2">{s.text}</p>
                    <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand-bright opacity-0 transition-opacity group-hover:opacity-100">
                      Learn more <ArrowUpRight size={15} />
                    </span>
                  </div>
                </TiltCard>
              </RevealItem>
            )
          })}
        </RevealGroup>
      </div>

      {/* capabilities marquee strip */}
      <div className="mt-16 border-y border-border-soft py-6">
        <Marquee duration={28}>
          {capabilities.concat(capabilities).map((c, i) => (
            <div key={i} className="mx-6 flex items-center gap-6">
              <span className="font-display text-2xl font-semibold text-text-2 sm:text-3xl">{c}</span>
              <span className="h-2 w-2 rounded-full bg-accent" />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  )
}
