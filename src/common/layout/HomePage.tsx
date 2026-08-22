import { useEffect } from "react";
import { getUi } from "../i18n/ui";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { PageLayout } from "./PageLayout";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { SkipLink } from "./SkipLink";
import { TicksDivider } from "./TicksDivider";
import { useLocaleStore } from "../store/localeStore";
import { useCapabilityAreaData } from "../../modules/capability-areas/application/useCapabilityAreaData";
import { CapabilityAreasSection } from "../../modules/capability-areas/ui/CapabilityAreasSection";
import { useContactData } from "../../modules/contact/application/useContactData";
import { ContactSection } from "../../modules/contact/ui/ContactSection";
import { useProfileData } from "../../modules/profile/application/useProfileData";
import { AboutSection } from "../../modules/profile/ui/AboutSection";
import { HeroSection } from "../../modules/profile/ui/HeroSection";
import { SkillsSection } from "../../modules/profile/ui/SkillsSection";

export function HomePage() {
  const locale = useLocaleStore((s) => s.locale);
  const ui = getUi(locale);

  useEffect(() => {
    document.documentElement.lang = locale === "en" ? "en" : "es";
  }, [locale]);

  const { profile, navItems } = useProfileData();
  const { areas } = useCapabilityAreaData();
  const { social } = useContactData();

  const year = new Date().getFullYear();
  const footerLine = `© ${year} ${profile.name}`;

  return (
    <PageLayout>
      <SkipLink label={ui.skipToContent} />
      <SiteHeader
        navItems={navItems}
        navAriaLabel={ui.navAria}
        trailing={<LanguageSwitcher />}
      />
      <div className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col">
        <main className="flex-grow">
          <HeroSection
            profile={profile}
            eyebrow={ui.heroEyebrow}
            downloadCv={ui.downloadCv}
            chartTitle={ui.heroAreasLabel}
            contactRegionLabel={ui.sectionContact}
            contactSlot={<ContactSection social={social} />}
          />
          <TicksDivider />
          <AboutSection about={profile.about} />
          <TicksDivider />
          <CapabilityAreasSection areas={areas} title={ui.sectionAreas} />
          <TicksDivider />
          <SkillsSection skills={profile.skills} title={ui.sectionSkills} />
        </main>
        <SiteFooter line={footerLine} />
        <TicksDivider />
        <section
          className="h-16 border-t border-[var(--border)] max-lg:h-10"
          aria-hidden="true"
        />
      </div>
    </PageLayout>
  );
}
