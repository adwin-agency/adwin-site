import { useEffect, useState } from 'react'
import AppContext from '../../context/AppContext'
import Header from './Header'
import Footer from './Footer'
import Modal from './Modal'
import Popup from './Popup'
import styles from './Layout.module.scss'

export default function Layout({ children }) {
  const [activeMobileMenu, setActiveMobileMenu] = useState(false)
  const [activeModal, setActiveModal] = useState(null)
  const [closingModal, setClosingModal] = useState(false)
  const [lockedScroll, setLockedScroll] = useState(false)
  const [activePopup, setActivePopup] = useState(false)

  function toggleMobileMenu() {
    setActiveMobileMenu(!activeMobileMenu)
  }

  function closeMobileMenu() {
    setActiveMobileMenu(false)
  }

  function openModal(id) {
    return function () {
      setActiveModal(id)
    }
  }

  function closeModal() {
    setClosingModal(true)

    setTimeout(() => {
      setClosingModal(false)
      setActiveModal(null)
    }, 300)
  }

  function openPopup() {
    if (activePopup) {
      setActivePopup(false)
      setTimeout(() => setActivePopup(true), 300)
    } else {
      setActivePopup(true)
    }
  }

  function closePopup() {
    setActivePopup(false)
  }

  useEffect(() => {
    if ((activeMobileMenu || activeModal) && !lockedScroll) {
      document.body.style.paddingRight = window.innerWidth - document.documentElement.clientWidth + 'px'
      document.body.style.overflow = 'hidden'
      setLockedScroll(true)
    }

    if (!activeMobileMenu && closingModal && lockedScroll) {
      setTimeout(() => {
        document.body.style.paddingRight = ''
        document.body.style.overflow = ''
        setLockedScroll(false)
      }, 300)
    }
  }, [activeMobileMenu, activeModal, closingModal])

  return (
    <AppContext.Provider value={{
      activeMobileMenu,
      toggleMobileMenu,
      closeMobileMenu,
      activeModal,
      closingModal,
      openModal,
      closeModal,
      activePopup,
      openPopup,
      closePopup
    }}>
      <Header />
      <div className={styles.main}>
        {children}
      </div>
      <Footer />
      <Modal />
      <Popup />
    </AppContext.Provider>
  )
}
