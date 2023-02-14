import cn from 'classnames'
import Stats from '../app/Stats'
import styles from './ServiceAdvantages.module.scss'

export default function ServiceAdvantages() {
  return (
    <section className={styles.el}>
      <h2 className={cn('h2', styles.heading)}>Заказать лендинг в ADWIN стоит по 5 причинам</h2>
      <div className={styles.main}></div>
      <div className='row'>
        <div className='col col-2'></div>
        <div className='col col-4 col-lg-6'>
          <Stats />
        </div>
      </div>
    </section>
  )
}
