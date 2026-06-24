import {
  Layers,
  Cloud,
  Workflow,
  Network,
  DatabaseZap,
  CreditCard,
  Globe,
  AppWindow,
  Search,
  Palette,
  Clapperboard,
  Rocket,
  ShieldCheck,
  Lightbulb,
  Repeat,
  Wrench,
  Award,
  type LucideIcon,
} from "lucide-react"

export const iconMap: Record<string, LucideIcon> = {
  Layers,
  Cloud,
  Workflow,
  Network,
  DatabaseZap,
  CreditCard,
  Globe,
  AppWindow,
  Search,
  Palette,
  Clapperboard,
  Rocket,
  ShieldCheck,
  Lightbulb,
  Repeat,
  Wrench,
  Award,
}

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Layers
}
