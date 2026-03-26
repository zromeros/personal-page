import heroImg from '../../../assets/hero.png'
import { Button } from '../../../common/components/atoms/Button'
import type { Profile } from '../domain/profile.entity'

export type HeroSectionProps = {
  profile: Profile
  eyebrow: string
  contactCta: string
  downloadCv: string
}

export function HeroSection({
  profile,
  eyebrow,
  contactCta,
  downloadCv,
}: HeroSectionProps) {
  const showCv = profile.cvUrl && profile.cvUrl !== '#'

  return (
    <section
      id="inicio"
      className="grid grid-cols-[auto_1fr] items-center gap-10 px-8 pb-14 pt-12 max-lg:grid-cols-1 max-lg:px-5 max-lg:pb-10 max-lg:pt-8 max-lg:text-center"
      aria-labelledby="hero-title"
    >
      <div className="flex justify-center">
        <img
          src={heroImg}
          className="h-auto w-[170px] rounded-xl shadow-[var(--shadow)]"
          width={170}
          height={179}
          alt={profile.avatarAlt}
        />
      </div>
      <div>
        <p className="mb-3 mt-0 text-sm font-medium uppercase tracking-[0.12em] text-[var(--accent)] max-lg:mb-2">
          {eyebrow}
        </p>
        <h1
          id="hero-title"
          className="mb-2 mt-0 text-left text-[56px] font-medium leading-none tracking-[-1.68px] text-[var(--text-h)] max-lg:text-center max-lg:text-4xl max-lg:tracking-tight"
        >
          {profile.name}
        </h1>
        <p className="mb-4 mt-0 text-xl font-medium text-[var(--text-h)] max-lg:text-lg">
          {profile.role}
        </p>
        <p className="mb-7 mt-0 max-w-xl leading-[155%] text-[var(--text)] max-lg:mx-auto">
          {profile.tagline}
        </p>
        <div className="flex flex-wrap gap-3 max-lg:justify-center">
          <Button variant="primary" href="#contacto">
            {contactCta}
          </Button>
          {showCv ? (
            <Button variant="ghost" href={profile.cvUrl} target="_blank" rel="noreferrer">
              {downloadCv}
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  )
}
