import { ReactNode } from "react"
import "./CaseStudy.css"

export type CaseStudyContent = {
  title: string
  organization: string
  role: string
  skills: string[]
  year: string
  overview: string
  challenge: string
  impact: string
  process: string[]
  solution: string
}

type Props = {
  content: CaseStudyContent
  hero: ReactNode
  secondary: ReactNode
  children?: ReactNode
}

const CaseStudy = ({
  content,
  hero,
  secondary,
  children,
}: Props): JSX.Element => (
  <article className="case-study">
    <div className="case-study-hero">{hero}</div>
    <section
      className="case-study-overview"
      aria-label={`${content.title} overview`}
    >
      <header>
        <p className="case-study-label">Overview</p>
        <h1>{content.title}</h1>
      </header>
      <div className="case-study-columns">
        <div className="case-study-narrative">
          <p>{content.overview}</p>
          <section>
            <h2>The Challenge</h2>
            <p>{content.challenge}</p>
          </section>
          <section>
            <h2>The Impact</h2>
            <p>{content.impact}</p>
          </section>
        </div>
        <dl className="case-study-metadata">
          <div>
            <dt>Organization</dt>
            <dd>{content.organization}</dd>
          </div>
          <div>
            <dt>Role</dt>
            <dd>{content.role}</dd>
          </div>
          <div>
            <dt>Skills</dt>
            <dd>
              <ul>
                {content.skills.map(skill => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </dd>
          </div>
          <div>
            <dt>Year</dt>
            <dd>{content.year}</dd>
          </div>
        </dl>
      </div>
    </section>
    <div className="case-study-secondary">{secondary}</div>
    <div className="case-study-narrative case-study-details">
      <section>
        <h2>The Process</h2>
        {content.process.map(paragraph => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>
      <section>
        <h2>The Solution</h2>
        <p>{content.solution}</p>
      </section>
    </div>
    {children && <div className="case-study-extras">{children}</div>}
  </article>
)
export default CaseStudy
