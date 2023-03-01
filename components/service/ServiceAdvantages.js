import cn from 'classnames'
import Stats from '../app/Stats'
import useAnim from '../../helpers/useAnim'
import styles from './ServiceAdvantages.module.scss'

export default function ServiceAdvantages() {
  const { anim, animRef } = useAnim()

  return (
    <section className={cn(styles.el, { [styles.anim]: anim })} ref={animRef}>
      <h2 className={cn('h2', styles.heading)}>Заказать лендинг в ADWIN стоит по 5 причинам</h2>
      <div className={styles.main}>
        <div className='row'>
          <div className='col col-2'></div>
          <div className='col col-4 col-lg-6'>
            <Stats />
          </div>
        </div>
      </div>
    </section>
  )
}
