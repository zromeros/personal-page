/**
 * Línea de tiempo profesional. Edita en src/modules/experience-timeline/infrastructure/experience.data.ts
 */
import type { ExperienceEntry } from '../domain/experience.entity'

export const experienceEntriesContent: ExperienceEntry[] = [
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
]
