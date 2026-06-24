"use client"

import { motion } from "framer-motion"
import {
  FileSignature,
  ReceiptText,
  ShieldCheck,
  UserPlus,
  Keyboard,
  Network,
  Boxes,
} from "lucide-react"
import { automations } from "@/lib/content"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { RevealGroup, RevealItem } from "@/components/ui/Reveal"
import { AutomationFlow } from "@/components/visuals/AutomationFlow"

const icons = [FileSignature, ReceiptText, ShieldCheck, ShieldCheck, UserPlus, Keyboard, Boxes]

export function WhatWeAutomate() {
  return (
    <section id="automate" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          index="01"
          eyebrow="What do we automate?"
          title="Repeatable work,"
          highlight="handled by systems"
          description="We target repeatable transactions that involve multiple steps and people across various IT systems — and turn them into reliable, automated flows."
        />

        {/* bento grid */}
        <div className="mt-12 grid items-stretch gap-4 lg:grid-cols-3">
          {/* hero tile — animated pipeline (fills full column height) */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-1"
          >
            <AutomationFlow />
          </motion.div>

          {/* automation tiles */}
          <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:col-span-2" stagger={0.06}>
            {automations.map((a, i) => {
              const Icon = icons[i] ?? Network
              return (
                <RevealItem key={a} className="h-full">
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="spotlight shine-border group flex h-full min-h-[8.5rem] flex-col justify-between rounded-2xl border border-border-soft bg-surface/50 p-5"
                  >
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand/12 text-brand-bright transition-colors group-hover:bg-brand group-hover:text-white">
                      <Icon size={18} />
                    </span>
                    <span className="mt-4 text-sm font-semibold leading-snug text-text">{a}</span>
                  </motion.div>
                </RevealItem>
              )
            })}
            {/* filler stat tile to complete the grid */}
            <RevealItem className="h-full">
              <div className="flex h-full min-h-[8.5rem] flex-col justify-between rounded-2xl border border-brand/30 bg-gradient-to-br from-brand/15 to-accent/10 p-5">
                <span className="font-display text-3xl font-bold text-gradient-brand">7+</span>
                <span className="text-sm font-medium text-text-2">multi-step workflows automated end-to-end</span>
              </div>
            </RevealItem>
          </RevealGroup>
        </div>
      </div>
    </section>
  )
}
