import type { SocialLink } from '../domain/contact.entity'
import { socialIconHref } from './socialIcons'

export type ContactSectionProps = {
  social: SocialLink[]
}

export function ContactSection({ social }: ContactSectionProps) {
  return (
    <section
      id="contacto"
      className="px-8 pb-12 pt-10 max-lg:px-5 max-lg:pb-10 max-lg:pt-7 max-lg:text-center"
      aria-labelledby="contact-title"
    >
      <div>
        <svg
          className="mb-4 block h-[22px] w-[22px] max-lg:mx-auto"
          role="presentation"
          aria-hidden="true"
        >
          <use href="/icons.svg#social-icon" />
        </svg>
        <h2
          id="contact-title"
          className="mb-2 mt-0 text-2xl font-medium leading-[118%] tracking-tight text-[var(--text-h)] max-lg:text-xl"
        >
          Contacto
        </h2>
        <p className="mt-2 text-base leading-[150%] text-[var(--text)]">
          Redes y correo — sustituye enlaces en{' '}
          <code className="inline-flex rounded px-2 py-1 font-mono text-[15px] leading-[135%] text-[var(--text-h)] bg-[var(--code-bg)]">
            src/modules/contact/infrastructure/contact.data.ts
          </code>
          .
        </p>
      </div>
      <ul className="portfolio-social m-0 mt-6 flex list-none flex-wrap gap-2 max-lg:justify-center">
        {social.map((item) => {
          const external = item.href.startsWith('http')
          return (
            <li key={item.label}>
              <a
                href={item.href}
                {...(external
                  ? { target: '_blank' as const, rel: 'noreferrer' }
                  : {})}
                className="flex items-center gap-2 rounded-md bg-[var(--social-bg)] px-3.5 py-2 text-base text-[var(--text-h)] no-underline transition-shadow hover:shadow-[var(--shadow)]"
              >
                <svg
                  className="button-icon h-[18px] w-[18px]"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href={socialIconHref[item.icon]} />
                </svg>
                {item.label}
              </a>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
