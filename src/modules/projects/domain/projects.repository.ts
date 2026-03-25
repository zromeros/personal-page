import type { Project } from './project.entity'

export type ProjectsRepository = {
  getProjects: () => Project[]
}
