import TopProjects from '../app/TopProjects'
import ServicesGroup from './ServicesGroup'
import { advertisement, development } from '/data/services'
import styles from './Services.module.scss'

export default function Services() {
  return (
    <>
      <ServicesGroup
        heading='Услуги'
        title={advertisement.title}
        items={advertisement.items}
      />
      <ServicesGroup
        theme='dark'
        images={development.images}
        title={development.title}
        items={development.items}
      />
      <TopProjects className={styles.topProjects} />
    </>
  )
}
