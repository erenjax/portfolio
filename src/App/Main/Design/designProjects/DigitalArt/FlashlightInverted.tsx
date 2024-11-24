const FlashlightInverted = (): JSX.Element => {
  const handleOnClickSourceCode = (): void => {
    window.open("https://github.com/erenjax/digital-art", "_blank")
  }

  return (
    <div className="flex flex-row justify-between w-full p-16">
      <div className="flex flex-col justify-center">
        <div className="flex flex-col text-customWhite pb-8">
          <p className="text-md font-md">flashlight.py</p>
          <p className="text-md font-light italic">Python pygame</p>
        </div>
        <button
          className="px-16 py-4 bg-accent-purple-light rounded-full border-4 border-accent-purple-light hover:bg-customWhite hover:text-accent-purple-light hover:ease-in duration-300"
          onClick={handleOnClickSourceCode}
        >
          <p className="text-md">Source Code</p>
        </button>
      </div>
      <img
        src="/Design/flashlight_inverted_recording.gif"
        className="w-[634px]"
        alt="flashlight_inverted gif"
      ></img>
    </div>
  )
}

export default FlashlightInverted
