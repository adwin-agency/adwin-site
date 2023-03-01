import cn from 'classnames'
import data from '../../data/competencies'
import useAnim from '../../helpers/useAnim'
import styles from './Competencies.module.scss'

export default function Competencies({ id }) {
  const { anim, animRef } = useAnim()

  return (
    <section className={cn(styles.el, { [styles.anim]: anim })} id={id} ref={animRef}>
      <h2 className={cn('h2', styles.heading)}>Компетенции</h2>
      <div className={styles.list}>
        {data.map(item => (
          <div key={item.id} className={styles.item}>
            <p className={styles.title}>{item.title}</p>
            <div className={styles.tags}>
              {item.items.map(i => (
                <span key={i.id} className={cn(styles.tag, { [styles.tagLink]: i.link })}>{i.title}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section >
  )
}
