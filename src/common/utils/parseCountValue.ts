export function parseCountValue(raw: string): { number: number; suffix: string } {
  const match = raw.match(/^(-?\d+)(.*)$/)
  if (!match) return { number: 0, suffix: raw }
  return { number: Number(match[1]), suffix: match[2] }
}
