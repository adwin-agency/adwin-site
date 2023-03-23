import cn from 'classnames'
import Name from '/icons/tradex/name.svg'
import media from '/data/media'
import styles from './TradexDesign.module.scss'

export default function TradexDesign() {
  return (
    <section className={styles.el}>
      <div className='container'>
        <div className='row'>
          <div className={cn('col col-6 col-lg-2', styles.sideCol)}>
            <div className={styles.side}>
              <Name className={styles.name} />
              <p className={cn('txt-m', styles.desc)}>На лендинге хорошо проработаны моменты микровзаимодействий. Анимация эмоционально усиливает каждое действие и реагирует на действие. При отправке сообщений мы получаем ответ, что сообщения находятся в обработке.</p>
              <img className={styles.mobileTop} src='/images/projects/tradex/design-mobile.png' alt='' />
              <picture className={styles.screensPicture}>
                <source media={`(min-width: ${media.lg}px)`} srcSet='/images/projects/tradex/design-screens-lg.png' />
                <img className={styles.screensImage} src='/images/projects/tradex/design-screens.png' alt='' />
              </picture>
              <img className={styles.success} src='/images/projects/tradex/design-success.png' alt='' />
              <picture className={styles.planePicture}>
                <source media={`(min-width: ${media.lg}px)`} srcSet='/images/projects/tradex/design-plane.png' />
                <img className={styles.planeImage} src='/' alt='' />
              </picture>
              <p className={cn('txt-m', styles.note)}>Помимо поп-апов при отправке сообщений, многие моменты усилены иконками. Это тоже один из этапов микровзаимодействий с клиентом. Причем иконки оень аккуратно подчеркивают сказанное, а не отвлекают от сути. Это важно.</p>
            </div>
          </div>
          <div className='col col-6 col-lg-4'>
            <picture className={styles.desktopPicture}>
              <source media={`(min-width: ${media.lg}px)`} srcSet='/images/projects/tradex/design-desktop.png' />
              <img className={styles.desktopImage} src='/' alt='' />
            </picture>
          </div>
        </div>
      </div>
    </section>
  )
}
