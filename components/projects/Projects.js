import cn from 'classnames'
import ProjectsList from '../app/ProjectsList'
import styles from './Projects.module.scss'

export default function Projects() {
  return (
    <section className={styles.el}>
      <div className={styles.top}>
        <div className='container'>
          <div className={styles.topRow}>
            <h1 className='h1'>Портфолио</h1>
            <div className={styles.filters}>
              <button className={cn(styles.filter, styles.active)}>Все</button>
              <button className={styles.filter}>Реклама <span>(4)</span></button>
              <button className={styles.filter}>Разработка <span>(5)</span></button>
              <button className={styles.filter}>Комплексная реклама <span>(3)</span></button>
              <button className={styles.filter}>Интеграция с CRM <span>(4)</span></button>
              <button className={styles.filter}>Нативная реклама <span>(3)</span></button>
              <button className={styles.filter}>Медийная реклама <span>(3)</span></button>
              <button className={styles.filter}>Таргетированная реклама <span>(3)</span></button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.main}>
        <div className='container'>
          <ProjectsList className={styles.list} bordered />
        </div>
      </div>
    </section >
  )
}
