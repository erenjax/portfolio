import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Outlet, useLocation } from "react-router-dom"

const Design = (): JSX.Element => {
  const navigate = useNavigate()
  const location = useLocation()
  console.log(location.pathname)

  const [isProjectOpen, setIsProjectOpen] = useState(false)

  useEffect(() => {
    if (location.pathname === "/design") {
      setIsProjectOpen(false)
    } else {
      setIsProjectOpen(true)
    }
  }, [location.pathname])

  const handleOnClickPhotography = (): void => {
    setIsProjectOpen(true)
    navigate("photography")
  }
  const handleOnClickGraphicDesign = (): void => {
    setIsProjectOpen(true)
    navigate("graphicDesign")
  }
  const handleOnClickDigitalArt = (): void => {
    setIsProjectOpen(true)
    navigate("digitalArt")
  }

  const handleOnClickTitle = (): void => {
    setIsProjectOpen(false)
    navigate("/design")
  }

  return (
    <div className="flex flex-col w-screen bg-customBlack min-h-screen px-6 md:px-16 xl:px-[174px] overflow-auto">
      <button
        className="flex w-full justify-start py-4"
        onClick={handleOnClickTitle}
      >
        <p className="text-md md:text-lg text-customWhite">Design Projects</p>
      </button>
      {!isProjectOpen && (
        <div className="flex flex-row text-customWhite text-base py-4">
          <div className="flex flex-col w-1/2 space-y-[32px]">
            <button
              className="group/graphic quarter-section"
              onClick={handleOnClickGraphicDesign}
            >
              <p className="group-hover/graphic:-translate-y-10 group-hover/graphic:ease-in duration-300">
                Graphic Design
              </p>
            </button>
            <button
              className="group/photography quarter-section"
              onClick={handleOnClickPhotography}
            >
              <p className="group-hover/photography:-translate-y-10 group-hover/graphic:ease-in duration-300">
                Photography
              </p>
            </button>
          </div>
          <div className="flex flex-col w-1/2 space-y-[32px]">
            <button
              className="group/digital quarter-section"
              onClick={handleOnClickDigitalArt}
            >
              <p className="group-hover/digital:-translate-y-10 group-hover/graphic:ease-in duration-300">
                Digital Art
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

export default Design
