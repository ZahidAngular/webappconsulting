"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { clients } from "@/lib/content"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { RevealGroup, RevealItem } from "@/components/ui/Reveal"

export function ClientExperience() {
  return (
    <section id="clients" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-brand/10 blur-[120px]" />

      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          align="center"
          index="05"
          eyebrow="Our client experience"
          title="Work that earns"
          highlight="recognition"
          description="The greatest gratification is to receive recognition for what we have built. Here are a few of the teams we've partnered with."
        />

        <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.07}>
          {clients.map((c) => (
            <RevealItem key={c.name} className="h-full">
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="shine-border spotlight group flex h-full flex-col rounded-3xl border border-border-soft bg-surface/50 p-6"
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={c.img}
                    alt={c.name}
                    width={140}
                    height={80}
                    className="h-[4.5rem] w-auto max-w-[8.5rem] shrink-0 rounded-[10px] object-contain"
                  />
                  <h3 className="font-display text-lg font-semibold leading-tight">{c.name}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-text-2">{c.note}</p>
                <div className="mt-5 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-brand-bright to-accent transition-transform duration-500 group-hover:scale-x-100" />
              </motion.div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
