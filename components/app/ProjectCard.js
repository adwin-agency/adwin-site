import cn from 'classnames'
import Link from 'next/link'
import useAnim from '../../helpers/useAnim'
import styles from './ProjectCard.module.scss'

export default function ProjectCard({ id, className, images, tags, title, desc, fade }) {
  const { anim, animRef } = useAnim()

  return (
    <Link className={styles.link} href={`/projects/${id}`}>
      <div className={cn(className, styles.el, { [styles.fade]: fade, [styles.anim]: anim })} ref={animRef}>
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
    </Link>
  )
}
