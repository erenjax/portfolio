import { useRef } from "react"
import useHomeTransition from "./useHomeTransition"
import HomeTerminal from "./HomeTerminal"
import HomeCursorChat from "./HomeCursorChat"
import "../ScrollReveal.css"
import "./Home.css"

const Home = (): JSX.Element => {
  const home = useRef<HTMLElement>(null)
  useHomeTransition(home)
  return (
    <section
      ref={home}
      id="home"
      className="home-section"
      aria-labelledby="home-title"
    >
      <div className="home-page">
        <div className="hero-heading">
          <div className="load-reveal home-title-entry">
            <span className="design-label">Header</span>
            <h1 id="home-title" className="selection-box">
              Design
              <br />
              Engineer
            </h1>
          </div>
        </div>
        <div className="hero-detail">
          <div className="hero-image">
            <div className="load-reveal home-image-entry">
              <span className="design-label">Image</span>
              <img
                src="/about_image.png"
                alt="Emily Ren Jackson"
                width={2321}
                height={3166}
              />
            </div>
          </div>
          <div className="hero-tagline">
            <div className="load-reveal home-tagline-entry">
              <span className="design-label">Tagline</span>
              <p className="selection-box">
                From pixels to product, I create across the whole pipeline as a
                user experience expert fluent in both design and implementation.
              </p>
            </div>
          </div>
        </div>
      </div>
      <HomeCursorChat />
      <HomeTerminal />
    </section>
  )
}
export default Home
