const MovingMap = (): JSX.Element => {
  const handleOnClickSourceCode = (): void => {
    window.open("https://github.com/erenjax/digital-art", "_blank")
  }

  return (
    <div className="flex flex-col md:flex-row justify-between w-full p-2 sm:p-16">
      <div className="flex flex-col justify-center pb-8 sm:pb-0">
        <div className="flex flex-col text-customWhite pb-8">
          <p className="text-base sm:text-md font-md">Generative Landscape</p>
          <p className="text-base sm:text-md font-light italic">Processing</p>
        </div>
        <button
          className="px-16 py-4 bg-accent-purple-light rounded-full border-4 border-accent-purple-light hover:bg-customWhite hover:text-accent-purple-light hover:ease-in duration-300"
          onClick={handleOnClickSourceCode}
        >
          <p className="text-sm sm:text-md">Source Code</p>
        </button>
      </div>
      <img
        src="/Design/movingMapRecording.gif"
        className="w-[634px]"
        alt="Generative Landscape gif"
      ></img>
    </div>
  )
}

export default MovingMap
