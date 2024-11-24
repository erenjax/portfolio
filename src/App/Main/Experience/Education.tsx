const Education = (): JSX.Element => {
  return (
    <div className="quarter-section !justify-start">
      <p className="text-base w-fit h-fit">Education</p>
      <table>
        <tbody className="text-xs sm:text-sm">
          <tr>
            <td className="pr-3 sm:pr-6 py-2 sm:py-3">
              <div className="px-1 py-2 sm:p-4 border sm:border-2 border-customWhite rounded-full flex justify-center text-nowrap">
                May 2023
              </div>
            </td>
            <td className="py-3">
              <div className="font-semibold">
                Wesleyan University, Middletown CT
              </div>
              <div className="font-light">Bachelor of Arts</div>
              <div className="font-light">(Major) Computer Science</div>
              <div className="font-light">
                (Minor) Graphic Design and College of East Asian Studies
              </div>
            </td>
          </tr>
          <tr>
            <td className="pr-3 sm:pr-6 py-2 sm:py-3">
              <div className="px-2 py-2 sm:p-4 border sm:border-2 border-customWhite rounded-full flex justify-center text-nowrap">
                June 2019
              </div>
            </td>
            <td className="py-3">
              <div className="font-semibold">
                Phillips Academy Andover, Andover MA
              </div>
              <div className="font-light">
                Recipience of Phillips Academy Dance Award 2018-2019
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Education
