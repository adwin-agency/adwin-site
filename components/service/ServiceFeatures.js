import cn from 'classnames'
import features from '../../data/features'
import useAnim from '../../helpers/useAnim'
import styles from './ServiceFeatures.module.scss'

export default function ServiceFeatures({ id, type }) {
  const { heading, items } = features[type]

  const { anim, animRef } = useAnim()

  return (
    <section className={cn(styles.el, { [styles.anim]: anim })} id='features' ref={animRef}>
      <h2 className={cn('h2', styles.heading)}>{heading}</h2>
      <div className={styles.items}>
        {items.map(item => (
          <div key={item.id} className={styles.item}>
            <p className={styles.itemTitle}>{item.title}</p>
            <img src={item.image} alt='' className={styles.itemImage} />
          </div>
        ))}
      </div>
    </section>
  )
}
