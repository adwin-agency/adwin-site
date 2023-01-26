import Divider from '../ui/Divider'
import Partners from './Partners'
import Competencies from './Competencies'
import Achievements from './Achievements'
import Team from './Team'
import styles from './MainAbout.module.scss'

export default function MainAbout() {
  return (
    <div className={styles.el}>
      <div className="container">
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-6 col-lg-4">
            <Partners />
            <Divider className={styles.divider1} />
            <Competencies />
            <Divider className={styles.divider2} />
            <Achievements />
            <Divider className={styles.divider3} />
            <Team />
          </div>
        </div>
      </div>
    </div>
  )
}