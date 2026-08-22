import type { ReactNode } from "react";
import { Button } from "../../../common/components/atoms/Button";
import type { Profile } from "../domain/profile.entity";

const CHART_HUE_LIGHT = "#6ee7b7";
const CHART_HUE_DARK = "#059669";

function hexToRgb(hex: string): [number, number, number] {
  const n = parseInt(hex.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

function lerpColor(hexA: string, hexB: string, t: number) {
  const [r1, g1, b1] = hexToRgb(hexA);
  const [r2, g2, b2] = hexToRgb(hexB);
  const r = Math.round(r1 + (r2 - r1) * t);
  const g = Math.round(g1 + (g2 - g1) * t);
  const b = Math.round(b1 + (b2 - b1) * t);
  return `rgb(${r}, ${g}, ${b})`;
}

export type HeroSectionProps = {
  profile: Profile;
  eyebrow: string;
  ctaLabel: string;
  ctaHref: string;
  downloadCv: string;
  chartTitle: string;
  contactRegionLabel: string;
  contactSlot: ReactNode;
};

export function HeroSection({
  profile,
  eyebrow,
  ctaLabel,
  ctaHref,
  downloadCv,
  chartTitle,
  contactRegionLabel,
  contactSlot,
}: HeroSectionProps) {
  const showCv = profile.cvUrl && profile.cvUrl !== "#";
  const { heroHighlight } = profile;
  const projectValues = heroHighlight.projectsByArea.map((a) => a.value);
  const maxProjects = Math.max(...projectValues);
  const minProjects = Math.min(...projectValues);

  return (
    <section
      id="inicio"
      className="relative px-8 pb-10 pt-14 max-lg:px-5 max-lg:pb-7 max-lg:pt-8"
      aria-labelledby="hero-title"
    >
      <div className="relative grid grid-cols-[1.35fr_1fr] items-start gap-14 max-lg:grid-cols-1 max-lg:text-center">
        <div>
          <p className="mb-3 mt-0 text-sm font-medium uppercase tracking-[0.16em] text-[var(--accent)] max-lg:mb-2">
            {eyebrow}
          </p>
          <h1
            id="hero-title"
            className="mb-2 mt-0 text-left font-[family-name:var(--heading)] text-[88px] font-bold leading-[0.98] tracking-[-0.03em] text-[var(--text-h)] max-lg:text-center max-lg:text-5xl max-lg:tracking-tight"
          >
            {profile.name}
          </h1>
          <p className="mb-4 mt-0 text-2xl font-medium text-[var(--text-h)] max-lg:text-lg">
            {profile.role}
          </p>
          <p className="mb-6 mt-0 max-w-xl text-[17px] leading-[160%] text-[var(--text)] max-lg:mx-auto">
            {profile.tagline}
          </p>
          <div
            id="contacto"
            role="region"
            aria-label={contactRegionLabel}
            className="flex flex-wrap items-center gap-3 max-lg:justify-center"
          >
            <Button variant="primary" href={ctaHref}>
              {ctaLabel}
            </Button>
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
          </div>
          <div className="mt-5 flex flex-wrap items-center gap-2.5 max-lg:justify-center">
            {contactSlot}
          </div>
        </div>

        <div className="flex flex-col gap-6 rounded-[20px] border border-[var(--border)] bg-[var(--panel)] p-8 max-lg:text-left">
          <div>
            <div className="font-[family-name:var(--heading)] text-6xl font-bold leading-none text-[var(--accent)]">
              {heroHighlight.bigNumber}
            </div>
            <p className="mb-0 mt-2 text-[15px] text-[var(--text)]">
              {heroHighlight.bigLabel}
            </p>
          </div>

          <div className="h-px bg-[var(--border)]" />

          <div className="grid grid-cols-2 gap-3">
            {heroHighlight.stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-[family-name:var(--heading)] text-xl font-bold text-[var(--text-h)]">
                  {stat.value}
                </div>
                <p className="mb-0 mt-0.5 text-[12px] leading-[130%] text-[var(--text)]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="h-px bg-[var(--border)]" />

          <div>
            <p className="mb-4 mt-0 text-[13px] font-semibold uppercase tracking-[0.08em] text-[var(--text)]">
              {chartTitle}
            </p>
            <div className="flex flex-col gap-3">
              {heroHighlight.projectsByArea.map((area) => {
                const t =
                  maxProjects === minProjects
                    ? 1
                    : (area.value - minProjects) /
                      (maxProjects - minProjects);
                return (
                  <div
                    key={area.label}
                    className="group flex items-center gap-3"
                  >
                    <span className="w-16 shrink-0 text-[13px] text-[var(--text)]">
                      {area.label}
                    </span>
                    <div className="flex flex-1 items-center">
                      <div
                        className="h-2.5 min-w-1 rounded-r-[4px] transition-[filter] group-hover:brightness-110"
                        style={{
                          width: `${(area.value / maxProjects) * 100}%`,
                          backgroundColor: lerpColor(
                            CHART_HUE_DARK,
                            CHART_HUE_LIGHT,
                            t,
                          ),
                        }}
                      />
                      <span className="ml-2 font-[family-name:var(--heading)] text-[13px] font-semibold text-[var(--text-h)]">
                        {area.value}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
