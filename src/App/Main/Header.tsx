import { Link, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import "./ScrollReveal.css"
import { projects } from "./projects"

const sections = ["home", "projects", "experience", "about"]

const Header = (): JSX.Element => {
  const location = useLocation()
  const [active, setActive] = useState("home")
  const [terminalVisible, setTerminalVisible] = useState(false)
  useEffect(() => {
    if (location.pathname !== "/") return
    const update = () => {
      const terminal = document
        .getElementById("home-terminal")
        ?.getBoundingClientRect()
      const hero = document.querySelector(".home-page")?.getBoundingClientRect()
      setTerminalVisible(
        Boolean(
          hero &&
            hero.top <= -hero.height * 0.36 &&
            terminal &&
            terminal.bottom > 140,
        ),
      )
      setActive(
        sections
          .filter(id => {
            const section = document.getElementById(id)
            return section && section.getBoundingClientRect().top <= 160
          })
          .pop() || "home",
      )
    }
    update()
    window.addEventListener("scroll", update, { passive: true })
    return () => window.removeEventListener("scroll", update)
  }, [location.pathname])

  if (location.pathname !== "/") {
    const project = projects.find(
      project =>
        project.to === location.pathname ||
        (project.title === "Evolv" &&
          location.pathname === "/development/evolv"),
    )
    const projectId = project?.to.split("/").pop()
    const backTo = projectId ? `/?project=${projectId}#projects` : "/#projects"
    return (
      <header className="project-back-header">
        <Link className="project-back-link" to={backTo}>
          <span aria-hidden="true">←</span> Back to projects
        </Link>
      </header>
    )
  }

  return (
    <header
      data-section={location.pathname === "/" ? active : undefined}
      className={`portfolio-header ${location.pathname === "/" && (active === "experience" || terminalVisible) ? "portfolio-header-dark" : ""}`}
    >
      <nav className="load-reveal" aria-label="Main navigation">
        {sections.map(section => (
          <Link
            key={section}
            to={`/#${section}`}
            aria-current={
              location.pathname === "/" && active === section
                ? "location"
                : undefined
            }
            onClick={() => {
              if (location.pathname === "/" && location.hash === `#${section}`)
                document.getElementById(section)?.scrollIntoView({
                  behavior: window.matchMedia(
                    "(prefers-reduced-motion: reduce)",
                  ).matches
                    ? "auto"
                    : "smooth",
                })
            }}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </Link>
        ))}
      </nav>
    </header>
  )
}
export default Header
