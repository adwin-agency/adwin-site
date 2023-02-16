import cn from 'classnames'
import Link from 'next/link'
import Arrow from '/icons/arrow.svg'
import styles from './Button.module.scss'

export default function Button({ className, link, mod, size, color, bordered, icon, onClick, children }) {
  if (link) {
    return (
      <Link
        className={cn(
          styles.el,
          {
            [styles[mod]]: mod,
            [styles[size]]: size,
            [styles[color]]: color,
            [styles.bordered]: bordered
          },
          className
        )}
        href={link}
        onClick={onClick}
      >
        {children}
        {icon === 'arrow' && <Arrow className={styles.icon} />}
      </Link>
    )
  }

  return (
    <button
      className={cn(
        styles.el,
        {
          [styles[mod]]: mod,
          [styles[size]]: size,
          [styles[color]]: color,
          [styles.bordered]: bordered
        },
        className
      )}
      onClick={onClick}
    >
      {children}
      {icon === 'arrow' && <Arrow className={styles.icon} />}
    </button>
  )
}
