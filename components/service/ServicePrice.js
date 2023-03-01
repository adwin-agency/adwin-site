import cn from 'classnames'
import useAnim from '../../helpers/useAnim'
import styles from './ServicePrice.module.scss'

export default function ServicePrice() {
  const { anim, animRef } = useAnim()

  return (
    <section className={cn(styles.el, { [styles.anim]: anim })} id='price' ref={animRef}>
      <h2 className={cn('h2', styles.heading)}>Стоимость</h2>
      <div className={styles.main}>
        <p className={styles.desc}>Каждый проект уникален и расчёт стоимости производится индивидуально.Заполните форму ниже и мы свяжемся с вами для более подробной консультации и расчёта стоимости</p>
        <p className={styles.price}>от 100 500 ₽</p>
      </div>
    </section>
  )
}
