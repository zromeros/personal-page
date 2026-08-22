import { Reveal } from '../../../common/components/atoms/Reveal'
import type { CapabilityArea } from '../domain/capabilityArea.entity'

export type CapabilityAreasSectionProps = {
  areas: CapabilityArea[]
  title: string
}

export function CapabilityAreasSection({
  areas,
  title,
}: CapabilityAreasSectionProps) {
  return (
    <section
      id="areas"
      className="px-8 py-10 max-lg:px-5 max-lg:py-7"
      aria-labelledby="areas-title"
    >
      <Reveal>
        <h2
          id="areas-title"
          className="mb-8 mt-0 font-[family-name:var(--heading)] text-2xl font-medium leading-[118%] tracking-tight text-[var(--text-h)] max-lg:text-xl"
        >
          {title}
        </h2>
      </Reveal>
      <ul className="m-0 grid list-none grid-cols-[repeat(auto-fill,minmax(360px,1fr))] gap-6 p-0">
        {areas.map((area) => (
          <li key={area.id}>
            <Reveal className="h-full">
              <article className="flex h-full flex-col gap-5 rounded-xl border border-[var(--border)] bg-[var(--bg)] p-6">
                <div>
                  <h3 className="m-0 font-[family-name:var(--heading)] text-xl font-semibold text-[var(--text-h)]">
                    {area.title}
                  </h3>
                  <p className="mb-0 mt-1.5 text-[15px] leading-[150%] text-[var(--text)]">
                    {area.summary}
                  </p>
                </div>
                <ul className="m-0 flex flex-1 list-none flex-col gap-4 p-0">
                  {area.highlights.map((highlight) => (
                    <li
                      key={highlight.title}
                      className="border-l-2 border-[var(--accent-border)] pl-3.5"
                    >
                      <p className="m-0 flex flex-wrap items-baseline gap-x-2 font-medium text-[var(--text-h)]">
                        {highlight.title}
                        <span className="text-xs font-normal uppercase tracking-wide text-[var(--accent)]">
                          {highlight.context}
                        </span>
                      </p>
                      <p className="m-0 mt-1 text-sm leading-[150%] text-[var(--text)]">
                        {highlight.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  )
}
