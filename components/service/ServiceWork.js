import styles from './ServiceWork.module.scss'

export default function ServiceWork() {
  return (
    <section>
      <div className={styles.top}>
        <h2 className='h2'>Как проходит работа над проектом</h2>
        <p className={styles.desc}>Срок разработки проекта: <br /><span>от 20 дней</span></p>
      </div>
      <div className={styles.steps}>
        <div></div>
      </div>
    </section>
  )
}
