const Education = (): JSX.Element => {
  return (
    <div className="bg-accent-purple-dark w-[675px] h-[339px] rounded-xl flex flex-col p-8">
      <p className="text-base w-fit h-fit">Education</p>
      <table>
        <tbody className="text-sm">
          <tr>
            <td className="pr-6 py-3">
              <div className="p-4 border-2 border-customWhite rounded-full flex justify-center">
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
            <td className="pr-6 py-3">
              <div className="p-4 border-2 border-customWhite rounded-full flex justify-center">
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
