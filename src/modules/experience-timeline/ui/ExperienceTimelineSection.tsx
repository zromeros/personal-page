import type { ExperienceEntry } from '../domain/experience.entity'

export type ExperienceTimelineSectionProps = {
  entries: ExperienceEntry[]
  title: string
}

export function ExperienceTimelineSection({
  entries,
  title,
}: ExperienceTimelineSectionProps) {
  return (
    <section
      id="experiencia"
      className="px-8 py-10 max-lg:px-5 max-lg:py-7"
      aria-labelledby="experience-title"
    >
      <h2
        id="experience-title"
        className="mb-8 mt-0 text-2xl font-medium leading-[118%] tracking-tight text-[var(--text-h)] max-lg:text-xl"
      >
        {title}
      </h2>
      <ol className="m-0 flex list-none flex-col gap-6 p-0">
        {entries.map((entry) => (
          <li key={entry.id}>
            <article className="rounded-xl border border-[var(--border)] bg-[var(--bg)] p-6">
              <p className="mb-2 mt-0 text-sm font-medium uppercase tracking-wide text-[var(--accent)]">
                {entry.period}
              </p>
              <h3 className="mb-1 mt-0 text-lg font-semibold text-[var(--text-h)]">
                {entry.title}
              </h3>
              <p className="mb-3 mt-0 text-base font-medium text-[var(--text)]">
                {entry.organization}
              </p>
              <p className="m-0 leading-[160%] text-[var(--text)]">
                {entry.description}
              </p>
            </article>
          </li>
        ))}
      </ol>
    </section>
  )
}
