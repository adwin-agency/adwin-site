import cn from 'classnames'
import styles from './GrandclinicResults.module.scss'

export default function GrandclinicResults() {
  return (
    <section className={styles.el}>
      <div className="container">
        <div className="row">
          <div className="col col-6 col-lg-2">
            <h2 className='h2'>Результаты</h2>
          </div>
          <div className="col col-6 col-lg-3">
            <p className={cn('txt-m', styles.desc)}>В результате комплексного подхода в работе с клиентов мы добились следующих результатов:</p>
            <div className="row">
              <div className="col col-2 col-lg-6"></div>
              <div className="col col-4 col-lg-6">
                <ul className={styles.list}>
                  <li className={styles.lisItem}>
                    <p className={styles.listNum}>600 ₽</p>
                    <p className={cn('txt-m', styles.listText)}>цена на заявку</p>
                  </li>
                  <li className={styles.lisItem}>
                    <p className={styles.listNum}>4,5%</p>
                    <p className={cn('txt-m', styles.listText)}>конверсия с сайта поднялась с 1,5%</p>
                  </li>
                  <li className={styles.lisItem}>
                    <p className={styles.listNum}>+30%</p>
                    <p className={cn('txt-m', styles.listText)}>рост количества заявок</p>
                  </li>
                </ul>
              </div>
            </div>
            <p className={cn('txt-m', styles.desc)}>Результаты мы измеряем с помощью систем сквозной аналитики, интегрированной с CRM клиники. <br /><br />Так мы можем видеть не просто количество лидов, а результативность рекламы по всей воронке - какое количество первичных клиентов привлечено, сколько из них записались и пришли в клинику.</p>
          </div>
          <div className="col col-6 col-lg-1"></div>
        </div>
      </div>
    </section>
  )
}
