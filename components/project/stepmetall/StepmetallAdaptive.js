import cn from 'classnames'
import media from '/data/media'
import styles from './StepmetallAdaptive.module.scss'

export default function StepmetallAdaptive() {
  return (
    <section>
      <div className={styles.top}>
        <div className='container'>
          <div className='row'>
            <div className='col col-6 col-lg-4'></div>
            <div className='col col-6 col-lg-2'>
              <h2 className={cn('h3', styles.heading)}>Адаптивы</h2>
              <p className={cn('txt', styles.desc)}>Ну что ж, почти готово. Теперь продумываем, чтобы каждому пользователю, с любого устройства было приятно пользоваться сайтом. Да, адаптивы - это очень важно. Мы никогда не знаем, кто сидит по ту сторону экрана. <br /><br />У клиента может быть маленький ноутбук, а часто окно браузера развернуто не на всю страницу, а делит пространство с важным документом. В такие моменты наш сайт должен выглядеть безупречно</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.screens}>
        <div className='container'>
          <div className='row'>
            <div className='col col-6'>
              <picture className={styles.screensPicture}>
                <source media={`(min-width: ${media.lg}px)`} srcSet='/images/projects/stepmetall/adaptive-screens-lg.png' />
                <img className={styles.screensImage} src='/images/projects/stepmetall/adaptive-screens.png' alt='' />
              </picture>
            </div>
            <div className='col col-6 col-lg-2'></div>
            <div className='col col-6 col-lg-2'>
              <p className={cn('txt', styles.screensDesc)}>Нижний тап-бар актуален в современных реалиях тем, что на больших эранах мобильных устройств удобнее дотянуться до нижней навигации.</p>
            </div>
            <div className='col col-6 col-lg-2'></div>
          </div>
        </div>
      </div>
    </section >
  )
}
