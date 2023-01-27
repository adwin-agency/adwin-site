import { useEffect, useRef } from 'react'
import data from '/data/team'
import DashedArrow from '/icons/dashed-arrow.svg'
import styles from './Team.module.scss'

export default function Team({ id }) {
  const lineRef = useRef()

  useEffect(() => {
    let mouseIsDown = false
    let mouseX = null

    function handleMouseDown(e) {
      mouseIsDown = true
      mouseX = e.clientX
    }

    function handleMouseMove(e) {
      if (!mouseIsDown) return

      lineRef.current.scrollLeft += (mouseX - e.clientX)
      mouseX = e.clientX
    }

    function handleMouseUp() {
      mouseIsDown = false
    }

    lineRef.current.addEventListener('mousedown', handleMouseDown)
    lineRef.current.addEventListener('mousemove', handleMouseMove)
    lineRef.current.addEventListener('mouseup', handleMouseUp)

    return () => {
      lineRef.current.removeEventListener('mousedown', handleMouseDown)
      lineRef.current.removeEventListener('mousemove', handleMouseMove)
      lineRef.current.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  return (
    <section className={styles.el} id={id}>
      <h2 className='h2'>Команда</h2>
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
