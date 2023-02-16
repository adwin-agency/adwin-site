import methods from '/data/methods'
import styles from './ServiceMethods.module.scss'

export default function ServiceMethods({ category }) {
  const items = methods[category]

  return (
    <section className={styles.el}>
      <h2 className='h2'>Метод работы</h2>
      <div className={styles.list}>
        {items.map((item, index) => (
          <div key={item.id} className={styles.item}>
            <p className={styles.num}>{'0' + (index + 1)}</p>
            <p className={styles.title}>{item.title}</p>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
