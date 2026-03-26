import type { ProjectsRepository } from '../domain/projects.repository'
import { projectsByLocale } from './projects.data'

export const staticProjectsRepository: ProjectsRepository = {
  getProjects: (locale) => projectsByLocale[locale],
}
