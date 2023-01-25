import cn from 'classnames'
import data from '/data/competencies'
import styles from './Competencies.module.scss'

export default function Competencies() {
  return (
    <section>
      <h2 className='h2'>Компетенции</h2>
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