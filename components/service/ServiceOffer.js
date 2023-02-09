import Button from '../ui/Button'
import styles from './ServiceOffer.module.scss'

export default function ServiceOffer() {
  return (
    <section className={styles.el}>
      <div className='container'>
        <div className={styles.main}>
          <p className={styles.title}>Оставьте заявку и получите медиа-план продвижения БЕСПЛАТНО</p>
          <Button className={styles.btn} size='xl' bordered icon='arrow'>Хочу медиа-план</Button>
        </div>
      </div>
    </section>
  )
}
