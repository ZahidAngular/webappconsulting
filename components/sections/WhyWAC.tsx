"use client"

import { motion } from "framer-motion"
import { Lightbulb, Repeat, Wrench } from "lucide-react"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { Reveal } from "@/components/ui/Reveal"
import { CapabilityOrbit } from "@/components/visuals/CapabilityOrbit"

const points = [
  { icon: Lightbulb, title: "Advice, not just code", text: "We bring the strategy and the tools to streamline your business processes." },
  { icon: Repeat, title: "Reusable by design", text: "Automation strategies built to be reused across teams and future projects." },
  { icon: Wrench, title: "Built to last", text: "16+ years modernising legacy systems into reliable, maintainable platforms." },
]

export function WhyWAC() {
  return (
    <section id="why-us" className="relative py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-2">
        <div>
          <SectionHeading
            index="04"
            eyebrow="Why Web App Consulting?"
            title="The advice and tools to"
            highlight="streamline everything"
            description="Our clients are satisfied with the work we do. The greatest gratification is recognition for what we have built — and it motivates us to improve even more."
          />

          <div className="mt-9 flex flex-col gap-4">
            {points.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1} from="right">
                <div className="flex items-start gap-4 rounded-2xl border border-border-soft bg-surface/40 p-5">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-accent to-accent-deep text-[#1a0e00]">
                    <p.icon size={20} />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                    <p className="mt-1 text-sm text-text-2">{p.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <CapabilityOrbit />
          <div className="glass absolute -left-4 top-6 rounded-2xl px-5 py-4 shadow-[var(--shadow)] sm:-left-8">
            <p className="font-display text-2xl font-bold text-gradient-brand">Since 2008</p>
            <p className="text-xs text-text-3">Adelaide, South Australia</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
