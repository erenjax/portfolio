const Skills = (): JSX.Element => {
  const reactLogoSrc = "/SoftwareSkillsLogos/ReactLogo.png"
  const typescriptLogoSrc = "/SoftwareSkillsLogos/TypescriptLogo.png"
  const tailwindLogoSrc = "/SoftwareSkillsLogos/TailwindLogo.png"
  const pythonLogoSrc = "/SoftwareSkillsLogos/PythonLogo.png"
  const rxjsLogoSrc = "/SoftwareSkillsLogos/RxJSLogo.png"
  const illustratorLogoSrc = "/SoftwareSkillsLogos/IllustratorLogo.png"
  const photoshopLogoSrc = "/SoftwareSkillsLogos/PhotoshopLogo.png"
  const figmaLogoSrc = "/SoftwareSkillsLogos/FigmaLogo.png"

  return (
    <div className="quarter-section">
      <p className="text-base pb-4">Software Skills</p>
      <div className="flex flex-col">
        <div className="flex flex-col">
          <p className="">Technical</p>
          <div className="flex flex-row sm:space-x-6 pb-4 pt-2 flex-wrap">
            <img
              className="px-2 py-2 sm:px-0 sm:py-0"
              src={reactLogoSrc}
              alt="React"
            />
            <img
              className="px-2 py-2 sm:px-0 sm:py-0"
              src={typescriptLogoSrc}
              alt="Typescript"
            />
            <img
              className="px-2 py-2 sm:px-0 sm:py-0"
              src={tailwindLogoSrc}
              alt="Tailwind"
            />
            <img
              className="px-2 py-2 sm:px-0 sm:py-0"
              src={pythonLogoSrc}
              alt="Python"
            />
            <img
              className="px-2 py-2 sm:px-0 sm:py-0"
              src={rxjsLogoSrc}
              alt="RxJS"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <p>Design</p>
          <div className="flex flex-row sm:space-x-6 pb-4 pt-2">
            <img
              className="px-2 py-2 sm:px-0 sm:py-0"
              src={figmaLogoSrc}
              alt="Figma"
            />
            <img
              className="px-2 py-2 sm:px-0 sm:py-0"
              src={illustratorLogoSrc}
              alt="Figma"
            />
            <img
              className="px-2 py-2 sm:px-0 sm:py-0"
              src={photoshopLogoSrc}
              alt="Figma"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
