import { useEffect, useState } from 'react'
import cn from 'classnames'
import MobileMenu from './MobileMenu'
import Button from '../ui/Button'
import Logo from '/icons/logo.svg'
import LogoLg from '/icons/logo-lg.svg'
import styles from './Header.module.scss'

export default function Header() {
  const [activeMobile, setActivemobile] = useState()

  function toggleMobile() {
    setActivemobile(!activeMobile)
  }

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 1200 && activeMobile) {
        setActivemobile(false)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [activeMobile])

  return (
    <header className={cn(styles.el, { [styles.active]: activeMobile })}>
      <MobileMenu className={styles.mobile} />
      <div className={styles.panel} id='header'>
        <div className='container'>
          <div className={styles.row}>
            <Logo className={styles.logo} />
            <LogoLg className={styles.logoDesktop} />
            <button className={styles.burger} onClick={toggleMobile}></button>
            <div className={styles.menu}>
              <a href='/' className={styles.link}>Об агентстве</a>
              <a href='/' className={styles.link}>Услуги</a>
              <a href='/' className={styles.link}>Работы</a>
              <Button className={styles.btn}>Связаться с нами</Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
