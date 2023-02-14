import cn from 'classnames'
import styles from './TextInput.module.scss'

export default function TextInput({ className, type, textarea, title, name, placeholder }) {
  let input = (
    <input
      type={type || 'text'}
      name={name}
      placeholder={placeholder}
      className={styles.input}
    />
  )

  if (textarea) {
    input = (
      <textarea
        name={name}
        placeholder={placeholder}
        className={cn(styles.input, styles.textarea)}
      ></textarea>
    )
  }

  return (
    <div className={cn(styles.el, className)}>
      {title && <p className={styles.title}>{title}</p>}
      {input}
    </div>
  )
}
