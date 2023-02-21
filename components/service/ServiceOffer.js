import { useContext } from 'react'
import AppContext from '../../context/AppContext'
import Button from '../ui/Button'
import styles from './ServiceOffer.module.scss'

export default function ServiceOffer() {
  const ctx = useContext(AppContext)

  return (
    <section className={styles.el}>
      <div className='container'>
        <div className={styles.main}>
          <p className={styles.title}>Оставьте заявку и получите медиа-план продвижения БЕСПЛАТНО</p>
          <Button className={styles.btn} size='xl' bordered icon='arrow' onClick={ctx.openModal('request')}>Хочу медиа-план</Button>
        </div>
      </div>
    </section>
  )
}
