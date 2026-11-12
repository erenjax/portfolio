import { RefObject, useEffect } from "react"

const clamp = (value: number) => Math.min(1, Math.max(0, value))

const useHomeTransition = (home: RefObject<HTMLElement>): void => {
  useEffect(() => {
    const element = home.current
    const hero = element?.querySelector<HTMLElement>(".home-page")
    if (!element || !hero) return
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)")
    let frame = 0
    const render = () => {
      frame = 0
      const height = hero.offsetHeight
      const scroll = Math.max(0, -element.getBoundingClientRect().top)
      const progress = clamp((scroll / height - 0.03) / 0.67)
      document.documentElement.classList.toggle("home-purple-cursor", progress === 0)
      const compact = window.matchMedia("(max-width: 700px)").matches
      const eased = motion.matches
        ? Number(progress >= 0.5)
        : progress * progress * (3 - 2 * progress)
      const mix = (from: number[], to: number[]) =>
        from
          .map((value, index) =>
            Math.round(value + (to[index] - value) * eased),
          )
          .join(", ")
      element.style.setProperty(
        "--home-background",
        `rgb(${mix([247, 245, 232], [41, 40, 36])})`,
      )
      element.style.setProperty(
        "--home-foreground",
        `rgb(${mix([0, 0, 0], [255, 255, 255])})`,
      )
      element.style.setProperty(
        "--home-hero-opacity",
        `${1 - clamp((progress - 0.12) / 0.88)}`,
      )
      element.style.setProperty(
        "--home-tagline-opacity",
        `${1 - clamp((progress - (compact ? 0.2 : 0.28)) / (compact ? 0.45 : 0.72))}`,
      )
      const complete = String(progress === 1)
      if (element.dataset.transitionComplete !== complete) {
        element.dataset.transitionComplete = complete
        element.dispatchEvent(new Event("home-transition-change"))
      }
    }
    const update = () => {
      if (!frame) frame = requestAnimationFrame(render)
    }
    render()
    window.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)
    motion.addEventListener("change", update)
    return () => {
      document.documentElement.classList.remove("home-purple-cursor")
      cancelAnimationFrame(frame)
      window.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
      motion.removeEventListener("change", update)
    }
  }, [home])
}

export default useHomeTransition
