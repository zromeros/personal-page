import type { ReactNode } from "react";
import { AnimatedNumber } from "../../../common/components/atoms/AnimatedNumber";
import { Button } from "../../../common/components/atoms/Button";
import { Reveal } from "../../../common/components/atoms/Reveal";
import { useInView } from "../../../common/hooks/useInView";
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
  downloadCv: string;
  chartTitle: string;
  contactRegionLabel: string;
  contactSlot: ReactNode;
};

export function HeroSection({
  profile,
  eyebrow,
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
  const { ref: panelRef, inView: panelInView } = useInView<HTMLDivElement>();

  return (
    <section
      id="inicio"
      className="relative px-8 pb-10 pt-14 max-lg:px-5 max-lg:pb-7 max-lg:pt-8"
      aria-labelledby="hero-title"
    >
      <div className="relative grid grid-cols-[1.35fr_1fr] items-start gap-14 max-lg:grid-cols-1 max-lg:text-center">
        <Reveal>
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
          {showCv ? (
            <div
              id="contacto"
              role="region"
              aria-label={contactRegionLabel}
              className="flex flex-wrap items-center gap-3 max-lg:justify-center"
            >
              <Button
                variant="ghost"
                href={profile.cvUrl}
                target="_blank"
                rel="noreferrer"
              >
                {downloadCv}
              </Button>
            </div>
          ) : null}
          <div className="mt-5 flex flex-wrap items-center gap-2.5 max-lg:justify-center">
            {contactSlot}
          </div>
        </Reveal>

        <div
          ref={panelRef}
          className={`flex flex-col gap-6 rounded-[20px] border border-[var(--border)] bg-[var(--panel)] p-8 transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none max-lg:text-left ${
            panelInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          <div>
            <div className="font-[family-name:var(--heading)] text-6xl font-bold leading-none text-[var(--accent)]">
              <AnimatedNumber
                value={heroHighlight.bigNumber}
                active={panelInView}
                duration={1300}
              />
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
                  <AnimatedNumber
                    value={stat.value}
                    active={panelInView}
                    duration={1100}
                  />
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
              {heroHighlight.projectsByArea.map((area, index) => {
                const t =
                  maxProjects === minProjects
                    ? 1
                    : (area.value - minProjects) /
                      (maxProjects - minProjects);
                const targetWidth = `${(area.value / maxProjects) * 100}%`;
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
                        className="h-2.5 min-w-1 rounded-r-[4px] transition-[width,filter] duration-[900ms] ease-out group-hover:brightness-110 motion-reduce:transition-none"
                        style={{
                          width: panelInView ? targetWidth : "0%",
                          transitionDelay: `${index * 100}ms`,
                          backgroundColor: lerpColor(
                            CHART_HUE_DARK,
                            CHART_HUE_LIGHT,
                            t,
                          ),
                        }}
                      />
                      <span className="ml-2 font-[family-name:var(--heading)] text-[13px] font-semibold text-[var(--text-h)]">
                        <AnimatedNumber
                          value={String(area.value)}
                          active={panelInView}
                          duration={1100}
                        />
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
