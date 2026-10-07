import { useEffect, useRef } from "react"
import "./CursorGlow.css"

const CursorGlow = (): JSX.Element => {
  const glow = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = glow.current
    if (!element) return

    let frame = 0
    let x = 0
    let y = 0
    const move = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return
      x = event.clientX
      y = event.clientY
      if (frame) return
      frame = requestAnimationFrame(() => {
        element.style.transform = `translate3d(${x}px, ${y}px, 0)`
        element.classList.add("cursor-glow-visible")
        frame = 0
      })
    }
    const hide = () => {
      cancelAnimationFrame(frame)
      frame = 0
      element.classList.remove("cursor-glow-visible")
    }

    window.addEventListener("pointermove", move, { passive: true })
    document.documentElement.addEventListener("pointerleave", hide)
    window.addEventListener("blur", hide)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("pointermove", move)
      document.documentElement.removeEventListener("pointerleave", hide)
      window.removeEventListener("blur", hide)
    }
  }, [])

  return <div ref={glow} className="cursor-glow" aria-hidden="true" />
}

export default CursorGlow
