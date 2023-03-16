import ProjectTop from '../ProjectTop'
import InstepAbout from './InstepAbout'
import InstepParts from './InstepParts'
import InstepRealise from './InstepRealise'
import InstepTasks from './InstepTasks'
import styles from './ProjectInstep.module.scss'

export default function ProjectInstep() {
  return (
    <>
      <ProjectTop name='instep' />
      <InstepAbout />
      <InstepTasks />
      <InstepRealise />
      <InstepParts />
    </>
  )
}
