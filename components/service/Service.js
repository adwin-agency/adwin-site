import ContactForm from '../app/ContactForm'
import Divider from '../ui/Divider'
import ServiceAdvantages from './ServiceAdvantages'
import ServiceFeatures from './ServiceFeatures'
import ServiceMain from './ServiceMain'
import ServiceOffer from './ServiceOffer'
import ServicePrice from './ServicePrice'
import ServiceProjects from './ServiceProjects'
import ServiceTools from './ServiceTools'
import ServiceTop from './ServiceTop'
import ServiceWork from './ServiceWork'
import styles from './Service.module.scss'

export default function Service({ category, type }) {
  return (
    <>
      <ServiceTop type={type} />
      <ServiceOffer />
      <ServiceMain>
        <ServiceFeatures type={type} />
        <Divider className={styles.divider} />
        <ServiceTools category={category} />
        <Divider className={styles.divider} />
        <ServiceWork category={category} />
        <Divider className={styles.divider} />
        <ServiceProjects />
        <Divider className={styles.divider} />
        <ServiceAdvantages />
        <Divider className={styles.divider} />
        <ServicePrice />
      </ServiceMain>
      <ContactForm />
    </>
  )
}
