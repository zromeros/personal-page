/**
 * Proyectos destacados. Edita en src/modules/projects/infrastructure/projects.data.ts
 */
import type { Project } from '../domain/project.entity'

export const projectsContent: Project[] = [
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
]
