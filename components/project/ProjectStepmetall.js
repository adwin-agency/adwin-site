import ProjectTop from './ProjectTop'
import StepmetallAbout from './stepmetall/StepmetallAbout'
import StepmetallKit from './stepmetall/StepmetallKit'
import StepmetallProto from './stepmetall/StepmetallProto'

export default function ProjectStepmetall() {
  return (
    <>
      <ProjectTop name='stepmetall' />
      <StepmetallAbout />
      <StepmetallProto />
      <StepmetallKit />
    </>
  )
}
