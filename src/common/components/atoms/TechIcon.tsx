import type { ComponentType } from 'react'
import { techIconPaths } from './techIconPaths'

export type TechIconProps = {
  name: string
  className?: string
}

function CloudIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  )
}

function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2l1.6 7.4L21 11l-7.4 1.6L12 20l-1.6-7.4L3 11l7.4-1.6L12 2z" />
    </svg>
  )
}

function KanbanIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M3 3h5v18H3V3zm6.5 0h5v12h-5V3zM16 3h5v18h-5V3z" />
    </svg>
  )
}

function CycleIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46A7.93 7.93 0 0 0 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74A7.93 7.93 0 0 0 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z" />
    </svg>
  )
}

const CUSTOM_ICONS: Record<string, ComponentType<{ className?: string }>> = {
  aws: CloudIcon,
  'llms / prompt engineering': SparkleIcon,
  kanban: KanbanIcon,
  scrum: CycleIcon,
}

export function TechIcon({ name, className }: TechIconProps) {
  const key = name.toLowerCase()
  const Custom = CUSTOM_ICONS[key]
  if (Custom) return <Custom className={className} />

  const d = techIconPaths[key]
  if (!d) return null

  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  )
}
