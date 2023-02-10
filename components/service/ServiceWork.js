import { useState } from 'react'
import cn from 'classnames'
import ServiceStep from './ServiceStep'
import work from '/data/work'
import styles from './ServiceWork.module.scss'

export default function ServiceWork({ category }) {
  const items = work[category]

  const [activeStep, setActiveStep] = useState(null)

  function handleStepClick(id) {
    return function() {
      if (activeStep === id) {
        setActiveStep(null)
      } else {
        setActiveStep(id)
      }
    }
  }

  return (
    <section className={styles.el}>
      <div className={styles.top}>
        <h2 className={cn('h2', styles.heading)}>Как проходит работа над проектом</h2>
        <p className={styles.desc}>Срок разработки проекта: <br /><span>от 20 дней</span></p>
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
