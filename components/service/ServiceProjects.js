import ProjectCard from '../app/ProjectCard'
import projects from '/data/projects'
import styles from './ServiceProjects.module.scss'

export default function ServiceProjects() {
  return (
    <section>
      <h2 className='h2'>Реализованные проекты</h2>
      <div className={styles.items}>
        <ProjectCard
          images={projects[0].images}
          tags={projects[0].tags}
          title={projects[0].title}
          desc={projects[0].desc}
        />
        <ProjectCard
          images={projects[1].images}
          tags={projects[1].tags}
          title={projects[1].title}
          desc={projects[1].desc}
        />
      </div>
    </section>
  )
}
