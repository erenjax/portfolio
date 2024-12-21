import cn from "classnames"
import { useNavigate } from "react-router-dom"

const Home = (): JSX.Element => {
  const navigate = useNavigate()

  const handleOnClickExperience = (): void => {
    navigate("experience")
  }
  const handleOnClickAbout = (): void => {
    navigate("about")
  }

  const handleOnClickDesign = (): void => {
    navigate("design")
  }

  const handleOnClickDevelopment = (): void => {
    navigate("development")
  }

  const projectsAnimation =
    "group-hover/projects:translate-y-0  duration-2000 transition-all ease-in-out"
  const subProjectTextClass =
    "translate-y-[200%] sm:translate-y-[100%] group-hover/projects:visible opacity-0 group-hover/projects:opacity-100 pl-8 hover:text-customBlack sm:hover:text-accent-purple-light"

  return (
    <div className="flex flex-col w-screen h-screen bg-customBlack text-customWhite px-6 md:px-16 xl:px-[141px] py-16">
      <div className="flex w-full h-1/2 justify-center">
        <p className="self-center text-base md:text-lg">Emily Ren Jackson</p>
      </div>

      <div className="flex flex-row w-full h-1/2 text-base sm:text-md">
        <div className="flex w-1/2 h-full bg-accent-blue p-8 rounded-xl hidden sm:inline"></div>
        <div className="flex flex-col w-full sm:w-1/2">
          <div className="flex flex-row h-1/2">
            <button
              className="sm-customWhite-button-animation sm:customWhite-button-animation"
              onClick={handleOnClickExperience}
            >
              <p className="self-end">experience</p>
            </button>
            <button
              className="sm-accent-purple-dark-button-animation sm:accent-purple-dark-button-animation"
              onClick={handleOnClickAbout}
            >
              <p className="self-end">about</p>
            </button>
          </div>
          <button
            className={cn(
              "group/projects sm-accent-purple-light-button-animation sm:accent-purple-light-button-animation",
            )}
          >
            <p
              className={cn(
                "translate-y-[130%] lg:translate-y-[200%] group-hover/projects:opacity-0 xl:group-hover/projects:opacity-100",
                projectsAnimation,
              )}
            >
              projects
            </p>
            <button onClick={handleOnClickDevelopment}>
              <p
                className={cn(
                  "text-sm md:text-sm lg:text-base",
                  subProjectTextClass,
                  projectsAnimation,
                )}
              >
                frontend development
              </p>
            </button>
            <button onClick={handleOnClickDesign}>
              <p
                className={cn(
                  "text-sm md:text-sm lg:text-base",
                  subProjectTextClass,
                  projectsAnimation,
                )}
              >
                design
              </p>
            </button>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
