"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"
import type { Training } from "@/lib/content"
import { getIcon } from "@/lib/icons"
import { PageHero } from "@/components/ui/PageHero"
import { CTASection } from "@/components/sections/CTASection"

function TrainingVisual({ icon }: { icon: string }) {
  const Icon = getIcon(icon)
  return (
    <div className="relative grid aspect-square w-full place-items-center overflow-hidden rounded-[var(--radius-xl2)] border border-border-soft bg-gradient-to-br from-surface to-surface-2">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-25" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/20 blur-3xl" />
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative grid h-28 w-28 place-items-center rounded-3xl bg-gradient-to-br from-brand to-brand-deep text-white shadow-[0_20px_50px_-18px_var(--brand)]"
      >
        <Icon size={46} />
      </motion.div>
    </div>
  )
}

export function TrainingDetail({ training }: { training: Training }) {
  return (
    <main>
      <PageHero
        crumb={training.name}
        eyebrow="Training Programme"
        title={training.name}
        description={training.intro}
        visual={<TrainingVisual icon={training.icon} />}
      />

      <section className="px-5 py-10">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Programme <span className="serif-accent">modules</span>
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {training.modules.map((m, i) => (
              <motion.div
                key={m}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="spotlight flex items-center gap-4 rounded-2xl border border-border-soft bg-surface/50 p-5"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand/15 font-display font-bold text-brand-bright">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-medium">{m}</span>
              </motion.div>
            ))}
          </div>

          <Link href="/trainings" className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-text-2 transition-colors hover:text-brand-bright">
            <ArrowLeft size={15} /> All trainings
          </Link>
        </div>
      </section>

      <CTASection title={`Enrol your team in ${training.name}`} text="Tell us your team size and goals — we'll tailor the programme." />
    </main>
  )
}
