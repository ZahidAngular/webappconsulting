import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { technologies } from "@/lib/content"
import { TechnologyDetail } from "@/components/pages/TechnologyDetail"

export function generateStaticParams() {
  return technologies.map((t) => ({ slug: t.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const tech = technologies.find((t) => t.slug === slug)
  if (!tech) return { title: "Technology" }
  return { title: tech.name, description: tech.intro }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const tech = technologies.find((t) => t.slug === slug)
  if (!tech) notFound()
  return <TechnologyDetail tech={tech} />
}
