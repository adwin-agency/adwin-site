import GrandclinicAbout from './grandclinic/GrandclinicAbout'
import GrandclinicDetails from './grandclinic/GrandclinicDetails'
import GrandclinicIntro from './grandclinic/GrandclinicIntro'
import GrandclinicResults from './grandclinic/GrandclinicResults'
import OtherProjects from './OtherProjects'

export default function ProjectGrandclinic() {
  return (
    <>
      <GrandclinicIntro />
      <GrandclinicAbout />
      <GrandclinicDetails />
      <GrandclinicResults />
      <OtherProjects />
    </>
  )
}
