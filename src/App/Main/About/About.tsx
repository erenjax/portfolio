import { blurb } from "./blurb"

const About = (): JSX.Element => {
  return (
    <div className="flex flex-col w-screen bg-customBlack min-h-screen px-6 md:px-16 xl:px-[174px]">
      <div className="flex w-full justify-start">
        <p className="text-md sm:text-lg text-customWhite">About</p>
      </div>

      <div className="flex flex-col md:flex-row space-y-8 sm:space-x-16 md:space-y-0 py-8">
        <img
          src="/about_image.png"
          alt="Emily"
          className="w-[16rem] md:w-[24rem] lg:w-[32rem] h-auto rounded-xl self-center"
        />
        <div className="flex flex-col text-md text-accent-blue space-y-16">
          <p>Hello, my name is Emily!</p>
          <p className="text-customWhite text-sm lg:text-base self-center text-justify md:text-left">
            {blurb}
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
