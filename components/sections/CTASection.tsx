"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Phone } from "lucide-react"
import { site } from "@/lib/content"
import { MagneticButton } from "@/components/ui/MagneticButton"

export function CTASection({
  title = "Ready to streamline your business?",
  text = "Tell us what's slowing your team down — we'll show you what to automate first.",
}: {
  title?: string
  text?: string
}) {
  return (
    <section className="px-5 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto max-w-6xl overflow-hidden rounded-[var(--radius-xl2)] border border-border-soft bg-gradient-to-br from-surface to-surface-2 p-10 text-center sm:p-16"
      >
        <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-brand/15 blur-[100px]" />
        <div className="pointer-events-none absolute inset-0 bg-dots opacity-30" />

        <h2 className="relative font-display text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
          {title}
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-lg text-text-2">{text}</p>
        <div className="relative mt-9 flex flex-wrap items-center justify-center gap-3">
          <MagneticButton href="/contact" variant="primary">
            Talk to us <ArrowUpRight size={16} />
          </MagneticButton>
          <MagneticButton href={site.phoneHref} variant="ghost">
            <Phone size={15} /> {site.phone}
          </MagneticButton>
        </div>
      </motion.div>
    </section>
  )
}
