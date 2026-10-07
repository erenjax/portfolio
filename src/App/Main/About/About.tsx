import { blurb } from "./blurb"
import useScrollReveal from "../useScrollReveal"
import "./About.css"

const About = (): JSX.Element => {
  const image = useScrollReveal()
  const body = useScrollReveal<HTMLParagraphElement>()

  return (
    <div className="about-page min-h-screen">
      <h1 className="about-title">About</h1>

      <div className="about-content text-md text-accent-blue">
        <img
          ref={image}
          className="about-config-image"
          src="/config.png"
          alt="Emily at Config beside a Figma installation"
          width={3928}
          height={2125}
        />
        <p
          ref={body}
          className="text-customWhite text-sm lg:text-base self-center text-justify md:text-left"
        >
          {blurb}
        </p>
      </div>
    </div>
  )
}

export default About
