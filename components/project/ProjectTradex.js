import ProjectTop from './ProjectTop'
import TradexAbout from './tradex/TradexAbout'
import TradexDesign from './tradex/TradexDesign'
import TradexProto from './tradex/TradexProto'

export default function ProjectStepmetall() {
  return (
    <>
      <ProjectTop name='tradex' />
      <TradexAbout />
      <TradexProto />
      <TradexDesign />
    </>
  )
}
