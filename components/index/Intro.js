import cn from 'classnames'
import Ampersand from '/icons/ampersand.svg'
import styles from './Intro.module.scss'

export default function Intro() {
  return (
    <section>
      <div className={styles.main}>
        <div className="container">
          <h1 className={styles.heading}>
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
      <div className={styles.line}>
        <p className={styles.running}>/ контекст // комплекс // аналитика // лендинги // авито // презентации // брендинг // корпоративные сайты // интернет-магазины // контекст // комплекс // аналитика // лендинги // авито // презентации // брендинг // корпоративные сайты // интернет-магазины /</p>
        <p className={styles.running}>/ контекст // комплекс // аналитика // лендинги // авито // презентации // брендинг // корпоративные сайты // интернет-магазины // контекст // комплекс // аналитика // лендинги // авито // презентации // брендинг // корпоративные сайты // интернет-магазины /</p>
      </div>
    </section>
  )
}
