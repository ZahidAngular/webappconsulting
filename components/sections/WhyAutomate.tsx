"use client"

import { motion } from "framer-motion"
import { TrendingUp, ShieldCheck, Smile, PiggyBank } from "lucide-react"
import { whyAutomate } from "@/lib/content"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { RevealGroup, RevealItem } from "@/components/ui/Reveal"
import { PaperlessVisual } from "@/components/visuals/PaperlessVisual"

const icons = [ShieldCheck, Smile, PiggyBank, TrendingUp]

export function WhyAutomate() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-dots opacity-60" />

      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          align="center"
          index="02"
          eyebrow="Why should you automate?"
          title="Less busywork."
          highlight="More momentum."
          description="By using systems, businesses get the most output from the least possible input — doing more with less, working smarter, not harder."
        />

        <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
          {whyAutomate.map((w, i) => {
            const Icon = icons[i]
            return (
              <RevealItem key={w.title}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="shine-border spotlight group relative h-full overflow-hidden rounded-3xl border border-border-soft bg-surface/50 p-7"
                >
                  <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand to-brand-deep text-white shadow-[0_10px_30px_-10px_var(--brand)]">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-display text-xl font-semibold">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-2">{w.text}</p>
                  <span className="pointer-events-none absolute -right-6 -top-6 font-display text-7xl font-bold text-border-soft/60 transition-colors group-hover:text-brand/10">
                    0{i + 1}
                  </span>
                </motion.div>
              </RevealItem>
            )
          })}
        </RevealGroup>

        {/* paperless visual banner (content-matched, bespoke) */}
        <div className="mt-14 grid items-stretch gap-4 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-center rounded-[var(--radius-xl2)] border border-border-soft bg-surface/40 p-8 sm:p-10"
          >
            <p className="font-display text-2xl font-bold leading-tight sm:text-3xl">
              A paperless office relies on <span className="serif-accent text-[1.1em]">digitized documents</span> — not paper.
            </p>
            <p className="mt-4 text-text-2">
              A workplace with minimal paper-based processes and maximum clarity. We move document-heavy operations into clean digital flows.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="min-h-[16rem]"
          >
            <PaperlessVisual />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
