import styles from './ServicePrice.module.scss'

export default function ServicePrice() {
  return (
    <section>
      <h2 className='h2'>Стоимость</h2>
      <div className={styles.main}>
        <p className={styles.desc}>Каждый проект уникален и расчёт стоимости производится индивидуально.Заполните форму ниже и мы свяжемся с вами для более подробной консультации и расчёта стоимости</p>
        <p className={styles.price}>от 100 500 ₽</p>
      </div>
    </section>
  )
}