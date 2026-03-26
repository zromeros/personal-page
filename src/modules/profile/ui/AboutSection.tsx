import type { Profile } from '../domain/profile.entity'

export type AboutSectionProps = {
  about: Profile['about']
}

export function AboutSection({ about }: AboutSectionProps) {
  return (
    <section
      id="sobre-mi"
      className="grid grid-cols-[minmax(0,240px)_1fr] items-start gap-x-12 gap-y-8 px-8 py-10 max-lg:grid-cols-1 max-lg:px-5 max-lg:py-7 max-lg:text-center"
      aria-labelledby="about-title"
    >
      <div className="sticky top-4 max-lg:static">
        <svg
          className="mb-4 block h-[22px] w-[22px] max-lg:mx-auto"
          role="presentation"
          aria-hidden="true"
        >
          <use href="/icons.svg#documentation-icon" />
        </svg>
        <h2
          id="about-title"
          className="mb-2 mt-0 text-2xl font-medium leading-[118%] tracking-tight text-[var(--text-h)] max-lg:text-xl"
        >
          {about.title}
        </h2>
      </div>
      <div>
        {about.paragraphs.map((p, i) => (
          <p
            key={i}
            className="mb-4 mt-0 leading-[160%] text-[var(--text)] last:mb-0"
          >
            {p}
          </p>
        ))}
      </div>
    </section>
  )
}
