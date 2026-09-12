import { useEffect, useRef } from "react"
import Education from "./Education"
import WorkExperience from "./WorkExperience"
import Skills from "./Skills"
import "./Experience.css"

const Experience = (): JSX.Element => {
  const page = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = page.current
    if (
      !element ||
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("experience-panel-visible")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0, rootMargin: "0px 0px -48px 0px" },
    )

    const panels = element.querySelectorAll(".experience-panel")
    element.classList.add("experience-reveals-active")
    panels.forEach(panel => observer.observe(panel))

    return () => {
      observer.disconnect()
      element.classList.remove("experience-reveals-active")
      panels.forEach(panel =>
        panel.classList.remove("experience-panel-visible"),
      )
    }
  }, [])

  return (
    <main
      ref={page}
      className="experience-page"
      aria-labelledby="experience-title"
    >
      <h1 id="experience-title" className="experience-title">
        Experience
      </h1>
      <div className="experience-content">
        <WorkExperience />
        <Education />
        <Skills />
      </div>
    </main>
  )
}

export default Experience
