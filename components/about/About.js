import SideMenu from '../app/SideMenu'
import Divider from '../ui/Divider'
import Partners from './Partners'
import Competencies from './Competencies'
import Achievements from './Achievements'
import Team from './Team'
import menuItems from '/data/aboutmenu'
import styles from './About.module.scss'

export default function About() {
  return (
    <div className={styles.el}>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-2'>
            <div className={styles.sideMenu}>
              <SideMenu items={menuItems} />
            </div>
          </div>
          <div className='col-6 col-lg-4'>
            <Partners />
            <Divider className={styles.divider1} />
            <Competencies id='competencies' />
            <Divider className={styles.divider2} />
            <Achievements id='achievements' />
            <Divider className={styles.divider3} />
            <Team id='team' />
          </div>
        </div>
      </div>
    </div>
  )
}
