import cn from 'classnames'
import media from '/data/media'
import projects from '/data/projects'
import styles from './GrandclinicIntro.module.scss'

export default function GrandclinicIntro() {
  const project = projects.find(item => item.id === 'grandclinic')
  const { tags, detailTitle, desc } = project

  return (
    <section className={styles.el}>
      <div className={styles.main}>
        <div className='container'>
          <div className="row">
            <div className="col col-6 col-lg-2">
              <div className={styles.tags}>
                {tags.map(tag => (
                  <div key={tag} className={styles.tag}>{tag}</div>
                ))}
              </div>
              <h1 className={cn('h1', styles.heading)}>{detailTitle}</h1>
              <p className={styles.desc}>{desc}</p>
            </div>
            <div className="col col-6 col-lg-4"></div>
          </div>
        </div>
      </div>
      <picture className={styles.bg}>
        <source media={`(min-width: ${media.lg}px)`} srcSet='/images/projects/grandclinic/intro-bg-lg.png' />
        <img className={styles.image} src='/images/projects/grandclinic/intro-bg.png' alt='' />
      </picture>
    </section>
  )
}
