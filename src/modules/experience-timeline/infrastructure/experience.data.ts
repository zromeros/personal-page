/**
 * Línea de tiempo por idioma. Edita en experience.data.ts
 */
import type { Locale } from '../../../common/types/locale'
import type { ExperienceEntry } from '../domain/experience.entity'

export const experienceEntriesByLocale: Record<Locale, ExperienceEntry[]> = {
  es: [
    {
      id: '1',
      title: 'Desarrollador frontend',
      organization: 'Empresa o cliente',
      period: '2023 — presente',
      description:
        'Producto web con React, foco en rendimiento y diseño accesible. Colaboración con diseño y backend.',
    },
    {
      id: '2',
      title: 'Ingeniero de software',
      organization: 'Otra organización',
      period: '2020 — 2023',
      description:
        'APIs, integraciones y despliegue continuo. Mentoring a equipo junior.',
    },
  ],
  en: [
    {
      id: '1',
      title: 'Frontend developer',
      organization: 'Company or client',
      period: '2023 — present',
      description:
        'Web product with React, focus on performance and accessible design. Collaboration with design and backend.',
    },
    {
      id: '2',
      title: 'Software engineer',
      organization: 'Another organization',
      period: '2020 — 2023',
      description:
        'APIs, integrations, and continuous deployment. Mentoring junior engineers.',
    },
  ],
}
