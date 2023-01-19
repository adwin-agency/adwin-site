import cn from 'classnames'
import Button from '../ui/Button'
import ProjectsList from './ProjectsList'
import styles from './TopProjects.module.scss'

export default function TopProjects({ className }) {
  return (
    <section className={className}>
      <div className="container">
        <h2 className={cn('h2', styles.heading)}>Избранное портфолио</h2>
        <ProjectsList className={styles.list} />
        <Button className={styles.btn} size='lg' color='grey' bordered>Больше проектов</Button>
      </div>
    </section>
  )
}
