import cn from 'classnames'
import media from '/data/media'
import styles from './BurenieSiteProto.module.scss'

export default function BurenieSiteProto() {
  return (
    <section className={styles.el}>
      <div className='container'>
        <div className='row'>
          <div className='col col-6 col-lg-2'>
            <p className={cn('quote-m', styles.type)}>Шаг 2</p>
            <h2 className={cn('h2', styles.heading)}>Прототипирование</h2>
            <p className={cn('quote-m', styles.subheading)}>Кто в ответе: ux-дизайнер</p>
            <p className={cn('txt-m', styles.desc)}>Что такое прототипирование? Это современная телепатия: предсказать поведение пользователя на сайте, намёками  проложить ему верный путь до целевого действия, вот чем занималась наша прототипист.</p>
          </div>
          <div className='col col-6 col-lg-1'></div>
          <div className='col col-6 col-lg-3'>
            <div className={styles.map}>
              <div className={styles.info}>
                <p className={styles.num}>1.</p>
                <p className={cn('extra-m', styles.text)}>Мы начали проектирование с мэппинга сайта. Этот приём позволяет наглядно продемонстрировать основные страницы, их наполнение и взаимосвязи.</p>
              </div>
              <picture className={styles.mapPicture}>
                <source media={`(min-width: ${media.lg}px)`} srcSet='/images/projects/burenie-site/site-map-lg.png' />
                <img className={styles.picImage} src='/images/projects/burenie-site/site-map.png' alt='' />
              </picture>
            </div>
          </div>
          <div className='col col-6 col-lg-3'>
            <div className={styles.mockup}>
              <div className={styles.info}>
                <p className={styles.num}>2.</p>
                <p className={cn('extra-m', styles.text)}>На основе анализа выстроили понятное изложение довольно затейливой тематики: последовательно отвечая на вопросы, пользователя, чтобы вывести их на достижение целевого действия.</p>
              </div>
              <picture className={styles.mockupPicture}>
                <source media={`(min-width: ${media.lg}px)`} srcSet='/images/projects/burenie-site/mockup-lg.png' />
                <img className={styles.picImage} src='/images/projects/burenie-site/mockup.png' alt='' />
              </picture>
            </div>
          </div>
          <div className='col col-6 col-lg-3'>
            <div className={styles.fill}>
              <div className={styles.info}>
                <p className={styles.num}>3.</p>
                <p className={cn('extra-m', styles.text)}>Поняв, что и где будет располагаться, взялись за наполнение прототипа актуальным контентом: продающие заголовки, конкурентные преимущества и написанием текстов.</p>
              </div>
              <div className={styles.fillImages}>
                <img className={styles.fillImage} src='/images/projects/burenie-site/content-placeholder.png' alt='' />
                <img className={styles.fillImage} src='/images/projects/burenie-site/content-preview.png' alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
