import type { SocialLink } from '../domain/contact.entity'
import { socialIconHref } from './socialIcons'

export type ContactSectionProps = {
  social: SocialLink[]
}

/** Enlaces sociales en línea (viven junto al CTA del CV en HeroSection). */
export function ContactSection({ social }: ContactSectionProps) {
  return (
    <ul className="portfolio-social m-0 flex list-none flex-wrap gap-2 p-0 max-lg:justify-center">
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
  )
}
