import { Hero } from "@/components/sections/Hero"
import { TrustedBy } from "@/components/sections/TrustedBy"
import { WhatWeAutomate } from "@/components/sections/WhatWeAutomate"
import { WhyAutomate } from "@/components/sections/WhyAutomate"
import { Services } from "@/components/sections/Services"
import { WhyWAC } from "@/components/sections/WhyWAC"
import { ClientExperience } from "@/components/sections/ClientExperience"
import { Contact } from "@/components/sections/Contact"
// import { ScrollNetwork } from "@/components/ui/ScrollNetwork" // scroll-storytelling overlay — removed for a cleaner premium feel (kept on disk; re-enable to restore)

function Divider() {
  return (
    <div className="relative flex items-center justify-center py-1">
      <div className="h-px w-full max-w-5xl bg-gradient-to-r from-transparent via-brand/25 to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-10 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/8 blur-2xl" />
    </div>
  )
}

export default function Home() {
  return (
    <main>
      {/* <ScrollNetwork /> */}
      <Hero />
      <TrustedBy />
      <Divider />
      <WhatWeAutomate />
      <Divider />
      <WhyAutomate />
      <Divider />
      <Services />
      <Divider />
      <WhyWAC />
      <Divider />
      <ClientExperience />
      <Divider />
      <Contact />
    </main>
  )
}
