import { useEffect, useRef } from "react"
import "./ScrollReveal.css"

const useScrollReveal = <T extends HTMLElement = HTMLImageElement>() => {
  const ref = useRef<T>(null)

  useEffect(() => {
    const element = ref.current
    if (
      !element ||
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return

    const observer = new IntersectionObserver(
      entries => {
        if (entries.some(entry => entry.isIntersecting)) {
          element.classList.add("scroll-reveal-visible")
          observer.disconnect()
        }
      },
      { threshold: 0, rootMargin: "0px 0px -48px 0px" },
    )

    element.classList.add("scroll-reveal-active")
    observer.observe(element)
    return () => {
      observer.disconnect()
      element.classList.remove("scroll-reveal-active", "scroll-reveal-visible")
    }
  }, [])

  return ref
}

export default useScrollReveal
