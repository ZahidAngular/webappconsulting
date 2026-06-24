import type { Metadata } from "next"
import { about } from "@/lib/content"
import { PageHero } from "@/components/ui/PageHero"
import { CTASection } from "@/components/sections/CTASection"
import { CapabilityOrbit } from "@/components/visuals/CapabilityOrbit"
import { ClientExperience } from "@/components/sections/ClientExperience"
import { AboutStats, AboutValues, AboutTimeline } from "@/components/pages/AboutContent"

export const metadata: Metadata = {
  title: "About Us",
  description: "Adelaide automation specialists since 2008 — helping Australian businesses streamline workflows, modernise legacy systems and go paperless.",
}

export default function AboutPage() {
  return (
    <main>
      <PageHero
        crumb="About Us"
        eyebrow={about.eyebrow}
        title={about.title}
        highlight={about.highlight}
        description={about.intro}
        visual={<CapabilityOrbit />}
      />
      <AboutStats />
      <AboutValues />
      <AboutTimeline />
      <ClientExperience />
      <CTASection />
    </main>
  )
}
