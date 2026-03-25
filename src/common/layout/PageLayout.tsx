import type { ReactNode } from 'react'

export type PageLayoutProps = {
  children: ReactNode
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="mx-auto flex min-h-svh w-full max-w-[1126px] flex-col border-x border-[var(--border)] box-border text-left">
      {children}
    </div>
  )
}
