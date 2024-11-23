import { useNavigate } from "react-router-dom"

const Home = (): JSX.Element => {
  const navigate = useNavigate()

  const handleOnClickProjects = (): void => {
    navigate("projects")
  }
  const handleOnClickExperience = (): void => {
    navigate("experience")
  }
  const handleOnClickAbout = (): void => {
    navigate("about")
  }

  return (
    <div className="flex flex-col w-screen h-screen bg-customBlack text-customWhite px-32 py-16">
      <div className="flex w-full h-1/2 justify-center">
        <p className="self-center text-lg">Emily Ren Jackson</p>
      </div>

      <div className="flex flex-row w-full h-1/2 text-md">
        <div className="flex w-1/2 h-full rounded-xl bg-accent-blue p-8"></div>
        <div className="flex flex-col w-1/2">
          <div className="flex flex-row h-1/2">
            <button
              className="flex w-1/2 h-full bg-customWhite rounded-xl text-customBlack p-8 hover:bg-customBlack border-4 border-customWhite hover:text-customWhite hover:ease-in duration-300"
              onClick={handleOnClickExperience}
            >
              <p className="self-end">experience</p>
            </button>
            <button
              className="flex w-1/2 h-full bg-accent-purple-dark rounded-xl p-8 hover:bg-customBlack border-4 border-accent-purple-dark hover:ease-in duration-300"
              onClick={handleOnClickAbout}
            >
              <p className="self-end">about</p>
            </button>
          </div>
          <button className="group/projects flex flex-col justify-end h-1/2 w-full bg-accent-purple-light rounded-xl p-8 hover:ease-in duration-300 hover:bg-customBlack border-4 border-accent-purple-light">
            <p className="translate-y-[200%] group-hover/projects:translate-y-0 durration-2000 ease-in-out transition-all">
              projects
            </p>
            <p className="translate-y-[100%] group-hover/projects:translate-y-0 group-hover/projects:visible opacity-0 group-hover/projects:opacity-100 transition-all duration-2000 ease-in-out pl-8 hover:text-accent-purple-light">
              professional & semi professional
            </p>
            <p className="translate-y-[100%] group-hover/projects:translate-y-0 group-hover/projects:visible opacity-0 group-hover/projects:opacity-100 transition-all duration-2000 ease-in-out pl-8 hover:text-accent-purple-light">
              graphic design & digital art
            </p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
