const skillGroups = [
  {
    title: "Technical",
    skills: [
      { name: "React", image: "ReactLogo.png" },
      { name: "TypeScript", image: "TypescriptLogo.png" },
      { name: "Tailwind CSS", image: "TailwindLogo.png" },
      { name: "Python", image: "PythonLogo.png" },
      { name: "RxJS", image: "RxJSLogo.png" },
    ],
  },
  {
    title: "Design",
    skills: [
      { name: "Adobe Illustrator", image: "IllustratorLogo.png" },
      { name: "Adobe Photoshop", image: "PhotoshopLogo.png" },
      { name: "Figma", image: "FigmaLogo.png" },
    ],
  },
]

const Skills = (): JSX.Element => (
  <section
    className="experience-panel experience-skills"
    aria-labelledby="skills-title"
  >
    <h2 id="skills-title">Software Skills</h2>
    {skillGroups.map(group => (
      <div className="experience-skill-group" key={group.title}>
        <h3>{group.title}</h3>
        <div className="experience-skill-icons">
          {group.skills.map(skill =>
            skill.name === "React" ? (
              <span className="experience-react-icon" key={skill.name}>
                <img
                  src={`/SoftwareSkillsLogos/${skill.image}`}
                  alt={skill.name}
                  title={skill.name}
                  width={56}
                  height={56}
                />
              </span>
            ) : (
              <img
                key={skill.name}
                src={`/SoftwareSkillsLogos/${skill.image}`}
                alt={skill.name}
                title={skill.name}
                width={72}
                height={72}
              />
            ),
          )}
        </div>
      </div>
    ))}
  </section>
)

export default Skills
