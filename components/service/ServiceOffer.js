import { useContext } from 'react'
import cn from 'classnames'
import Button from '../ui/Button'
import AppContext from '../../context/AppContext'
import useAnim from '../../helpers/useAnim'
import styles from './ServiceOffer.module.scss'

export default function ServiceOffer() {
  const ctx = useContext(AppContext)

  const { anim, animRef } = useAnim()

  return (
    <section className={cn(styles.el, { [styles.anim]: anim })} ref={animRef}>
      <div className='container'>
        <div className={styles.main}>
          <p className={styles.title}>Оставьте заявку и получите медиа-план продвижения БЕСПЛАТНО</p>
          <div className={styles.side}>
            <Button className={styles.btn} size='xl' bordered icon='arrow' onClick={ctx.openModal('request')}>Хочу медиа-план</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
