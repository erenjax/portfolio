import { useRef, useState } from "react"
import "./Evolv.css"
import useScrollReveal from "../../useScrollReveal"

const asset = (name: string) => `/Development/evolv/${name}.png`
const previewBounds = [
  [668, 73, 1212, 934],
  [698, 74, 1182, 932],
  [668, 73, 1212, 934],
  [668, 73, 1212, 934],
  [668, 73, 1212, 934],
  [668, 239, 1212, 601],
  [742, 121, 1138, 837],
  [668, 73, 1212, 934],
  [668, 73, 1212, 934],
]
const gallery = [
  { title: "Homepage", date: "January 2025" },
  { title: "Homepage Design Iterations", date: "January 2025" },
  { title: "Alert Queue", date: "February 2025" },
  { title: "User Role Icons", date: "February 2025" },
  { title: "Settings", date: "March 2025" },
  { title: "Loading Screen Designs", date: "September 2025" },
  { title: "Percentage Selection Designs", date: "October 2025" },
  { title: "Sensitivity Tuning Percentage Selection", date: "October 2025" },
  { title: "Random Screening Percentage Select", date: "October 2025" },
].map((item, index) => ({
  ...item,
  image: `slide-${index + 1}`,
  preview: previewBounds[index],
}))
const description =
  "When Evolv expanded from a single walk-through scanner to adding an x-ray system, the plan was to monitor both from the existing tablet interface unchanged. In a security setting, where usability is tied directly to safety, I saw real risks in that approach. As project lead for the tablet, I extended our API to communicate with multiple systems at once, reworked the client-side state management for incoming websocket messages, and made the case for a full redesign. Operators' fear of a steeper learning curve was the main concern, so I worked with product and engineering to understand it, then led the project through wireframes, prototypes, and regular stakeholder demos. The redesigned interface has launched to strong customer feedback, and I'm continuing to run user tests to learn how operators actually use it."

const Evolv = (): JSX.Element => {
  const heroImage = useScrollReveal()
  const [selected, setSelected] = useState(0)
  const dialog = useRef<HTMLDialogElement>(null)
  const current = gallery[selected]
  const move = (direction: number) =>
    setSelected(index => (index + direction + gallery.length) % gallery.length)
  return (
    <article className="evolv-page">
      <div className="evolv-content">
        <section className="evolv-hero" aria-labelledby="evolv-title">
          <h1 id="evolv-title">Security Operator Tablet</h1>
          <div className="evolv-metadata">
            <p>2025</p>
            <p>Evolv Technology</p>
            <p>Lead Designer and Developer</p>
          </div>
          <img
            ref={heroImage}
            className="evolv-tablet evolv-hero-tablet"
            src="/Development/evolv/hero.jpg"
            alt="Evolv tablet showing connected security systems and System Ready status"
          />
        </section>
        <p className="evolv-description">{description}</p>
        <section
          className="evolv-screens"
          aria-label="Tablet application screens"
        >
          <img
            className="evolv-tablet"
            src={asset("alert-queue")}
            alt="Light mode alert queue with security camera views"
          />
          <img
            className="evolv-tablet"
            src={asset("settings")}
            alt="Dark mode tablet appearance, brightness, and volume settings"
          />
        </section>
      </div>
      <section className="evolv-gallery" aria-labelledby="gallery-title">
        <h2 id="gallery-title">Design Process Gallery</h2>
        <div className="evolv-gallery-track">
          {gallery.map((item, index) => (
            <button
              className="evolv-card"
              key={item.title}
              onClick={() => {
                setSelected(index)
                dialog.current?.showModal()
              }}
              aria-label={`View slide ${index + 1}: ${item.title}`}
              aria-haspopup="dialog"
            >
              <span className="evolv-card-preview">
                <span
                  className="evolv-card-crop"
                  style={{
                    aspectRatio: `${item.preview[2]} / ${item.preview[3]}`,
                  }}
                >
                  <img
                    src={asset(item.image)}
                    alt={item.title}
                    loading="lazy"
                    style={{
                      width: `${(1920 / item.preview[2]) * 100}%`,
                      left: `${(-item.preview[0] / item.preview[2]) * 100}%`,
                      top: `${(-item.preview[1] / item.preview[3]) * 100}%`,
                    }}
                  />
                </span>
              </span>
              <span className="evolv-card-caption">
                <span title={item.title}>{item.title}</span>
                <span>Lead Developer</span>
                <span>{item.date}</span>
              </span>
            </button>
          ))}
        </div>
      </section>
      <dialog
        ref={dialog}
        className="evolv-dialog"
        onClick={event => {
          if (event.target === event.currentTarget) dialog.current?.close()
        }}
        onKeyDown={event => {
          if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            event.preventDefault()
            move(event.key === "ArrowLeft" ? -1 : 1)
          }
        }}
        aria-labelledby="detail-title"
      >
        <button
          className="evolv-close"
          onClick={() => dialog.current?.close()}
          aria-label="Close gallery detail"
        >
          ×
        </button>
        <h2 id="detail-title" className="evolv-slide-title">
          {current.title}
        </h2>
        <img
          className="evolv-slide"
          src={asset(current.image)}
          alt={`Slide ${selected + 1}: ${current.title}, Lead Developer, ${current.date}`}
          width={1920}
          height={1080}
        />
        <div className="evolv-detail-navigation">
          <button onClick={() => move(-1)} aria-label="Previous gallery item">
            <img
              className="evolv-arrow-previous"
              src="/Development/evolv/imgPolygon1.svg"
              alt=""
            />
          </button>
          <span aria-live="polite">
            {selected + 1} / {gallery.length}
          </span>
          <button onClick={() => move(1)} aria-label="Next gallery item">
            <img
              className="evolv-arrow-next"
              src="/Development/evolv/imgPolygon2.svg"
              alt=""
            />
          </button>
        </div>
      </dialog>
    </article>
  )
}
export default Evolv
