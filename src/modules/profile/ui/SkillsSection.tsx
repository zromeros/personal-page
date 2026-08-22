import { SkillPill } from '../../../common/components/atoms/SkillPill'
import type { SkillGroup } from '../domain/profile.entity'

export type SkillsSectionProps = {
  skills: SkillGroup[]
  title: string
}

export function SkillsSection({ skills, title }: SkillsSectionProps) {
  return (
    <section
      id="habilidades"
      className="px-8 py-10 max-lg:px-5 max-lg:py-7"
      aria-labelledby="skills-title"
    >
      <h2
        id="skills-title"
        className="mb-6 mt-0 font-[family-name:var(--heading)] text-2xl font-medium leading-[118%] tracking-tight text-[var(--text-h)] max-lg:text-xl"
      >
        {title}
      </h2>
      <ul className="m-0 grid list-none grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-x-8 gap-y-6 p-0">
        {skills.map((group) => (
          <li key={group.purpose}>
            <p className="mb-3 mt-0 text-base font-medium text-[var(--text-h)]">
              {group.purpose}
            </p>
            <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
              {group.tools.map((tool) => (
                <li key={tool}>
                  <SkillPill name={tool} />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  )
}
