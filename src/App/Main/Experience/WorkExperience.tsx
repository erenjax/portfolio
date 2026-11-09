import { Link } from "react-router-dom"
import { workHistory } from "./workHistory"

const WorkExperience = (): JSX.Element => (
  <section
    className="experience-panel experience-work"
    aria-labelledby="work-experience-title"
  >
    <h2 id="work-experience-title">&lt;work experience&gt;</h2>
    <div className="experience-rows">
      {workHistory
        .filter(item => !item.role.includes("Course Assistant"))
        .map(item => (
          <div className="experience-row" key={item.date}>
            <p className="experience-date">{item.date}</p>
            <div>
              <h3 className="experience-role">{item.role}</h3>
              {item.link ? (
                <Link className="experience-organization" to={item.link}>
                  {item.organization}
                </Link>
              ) : (
                <p className="experience-organization">{item.organization}</p>
              )}
            </div>
          </div>
        ))}
    </div>
  </section>
)

export default WorkExperience
