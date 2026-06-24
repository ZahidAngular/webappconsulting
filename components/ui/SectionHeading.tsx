"use client"

import { RevealText } from "./Reveal"

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border-soft bg-surface/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-bright backdrop-blur">
      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
      {children}
    </span>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "left",
  index,
}: {
  eyebrow?: string
  title: string
  highlight?: string
  description?: string
  align?: "left" | "center"
  /** editorial section number, e.g. "01" */
  index?: string
}) {
  const centered = align === "center"
  return (
    <div className={`flex max-w-2xl flex-col gap-5 ${centered ? "mx-auto items-center text-center" : "items-start"}`}>
      <div className={`flex items-center gap-4 ${centered ? "justify-center" : ""}`}>
        {index && (
          <span className="flex items-center gap-3">
            <span className="font-display text-sm font-bold tabular-nums tracking-tight text-brand-bright">
              {index}
            </span>
            <span className="h-px w-8 bg-gradient-to-r from-brand-bright/70 to-transparent" />
          </span>
        )}
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      </div>
      <h2 className="font-display text-[2.6rem] font-bold leading-[1.02] tracking-[-0.025em] sm:text-[3.4rem] lg:text-[3.8rem]">
        <RevealText text={title} />
        {highlight && (
          <>
            {" "}
            <span className="serif-accent text-[1.08em]">
              <RevealText text={highlight} />
            </span>
          </>
        )}
      </h2>
      {description && <p className="text-lg leading-relaxed text-text-2">{description}</p>}
    </div>
  )
}
