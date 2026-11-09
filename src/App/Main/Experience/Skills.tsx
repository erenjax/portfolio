const Skills = (): JSX.Element => (
  <section
    className="experience-panel experience-skills"
    aria-labelledby="skills-title"
  >
    <h2 id="skills-title">&lt;software skills&gt;</h2>
    {[
      {
        title: "Technical",
        skills: ["React", "TypeScript", "Tailwind CSS", "Python", "RxJS"],
      },
      {
        title: "Design",
        skills: ["Figma", "Miro", "Illustrator", "Photoshop"],
      },
    ].map(group => (
      <div className="experience-skill-group" key={group.title}>
        <h3>{group.title}</h3>
        <ul>
          {group.skills.map(skill => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    ))}
  </section>
)
export default Skills
