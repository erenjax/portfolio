import { Link } from "react-router-dom"
import { workHistory } from "./workHistory"

const WorkExperience = (): JSX.Element => (
  <section
    className="experience-panel experience-work"
    aria-labelledby="work-experience-title"
  >
    <h2 id="work-experience-title">Work Experience</h2>
    <div className="experience-rows">
      {workHistory.slice(0, 4).map(item => (
        <div className="experience-row" key={item.date}>
          <p className="experience-date">{item.date}</p>
          <div>
            {item.link ? (
              <Link className="experience-organization" to={item.link}>
                {item.organization}
              </Link>
            ) : (
              <h3 className="experience-organization">{item.organization}</h3>
            )}
            <p>{item.role}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
)

export default WorkExperience
