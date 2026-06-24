import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { trainings } from "@/lib/content"
import { TrainingDetail } from "@/components/pages/TrainingDetail"

export function generateStaticParams() {
  return trainings.map((t) => ({ slug: t.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const t = trainings.find((x) => x.slug === slug)
  if (!t) return { title: "Trainings" }
  return { title: t.name, description: t.intro }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const training = trainings.find((t) => t.slug === slug)
  if (!training) notFound()
  return <TrainingDetail training={training} />
}
