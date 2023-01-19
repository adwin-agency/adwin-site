import Intro from '../components/index/Intro'
import TopProjects from '../components/app/TopProjects'
import styles from './index.module.scss'

export default function Main() {
  return (
    <>
      <Intro />
      <TopProjects className={styles.topProjects} />
    </>
  )
}
