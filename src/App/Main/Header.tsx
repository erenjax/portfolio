const Header = (): JSX.Element => {
  return (
    <div className="flex flex-row w-screen top-0 bg-customBlack justify-between px-24 py-8 items-center text-customWhite">
      <p className="text-2xl">Emily Ren Jackson</p>
      <div className="flex flex-row space-x-8">
        <p>Projects</p>
        <p>Contact</p>
        <p>About</p>
      </div>
    </div>
  )
}

export default Header
