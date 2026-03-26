import { create } from 'zustand'
import type { Project } from '../domain/project.entity'
import { staticProjectsRepository } from '../infrastructure/staticProjects.repository'

type ProjectsState = {
  projects: Project[]
}

export const useProjectsStore = create<ProjectsState>(() => ({
  projects: staticProjectsRepository.getProjects(),
}))
