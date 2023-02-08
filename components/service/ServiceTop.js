import styles from './ServiceTop.module.scss'

export default function ServiceTop({ heading, desc, image }) {
  return (
    <section>
      <div className='container'>
        <div className={styles.main}>
          <h1 className='h1'>{heading}</h1>
          <p className={styles.desc}>{desc}</p>
        </div>
        <img src={`/services/${image}`} alt='' className={styles.image} />
      </div>
    </section>
  )
}
