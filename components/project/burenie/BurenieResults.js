import cn from 'classnames'
import media from '/data/media'
import styles from './BurenieResults.module.scss'

export default function BurenieResults() {
  return (
    <section className={styles.el}>
      <div className='container'>
        <div className='row'>
          <div className='col col-6 col-lg-2'>
            <h2 className='h2'>Результаты</h2>
          </div>
          <div className='col col-6 col-lg-4'>
            <p className={cn('txt-m', styles.desc)}>Пусть количество обращений снизилось, но:</p>
            <ul className={cn('txt-m', styles.list)}>
              <li className={styles.listItem}>Обращения стали более целевые</li>
              <li className={styles.listItem}>Значительно выросло количество выездов на объекты</li>
              <li className={styles.listItem}>Продаж стало в 2 раза больше</li>
            </ul>
          </div>
          <div className='col col-6 col-lg-3'>
            <picture className={styles.diagram}>
              <source media={`(min-width: ${media.lg}px)`} srcSet='/images/projects/burenie/results-lg.png' />
              <img className={styles.picImage} src='/images/projects/burenie/results.png' alt='' />
            </picture>
          </div>
          <div className='col col-6 col-lg-3'>
            <picture className={styles.table}>
              <source media={`(min-width: ${media.lg}px)`} srcSet='/images/projects/burenie/results-table-lg.png' />
              <img className={styles.picImage} src='/images/projects/burenie/results-table.png' alt='' />
            </picture>
          </div>
        </div>
      </div>
    </section>
  )
}
