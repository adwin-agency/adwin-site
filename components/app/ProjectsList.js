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

  const animations = rowItems.map(() => {
    const { anim, animRef } = useAnim()
    return { anim, animRef }
  })

  return (
    <div className={cn(styles.el, { [styles.bordered]: bordered, [styles.slide]: slide, [styles.animated]: animated }, className)}>
      {rowItems.map((items, index) => (
        <div key={index} className={cn(styles.row, { [styles.anim]: animations[index].anim })} ref={animations[index].animRef}>
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
