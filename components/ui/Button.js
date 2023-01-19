import cn from 'classnames'
import styles from './Button.module.scss'

export default function Button({ className, size, color, bordered, children }) {
  return (
    <button className={cn(
      styles.el,
      {
        [styles[size]]: size,
        [styles[color]]: color,
        [styles.bordered]: bordered
      },
      className
    )}>{children}</button>
  )
}
