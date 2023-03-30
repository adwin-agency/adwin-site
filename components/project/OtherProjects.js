import ProjectCard from '../app/ProjectCard'
import projects from '../../data/projects'
import styles from './OtherProjects.module.scss'

export default function OtherProjects() {
  return (
    <section className={styles.el}>
      <div className="container">
        <h2 className={styles.heading}>Другие проекты</h2>
        <div className={styles.items}>
          <ProjectCard
            id={projects[0].id}
            className={styles.item}
            images={projects[0].images}
            tags={projects[0].tags}
            title={projects[0].title}
            desc={projects[0].desc}
          />
          <ProjectCard
            id={projects[1].id}
            className={styles.item}
            images={projects[1].images}
            tags={projects[1].tags}
            title={projects[1].title}
            desc={projects[1].desc}
          />
        </div>
      </div>
    </section>
  )
}