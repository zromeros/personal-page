import { TechIcon } from './TechIcon'

export type SkillPillProps = {
  name: string
  className?: string
}

export function SkillPill({ name, className = '' }: SkillPillProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-[15px] bg-[var(--social-bg)] text-[var(--text-h)] border border-[var(--border)] ${className}`.trim()}
    >
      <TechIcon name={name} className="h-4 w-4 shrink-0 text-[var(--text)]" />
      {name}
    </span>
  )
}
