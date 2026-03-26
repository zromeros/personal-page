import { useContactStore } from '../../modules/contact/application/contactStore'
import { ContactSection } from '../../modules/contact/ui/ContactSection'
import { useExperienceTimelineStore } from '../../modules/experience-timeline/application/experienceTimelineStore'
import { ExperienceTimelineSection } from '../../modules/experience-timeline/ui/ExperienceTimelineSection'
import { useProfileStore } from '../../modules/profile/application/profileStore'
import { AboutSection } from '../../modules/profile/ui/AboutSection'
import { HeroSection } from '../../modules/profile/ui/HeroSection'
import { SkillsSection } from '../../modules/profile/ui/SkillsSection'
import { useProjectsStore } from '../../modules/projects/application/projectsStore'
import { ProjectsSection } from '../../modules/projects/ui/ProjectsSection'
import { PageLayout } from './PageLayout'
import { SiteFooter } from './SiteFooter'
import { SiteHeader } from './SiteHeader'
import { SkipLink } from './SkipLink'
import { TicksDivider } from './TicksDivider'

export function HomePage() {
  const profile = useProfileStore((s) => s.profile)
  const navItems = useProfileStore((s) => s.navItems)
  const entries = useExperienceTimelineStore((s) => s.entries)
  const projects = useProjectsStore((s) => s.projects)
  const social = useContactStore((s) => s.social)

  return (
    <PageLayout>
      <SkipLink />
      <SiteHeader brand={profile.name} navItems={navItems} />
      <main className="flex-grow">
        <HeroSection profile={profile} />
        <TicksDivider />
        <AboutSection about={profile.about} />
        <TicksDivider />
        <SkillsSection skills={profile.skills} />
        <TicksDivider />
        <ExperienceTimelineSection entries={entries} />
        <TicksDivider />
        <ProjectsSection projects={projects} />
        <TicksDivider />
        <ContactSection social={social} />
      </main>
      <SiteFooter name={profile.name} />
      <TicksDivider />
      <section
        className="h-16 border-t border-[var(--border)] max-lg:h-10"
        aria-hidden="true"
      />
    </PageLayout>
  )
}
