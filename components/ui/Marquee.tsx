"use client"

import type { ReactNode } from "react"

export function Marquee({
  children,
  duration = 32,
  reverse = false,
  className = "",
}: {
  children: ReactNode
  duration?: number
  reverse?: boolean
  className?: string
}) {
  return (
    <div className={`marquee-pause group relative flex overflow-hidden ${className}`}>
      <div
        className="flex shrink-0 animate-marquee items-center"
        style={{
          ["--marquee-duration" as string]: `${duration}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {children}
        {children}
        {children}
        {children}
      </div>
    </div>
  )
}
