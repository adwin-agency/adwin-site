import cn from 'classnames'
import ProjectCard from './ProjectCard'
import useAnim from '../../helpers/useAnim'
import styles from './ProjectsList.module.scss'

export default function ProjectsList({ className, bordered, items, slide, animated }) {

  const rowItems = items.reduce((acc, curr, index) => {
    if (index % 2 === 0) {
      acc.push([curr])
    } else {
      acc[Math.floor(index / 2)].push(curr)
    }
    return acc
  }, [])

  const { anim, animRef } = useAnim()

  return (
    <div className={cn(styles.el, { [styles.bordered]: bordered, [styles.slide]: slide, [styles.animated]: animated }, className)} ref={animRef}>
      {rowItems.map((items, index) => (
        <div key={index} className={cn(styles.row, { [styles.anim]: anim })}>
          {items.map(item => (
            <div key={item.id} className={styles.item}>
              <ProjectCard
                className={styles.card}
                images={item.images}
                tags={item.tags}
                title={item.title}
                desc={item.desc}
              />
            </div>
          ))}
        </div>
      ))
      }
    </div >
  )
}
