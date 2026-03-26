/**
 * Enlaces de contacto por idioma (etiquetas). Edita en contact.data.ts
 */
import type { Locale } from '../../../common/types/locale'
import type { SocialLink } from '../domain/contact.entity'

export const socialLinksByLocale: Record<Locale, SocialLink[]> = {
  es: [
    { label: 'GitHub', href: 'https://github.com', icon: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com', icon: 'linkedin' },
    { label: 'Correo', href: 'mailto:hola@ejemplo.com', icon: 'mail' },
    { label: 'X', href: 'https://x.com', icon: 'x' },
  ],
  en: [
    { label: 'GitHub', href: 'https://github.com', icon: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com', icon: 'linkedin' },
    { label: 'Email', href: 'mailto:hola@ejemplo.com', icon: 'mail' },
    { label: 'X', href: 'https://x.com', icon: 'x' },
  ],
}
