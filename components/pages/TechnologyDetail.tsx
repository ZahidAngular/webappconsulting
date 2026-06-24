"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Check, ArrowLeft } from "lucide-react"
import type { Technology } from "@/lib/content"
import { getIcon } from "@/lib/icons"
import { PageHero } from "@/components/ui/PageHero"
import { CTASection } from "@/components/sections/CTASection"
import { RevealGroup, RevealItem } from "@/components/ui/Reveal"

function TechVisual({ icon }: { icon: string }) {
  const Icon = getIcon(icon)
  return (
    <div className="relative grid aspect-square w-full place-items-center overflow-hidden rounded-[var(--radius-xl2)] border border-border-soft bg-gradient-to-br from-surface to-surface-2">
      <div className="pointer-events-none absolute inset-0 bg-dots opacity-30" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/20 blur-3xl" />
      {[260, 190, 120].map((s, i) => (
        <motion.div
          key={s}
          className="absolute rounded-full border border-dashed border-border-soft"
          style={{ width: s, height: s }}
          animate={{ rotate: i % 2 ? -360 : 360 }}
          transition={{ duration: 26 + i * 8, repeat: Infinity, ease: "linear" }}
        />
      ))}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative grid h-28 w-28 place-items-center rounded-3xl bg-gradient-to-br from-brand to-brand-deep text-white shadow-[0_20px_50px_-18px_var(--brand)]"
      >
        <Icon size={44} />
      </motion.div>
    </div>
  )
}

export function TechnologyDetail({ tech }: { tech: Technology }) {
  return (
    <main>
      <PageHero
        crumb={tech.name}
        eyebrow="Technology"
        title={tech.name}
        description={tech.intro}
        visual={<TechVisual icon={tech.icon} />}
      />

      {/* features */}
      <section className="px-5 py-10">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            What we <span className="serif-accent">deliver</span>
          </h2>
          <RevealGroup className="grid gap-5 sm:grid-cols-2" stagger={0.08}>
            {tech.features.map((f) => (
              <RevealItem key={f.title} className="h-full">
                <div className="spotlight shine-border h-full rounded-3xl border border-border-soft bg-surface/50 p-7">
                  <h3 className="font-display text-lg font-semibold text-brand-bright">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-2">{f.text}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* benefits */}
      <section className="px-5 py-10">
        <div className="mx-auto max-w-6xl rounded-[var(--radius-xl2)] border border-border-soft bg-surface/40 p-8 sm:p-12">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <h2 className="font-display text-2xl font-bold leading-tight sm:text-3xl">
              Why it <span className="serif-accent">works</span>
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {tech.benefits.map((b) => (
                <div key={b} className="flex items-center gap-3">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand/15 text-brand-bright">
                    <Check size={15} />
                  </span>
                  <span className="text-sm font-medium">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-5">
        <Link href="/technology" className="inline-flex items-center gap-2 text-sm font-semibold text-text-2 transition-colors hover:text-brand-bright">
          <ArrowLeft size={15} /> All technologies
        </Link>
      </div>

      <CTASection title={`Ready to build with ${tech.name}?`} />
    </main>
  )
}
