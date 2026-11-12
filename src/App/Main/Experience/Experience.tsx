import Education from "./Education"
import WorkExperience from "./WorkExperience"
import Skills from "./Skills"
import "./Experience.css"

const Experience = (): JSX.Element => (
  <section id="experience" className="experience-page" aria-label="Experience">
    <div className="experience-content">
      <WorkExperience />
      <Education />
      <Skills />
    </div>
  </section>
)
export default Experience
