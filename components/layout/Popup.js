import { useContext, useEffect, useRef } from 'react'
import cn from 'classnames'
import AppContext from '../../context/AppContext'
import SendSm from '/icons/send-sm.svg'
import styles from './Popup.module.scss'

export default function Popup() {
  const popupRef = useRef()

  const ctx = useContext(AppContext)
  const { activeModal, closingModal } = ctx

  useEffect(() => {
    if (closingModal) {
      setTimeout(() => {
        popupRef.current.style.right = ''
      }, 300)
    } else if (activeModal) {
      popupRef.current.style.right = window.innerWidth - document.documentElement.clientWidth + 'px'
    }
  }, [activeModal, closingModal])

  return (
    <div className={cn(styles.el, { [styles.active]: ctx.activePopup })} ref={popupRef}>
      <SendSm className={styles.icon} />
      <p className={styles.title}>Заявка отправлена. <br />Менеджер перезвонит вам в ближайшее время</p>
      <button className={styles.close} onClick={ctx.closePopup}></button>
    </div>
  )
}
