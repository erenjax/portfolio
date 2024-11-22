import { useNavigate } from "react-router-dom"

const Home = (): JSX.Element => {
  const navigate = useNavigate()

  const handleOnClickProjects = (): void => {
    navigate("projects")
  }
  const handleOnClickAdditional = (): void => {
    navigate("additional")
  }
  const handleOnClickAbout = (): void => {
    navigate("about")
  }
  const handleOnClickContact = (): void => {
    navigate("contact")
  }

  return (
    <div className="flex flex-col w-screen h-screen bg-customBlack text-customWhite px-32 py-16">
      <div className="flex w-full h-1/2 text-2xl justify-center">
        <p className="self-center">Emily Ren Jackson</p>
      </div>

      <div className="flex flex-row w-full h-1/2 text-lg">
        <button
          className="flex w-1/2 h-full rounded-xl bg-accent-blue p-8"
          onClick={handleOnClickProjects}
        >
          <p className="self-end">All Projects</p>
        </button>
        <div className="flex flex-col w-1/2">
          <div className="flex flex-row h-1/2">
            <button
              className="flex w-1/2 h-full bg-customWhite rounded-xl text-customBlack p-8"
              onClick={handleOnClickAdditional}
            >
              <p className="self-end">Additional</p>
            </button>
            <button
              className="flex w-1/2 h-full bg-accent-purple-dark rounded-xl p-8"
              onClick={handleOnClickAbout}
            >
              <p className="self-end">About</p>
            </button>
          </div>
          <button
            className="flex h-1/2 w-full bg-accent-purple-light rounded-xl p-8"
            onClick={handleOnClickContact}
          >
            <p className="self-end">Contact</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
