import type { ComponentProps } from 'react'

export type ButtonVariant = 'primary' | 'ghost'

export type ButtonProps = ComponentProps<'a'> & {
  variant: ButtonVariant
}

export function Button({ variant, className = '', ...props }: ButtonProps) {
  const base =
    'inline-flex items-center justify-center px-5 py-2.5 text-base font-medium rounded-lg border-2 border-transparent no-underline transition-[border-color,background,box-shadow] font-[family-name:var(--sans)]'
  const variants: Record<ButtonVariant, string> = {
    primary:
      'text-[var(--text-h)] bg-[var(--accent-bg)] border-[var(--accent-border)] hover:shadow-[var(--shadow)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2',
    ghost:
      'text-[var(--text-h)] bg-[var(--social-bg)] hover:shadow-[var(--shadow)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2',
  }
  return (
    <a className={`${base} ${variants[variant]} ${className}`.trim()} {...props} />
  )
}
