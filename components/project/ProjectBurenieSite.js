import BurenieSiteAnalytics from './burenie-site/BurenieSiteAnalytics'
import BurenieSiteIntro from './burenie-site/BurenieSiteIntro'
import BurenieSiteLaunch from './burenie-site/BurenieSiteLaunch'
import BurenieSiteProto from './burenie-site/BurenieSiteProto'
import BurenieSiteResults from './burenie-site/BurenieSiteResults'
import BurenieSiteSetting from './burenie-site/BurenieSiteSetting'
import BurenieSiteSolution from './burenie-site/BurenieSiteSolution'
import BurenieSiteStages from './burenie-site/BurenieSiteStages'
import BurenieSiteTask from './burenie-site/BurenieSiteTask'
import BurenieSiteVisual from './burenie-site/BurenieSiteVisual'
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
      <BurenieSiteProto />
      <BurenieSiteVisual />
      <BurenieSiteSetting />
      <BurenieSiteLaunch />
      <BurenieSiteResults />
      <OtherProjects />
    </>
  )
}
