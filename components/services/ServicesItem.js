import cn from 'classnames'
import Arrow from '/icons/arrow.svg'
import styles from './ServicesItem.module.scss'

export default function ServicesItem({ tag, title, price }) {
  return (
    <div className={styles.el}>
      {tag && <p className={styles.tag}>{tag}</p>}      
      <p className={cn('h3', styles.title)}>{title}</p>
      <div className={styles.side}>
        <p className={cn('h3', styles.price)}>{price}</p>
        <a href='#' className={styles.link}>Заявка <Arrow className={styles.arrow} /></a>
      </div>
    </div>
  )
}
