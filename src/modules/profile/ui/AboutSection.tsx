import { Reveal } from '../../../common/components/atoms/Reveal'
import type { Profile } from '../domain/profile.entity'

export type AboutSectionProps = {
  about: Profile['about']
}

export function AboutSection({ about }: AboutSectionProps) {
  return (
    <section
      id="sobre-mi"
      className="flex flex-col gap-6 px-8 py-10 max-lg:px-5 max-lg:py-7"
      aria-labelledby="about-title"
    >
      <Reveal>
        <h2
          id="about-title"
          className="m-0 font-[family-name:var(--heading)] text-2xl font-medium leading-[118%] tracking-tight text-[var(--text-h)] max-lg:text-xl"
        >
          {about.title}
        </h2>
      </Reveal>
      <Reveal delayMs={100} className="flex flex-col gap-4">
        {about.paragraphs.map((p, i) => (
          <p key={i} className="m-0 leading-[160%] text-[var(--text)]">
            {p}
          </p>
        ))}
      </Reveal>
    </section>
  )
}
