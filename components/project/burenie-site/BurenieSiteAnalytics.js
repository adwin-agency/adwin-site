import cn from 'classnames'
import Geolines4 from '/icons/burenie-site/geolines-4.svg'
import media from '/data/media'
import styles from './BurenieSiteAnalytics.module.scss'

export default function BurenieSiteAnalytics() {
  return (
    <section className={styles.el}>
      <Geolines4 className={styles.lines} />
      <div className='container'>
        <div className={styles.top}>
          <div className='row'>
            <div className='col col-6 col-lg-2'>
              <p className={cn('quote-m', styles.type)}>Шаг 1</p>
              <h2 className={cn('h2', styles.heading)}>Аналитика</h2>
              <p className={cn('quote-m', styles.subheading)}>Кто в ответе: маркетолог, ux-дизайнер</p>
            </div>
            <div className='col col-6 col-lg-3'>
              <p className={cn('txt-m', styles.desc)}>Проект такой специфической тематики стал настоящим вызовом для нашего прототиписта. Бурение скважин в разном грунте, их разновидности, необходимое оборудование и документация, особенности процесса в зависимости от локации -- голова кругом. Как понять, вашу ж мать? </p>
            </div>
            <div className='col col-6 col-lg-1'></div>
          </div>
        </div>
        <div className={styles.graphics}>
          <p className={styles.title}>Изучение ЦА</p>
          <div className={styles.graphicsItems}>
            <div className={cn(styles.graphicsItem, styles.left)}>
              <p className={cn('txt-quote-m', styles.graphicsName)}>Пол</p>
              <img className={styles.graphicsDiagram} src='/images/projects/burenie-site/diagram-gen.png' alt='' />
            </div>
            <div className={cn(styles.graphicsItem, styles.right)}>
              <p className={cn('txt-quote-m', styles.graphicsName)}>Возраст</p>
              <img className={styles.graphicsDiagram} src='/images/projects/burenie-site/diagram-age.png' alt='' />
            </div>
            <div className={cn(styles.graphicsItem, styles.columns)}>
              <p className={cn('txt-quote-m', styles.graphicsName)}>Долгосрочные интересы</p>
              <picture className={styles.graphicsColumns}>
                <source media={`(min-width: ${media.lg}px)`} srcSet='/images/projects/burenie-site/columns-interest-lg.png' />
                <img className={styles.picImage} src='/images/projects/burenie-site/columns-interest.png' alt='' />
              </picture>
            </div>
          </div>
        </div>
        <div className={styles.persons}>
          <div className='row'>
            <div className='col col-6 col-lg-2'>
              <p className={styles.title}>Персоны</p>
              <p className={cn('txt-m', styles.text)}>Итогом изучения ЦА становится создание персон, т.е. типовых пользователей, чей образ представляет усреднённые значения всех посетителей сайта. <br /><br />Этот нехитрый приём очень помогает в разработке структуры сайта и паттернов поведения.</p>
            </div>
            <div className='col col-6 col-lg-4'>
              <div className={styles.personsImages}>
                <img className={styles.personsImage} src='/images/projects/burenie-site/review.png' alt='' />
                <img className={styles.personsImage} src='/images/projects/burenie-site/review.png' alt='' />
                <img className={styles.personsImage} src='/images/projects/burenie-site/review.png' alt='' />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.studying}>
          <div className='row'>
            <div className='col col-6 col-lg-4'>
              <img className={styles.studyingImage} src='/images/projects/burenie-site/laptop.png' alt='' />
            </div>
            <div className='col col-6 col-lg-2'>
              <div className={styles.studyingContent}>
                <p className={styles.title}>Изучение конкурентов</p>
                <p className={cn('txt-m', styles.text)}>&lsquo;Знай врага в лицо и умей от него отстроиться&rsquo; - вот наш девиз на этом этапе. Наша задача здраво оценить сильные и слабые стороны компаний на рынке, оценить их стратегии и придумать, как  выгодно подать материал по-другому.</p>
                <div className={styles.stats}>
                  <div className={styles.stat}>
                    <p className={styles.statNum}>&lt;15%</p>
                    <p className={cn('extra-m', styles.statText)}>конкурентов в сфере обладают собственным автопарком</p>
                  </div>
                  <div className={styles.stat}>
                    <p className={styles.statNum}>82%</p>
                    <p className={cn('extra-m', styles.statText)}>сайтов не обновлялись более 6 месяцев</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}
