import { SkillPill } from '../../../common/components/atoms/SkillPill'

export type SkillsSectionProps = {
  skills: string[]
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section
      id="habilidades"
      className="px-8 py-10 max-lg:px-5 max-lg:py-7"
      aria-labelledby="skills-title"
    >
      <h2
        id="skills-title"
        className="mb-5 mt-0 text-2xl font-medium leading-[118%] tracking-tight text-[var(--text-h)] max-lg:text-xl"
      >
        Habilidades
      </h2>
      <ul className="m-0 flex list-none flex-wrap gap-2.5 p-0">
        {skills.map((skill) => (
          <li key={skill}>
            <SkillPill>{skill}</SkillPill>
          </li>
        ))}
      </ul>
    </section>
  )
}
