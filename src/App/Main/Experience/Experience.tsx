import Education from "./Education"
import WorkExperience from "./WorkExperience"
import Skills from "./Skills"

const Experience = (): JSX.Element => {
  return (
    <div className="flex flex-col w-screen bg-customBlack min-h-screen px-6 md:px-16 xl:px-[174px]">
      <div className="flex w-full justify-start py-4">
        <p className="text-md sm:text-lg text-customWhite">Experience</p>
      </div>
      <div className="flex flex-col sm:flex-row text-customWhite py-4">
        <div className="flex flex-col sm:w-1/2 space-y-[32px]">
          <Education />
          <Skills />
        </div>
        <WorkExperience />
      </div>
    </div>
  )
}

export default Experience
