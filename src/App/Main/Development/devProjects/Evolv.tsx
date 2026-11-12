import { useRef, useState } from "react"
import "./Evolv.css"
import CaseStudy from "../../CaseStudy"
import { caseStudies, evolvRelatedWork } from "../../caseStudyContent"

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
const Evolv = (): JSX.Element => {
  const [selected, setSelected] = useState(0)
  const dialog = useRef<HTMLDialogElement>(null)
  const current = gallery[selected]
  const move = (direction: number) =>
    setSelected(index => (index + direction + gallery.length) % gallery.length)
  return (
    <CaseStudy
      content={caseStudies.evolv}
      hero={
        <img
          className="evolv-tablet"
          src="/Development/evolv/hero.jpg"
          alt="Evolv tablet showing connected security systems and System Ready status"
        />
      }
      secondary={
        <>
          <img
            className="evolv-tablet"
            src={asset("alert-queue")}
            alt="Light mode alert queue with security camera views"
            loading="lazy"
          />
          <img
            className="evolv-tablet"
            src={asset("settings")}
            alt="Dark mode tablet appearance, brightness, and volume settings"
            loading="lazy"
          />
        </>
      }
    >
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
      <section
        className="evolv-related-work case-study-narrative"
        aria-labelledby="evolv-related-title"
      >
        <h2 id="evolv-related-title">Related Evolv Work</h2>
        {evolvRelatedWork.map(project => (
          <section key={project.title}>
            <h3>{project.title}</h3>
            {project.paragraphs.map(paragraph => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        ))}
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
    </CaseStudy>
  )
}
export default Evolv
