import type { Locale } from '../../../common/types/locale'
import type { Project } from './project.entity'

export type ProjectsRepository = {
  getProjects: (locale: Locale) => Project[]
}
