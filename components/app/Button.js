import cn from 'classnames'
import styles from './Button.module.scss'

export default function Button({ className, bordered, children }) {
  return (
    <button className={cn(styles.el, { [styles.bordered]: bordered }, className)}>{children}</button>
  )
}
