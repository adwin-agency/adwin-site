import cn from 'classnames'
import styles from './FileInput.module.scss'

export default function FileInput({ className, name }) {
  return (
    <label className={cn(styles.el, className)}>
      <input type='file' name={name} className={styles.input} />
      <span className={styles.icon}></span>
      <span className={styles.title}>Прикрепить файл</span>
      <span className={styles.desc}>Если у вас есть примеры или наработки, прикрепите их тут</span>
    </label>
  )
}
