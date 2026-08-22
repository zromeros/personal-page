export type NavItem = {
  href: string
  label: string
}

export type SkillGroup = {
  purpose: string
  tools: string[]
}

export type HeroHighlight = {
  bigNumber: string
  bigLabel: string
  stats: { value: string; label: string }[]
  projectsByArea: { label: string; value: number }[]
}

export type Profile = {
  name: string
  role: string
  tagline: string
  avatarAlt: string
  about: {
    title: string
    paragraphs: string[]
  }
  skills: SkillGroup[]
  heroHighlight: HeroHighlight
  cvUrl: string
}
