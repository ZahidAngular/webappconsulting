"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import type { ReactNode } from "react"
import { Eyebrow } from "@/components/ui/SectionHeading"

export function PageHero({
  eyebrow,
  title,
  highlight,
  description,
  crumb,
  visual,
}: {
  eyebrow: string
  title: string
  highlight?: string
  description?: string
  crumb: string
  visual?: ReactNode
}) {
  return (
    <section className="relative overflow-hidden pt-36 pb-16">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/3 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-brand/15 blur-[130px] animate-aurora" />
        <div className="absolute right-[8%] top-1/4 h-[24rem] w-[24rem] rounded-full bg-accent/10 blur-[120px] animate-aurora" style={{ animationDelay: "-6s" }} />
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_50%_30%,black,transparent_72%)]" />

      <div className={`mx-auto grid max-w-6xl items-center gap-12 px-5 ${visual ? "lg:grid-cols-[1.1fr_0.9fr]" : ""}`}>
        <div>
          {/* breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex items-center gap-1.5 text-sm text-text-3"
          >
            <Link href="/" className="hover:text-brand-bright">Home</Link>
            <ChevronRight size={14} />
            <span className="text-text-2">{crumb}</span>
          </motion.nav>

          <Eyebrow>{eyebrow}</Eyebrow>

          <h1 className="mt-5 font-display text-[clamp(2.5rem,5.4vw,4.2rem)] font-extrabold leading-[0.98] tracking-[-0.03em]">
            {title}
            {highlight && (
              <>
                {" "}
                <span className="serif-accent text-[1.08em]">{highlight}</span>
              </>
            )}
          </h1>

          {description && (
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-text-2"
            >
              {description}
            </motion.p>
          )}
        </div>

        {visual && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {visual}
          </motion.div>
        )}
      </div>
    </section>
  )
}
