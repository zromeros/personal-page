export type SiteHeaderProps = {
  brand: string
  navItems: readonly { href: string; label: string }[]
}

export function SiteHeader({ brand, navItems }: SiteHeaderProps) {
  return (
    <header className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--border)] px-8 py-5 text-left max-lg:px-5 max-lg:py-4">
      <span className="font-semibold text-[var(--text-h)] tracking-tight">
        {brand}
      </span>
      <nav aria-label="Principal">
        <ul className="m-0 flex list-none flex-wrap justify-end gap-x-5 gap-y-2 p-0">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="rounded px-0.5 py-1 text-[15px] text-[var(--text)] no-underline transition-colors hover:text-[var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
