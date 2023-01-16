import { useState } from 'react'
import { useSelector } from 'react-redux'
import cn from 'classnames'
import MobileMenu from './MobileMenu'
import Button from '../app/Button'
import Logo from '/icons/logo.svg'
import LogoLg from '/icons/logo-lg.svg'
import styles from './Header.module.scss'

export default function Header() {
  const [activeMobile, setActivemobile] = useState()
  const mediaMobile = useSelector(state => state.media.mobile)

  function toggleMobile() {
    setActivemobile(!activeMobile)
  }

  return (
    <header className={cn(styles.el, { [styles.active]: activeMobile })}>
      {mediaMobile && <MobileMenu className={styles.mobile} />}
      <div className={styles.panel}>
        <div className='container'>
          <div className={styles.row}>
            {mediaMobile ? (
              <>
                <Logo className={styles.logo} />
                <button className={styles.burger} onClick={toggleMobile}></button>
              </>
            ) : (
              <>
                <LogoLg className={styles.logo} />
                <div className={styles.menu}>
                  <a href='' className={styles.link}>Об агентстве</a>
                  <a href='' className={styles.link}>Услуги</a>
                  <a href='' className={styles.link}>Работы</a>
                  <Button className={styles.btn}>Связаться с нами</Button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
