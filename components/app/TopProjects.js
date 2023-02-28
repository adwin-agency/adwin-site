import cn from 'classnames'
import Button from '../ui/Button'
import ProjectsList from './ProjectsList'
import projects from '/data/projects'
import styles from './TopProjects.module.scss'

export default function TopProjects({ className }) {
  return (
    <section className={className}>
      <div className={styles.top}>
        <div className='container'>
          <h2 className={cn('h2', styles.heading)}>Избранное портфолио</h2>
        </div>
      </div>
      <div className={styles.main}>
        <div className='container'>
          <ProjectsList className={styles.list} items={projects} />
          <Button className={styles.btn} link='/projects' size='lg' color='grey' bordered>Больше проектов</Button>
        </div>
      </div>
    </section>
  )
}
