import { useEffect } from "react";
import { getUi } from "../i18n/ui";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { PageLayout } from "./PageLayout";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { SkipLink } from "./SkipLink";
import { TicksDivider } from "./TicksDivider";
import { useLocaleStore } from "../store/localeStore";
import { useContactData } from "../../modules/contact/application/useContactData";
import { ContactSection } from "../../modules/contact/ui/ContactSection";
import { useExperienceTimelineData } from "../../modules/experience-timeline/application/useExperienceTimelineData";
import { ExperienceTimelineSection } from "../../modules/experience-timeline/ui/ExperienceTimelineSection";
import { useProfileData } from "../../modules/profile/application/useProfileData";
import { AboutSection } from "../../modules/profile/ui/AboutSection";
import { HeroSection } from "../../modules/profile/ui/HeroSection";
import { SkillsSection } from "../../modules/profile/ui/SkillsSection";
import { useProjectsData } from "../../modules/projects/application/useProjectsData";
import { ProjectsSection } from "../../modules/projects/ui/ProjectsSection";

export function HomePage() {
  const locale = useLocaleStore((s) => s.locale);
  const ui = getUi(locale);

  useEffect(() => {
    document.documentElement.lang = locale === "en" ? "en" : "es";
  }, [locale]);

  const { profile, navItems } = useProfileData();
  const { entries } = useExperienceTimelineData();
  const { projects } = useProjectsData();
  const { social } = useContactData();

  const year = new Date().getFullYear();
  const footerLine = `© ${year} ${profile.name}`;

  return (
    <PageLayout>
      <SkipLink label={ui.skipToContent} />
      <SiteHeader
        brand={profile.name}
        navItems={navItems}
        navAriaLabel={ui.navAria}
        trailing={<LanguageSwitcher />}
      />
      <main className="flex-grow">
        <HeroSection
          profile={profile}
          eyebrow={ui.heroEyebrow}
          downloadCv={ui.downloadCv}
          contactRegionLabel={ui.sectionContact}
          contactSlot={<ContactSection social={social} />}
        />
        <TicksDivider />
        <AboutSection about={profile.about} />
        <TicksDivider />
        <SkillsSection skills={profile.skills} title={ui.sectionSkills} />
        <TicksDivider />
        <ExperienceTimelineSection
          entries={entries}
          title={ui.sectionExperience}
        />
        <TicksDivider />
        <ProjectsSection
          projects={projects}
          title={ui.sectionProjects}
          demoLabel={ui.projectDemo}
          codeLabel={ui.projectCode}
        />
      </main>
      <SiteFooter line={footerLine} />
      <TicksDivider />
      <section
        className="h-16 border-t border-[var(--border)] max-lg:h-10"
        aria-hidden="true"
      />
    </PageLayout>
  );
}
