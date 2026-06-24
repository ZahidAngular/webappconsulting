"use client"

import { motion } from "framer-motion"
import { about, stats } from "@/lib/content"
import { getIcon } from "@/lib/icons"
import { Counter } from "@/components/ui/Counter"
import { RevealGroup, RevealItem } from "@/components/ui/Reveal"

export function AboutStats() {
  return (
    <section className="px-5 py-6">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border-soft md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-surface/40 px-6 py-7">
            <div className="font-display text-3xl font-bold text-gradient-brand sm:text-4xl">
              <Counter to={s.value} suffix={s.suffix} />
            </div>
            <p className="mt-1 text-sm text-text-3">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export function AboutValues() {
  return (
    <section className="px-5 py-14">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-10 font-display text-3xl font-bold tracking-tight sm:text-4xl">
          What we <span className="serif-accent">stand for</span>
        </h2>
        <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {about.values.map((v) => {
            const Icon = getIcon(v.icon)
            return (
              <RevealItem key={v.title} className="h-full">
                <div className="spotlight shine-border h-full rounded-3xl border border-border-soft bg-surface/50 p-7">
                  <span className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand to-brand-deep text-white">
                    <Icon size={20} />
                  </span>
                  <h3 className="font-display text-lg font-semibold">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-2">{v.text}</p>
                </div>
              </RevealItem>
            )
          })}
        </RevealGroup>
      </div>
    </section>
  )
}

export function AboutTimeline() {
  return (
    <section className="px-5 py-14">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Our <span className="serif-accent">journey</span>
        </h2>
        <div className="relative ml-2 border-l border-border-strong pl-8">
          {about.timeline.map((t, i) => (
            <motion.div
              key={t.year}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative mb-10 last:mb-0"
            >
              <span className="absolute -left-[2.6rem] grid h-7 w-7 place-items-center rounded-full border border-brand/40 bg-bg">
                <span className="h-2.5 w-2.5 rounded-full bg-brand-bright" />
              </span>
              <p className="font-display text-xl font-bold text-gradient-brand">{t.year}</p>
              <p className="mt-1 max-w-xl text-text-2">{t.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
