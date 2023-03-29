import BurenieSiteIntro from './burenie-site/BurenieSiteIntro'
import BurenieSiteTask from './burenie-site/BurenieSiteTask'
import OtherProjects from './OtherProjects'
import ProjectTop from './ProjectTop'

export default function ProjectBurenieSite() {
  return (
    <>
      <ProjectTop name='burenie-site' />
      <BurenieSiteIntro />
      <BurenieSiteTask />
      <OtherProjects />
    </>
  )
}
