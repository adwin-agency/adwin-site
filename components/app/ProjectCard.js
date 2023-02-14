import cn from 'classnames'
import styles from './ProjectCard.module.scss'

export default function ProjectCard({ className, images, tags, title, desc }) {
  return (
    <div className={className}>
      <div className={styles.box}>
        <picture>
          <source media='(min-width: 1000px)' srcSet={`/images/projects/${images[1]}`} />
          <img src={`/images/projects/${images[0]}`} alt='' className={styles.image} />
        </picture>
      </div>
      <div className={styles.tags}>
        {tags.map(tag => (
          <span className={styles.tag} key={tag}>{tag}</span>
        ))}
      </div>
      <p className={cn('h3', styles.title)}>{title}</p>
      <p className={cn('txt', styles.desc)}>{desc}</p>
    </div>
  )
}
