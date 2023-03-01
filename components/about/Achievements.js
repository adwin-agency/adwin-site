import cn from 'classnames'
import Stats from '../app/Stats'
import useAnim from '../../helpers/useAnim'
import styles from './Achievements.module.scss'

export default function Achievements({ id }) {
  const { anim, animRef } = useAnim()

  return (
    <section className={cn(styles.el, { [styles.anim]: anim })} id={id} ref={animRef}>
      <h2 className={cn('h2', styles.heading)}>Достижения</h2>
      <div className={cn('row', styles.row)}>
        <div className={cn('col col-2', styles.side)}></div>
        <div className='col col-4 col-lg-6'>
          <Stats />
        </div>
      </div>
    </section>
  )
}
