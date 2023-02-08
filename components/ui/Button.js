import cn from 'classnames'
import Arrow from '/icons/arrow.svg'
import styles from './Button.module.scss'

export default function Button({ className, size, color, bordered, icon, children }) {
  return (
    <button className={cn(
      styles.el,
      {
        [styles[size]]: size,
        [styles[color]]: color,
        [styles.bordered]: bordered
      },
      className
    )}>
      {children}
      {icon === 'arrow' && <Arrow className={styles.icon} />}
    </button>
  )
}
