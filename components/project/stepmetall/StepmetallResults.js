import cn from 'classnames'
import Logo from '/icons/stepmetall/logo.svg'
import styles from './StepmetallResults.module.scss'

export default function StepmetallResults() {
  return (
    <section className={styles.el}>
      <Logo className={styles.logo} />
      <div className="container">
        <div className="row">
          <div className="col col-6 col-lg-2">
            <h2 className={cn('h2', styles.heading)}>Результаты</h2>
          </div>
          <div className="col col-6 col-lg-4">
            <div className="row">
              <div className="col col-2 col-lg-6"></div>
              <div className="col col-4 col-lg-6">
                <ol className={styles.list}>
                  <li className={styles.item}>
                    <p className={styles.num}>1.</p>
                    <p className={cn('txt-quote', styles.text)}>Сайт получился современным и стильным, и, не смотря на сложную специфику, еще и очень простым и понятным</p>
                  </li>
                  <li className={styles.item}>
                    <p className={styles.num}>2.</p>
                    <p className={cn('txt-quote', styles.text)}>Раздел спец. стали выведены в боковое меню. Таким образом на любой странице сайта клиент знает, что эта функция есть. Ключевые клиенты приходят именно за этим.</p>
                  </li>
                  <li className={styles.item}>
                    <p className={styles.num}>3.</p>
                    <p className={cn('txt-quote', styles.text)}>Реализована функция с корзиной, даже без цен и оформлении заказа в привычном нам виде. </p>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
