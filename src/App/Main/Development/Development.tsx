import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Outlet } from "react-router-dom"

const Development = (): JSX.Element => {
  const navigate = useNavigate()

  const [isProjectOpen, setIsProjectOpen] = useState(false)

  const handleOnClickEvolv = (): void => {
    setIsProjectOpen(true)
    navigate("evolv")
  }
  const handleOnClickNordle = (): void => {
    setIsProjectOpen(true)
    navigate("nordle")
  }

  const handleOnClickTitle = (): void => {
    setIsProjectOpen(false)
  }
  return (
    <div className="flex flex-col w-screen bg-customBlack min-h-screen px-6 md:px-16 xl:px-[174px] overflow-auto">
      <button
        className="flex w-full justify-start py-4"
        onClick={handleOnClickTitle}
      >
        <p className="text-md md:text-lg text-customWhite">
          Frontend Development Projects
        </p>
      </button>
      {!isProjectOpen && (
        <div className="flex flex-col sm:flex-row text-customWhite text-sm md:text-base space-y-8 sm:space-y-0  sm:space-x-8 p-4">
          <div className="flex flex-col md:flex-row h-1/2 space-y-8 md:space-x-8 md:space-y-0">
            <button
              className="group/graphic quarter-section"
              onClick={handleOnClickEvolv}
            >
              <p className="group-hover/graphic:-translate-y-10 group-hover/graphic:ease-in duration-300">
                Evolv Work
              </p>
            </button>
          </div>
          <div className="flex flex-col md:flex-row h-1/2 space-y-8 md:space-x-8 md:space-y-0">
            <button
              className="group/digital quarter-section"
              onClick={handleOnClickNordle}
            >
              <p className="group-hover/digital:-translate-y-10 group-hover/graphic:ease-in duration-300">
                Nordle
              </p>
            </button>
          </div>
        </div>
      )}

      {isProjectOpen && (
        <div className="flex flex-col w-full pt-8">
          <Outlet />
        </div>
      )}
    </div>
  )
}

export default Development
