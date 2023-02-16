import { useEffect, useState } from 'react'
import cn from 'classnames'
import Link from 'next/link'
import MobileMenu from './MobileMenu'
import Button from '../ui/Button'
import Logo from '/icons/logo.svg'
import LogoLg from '/icons/logo-lg.svg'
import styles from './Header.module.scss'

export default function Header() {
  const [activeMobile, setActivemobile] = useState()

  function closeMobile() {
    setActivemobile(false)
  }

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
      <MobileMenu className={styles.mobile} onLinkClick={closeMobile} />
      <div className={styles.panel} id='header'>
        <div className='container'>
          <div className={styles.row}>
            <Link href='/' onClick={closeMobile}>
              <Logo className={styles.logo} />
              <LogoLg className={styles.logoDesktop} />
            </Link>
            <button className={styles.burger} onClick={toggleMobile}></button>
            <div className={styles.menu}>
              <Link href='/about' className={styles.link}>Об агентстве</Link>
              <Link href='/services' className={styles.link}>Услуги</Link>
              <Link href='/projects' className={styles.link}>Работы</Link>
              <Button className={styles.btn} link='/contacts'>Связаться с нами</Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
