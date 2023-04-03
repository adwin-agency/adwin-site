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
import ServiceMethods from './ServiceMethods'

export default function Service({ category, type }) {
  return (
    <>
      <ServiceTop type={type} />
      <ServiceOffer />
      <ServiceMain category={category}>
        {category === 'development' && (
          <>
            <ServiceFeatures type={type} />
            <Divider className={styles.divider} />
            <ServiceTools type={type} />
            <Divider className={styles.divider} />
            <ServiceWork type={type} />
            <Divider className={styles.divider} />
            <ServiceProjects />
            <Divider className={styles.divider} />
            <ServiceAdvantages />
            <Divider className={styles.divider} />
            <ServicePrice category={category} type={type} />
          </>
        )}
        {category === 'advertisement' && (
          <>
            <ServiceFeatures type={type} />
            <Divider className={styles.divider} />
            <ServiceMethods category={category} />
            <Divider className={styles.divider} />
            <ServiceTools type={type} />
            <Divider className={styles.divider} />
            <ServiceAdvantages />
            <Divider className={styles.divider} />
            <ServiceProjects />
            <Divider className={styles.divider} />
            <ServiceWork type={type} />
            <Divider className={styles.divider} />
            <ServicePrice category={category} type={type} />
          </>
        )}
      </ServiceMain>
      <ContactForm />
    </>
  )
}
