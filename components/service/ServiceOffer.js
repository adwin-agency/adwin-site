import Button from '../ui/Button'
import styles from './ServiceOffer.module.scss'

export default function ServiceOffer() {
  return (
    <section>
      <div className='container'>
        <div className={styles.main}>
          <p className={styles.title}>Оставьте заявку и получите медиа-план продвижения БЕСПЛАТНО</p>
          <Button className={styles.btn} icon='arrow'>Хочу медиа-план</Button>
        </div>
      </div>
    </section>
  )
}
