import Intro from '../components/index/Intro'
import TopProjects from '../components/app/TopProjects'
import CalcOffer from '../components/index/CalcOffer'
import BrieflyAbout from '../components/index/BrieflyAbout'
import styles from './index.module.scss'

export default function Main() {
  return (
    <>
      <Intro />
      <TopProjects className={styles.topProjects} />
      <CalcOffer className={styles.calcOffer} />
      <BrieflyAbout className={styles.brieflyAbout} />
    </>
  )
}
