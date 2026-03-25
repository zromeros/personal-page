export type NavItem = {
  href: string
  label: string
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
  skills: string[]
  cvUrl: string
}
