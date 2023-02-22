import { useContext, useEffect, useRef, useState } from 'react'
import cn from 'classnames'
import Link from 'next/link'
import AppContext from '../../context/AppContext'
import media from '/data/media'
import MobileMenu from './MobileMenu'
import Button from '../ui/Button'
import Logo from '/icons/logo.svg'
import LogoLg from '/icons/logo-lg.svg'
import styles from './Header.module.scss'

export default function Header() {
  const [scrolling, setScrolling] = useState(true)

  const headerRef = useRef()

  const ctx = useContext(AppContext)
  const { activeModal, closingModal } = ctx

  useEffect(() => {
    if (closingModal) {
      setTimeout(() => {
        headerRef.current.style.right = ''
      }, 300)
    } else if (activeModal) {
      headerRef.current.style.right = window.innerWidth - document.documentElement.clientWidth + 'px'
    }
  }, [activeModal, closingModal])

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > media.lg) {
        ctx.closeMobileMenu()
      }      
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    function handleScroll() {
      if (window.innerWidth > media.lg) {
        setScrolling(window.scrollY > 0)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={cn(styles.el, { [styles.active]: ctx.activeMobileMenu })} ref={headerRef}>
      <MobileMenu className={styles.mobile} onLinkClick={ctx.closeMobileMenu} />
      <div className={styles.panel} id='header'>
        <div className='container'>
          <div className={styles.row}>
            <Link href='/' onClick={ctx.closeMobileMenu}>
              <Logo className={styles.logo} />
              <LogoLg className={styles.logoDesktop} />
            </Link>
            <button className={styles.burger} onClick={ctx.toggleMobileMenu}></button>
            <div className={cn(styles.menu, { [styles.scroll]: scrolling })}>
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
