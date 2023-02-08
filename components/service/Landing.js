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
import features from '/data/features'

export default function Landing() {
  return (
    <>
      <ServiceTop
        heading='Лендинги и промо-страницы'
        desc='Быстро и громко — расскажите о себе в интернете, затестите новую гипотизу или взбодрите ЦА уникальным предложением.'
        image='landing.svg'
      />
      <ServiceOffer />
      <ServiceMain>
        <ServiceFeatures
          heading='Лендинг подойдёт вам, если хотите...'
          items={features.landing}
        />
        <Divider />
        <ServiceTools type='development' />
        <Divider />
        <ServiceWork />
        <Divider />
        <ServiceProjects />
        <Divider />
        <ServiceAdvantages />
        <Divider />
        <ServicePrice />
      </ServiceMain>
      <ContactForm />
    </>
  )
}
