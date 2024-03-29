  import { useEffect, useState } from 'react'
  import AppContext from '../../context/AppContext'
  import Header from './Header'
  import Footer from './Footer'
  import Modal from './Modal'
  import Popup from './Popup'
  import styles from './Layout.module.scss'
import useUTMParams from '../../helpers/useUTMParams'

  export default function Layout({ children }) {
    const [activeMobileMenu, setActiveMobileMenu] = useState(false)
    const [activeModal, setActiveModal] = useState(null)
    const [closingModal, setClosingModal] = useState(false)
    const [lockedScroll, setLockedScroll] = useState(false)
    const [activePopup, setActivePopup] = useState(false)
    const [popupTimer, setPopupTimer] = useState(null)
    useUTMParams();

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
      clearTimeout(popupTimer)
      setActivePopup(true)
      setPopupTimer(setTimeout(closePopup, 10000))
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

      if ((!activeMobileMenu || closingModal) && lockedScroll) {
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
        closePopup,
      }}>
        <Header />
        <div className={styles.main}>
          {children}
        </div>
        <Footer className={styles.footer} />
        <Modal />
        <Popup />
      </AppContext.Provider>
    )
  }
