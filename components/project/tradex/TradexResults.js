import cn from 'classnames'
import styles from './TradexResults.module.scss'

export default function TradexResults() {
  return (
    <section className={styles.el}>
      <div className='container'>
        <div className='row'>
          <div className='col col-6 col-lg-2'>
            <h2 className='h2'>Результаты</h2>
          </div>
          <div className='col col-6 col-lg-4'>
            <p className={cn('txt-quote-m', styles.desc)}>Как итог мы можем сформулировать то, что судя по притоку новых звонков клиенту после запуска сайта - мы выделили и решили верные задачи. </p>
            <ul className={styles.list}>
              <li className={styles.item}>
                <p className={styles.itemTitle}>Сочно</p>
                <p className={styles.itemDesc}>А значит привлекает внимание, клиент не уйдет к конкурентам. При помощи акцентов и анимации мы расставили приоритеты и указали на преимущества</p>
              </li>
              <li className={styles.item}>
                <p className={styles.itemTitle}>В трендах</p>
                <p className={styles.itemDesc}>Клиент не скоро захочет сделать редизайн, что актуально на современном рынке</p>
              </li>
              <li className={styles.item}>
                <p className={styles.itemTitle}>Конверсионно</p>
                <p className={styles.itemDesc}>Наши аналитики получили данные по сайту и хоть сравнить нам не с чем, старых данных нет, но цифры не могут не радовать клиента. Это видно по его отзыву.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
