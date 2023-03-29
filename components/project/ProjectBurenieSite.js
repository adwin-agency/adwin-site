import BurenieSiteAnalytics from './burenie-site/BurenieSiteAnalytics'
import BurenieSiteIntro from './burenie-site/BurenieSiteIntro'
import BurenieSiteSolution from './burenie-site/BurenieSiteSolution'
import BurenieSiteStages from './burenie-site/BurenieSiteStages'
import BurenieSiteTask from './burenie-site/BurenieSiteTask'
import OtherProjects from './OtherProjects'
import ProjectTop from './ProjectTop'

export default function ProjectBurenieSite() {
  return (
    <>
      <ProjectTop name='burenie-site' />
      <BurenieSiteIntro />
      <BurenieSiteTask />
      <BurenieSiteSolution />
      <BurenieSiteStages />
      <BurenieSiteAnalytics />
      <OtherProjects />
    </>
  )
}
