import cn from 'classnames'
import projects from '/data/projects'
import styles from './FitnotecaIntro.module.scss'

export default function FitnotecaIntro() {
  const project = projects.find(item => item.id === 'fitnoteca')
  const { tags, detailTitle, desc } = project

  return (
    <section className={styles.el}>
      <div className='container'>
        <div className='row'>
          <div className='col col-6 col-lg-4'></div>
          <div className='col col-6 col-lg-2'>
            <div className={styles.tags}>
              {tags.map(tag => (
                <div key={tag} className={styles.tag}>{tag}</div>
              ))}
            </div>
            <h1 className={cn('h1', styles.heading)}>{detailTitle}</h1>
            <p className={styles.desc}>{desc}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
