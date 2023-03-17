import ProjectTop from './ProjectTop'
import InstepAbout from './instep/InstepAbout'
import InstepParts from './instep/InstepParts'
import InstepRealise from './instep/InstepRealise'
import InstepResults from './instep/InstepResults'
import InstepTasks from './instep/InstepTasks'
import OtherProjects from './OtherProjects'

export default function ProjectInstep() {
  return (
    <>
      <ProjectTop name='instep' />
      <InstepAbout />
      <InstepTasks />
      <InstepRealise />
      <InstepParts />
      <InstepResults />
      <OtherProjects />
    </>
  )
}
