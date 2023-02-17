import { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import styles from './Layout.module.scss'
import Modal from './Modal'
import AppContext from '../../context/AppContext'

export default function Layout({ children }) {
  const [activeMobileMenu, setActiveMobileMenu] = useState(false)
  const [activeModal, setActiveModal] = useState(false)
  const [lockedScroll, setLockedScroll] = useState(false)

  function toggleMobileMenu() {
    setActiveMobileMenu(!activeMobileMenu)
  }

  function toggleModal() {
    setActiveModal(!activeModal)
  }

  useEffect(() => {
    if ((activeMobileMenu || activeModal) && !lockedScroll) {
      document.body.style.paddingRight = window.innerWidth - document.documentElement.clientWidth + 'px'
      document.body.style.overflow = 'hidden'
      setLockedScroll(true)
    }

    if (!activeMobileMenu && !activeModal && lockedScroll) {
      setTimeout(() => {
        document.body.style.paddingRight = ''
        document.body.style.overflow = ''
        setLockedScroll(false)
      }, 300)
    }
  }, [activeMobileMenu, activeModal])

  return (
    <AppContext.Provider value={{
      activeMobileMenu,
      toggleMobileMenu,
      activeModal,
      toggleModal
    }}>
      <Header />
      <div className={styles.main}>
        {children}
      </div>
      <Footer />
      <Modal />
    </AppContext.Provider>
  )
}
