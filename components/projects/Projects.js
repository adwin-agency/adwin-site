import { useState } from 'react'
import cn from 'classnames'
import ProjectsList from '../app/ProjectsList'
import projects from '../../data/projects'
import useAnim from '../../helpers/useAnim'
import styles from './Projects.module.scss'

const filters = projects.reduce((acc, cur) => {
  cur.tags.forEach(tag => {
    if (acc[tag]) {
      acc[tag]++
    } else {
      acc[tag] = 1
    }
  })

  return acc
}, {})

export default function Projects() {
  const [activeProjects, setActiveProjects] = useState(projects)
  const [activeFilter, setActiveFilter] = useState(null)

  const { anim, animRef } = useAnim()

  function filterProjects(id) {
    return function () {
      if (id === null) {
        setActiveProjects(projects)
      } else {
        setActiveProjects(projects.filter(project => project.tags.includes(id)))
      }

      setActiveFilter(id)
    }
  }

  return (
    <section className={cn(styles.el, { [styles.anim]: anim })}>
      <div className={styles.top} ref={animRef}>
        <div className='container'>
          <div className={styles.topRow}>
            <h1 className='h1'>Портфолио</h1>
            <div className={styles.filters}>
              <button
                className={cn(styles.filter, { [styles.active]: activeFilter === null })}
                onClick={filterProjects(null)}
              >
                Все
              </button>
              {Object.entries(filters).map(item => (
                <button
                  key={item[0]}
                  className={cn(styles.filter, { [styles.active]: activeFilter === item[0] })}
                  onClick={filterProjects(item[0])}
                >
                  {item[0]} <span>({item[1]})</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.main}>
        <div className='container'>
          <ProjectsList className={styles.list} bordered items={activeProjects} fade />
        </div>
      </div>
    </section >
  )
}
