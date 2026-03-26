import type { Project } from '../domain/project.entity'

export type ProjectCardProps = {
  project: Project
  demoLabel: string
  codeLabel: string
}

export function ProjectCard({ project, demoLabel, codeLabel }: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col gap-3 rounded-xl border border-[var(--border)] bg-[var(--bg)] p-6 shadow-none transition-shadow hover:shadow-[var(--shadow)] box-border">
      <h3 className="m-0 text-xl font-semibold text-[var(--text-h)]">
        {project.title}
      </h3>
      <p className="m-0 flex-1 text-base leading-[155%] text-[var(--text)]">
        {project.description}
      </p>
      <ul className="m-0 flex list-none flex-wrap gap-1.5 p-0">
        {project.stack.map((t) => (
          <li
            key={t}
            className="rounded px-2 py-1 font-mono text-[13px] text-[var(--text-h)] bg-[var(--code-bg)]"
          >
            {t}
          </li>
        ))}
      </ul>
      <div className="mt-auto flex flex-wrap gap-3 pt-2">
        {project.demoUrl ? (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="border-b border-transparent font-medium text-[var(--accent)] no-underline transition-[border-color] hover:border-[var(--accent)] focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2"
          >
            {demoLabel}
          </a>
        ) : null}
        {project.repoUrl ? (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="border-b border-transparent font-medium text-[var(--accent)] no-underline transition-[border-color] hover:border-[var(--accent)] focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2"
          >
            {codeLabel}
          </a>
        ) : null}
      </div>
    </article>
  )
}
