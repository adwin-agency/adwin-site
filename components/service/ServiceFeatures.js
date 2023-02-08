import styles from './ServiceFeatures.module.scss'

export default function ServiceFeatures({ heading, items }) {
  return (
    <section>
      <h2 className='h2'>{heading}</h2>
      <div className={styles.items}>
        {items.map(item => (
          <div key={item.id}>
            <p className={styles.itemTitle}>{item.title}</p>
            <img src={`/images/services/landing/${item.image}`} alt='' className={styles.itemImage} />
          </div>
        ))}
      </div>
    </section>
  )
}
