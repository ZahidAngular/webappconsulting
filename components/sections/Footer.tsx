"use client"

import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"
import { site, nav, tags, services } from "@/lib/content"

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border-soft bg-surface/40 pt-16">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-brand/10 blur-[100px]" />

      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-10 pb-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* brand */}
          <div>
            <Image
              src="/images/brand/logo-header.png"
              alt="Web App Consulting"
              width={170}
              height={54}
              className="h-11 w-auto"
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-text-2">
              {site.tagline}. We help Australian businesses streamline workflows and go paperless.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border-soft bg-bg-2/50 px-3 py-1 text-xs text-text-3"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* nav */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-3">Explore</h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-text-2 transition-colors hover:text-brand-bright">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* services */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-3">Technology</h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              {services.slice(0, 5).map((s) => (
                <li key={s.title} className="text-text-2">
                  {s.title}
                </li>
              ))}
            </ul>
          </div>

          {/* contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-3">Get in touch</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <a href={site.phoneHref} className="flex items-center gap-2.5 text-text-2 hover:text-brand-bright">
                  <Phone size={15} className="text-brand-bright" /> {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="flex items-center gap-2.5 text-text-2 hover:text-brand-bright">
                  <Mail size={15} className="text-brand-bright" /> {site.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-text-2">
                <MapPin size={15} className="mt-0.5 shrink-0 text-brand-bright" /> {site.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-border-soft py-7 text-sm text-text-3 sm:flex-row">
          <p>
            {new Date().getFullYear()} © all rights reserved · {site.name}
          </p>
          <p className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> {site.tagline}
          </p>
        </div>
      </div>
    </footer>
  )
}
