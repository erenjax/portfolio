import { useEffect, useRef } from "react"
import { createPortal } from "react-dom"

const HomeCursorChat = (): JSX.Element => {
  const anchor = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = anchor.current
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
        element.dataset.visible = "true"
        frame = 0
      })
    }
    const hide = () => {
      cancelAnimationFrame(frame)
      frame = 0
      element.dataset.visible = "false"
    }
    window.addEventListener("pointermove", move, { passive: true })
    document.documentElement.addEventListener("pointerleave", hide)
    window.addEventListener("blur", hide)
    return () => {
      hide()
      window.removeEventListener("pointermove", move)
      document.documentElement.removeEventListener("pointerleave", hide)
      window.removeEventListener("blur", hide)
    }
  }, [])

  return createPortal(
    <div ref={anchor} className="home-cursor-chat-anchor" aria-hidden="true">
      <img className="home-cursor-fade-pointer" src="/figma-cursor.svg" alt="" />
      <span className="home-figma-chat">
        <span className="home-figma-name">Emily</span>
        <span className="home-figma-message">Hello :)</span>
      </span>
    </div>,
    document.body,
  )
}

export default HomeCursorChat
