import cn from 'classnames'
import styles from './TextInput.module.scss'

export default function TextInput({ className, type, textarea, title, name, placeholder }) {
  let input = (
    <input
      type={type || 'text'}
      name={name}
      placeholder={placeholder}
      className={cn(styles.el, className)}
    />
  )

  if (textarea) {
    input = (
      <textarea
        name={name}
        placeholder={placeholder}
        className={cn(styles.el, className)}
      ></textarea>
    )
  }

  return (
    <div>
      {title && <p className={styles.title}>{title}</p>}
      {input}
    </div>
  )
}
