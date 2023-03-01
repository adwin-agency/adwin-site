import cn from 'classnames'
import Ampersand from '/icons/ampersand.svg'
import styles from './Intro.module.scss'
import useAnim from '../../helpers/useAnim'

export default function Intro() {
  const { anim, animRef } = useAnim()

  return (
    <section className={cn(styles.el, { [styles.anim]: anim })} ref={animRef}>
      <div className={styles.main}>
        <span className={styles.line1}></span>
        <span className={styles.line2}></span>
        <span className={styles.line3}></span>
        <span className={styles.line4}></span>
        <div className='container'>
          <h1 className={cn('h1', styles.heading)}>
            <span className={styles.hline1}>Создаём и <br />запускаем</span>
            <span className={styles.circles}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </span>
            <span className={styles.hline2}>
              <span className={styles.colorful}>успешную рекламу </span>
            </span>
            <Ampersand className={styles.symbol} />
            <span className={styles.hline3}>делаем </span>
            <span className={styles.hline4}>
              <span className={styles.colorful}>продающие сайты</span>
            </span>
          </h1>
        </div>
      </div>
      <div className={styles.services}>
        <p className={styles.running}>/ контекст // комплекс // аналитика // лендинги // авито // презентации // брендинг // корпоративные сайты // интернет-магазины // контекст // комплекс // аналитика // лендинги // авито // презентации // брендинг // корпоративные сайты // интернет-магазины // контекст // комплекс // аналитика // лендинги // авито // презентации // брендинг // корпоративные сайты // интернет-магазины /</p>
        <p className={styles.running}>/ контекст // комплекс // аналитика // лендинги // авито // презентации // брендинг // корпоративные сайты // интернет-магазины // контекст // комплекс // аналитика // лендинги // авито // презентации // брендинг // корпоративные сайты // интернет-магазины // контекст // комплекс // аналитика // лендинги // авито // презентации // брендинг // корпоративные сайты // интернет-магазины /</p>
      </div>
    </section>
  )
}
