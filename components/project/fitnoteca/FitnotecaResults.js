import cn from 'classnames'
import media from '/data/media'
import styles from './FitnotecaResults.module.scss'

export default function FitnotecaResults() {
  return (
    <section className={styles.el}>
      <div className='container'>
        <div className='row'>
          <div className='col col-6 col-lg-2'>
            <h2 className='h2'>Результаты</h2>
          </div>
          <div className='col col-6 col-lg-3'>
            <ul className={cn('txt-quote-m', styles.list)}>
              <li className={styles.listItem}>Тест проводился с 14.09.2020 по 25.10.2020</li>
              <li className={styles.listItem}>Работа с обучаемыми сегментами Я.Аудиторий</li>
              <li className={styles.listItem}>Таргетинг по клиентам смежного бизнеса</li>
              <li className={styles.listItem}>Прирост новых клиентов на 13%</li>
              <li className={styles.listItem}>Стоимость заявки снизилась на 50%</li>
            </ul>
            <picture className={styles.table}>
              <source media={`(min-width: ${media.lg}px)`} srcSet='/images/projects/fitnoteca/results-table-lg.png' />
              <img className={styles.picImage} src='/images/projects/fitnoteca/results-table.png' alt='' />
            </picture>
          </div>
          <div className='col col-6 col-lg-1'></div>
        </div>
      </div>
    </section>
  )
}
