import type { Metadata } from "next"
import { Bricolage_Grotesque, Plus_Jakarta_Sans, Instrument_Serif } from "next/font/google"
import "./globals.css"
import { SmoothScroll } from "@/components/SmoothScroll"
import { ThemeProvider, themeNoFlashScript } from "@/components/providers/ThemeProvider"
import { Cursor } from "@/components/ui/Cursor"
import { ScrollProgress } from "@/components/ui/ScrollProgress"
import { Grain } from "@/components/ui/Grain"
import { Spotlights } from "@/components/ui/Spotlights"
import { Navbar } from "@/components/sections/Navbar"
import { Footer } from "@/components/sections/Footer"

const grotesk = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
})

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://webappconsulting.com.au"),
  title: {
    default: "Web App Consulting · Business Automation & Paperless Solutions",
    template: "%s · Web App Consulting",
  },
  description:
    "We streamline workflows, modernise legacy systems and help Australian businesses go paperless — Power Apps, Salesforce, ServiceNow, integrations & more.",
  keywords: [
    "business automation",
    "paperless office",
    "Power Apps",
    "Salesforce",
    "ServiceNow",
    "ERP",
    "Adelaide software consulting",
  ],
  openGraph: {
    title: "Web App Consulting · Business Automation Specialists",
    description: "Automation & paperless business is our success.",
    type: "website",
    locale: "en_AU",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${grotesk.variable} ${jakarta.variable} ${serif.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeNoFlashScript }} />
      </head>
      <body>
        <ThemeProvider>
          <ScrollProgress />
          <Grain />
          <Spotlights />
          <Cursor />
          <SmoothScroll>
            <Navbar />
            {children}
            <Footer />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  )
}
