import type { ReactNode } from "react";
import { Button } from "../../../common/components/atoms/Button";
import type { Profile } from "../domain/profile.entity";

export type HeroSectionProps = {
  profile: Profile;
  eyebrow: string;
  downloadCv: string;
  contactRegionLabel: string;
  contactSlot: ReactNode;
};

export function HeroSection({
  profile,
  eyebrow,
  downloadCv,
  contactRegionLabel,
  contactSlot,
}: HeroSectionProps) {
  const showCv = profile.cvUrl && profile.cvUrl !== "#";

  return (
    <section
      id="inicio"
      className="px-8 pb-14 pt-12 max-lg:px-5 max-lg:pb-10 max-lg:pt-8"
      aria-labelledby="hero-title"
    >
      <div className="grid grid-cols-[auto_1fr] items-center gap-10 max-lg:grid-cols-1 max-lg:text-center">
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
          <p className="mb-4 mt-0 max-w-xl leading-[155%] text-[var(--text)] max-lg:mx-auto">
            {profile.tagline}
          </p>
          <div
            id="contacto"
            role="region"
            aria-label={contactRegionLabel}
            className="flex flex-wrap items-center gap-3 max-lg:justify-center"
          >
            {showCv ? (
              <Button
                variant="ghost"
                href={profile.cvUrl}
                target="_blank"
                rel="noreferrer"
              >
                {downloadCv}
              </Button>
            ) : null}
            {contactSlot}
          </div>
        </div>
      </div>
    </section>
  );
}
