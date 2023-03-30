import cn from 'classnames'
import Geolines5 from '/icons/burenie-site/geolines-5.svg'
import Geolines6 from '/icons/burenie-site/geolines-6.svg'
import Geolines7 from '/icons/burenie-site/geolines-7.svg'
import PlusMin2 from '/icons/burenie-site/plus-min-2.svg'
import media from '/data/media'
import styles from './BurenieSiteVisual.module.scss'

export default function BurenieSiteVisual() {
  return (
    <section className={styles.el}>
      <div className={styles.top}>
        <Geolines5 className={styles.topLinesMobile} />
        <Geolines6 className={styles.topLinesDesktop} />
        <PlusMin2 className={styles.topPlusMin} />
        <div className={styles.topMain}>
          <div className='container'>
            <div className='row'>
              <div className='col col-6 col-lg-3'>
                <img className={styles.topImage} src='/images/projects/burenie-site/visual-set.png' alt='' />
              </div>
              <div className='col col-6 col-lg-3'>
                <p className={cn('quote-m', styles.type)}>Шаг 3</p>
                <h2 className={cn('h2', styles.heading)}>Визуализация</h2>
                <p className={cn('quote-m', styles.subheading)}>Кто в ответе: ui-дизайнер</p>
                <p className={cn('txt-m', styles.desc)}>Так наша команда начала работать над визуальной концепцией проекта. Её построили отталкиваясь от тех эмоций/ассоциаций, которые должен вызывать у пользователя разрабатываемый продукт. <br /><br />Благодаря глубокой вовлечённости клиента в проект, постоянному обменами референсами, мы очень скоро определили как будут выглядеть основные элементы. </p>
                <img className={styles.colorsImage} src='/images/projects/burenie-site/visual-colors.png' alt='' />
              </div>
              <div className='col col-6 col-lg-3'>
                <img className={styles.layersImage} src='/images/projects/burenie-site/visual-layers.png' alt='' />
              </div>
              <div className='col col-6 col-lg-3'>
                <img className={styles.fontsImage} src='/images/projects/burenie-site/visual-fonts.png' alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.design}>
        <Geolines7 className={styles.designLines} />
        <div className='container'>
          <div className='row'>
            <div className='col col-6 col-lg-3'>
              <h3 className='h3'>Готовим посадки</h3>
              <p className={cn('txt-m', styles.designDesc)}>Вот так легко и с вдохновением, вооружившись референсами и аналитикой, мы перешли к визуализации ключевых страниц. Ключевыми страницами в этом проекте были те, на которые предполагалось вести рекламу: страницы услуг и главная, т.к. на ней предполагалась оригинальная анимация и одна из интерактивных карт. <br /><br />Мы слукавим, если скажем, что всё вышло с первого раза, но благодаря слаженной работе команды, спустя несколько дней наша визуальная концепция приобрела абсолютно реальный визуал.</p>
            </div>
            <div className='col col-6 col-lg-1'></div>
            <div className='col col-6 col-lg-1'>
              <p className={cn('txt-m', styles.designNote)}>
                <span>4</span>
                основные посадочные страницы
              </p>
            </div>
            <div className='col col-6 col-lg-1'></div>
            <div className='col col-6 col-lg-2'></div>
            <div className='col col-6 col-lg-4'>
              <picture className={styles.designPicture}>
                <source media={`(min-width: ${media.lg}px)`} srcSet='/images/projects/burenie-site/visual-design-lg.png' />
                <img className={styles.picImage} src='/images/projects/burenie-site/visual-design.png' alt='' />
              </picture>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.adaptive}>
        <div className='container'>
          <div className='row'>
            <div className='col col-6 col-lg-4'></div>
            <div className='col col-6 col-lg-2'>
              <p className={cn('quote-m', styles.adaptiveDesc)}>В процессе работ макеты усложнялись деталями и благодаря асимметричной сетке, контрастному сочетанию типографики и графики, приобрели необходимую драматичность, увлекающую пользователя и заставляющую изучать страницу до самого конца.</p>
            </div>
            <div className='col col-6'>
              <picture className={styles.adaptivePicture}>
                <source media={`(min-width: ${media.lg}px)`} srcSet='/images/projects/burenie-site/adaptive-screens-lg.png' />
                <img className={styles.picImage} src='/images/projects/burenie-site/adaptive-screens.png' alt='' />
              </picture>
            </div>
            <div className='col col-6 col-lg-2'>
              <div className={styles.adaptiveInfo}>
                <h3 className='h3'>Адаптив</h3>
                <p className={cn('txt-m', styles.adaptiveText)}>Нами были разработаны макеты для нескольких разрешений, а именно: 1600, 1280, 960, 768 и 320. Такая проработка упрощает жизнь верстальщику и повышает шансы для проекта выглядеть идеально на любом девайсе</p>
              </div>
            </div>
            <div className='col col-6 col-lg-4'>
              <picture className={styles.mobilePicture}>
                <source media={`(min-width: ${media.lg}px)`} srcSet='/images/projects/burenie-site/adaptive-mobile-lg.png' />
                <img className={styles.picImage} src='/images/projects/burenie-site/adaptive-mobile.png' alt='' />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
