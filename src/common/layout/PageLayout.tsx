import type { ReactNode } from 'react'

export type PageLayoutProps = {
  children: ReactNode
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="flex min-h-svh w-full flex-col box-border text-left">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed -right-48 -top-48 -z-10 h-[900px] w-[900px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(16,185,129,0.16) 0%, rgba(16,185,129,0) 70%)',
        }}
      />
      {children}
    </div>
  )
}
