import { blurb } from "./blurb"

const About = (): JSX.Element => {
  return (
    <div className="flex flex-col w-screen bg-customBlack min-h-screen">
      <div className="flex w-full justify-center md:pb-8">
        <div className="flex w-fit bg-accent-purple-dark py-4 px-24">
          <p className="text-xl text-customWhite">About</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row space-y-8 sm:space-x-16 px-4 px-16 lg:px-48 py-8">
        <img
          src="/about_image.png"
          alt="Emily"
          className="w-[16rem] md:w-[24rem] lg:w-[32rem] h-auto rounded-xl self-center"
        />
        <p className="text-customWhite text-sm lg:text-xl self-center">
          {blurb}
        </p>
      </div>
    </div>
  )
}

export default About
