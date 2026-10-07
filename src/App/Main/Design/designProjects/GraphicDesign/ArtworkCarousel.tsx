import { CSSProperties, useRef, useState } from "react"
import "./ArtworkCarousel.css"

type Artwork = { src: string; alt: string }
const ArtworkCarousel = ({
  title,
  images,
}: {
  title: string
  images: Artwork[]
}): JSX.Element => {
  const [index, setIndex] = useState(0)
  const [previous, setPrevious] = useState<number | null>(null)
  const [direction, setDirection] = useState(1)
  const start = useRef<number | null>(null)
  const move = (step: number) => {
    if (previous !== null) return
    setDirection(step)
    setPrevious(index)
    setIndex((index + step + images.length) % images.length)
  }
  return (
    <div
      className="artwork-carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label={`${title} artwork`}
      onKeyDown={event => {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          event.preventDefault()
          move(event.key === "ArrowLeft" ? -1 : 1)
        }
      }}
    >
      <div
        className="artwork-carousel-stage"
        style={{ "--slide-direction": direction } as CSSProperties}
        onPointerDown={event => {
          start.current = event.clientX
        }}
        onPointerUp={event => {
          if (
            start.current !== null &&
            Math.abs(event.clientX - start.current) > 40
          )
            move(event.clientX < start.current ? 1 : -1)
          start.current = null
        }}
        onPointerCancel={() => {
          start.current = null
        }}
      >
        {previous !== null && (
          <img
            className="artwork-slide-out"
            src={images[previous].src}
            alt=""
            aria-hidden="true"
            width={2200}
            height={1700}
            draggable={false}
          />
        )}
        <img
          key={index}
          className={previous !== null ? "artwork-slide-in" : ""}
          src={images[index].src}
          alt={images[index].alt}
          width={2200}
          height={1700}
          draggable={false}
          onAnimationEnd={() => setPrevious(null)}
        />
      </div>
      <div className="artwork-carousel-controls">
        <button
          type="button"
          onClick={() => move(-1)}
          disabled={previous !== null}
          aria-label={`Previous ${title} image`}
        >
          ←
        </button>
        <p aria-live="polite" aria-atomic="true">
          {index + 1} / {images.length}
          <span>{images[index].alt}</span>
        </p>
        <button
          type="button"
          onClick={() => move(1)}
          disabled={previous !== null}
          aria-label={`Next ${title} image`}
        >
          →
        </button>
      </div>
    </div>
  )
}
export default ArtworkCarousel
