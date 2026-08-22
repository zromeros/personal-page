export type CapabilityHighlight = {
  title: string
  context: string
  description: string
}

export type CapabilityArea = {
  id: string
  title: string
  summary: string
  highlights: CapabilityHighlight[]
}
