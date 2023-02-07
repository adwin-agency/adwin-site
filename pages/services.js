import ServicesGroup from '../components/services/ServicesGroup'
import { advertisement, development } from '/data/services'

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
      <div style={{height: '1000px'}}></div>
    </>
  )
}
