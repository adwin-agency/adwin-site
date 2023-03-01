import { useEffect, useRef } from 'react'
import cn from 'classnames'
import DashedArrow from '/icons/dashed-arrow.svg'
import data from '../../data/team'
import useAnim from '../../helpers/useAnim'
import styles from './Team.module.scss'

export default function Team({ id }) {
  const lineRef = useRef()

  const { anim, animRef } = useAnim()

  useEffect(() => {
    let mouseIsDown = false
    let mouseX = null
    const lineEl = lineRef.current

    function handleMouseDown(e) {
      mouseIsDown = true
      mouseX = e.clientX
    }

    function handleMouseMove(e) {
      if (!mouseIsDown) return

      lineEl.scrollLeft += (mouseX - e.clientX)
      mouseX = e.clientX
    }

    function handleMouseUp() {
      mouseIsDown = false
    }

    lineEl.addEventListener('mousedown', handleMouseDown)
    lineEl.addEventListener('mousemove', handleMouseMove)
    lineEl.addEventListener('mouseup', handleMouseUp)

    return () => {
      lineEl.removeEventListener('mousedown', handleMouseDown)
      lineEl.removeEventListener('mousemove', handleMouseMove)
      lineEl.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  return (
    <section className={cn(styles.el, { [styles.anim]: anim })} id={id} ref={animRef}>
      <h2 className={cn('h2', styles.heading)}>Команда</h2>
      <div className={styles.line} ref={lineRef}>
        {data.map(item => {
          const FigureCmp = item.figure
          return (
            <div key={item.id} className={styles.person} data-name={item.id}>
              <FigureCmp className={styles.mask} />
              <div className={styles.figure} style={{ clipPath: `url(#${item.id}_svg__clip)` }}></div>
              <img src={`/images/team/${item.id}.png`} alt='' className={styles.image} />
              <img src={`/images/team/${item.id}-color.png`} alt='' className={styles.imageColored} />
              <div className={styles.info}>
                <p className={styles.name}>{item.name}</p>
                <p className={styles.position}>{item.position}</p>
                <DashedArrow className={styles.arrow} />
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
