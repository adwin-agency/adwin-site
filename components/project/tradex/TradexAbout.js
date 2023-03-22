import cn from 'classnames'
import Logo from '/icons/tradex/logo.svg'
import media from '/data/media'
import styles from './TradexAbout.module.scss'

export default function TradexAbout() {
  return (
    <section className={styles.el}>
      <picture className={styles.picture}>
        <source media={`(min-width: ${media.lg}px)`} srcSet='/images/projects/tradex/about-lg.png' />
        <img className={styles.image} src='/images/projects/tradex/about.png' alt='' />
      </picture>
      <div className={styles.lines}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className='container'>
        <Logo className={styles.logo} />
        <div className={styles.main}>
          <div className='row'>
            <div className='col col-6 col-lg-3'>
              <div className={styles.info}>
                <h2 className='h2'>О проекте</h2>
                <p className={cn('quote-m', styles.desc)}>Традекс - это компания, занимающаяся перевозкой сборных грузов по всему миру. <br /><br />Преимущество компании в ускоренном сервисе доставки из Китая. Генеральный агент #EcuWorldwide в России.</p>
              </div>
            </div>
            <div className='col col-6 col-lg-3'>
              <div className={styles.task}>
                <h3 className='h3'>Задача</h3>
                <p className={cn('txt-quote-m', styles.taskDesc)}>Наша главная задача была выделить сайт среди конкурентов, сделать его рентабельным, ярким, а также легким для понимания.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.box}>
        <img className={styles.duck} src='/images/projects/tradex/duck.png' alt='' />
      </div>
      <picture className={styles.companyPicture}>
        <source media={`(min-width: ${media.lg}px)`} srcSet='/images/projects/tradex/line-lg.png' />
        <img className={styles.companyLine} src='/images/projects/tradex/line.png' alt='' />
      </picture>
    </section>
  )
}
