import cn from 'classnames'
import Geolines8 from '/icons/burenie-site/geolines-8.svg'
import Geolines9 from '/icons/burenie-site/geolines-9.svg'
import styles from './BurenieSiteLaunch.module.scss'

export default function BurenieSiteLaunch() {
  return (
    <section className={styles.el}>
      <div className='container'>
        <div className={styles.top}>
          <div className='row'>
            <div className='col col-6 col-lg-3'>
              <p className={cn('quote-m', styles.type)}>Шаг 5</p>
              <h2 className={cn('h2', styles.heading)}>Запуск и корректировки</h2>
              <p className={cn('quote-m', styles.subheading)}>Кто в ответе: специалисты по контекстной рекламе, маркетолог, ui-дизайнер, программист</p>
            </div>
            <div className='col col-6 col-lg-3'>
              <p className={cn('txt-m', styles.desc)}>Популяризаторы смысла и логики в проектах, они же специалисты по контекстной рекламе, мысленно переглянувшись с маркетологами, на основе первых результатов рекламы готовы дать свой фидбэк. <br /><br />Это один из самых волнительных этапов разработки, потому что именно в этот момент становится понятно, какие именно из наших предположений оказались правдивыми, кто был прав Ванга или мы в использовании выбранной стратегии и вот, у нас есть ряд корректировок для оптимизации страниц под рекламу. </p>
            </div>
          </div>
        </div>
        <div className={cn(styles.changes, styles.gallery)}>
          <Geolines8 className={styles.linesMobile} />
          <Geolines9 className={styles.linesDesktop} />
          <p className={cn('quote-m', styles.change, styles.first)}>Добавлен блок-галерея о собственном автопарке: фото и описание каждой единицы техники</p>
          <img className={styles.changesImage} src='/images/projects/burenie-site/gs-drilling.png' alt='' />
          <p className={cn('quote-m', styles.change)}>Расширен блок с преимуществами в начале страницы: сделали описание более понятным</p>
          <p className={cn('quote-m', styles.change)}>Добавлен сквозной блок с часто задаваемыми вопросами на основные страницы</p>
        </div>
        <div className={cn(styles.changes, styles.map)}>
          <p className={cn('quote-m', styles.change)}>Была доработана страница с картой выполненных работ и добавлена галерея работ</p>
          <img className={styles.changesImage} src='/images/projects/burenie-site/gs-map.png' alt='' />
          <p className={cn('quote-m', styles.change)}>Страница &lsquo;Бурение скважин&rsquo; (основная посадочная страница) перенесена на адрес bureniespb.ru</p>
        </div>
      </div>
    </section>
  )
}
