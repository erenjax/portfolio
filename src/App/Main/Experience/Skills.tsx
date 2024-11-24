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
          <div className="flex flex-row space-x-6 pb-4 pt-2">
            <img src={reactLogoSrc} alt="React" />
            <img src={typescriptLogoSrc} alt="Typescript" />
            <img src={tailwindLogoSrc} alt="Tailwind" />
            <img src={pythonLogoSrc} alt="Python" />
            <img src={rxjsLogoSrc} alt="RxJS" />
          </div>
        </div>
        <div className="flex flex-col">
          <p>Design</p>
          <div className="flex flex-row space-x-6 pb-4 pt-2">
            <img src={figmaLogoSrc} alt="Figma" />
            <img src={illustratorLogoSrc} alt="Figma" />
            <img src={photoshopLogoSrc} alt="Figma" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
