import Partners from './Partners'
import styles from './MainAbout.module.scss'

export default function MainAbout() {
  return (
    <div className={styles.el}>
      <div className="container">
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-4">
            <Partners />
          </div>
        </div>
      </div>
    </div>
  )
}