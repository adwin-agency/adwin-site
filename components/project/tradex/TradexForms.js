import cn from 'classnames'
import media from '/data/media'
import styles from './TradexForms.module.scss'

export default function TradexForms() {
  return (
    <section className={styles.el}>
      <div className='container'>
        <div className='row'>
          <div className='col col-6 col-lg-2'>
            <h2 className={cn('h3', styles.heading)}>Формы обратной связи</h2>
          </div>
          <div className='col col-6 col-lg-4'>
            <p className={cn('txt-m', styles.desc)}>На лендинге мы использовали 3 развернутых формы обратной связи. Все они разные между собой и взаимоисключающие. <br /><br />Например форма в Авиаперевозке предлагает заказать именно эту услугу, а в блоке “Ускоренного сервиса из Китая” заказать доставку из Китая. Вроде мы не навязываем клиенту оформление заказа и делаем это нативно, но номер клиента мы получаем, задача по сбору конверсии явно выполнена на ура!</p>
            <picture className={styles.sideForm}>
              <source media={`(min-width: ${media.lg}px)`} srcSet='/images/projects/tradex/forms-side.png' />
              <img className={styles.picImage} src='/' alt='' />
            </picture>
            <picture className={styles.deliveryForm}>
              <source media={`(min-width: ${media.lg}px)`} srcSet='/images/projects/tradex/forms-delivery.png' />
              <img className={styles.picImage} src='/' alt='' />
            </picture>
          </div>
        </div>
        <picture className={styles.mainForm}>
          <source media={`(min-width: ${media.lg}px)`} srcSet='/images/projects/tradex/forms-lg.png' />
          <img className={styles.picImage} src='/images/projects/tradex/forms.png' alt='' />
        </picture>
      </div>
      <picture className={styles.bg}>
        <source media={`(min-width: ${media.lg}px)`} srcSet='/images/projects/tradex/forms-bg-lg.png' />
        <img className={styles.picImage} src='/images/projects/tradex/forms-bg.png' alt='' />
      </picture>
    </section>
  )
}
