import RedBlur from '/icons/instep/red-blur.svg'
import Arrow2 from '/icons/instep/arrow2.svg'
import Arrow3 from '/icons/instep/arrow3.svg'
import styles from './InstepRealise.module.scss'

export default function InstepRealise() {
  return (
    <section className={styles.el}>
      <div className="container">
        <div className="row">
          <div className="col col-6 col-lg-2">
            <h2 className='h2'>Реализация</h2>
          </div>
          <div className="col col-6 col-lg-4">
            <div className={styles.areas}>
              <RedBlur className={styles.areasBg} />
              <div className={styles.area}>
                <p className={styles.areaTitle}>Ton of voice</p>
                <p className={styles.areaDesc}>Наполнение сайта, текст и коммуникация в целом на понятном и близком пользователю (читай, потенциальному покупателю) языке.</p>
                <Arrow2 className={styles.areaArrow} />
              </div>
              <img className={styles.areasImage} src="/images/projects/instep/areas.svg" alt="" />
              <div className={styles.area}>
                <p className={styles.areaTitle}>User expirience</p>
                <p className={styles.areaDesc}>Продуманный интерфейс, позволяющий быстро ориентироваться в ресурсе, доступно демонстрирующий возможности компании, её конкурентные преимущества</p>
                <Arrow3 className={styles.areaArrow} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
