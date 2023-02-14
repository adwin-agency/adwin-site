import cn from 'classnames'
import Clip from '/icons/clip.svg'
import styles from './FileInput.module.scss'

export default function FileInput({ className, name }) {
  return (
    <div className={className}>
      <label className={styles.label}>
        <input type='file' name={name} className={styles.input} />
        <Clip className={styles.icon} />
        <span className={styles.title}>Прикрепить файл</span>
        <span className={styles.desc}>Если у вас есть примеры или наработки, прикрепите их тут</span>
      </label>
    </div>
  )
}
