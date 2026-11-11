import { useEffect, useRef } from "react"
import { useLocation } from "react-router-dom"
import Home from "./Home"
import useBackgroundTransition from "./useBackgroundTransition"
import Projects from "./ProjectsSection"
import Experience from "./Experience"
import About from "./About"
import { openResume } from "./Experience/workHistory"

const Portfolio = (): JSX.Element => {
  const page = useRef<HTMLElement>(null)
  useBackgroundTransition(page)
  return (
    <main ref={page} className="portfolio-page">
      <Home />
      <Projects />
      <Experience />
      <section id="about" aria-label="About">
        <About />
        <div className="about-resume">
          <button onClick={openResume}>Resume ↗</button>
        </div>
      </section>
    </main>
  )
}
export const ScrollToLocation = (): null => {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (pathname === "/" && hash) {
        document.getElementById(hash.slice(1))?.scrollIntoView({
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
            .matches
            ? "auto"
            : "smooth",
        })
      } else if (!hash) {
        window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior })
      }
    })
    return () => cancelAnimationFrame(frame)
  }, [pathname, hash])
  return null
}
export default Portfolio
