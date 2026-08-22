import { useCountUp } from '../../hooks/useCountUp'
import { parseCountValue } from '../../utils/parseCountValue'

export type AnimatedNumberProps = {
  value: string
  active: boolean
  duration?: number
  className?: string
}

export function AnimatedNumber({
  value,
  active,
  duration,
  className,
}: AnimatedNumberProps) {
  const { number, suffix } = parseCountValue(value)
  const current = useCountUp(number, active, duration)

  return (
    <span className={className}>
      {current}
      {suffix}
    </span>
  )
}
