import { RefObject, useEffect } from "react"

const colors = [
  [41, 40, 36],
  [245, 233, 255],
  [41, 40, 36],
  [247, 245, 232],
]
const sections = ["projects", "experience", "about"]

// Share one color across adjacent sections so their boundary never forms a seam.
const useBackgroundTransition = (page: RefObject<HTMLElement>): void => {
  useEffect(() => {
    const element = page.current
    if (!element) return
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)")
    let frame = 0
    const render = () => {
      frame = 0
      let background = colors[0]
      let foreground = 255
      let transitioning = false
      sections.forEach((id, index) => {
        const section = element.querySelector<HTMLElement>(`#${id}`)
        if (!section) return
        const top = section.getBoundingClientRect().top
        const progress = Math.min(
          1,
          Math.max(0, (window.innerHeight - top) / window.innerHeight),
        )
        if (progress === 0) return
        transitioning = true
        const eased = motion.matches
          ? Number(progress >= 0.5)
          : progress * progress * (3 - 2 * progress)
        background = colors[index].map((value, channel) =>
          Math.round(value + (colors[index + 1][channel] - value) * eased),
        )
        const from = index % 2 === 0 ? 255 : 0
        foreground = Math.round(from + (255 - 2 * from) * eased)
      })
      const color = `rgb(${background.join(", ")})`
      // Keep the incoming section on the same dark baseline even before it
      // enters the viewport; removing this value exposed its project-color fallback.
      element.style.setProperty("--page-background", color)
      element.style.setProperty(
        "--page-foreground",
        `rgb(${foreground}, ${foreground}, ${foreground})`,
      )
      if (transitioning) {
        element.style.setProperty("--home-exit-background", color)
        element.style.setProperty(
          "--home-exit-foreground",
          `rgb(${foreground}, ${foreground}, ${foreground})`,
        )
      } else {
        element.style.removeProperty("--home-exit-background")
        element.style.removeProperty("--home-exit-foreground")
      }
    }
    const update = () => {
      if (!frame) frame = requestAnimationFrame(render)
    }
    const observer = new ResizeObserver(update)
    observer.observe(element)
    render()
    window.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)
    motion.addEventListener("change", update)
    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
      window.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
      motion.removeEventListener("change", update)
    }
  }, [page])
}

export default useBackgroundTransition
