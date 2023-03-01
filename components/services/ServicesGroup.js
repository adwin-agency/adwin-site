import { useEffect, useState } from 'react'
import cn from 'classnames'
import ServicesItem from './ServicesItem'
import useAnim from '../../helpers/useAnim'
import styles from './ServicesGroup.module.scss'

export default function ServicesGroup({ type, theme, heading, images, title, items }) {
  const { anim, animRef } = useAnim()

  const [active, setActive] = useState(false)

  useEffect(() => {
    let observer = null
    const target = animRef.current

    observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActive(true)
        } else {
          setActive(false)
        }
      })
    }, {
      threshold: 0.25
    })

    observer.observe(target)

    return () => {
      if (observer) {
        observer.unobserve(target)
      }
    }
  }, [])

  return (
    <section
      className={cn(
        styles.el,
        {
          [styles[type]]: type,
          [styles[theme]]: theme,
          [styles.anim]: anim,
          [styles.active]: active
        }
      )}
      ref={animRef}
    >
      <div className='container'>
        <div className='row'>
          <div className='col col-6 col-lg-2'>
            {heading && <h1 className={cn('h1', styles.heading)}>{heading}</h1>}
          </div>
          <div className='col col-6 col-lg-4'>
            <div className={styles.main}>
              {images && (
                <div className={styles.images}>
                  {images.map(img => (
                    <img key={img} src={`/images/services/${img}`} alt='' className={styles.image} />
                  ))}
                </div>
              )}
              <div className={styles.divider}></div>
              <p className={cn('h2', styles.title)}>{title}</p>
              <ul className={styles.list}>
                {items.map(item => (
                  <li key={item.id} className={styles.item}>
                    <ServicesItem id={item.id} tag={item.tag} title={item.title} price={item.price} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
