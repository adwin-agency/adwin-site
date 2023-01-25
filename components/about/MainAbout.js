import Partners from './Partners'
import Competencies from './Competencies'
import Divider from '../ui/Divider'
import styles from './MainAbout.module.scss'
import Achievements from './Achievements'

export default function MainAbout() {
  return (
    <div className={styles.el}>
      <div className="container">
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-4">
            <Partners />
            <Divider className={styles.divider1} />
            <Competencies />
            <Divider className={styles.divider2} />
            <Achievements />
          </div>
        </div>
      </div>
    </div>
  )
}