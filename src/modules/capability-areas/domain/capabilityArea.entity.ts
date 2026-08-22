export type CapabilityHighlight = {
  title: string
  context: string
  description: string
  flow: string[]
}

export type CapabilityArea = {
  id: string
  title: string
  summary: string
  highlights: CapabilityHighlight[]
}
