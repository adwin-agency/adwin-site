import TopProjects from '../app/TopProjects'
import ServicesGroup from './ServicesGroup'
import services from '/data/services'
import styles from './Services.module.scss'

export default function Services() {
  return (
    <>
      <ServicesGroup
        heading='Услуги'
        title={services.advertisement.title}
        items={services.advertisement.items}
      />
      <ServicesGroup
        type='development'
        theme='dark'
        images={services.development.images}
        title={services.development.title}
        items={services.development.items}
      />
      <TopProjects className={styles.topProjects} />
    </>
  )
}
