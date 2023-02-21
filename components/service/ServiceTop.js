import cn from 'classnames'
import details from '/data/details'
import styles from './ServiceTop.module.scss'

export default function ServiceTop({ type }) {
  const { heading, desc, image } = details[type]
  
  return (
    <section className={cn(styles.el, styles[type])}>
      <div className='container'>
        <div className={styles.main}>
          <div className={styles.info}>
            <h1 className='h1'>{heading}</h1>
            <p className={styles.desc}>
              <span className={styles.arrow}></span>
              {desc}
            </p>
          </div>
          <img src={image} alt='' className={styles.image} />
        </div>
      </div>
    </section>
  )
}
