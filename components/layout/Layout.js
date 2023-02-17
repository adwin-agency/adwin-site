import { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import styles from './Layout.module.scss'
import Modal from './Modal'
import AppContext from '../../context/AppContext'

export default function Layout({ children }) {
  const [activeModal, setActiveModal] = useState(false)

  function toggleModal() {
    setActiveModal(!activeModal)
  }

  return (
    <AppContext.Provider value={{
      activeModal: activeModal,
      toggleModal: toggleModal
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
