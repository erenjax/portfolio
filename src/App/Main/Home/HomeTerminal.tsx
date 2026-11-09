import { useEffect, useRef, useState } from "react"

const message = "I work between mock up and merge"
const editorLines = [
  { tag: "p", text: "as a user experience expert" },
  { tag: "p", text: "fluent in both" },
  { tag: "ul" },
  { tag: "li", text: "design", indent: true },
  { tag: "li", text: "implementation", indent: true },
  { tag: "ul", closing: true },
]

const HomeTerminal = (): JSX.Element => {
  const command = useRef<HTMLParagraphElement>(null)
  const [letters, setLetters] = useState(0)

  useEffect(() => {
    const element = command.current
    const home = element?.closest<HTMLElement>(".home-section")
    if (!element || !home) return
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)")
    let timer: number | undefined
    let frame = 0
    let started = false
    const showFullText = () => {
      window.clearInterval(timer)
      setLetters(message.length)
      started = true
    }
    const start = () => {
      started = true
      let count = 0
      timer = window.setInterval(() => {
        count += 1
        setLetters(count)
        if (count === message.length) window.clearInterval(timer)
      }, 65)
    }
    const checkReadiness = () => {
      frame = 0
      if (started) return
      const bounds = element.getBoundingClientRect()
      const homeBounds = home.getBoundingClientRect()
      const headerBottom =
        document.querySelector(".portfolio-header")?.getBoundingClientRect()
          .bottom ?? 0
      const fullyVisible =
        bounds.top >= headerBottom + 24 &&
        bounds.bottom <= window.innerHeight - 24
      const grayFillsScreen = homeBounds.bottom >= window.innerHeight
      if (
        fullyVisible &&
        grayFillsScreen &&
        home.dataset.transitionComplete === "true"
      )
        start()
    }
    const update = () => {
      if (!started && !frame) frame = requestAnimationFrame(checkReadiness)
    }
    const onMotionChange = () => {
      if (motion.matches) showFullText()
      else update()
    }
    if (motion.matches) showFullText()
    else update()
    window.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)
    home.addEventListener("home-transition-change", update)
    motion.addEventListener("change", onMotionChange)
    return () => {
      window.clearInterval(timer)
      cancelAnimationFrame(frame)
      window.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
      home.removeEventListener("home-transition-change", update)
      motion.removeEventListener("change", onMotionChange)
    }
  }, [])

  return (
    <>
      <section
        id="home-terminal"
        className="home-terminal"
        aria-label="From design to implementation"
      >
        <div
          className="home-editor"
          aria-label="As a user experience expert fluent in both design and implementation"
        >
          <div aria-hidden="true">
            {editorLines.map((line, index) => (
              <div className="home-editor-line" key={index}>
                <span className="home-line-number">{index + 1}</span>
                <code className={line.indent ? "home-code-indent" : undefined}>
                  {line.closing ? "</" : "<"}
                  <span className="home-code-tag">{line.tag}</span>
                  {">"}
                  {line.text && (
                    <>
                      {` ${line.text} </`}
                      <span className="home-code-tag">{line.tag}</span>
                      {">"}
                    </>
                  )}
                </code>
              </div>
            ))}
          </div>
        </div>
        <p
          ref={command}
          className="home-terminal-command"
          data-typing={letters < message.length}
        >
          <span className="sr-only">{message}</span>
          <span aria-hidden="true">
            <span className="home-terminal-prompt">
              <span className="home-terminal-bracket">[</span>
              <span className="home-terminal-user">emilyrenjackson</span>
              <span className="home-terminal-bracket">]</span>{" "}
              <span className="home-terminal-path">~</span>
              {" % "}
            </span>
            <span>{message.slice(0, letters)}</span>
            <span className="home-terminal-cursor" />
          </span>
        </p>
      </section>
    </>
  )
}
export default HomeTerminal
