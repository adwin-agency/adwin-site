import cn from 'classnames'
import Stats from '../app/Stats'
import styles from './Achievements.module.scss'

export default function Achievements() {
  return (
    <section>
      <h2 className='h2'>Достижения</h2>
      <div className={cn('row', styles.row)}>
        <div className={cn('col-2', styles.side)}></div>
        <div className='col-4 col-lg-6'>
          <Stats />
        </div>
      </div>
    </section>
  )
}