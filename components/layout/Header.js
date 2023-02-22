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
  const [fixedHeader, setFixedHeader] = useState(false)
  const [activeHeader, setActiveHeader] = useState(false)

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

    function handleScroll() {
      if (window.innerWidth > media.lg) {
        setFixedHeader(window.scrollY > window.innerHeight / 2)
        setActiveHeader(window.scrollY > window.innerHeight)
      }
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('resize', handleScroll)
    }
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
            <div className={cn(styles.menu, { [styles.fixed]: fixedHeader, [styles.active]: activeHeader })}>
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
