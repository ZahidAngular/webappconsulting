import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { trainings } from "@/lib/content"
import { getIcon } from "@/lib/icons"
import { PageHero } from "@/components/ui/PageHero"
import { CTASection } from "@/components/sections/CTASection"
import { RevealGroup, RevealItem } from "@/components/ui/Reveal"

export const metadata: Metadata = {
  title: "Trainings",
  description: "Hands-on training in emerging technology and cyber security — skill your team for what's next and keep your business secure.",
}

export default function TrainingsPage() {
  return (
    <main>
      <PageHero
        crumb="Trainings"
        eyebrow="Trainings"
        title="Skill your team for"
        highlight="what's next"
        description="Practical, hands-on training that turns new technology and security best-practice into everyday capability across your team."
      />

      <section className="px-5 pb-8">
        <RevealGroup className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2" stagger={0.1}>
          {trainings.map((t) => {
            const Icon = getIcon(t.icon)
            return (
              <RevealItem key={t.slug} className="h-full">
                <Link
                  href={`/trainings/${t.slug}`}
                  data-cursor="hover"
                  className="spotlight shine-border group flex h-full flex-col rounded-3xl border border-border-soft bg-surface/50 p-8 transition-colors hover:bg-surface"
                >
                  <span className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand to-brand-deep text-white">
                    <Icon size={24} />
                  </span>
                  <h3 className="font-display text-2xl font-semibold">{t.name}</h3>
                  <p className="mt-2 flex-1 text-text-2">{t.tagline}</p>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand-bright">
                    View programme <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </RevealItem>
            )
          })}
        </RevealGroup>
      </section>

      <CTASection title="Want a tailored programme?" text="We'll build training around your team's tools, goals and skill level." />
    </main>
  )
}
