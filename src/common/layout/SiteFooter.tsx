export type SiteFooterProps = {
  name: string
}

export function SiteFooter({ name }: SiteFooterProps) {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-[var(--border)] px-8 pb-10 pt-6 text-center max-lg:px-5 max-lg:pb-8 max-lg:pt-5">
      <p className="m-0 text-sm text-[var(--text)]">
        © {year} {name}. Hecho con React y Vite.
      </p>
    </footer>
  )
}
