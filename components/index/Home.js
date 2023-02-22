import TopProjects from '../app/TopProjects'
import BrieflyAbout from './BrieflyAbout'
import CalcOffer from './CalcOffer'
import Intro from './Intro'
import styles from './Home.module.scss'

export default function Home() {
  return (
    <>
      <Intro />
      <TopProjects className={styles.topProjects} />
      <CalcOffer className={styles.calcOffer} />
      <BrieflyAbout className={styles.brieflyAbout} />
    </>
  )
}
