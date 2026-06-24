"use client"

import dynamic from "next/dynamic"
import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { ArrowUpRight, ChevronDown } from "lucide-react"
import { heroSlides, stats } from "@/lib/content"
import { MagneticButton } from "@/components/ui/MagneticButton"
import { Counter } from "@/components/ui/Counter"

const NetworkGlobe = dynamic(() => import("@/components/three/NetworkGlobe"), { ssr: false })

export function Hero() {
  const [i, setI] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  // subtle content parallax only — globe stays static so scroll is perfectly smooth
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -60])

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % heroSlides.length), 4600)
    return () => clearInterval(t)
  }, [])

  const slide = heroSlides[i]

  return (
    <section ref={sectionRef} id="top" className="relative min-h-screen overflow-hidden pt-28 pb-14">
      {/* ambient aurora */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-brand/15 blur-[110px]" />
        <div className="absolute right-[6%] top-1/3 h-[26rem] w-[26rem] rounded-full bg-accent/10 blur-[100px]" />
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-50 [mask-image:radial-gradient(ellipse_at_60%_40%,black,transparent_72%)]" />

      {/* immersive 3D globe — softly masked so it never hard-clips */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-0 w-full opacity-90 lg:w-[64%]"
        style={{
          WebkitMaskImage:
            "radial-gradient(circle at 58% 50%, black 38%, transparent 72%)",
          maskImage: "radial-gradient(circle at 58% 50%, black 38%, transparent 72%)",
        }}
      >
        {/* concentric guide rings */}
        <div className="absolute left-[58%] top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="h-[44rem] w-[44rem] rounded-full border border-border-soft/25" />
        </div>
        <div className="absolute left-[58%] top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="h-[32rem] w-[32rem] rounded-full border border-border-soft/20" />
        </div>
        <div className="absolute inset-0">
          <NetworkGlobe />
        </div>
      </div>

      {/* content */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-11rem)] max-w-6xl flex-col justify-center px-5">
        <motion.div className="max-w-2xl" style={{ y: contentY, willChange: "transform" }}>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-border-soft bg-surface/40 px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-brand-bright backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Business Automation Specialists · Adelaide
          </motion.div>

          <div className="min-h-[2.5rem]">
            <AnimatePresence mode="wait">
              <motion.p
                key={slide.kicker}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4 }}
                className="serif-plain mb-2 text-2xl text-accent"
              >
                {slide.kicker}
              </motion.p>
            </AnimatePresence>
          </div>

          <h1 className="font-display text-[clamp(3.1rem,7vw,6rem)] font-extrabold leading-[0.92] tracking-[-0.04em] text-text">
            <AnimatePresence mode="wait">
              <motion.span
                key={slide.title}
                initial={{ opacity: 0, y: 22, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -18, filter: "blur(6px)" }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="block text-gradient-hero"
              >
                {slide.title}
              </motion.span>
            </AnimatePresence>
          </h1>

          <div className="mt-7 min-h-[5rem] max-w-lg">
            <AnimatePresence mode="wait">
              <motion.p
                key={slide.text}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="text-lg leading-relaxed text-text-2"
              >
                {slide.text}
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <MagneticButton href="#contact" variant="primary">
              Start automating <ArrowUpRight size={16} />
            </MagneticButton>
            <MagneticButton href="#services" variant="ghost">
              Explore services
            </MagneticButton>
          </div>

          {/* slide progress */}
          <div className="mt-9 flex gap-2">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Slide ${idx + 1}`}
                className="h-1.5 overflow-hidden rounded-full bg-border-strong transition-all"
                style={{ width: idx === i ? 42 : 14 }}
              >
                {idx === i && (
                  <motion.span
                    key={i}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 4.6, ease: "linear" }}
                    className="block h-full w-full origin-left bg-gradient-to-r from-brand-bright to-accent"
                  />
                )}
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* stats bar */}
      <div className="relative z-10 mx-auto mt-10 max-w-6xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass grid grid-cols-2 overflow-hidden rounded-3xl md:grid-cols-4"
        >
          {stats.map((s, idx) => (
            <div
              key={s.label}
              className={`group relative px-6 py-7 transition-colors hover:bg-surface/30 ${
                idx > 0 ? "md:border-l md:border-border-soft/60" : ""
              } ${idx === 1 ? "border-l border-border-soft/60 md:border-l" : ""} ${
                idx >= 2 ? "border-t border-border-soft/60 md:border-t-0" : ""
              }`}
            >
              {/* top accent on hover */}
              <span className="pointer-events-none absolute inset-x-6 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-brand-bright to-accent transition-transform duration-500 group-hover:scale-x-100" />
              <div className="font-display text-4xl font-extrabold tracking-tight text-gradient-brand sm:text-5xl">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-2 text-[0.8rem] font-medium leading-snug text-text-3">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#trusted"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-xs text-text-3 lg:flex"
      >
        Scroll <ChevronDown size={16} />
      </motion.a>
    </section>
  )
}
