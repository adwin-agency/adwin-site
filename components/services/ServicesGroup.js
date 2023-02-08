import cn from 'classnames'
import styles from './ServicesGroup.module.scss'
import ServicesItem from './ServicesItem'

export default function ServicesGroup({ type, theme, heading, images, title, items }) {
  return (
    <section className={cn(styles.el, { [styles[type]]: type, [styles[theme]]: theme })}>
      <div className='container'>
        <div className='row'>
          <div className='col col-6 col-lg-2'>
            {heading && <h1 className={cn('h1', styles.heading)}>{heading}</h1>}
          </div>
          <div className='col col-6 col-lg-4'>
            <div className={styles.main}>
              {images && (
                <div className={styles.images}>
                  {images.map(img => (
                    <img key={img} src={`/images/services/${img}`} alt='' className={styles.image} />
                  ))}
                </div>
              )}
              <div className={styles.divider}></div>
              <p className={cn('h2', styles.title)}>{title}</p>
              <ul className={styles.list}>
                {items.map(item => (
                  <li key={item.id} className={styles.item}>
                    <ServicesItem tag={item.tag} title={item.title} price={item.price} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
