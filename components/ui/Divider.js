import cn from 'classnames'
import styles from './Divider.module.scss'

export default function Divider({ className }) {
  return (
    <div className={cn(styles.el, className)}></div>
  )
}