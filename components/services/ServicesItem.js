import { useContext } from 'react'
import cn from 'classnames'
import Link from 'next/link'
import AppContext from '../../context/AppContext'
import Arrow from '/icons/arrow.svg'
import styles from './ServicesItem.module.scss'

export default function ServicesItem({ id, tag, title, price }) {
  const ctx = useContext(AppContext)

  return (
    <div className={styles.el}>
      {tag && <p className={styles.tag}>{tag}</p>}      
      <Link href={`/services/${id}`} className={cn('h3', styles.title)}>{title}</Link>
      <div className={styles.side}>
        <p className={cn('h3', styles.price)}>{price}</p>
        <button className={styles.link} onClick={ctx.openModal('request')}>Заявка <Arrow className={styles.arrow} /></button>
      </div>
    </div>
  )
}
