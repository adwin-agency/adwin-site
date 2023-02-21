import ProjectCard from '../app/ProjectCard'
import Button from '../ui/Button'
import projects from '/data/projects'
import styles from './ServiceProjects.module.scss'

export default function ServiceProjects() {
  return (
    <section className={styles.el} id='projects'>
      <h2 className='h2'>Реализованные проекты</h2>
      <div className={styles.items}>
        <ProjectCard
          className={styles.item}
          images={projects[0].images}
          tags={projects[0].tags}
          title={projects[0].title}
          desc={projects[0].desc}
        />
        <ProjectCard
          className={styles.item}
          images={projects[1].images}
          tags={projects[1].tags}
          title={projects[1].title}
          desc={projects[1].desc}
        />
      </div>
      <Button className={styles.btn} link='/projects' color='grey' bordered>Больше проектов</Button>
    </section>
  )
}
