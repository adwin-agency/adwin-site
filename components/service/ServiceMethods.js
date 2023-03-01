import cn from 'classnames'
import methods from '../../data/methods'
import useAnim from '../../helpers/useAnim'
import styles from './ServiceMethods.module.scss'

export default function ServiceMethods({ id, category }) {
  const items = methods[category]

  const { anim, animRef } = useAnim()

  return (
    <section className={cn(styles.el, { [styles.anim]: anim })} id='methods' ref={animRef}>
      <h2 className={cn('h2', styles.heading)}>Метод работы</h2>
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
