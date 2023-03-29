import cn from 'classnames'
import Logo from '/icons/burenie-site/logo.svg'
import Geolines from '/icons/burenie-site/geolines.svg'
import media from '/data/media'
import styles from './BurenieSiteIntro.module.scss'

export default function BurenieSiteIntro() {
  return (
    <section className={styles.el}>
      <div className={styles.top}>
        <div className='container'>
          <Logo className={styles.logo} />
          <p className={cn('txt-m', styles.topDesc)}>Бурение скважин на воду</p>
        </div>
        <picture className={styles.topPicture}>
          <source media={`(min-width: ${media.lg}px)`} srcSet='/images/projects/burenie-site/intro-screens-lg.png' />
          <img className={styles.picImage} src='/images/projects/burenie-site/intro-screens.png' alt='' />
        </picture>
      </div>
      <div className={styles.main}>
        <Geolines className={styles.lines} />
        <div className='container'>
          <div className='row'>
            <div className={'col col-6 col-lg-3'}>
              <p className={cn('quote-m', styles.type)}>Контекст разработки</p>
              <h3 className={cn('h3', styles.heading)}>Вот ведь незадача</h3>
              <p className={cn('quote-m', styles.desc)}>Мы живём в век визуального контента, это объясняет почему за последние 10 лет вложения компаний в маркетинг, создание коммуникационных стратегий и сильного визуального образа выросли на 783,59%.</p>
              <p className={cn('txt-m', styles.text)}>Компании, которые не уделяют достаточно внимания понятности в подаче контента, теряют 2 клиентов из 3. Вдумайтесь, 2/3 потенциально ваших клиентов уходят к конкурентам. В долгосрочной перспективе в условиях нестабильной экономики всё плохо: деньги уплывают, специалисты уходят, гречка дорожает.</p>
            </div>
            <div className={cn('col col-6 col-lg-2', styles.sideCol)}>
              <div className={styles.need}>
                <p className={cn('quote-m', styles.needTitle)}>Потребность</p>
                <ul className={cn('txt-m', styles.needList)}>
                  <li className={styles.needItem}>понятный продающий сайт</li>
                  <li className={styles.needItem}>прирост количества заявок</li>
                  <li className={styles.needItem}>уменьшение % отказов с сайта</li>
                </ul>
              </div>
            </div>
            <div className='col col-6 col-lg-1'></div>
          </div>
        </div>
      </div>
    </section>
  )
}
