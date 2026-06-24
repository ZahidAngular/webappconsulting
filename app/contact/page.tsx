import type { Metadata } from "next"
import { Contact } from "@/components/sections/Contact"

export const metadata: Metadata = {
  title: "Talk to Us",
  description: "Get in touch with Web App Consulting — Maylands, Adelaide. Let's make your business paperless.",
}

export default function ContactPage() {
  return (
    <main className="pt-20">
      <Contact />
    </main>
  )
}
