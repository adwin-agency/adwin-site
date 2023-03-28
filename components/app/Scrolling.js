import { useState } from 'react'
import cn from 'classnames'
import Swipe from '/icons/burenie/swipe.svg'
import styles from './Scrolling.module.scss'

export default function Scrolling({ children }) {
  const [active, setActive] = useState(false)

  function handleTouchStart() {
    if (!active) {
      setActive(true)
    }
  }

  return (
    <div className={cn(styles.el, { [styles.active]: active })} onTouchStart={handleTouchStart}>
      <div className={styles.line}>
        {children}
      </div>
      <div className={styles.overlay}>
        <Swipe className={styles.icon} />
        <p className={styles.text}>Чтобы посмотреть картинку полностью, листните влево</p>
      </div>
    </div>
  )
}
