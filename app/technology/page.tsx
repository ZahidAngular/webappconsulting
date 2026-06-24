import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { technologies } from "@/lib/content"
import { getIcon } from "@/lib/icons"
import { PageHero } from "@/components/ui/PageHero"
import { CTASection } from "@/components/sections/CTASection"
import { RevealGroup, RevealItem } from "@/components/ui/Reveal"
import { CapabilityOrbit } from "@/components/visuals/CapabilityOrbit"

export const metadata: Metadata = {
  title: "Technology",
  description: "Power Apps, Salesforce, ServiceNow, integrations, data migration and payment gateways — the platforms we build and automate on.",
}

export default function TechnologyPage() {
  return (
    <main>
      <PageHero
        crumb="Technology"
        eyebrow="Our Technology"
        title="Platforms we build &"
        highlight="automate on"
        description="Advice and the tools to streamline business processes — built on the enterprise platforms your business already trusts."
        visual={<CapabilityOrbit />}
      />

      <section className="px-5 pb-8">
        <RevealGroup className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.07}>
          {technologies.map((t) => {
            const Icon = getIcon(t.icon)
            return (
              <RevealItem key={t.slug} className="h-full">
                <Link
                  href={`/technology/${t.slug}`}
                  data-cursor="hover"
                  className="spotlight shine-border group flex h-full flex-col rounded-3xl border border-border-soft bg-surface/50 p-7 transition-colors hover:bg-surface"
                >
                  <span className="mb-6 grid h-14 w-14 place-items-center rounded-2xl border border-border-soft bg-surface text-brand-bright transition-all group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                    <Icon size={24} />
                  </span>
                  <h3 className="font-display text-xl font-semibold">{t.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-text-2">{t.tagline}</p>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand-bright">
                    Explore <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </RevealItem>
            )
          })}
        </RevealGroup>
      </section>

      <CTASection title="Not sure which platform fits?" text="Tell us your goals — we'll recommend the right technology and automation path." />
    </main>
  )
}
