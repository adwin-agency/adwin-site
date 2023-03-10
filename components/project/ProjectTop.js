import projects from '../../data/projects'
import styles from './ProjectTop.module.scss'

export default function ProjectTop({ name }) {
  const project = projects.find(item => item.id === name)
  const { detailTitle, tags } = project

  return (
    <section className={styles.el}>
      <div className='container'>
        <div className='row'>
          <div className="col col-6">
            <h1 className='h1'>{detailTitle}</h1>
          </div>
          <div className="col col-6">
            <div className={styles.tags}>
              {tags.map(tag => (
                <div key={tag} className={styles.tag}>{tag}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
