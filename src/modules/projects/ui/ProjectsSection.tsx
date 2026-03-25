import type { Project } from '../domain/project.entity'
import { ProjectCard } from './ProjectCard'

export type ProjectsSectionProps = {
  projects: Project[]
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section
      id="proyectos"
      className="px-8 py-10 max-lg:px-5 max-lg:py-7"
      aria-labelledby="projects-title"
    >
      <h2
        id="projects-title"
        className="mb-5 mt-0 text-2xl font-medium leading-[118%] tracking-tight text-[var(--text-h)] max-lg:text-xl"
      >
        Proyectos
      </h2>
      <ul className="m-0 grid list-none grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-5 p-0">
        {projects.map((project) => (
          <li key={project.title}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </section>
  )
}
