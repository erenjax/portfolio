import cn from "classnames"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

const Header = (): JSX.Element => {
  const navigate = useNavigate()
  const [isProjectMenuOpen, setIsProjectMenuOpen] = useState(false)

  const handleOnClickHome = (): void => {
    navigate("/")
  }
  const handleMouseEnterProjects = (): void => {
    setIsProjectMenuOpen(true)
  }
  const handleMouseLeaveProjects = (): void => {
    setIsProjectMenuOpen(false)
  }
  const handleOnClickDev = (): void => {
    setIsProjectMenuOpen(false)
    navigate("development")
  }
  const handleOnClickDesign = (): void => {
    setIsProjectMenuOpen(false)
    navigate("design")
  }
  const handleOnClickAbout = (): void => {
    navigate("about")
  }
  const handleOnClickExperience = (): void => {
    navigate("experience")
  }

  const hoverStyle = "hover:text-accent-purple-light"

  return (
    <div className="flex flex-row w-screen top-0 bg-customBlack justify-between px-4 md:px-16 lg:px-24 py-8 items-center text-customWhite">
      <button className="w-fit h-fit" onClick={handleOnClickHome}>
        <div className="w-12 h-12 ml-4 rounded-full bg-customWhite visible sm:hidden text-accent-purple-light text-center flex justify-center font-semibold text-md">
          E
        </div>
        <p className={cn("text-base sm:text-2xl hidden sm:inline", hoverStyle)}>
          Emily Ren Jackson
        </p>
      </button>
      <div className="flex flex-row space-x-4 md:space-x-8">
        <div className="relative" onMouseEnter={handleMouseEnterProjects}>
          <button className="w-fit h-fit">
            <p className={cn(hoverStyle)}>Projects</p>
          </button>
          {isProjectMenuOpen && (
            <div
              className={cn(
                "absolute z-10 bg-customBlack w-fit px-8 py-4 flex flex-col border-2 border-accent-purple-light rounded-lg -translate-x-1/2 left-1/2 space-y-2 mt-4 items-start duration-300 ease-in-out transition-all transform",
                isProjectMenuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8",
              )}
              onMouseLeave={handleMouseLeaveProjects}
            >
              <button onClick={handleOnClickDev}>
                <p className={cn(hoverStyle, "text-nowrap")}>
                  Frontend Development
                </p>
              </button>
              <button onClick={handleOnClickDesign}>
                <p className={cn(hoverStyle)}>Design</p>
              </button>
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
