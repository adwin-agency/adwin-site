import cn from 'classnames'
import ArrowIcon from '/icons/arrow.svg'
import styles from './CalcOffer.module.scss'

export default function CalcOffer({className}) {
  return (
    <section className={cn(styles.el, className)}>
      <div className="container">
        <div className={styles.row}>
          <p className={styles.title}>Хотите, <br />рассчитаем ваш проект?</p>
          <ArrowIcon className={styles.icon} />
        </div>
      </div>
    </section>
  )
}
