import cn from 'classnames'
import media from '/data/media'
import styles from './BurenieSiteSetting.module.scss'

export default function BurenieSiteSetting() {
  return (
    <section className={styles.el}>
      <div className={styles.main}>
        <div className={styles.top}>
          <div className='container'>
            <div className='row'>
              <div className='col col-6 col-lg-2'>
                <p className={cn('quote-m', styles.type)}>Шаг 4</p>
                <h2 className={cn('h2', styles.heading)}>Вёрстка и настройка</h2>
                <p className={cn('quote-m', styles.subheading)}>Кто в ответе: верстальщик, программист</p>
                <div className={styles.stat}>
                  <p className={styles.statNum}>80+</p>
                  <p className={cn('txt-m', styles.statText)}>макетов было передано в вёрстку</p>
                </div>
              </div>
              <div className='col col-6 col-lg-1'></div>
              <div className='col col-6 col-lg-2'>
                <p className={cn('txt-m', styles.desc)}>Передача макетов как отдельный вид искусства: на этом этапе полёт творческой фантазии сталкивается с безжалостной логикой, а благородный цвет “Royal Blue Dark” превращается в прозаичное #050B42. <br /><br />Итак, макеты готовы, гайдлайны собраны и вот уже верстальщик хмуро слушает вдохновенные описания дизайнера, рассматривая получившееся на организационной встрече. Для последовательной подачи контента и расстановки необходимых акцентов нами было принято решение использовать CSS-анимации. </p>
              </div>
              <div className='col col-6 col-lg-1'></div>
            </div>
          </div>
        </div>
        <video className={styles.video} src='/video/gs-2.mp4' autoPlay muted loop></video>
        <div className={styles.elements}>
          <div className='container'>
            <div className='row'>
              <div className='col col-6 col-lg-3'>
                <p className={cn('quote-m', styles.elementsDesc)}>Подгрузка элементов на главном экране происходит ступенчато, увлекая пользователя и создавая положительный, почти игровой образ, что изначально и было нами выбрано, как способ решения поставленной проблемы.</p>
                <p className={cn('txt-m', styles.elementsText)}>С главного экрана можно быстро перейти на ключевые страницы продаваемых услуг или листнуть ниже и познакомиться с другой победой нашего программиста на макетами ‒ интерактивной картой Ленобласти.</p>
              </div>
              <div className='col col-6 col-lg-1'></div>
              <div className='col col-6 col-lg-2'>
                <div className={styles.target}>
                  <p className={styles.targetTitle}>Изначальные цели проекта:</p>
                  <ul className={cn('txt-m', styles.targetList)}>
                    <li className={styles.targetItem}>Понятно и интересно объяснить суть, чем занимается компания</li>
                    <li className={styles.targetItem}>Конечная цель не только продать продукт, но и запомниться потенциальному клиенту, чтобы он вспомнил о нас, когда появится необходимость</li>
                    <li className={styles.targetItem}>Сменить модель восприятия сферы</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <video className={styles.video} src='/video/gs-4.mp4' autoPlay muted loop></video>
        <div className={styles.interactive}>
          <img className={styles.interactiveStar} src='/images/projects/burenie-site/compass.png' alt='' />
          <div className={styles.interactiveMain}>
            <div className='container'>
              <div className='row'>
                <div className='col col-6 col-lg-3'>
                  <p className={styles.interactiveTitle}>Наличие интерактивных элементов на сайте</p>
                  <picture className={styles.interactivePicture}>
                    <source media={`(min-width: ${media.lg}px)`} srcSet='/images/projects/burenie-site/elements-graphic-lg.png' />
                    <img className={styles.picImage} src='/images/projects/burenie-site/elements-graphic.png' alt='' />
                  </picture>
                </div>
                <div className='col col-6 col-lg-1'></div>
                <div className='col col-6 col-lg-2'>
                  <p className={cn('txt-m', styles.interactiveText)}>Карта уникальна в своём роде и выполненна нашей командой с нуля. Дизайнер создавала её вручную, а программист настроил используя svg и щепотку чёрной магии, поэтому она корректно отображается абсолютно на любых экранах и выглядит чётко даже на самом утыканном пикселями экране. </p>
                  <p className={cn('quote-m', styles.interactiveDesc)}>Светлая, но контрастная, она дополнена интуитивно понятной анимацией и хорошо выделяет нас среди конкурентов. Кликнув на интересующий район, вы попадёте на соответствующую страницу, где можно изучить информацию об услуге и впечатлиться результатами выполненных работ.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.setup}>
          <div className='container'>
            <div className='row'>
              <div className='col col-6 col-lg-2'>
                <h3 className='h3'>Вёрстка и настройка</h3>
                <p className={cn('txt-m', styles.setupText)}>Всё на сайте, от изображений до скриптов счётчиков рекламной аналитики оптимизировано таким образом, чтобы сайт загружался влёт и пользователь быстро находил искомое. <br /><br />Простоту внесения изменений в контент гарантирует CMS Bitrix: интуитивно понятный редактор напоминает MS Word и позволяет легко внести необходимые правки.</p>
              </div>
              <div className='col col-6 col-lg-1'></div>
              <div className='col col-6 col-lg-3'>
                <img className={styles.setupImage} src='/images/projects/burenie-site/laptop-code.png' alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.add}>
        <div className='container'>
          <div className='row'>
            <div className='col col-6 col-lg-2'>
              <h3 className='h3'>Итак, спустя 3 недели, мы закончили создание сайта</h3>
            </div>
            <div className='col col-6 col-lg-2'></div>
            <div className='col col-6 col-lg-2'>
              <p className={cn('txt-quote-m', styles.addText)}>Теперь мы готовы запускать рекламу, но на этом работа отдела разработки вовсе не считается оконченной. Одним из главных достоинств работы разработчиков бок о бок с рекламщиками можно смело считать оперативность реакции и вносимых изменений.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
