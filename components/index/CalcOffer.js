import { useContext } from 'react'
import cn from 'classnames'
import ArrowIcon from '/icons/arrow.svg'
import AppContext from '../../context/AppContext'
import styles from './CalcOffer.module.scss'

export default function CalcOffer({className}) {
  const ctx = useContext(AppContext)

  return (
    <section className={cn(styles.el, className)}>
      <div className='container'>
        <div className={styles.row} onClick={ctx.toggleModal}>
          <p className={styles.title}>Хотите, <br />рассчитаем ваш проект?</p>
          <ArrowIcon className={styles.icon} />
        </div>
      </div>
    </section>
  )
}
