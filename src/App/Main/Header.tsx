import cn from "classnames"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import { projectPages } from "./projects"

const Header = (): JSX.Element => {
  const navigate = useNavigate()
  const location = useLocation()
  const [isProjectMenuOpen, setIsProjectMenuOpen] = useState(false)
  const projectMenu = useRef<HTMLDivElement>(null)
  const projectTrigger = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    setIsProjectMenuOpen(false)
  }, [location.pathname, location.search])

  useEffect(() => {
    if (!isProjectMenuOpen) return
    const closeOutside = (event: PointerEvent) => {
      if (!projectMenu.current?.contains(event.target as Node)) {
        setIsProjectMenuOpen(false)
      }
    }
    document.addEventListener("pointerdown", closeOutside)
    return () => document.removeEventListener("pointerdown", closeOutside)
  }, [isProjectMenuOpen])

  const handleOnClickHome = (): void => {
    navigate("/")
  }
  const handleMouseEnterProjects = (): void => {
    setIsProjectMenuOpen(true)
  }
  const handleMouseLeaveProjects = (): void => {
    setIsProjectMenuOpen(false)
  }
  const handleOnClickAbout = (): void => {
    navigate("about")
  }
  const handleOnClickExperience = (): void => {
    navigate("experience")
  }

  const hoverStyle = "hover:text-accent-purple-light"

  return (
    <div className="flex flex-row w-screen top-0 justify-between items-center bg-customBlack px-4 md:px-16 lg:px-24 py-8 text-customWhite">
      <button className="w-fit h-fit" onClick={handleOnClickHome}>
        <div className="w-12 h-12 ml-4 rounded-full bg-customWhite visible sm:hidden text-accent-purple-light text-center flex justify-center font-semibold text-md">
          E
        </div>
        <p className={cn("text-base sm:text-2xl hidden sm:inline", hoverStyle)}>
          Emily Ren Jackson
        </p>
      </button>
      <div className="flex flex-row space-x-4 md:space-x-8">
        <div
          ref={projectMenu}
          className="relative"
          onMouseEnter={handleMouseEnterProjects}
          onMouseLeave={handleMouseLeaveProjects}
          onBlur={event => {
            if (!event.currentTarget.contains(event.relatedTarget as Node)) {
              setIsProjectMenuOpen(false)
            }
          }}
          onKeyDown={event => {
            if (event.key === "Escape") {
              setIsProjectMenuOpen(false)
              projectTrigger.current?.focus()
            }
          }}
        >
          <button
            ref={projectTrigger}
            className="w-fit h-fit"
            onClick={() => setIsProjectMenuOpen(open => !open)}
            aria-expanded={isProjectMenuOpen}
            aria-controls="project-dropdown"
          >
            <p className={cn(hoverStyle)}>Projects</p>
          </button>
          {isProjectMenuOpen && (
            <div className="absolute z-20 pt-4 -translate-x-1/2 left-1/2 w-max max-w-[calc(100vw-32px)]">
              <nav
                id="project-dropdown"
                aria-label="Projects"
                className="bg-customBlack px-6 py-4 flex flex-col border-2 border-accent-purple-light rounded-lg items-start gap-2 max-h-[70vh] overflow-y-auto text-sm md:text-base"
              >
                {projectPages.map(project => (
                  <Link
                    key={project.title}
                    to={project.to}
                    onClick={() => setIsProjectMenuOpen(false)}
                    className={cn(
                      hoverStyle,
                      "block py-1 whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-purple-light",
                    )}
                  >
                    {project.title}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>
        <button className="w-fit h-fit" onClick={handleOnClickExperience}>
          <p className={cn(hoverStyle)}>Experience</p>
        </button>
        <button className="w-fit h-fit" onClick={handleOnClickAbout}>
          <p className={cn(hoverStyle)}>About</p>
        </button>
      </div>
    </div>
  )
}

export default Header
