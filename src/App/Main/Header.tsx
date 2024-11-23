import { useNavigate } from "react-router-dom"

const Header = (): JSX.Element => {
  const navigate = useNavigate()

  const handleOnClickHome = (): void => {
    navigate("/")
  }

  return (
    <div className="flex flex-row w-screen top-0 bg-customBlack justify-between px-4 md:px-16 lg:px-24 py-8 items-center text-customWhite">
      <button className="w-fit h-fit" onClick={handleOnClickHome}>
        <p className="text-base md:text-2xl">Emily Ren Jackson</p>
      </button>
      <div className="flex flex-row space-x-4 md:space-x-8">
        <p>Projects</p>
        <p>Contact</p>
        <p>About</p>
      </div>
    </div>
  )
}

export default Header
