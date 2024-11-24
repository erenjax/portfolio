const Nordle = (): JSX.Element => {
  const handleOnClickSourceCode = (): void => {
    window.open("https://github.com/erenjax/evolv_breakableToy", "_blank")
  }
  const handleOnClickPlay = (): void => {
    window.open("https://nordlegame.netlify.app/", "_blank")
  }
  return (
    <div className="bg-accent-purple-dark w-full rounded-xl flex flex-col p-8 text-customWhite">
      <p className="text-base md:text-md font-light">Nordle</p>
      <div className="flex flex-col sm:flex-row w-full p-4 sm:p-16">
        <div className="flex flex-col justify-center">
          <div className="flex flex-col text-customWhite pb-8">
            <p className="text-sm sm:text-md font-light italic">
              Wordle, but with numbers!
            </p>
          </div>
          <button
            className="px-4 py-4 sm:px-16 sm:py-4 bg-accent-purple-light rounded-full border-4 border-accent-purple-light hover:bg-customWhite hover:text-accent-purple-light hover:ease-in duration-300 mb-4"
            onClick={handleOnClickPlay}
          >
            <p className="text-sm sm:text-md">Play the Game</p>
          </button>
          <button
            className="px-4 py-4 sm:px-16 sm:py-4 bg-accent-purple-light rounded-full border-4 border-accent-purple-light hover:bg-customWhite hover:text-accent-purple-light hover:ease-in duration-300"
            onClick={handleOnClickSourceCode}
          >
            <p className="text-sm sm:text-md">Source Code</p>
          </button>
        </div>
        <div className="grow flex flex-row justify-center pt-8 sm:pt-0">
          <img
            src="/Development/nordle_mobile.png"
            className="w-72"
            alt="nordle mobile"
          ></img>
        </div>
      </div>
      <div className="hidden sm:visible pt-8 sm:pt-16">
        <p className="text-sm sm:text-md p-4">Wireframes</p>
        <img
          className="rounded-md"
          src="/Development/nordle_wireframes.png"
          alt="nordle wireframes"
        ></img>
      </div>
    </div>
  )
}

export default Nordle
