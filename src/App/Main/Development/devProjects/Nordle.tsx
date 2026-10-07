import "./Nordle.css"
import useScrollReveal from "../../useScrollReveal"

const Nordle = (): JSX.Element => {
  const heroImage = useScrollReveal<HTMLDivElement>()
  return (
    <article className="nordle-page">
      <div className="nordle-content">
        <section className="nordle-hero" aria-labelledby="nordle-title">
          <header className="nordle-heading">
            <h1 id="nordle-title">Nordle</h1>
            <div className="nordle-metadata">
              <p>2025</p>
              <p>Lead Designer and Developer</p>
            </div>
          </header>
          <div ref={heroImage} className="nordle-desktop nordle-laptop">
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
          <p className="nordle-description">
            Wordle, but with numbers! Nordle is a number-guessing game where
            players try to crack a four-digit code. Each guess receives
            color-coded feedback: red means a digit is not in the code, yellow
            means it belongs in a different position, and green means it is
            correct and in the right position. The interface brings together the
            guessing controls, number of tries, game instructions, and music
            settings, with layouts for both desktop and mobile screens.
          </p>
          <div className="nordle-actions">
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
        </section>
        <section
          className="nordle-instructions"
          aria-label="Desktop instructions screen"
        >
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
        <section
          className="nordle-mobile-screens"
          aria-label="Mobile gameplay screens"
        >
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
        </section>
      </div>
    </article>
  )
}

export default Nordle
