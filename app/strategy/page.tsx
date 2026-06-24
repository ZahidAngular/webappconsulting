import type { Metadata } from "next"
import { Check } from "lucide-react"
import { strategy } from "@/lib/content"
import { PageHero } from "@/components/ui/PageHero"
import { CTASection } from "@/components/sections/CTASection"
import { RevealGroup, RevealItem } from "@/components/ui/Reveal"
import { AutomationFlow } from "@/components/visuals/AutomationFlow"

export const metadata: Metadata = {
  title: "Strategy",
  description: "Digital transformation strategy — we map your processes and goals, then deliver the right automation in the right order.",
}

export default function StrategyPage() {
  return (
    <main>
      <PageHero
        crumb="Strategy"
        eyebrow={strategy.eyebrow}
        title={strategy.title}
        highlight={strategy.highlight}
        description={strategy.intro}
        visual={<AutomationFlow />}
      />

      {/* process */}
      <section className="px-5 py-10">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 max-w-xl font-display text-3xl font-bold tracking-tight sm:text-4xl">
            A clear path from chaos to <span className="serif-accent">clarity</span>
          </h2>
          <RevealGroup className="grid gap-5 md:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
            {strategy.steps.map((s) => (
              <RevealItem key={s.no} className="h-full">
                <div className="spotlight shine-border group relative h-full overflow-hidden rounded-3xl border border-border-soft bg-surface/50 p-7">
                  <span className="font-display text-sm font-bold tracking-widest text-accent">{s.no}</span>
                  <h3 className="mt-3 font-display text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-2">{s.text}</p>
                  <span className="pointer-events-none absolute -right-4 -top-5 font-display text-7xl font-bold text-border-soft/50 transition-colors group-hover:text-brand/10">
                    {s.no}
                  </span>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* outcomes */}
      <section className="px-5 py-10">
        <div className="mx-auto max-w-6xl rounded-[var(--radius-xl2)] border border-border-soft bg-gradient-to-br from-surface to-surface-2 p-8 sm:p-12">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <h2 className="font-display text-2xl font-bold leading-tight sm:text-3xl">
              The <span className="serif-accent">outcomes</span> you can expect
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {strategy.outcomes.map((o) => (
                <div key={o} className="flex items-center gap-3 rounded-2xl border border-border-soft bg-bg-2/40 p-4">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand/15 text-brand-bright">
                    <Check size={16} />
                  </span>
                  <span className="text-sm font-medium">{o}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection title="Let's map your transformation" text="Start with a strategy session — we'll show you what to automate first." />
    </main>
  )
}
