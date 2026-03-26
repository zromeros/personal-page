export type SiteFooterProps = {
  line: string
}

export function SiteFooter({ line }: SiteFooterProps) {
  return (
    <footer className="border-t border-[var(--border)] px-8 pb-10 pt-6 text-center max-lg:px-5 max-lg:pb-8 max-lg:pt-5">
      <p className="m-0 text-sm text-[var(--text)]">{line}</p>
    </footer>
  )
}
