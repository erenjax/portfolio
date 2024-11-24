const Evolv = (): JSX.Element => {
  const handleOnClickEvolv = (): void => {
    window.open("https://evolv.com/", "_blank")
  }

  return (
    <div className="bg-accent-purple-dark w-full rounded-xl flex flex-col p-8 text-customWhite">
      <p className="text-base md:text-md font-light">Evolv</p>
      <div className="flex flex-col sm:flex-row w-full p-4 sm:space-x-4">
        <div className="flex flex-col justify-center">
          <div className="flex flex-col text-customWhite pb-8">
            <p className="text-sm sm:text-md font-light italic pl-4">
              Digital Product Developer
            </p>
            <div className="text-base text-wrap pl-8">
              <ul>
                <li className="list-disc">
                  Designed and implemented new features for a user facing React
                  tablet application using typescript and tailwind
                </li>
                <li className="list-disc">
                  Designed UX wireframes and mackups, including a full product
                  redesign
                </li>
                <li className="list-disc">
                  Built and improved features through iterative development by
                  conducting regular demos and user tests
                </li>
                <li className="list-disc">
                  Maintained and updated codebases keeping up to date with
                  modern best practices
                </li>
                <li className="list-disc">
                  Managed project development and timelines including regularly
                  communicating across teams
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="grow flex flex-row justify-center pt-8 sm:pt-0 w-full">
          <img
            src="/Development/tablet_ar.png"
            className="w-[537px]"
            alt="nordle mobile"
          ></img>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row p-4 justify-between">
        <div className="flex flex-row justify-center pt-8 sm:pt-0 w-fit">
          <img
            src="/Development/system_with_tablets.png"
            className="w-[537px]"
            alt="nordle mobile"
          ></img>
        </div>
        <div className="flex flex-row items-center justify-center w-fit sm:w-1/2">
          <button
            className="px-4 py-4 sm:px-16 sm:py-4 bg-accent-purple-light rounded-full border-4 border-accent-purple-light hover:bg-customWhite hover:text-accent-purple-light hover:ease-in duration-300 h-fit"
            onClick={handleOnClickEvolv}
          >
            <p className="text-sm sm:text-md">About Evolv</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Evolv
