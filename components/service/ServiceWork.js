import { useState } from 'react'
import cn from 'classnames'
import ServiceStep from './ServiceStep'
import work from '../../data/work'
import useAnim from '../../helpers/useAnim'
import styles from './ServiceWork.module.scss'

export default function ServiceWork({ type }) {
  const items = work[type].stages
  const time = work[type].time

  const [activeStep, setActiveStep] = useState(null)

  const { anim, animRef } = useAnim()

  function handleStepClick(id) {
    return function () {
      if (activeStep === id) {
        setActiveStep(null)
      } else {
        setActiveStep(id)
      }
    }
  }

  return (
    <section className={cn(styles.el, { [styles.anim]: anim })} id='work' ref={animRef}>
      <div className={styles.top}>
        <h2 className={cn('h2', styles.heading)}>Как проходит работа над проектом</h2>
        {time && <p className={styles.desc}>Срок разработки проекта: <br /><span>{time}</span></p>}
      </div>
      <div className={styles.steps}>
        {items.map((item, index) => (
          <ServiceStep
            key={item.id}
            className={styles.step}
            id={item.id}
            num={index + 1}
            title={item.title}
            desc={item.desc}
            result={item.result}
            active={activeStep === item.id}
            onClick={handleStepClick(item.id)}
          />
        ))}
      </div>
    </section>
  )
}
