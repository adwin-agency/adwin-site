import { useEffect, useRef } from 'react'
import cn from 'classnames'
import Plus from '/icons/plus.svg'
import styles from './ServiceStep.module.scss'

export default function ServiceStep({ className, num, title, desc, result, active, onClick }) {
  const mainRef = useRef()

  useEffect(() => {
    if (active) {
      mainRef.current.style.height = mainRef.current.scrollHeight + 'px'
    } else {
      mainRef.current.style.height = ''
    }
  }, [active])

  return (
    <div className={cn(styles.el, { [styles.active]: active }, className)}>
      <div className={styles.top} onClick={onClick}>
        <p className={styles.num}>№{num}</p>
        <p className={styles.title}>{title}</p>
        <Plus className={styles.icon} />
      </div>
      <div className={styles.main} ref={mainRef}>
        <div className={styles.content}>
          <p className={styles.desc}>{desc}</p>
          <p className={styles.result}>Итог: <br />{result}</p>
        </div>
      </div>
    </div>
  )
}
