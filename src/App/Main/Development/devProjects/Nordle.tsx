import CaseStudy from "../../CaseStudy"
import { caseStudies } from "../../caseStudyContent"
import "./Nordle.css"
const Nordle = (): JSX.Element => (
  <CaseStudy
    content={caseStudies.nordle}
    hero={
      <div className="nordle-desktop nordle-laptop">
        <img src="/Development/nordle/laptop.png" alt="" />
        <div className="nordle-game-screen">
          <img
            src="/Development/nordle/game-desktop.png"
            width={1075}
            height={642}
            alt="Nordle running on a laptop, with a four-digit guess and color-coded feedback"
          />
        </div>
      </div>
    }
    secondary={
      <>
        {" "}
        <img
          src="/Development/nordle/game-mobile.png"
          alt="Nordle mobile gameplay with a four-digit guess"
          width={380}
          height={780}
          loading="lazy"
        />
        <img
          src="/Development/nordle/win-mobile.png"
          alt="Nordle mobile success screen displaying You Win and the number of tries"
          width={380}
          height={780}
          loading="lazy"
        />
      </>
    }
  >
    <section aria-label="Desktop instructions screen">
      {" "}
      <div className="nordle-laptop">
        <img src="/Development/nordle/laptop.png" alt="" />
        <img
          className="nordle-laptop-screen"
          src="/Development/nordle/instructions-screen.png"
          alt="Nordle's How to Play dialog explaining guesses and the red, yellow, and green feedback indicators"
          loading="lazy"
        />
      </div>
    </section>
    <div className="case-study-actions">
      <a
        href="https://github.com/erenjax/evolv_breakableToy"
        target="_blank"
        rel="noopener noreferrer"
      >
        Source Code
      </a>
      <a
        href="https://nordlegame.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Play Game
      </a>
    </div>
  </CaseStudy>
)
export default Nordle
