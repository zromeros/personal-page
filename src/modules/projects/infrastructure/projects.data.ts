/**
 * Proyectos por idioma. Edita en projects.data.ts
 */
import type { Locale } from '../../../common/types/locale'
import type { Project } from '../domain/project.entity'

export const projectsByLocale: Record<Locale, Project[]> = {
  es: [
    {
      title: 'Proyecto destacado',
      description:
        'Breve descripción del problema, tu rol y el resultado (métricas o aprendizajes).',
      stack: ['React', 'Vite', 'TypeScript'],
      demoUrl: 'https://example.com',
      repoUrl: 'https://github.com',
    },
    {
      title: 'Otro proyecto',
      description:
        'Segundo ejemplo: librería interna, integración o sitio estático con despliegue automático.',
      stack: ['Node', 'Docker'],
      repoUrl: 'https://github.com',
    },
  ],
  en: [
    {
      title: 'Featured project',
      description:
        'Short description of the problem, your role, and the outcome (metrics or learnings).',
      stack: ['React', 'Vite', 'TypeScript'],
      demoUrl: 'https://example.com',
      repoUrl: 'https://github.com',
    },
    {
      title: 'Another project',
      description:
        'Second example: internal library, integration, or static site with automated deploy.',
      stack: ['Node', 'Docker'],
      repoUrl: 'https://github.com',
    },
  ],
}
