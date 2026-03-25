import type { ComponentProps } from 'react'

export type SkillPillProps = ComponentProps<'span'>

export function SkillPill({ className = '', ...props }: SkillPillProps) {
  return (
    <span
      className={`inline-block px-3.5 py-2 rounded-full text-[15px] bg-[var(--social-bg)] text-[var(--text-h)] border border-[var(--border)] ${className}`.trim()}
      {...props}
    />
  )
}
