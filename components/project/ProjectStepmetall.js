import ProjectTop from './ProjectTop'
import StepmetallAbout from './stepmetall/StepmetallAbout'
import StepmetallAdaptive from './stepmetall/StepmetallAdaptive'
import StepmetallDesign from './stepmetall/StepmetallDesign'
import StepmetallKit from './stepmetall/StepmetallKit'
import StepmetallProto from './stepmetall/StepmetallProto'
import StepmetallResults from './stepmetall/StepmetallResults'
import OtherProjects from './OtherProjects'

export default function ProjectStepmetall() {
  return (
    <>
      <ProjectTop name='stepmetall' />
      <StepmetallAbout />
      <StepmetallProto />
      <StepmetallKit />
      <StepmetallDesign />
      <StepmetallAdaptive />
      <StepmetallResults />
      <OtherProjects />
    </>
  )
}
