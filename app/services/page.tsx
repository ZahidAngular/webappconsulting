import type { Metadata } from "next"
import { ArrowUpRight } from "lucide-react"
import { capabilitiesDetailed } from "@/lib/content"
import { getIcon } from "@/lib/icons"
import { PageHero } from "@/components/ui/PageHero"
import { CTASection } from "@/components/sections/CTASection"
import { RevealGroup, RevealItem } from "@/components/ui/Reveal"

export const metadata: Metadata = {
  title: "Services",
  description: "Website development, application building, SEO & digital marketing, branding and digital media — everything to launch and grow.",
}

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        crumb="Services"
        eyebrow="Our Services"
        title="Everything to launch,"
        highlight="and grow"
        description="Beyond automation, we deliver the full digital toolkit — from a fast modern website to applications, marketing, branding and media."
      />

      <section className="px-5 pb-8">
        <div className="mx-auto max-w-6xl">
          <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
            {capabilitiesDetailed.map((c, i) => {
              const Icon = getIcon(c.icon)
              const big = i === 0
              return (
                <RevealItem key={c.title} className={big ? "h-full sm:col-span-2 lg:col-span-1 lg:row-span-2" : "h-full"}>
                  <div
                    className={`spotlight shine-border group flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-border-soft p-7 transition-colors hover:bg-surface ${
                      big ? "bg-gradient-to-br from-brand/15 to-accent/10" : "bg-surface/50"
                    }`}
                  >
                    <span className="grid h-14 w-14 place-items-center rounded-2xl border border-border-soft bg-surface text-brand-bright transition-all group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                      <Icon size={24} />
                    </span>
                    <div className="mt-8">
                      <h3 className="font-display text-xl font-semibold">{c.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-text-2">{c.text}</p>
                    </div>
                  </div>
                </RevealItem>
              )
            })}
            <RevealItem className="h-full">
              <a
                href="/contact"
                data-cursor="hover"
                className="group flex h-full min-h-[10rem] flex-col justify-between rounded-3xl border border-brand/30 bg-gradient-to-br from-brand to-brand-deep p-7 text-white"
              >
                <span className="font-display text-lg font-semibold">Have a project in mind?</span>
                <span className="inline-flex items-center gap-1 text-sm font-semibold">
                  Start a conversation <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>
            </RevealItem>
          </RevealGroup>
        </div>
      </section>

      <CTASection />
    </main>
  )
}
