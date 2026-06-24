"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"
import { Menu, X, Phone, ChevronDown } from "lucide-react"
import { nav, site, type NavItem } from "@/lib/content"
import { ThemeToggle } from "@/components/ui/ThemeToggle"
import { MagneticButton } from "@/components/ui/MagneticButton"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [openGroup, setOpenGroup] = useState<string | null>(null)
  const { scrollY } = useScroll()
  const pathname = usePathname()

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40))

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
  }, [open])

  // close mobile menu on route change
  useEffect(() => {
    setOpen(false)
    setOpenGroup(null)
  }, [pathname])

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href))

  return (
    <>
      <motion.header
        initial={{ y: -90, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
      >
        <nav
          className={`flex w-full max-w-6xl items-center justify-between gap-4 rounded-full px-3 py-2.5 transition-all duration-500 ${
            scrolled ? "glass shadow-[var(--shadow)]" : "border border-transparent bg-transparent"
          }`}
        >
          <Link href="/" className="flex items-center gap-2 pl-2" data-cursor="hover">
            <Image
              src="/images/brand/logo-header.png"
              alt="Web App Consulting"
              width={156}
              height={50}
              className="h-9 w-auto"
              priority
            />
          </Link>

          <div className="hidden items-center gap-0.5 lg:flex">
            {nav.map((n) => (
              <NavLink key={n.href} item={n} active={isActive(n.href)} />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <MagneticButton href="/contact" className="hidden px-5 py-2.5 sm:inline-flex">
              Talk to Us
            </MagneticButton>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="grid h-10 w-10 place-items-center rounded-full border border-border-soft bg-surface/60 lg:hidden"
            >
              <Menu size={18} />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            <div className="absolute inset-0 bg-bg/80 backdrop-blur-xl" onClick={() => setOpen(false)} />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
              className="absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col gap-1 overflow-y-auto border-l border-border-soft bg-surface p-6"
            >
              <div className="mb-4 flex items-center justify-between">
                <Image src="/images/brand/logo-header.png" alt="Web App Consulting" width={140} height={45} className="h-8 w-auto" />
                <button onClick={() => setOpen(false)} aria-label="Close menu" className="grid h-10 w-10 place-items-center rounded-full border border-border-soft">
                  <X size={18} />
                </button>
              </div>

              {nav.map((n) => (
                <div key={n.href} className="border-b border-border-soft">
                  {n.children ? (
                    <>
                      <button
                        onClick={() => setOpenGroup(openGroup === n.label ? null : n.label)}
                        className="flex w-full items-center justify-between py-3.5 font-display text-xl font-semibold"
                      >
                        {n.label}
                        <ChevronDown size={18} className={`transition-transform ${openGroup === n.label ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {openGroup === n.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col gap-1 pb-3 pl-3">
                              {n.children.map((c) => (
                                <Link key={c.href} href={c.href} className="py-2 text-text-2 hover:text-brand-bright">
                                  {c.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link href={n.href} className="block py-3.5 font-display text-xl font-semibold">
                      {n.label}
                    </Link>
                  )}
                </div>
              ))}

              <a href={site.phoneHref} className="mt-6 inline-flex items-center gap-2 text-brand-bright">
                <Phone size={16} /> {site.phone}
              </a>
              <MagneticButton href="/contact" className="mt-4 w-full">
                Talk to Us
              </MagneticButton>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function NavLink({ item, active }: { item: NavItem; active: boolean }) {
  const [hover, setHover] = useState(false)
  const base =
    "group relative flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors"

  if (!item.children) {
    return (
      <Link href={item.href} data-cursor="hover" className={`${base} ${active ? "text-brand-bright" : "text-text-2 hover:text-text"}`}>
        {item.label}
        <span className="absolute inset-x-4 bottom-1 h-px origin-left scale-x-0 bg-gradient-to-r from-brand-bright to-accent transition-transform duration-300 group-hover:scale-x-100" />
      </Link>
    )
  }

  return (
    <div className="relative" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <Link href={item.href} data-cursor="hover" className={`${base} ${active ? "text-brand-bright" : "text-text-2 hover:text-text"}`}>
        {item.label}
        <ChevronDown size={14} className={`transition-transform ${hover ? "rotate-180" : ""}`} />
      </Link>
      <AnimatePresence>
        {hover && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.97 }}
            transition={{ duration: 0.18 }}
            className="absolute left-0 top-full w-64 pt-3"
          >
            <div className="glass overflow-hidden rounded-2xl border border-border-soft p-2 shadow-[var(--shadow)]">
              {item.children.map((c) => (
                <Link
                  key={c.href}
                  href={c.href}
                  className="block rounded-xl px-4 py-2.5 text-sm text-text-2 transition-colors hover:bg-surface-2 hover:text-brand-bright"
                >
                  {c.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
