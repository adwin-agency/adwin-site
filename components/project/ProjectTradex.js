import OtherProjects from './OtherProjects'
import ProjectTop from './ProjectTop'
import TradexAbout from './tradex/TradexAbout'
import TradexAdaptive from './tradex/TradexAdaptive'
import TradexDesign from './tradex/TradexDesign'
import TradexForms from './tradex/TradexForms'
import TradexProto from './tradex/TradexProto'
import TradexResults from './tradex/TradexResults'

export default function ProjectStepmetall() {
  return (
    <>
      <ProjectTop name='tradex' />
      <TradexAbout />
      <TradexProto />
      <TradexDesign />
      <TradexAdaptive />
      <TradexForms />
      <TradexResults />
      <OtherProjects />
    </>
  )
}
