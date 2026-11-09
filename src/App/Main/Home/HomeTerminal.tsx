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
    if (!element) return
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)")
    let timer: number | undefined
    let visible = false
    const stop = () => {
      window.clearInterval(timer)
      timer = undefined
    }
    const start = () => {
      stop()
      if (motion.matches) {
        setLetters(message.length)
        return
      }
      setLetters(0)
      let count = 0
      timer = window.setInterval(() => {
        count += 1
        setLetters(count)
        if (count === message.length) stop()
      }, 65)
    }
    const observer = new IntersectionObserver(([entry]) => {
      const inView = entry.isIntersecting
      if (inView && !visible) start()
      else if (!inView) stop()
      visible = inView
    })
    const onMotionChange = () => {
      if (motion.matches) {
        stop()
        setLetters(message.length)
      } else if (visible) {
        start()
      }
    }
    if (motion.matches) setLetters(message.length)
    observer.observe(element)
    motion.addEventListener("change", onMotionChange)
    return () => {
      stop()
      observer.disconnect()
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
