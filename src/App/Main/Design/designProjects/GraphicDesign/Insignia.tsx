import CaseStudy from "../../../CaseStudy"
import { caseStudies } from "../../../caseStudyContent"

const images = [
  {
    src: "/Design/insignia/title.png",
    alt: "Insignia title artwork",
  },
  {
    src: "/Design/insignia/sketches.png",
    alt: "20 hand-drawn insignia sketches",
  },
  {
    src: "/Design/insignia/line_drawings.png",
    alt: "10 vector line drawings",
  },
  {
    src: "/Design/insignia/color.png",
    alt: "Five full-color insignia versions",
  },
  {
    src: "/Design/insignia/grayscale.png",
    alt: "Final grayscale insignia",
  },
]

const Insignia = (): JSX.Element => (
  <CaseStudy
    content={caseStudies.insignia}
    hero={<img src={images[0].src} alt={images[0].alt} />}
    secondary={
      <>
        {images.slice(1).map(image => (
          <img
            className="case-study-artwork"
            key={image.src}
            src={image.src}
            alt={image.alt}
            loading="lazy"
          />
        ))}
      </>
    }
  />
)
export default Insignia
