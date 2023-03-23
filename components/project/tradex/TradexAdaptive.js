import cn from 'classnames'
import PathMobile from '/icons/tradex/path-mobile.svg'
import PathDesktop from '/icons/tradex/path-desktop.svg'
import PathLg from '/icons/tradex/path-lg.svg'
import media from '/data/media'
import styles from './TradexAdaptive.module.scss'

export default function TradexAdaptive() {
  return (
    <section className={styles.el}>
      <div className='container'>
        <div className={styles.main}>
          <PathMobile className={styles.pathMobile} />
          <PathDesktop className={styles.pathDesktop} />
          <div className='row'>
            <div className='col col-6 col-lg-4'>
              <h2 className={cn('h3', styles.heading)}>Адаптив</h2>
              <picture className={styles.mediaLg}>
                <source media={`(min-width: ${media.lg}px)`} srcSet='/images/projects/tradex/adaptive-1440.png' />
                <img className={styles.picImage} src='/' alt='' />
              </picture>
            </div>
            <div className='col col-6 col-lg-2'>
              <picture className={styles.mediaMdTop}>
                <source media={`(min-width: ${media.lg}px)`} srcSet='/images/projects/tradex/adaptive-960-top.png' />
                <img className={styles.picImage} src='/' alt='' />
              </picture>
              <picture className={styles.mediaMdBottom}>
                <source media={`(min-width: ${media.lg}px)`} srcSet='/images/projects/tradex/adaptive-960-bottom.png' />
                <img className={styles.picImage} src='/' alt='' />
              </picture>
            </div>
            <div className='col col-6 col-lg-2'>
              <picture className={styles.mediaSmLeft}>
                <source media={`(min-width: ${media.lg}px)`} srcSet='/images/projects/tradex/adaptive-768-left.png' />
                <img className={styles.picImage} src='/' alt='' />
              </picture>
            </div>
            <div className='col col-6 col-lg-2'>
              <picture className={styles.mediaSmRight}>
                <source media={`(min-width: ${media.lg}px)`} srcSet='/images/projects/tradex/adaptive-768-right.png' />
                <img className={styles.picImage} src='/' alt='' />
              </picture>
            </div>
            <div className='col col-6 col-lg-1'></div>
            <div className='col col-6 col-lg-1'>
              <p className={cn('txt-m', styles.desc)}>В мобильной версии приложения анимацию мы не используем и минимизируем количество графики, для того чтобы лучше уместить необходимую информацию и подать её более читаемой</p>
            </div>
          </div>
        </div>
        <div className={styles.box}>
          <PathLg className={styles.pathLg} />
          <picture className={styles.screens}>
            <source media={`(min-width: ${media.lg}px)`} srcSet='/images/projects/tradex/adaptive-screens.png' />
            <img className={styles.picImage} src='/images/projects/tradex/adaptive-screen.png' alt='' />
          </picture>
        </div>
      </div>
      <picture className={styles.bg}>
        <source media={`(min-width: ${media.lg}px)`} srcSet='/images/projects/tradex/adaptive-bg-lg.png' />
        <img className={styles.picImage} src='/images/projects/tradex/adaptive-bg.png' alt='' />
      </picture>
    </section>
  )
}
