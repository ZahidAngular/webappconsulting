"use client"

import Image from "next/image"
import { clients } from "@/lib/content"
import { Marquee } from "@/components/ui/Marquee"

export function TrustedBy() {
  return (
    <section id="trusted" className="relative border-y border-border-soft bg-surface/20 py-14">
      <div className="mx-auto mb-9 flex max-w-6xl flex-col items-center gap-3 px-5 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-text-3">
          Trusted by teams across Australia
        </p>
        <div className="h-px w-16 bg-gradient-to-r from-transparent via-brand-bright to-transparent" />
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-28 bg-gradient-to-r from-bg to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-28 bg-gradient-to-l from-bg to-transparent" />

        <Marquee duration={38}>
          {clients.map((c) => (
            <div
              key={c.name}
              className="group mx-3 shrink-0 transition-opacity duration-300 hover:opacity-70 lg:mx-4 xl:mx-5"
              data-cursor="hover"
            >
              <Image
                src={c.img}
                alt={c.name}
                width={360}
                height={180}
                className="h-20 w-auto object-contain sm:h-24 lg:h-28 xl:h-32 2xl:h-36"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  )
}
