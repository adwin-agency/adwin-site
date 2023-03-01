import cn from 'classnames'
import SideMenu from '../app/SideMenu'
import Divider from '../ui/Divider'
import Partners from './Partners'
import Competencies from './Competencies'
import Achievements from './Achievements'
import Team from './Team'
import menu from '../../data/menu'
import useAnim from '../../helpers/useAnim'
import styles from './About.module.scss'

export default function About() {
  const menuItems = menu.about

  const { anim: menuAnim, animRef: menuAnimRef } = useAnim()
  const { anim: divider1Anim, animRef: divider1AnimRef } = useAnim()
  const { anim: divider2Anim, animRef: divider2AnimRef } = useAnim()
  const { anim: divider3Anim, animRef: divider3AnimRef } = useAnim()

  return (
    <div className={styles.el}>
      <div className='container'>
        <div className='row'>
          <div className='col col-lg-2'>
            <div className={cn(styles.sideMenu, { [styles.anim]: menuAnim })} ref={menuAnimRef}>
              <SideMenu items={menuItems} />
            </div>
          </div>
          <div className='col col-6 col-lg-4'>
            <Partners />
            <div className={cn(styles.divider, {[styles.anim]: divider1Anim})} ref={divider1AnimRef}>
              <Divider />
            </div>
            <Competencies id='competencies' />
            <div className={cn(styles.divider, {[styles.anim]: divider2Anim})} ref={divider2AnimRef}>
              <Divider />
            </div>
            <Achievements id='achievements' />
            <div className={cn(styles.divider, {[styles.anim]: divider3Anim})} ref={divider3AnimRef}>
              <Divider />
            </div>
            <Team id='team' />
          </div>
        </div>
      </div>
    </div>
  )
}
