import { useContext, useEffect, useRef } from 'react'
import cn from 'classnames'
import Link from 'next/link'
import MobileMenu from './MobileMenu'
import Button from '../ui/Button'
import Logo from '/icons/logo.svg'
import LogoLg from '/icons/logo-lg.svg'
import AppContext from '../../context/AppContext'
import styles from './Header.module.scss'

export default function Header() {
  const headerRef = useRef()

  const ctx = useContext(AppContext)
  const activeMobile = ctx.activeMobileMenu
  const activeModal = ctx.activeModal

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 1000 && activeMobile) {
        ctx.toggleMobileMenu()
      }
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [activeMobile])

  useEffect(() => {
    if (activeModal) {
      headerRef.current.style.right = window.innerWidth - document.documentElement.clientWidth + 'px'
    } else {      
      setTimeout(() => {
        headerRef.current.style.right = ''
      }, 300)
    }
  }, [activeModal])

  return (
    <header className={cn(styles.el, { [styles.active]: activeMobile })} ref={headerRef}>
      <MobileMenu className={styles.mobile} onLinkClick={ctx.toggleMobileMenu} />
      <div className={styles.panel} id='header'>
        <div className='container'>
          <div className={styles.row}>
            <Link href='/' onClick={ctx.toggleMobileMenu}>
              <Logo className={styles.logo} />
              <LogoLg className={styles.logoDesktop} />
            </Link>
            <button className={styles.burger} onClick={ctx.toggleMobileMenu}></button>
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
