import cn from 'classnames'
import ProjectCard from './ProjectCard'
import projects from '/data/projects'
import styles from './ProjectsList.module.scss'

export default function ProjectsList({ className, bordered }) {

  const rowItems = projects.reduce((acc, curr, index) => {
    if (index % 2 === 0) {
      acc.push([curr])
    } else {
      acc[Math.floor(index / 2)].push(curr)
    }
    return acc
  }, [])

  return (
    <div className={cn(styles.el, { [styles.bordered]: bordered }, className)}>
      {rowItems.map((items, index) => (
        <div key={index} className={styles.row}>
          {items.map(item => (
            <div key={item.id} className={styles.item}>
              <ProjectCard
                images={item.images}
                tags={item.tags}
                title={item.title}
                desc={item.desc}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
