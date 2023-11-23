import cn from 'classnames'
import styles from './CheckBox.module.scss'

export default function CheckBox({ className, name, value, title, checked, onChange }) {
  return (
    <label className={cn(styles.el, className)}>
      <input type='checkbox' name={name} value={value || title} className={styles.input} checked={checked} onChange={onChange} />
      <span className={styles.box}></span>
      <span className={styles.title}>{title}</span>
    </label>
  )
}