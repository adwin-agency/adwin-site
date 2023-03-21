import cn from 'classnames'
import media from '/data/media'
import styles from './StepmetallDesign.module.scss'

export default function StepmetallDesign() {
  return (
    <section>
      <div className={styles.top}>
        <div className='container'>
          <div className='row'>
            <div className='col col-6 col-lg-2'>
              <h2 className={cn('h3', styles.heading)}>Дизайн страниц</h2>
            </div>
            <div className='col col-6 col-lg-4'>
              <p className={cn('txt-quote', styles.desc)}>Подобрана цветовая гамма, шрифт, сетка. Собран UI kit. Можно творить. Наш дизайнер, не упуская из виду ни одной детали, углубился в разработку дизайна. Оттачиваем текста, подбираем фото, компонуем объекты, не забывая при этом про прототип.</p>
            </div>
            <div className='col col-6'>
              <img className={styles.topImage} src='/images/projects/stepmetall/design-home.png' alt='' />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.main}>
        <div className='container'>
          <div className={styles.mainRow}>
            <p className={cn('txt', styles.catalogDesc)}>Очень важным элементом сайта является каталог. Мы уже говорили раннее, что цен не будет и клиент не хочет усложнять сайт оформлением закза. Но мы считаем, что каталог все таки необходим. <br /><br />Поэтому идея была следующая: просматривая каталог клиент добавляет себе в корзину необходимые наименование товаров. При нажатии на плюсик - товар отправится в корзину. При повторном нажатии - товар вернется на место.</p>
            <picture className={styles.catalogPicture}>
              <source media={`(min-width: ${media.lg}px)`} srcSet='/images/projects/stepmetall/design-catalog-lg.png' />
              <img className={styles.catalogImage} src='/images/projects/stepmetall/design-catalog.png' alt='' />
            </picture>
            <picture className={styles.cartPicture}>
              <source media={`(min-width: ${media.lg}px)`} srcSet='/images/projects/stepmetall/design-cart-lg.png' />
              <img className={styles.cartImage} src='/images/projects/stepmetall/design-cart.png' alt='' />
            </picture>
            <img className={styles.cartSide} src='/images/projects/stepmetall/design-cart-final.png' alt='' />
            <div className={styles.cartInfo}>
              <p className={cn('txt-quote', styles.cartDesc)}>Далее мы переходим в корзину, меняем нужное нам количество и выбираем в какой единице измерения мы рассчитываем ее получить. Готово.</p>
              <p className={cn('txt', styles.formDesc)}>Теперь мы можем заполнить форму и готовая номенклатура падает на почту менеджеру StepMetall. Он рассчитывает стоимость, перезванивает клиенту с готовым расчетом и оформляет доставку. <br /><br />Если человек не захочет оставлять свои данные, но корзину он уже сформировал - без проблем. Он может скинуть себе ее на почту и таким образом вернуться к расчету в любой момент.</p>
            </div>
            <img className={styles.formImage} src='/images/projects/stepmetall/design-form.png' alt='' />
          </div>
        </div>
      </div>
      <div className={styles.screens}>
        <picture>
          <source media={`(min-width: ${media.lg}px)`} srcSet='/images/projects/stepmetall/design-screens-lg.png' />
          <img className={styles.screensImage} src='/images/projects/stepmetall/design-screens.png' alt='' />
        </picture>
      </div>
    </section>
  )
}
