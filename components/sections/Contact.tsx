"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, ArrowUpRight, Send, Check } from "lucide-react"
import { site } from "@/lib/content"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { MagneticButton } from "@/components/ui/MagneticButton"

const details = [
  { icon: Phone, label: "Call us", value: site.phone, href: site.phoneHref },
  { icon: Mail, label: "Email us", value: site.email, href: `mailto:${site.email}` },
  { icon: MapPin, label: "Visit us", value: site.address, href: "#" },
]

export function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-50 [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
      <div className="pointer-events-none absolute -bottom-24 left-1/2 -z-10 h-[28rem] w-[44rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />

      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-stretch">
          {/* left: copy + details */}
          <div>
            <SectionHeading
              index="06"
              eyebrow="Get in touch"
              title="Let's make your business"
              highlight="paperless"
            />
            <p className="mt-5 max-w-md text-lg text-text-2">
              Automating your business process can free time and resources, allowing employees to focus on core work. Tell us what's slowing you down.
            </p>

            <div className="mt-9 flex flex-col gap-3">
              {details.map((d) => (
                <a
                  key={d.label}
                  href={d.href}
                  className="group flex items-center gap-4 rounded-2xl border border-border-soft bg-surface/40 p-4 transition-colors hover:border-brand-bright"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand/15 text-brand-bright transition-colors group-hover:bg-brand group-hover:text-white">
                    <d.icon size={18} />
                  </span>
                  <span className="flex-1">
                    <span className="block text-xs uppercase tracking-wider text-text-3">{d.label}</span>
                    <span className="block font-medium text-text">{d.value}</span>
                  </span>
                  <ArrowUpRight size={16} className="text-text-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-bright" />
                </a>
              ))}
            </div>
          </div>

          {/* right: form card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="glass relative flex flex-col overflow-hidden rounded-[var(--radius-xl2)] p-7 shadow-[var(--shadow)] sm:p-9"
          >
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setSent(true)
              }}
              className="flex h-full flex-1 flex-col gap-5"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full name" name="name" placeholder="Jane Smith" />
                <Field label="Company" name="company" placeholder="Acme Pty Ltd" />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Email" name="email" type="email" placeholder="jane@acme.com.au" />
                <Field label="Phone" name="phone" placeholder="+61 ..." required={false} />
              </div>
              <div className="flex flex-1 flex-col gap-2">
                <label className="text-sm font-medium text-text-2">What would you like to automate?</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us about the process slowing your team down…"
                  className="min-h-[7rem] flex-1 resize-none rounded-2xl border border-border-soft bg-bg-2/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-text-3 focus:border-brand-bright"
                />
              </div>

              <MagneticButton onClick={() => {}} className="mt-1 w-full">
                {sent ? (
                  <>
                    Message ready <Check size={16} />
                  </>
                ) : (
                  <>
                    Send enquiry <Send size={15} />
                  </>
                )}
              </MagneticButton>
              {sent && (
                <p className="text-center text-sm text-brand-bright">
                  Thanks! This is a demo form — connect it to your inbox or CRM to go live.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required = true,
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
  required?: boolean
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-sm font-medium text-text-2">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="rounded-2xl border border-border-soft bg-bg-2/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-text-3 focus:border-brand-bright"
      />
    </div>
  )
}
