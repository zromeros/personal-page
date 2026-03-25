export function TicksDivider() {
  return (
    <div className="relative w-full" aria-hidden="true">
      <span className="absolute -top-[4.5px] left-0 border-[5px] border-transparent border-l-[var(--border)]" />
      <span className="absolute -top-[4.5px] right-0 border-[5px] border-transparent border-r-[var(--border)]" />
    </div>
  )
}
