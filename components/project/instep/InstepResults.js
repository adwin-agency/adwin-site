import styles from './InstepResults.module.scss'

export default function InstepResults() {
  return (
    <section className={styles.el}>
      <div className='container'>
        <div className='row'>
          <div className='col col-6 col-lg-2'>
            <h2 className='h2'>Результаты</h2>
          </div>
          <div className='col col-6 col-lg-4'>
            <p className={styles.desc}>Через 2 месяца ведения контекстной рекламы на новый сайт:</p>
            <div className='row'>
              <div className='col col-2 col-lg-6'></div>
              <div className='col col-4 col-lg-6'>
                <ul className={styles.list}>
                  <li className={styles.item}>
                    <p className={styles.itemNum}>+56%</p>
                    <p className={styles.itemTitle}>рост числа конверсий</p>
                  </li>
                  <li className={styles.item}>
                    <p className={styles.itemNum}>+44%</p>
                    <p className={styles.itemTitle}>увеличение бюджета в ходе оптимизации</p>
                  </li>
                  <li className={styles.item}>
                    <p className={styles.itemNum}>-40%</p>
                    <p className={styles.itemTitle}>снижение стоимости заявки</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
