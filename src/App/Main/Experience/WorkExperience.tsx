const WorkExperience = (): JSX.Element => {
  const handleOnClickResume = (): void => {
    window.open("/EmilyRenJackson_Resume.pdf")
  }

  return (
    <div className="bg-accent-purple-dark w-[675px] h-[709px] rounded-xl flex flex-col p-8">
      <p className="text-base w-fit h-fit pb-4">Work Experience</p>
      <table>
        <tbody className="text-sm">
          <tr>
            <td className="pr-6 py-3">
              <div className="p-4 border-2 border-customWhite rounded-full flex justify-center">
                Sept 2023 - Present
              </div>
            </td>
            <td className="py-3">
              <div className="font-semibold">Evolv Technology, Waltham MA</div>
              <div className="font-light">Digital Product Developer</div>
            </td>
          </tr>
          <tr>
            <td className="pr-6 py-3">
              <div className="p-4 border-2 border-customWhite rounded-full flex justify-center">
                2020 - 2023
              </div>
            </td>
            <td className="py-3">
              <div className="font-semibold">
                Wesleyan University Olin Library, Middletown CT
              </div>
              <div className="font-light">Marketing Assistant</div>
            </td>
          </tr>
          <tr>
            <td className="pr-6 py-3">
              <div className="p-4 border-2 border-customWhite rounded-full flex justify-center">
                Summer 2022
              </div>
            </td>
            <td className="py-3">
              <div className="font-semibold">Evolv Technology, Waltham MA</div>
              <div className="font-light">Digital Product Developer Intern</div>
            </td>
          </tr>
          <tr>
            <td className="pr-6 py-3">
              <div className="p-4 border-2 border-customWhite rounded-full flex justify-center text-xs">
                Sept 2021 - Dec 2021
              </div>
            </td>
            <td className="py-3">
              <div className="font-semibold">
                Wesleyan University, Middletown CT
              </div>
              <div className="font-light">
                Computer Science Course Assistant
              </div>
            </td>
          </tr>
          <tr>
            <td className="pr-6 py-3">
              <div className="p-4 border-2 border-customWhite rounded-full flex justify-center">
                Summer 2020
              </div>
            </td>
            <td className="py-3">
              <div className="font-semibold">
                Falmouth Community Television Sutio, Falmouth MA
              </div>
              <div className="font-light">Communications and Media Intern</div>
            </td>
          </tr>
        </tbody>
      </table>
      <button
        className="rounded-full bg-accent-purple-light px-16 py-4 w-fit self-center my-16 hover:bg-customWhite hover:text-accent-purple-light border-4 border-accent-purple-light hover:ease-in duration-300"
        onClick={handleOnClickResume}
      >
        Resume
      </button>
    </div>
  )
}

export default WorkExperience
