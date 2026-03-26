import type { ReactNode } from 'react'

export type SiteHeaderProps = {
  brand: string
  navItems: readonly { href: string; label: string }[]
  navAriaLabel: string
  trailing?: ReactNode
}

export function SiteHeader({
  brand,
  navItems,
  navAriaLabel,
  trailing,
}: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-50 flex flex-wrap items-center justify-between gap-4 border-b border-[var(--border)] bg-[var(--bg)] px-8 py-5 text-left max-lg:px-5 max-lg:py-4">
      <span className="font-semibold text-[var(--text-h)] tracking-tight">
        {brand}
      </span>
      <div className="flex flex-wrap items-center justify-end gap-4">
        <nav aria-label={navAriaLabel}>
          <ul className="m-0 flex list-none flex-wrap justify-end gap-x-5 gap-y-2 p-0">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded px-0.5 py-1 text-[15px] text-[var(--text-h)] no-underline transition-colors hover:text-[var(--nav-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--green-energy)] focus-visible:outline-offset-2"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        {trailing}
      </div>
    </header>
  )
}
