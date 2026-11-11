import { useEffect, useRef, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { projects } from "./projects"
import "./ProjectsSection.css"

const motionQuery =
  "(min-width: 701px) and (prefers-reduced-motion: no-preference)"
const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value))

const Projects = (): JSX.Element => {
  const section = useRef<HTMLElement>(null)
  const cards = useRef<(HTMLAnchorElement | null)[]>([])
  const { search, hash } = useLocation()
  const [animated, setAnimated] = useState(
    () => window.matchMedia(motionQuery).matches,
  )
  const [active, setActive] = useState(0)

  useEffect(() => {
    const media = window.matchMedia(motionQuery)
    const update = () => setAnimated(media.matches)
    update()
    media.addEventListener("change", update)
    return () => media.removeEventListener("change", update)
  }, [])

  useEffect(() => {
    if (!animated || !section.current) return
    const element = section.current
    let frame = 0
    let current = 0
    let target = 0
    let previousTime = 0
    let initialized = false
    const render = (time: number) => {
      const delta = previousTime ? Math.min(time - previousTime, 64) : 16
      previousTime = time
      current += (target - current) * (1 - Math.exp(-delta / 110))
      if (Math.abs(target - current) < 0.001) current = target
      setActive(Math.round(current))
      cards.current.forEach((card, index) => {
        if (!card) return
        const distance = index - current
        const away = Math.min(Math.abs(distance), 1)
        card.style.transform = `translateY(${distance * 138}%) scale(${1 - away * 0.08})`
        card.style.opacity = `${1 - away * 0.65}`
        card.style.filter = `grayscale(${away})`
      })
      if (current !== target) frame = requestAnimationFrame(render)
      else {
        frame = 0
        previousTime = 0
      }
    }
    const update = () => {
      const bounds = element.getBoundingClientRect()
      const travel = Math.max(1, element.offsetHeight - window.innerHeight)
      target = clamp(-bounds.top / travel, 0, 1) * (projects.length - 1)
      if (!initialized) {
        current = target
        initialized = true
      }
      if (!frame) frame = requestAnimationFrame(render)
    }
    update()
    window.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [animated])

  useEffect(() => {
    if (hash !== "#projects") return
    const projectId = new URLSearchParams(search).get("project")
    const index = projects.findIndex(
      project => project.to.split("/").pop() === projectId,
    )
    if (index < 0) return
    const frame = requestAnimationFrame(() => {
      const element = section.current
      if (!element) return
      if (animated) {
        const start = element.getBoundingClientRect().top + window.scrollY
        const travel = Math.max(0, element.offsetHeight - window.innerHeight)
        window.scrollTo({
          top: start + (index / (projects.length - 1)) * travel,
          behavior: "instant" as ScrollBehavior,
        })
      } else {
        document.getElementById(`project-${projectId}`)?.scrollIntoView({
          behavior: "instant" as ScrollBehavior,
        })
      }
    })
    return () => cancelAnimationFrame(frame)
  }, [animated, search, hash])

  const goToProject = (index: number) => {
    const element = section.current
    if (!element) return
    const start = element.getBoundingClientRect().top + window.scrollY
    const travel = element.offsetHeight - window.innerHeight
    window.scrollTo({
      top: start + (index / (projects.length - 1)) * travel,
      behavior: "smooth",
    })
  }

  return (
    <section
      ref={section}
      id="projects"
      className={`projects-page ${animated ? "projects-animated" : ""}`}
      aria-label="Projects"
    >
      {animated ? (
        <div className="projects-stage">
          <div className="projects-stage-label">Selected projects</div>
          <div className="projects-copy-stack">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className={`projects-copy ${active === index ? "is-active" : ""}`}
                aria-hidden={active !== index}
              >
                <span className="projects-number">
                  {String(index + 1).padStart(2, "0")} /{" "}
                  {String(projects.length).padStart(2, "0")}
                </span>
                <h2>{project.title}</h2>
                <p>
                  {project.category}
                  {project.date && ` · ${project.date}`}
                </p>
                <Link to={project.to} tabIndex={active === index ? 0 : -1}>
                  Open case study <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
          <div className="projects-gallery">
            <div className="projects-gallery-plane">
              {projects.map((project, index) => (
                <Link
                  key={project.title}
                  ref={node => {
                    cards.current[index] = node
                  }}
                  className={`projects-gallery-card ${active === index ? "is-active" : ""}`}
                  to={project.to}
                  aria-label={`Open ${project.title} case study`}
                  aria-hidden={active !== index}
                  tabIndex={active === index ? 0 : -1}
                >
                  <img src={project.image} alt={`${project.title} preview`} />
                </Link>
              ))}
            </div>
          </div>
          <div className="projects-controls" aria-label="Choose a project">
            {projects.map((project, index) => (
              <button
                key={project.title}
                onClick={() => goToProject(index)}
                aria-label={`Show ${project.title}`}
                aria-pressed={active === index}
              >
                <span />
              </button>
            ))}
          </div>
          <span className="projects-scroll-hint" aria-hidden="true">
            Scroll to explore ↓
          </span>
        </div>
      ) : (
        projects.map(project => (
          <article
            className="project-feature"
            key={project.title}
            id={`project-${project.to.split("/").pop()}`}
          >
            <img
              className="project-shape project-shape-top"
              src="/figma/project-top.svg"
              alt=""
            />
            <div className="project-feature-copy">
              <h2>{project.title}</h2>
              <p>
                {project.category}
                {project.date && ` · ${project.date}`}
              </p>
              <Link to={project.to}>
                Open case study <span aria-hidden="true">→</span>
              </Link>
            </div>
            <Link
              className="project-feature-art"
              to={project.to}
              aria-label={`Open ${project.title} case study`}
            >
              <img
                className="project-shape"
                src="/figma/project-main.svg"
                alt=""
              />
              <img
                className="project-preview"
                src={project.image}
                alt={`${project.title} preview`}
                loading="lazy"
              />
            </Link>
            <img
              className="project-shape project-shape-bottom"
              src="/figma/project-bottom.svg"
              alt=""
            />
          </article>
        ))
      )}
    </section>
  )
}
export default Projects
