"use client"

import { motion, type Variants } from "framer-motion"
import type { ReactNode } from "react"

const dir = {
  up: { y: 40, x: 0 },
  down: { y: -40, x: 0 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
}

interface Props {
  children: ReactNode
  className?: string
  delay?: number
  from?: keyof typeof dir
  once?: boolean
}

export function Reveal({ children, className, delay = 0, from = "up", once = true }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, ...dir[from] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/** Stagger container — children should be <RevealItem> */
export function RevealGroup({
  children,
  className,
  stagger = 0.08,
  once = true,
}: {
  children: ReactNode
  className?: string
  stagger?: number
  once?: boolean
}) {
  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: stagger } },
  }
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "-60px" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function RevealItem({ children, className }: { children: ReactNode; className?: string }) {
  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  }
  return (
    <motion.div variants={item} className={className}>
      {children}
    </motion.div>
  )
}

/** Word-by-word reveal for headlines */
export function RevealText({
  text,
  className,
  wordClass,
}: {
  text: string
  className?: string
  wordClass?: string
}) {
  const words = text.split(" ")
  return (
    <motion.span
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ staggerChildren: 0.05 }}
      className={className}
    >
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span
            variants={{
              hidden: { y: "110%" },
              show: { y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
            }}
            className={`inline-block ${wordClass ?? ""}`}
          >
            {w}&nbsp;
          </motion.span>
        </span>
      ))}
    </motion.span>
  )
}
