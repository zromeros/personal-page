import type { ProjectsRepository } from '../domain/projects.repository'
import { projectsContent } from './projects.data'

export const staticProjectsRepository: ProjectsRepository = {
  getProjects: () => projectsContent,
}
