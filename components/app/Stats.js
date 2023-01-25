import cn from 'classnames'
import data from '/data/stats'
import styles from './Stats.module.scss'

export default function Stats() {
  return (
    <div className={styles.el}>
      {data.map(item => (
        <div key={item.id} className={styles.item}>
          <p className={cn(styles.title, { [styles.em]: item.em })}>
            <span className={cn('num', styles.num)}>{item.num}</span>
            <span className={cn('h5', styles.unit)}>{item.unit}</span>
          </p>
          <p className={cn('extra', styles.desc)}>{item.desc}</p>
        </div>
      ))}
    </div>
  )
}
