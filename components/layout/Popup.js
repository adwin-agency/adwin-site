import { useContext } from 'react'
import cn from 'classnames'
import AppContext from '../../context/AppContext'
import SendSm from '/icons/send-sm.svg'
import styles from './Popup.module.scss'

export default function Popup() {
  const ctx = useContext(AppContext)

  return (
    <div className={cn(styles.el, { [styles.active]: ctx.activePopup })}>
      <SendSm className={styles.icon} />
      <p className={styles.title}>Заявка отправлена. <br />Менеджер перезвонит вам в ближайшее время</p>
      <button className={styles.close} onClick={ctx.closePopup}></button>
    </div>
  )
}
