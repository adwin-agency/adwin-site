import cn from 'classnames'
import ProjectCard from '../app/ProjectCard'
import Button from '../ui/Button'
import projects from '../../data/projects'
import useAnim from '../../helpers/useAnim'
import styles from './ServiceProjects.module.scss'

export default function ServiceProjects() {
  const { anim, animRef } = useAnim()

  return (
    <section className={cn(styles.el, { [styles.anim]: anim })} id='projects' ref={animRef}>
      <h2 className={cn('h2', styles.heading)}>Реализованные проекты</h2>
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
      <Button className={styles.btn} link='/projects' color='grey' bordered>Больше проектов</Button>
    </section>
  )
}
