import { useState } from 'react'
import cn from 'classnames'
import MobileMenu from './MobileMenu'
import Logo from '/public/icons/logo-sm.svg'
import styles from './Header.module.scss'

export default function Header() {
  const [activeMobile, setActivemobile] = useState()

  function toggleMobile() {
    setActivemobile(!activeMobile)
  }

  return (
    <header className={cn(styles.el, { [styles.active]: activeMobile })}>
      <MobileMenu className={styles.mobile} />
      <div className={styles.panel}>
        <div className="container">
          <div className={styles.row}>
            <Logo className={styles.logo} />
            <button className={styles.burger} onClick={toggleMobile}></button>
          </div>
        </div>
      </div>
    </header>
  )
}
